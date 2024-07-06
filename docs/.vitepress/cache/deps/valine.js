import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// node_modules/valine/dist/Valine.min.js
var require_Valine_min = __commonJS({
  "node_modules/valine/dist/Valine.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t();
    }(exports, function() {
      return function(e) {
        function t(r) {
          if (n[r])
            return n[r].exports;
          var i = n[r] = { i: r, l: false, exports: {} };
          return e[r].call(i.exports, i, i.exports, t), i.l = true, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e2) {
          return e2;
        }, t.d = function(e2, n2, r) {
          t.o(e2, n2) || Object.defineProperty(e2, n2, { configurable: false, enumerable: true, get: r });
        }, t.n = function(e2) {
          var n2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return t.d(n2, "a", n2), n2;
        }, t.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, t.p = "", t(t.s = 108);
      }([function(e, t, n) {
        "use strict";
        var r = SyntaxError, i = Function, o = TypeError, a = function(e2) {
          try {
            return i('"use strict"; return (' + e2 + ").constructor;")();
          } catch (e3) {
          }
        }, u = Object.getOwnPropertyDescriptor;
        if (u)
          try {
            u({}, "");
          } catch (e2) {
            u = null;
          }
        var s = function() {
          throw new o();
        }, l = u ? function() {
          try {
            return arguments.callee, s;
          } catch (e2) {
            try {
              return u(arguments, "callee").get;
            } catch (e3) {
              return s;
            }
          }
        }() : s, c = n(22)(), f = Object.getPrototypeOf || function(e2) {
          return e2.__proto__;
        }, p = {}, d = "undefined" == typeof Uint8Array ? void 0 : f(Uint8Array), h = { "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": c ? f([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": p, "%AsyncGenerator%": p, "%AsyncGeneratorFunction%": p, "%AsyncIteratorPrototype%": p, "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics, "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry, "%Function%": i, "%GeneratorFunction%": p, "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": c ? f(f([][Symbol.iterator]())) : void 0, "%JSON%": "object" == typeof JSON ? JSON : void 0, "%Map%": "undefined" == typeof Map ? void 0 : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && c ? f((/* @__PURE__ */ new Map())[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? void 0 : Promise, "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? void 0 : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && c ? f((/* @__PURE__ */ new Set())[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": c ? f(""[Symbol.iterator]()) : void 0, "%Symbol%": c ? Symbol : void 0, "%SyntaxError%": r, "%ThrowTypeError%": l, "%TypedArray%": d, "%TypeError%": o, "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet }, v = function e2(t2) {
          var n2;
          if ("%AsyncFunction%" === t2)
            n2 = a("async function () {}");
          else if ("%GeneratorFunction%" === t2)
            n2 = a("function* () {}");
          else if ("%AsyncGeneratorFunction%" === t2)
            n2 = a("async function* () {}");
          else if ("%AsyncGenerator%" === t2) {
            var r2 = e2("%AsyncGeneratorFunction%");
            r2 && (n2 = r2.prototype);
          } else if ("%AsyncIteratorPrototype%" === t2) {
            var i2 = e2("%AsyncGenerator%");
            i2 && (n2 = f(i2.prototype));
          }
          return h[t2] = n2, n2;
        }, g = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, m = n(9), y = n(25), b = m.call(Function.call, Array.prototype.concat), D = m.call(Function.apply, Array.prototype.splice), x = m.call(Function.call, String.prototype.replace), w = m.call(Function.call, String.prototype.slice), A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, k = /\\(\\)?/g, E = function(e2) {
          var t2 = w(e2, 0, 1), n2 = w(e2, -1);
          if ("%" === t2 && "%" !== n2)
            throw new r("invalid intrinsic syntax, expected closing `%`");
          if ("%" === n2 && "%" !== t2)
            throw new r("invalid intrinsic syntax, expected opening `%`");
          var i2 = [];
          return x(e2, A, function(e3, t3, n3, r2) {
            i2[i2.length] = n3 ? x(r2, k, "$1") : t3 || e3;
          }), i2;
        }, F = function(e2, t2) {
          var n2, i2 = e2;
          if (y(g, i2) && (n2 = g[i2], i2 = "%" + n2[0] + "%"), y(h, i2)) {
            var a2 = h[i2];
            if (a2 === p && (a2 = v(i2)), void 0 === a2 && !t2)
              throw new o("intrinsic " + e2 + " exists, but is not available. Please file an issue!");
            return { alias: n2, name: i2, value: a2 };
          }
          throw new r("intrinsic " + e2 + " does not exist!");
        };
        e.exports = function(e2, t2) {
          if ("string" != typeof e2 || 0 === e2.length)
            throw new o("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof t2)
            throw new o('"allowMissing" argument must be a boolean');
          var n2 = E(e2), i2 = n2.length > 0 ? n2[0] : "", a2 = F("%" + i2 + "%", t2), s2 = a2.name, l2 = a2.value, c2 = false, f2 = a2.alias;
          f2 && (i2 = f2[0], D(n2, b([0, 1], f2)));
          for (var p2 = 1, d2 = true; p2 < n2.length; p2 += 1) {
            var v2 = n2[p2], g2 = w(v2, 0, 1), m2 = w(v2, -1);
            if (('"' === g2 || "'" === g2 || "`" === g2 || '"' === m2 || "'" === m2 || "`" === m2) && g2 !== m2)
              throw new r("property names with quotes must have matching quotes");
            if ("constructor" !== v2 && d2 || (c2 = true), i2 += "." + v2, s2 = "%" + i2 + "%", y(h, s2))
              l2 = h[s2];
            else if (null != l2) {
              if (!(v2 in l2)) {
                if (!t2)
                  throw new o("base intrinsic for " + e2 + " exists, but the property is not available.");
                return;
              }
              if (u && p2 + 1 >= n2.length) {
                var x2 = u(l2, v2);
                d2 = !!x2, l2 = d2 && "get" in x2 && !("originalValue" in x2.get) ? x2.get : l2[v2];
              } else
                d2 = y(l2, v2), l2 = l2[v2];
              d2 && !c2 && (h[s2] = l2);
            }
          }
          return l2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = n(4), o = i(r("String.prototype.indexOf"));
        e.exports = function(e2, t2) {
          var n2 = r(e2, !!t2);
          return "function" == typeof n2 && o(e2, ".prototype.") > -1 ? i(n2) : n2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(88), i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), o = Object.prototype.toString, a = Array.prototype.concat, u = Object.defineProperty, s = function(e2) {
          return "function" == typeof e2 && "[object Function]" === o.call(e2);
        }, l = u && function() {
          var e2 = {};
          try {
            u(e2, "x", { enumerable: false, value: e2 });
            for (var t2 in e2)
              return false;
            return e2.x === e2;
          } catch (e3) {
            return false;
          }
        }(), c = function(e2, t2, n2, r2) {
          (!(t2 in e2) || s(r2) && r2()) && (l ? u(e2, t2, { configurable: true, enumerable: false, value: n2, writable: true }) : e2[t2] = n2);
        }, f = function(e2, t2) {
          var n2 = arguments.length > 2 ? arguments[2] : {}, o2 = r(t2);
          i && (o2 = a.call(o2, Object.getOwnPropertySymbols(t2)));
          for (var u2 = 0; u2 < o2.length; u2 += 1)
            c(e2, o2[u2], t2[o2[u2]], n2[o2[u2]]);
        };
        f.supportsDescriptors = !!l, e.exports = f;
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        t.__esModule = true;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, o = n(85), a = r(o), u = n(49), s = r(u), l = n(46), c = r(l), f = n(48), p = r(f), d = n(45), h = r(d), v = document, g = navigator, m = /[&<>"'`\\]/g, y = RegExp(m.source), b = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g, D = RegExp(b.source), x = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#x60;", "\\": "&#x5c;" }, w = {};
        for (var A in x)
          w[x[A]] = A;
        var k = null;
        Array.prototype.forEach || (Array.prototype.forEach = function(e2, t2) {
          var n2, r2;
          if (null == this)
            throw new TypeError(" this is null or not defined");
          var i2 = Object(this), o2 = i2.length >>> 0;
          if ("function" != typeof e2)
            throw new TypeError(e2 + " is not a function");
          for (arguments.length > 1 && (n2 = t2), r2 = 0; r2 < o2; ) {
            var a2;
            r2 in i2 && (a2 = i2[r2], e2.call(n2, a2, r2, i2)), r2++;
          }
        }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), String.prototype.trim || (String.prototype.trim = function() {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }), (0, a.default)(s.default.fn, { prepend: function(e2) {
          return e2 instanceof HTMLElement || (e2 = e2[0]), this.forEach(function(t2) {
            t2.insertAdjacentElement("afterBegin", e2);
          }), this;
        }, append: function(e2) {
          return e2 instanceof HTMLElement || (e2 = e2[0]), this.forEach(function(t2) {
            t2.insertAdjacentElement("beforeEnd", e2);
          }), this;
        }, remove: function() {
          return this.forEach(function(e2) {
            try {
              e2.parentNode.removeChild(e2);
            } catch (e3) {
            }
          }), this;
        }, find: function(e2) {
          return (0, s.default)(e2, this);
        }, show: function() {
          return this.forEach(function(e2) {
            e2.style.display = "block";
          }), this;
        }, hide: function() {
          return this.forEach(function(e2) {
            e2.style.display = "none";
          }), this;
        }, on: function(e2, t2, n2) {
          return s.default.fn.off(e2, t2, n2), this.forEach(function(r2) {
            e2.split(" ").forEach(function(e3) {
              r2.addEventListener ? r2.addEventListener(e3, t2, n2 || false) : r2.attachEvent ? r2.attachEvent("on" + e3, t2) : r2["on" + e3] = t2;
            });
          }), this;
        }, off: function(e2, t2, n2) {
          return this.forEach(function(r2) {
            e2.split(" ").forEach(function(e3) {
              r2.removeEventListener ? r2.removeEventListener(e3, t2, n2 || false) : r2.detachEvent ? r2.detachEvent("on" + e3, t2) : r2["on" + e3] = null;
            });
          }), this;
        }, html: function(e2) {
          return void 0 !== e2 ? (this.forEach(function(t2) {
            t2.innerHTML = e2;
          }), this) : this[0].innerHTML;
        }, text: function(e2) {
          return void 0 !== e2 ? (this.forEach(function(t2) {
            t2.innerText = e2;
          }), this) : this[0].innerText;
        }, empty: function(e2) {
          return e2 = e2 || 0, this.forEach(function(t2) {
            setTimeout(function(e3) {
              t2.innerText = "";
            }, e2);
          }), this;
        }, val: function(e2) {
          return void 0 !== e2 ? (this.forEach(function(t2) {
            t2.value = e2;
          }), this) : this[0].value || "";
        }, attr: function() {
          var e2 = arguments;
          if ("object" == i(arguments[0])) {
            var t2 = arguments[0], n2 = this;
            return Object.keys(t2).forEach(function(e3) {
              n2.forEach(function(n3) {
                n3.setAttribute(e3, t2[e3]);
              });
            }), this;
          }
          return "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) || "" : (this.forEach(function(t3) {
            t3.setAttribute(e2[0], e2[1]);
          }), this);
        }, removeAttr: function(e2) {
          return this.forEach(function(t2) {
            var n2, r2 = 0, i2 = e2 && e2.match(/[^\x20\t\r\n\f\*\/\\]+/g);
            if (i2 && 1 === t2.nodeType)
              for (; n2 = i2[r2++]; )
                t2.removeAttribute(n2);
          }), this;
        }, hasClass: function(e2) {
          return !!this[0] && new RegExp("(\\s|^)" + e2 + "(\\s|$)").test(this[0].getAttribute("class"));
        }, addClass: function(e2) {
          return this.forEach(function(t2) {
            var n2 = (0, s.default)(t2), r2 = n2.attr("class");
            n2.hasClass(e2) || n2.attr("class", r2 += " " + e2);
          }), this;
        }, removeClass: function(e2) {
          return this.forEach(function(t2) {
            var n2 = (0, s.default)(t2), r2 = n2.attr("class");
            if (n2.hasClass(e2)) {
              var i2 = new RegExp("(\\s|^)" + e2 + "(\\s|$)");
              n2.attr("class", r2.replace(i2, ""));
            }
          }), this;
        } }), (0, a.default)(s.default, { extend: a.default, noop: function() {
        }, navi: g, ua: g.userAgent, lang: g.language || g.languages[0], detect: c.default, store: p.default, escape: function(e2) {
          return e2 && y.test(e2) ? e2.replace(m, function(e3) {
            return x[e3];
          }) : e2;
        }, unescape: function(e2) {
          return e2 && D.test(e2) ? e2.replace(b, function(e3) {
            return w[e3];
          }) : e2;
        }, dynamicLoadSource: function(e2, t2) {
          if ((0, s.default)('script[src="' + e2 + '"]').length)
            t2 && t2();
          else {
            var n2 = v.createElement("script");
            n2.onload = n2.onreadystatechange = function() {
              var e3 = this;
              e3.onload = e3.onreadystatechange = null, t2 && t2(), (0, s.default)(n2).remove();
            }, n2.async = true, n2.setAttribute("referrerPolicy", "no-referrer");
            (0, s.default)("head")[0].appendChild(n2), n2.src = e2;
          }
        }, sdkLoader: function(e2, t2, n2) {
          t2 in window && window[t2] ? (k && clearTimeout(k), n2 && n2()) : s.default.dynamicLoadSource(e2, function() {
            k = setTimeout(s.default.sdkLoader(e2, t2, n2), 100);
          });
        }, deleteInWin: function(e2, t2) {
          var n2 = function(t3) {
            if (e2 in window)
              try {
                delete window[e2];
              } catch (t4) {
                window[e2] = null;
              }
          };
          0 === t2 ? n2() : setTimeout(n2, t2 || 500);
        }, ajax: h.default }), t.default = s.default;
      }, function(e, t, n) {
        "use strict";
        var r = n(9), i = n(0), o = i("%Function.prototype.apply%"), a = i("%Function.prototype.call%"), u = i("%Reflect.apply%", true) || r.call(a, o), s = i("%Object.getOwnPropertyDescriptor%", true), l = i("%Object.defineProperty%", true), c = i("%Math.max%");
        if (l)
          try {
            l({}, "a", { value: 1 });
          } catch (e2) {
            l = null;
          }
        e.exports = function(e2) {
          var t2 = u(r, a, arguments);
          if (s && l) {
            s(t2, "length").configurable && l(t2, "length", { value: 1 + c(0, e2.length - (arguments.length - 1)) });
          }
          return t2;
        };
        var f = function() {
          return u(r, o, arguments);
        };
        l ? l(e.exports, "apply", { value: f }) : e.exports.apply = f;
      }, function(e, t, n) {
        "use strict";
        e.exports = n(62);
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        t.DEFAULT_EMOJI_CDN = "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/", t.DB_NAME = "Comment", t.CONFIG = { lang: "zh-CN", langMode: null, appId: "", appKey: "", clazzName: "Comment", meta: ["nick", "mail", "link"], path: location.pathname, placeholder: "Just Go Go", pageSize: 10, recordIP: true, serverURLs: "", visitor: false, mathJax: false, emojiCDN: "", emojiMaps: void 0, enableQQ: false, requiredFields: [] }, t.defaultMeta = ["nick", "mail", "link"], t.QQCacheKey = "_v_Cache_Q", t.MetaCacheKey = "_v_Cache_Meta", t.RandomStr = function(e2) {
          return (Date.now() + Math.round(1e3 * Math.random())).toString(32);
        }, t.VERSION = "1.5.1";
      }, function(e, t, n) {
        function r(e2, t2) {
          return new o(t2).process(e2);
        }
        var i = n(16), o = n(50);
        t = e.exports = r, t.FilterCSS = o;
        for (var a in i)
          t[a] = i[a];
        "undefined" != typeof window && (window.filterCSS = e.exports);
      }, function(e, t, n) {
        "use strict";
        var r = n(66);
        e.exports = function(e2) {
          return "symbol" == typeof e2 ? "Symbol" : "bigint" == typeof e2 ? "BigInt" : r(e2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(78);
        e.exports = Function.prototype.bind || r;
      }, function(e, t, n) {
        "use strict";
        var r, i, o = Function.prototype.toString, a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof a && "function" == typeof Object.defineProperty)
          try {
            r = Object.defineProperty({}, "length", { get: function() {
              throw i;
            } }), i = {}, a(function() {
              throw 42;
            }, null, r);
          } catch (e2) {
            e2 !== i && (a = null);
          }
        else
          a = null;
        var u = /^\s*class\b/, s = function(e2) {
          try {
            var t2 = o.call(e2);
            return u.test(t2);
          } catch (e3) {
            return false;
          }
        }, l = function(e2) {
          try {
            return !s(e2) && (o.call(e2), true);
          } catch (e3) {
            return false;
          }
        }, c = Object.prototype.toString, f = "function" == typeof Symbol && !!Symbol.toStringTag, p = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
        e.exports = a ? function(e2) {
          if (e2 === p)
            return true;
          if (!e2)
            return false;
          if ("function" != typeof e2 && "object" != typeof e2)
            return false;
          if ("function" == typeof e2 && !e2.prototype)
            return true;
          try {
            a(e2, null, r);
          } catch (e3) {
            if (e3 !== i)
              return false;
          }
          return !s(e2);
        } : function(e2) {
          if (e2 === p)
            return true;
          if (!e2)
            return false;
          if ("function" != typeof e2 && "object" != typeof e2)
            return false;
          if ("function" == typeof e2 && !e2.prototype)
            return true;
          if (f)
            return l(e2);
          if (s(e2))
            return false;
          var t2 = c.call(e2);
          return "[object Function]" === t2 || "[object GeneratorFunction]" === t2;
        };
      }, function(e, t) {
        e.exports = { indexOf: function(e2, t2) {
          var n, r;
          if (Array.prototype.indexOf)
            return e2.indexOf(t2);
          for (n = 0, r = e2.length; n < r; n++)
            if (e2[n] === t2)
              return n;
          return -1;
        }, forEach: function(e2, t2, n) {
          var r, i;
          if (Array.prototype.forEach)
            return e2.forEach(t2, n);
          for (r = 0, i = e2.length; r < i; r++)
            t2.call(n, e2[r], r, e2);
        }, trim: function(e2) {
          return String.prototype.trim ? e2.trim() : e2.replace(/(^\s*)|(\s*$)/g, "");
        }, spaceIndex: function(e2) {
          var t2 = /\s|\n|\t/, n = t2.exec(e2);
          return n ? n.index : -1;
        } };
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = n(6), i = { cdn: r.DEFAULT_EMOJI_CDN, maps: n(97), parse: function(e2, t2) {
          return String(e2).replace(new RegExp(":(" + Object.keys(i.maps).join("|") + "):", "ig"), function(e3, n2) {
            return i.maps[n2] ? i.build(n2, t2) : e3;
          });
        }, build: function(e2, t2) {
          var n2 = /^(https?:)?\/\//i, r2 = i.maps[e2], o = n2.test(r2) ? r2 : i.cdn + r2, a = ' <img alt="' + e2 + '" referrerpolicy="no-referrer" class="vemoji" src="' + o + '" />';
          return n2.test(o) ? a : "";
        } };
        t.default = i;
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = n(95), i = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(r);
        t.default = function(e2) {
          return (0, i.default)(e2, { onTagAttr: function(e3, t2, n2, r2) {
            return o(e3, t2, n2, r2);
          }, onIgnoreTagAttr: function(e3, t2, n2, r2) {
            return o(e3, t2, n2, r2);
          } }).replace(/\<\/?div\>/gi, "");
        };
        var o = function(e2, t2, n2, r2) {
          if (/video|audio/i.test(e2))
            return "";
          if (/code|pre|span/i.test(e2)) {
            if ("style" == t2) {
              var o2 = n2.match(/color:([#a-z0-9]{3,7}|\s+[#a-z0-9]{3,8})/gi);
              return o2 && o2.length ? 'style="' + o2[0] + '"' : "";
            }
            if ("class" == t2)
              return t2 + "='" + i.default.escapeAttrValue(n2) + "'";
          }
          return "a" === e2 && "class" == t2 && "at" === n2 ? t2 + "='" + i.default.escapeAttrValue(n2) + "'" : "img" === e2 && /src|class/i.test(t2) ? t2 + "='" + i.default.escapeAttrValue(n2) + "' referrerPolicy='no-referrer'" : void 0;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = n(1), o = r("%TypeError%"), a = n(52), u = n(18), s = n(53), l = n(55), c = n(56), f = n(60), p = n(20), d = n(81), h = i("String.prototype.split"), v = Object("a"), g = "a" !== v[0] || !(0 in v);
        e.exports = function(e2) {
          var t2 = f(this), n2 = g && d(this) ? h(this, "") : t2, r2 = c(n2);
          if (!l(e2))
            throw new o("Array.prototype.forEach callback must be a function");
          var i2;
          arguments.length > 1 && (i2 = arguments[1]);
          for (var v2 = 0; v2 < r2; ) {
            var m = p(v2);
            if (s(n2, m)) {
              var y = u(n2, m);
              a(e2, i2, [y, v2, n2]);
            }
            v2 += 1;
          }
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(75), i = n(14);
        e.exports = function() {
          var e2 = Array.prototype.forEach;
          return r(e2) ? e2 : i;
        };
      }, function(e, t) {
        function n() {
          var e2 = {};
          return e2["align-content"] = false, e2["align-items"] = false, e2["align-self"] = false, e2["alignment-adjust"] = false, e2["alignment-baseline"] = false, e2.all = false, e2["anchor-point"] = false, e2.animation = false, e2["animation-delay"] = false, e2["animation-direction"] = false, e2["animation-duration"] = false, e2["animation-fill-mode"] = false, e2["animation-iteration-count"] = false, e2["animation-name"] = false, e2["animation-play-state"] = false, e2["animation-timing-function"] = false, e2.azimuth = false, e2["backface-visibility"] = false, e2.background = true, e2["background-attachment"] = true, e2["background-clip"] = true, e2["background-color"] = true, e2["background-image"] = true, e2["background-origin"] = true, e2["background-position"] = true, e2["background-repeat"] = true, e2["background-size"] = true, e2["baseline-shift"] = false, e2.binding = false, e2.bleed = false, e2["bookmark-label"] = false, e2["bookmark-level"] = false, e2["bookmark-state"] = false, e2.border = true, e2["border-bottom"] = true, e2["border-bottom-color"] = true, e2["border-bottom-left-radius"] = true, e2["border-bottom-right-radius"] = true, e2["border-bottom-style"] = true, e2["border-bottom-width"] = true, e2["border-collapse"] = true, e2["border-color"] = true, e2["border-image"] = true, e2["border-image-outset"] = true, e2["border-image-repeat"] = true, e2["border-image-slice"] = true, e2["border-image-source"] = true, e2["border-image-width"] = true, e2["border-left"] = true, e2["border-left-color"] = true, e2["border-left-style"] = true, e2["border-left-width"] = true, e2["border-radius"] = true, e2["border-right"] = true, e2["border-right-color"] = true, e2["border-right-style"] = true, e2["border-right-width"] = true, e2["border-spacing"] = true, e2["border-style"] = true, e2["border-top"] = true, e2["border-top-color"] = true, e2["border-top-left-radius"] = true, e2["border-top-right-radius"] = true, e2["border-top-style"] = true, e2["border-top-width"] = true, e2["border-width"] = true, e2.bottom = false, e2["box-decoration-break"] = true, e2["box-shadow"] = true, e2["box-sizing"] = true, e2["box-snap"] = true, e2["box-suppress"] = true, e2["break-after"] = true, e2["break-before"] = true, e2["break-inside"] = true, e2["caption-side"] = false, e2.chains = false, e2.clear = true, e2.clip = false, e2["clip-path"] = false, e2["clip-rule"] = false, e2.color = true, e2["color-interpolation-filters"] = true, e2["column-count"] = false, e2["column-fill"] = false, e2["column-gap"] = false, e2["column-rule"] = false, e2["column-rule-color"] = false, e2["column-rule-style"] = false, e2["column-rule-width"] = false, e2["column-span"] = false, e2["column-width"] = false, e2.columns = false, e2.contain = false, e2.content = false, e2["counter-increment"] = false, e2["counter-reset"] = false, e2["counter-set"] = false, e2.crop = false, e2.cue = false, e2["cue-after"] = false, e2["cue-before"] = false, e2.cursor = false, e2.direction = false, e2.display = true, e2["display-inside"] = true, e2["display-list"] = true, e2["display-outside"] = true, e2["dominant-baseline"] = false, e2.elevation = false, e2["empty-cells"] = false, e2.filter = false, e2.flex = false, e2["flex-basis"] = false, e2["flex-direction"] = false, e2["flex-flow"] = false, e2["flex-grow"] = false, e2["flex-shrink"] = false, e2["flex-wrap"] = false, e2.float = false, e2["float-offset"] = false, e2["flood-color"] = false, e2["flood-opacity"] = false, e2["flow-from"] = false, e2["flow-into"] = false, e2.font = true, e2["font-family"] = true, e2["font-feature-settings"] = true, e2["font-kerning"] = true, e2["font-language-override"] = true, e2["font-size"] = true, e2["font-size-adjust"] = true, e2["font-stretch"] = true, e2["font-style"] = true, e2["font-synthesis"] = true, e2["font-variant"] = true, e2["font-variant-alternates"] = true, e2["font-variant-caps"] = true, e2["font-variant-east-asian"] = true, e2["font-variant-ligatures"] = true, e2["font-variant-numeric"] = true, e2["font-variant-position"] = true, e2["font-weight"] = true, e2.grid = false, e2["grid-area"] = false, e2["grid-auto-columns"] = false, e2["grid-auto-flow"] = false, e2["grid-auto-rows"] = false, e2["grid-column"] = false, e2["grid-column-end"] = false, e2["grid-column-start"] = false, e2["grid-row"] = false, e2["grid-row-end"] = false, e2["grid-row-start"] = false, e2["grid-template"] = false, e2["grid-template-areas"] = false, e2["grid-template-columns"] = false, e2["grid-template-rows"] = false, e2["hanging-punctuation"] = false, e2.height = true, e2.hyphens = false, e2.icon = false, e2["image-orientation"] = false, e2["image-resolution"] = false, e2["ime-mode"] = false, e2["initial-letters"] = false, e2["inline-box-align"] = false, e2["justify-content"] = false, e2["justify-items"] = false, e2["justify-self"] = false, e2.left = false, e2["letter-spacing"] = true, e2["lighting-color"] = true, e2["line-box-contain"] = false, e2["line-break"] = false, e2["line-grid"] = false, e2["line-height"] = false, e2["line-snap"] = false, e2["line-stacking"] = false, e2["line-stacking-ruby"] = false, e2["line-stacking-shift"] = false, e2["line-stacking-strategy"] = false, e2["list-style"] = true, e2["list-style-image"] = true, e2["list-style-position"] = true, e2["list-style-type"] = true, e2.margin = true, e2["margin-bottom"] = true, e2["margin-left"] = true, e2["margin-right"] = true, e2["margin-top"] = true, e2["marker-offset"] = false, e2["marker-side"] = false, e2.marks = false, e2.mask = false, e2["mask-box"] = false, e2["mask-box-outset"] = false, e2["mask-box-repeat"] = false, e2["mask-box-slice"] = false, e2["mask-box-source"] = false, e2["mask-box-width"] = false, e2["mask-clip"] = false, e2["mask-image"] = false, e2["mask-origin"] = false, e2["mask-position"] = false, e2["mask-repeat"] = false, e2["mask-size"] = false, e2["mask-source-type"] = false, e2["mask-type"] = false, e2["max-height"] = true, e2["max-lines"] = false, e2["max-width"] = true, e2["min-height"] = true, e2["min-width"] = true, e2["move-to"] = false, e2["nav-down"] = false, e2["nav-index"] = false, e2["nav-left"] = false, e2["nav-right"] = false, e2["nav-up"] = false, e2["object-fit"] = false, e2["object-position"] = false, e2.opacity = false, e2.order = false, e2.orphans = false, e2.outline = false, e2["outline-color"] = false, e2["outline-offset"] = false, e2["outline-style"] = false, e2["outline-width"] = false, e2.overflow = false, e2["overflow-wrap"] = false, e2["overflow-x"] = false, e2["overflow-y"] = false, e2.padding = true, e2["padding-bottom"] = true, e2["padding-left"] = true, e2["padding-right"] = true, e2["padding-top"] = true, e2.page = false, e2["page-break-after"] = false, e2["page-break-before"] = false, e2["page-break-inside"] = false, e2["page-policy"] = false, e2.pause = false, e2["pause-after"] = false, e2["pause-before"] = false, e2.perspective = false, e2["perspective-origin"] = false, e2.pitch = false, e2["pitch-range"] = false, e2["play-during"] = false, e2.position = false, e2["presentation-level"] = false, e2.quotes = false, e2["region-fragment"] = false, e2.resize = false, e2.rest = false, e2["rest-after"] = false, e2["rest-before"] = false, e2.richness = false, e2.right = false, e2.rotation = false, e2["rotation-point"] = false, e2["ruby-align"] = false, e2["ruby-merge"] = false, e2["ruby-position"] = false, e2["shape-image-threshold"] = false, e2["shape-outside"] = false, e2["shape-margin"] = false, e2.size = false, e2.speak = false, e2["speak-as"] = false, e2["speak-header"] = false, e2["speak-numeral"] = false, e2["speak-punctuation"] = false, e2["speech-rate"] = false, e2.stress = false, e2["string-set"] = false, e2["tab-size"] = false, e2["table-layout"] = false, e2["text-align"] = true, e2["text-align-last"] = true, e2["text-combine-upright"] = true, e2["text-decoration"] = true, e2["text-decoration-color"] = true, e2["text-decoration-line"] = true, e2["text-decoration-skip"] = true, e2["text-decoration-style"] = true, e2["text-emphasis"] = true, e2["text-emphasis-color"] = true, e2["text-emphasis-position"] = true, e2["text-emphasis-style"] = true, e2["text-height"] = true, e2["text-indent"] = true, e2["text-justify"] = true, e2["text-orientation"] = true, e2["text-overflow"] = true, e2["text-shadow"] = true, e2["text-space-collapse"] = true, e2["text-transform"] = true, e2["text-underline-position"] = true, e2["text-wrap"] = true, e2.top = false, e2.transform = false, e2["transform-origin"] = false, e2["transform-style"] = false, e2.transition = false, e2["transition-delay"] = false, e2["transition-duration"] = false, e2["transition-property"] = false, e2["transition-timing-function"] = false, e2["unicode-bidi"] = false, e2["vertical-align"] = false, e2.visibility = false, e2["voice-balance"] = false, e2["voice-duration"] = false, e2["voice-family"] = false, e2["voice-pitch"] = false, e2["voice-range"] = false, e2["voice-rate"] = false, e2["voice-stress"] = false, e2["voice-volume"] = false, e2.volume = false, e2["white-space"] = false, e2.widows = false, e2.width = true, e2["will-change"] = false, e2["word-break"] = true, e2["word-spacing"] = true, e2["word-wrap"] = true, e2["wrap-flow"] = false, e2["wrap-through"] = false, e2["writing-mode"] = false, e2["z-index"] = false, e2;
        }
        function r(e2, t2, n2) {
        }
        function i(e2, t2, n2) {
        }
        function o(e2, t2) {
          return a.test(t2) ? "" : t2;
        }
        var a = /javascript\s*\:/gim;
        t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = i, t.safeAttrValue = o;
      }, function(e, t) {
        e.exports = { indexOf: function(e2, t2) {
          var n, r;
          if (Array.prototype.indexOf)
            return e2.indexOf(t2);
          for (n = 0, r = e2.length; n < r; n++)
            if (e2[n] === t2)
              return n;
          return -1;
        }, forEach: function(e2, t2, n) {
          var r, i;
          if (Array.prototype.forEach)
            return e2.forEach(t2, n);
          for (r = 0, i = e2.length; r < i; r++)
            t2.call(n, e2[r], r, e2);
        }, trim: function(e2) {
          return String.prototype.trim ? e2.trim() : e2.replace(/(^\s*)|(\s*$)/g, "");
        }, trimRight: function(e2) {
          return String.prototype.trimRight ? e2.trimRight() : e2.replace(/(\s*$)/g, "");
        } };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = n(86), a = n(19), u = n(8);
        e.exports = function(e2, t2) {
          if ("Object" !== u(e2))
            throw new i("Assertion failed: Type(O) is not Object");
          if (!a(t2))
            throw new i("Assertion failed: IsPropertyKey(P) is not true, got " + o(t2));
          return e2[t2];
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          return "string" == typeof e2 || "symbol" == typeof e2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%String%"), o = r("%TypeError%");
        e.exports = function(e2) {
          if ("symbol" == typeof e2)
            throw new o("Cannot convert a Symbol value to a string");
          return i(e2);
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          return null === e2 || "function" != typeof e2 && "object" != typeof e2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = "undefined" != typeof Symbol && Symbol, i = n(23);
        e.exports = function() {
          return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && i())));
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function() {
          if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
            return false;
          if ("symbol" == typeof Symbol.iterator)
            return true;
          var e2 = {}, t2 = Symbol("test"), n2 = Object(t2);
          if ("string" == typeof t2)
            return false;
          if ("[object Symbol]" !== Object.prototype.toString.call(t2))
            return false;
          if ("[object Symbol]" !== Object.prototype.toString.call(n2))
            return false;
          e2[t2] = 42;
          for (t2 in e2)
            return false;
          if ("function" == typeof Object.keys && 0 !== Object.keys(e2).length)
            return false;
          if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e2).length)
            return false;
          var r = Object.getOwnPropertySymbols(e2);
          if (1 !== r.length || r[0] !== t2)
            return false;
          if (!Object.prototype.propertyIsEnumerable.call(e2, t2))
            return false;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(e2, t2);
            if (42 !== i.value || true !== i.enumerable)
              return false;
          }
          return true;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(23);
        e.exports = function() {
          return r() && !!Symbol.toStringTag;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(9);
        e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
      }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.exports = function(e2) {
          var t2 = r.call(e2), n2 = "[object Arguments]" === t2;
          return n2 || (n2 = "[object Array]" !== t2 && null !== e2 && "object" == typeof e2 && "number" == typeof e2.length && e2.length >= 0 && "[object Function]" === r.call(e2.callee)), n2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(5), i = n(1), o = i("Object.prototype.propertyIsEnumerable"), a = i("Array.prototype.push");
        e.exports = function(e2) {
          var t2 = r(e2), n2 = [];
          for (var i2 in t2)
            o(t2, i2) && a(n2, [i2, t2[i2]]);
          return n2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(27);
        e.exports = function() {
          return "function" == typeof Object.entries ? Object.entries : r;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(5), i = n(20), o = n(1), a = o("String.prototype.replace"), u = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        e.exports = function() {
          var e2 = i(r(this));
          return a(a(e2, u, ""), s, "");
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(29), i = "​";
        e.exports = function() {
          return String.prototype.trim && i.trim() === i ? String.prototype.trim : r;
        };
      }, function(e, t, n) {
        function r() {
          return { a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], figcaption: [], figure: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height"], ins: ["datetime"], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [], small: [], span: [], sub: [], summary: [], sup: [], strong: [], strike: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"] };
        }
        function i(e2, t2, n2) {
        }
        function o(e2, t2, n2) {
        }
        function a(e2, t2, n2) {
        }
        function u(e2, t2, n2) {
        }
        function s(e2) {
          return e2.replace(E, "&lt;").replace(F, "&gt;");
        }
        function l(e2, t2, n2, r2) {
          if (n2 = v(n2), "href" === t2 || "src" === t2) {
            if ("#" === (n2 = A.trim(n2)))
              return "#";
            if ("http://" !== n2.substr(0, 7) && "https://" !== n2.substr(0, 8) && "mailto:" !== n2.substr(0, 7) && "tel:" !== n2.substr(0, 4) && "data:image/" !== n2.substr(0, 11) && "ftp://" !== n2.substr(0, 6) && "./" !== n2.substr(0, 2) && "../" !== n2.substr(0, 3) && "#" !== n2[0] && "/" !== n2[0])
              return "";
          } else if ("background" === t2) {
            if ($.lastIndex = 0, $.test(n2))
              return "";
          } else if ("style" === t2) {
            if (j.lastIndex = 0, j.test(n2))
              return "";
            if (T.lastIndex = 0, T.test(n2) && ($.lastIndex = 0, $.test(n2)))
              return "";
            false !== r2 && (r2 = r2 || k, n2 = r2.process(n2));
          }
          return n2 = g(n2);
        }
        function c(e2) {
          return e2.replace(C, "&quot;");
        }
        function f(e2) {
          return e2.replace(_, '"');
        }
        function p(e2) {
          return e2.replace(S, function(e3, t2) {
            return "x" === t2[0] || "X" === t2[0] ? String.fromCharCode(parseInt(t2.substr(1), 16)) : String.fromCharCode(parseInt(t2, 10));
          });
        }
        function d(e2) {
          return e2.replace(O, ":").replace(B, " ");
        }
        function h(e2) {
          for (var t2 = "", n2 = 0, r2 = e2.length; n2 < r2; n2++)
            t2 += e2.charCodeAt(n2) < 32 ? " " : e2.charAt(n2);
          return A.trim(t2);
        }
        function v(e2) {
          return e2 = f(e2), e2 = p(e2), e2 = d(e2), e2 = h(e2);
        }
        function g(e2) {
          return e2 = c(e2), e2 = s(e2);
        }
        function m() {
          return "";
        }
        function y(e2, t2) {
          function n2(t3) {
            return !!r2 || -1 !== A.indexOf(e2, t3);
          }
          "function" != typeof t2 && (t2 = function() {
          });
          var r2 = !Array.isArray(e2), i2 = [], o2 = false;
          return { onIgnoreTag: function(e3, r3, a2) {
            if (n2(e3)) {
              if (a2.isClosing) {
                var u2 = "[/removed]", s2 = a2.position + u2.length;
                return i2.push([false !== o2 ? o2 : a2.position, s2]), o2 = false, u2;
              }
              return o2 || (o2 = a2.position), "[removed]";
            }
            return t2(e3, r3, a2);
          }, remove: function(e3) {
            var t3 = "", n3 = 0;
            return A.forEach(i2, function(r3) {
              t3 += e3.slice(n3, r3[0]), n3 = r3[1];
            }), t3 += e3.slice(n3);
          } };
        }
        function b(e2) {
          for (var t2 = "", n2 = 0; n2 < e2.length; ) {
            var r2 = e2.indexOf("<!--", n2);
            if (-1 === r2) {
              t2 += e2.slice(n2);
              break;
            }
            t2 += e2.slice(n2, r2);
            var i2 = e2.indexOf("-->", r2);
            if (-1 === i2)
              break;
            n2 = i2 + 3;
          }
          return t2;
        }
        function D(e2) {
          var t2 = e2.split("");
          return t2 = t2.filter(function(e3) {
            var t3 = e3.charCodeAt(0);
            return 127 !== t3 && (!(t3 <= 31) || (10 === t3 || 13 === t3));
          }), t2.join("");
        }
        var x = n(7).FilterCSS, w = n(7).getDefaultWhiteList, A = n(11), k = new x(), E = /</g, F = />/g, C = /"/g, _ = /&quot;/g, S = /&#([a-zA-Z0-9]*);?/gim, O = /&colon;?/gim, B = /&newline;?/gim, $ = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi, j = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, T = /u\s*r\s*l\s*\(.*/gi;
        t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = i, t.onIgnoreTag = o, t.onTagAttr = a, t.onIgnoreTagAttr = u, t.safeAttrValue = l, t.escapeHtml = s, t.escapeQuote = c, t.unescapeQuote = f, t.escapeHtmlEntities = p, t.escapeDangerHtml5Entities = d, t.clearNonPrintableCharacter = h, t.friendlyAttrValue = v, t.escapeAttrValue = g, t.onIgnoreTagStripAll = m, t.StripTagBody = y, t.stripCommentTag = b, t.stripBlankChar = D, t.cssFilter = k, t.getDefaultCSSWhiteList = w;
      }, function(e, t, n) {
        function r(e2) {
          var t2 = f.spaceIndex(e2);
          if (-1 === t2)
            var n2 = e2.slice(1, -1);
          else
            var n2 = e2.slice(1, t2 + 1);
          return n2 = f.trim(n2).toLowerCase(), "/" === n2.slice(0, 1) && (n2 = n2.slice(1)), "/" === n2.slice(-1) && (n2 = n2.slice(0, -1)), n2;
        }
        function i(e2) {
          return "</" === e2.slice(0, 2);
        }
        function o(e2, t2, n2) {
          "use strict";
          var o2 = "", a2 = 0, u2 = false, s2 = false, l2 = 0, c2 = e2.length, f2 = "", p2 = "";
          e:
            for (l2 = 0; l2 < c2; l2++) {
              var d = e2.charAt(l2);
              if (false === u2) {
                if ("<" === d) {
                  u2 = l2;
                  continue;
                }
              } else if (false === s2) {
                if ("<" === d) {
                  o2 += n2(e2.slice(a2, l2)), u2 = l2, a2 = l2;
                  continue;
                }
                if (">" === d) {
                  o2 += n2(e2.slice(a2, u2)), p2 = e2.slice(u2, l2 + 1), f2 = r(p2), o2 += t2(u2, o2.length, f2, p2, i(p2)), a2 = l2 + 1, u2 = false;
                  continue;
                }
                if ('"' === d || "'" === d)
                  for (var h = 1, v = e2.charAt(l2 - h); "" === v.trim() || "=" === v; ) {
                    if ("=" === v) {
                      s2 = d;
                      continue e;
                    }
                    v = e2.charAt(l2 - ++h);
                  }
              } else if (d === s2) {
                s2 = false;
                continue;
              }
            }
          return a2 < e2.length && (o2 += n2(e2.substr(a2))), o2;
        }
        function a(e2, t2) {
          "use strict";
          function n2(e3, n3) {
            if (e3 = f.trim(e3), e3 = e3.replace(p, "").toLowerCase(), !(e3.length < 1)) {
              var r3 = t2(e3, n3 || "");
              r3 && i2.push(r3);
            }
          }
          for (var r2 = 0, i2 = [], o2 = false, a2 = e2.length, l2 = 0; l2 < a2; l2++) {
            var d, h, v = e2.charAt(l2);
            if (false !== o2 || "=" !== v)
              if (false === o2 || l2 !== r2 || '"' !== v && "'" !== v || "=" !== e2.charAt(l2 - 1))
                if (/\s|\n|\t/.test(v)) {
                  if (e2 = e2.replace(/\s|\n|\t/g, " "), false === o2) {
                    if (-1 === (h = u(e2, l2))) {
                      d = f.trim(e2.slice(r2, l2)), n2(d), o2 = false, r2 = l2 + 1;
                      continue;
                    }
                    l2 = h - 1;
                    continue;
                  }
                  if (-1 === (h = s(e2, l2 - 1))) {
                    d = f.trim(e2.slice(r2, l2)), d = c(d), n2(o2, d), o2 = false, r2 = l2 + 1;
                    continue;
                  }
                } else
                  ;
              else {
                if (-1 === (h = e2.indexOf(v, l2 + 1)))
                  break;
                d = f.trim(e2.slice(r2 + 1, h)), n2(o2, d), o2 = false, l2 = h, r2 = l2 + 1;
              }
            else
              o2 = e2.slice(r2, l2), r2 = l2 + 1;
          }
          return r2 < e2.length && (false === o2 ? n2(e2.slice(r2)) : n2(o2, c(f.trim(e2.slice(r2))))), f.trim(i2.join(" "));
        }
        function u(e2, t2) {
          for (; t2 < e2.length; t2++) {
            var n2 = e2[t2];
            if (" " !== n2)
              return "=" === n2 ? t2 : -1;
          }
        }
        function s(e2, t2) {
          for (; t2 > 0; t2--) {
            var n2 = e2[t2];
            if (" " !== n2)
              return "=" === n2 ? t2 : -1;
          }
        }
        function l(e2) {
          return '"' === e2[0] && '"' === e2[e2.length - 1] || "'" === e2[0] && "'" === e2[e2.length - 1];
        }
        function c(e2) {
          return l(e2) ? e2.substr(1, e2.length - 2) : e2;
        }
        var f = n(11), p = /[^a-zA-Z0-9_:\.\-]/gim;
        t.parseTag = o, t.parseAttr = a;
      }, function(e, t, n) {
        var r, i, o;
        !function(n2, a) {
          i = [e, t], r = a, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o);
        }(0, function(e2, t2) {
          "use strict";
          function n2(e3) {
            function t3(t4) {
              var n4 = e3.style.width;
              e3.style.width = "0px", e3.offsetWidth, e3.style.width = n4, e3.style.overflowY = t4;
            }
            function n3(e4) {
              for (var t4 = []; e4 && e4.parentNode && e4.parentNode instanceof Element; )
                e4.parentNode.scrollTop && t4.push({ node: e4.parentNode, scrollTop: e4.parentNode.scrollTop }), e4 = e4.parentNode;
              return t4;
            }
            function r3() {
              if (0 !== e3.scrollHeight) {
                var t4 = n3(e3), r4 = document.documentElement && document.documentElement.scrollTop;
                e3.style.height = "", e3.style.height = e3.scrollHeight + u2 + "px", s = e3.clientWidth, t4.forEach(function(e4) {
                  e4.node.scrollTop = e4.scrollTop;
                }), r4 && (document.documentElement.scrollTop = r4);
              }
            }
            function i3() {
              r3();
              var n4 = Math.round(parseFloat(e3.style.height)), i4 = window.getComputedStyle(e3, null), o3 = "content-box" === i4.boxSizing ? Math.round(parseFloat(i4.height)) : e3.offsetHeight;
              if (o3 < n4 ? "hidden" === i4.overflowY && (t3("scroll"), r3(), o3 = "content-box" === i4.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e3, null).height)) : e3.offsetHeight) : "hidden" !== i4.overflowY && (t3("hidden"), r3(), o3 = "content-box" === i4.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e3, null).height)) : e3.offsetHeight), l !== o3) {
                l = o3;
                var u3 = a("autosize:resized");
                try {
                  e3.dispatchEvent(u3);
                } catch (e4) {
                }
              }
            }
            if (e3 && e3.nodeName && "TEXTAREA" === e3.nodeName && !o2.has(e3)) {
              var u2 = null, s = null, l = null, c = function() {
                e3.clientWidth !== s && i3();
              }, f = (function(t4) {
                window.removeEventListener("resize", c, false), e3.removeEventListener("input", i3, false), e3.removeEventListener("keyup", i3, false), e3.removeEventListener("autosize:destroy", f, false), e3.removeEventListener("autosize:update", i3, false), Object.keys(t4).forEach(function(n4) {
                  e3.style[n4] = t4[n4];
                }), o2.delete(e3);
              }).bind(e3, { height: e3.style.height, resize: e3.style.resize, overflowY: e3.style.overflowY, overflowX: e3.style.overflowX, wordWrap: e3.style.wordWrap });
              e3.addEventListener("autosize:destroy", f, false), "onpropertychange" in e3 && "oninput" in e3 && e3.addEventListener("keyup", i3, false), window.addEventListener("resize", c, false), e3.addEventListener("input", i3, false), e3.addEventListener("autosize:update", i3, false), e3.style.overflowX = "hidden", e3.style.wordWrap = "break-word", o2.set(e3, { destroy: f, update: i3 }), function() {
                var t4 = window.getComputedStyle(e3, null);
                "vertical" === t4.resize ? e3.style.resize = "none" : "both" === t4.resize && (e3.style.resize = "horizontal"), u2 = "content-box" === t4.boxSizing ? -(parseFloat(t4.paddingTop) + parseFloat(t4.paddingBottom)) : parseFloat(t4.borderTopWidth) + parseFloat(t4.borderBottomWidth), isNaN(u2) && (u2 = 0), i3();
              }();
            }
          }
          function r2(e3) {
            var t3 = o2.get(e3);
            t3 && t3.destroy();
          }
          function i2(e3) {
            var t3 = o2.get(e3);
            t3 && t3.update();
          }
          var o2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : /* @__PURE__ */ function() {
            var e3 = [], t3 = [];
            return { has: function(t4) {
              return e3.indexOf(t4) > -1;
            }, get: function(n3) {
              return t3[e3.indexOf(n3)];
            }, set: function(n3, r3) {
              -1 === e3.indexOf(n3) && (e3.push(n3), t3.push(r3));
            }, delete: function(n3) {
              var r3 = e3.indexOf(n3);
              r3 > -1 && (e3.splice(r3, 1), t3.splice(r3, 1));
            } };
          }(), a = function(e3) {
            return new Event(e3, { bubbles: true });
          };
          try {
            new Event("test");
          } catch (e3) {
            a = function(e4) {
              var t3 = document.createEvent("Event");
              return t3.initEvent(e4, true, false), t3;
            };
          }
          var u = null;
          "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (u = function(e3) {
            return e3;
          }, u.destroy = function(e3) {
            return e3;
          }, u.update = function(e3) {
            return e3;
          }) : (u = function(e3, t3) {
            return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], function(e4) {
              return n2(e4);
            }), e3;
          }, u.destroy = function(e3) {
            return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], r2), e3;
          }, u.update = function(e3) {
            return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], i2), e3;
          }), t2.default = u, e2.exports = t2.default;
        });
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        function i(e2) {
          return !!e2 && this.init(e2), this;
        }
        function o(e2) {
          return new i(e2);
        }
        var a = n(42), u = r(a), s = n(33), l = r(s), c = n(37), f = r(c), p = n(12), d = r(p), h = n(6), v = n(41), g = r(v), m = n(36), y = r(m), b = n(40), D = n(38), x = r(D), w = n(3), A = r(w), k = n(39), E = r(k), F = n(13), C = r(F), _ = n(35), S = (r(_), { comment: "", nick: "", mail: "", link: "", ua: A.default.ua, url: "", QQAvatar: "" }), O = "", B = {}, $ = { cdn: "https://gravatar.loli.net/avatar/", ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""], params: "", hide: false };
        i.prototype.init = function(e2) {
          if ("undefined" == typeof document)
            throw new Error("Sorry, Valine does not support Server-side rendering.");
          var t2 = this;
          return e2 && (e2 = A.default.extend(h.CONFIG, e2), t2.i18n = (0, f.default)(e2.lang || A.default.lang, e2.langMode), t2.cfg = e2, d.default.maps = !!e2.emojiMaps && e2.emojiMaps || d.default.maps, d.default.cdn = !!e2.emojiCDN && e2.emojiCDN || d.default.cdn, t2._init()), t2;
        }, i.prototype._init = function() {
          var e2 = this;
          try {
            var t2 = e2.cfg, n2 = t2.avatar, r2 = t2.avatarForce, i2 = t2.avatar_cdn, o2 = t2.visitor, a2 = t2.path, u2 = void 0 === a2 ? location.pathname : a2, s2 = t2.pageSize, l2 = t2.recordIP;
            e2.cfg.path = u2.replace(/index\.html?$/, "");
            var c2 = $.ds, f2 = r2 ? "&q=" + (0, h.RandomStr)() : "";
            $.params = "?d=" + (c2.indexOf(n2) > -1 ? n2 : "mp") + "&v=" + h.VERSION + f2, $.hide = "hide" === n2, $.cdn = /^https?\:\/\//.test(i2) ? i2 : $.cdn, e2.cfg.pageSize = isNaN(s2) ? 10 : s2 < 1 ? 10 : s2, l2 && (0, b.recordIPFn)(function(e3) {
              return S.ip = e3;
            });
            var p2 = e2.cfg.el || null, d2 = (0, A.default)(p2);
            if (p2 = p2 instanceof HTMLElement ? p2 : d2[d2.length - 1] || null) {
              e2.$el = (0, A.default)(p2), e2.$el.addClass("v").attr("data-class", "v"), $.hide && e2.$el.addClass("hide-avatar"), e2.cfg.meta = (e2.cfg.guest_info || e2.cfg.meta || h.defaultMeta).filter(function(e3) {
                return h.defaultMeta.indexOf(e3) > -1;
              }), e2.cfg.requiredFields = e2.cfg.requiredFields.filter(function(e3) {
                return h.defaultMeta.indexOf(e3) > -1;
              });
              var v2 = (0 == e2.cfg.meta.length ? h.defaultMeta : e2.cfg.meta).map(function(t3) {
                var n3 = "mail" == t3 ? "email" : "text";
                return h.defaultMeta.indexOf(t3) > -1 ? '<input name="' + t3 + '" placeholder="' + e2.i18n.t(t3) + '" class="v' + t3 + ' vinput" type="' + n3 + '">' : "";
              }), g2 = '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' + e2.i18n.t("cancelReply") + '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' + v2.length + '">' + v2.join("") + '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + e2.cfg.placeholder + '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' + e2.i18n.t("emoji") + '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' + e2.i18n.t("preview") + '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + e2.i18n.t("submit") + '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' + e2.i18n.t("comments") + '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' + e2.i18n.t("more") + '</button></div><div class="vpower txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' + h.VERSION + "</div>";
              e2.$el.html(g2), e2.$el.find(".cancel-reply").on("click", function(t3) {
                e2.reset();
              });
              var m2 = e2.$el.find(".vempty");
              e2.$nodata = { show: function(t3) {
                return m2.html(t3 || e2.i18n.t("sofa")).show(), e2;
              }, hide: function() {
                return m2.hide(), e2;
              } };
              var D2 = e2.$el.find(".vload-bottom"), w2 = e2.$el.find(".vload-top");
              e2.$loading = { show: function(t3) {
                return t3 && w2.show() || D2.show(), e2.$nodata.hide(), e2;
              }, hide: function() {
                return w2.hide(), D2.hide(), 0 === e2.$el.find(".vcard").length && e2.$nodata.show(), e2;
              } };
            }
            (0, y.default)(e2.cfg, function(t3) {
              var n3 = (0, A.default)(".valine-comment-count"), r3 = 0;
              !function t4(n4) {
                var i3 = n4[r3++];
                if (i3) {
                  var o3 = (0, A.default)(i3).attr("data-xid");
                  !!o3 && e2.Q(o3).count().then(function(e3) {
                    i3.innerText = e3, t4(n4);
                  }).catch(function(e3) {
                    i3.innerText = 0;
                  });
                }
              }(n3), o2 && T.add(AV.Object.extend("Counter"), e2.cfg.path), e2.$el && e2.bind();
            });
          } catch (t3) {
            (0, x.default)(e2, t3, "init");
          }
        };
        var j = function(e2, t2) {
          var n2 = new e2(), r2 = new AV.ACL();
          r2.setPublicReadAccess(true), r2.setPublicWriteAccess(true), n2.setACL(r2), n2.set("url", t2.url), n2.set("xid", t2.xid), n2.set("title", t2.title), n2.set("time", 1), n2.save().then(function(e3) {
            (0, A.default)(t2.el).find(".leancloud-visitors-count").text(1);
          }).catch(function(e3) {
          });
        }, T = { add: function(e2, t2) {
          var n2 = this, r2 = (0, A.default)(".leancloud_visitors,.leancloud-visitors");
          if (1 === r2.length) {
            var i2 = r2[0], o2 = decodeURI((0, A.default)(i2).attr("id")), a2 = (0, A.default)(i2).attr("data-flag-title"), u2 = encodeURI(o2), s2 = { el: i2, url: o2, xid: u2, title: a2 };
            if (decodeURI(o2) === decodeURI(t2)) {
              var l2 = new AV.Query(e2);
              l2.equalTo("url", o2), l2.find().then(function(t3) {
                if (t3.length > 0) {
                  var n3 = t3[0];
                  n3.increment("time"), n3.save().then(function(e3) {
                    (0, A.default)(i2).find(".leancloud-visitors-count").text(e3.get("time"));
                  }).catch(function(e3) {
                  });
                } else
                  j(e2, s2);
              }).catch(function(t3) {
                101 == t3.code ? j(e2, s2) : (0, x.default)(n2, t3);
              });
            } else
              T.show(e2, r2);
          } else
            T.show(e2, r2);
        }, show: function(e2, t2) {
          var n2 = [];
          if (t2.forEach(function(e3) {
            var t3 = (0, A.default)(e3).find(".leancloud-visitors-count");
            t3 && t3.text("0"), n2.push(/\%/.test((0, A.default)(e3).attr("id")) ? decodeURI((0, A.default)(e3).attr("id")) : (0, A.default)(e3).attr("id"));
          }), n2.length) {
            var r2 = new AV.Query(e2);
            r2.containedIn("url", n2), r2.find().then(function(e3) {
              e3.length > 0 && t2.forEach(function(t3) {
                e3.forEach(function(e4) {
                  var n3 = e4.get("xid") || encodeURI(e4.get("url")), r3 = e4.get("time"), i2 = (0, A.default)(t3), o2 = i2.attr("id");
                  if ((/\%/.test(o2) ? o2 : encodeURI(o2)) == n3) {
                    var a2 = i2.find(".leancloud-visitors-count");
                    a2 && a2.text(r3);
                  }
                });
              });
            }).catch(function(e3) {
            });
          }
        } };
        i.prototype.Q = function(e2) {
          var t2 = this, n2 = arguments.length, r2 = t2.cfg.clazzName;
          if (1 == n2) {
            var i2 = new AV.Query(r2);
            i2.doesNotExist("rid");
            var o2 = new AV.Query(r2);
            o2.equalTo("rid", "");
            var a2 = AV.Query.or(i2, o2);
            return "*" === e2 ? a2.exists("url") : a2.equalTo("url", decodeURI(e2)), a2.addDescending("createdAt"), a2.addDescending("insertedAt"), a2;
          }
          var u2 = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""), s2 = "select * from " + r2 + " where rid in (" + u2 + ") order by -createdAt,-createdAt";
          return AV.Query.doCloudQuery(s2);
        }, i.prototype.installLocale = function(e2, t2) {
          var n2 = this;
          return n2.i18n(e2, t2), n2;
        }, i.prototype.setPath = function(e2) {
          return this.config.path = e2, this;
        }, i.prototype.bind = function() {
          var e2 = this, t2 = e2.$el.find(".vemojis"), n2 = e2.$el.find(".vpreview"), r2 = e2.$el.find(".vemoji-btn"), i2 = e2.$el.find(".vpreview-btn"), o2 = e2.$el.find(".veditor"), a2 = d.default.maps, s2 = false, c2 = function(e3) {
            var n3 = [];
            for (var r3 in a2)
              a2.hasOwnProperty(r3) && !!d.default.build(r3) && n3.push('<i title="' + r3 + '" >' + d.default.build(r3) + "</i>");
            t2.html(n3.join("")), s2 = true, t2.find("i").on("click", function(e4) {
              e4.preventDefault(), w2(o2[0], " :" + (0, A.default)(this).attr("title") + ":");
            });
          };
          e2.$emoji = { show: function() {
            return !s2 && c2(), e2.$preview.hide(), t2.show(), r2.addClass("actived"), e2.$emoji;
          }, hide: function() {
            return r2.removeClass("actived"), t2.hide(), e2.$emoji;
          } }, e2.$preview = { show: function() {
            return O ? (e2.$emoji.hide(), i2.addClass("actived"), n2.html((0, E.default)(O)).show(), R()) : e2.$preview.hide(), e2.$preview;
          }, hide: function() {
            return i2.removeClass("actived"), n2.hide().html(""), e2.$preview;
          } };
          var f2 = function(t3) {
            var r3 = t3.val() || "";
            r3 || e2.$preview.hide(), O != r3 && (O = r3, i2.hasClass("actived") > -1 && O != n2.html() && n2.html((0, E.default)(O)), R());
          };
          r2.on("click", function(t3) {
            r2.hasClass("actived") ? e2.$emoji.hide() : e2.$emoji.show();
          }), i2.on("click", function(t3) {
            i2.hasClass("actived") ? e2.$preview.hide() : e2.$preview.show();
          });
          var p2 = e2.cfg.meta, v2 = {}, m2 = { veditor: "comment" };
          p2.forEach(function(e3) {
            m2["v" + e3] = e3;
          });
          for (var y2 in m2)
            m2.hasOwnProperty(y2) && function() {
              var t3 = m2[y2], n3 = e2.$el.find("." + y2);
              v2[t3] = n3, n3.on("input change blur propertychange", function(r3) {
                e2.cfg.enableQQ && "blur" === r3.type && "nick" === t3 && (n3.val() && !isNaN(n3.val()) ? (0, b.fetchQQFn)(n3.val(), function(e3) {
                  var t4 = e3.nick || n3.val(), r4 = e3.qq + "@qq.com";
                  (0, A.default)(".vnick").val(t4), (0, A.default)(".vmail").val(r4), S.nick = t4, S.mail = r4, S.QQAvatar = e3.pic;
                }) : A.default.store.get(h.QQCacheKey) && A.default.store.get(h.QQCacheKey).nick != n3.val() && (A.default.store.remove(h.QQCacheKey), S.nick = n3.val(), S.mail = "", S.QQAvatar = "")), "comment" === t3 ? ((0, l.default)(n3[0]), D2(function(e3) {
                  f2(n3);
                })()) : S[t3] = (0, C.default)(n3.val().replace(/(^\s*)|(\s*$)/g, "").substring(0, 35));
              });
            }();
          var D2 = function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300, n3 = void 0;
            return function() {
              var r3 = this, i3 = arguments;
              n3 && clearTimeout(n3), n3 = setTimeout(function() {
                e3.apply(r3, i3);
              }, t3);
            };
          }, w2 = function(e3, t3) {
            if (document.selection) {
              e3.focus();
              document.selection.createRange().text = t3, e3.focus();
            } else if (e3.selectionStart || "0" == e3.selectionStart) {
              var n3 = e3.selectionStart, r3 = e3.selectionEnd, i3 = e3.scrollTop;
              e3.value = e3.value.substring(0, n3) + t3 + e3.value.substring(r3, e3.value.length), e3.focus(), e3.selectionStart = n3 + t3.length, e3.selectionEnd = n3 + t3.length, e3.scrollTop = i3;
            } else
              e3.focus(), e3.value += t3;
            D2(function(t4) {
              f2((0, A.default)(e3));
            })();
          }, k2 = { no: 1, size: e2.cfg.pageSize, skip: e2.cfg.pageSize }, F2 = e2.$el.find(".vpage");
          F2.on("click", function(e3) {
            F2.hide(), k2.no++, _2();
          });
          var _2 = function() {
            var t3 = k2.size, n3 = k2.no, r3 = Number(e2.$el.find(".vnum").text());
            e2.$loading.show();
            var i3 = e2.Q(e2.cfg.path);
            i3.limit(t3), i3.skip((n3 - 1) * t3), i3.find().then(function(i4) {
              if (k2.skip = k2.size, i4 && i4.length) {
                var o3 = [];
                i4.forEach(function(t4) {
                  o3.push(t4.id), T2(t4, e2.$el.find(".vcards"), true);
                }), e2.Q(e2.cfg.path, o3).then(function(e3) {
                  (e3 && e3.results || []).forEach(function(e4) {
                    T2(e4, (0, A.default)('.vquote[data-self-id="' + e4.get("rid") + '"]'));
                  });
                }).catch(function(e3) {
                }), t3 * n3 < r3 ? F2.show() : F2.hide(), R();
              } else
                e2.$nodata.show();
              e2.$loading.hide();
            }).catch(function(t4) {
              e2.$loading.hide(), (0, x.default)(e2, t4, "query");
            });
          };
          e2.Q(e2.cfg.path).count().then(function(t3) {
            t3 > 0 ? (e2.$el.find(".vcount").show().find(".vnum").text(t3), _2()) : e2.$loading.hide();
          }).catch(function(t3) {
            (0, x.default)(e2, t3, "count");
          });
          var j2 = function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g, n3 = e3.match(t3) || [];
            return n3.length > 0 ? n3[0] : "";
          }, T2 = function(t3, n3, r3) {
            var i3 = (0, A.default)('<div class="vcard" id="' + t3.id + '"></div>'), o3 = (0, C.default)(t3.get("ua")), a3 = "";
            o3 && !/ja/.test(e2.cfg.lang) && (o3 = A.default.detect(o3), a3 = o3.version ? o3.os ? '<span class="vsys">' + o3.browser + " " + o3.version + '</span> <span class="vsys">' + o3.os + " " + o3.osVersion + "</span>" : "" : '<span class="vsys">' + o3.browser + "</span>"), "*" === e2.cfg.path && (a3 = '<a href="' + t3.get("url") + '" class="vsys">' + t3.get("url") + "</a>");
            var s3 = t3.get("link") ? /^https?\:\/\//.test(t3.get("link")) ? t3.get("link") : "http://" + t3.get("link") : "", l2 = A.default.escape((0, C.default)(t3.get("nick").substring(0, 30))), c3 = s3 ? '<a class="vnick" rel="nofollow" href="' + j2(s3) + '" target="_blank" >' + l2 + "</a>" : '<span class="vnick">' + l2 + "</span>", f3 = $.hide ? "" : e2.cfg.enableQQ && t3.get("QQAvatar") ? (0, C.default)('<img class="vimg" src="' + j2(t3.get("QQAvatar")) + '" referrerPolicy="no-referrer"/>') : '<img class="vimg" src="' + ($.cdn + (0, u.default)(t3.get("mail")) + $.params) + '">', p3 = f3 + '<div class="vh"><div class="vhead">' + c3 + " " + a3 + '</div><div class="vmeta"><span class="vtime" >' + (0, g.default)(t3.get("insertedAt"), e2.i18n) + '</span><span class="vat" data-vm-id="' + (t3.get("rid") || t3.id) + '" data-self-id="' + t3.id + '">' + e2.i18n.t("reply") + '</span></div><div class="vcontent" data-expand="' + e2.i18n.t("expand") + '">' + (0, E.default)(t3.get("comment")) + '</div><div class="vreply-wrapper" data-self-id="' + t3.id + '"></div><div class="vquote" data-self-id="' + t3.id + '"></div></div>';
            i3.html(p3);
            var d2 = i3.find(".vat");
            i3.find("a:not(.at)").forEach(function(e3) {
              (0, A.default)(e3).attr({ target: "_blank", rel: "noopener" });
            }), r3 ? n3.append(i3) : n3.prepend(i3);
            var h2 = i3.find(".vcontent");
            h2 && P(h2), d2 && z(d2, t3);
          }, I = {}, z = function(t3, n3) {
            t3.on("click", function(r3) {
              var i3 = t3.attr("data-vm-id"), o3 = t3.attr("data-self-id"), a3 = e2.$el.find(".vwrap"), u2 = "@" + A.default.escape(n3.get("nick"));
              (0, A.default)('.vreply-wrapper[data-self-id="' + o3 + '"]').append(a3).find(".cancel-reply").show(), I = { at: A.default.escape(u2) + " ", rid: i3, pid: o3, rmail: n3.get("mail") }, v2.comment.attr({ placeholder: u2 })[0].focus();
            });
          }, R = function() {
            setTimeout(function() {
              try {
                e2.cfg.mathjax && "MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() || MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.querySelector(".v")])), "renderMathInElement" in window && renderMathInElement((0, A.default)(".v")[0], { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }] });
              } catch (e3) {
              }
            }, 100);
          }, P = function(e3) {
            setTimeout(function() {
              e3[0].offsetHeight > 200 && (e3.addClass("expand"), e3.on("click", function(t3) {
                e3.removeClass("expand");
              }));
            });
          };
          !function(t3) {
            if (t3 = A.default.store.get(h.MetaCacheKey) || t3) {
              for (var n3 in p2)
                if (p2.hasOwnProperty(n3)) {
                  var r3 = p2[n3];
                  e2.$el.find(".v" + r3).val(A.default.unescape(t3[r3])), S[r3] = t3[r3];
                }
            }
            var i3 = A.default.store.get(h.QQCacheKey);
            S.QQAvatar = e2.cfg.enableQQ && !!i3 && i3.pic || "";
          }(), e2.reset = function() {
            S.comment = "", v2.comment.val(""), f2(v2.comment), v2.comment.attr("placeholder", e2.cfg.placeholder), I = {}, e2.$preview.hide(), e2.$el.find(".vpanel").append(e2.$el.find(".vwrap")), e2.$el.find(".cancel-reply").hide(), O = "", l.default.update(v2.comment[0]);
          };
          var M = e2.$el.find(".vsubmit"), L = function(t3) {
            if (e2.cfg.requiredFields.indexOf("nick") > -1 && S.nick.length < 3)
              return v2.nick[0].focus(), void e2.$el.find(".status-bar").text("" + e2.i18n.t("nickFail")).empty(3e3);
            if (e2.cfg.requiredFields.indexOf("mail") > -1 && !/[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(S.mail))
              return v2.mail[0].focus(), void e2.$el.find(".status-bar").text("" + e2.i18n.t("mailFail")).empty(3e3);
            if ("" == O)
              return void v2.comment[0].focus();
            for (var n3 in B)
              if (B.hasOwnProperty(n3)) {
                var r3 = B[n3];
                O = O.replace(n3, r3), URL.revokeObjectURL(n3);
              }
            B = {}, S.comment = (0, C.default)(O), S.nick = S.nick || "Anonymous";
            var i3 = A.default.store.get("vlx");
            if (i3) {
              if (Date.now() / 1e3 - i3 / 1e3 < 20)
                return void e2.$el.find(".status-bar").text(e2.i18n.t("busy")).empty(3e3);
            }
            U();
          }, N = function() {
            var e3 = new AV.ACL();
            return e3.setPublicReadAccess(true), e3.setPublicWriteAccess(false), e3;
          }, U = function() {
            A.default.store.set("vlx", Date.now()), M.attr({ disabled: true }), e2.$loading.show(true);
            var t3 = AV.Object.extend(e2.cfg.clazzName || "Comment"), n3 = new t3();
            if (S.url = decodeURI(e2.cfg.path), S.insertedAt = /* @__PURE__ */ new Date(), I.rid) {
              var r3 = I.pid || I.rid;
              n3.set("rid", I.rid), n3.set("pid", r3), S.comment = O.replace("<p>", '<p><a class="at" href="#' + r3 + '">' + I.at + "</a> , ");
            }
            for (var i3 in S)
              if (S.hasOwnProperty(i3)) {
                var o3 = S[i3];
                n3.set(i3, o3);
              }
            n3.setACL(N()), n3.save().then(function(t4) {
              "Anonymous" != S.nick && A.default.store.set(h.MetaCacheKey, { nick: S.nick, link: S.link, mail: S.mail });
              var n4 = e2.$el.find(".vnum");
              try {
                I.rid ? T2(t4, (0, A.default)('.vquote[data-self-id="' + I.rid + '"]'), true) : (Number(n4.text()) ? n4.text(Number(n4.text()) + 1) : e2.$el.find(".vcount").show().find(".vnum").text(Number(n4.text()) + 1), T2(t4, e2.$el.find(".vcards")), k2.skip++), M.removeAttr("disabled"), e2.$loading.hide(), e2.reset();
              } catch (t5) {
                (0, x.default)(e2, t5, "save");
              }
            }).catch(function(t4) {
              (0, x.default)(e2, t4, "commitEvt");
            });
          };
          M.on("click", L), (0, A.default)(document).on("keydown", function(e3) {
            e3 = window.event || e3;
            var t3 = e3.keyCode || e3.which || e3.charCode;
            ((e3.ctrlKey || e3.metaKey) && 13 === t3 && L(), 9 === t3) && ("veditor" == (document.activeElement.id || "") && (e3.preventDefault(), w2(o2[0], "    ")));
          }).on("paste", function(e3) {
            var t3 = "clipboardData" in e3 ? e3.clipboardData : e3.originalEvent && e3.originalEvent.clipboardData || window.clipboardData;
            t3 && Q(t3.items, true);
          }), o2.on("dragenter dragleave dragover drop", function(e3) {
            e3.stopPropagation(), e3.preventDefault(), "drop" === e3.type && Q(e3.dataTransfer.items);
          });
          var Q = function(e3, t3) {
            for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) {
              var i3 = e3[n3];
              if ("string" === i3.kind && i3.type.match("^text/html"))
                !t3 && i3.getAsString(function(e4) {
                  e4 && w2(o2[0], e4.replace(/<[^>]+>/g, ""));
                });
              else if (i3.type.indexOf("image") > -1) {
                q(i3.getAsFile());
                continue;
              }
            }
          }, q = function(e3) {
            try {
              var t3 = URL.createObjectURL(e3), n3 = "![image](" + t3 + ") ", r3 = new FileReader();
              w2(o2[0], n3), r3.onload = function() {
                B[t3] = r3.result;
              }, r3.readAsDataURL(e3);
            } catch (e4) {
            }
          };
        }, e.exports = o, e.exports.default = o;
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = n(3), i = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(r), o = function(e2, t2) {
          i.default.ajax({ url: "https://app-router.com/2/route", body: { appId: e2 } }).then(function(e3) {
            e3.json().then(function(e4) {
              return t2 && t2("//" + e4.api_server);
            });
          });
        };
        t.default = { getApi: o };
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = n(3), i = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(r), o = false;
        t.default = function(e2, t2) {
          if ("AV" in window) {
            var n2 = window.AV.version || window.AV.VERSION;
            parseInt(n2.split(".")[0]) > 2 ? o = !!AV.applicationId && !!AV.applicationKey : i.default.deleteInWin("AV", 0);
          }
          o ? t2 && t2() : i.default.sdkLoader("//unpkg.com/leancloud-storage@3/dist/av-min.js", "AV", function(n3) {
            var r2 = "https://", i2 = "", a = e2.app_id || e2.appId, u = e2.app_key || e2.appKey;
            if (!e2.serverURLs)
              switch (a.slice(-9)) {
                case "-9Nh9j0Va":
                  r2 += "tab.";
                  break;
                case "-MdYXbMMI":
                  r2 += "us.";
              }
            i2 = e2.serverURLs || r2 + "leancloud.cn", AV.init({ appId: a, appKey: u, serverURLs: i2 }), o = true, t2 && t2();
          });
        };
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        t.__esModule = true;
        var i = n(84), o = r(i), a = n(100), u = r(a), s = n(101), l = r(s), c = n(98), f = r(c), p = n(99), d = r(p), h = { zh: u.default, "zh-cn": u.default, "zh-CN": u.default, "zh-TW": l.default, en: f.default, "en-US": f.default, ja: d.default, "ja-JP": d.default };
        t.default = function(e2, t2) {
          return !h[e2] && e2 && t2 && (h[e2] = t2), new o.default({ phrases: h[e2 || "zh"], locale: e2 });
        };
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true, t.default = function(e2, t2) {
          if (e2.$el && e2.$loading.hide().$nodata.hide(), "[object Error]" === {}.toString.call(t2)) {
            var n2 = t2.code || t2.message || t2.error || "";
            if (isNaN(n2))
              e2.$el && e2.$nodata.show('<pre style="text-align:left;"> ' + JSON.stringify(t2) + "</pre>");
            else {
              var r = e2.i18n.t("code-" + n2), i = (r == "code-" + n2 ? void 0 : r) || t2.message || t2.error || "";
              101 == n2 || -1 == n2 ? e2.$nodata.show() : e2.$el && e2.$nodata.show('<pre style="text-align:left;">Code ' + n2 + ": " + i + "</pre>");
            }
          } else
            e2.$el && e2.$nodata.show('<pre style="text-align:left;">' + JSON.stringify(t2) + "</pre>");
        };
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        t.__esModule = true;
        var i = n(83), o = n(79), a = r(o), u = n(3), s = r(u), l = n(12), c = r(l), f = n(13), p = r(f), d = new i.marked.Renderer();
        d.code = function(e2, t2) {
          return '<pre><code class="hljs language-' + t2 + '">' + (t2 && hljs.getLanguage(t2) ? hljs.highlight(t2, e2).value : s.default.escape(e2)) + "</code></pre>";
        }, i.marked.setOptions({ renderer: "hljs" in window ? d : new i.marked.Renderer(), highlight: function(e2, t2) {
          return "hljs" in window ? t2 && hljs.getLanguage(t2) && hljs.highlight(t2, e2, true).value || hljs.highlightAuto(e2).value : (0, a.default)(e2);
        }, gfm: true, tables: true, breaks: true, pedantic: false, sanitize: false, smartLists: true, smartypants: true, headerPrefix: "v-" }), t.default = function(e2) {
          return (0, p.default)((0, i.marked)(c.default.parse(e2, true)));
        };
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true, t.recordIPFn = t.fetchQQFn = void 0;
        var r = n(3), i = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(r), o = n(6), a = function(e2, t2) {
          var n2 = i.default.store.get(o.QQCacheKey);
          n2 && n2.qq == e2 ? t2 && t2(n2) : i.default.ajax({ url: "//valine.api.ioliu.cn/getqqinfo", method: "POST", body: { qq: e2 } }).then(function(e3) {
            e3.json().then(function(e4) {
              e4.errmsg || (i.default.store.set(o.QQCacheKey, e4), t2 && t2(e4));
            });
          });
        }, u = function(e2) {
          i.default.ajax({ url: "https://forge.speedtest.cn/api/location/info", method: "get" }).then(function(e3) {
            return e3.json();
          }).then(function(t2) {
            e2 && e2(t2.ip);
          });
        };
        t.fetchQQFn = a, t.recordIPFn = u;
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true, t.default = function(e2, t2) {
          if (!e2)
            return "Invalid Date.";
          try {
            var n2 = i(e2).getTime();
            if (isNaN(n2))
              return "Invalid Date.";
            var o2 = (/* @__PURE__ */ new Date()).getTime(), a = o2 - n2, u = Math.floor(a / 864e5);
            if (0 === u) {
              var s = a % 864e5, l = Math.floor(s / 36e5);
              if (0 === l) {
                var c = s % 36e5, f = Math.floor(c / 6e4);
                if (0 === f) {
                  var p = c % 6e4;
                  return Math.round(p / 1e3) + " " + t2.t("seconds");
                }
                return f + " " + t2.t("minutes");
              }
              return l + " " + t2.t("hours");
            }
            return u < 0 ? t2.t("now") : u < 8 ? u + " " + t2.t("days") : r(e2);
          } catch (e3) {
          }
        };
        var r = function(e2) {
          var t2 = o(e2.getDate(), 2), n2 = o(e2.getMonth() + 1, 2);
          return o(e2.getFullYear(), 2) + "-" + n2 + "-" + t2;
        }, i = function e2(t2) {
          return t2 instanceof Date ? t2 : !isNaN(t2) || /^\d+$/.test(t2) ? new Date(parseInt(t2)) : /GMT/.test(t2 || "") ? e2(new Date(t2).getTime()) : (t2 = (t2 || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(t2));
        }, o = function(e2, t2) {
          for (var n2 = e2.toString(); n2.length < t2; )
            n2 = "0" + n2;
          return n2;
        };
      }, function(e, t, n) {
        var r;
        !function(i) {
          "use strict";
          function o(e2, t2) {
            var n2 = (65535 & e2) + (65535 & t2);
            return (e2 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
          }
          function a(e2, t2) {
            return e2 << t2 | e2 >>> 32 - t2;
          }
          function u(e2, t2, n2, r2, i2, u2) {
            return o(a(o(o(t2, e2), o(r2, u2)), i2), n2);
          }
          function s(e2, t2, n2, r2, i2, o2, a2) {
            return u(t2 & n2 | ~t2 & r2, e2, t2, i2, o2, a2);
          }
          function l(e2, t2, n2, r2, i2, o2, a2) {
            return u(t2 & r2 | n2 & ~r2, e2, t2, i2, o2, a2);
          }
          function c(e2, t2, n2, r2, i2, o2, a2) {
            return u(t2 ^ n2 ^ r2, e2, t2, i2, o2, a2);
          }
          function f(e2, t2, n2, r2, i2, o2, a2) {
            return u(n2 ^ (t2 | ~r2), e2, t2, i2, o2, a2);
          }
          function p(e2, t2) {
            e2[t2 >> 5] |= 128 << t2 % 32, e2[14 + (t2 + 64 >>> 9 << 4)] = t2;
            var n2, r2, i2, a2, u2, p2 = 1732584193, d2 = -271733879, h2 = -1732584194, v2 = 271733878;
            for (n2 = 0; n2 < e2.length; n2 += 16)
              r2 = p2, i2 = d2, a2 = h2, u2 = v2, p2 = s(p2, d2, h2, v2, e2[n2], 7, -680876936), v2 = s(v2, p2, d2, h2, e2[n2 + 1], 12, -389564586), h2 = s(h2, v2, p2, d2, e2[n2 + 2], 17, 606105819), d2 = s(d2, h2, v2, p2, e2[n2 + 3], 22, -1044525330), p2 = s(p2, d2, h2, v2, e2[n2 + 4], 7, -176418897), v2 = s(v2, p2, d2, h2, e2[n2 + 5], 12, 1200080426), h2 = s(h2, v2, p2, d2, e2[n2 + 6], 17, -1473231341), d2 = s(d2, h2, v2, p2, e2[n2 + 7], 22, -45705983), p2 = s(p2, d2, h2, v2, e2[n2 + 8], 7, 1770035416), v2 = s(v2, p2, d2, h2, e2[n2 + 9], 12, -1958414417), h2 = s(h2, v2, p2, d2, e2[n2 + 10], 17, -42063), d2 = s(d2, h2, v2, p2, e2[n2 + 11], 22, -1990404162), p2 = s(p2, d2, h2, v2, e2[n2 + 12], 7, 1804603682), v2 = s(v2, p2, d2, h2, e2[n2 + 13], 12, -40341101), h2 = s(h2, v2, p2, d2, e2[n2 + 14], 17, -1502002290), d2 = s(d2, h2, v2, p2, e2[n2 + 15], 22, 1236535329), p2 = l(p2, d2, h2, v2, e2[n2 + 1], 5, -165796510), v2 = l(v2, p2, d2, h2, e2[n2 + 6], 9, -1069501632), h2 = l(h2, v2, p2, d2, e2[n2 + 11], 14, 643717713), d2 = l(d2, h2, v2, p2, e2[n2], 20, -373897302), p2 = l(p2, d2, h2, v2, e2[n2 + 5], 5, -701558691), v2 = l(v2, p2, d2, h2, e2[n2 + 10], 9, 38016083), h2 = l(h2, v2, p2, d2, e2[n2 + 15], 14, -660478335), d2 = l(d2, h2, v2, p2, e2[n2 + 4], 20, -405537848), p2 = l(p2, d2, h2, v2, e2[n2 + 9], 5, 568446438), v2 = l(v2, p2, d2, h2, e2[n2 + 14], 9, -1019803690), h2 = l(h2, v2, p2, d2, e2[n2 + 3], 14, -187363961), d2 = l(d2, h2, v2, p2, e2[n2 + 8], 20, 1163531501), p2 = l(p2, d2, h2, v2, e2[n2 + 13], 5, -1444681467), v2 = l(v2, p2, d2, h2, e2[n2 + 2], 9, -51403784), h2 = l(h2, v2, p2, d2, e2[n2 + 7], 14, 1735328473), d2 = l(d2, h2, v2, p2, e2[n2 + 12], 20, -1926607734), p2 = c(p2, d2, h2, v2, e2[n2 + 5], 4, -378558), v2 = c(v2, p2, d2, h2, e2[n2 + 8], 11, -2022574463), h2 = c(h2, v2, p2, d2, e2[n2 + 11], 16, 1839030562), d2 = c(d2, h2, v2, p2, e2[n2 + 14], 23, -35309556), p2 = c(p2, d2, h2, v2, e2[n2 + 1], 4, -1530992060), v2 = c(v2, p2, d2, h2, e2[n2 + 4], 11, 1272893353), h2 = c(h2, v2, p2, d2, e2[n2 + 7], 16, -155497632), d2 = c(d2, h2, v2, p2, e2[n2 + 10], 23, -1094730640), p2 = c(p2, d2, h2, v2, e2[n2 + 13], 4, 681279174), v2 = c(v2, p2, d2, h2, e2[n2], 11, -358537222), h2 = c(h2, v2, p2, d2, e2[n2 + 3], 16, -722521979), d2 = c(d2, h2, v2, p2, e2[n2 + 6], 23, 76029189), p2 = c(p2, d2, h2, v2, e2[n2 + 9], 4, -640364487), v2 = c(v2, p2, d2, h2, e2[n2 + 12], 11, -421815835), h2 = c(h2, v2, p2, d2, e2[n2 + 15], 16, 530742520), d2 = c(d2, h2, v2, p2, e2[n2 + 2], 23, -995338651), p2 = f(p2, d2, h2, v2, e2[n2], 6, -198630844), v2 = f(v2, p2, d2, h2, e2[n2 + 7], 10, 1126891415), h2 = f(h2, v2, p2, d2, e2[n2 + 14], 15, -1416354905), d2 = f(d2, h2, v2, p2, e2[n2 + 5], 21, -57434055), p2 = f(p2, d2, h2, v2, e2[n2 + 12], 6, 1700485571), v2 = f(v2, p2, d2, h2, e2[n2 + 3], 10, -1894986606), h2 = f(h2, v2, p2, d2, e2[n2 + 10], 15, -1051523), d2 = f(d2, h2, v2, p2, e2[n2 + 1], 21, -2054922799), p2 = f(p2, d2, h2, v2, e2[n2 + 8], 6, 1873313359), v2 = f(v2, p2, d2, h2, e2[n2 + 15], 10, -30611744), h2 = f(h2, v2, p2, d2, e2[n2 + 6], 15, -1560198380), d2 = f(d2, h2, v2, p2, e2[n2 + 13], 21, 1309151649), p2 = f(p2, d2, h2, v2, e2[n2 + 4], 6, -145523070), v2 = f(v2, p2, d2, h2, e2[n2 + 11], 10, -1120210379), h2 = f(h2, v2, p2, d2, e2[n2 + 2], 15, 718787259), d2 = f(d2, h2, v2, p2, e2[n2 + 9], 21, -343485551), p2 = o(p2, r2), d2 = o(d2, i2), h2 = o(h2, a2), v2 = o(v2, u2);
            return [p2, d2, h2, v2];
          }
          function d(e2) {
            var t2, n2 = "", r2 = 32 * e2.length;
            for (t2 = 0; t2 < r2; t2 += 8)
              n2 += String.fromCharCode(e2[t2 >> 5] >>> t2 % 32 & 255);
            return n2;
          }
          function h(e2) {
            var t2, n2 = [];
            for (n2[(e2.length >> 2) - 1] = void 0, t2 = 0; t2 < n2.length; t2 += 1)
              n2[t2] = 0;
            var r2 = 8 * e2.length;
            for (t2 = 0; t2 < r2; t2 += 8)
              n2[t2 >> 5] |= (255 & e2.charCodeAt(t2 / 8)) << t2 % 32;
            return n2;
          }
          function v(e2) {
            return d(p(h(e2), 8 * e2.length));
          }
          function g(e2, t2) {
            var n2, r2, i2 = h(e2), o2 = [], a2 = [];
            for (o2[15] = a2[15] = void 0, i2.length > 16 && (i2 = p(i2, 8 * e2.length)), n2 = 0; n2 < 16; n2 += 1)
              o2[n2] = 909522486 ^ i2[n2], a2[n2] = 1549556828 ^ i2[n2];
            return r2 = p(o2.concat(h(t2)), 512 + 8 * t2.length), d(p(a2.concat(r2), 640));
          }
          function m(e2) {
            var t2, n2, r2 = "0123456789abcdef", i2 = "";
            for (n2 = 0; n2 < e2.length; n2 += 1)
              t2 = e2.charCodeAt(n2), i2 += r2.charAt(t2 >>> 4 & 15) + r2.charAt(15 & t2);
            return i2;
          }
          function y(e2) {
            return unescape(encodeURIComponent(e2));
          }
          function b(e2) {
            return v(y(e2));
          }
          function D(e2) {
            return m(b(e2));
          }
          function x(e2, t2) {
            return g(y(e2), y(t2));
          }
          function w(e2, t2) {
            return m(x(e2, t2));
          }
          function A(e2, t2, n2) {
            return t2 ? n2 ? x(t2, e2) : w(t2, e2) : n2 ? b(e2) : D(e2);
          }
          void 0 !== (r = (function() {
            return A;
          }).call(t, n, t, e)) && (e.exports = r);
        }();
      }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(4), o = n(1), a = n(5), u = n(14), s = n(15), l = s(), c = n(44), f = o("Array.prototype.slice"), p = i.apply(l), d = function(e2, t2) {
          return a(e2), p(e2, f(arguments, 1));
        };
        r(d, { getPolyfill: s, implementation: u, shim: c }), e.exports = d;
      }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(15);
        e.exports = function() {
          var e2 = i();
          return r(Array.prototype, { forEach: e2 }, { forEach: function() {
            return Array.prototype.forEach !== e2;
          } }), e2;
        };
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = n(47), i = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(r);
        t.default = function(e2) {
          return e2 = (0, i.default)({ url: "", method: "get", body: {} }, e2), new Promise(function(t2, n2) {
            if ("jsonp" == e2.method) {
              var r2 = "cb_" + (Date.now() + Math.round(1e3 * Math.random())).toString(32), i2 = document, o2 = i2.body, u = i2.createElement("script");
              return u.async = true, u.defer = true, e2.url.indexOf("?") > -1 ? e2.url += "&" + a({ callback: r2, t: Date.now() }) : e2.url += "?" + a({ callback: r2, t: Date.now() }), u.src = e2.url, window[r2] = function(e3) {
                window[r2] = null, o2.removeChild(u), t2(e3);
              }, void o2.appendChild(u);
            }
            var s = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), l = [], c = [], f = {}, p = function e3() {
              return { ok: 2 == (s.status / 100 | 0), statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
                return Promise.resolve(s.responseText);
              }, json: function() {
                return Promise.resolve(s.responseText).then(JSON.parse);
              }, blob: function() {
                return Promise.resolve(new Blob([s.response]));
              }, clone: e3, headers: { keys: function() {
                return l;
              }, entries: function() {
                return c;
              }, get: function(e4) {
                return f[e4.toLowerCase()];
              }, has: function(e4) {
                return e4.toLowerCase() in f;
              } } };
            };
            a(e2.body) && (e2.url = e2.url + "?" + ("get" == e2.method ? a(e2.body) : "")), s.open(e2.method || "get", e2.url), "blob" == e2.dataType && (s.responseType = "blob"), s.onload = function() {
              s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e3, t3, n3) {
                l.push(t3 = t3.toLowerCase()), c.push([t3, n3]), f[t3] = f[t3] ? f[t3] + "," + n3 : n3;
              }), t2(p());
            }, s.onerror = n2, s.withCredentials = "include" == e2.credentials;
            for (var d in e2.headers)
              s.setRequestHeader(d, e2.headers[d]);
            s.send("post" == e2.method ? e2.body : "get" == e2.method ? "" : a(e2.body));
          });
        };
        var o = encodeURIComponent, a = function(e2) {
          var t2 = [];
          for (var n2 in e2)
            e2.hasOwnProperty(n2) && t2.push(o(n2) + "=" + o(e2[n2]));
          return (t2 = t2.join("&").replace(/%20/g, "+")) || "";
        };
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = function(e2) {
          e2 = e2 || navigator.userAgent;
          var t2 = {}, n2 = { Trident: e2.indexOf("Trident") > -1 || e2.indexOf("NET CLR") > -1, Presto: e2.indexOf("Presto") > -1, WebKit: e2.indexOf("AppleWebKit") > -1, Gecko: e2.indexOf("Gecko/") > -1, Safari: e2.indexOf("Safari") > -1, Edge: e2.indexOf("Edge") > -1 || e2.indexOf("Edg") > -1, Chrome: e2.indexOf("Chrome") > -1 || e2.indexOf("CriOS") > -1, IE: e2.indexOf("MSIE") > -1 || e2.indexOf("Trident") > -1, Firefox: e2.indexOf("Firefox") > -1 || e2.indexOf("FxiOS") > -1, "Firefox Focus": e2.indexOf("Focus") > -1, Chromium: e2.indexOf("Chromium") > -1, Opera: e2.indexOf("Opera") > -1 || e2.indexOf("OPR") > -1, Vivaldi: e2.indexOf("Vivaldi") > -1, Yandex: e2.indexOf("YaBrowser") > -1, Kindle: e2.indexOf("Kindle") > -1 || e2.indexOf("Silk/") > -1, 360: e2.indexOf("360EE") > -1 || e2.indexOf("360SE") > -1, UC: e2.indexOf("UC") > -1 || e2.indexOf(" UBrowser") > -1, QQBrowser: e2.indexOf("QQBrowser") > -1, QQ: e2.indexOf("QQ/") > -1, Baidu: e2.indexOf("Baidu") > -1 || e2.indexOf("BIDUBrowser") > -1, Maxthon: e2.indexOf("Maxthon") > -1, Sogou: e2.indexOf("MetaSr") > -1 || e2.indexOf("Sogou") > -1, LBBROWSER: e2.indexOf("LBBROWSER") > -1, "2345Explorer": e2.indexOf("2345Explorer") > -1, TheWorld: e2.indexOf("TheWorld") > -1, XiaoMi: e2.indexOf("MiuiBrowser") > -1, Quark: e2.indexOf("Quark") > -1, Qiyu: e2.indexOf("Qiyu") > -1, Wechat: e2.indexOf("MicroMessenger") > -1, Taobao: e2.indexOf("AliApp(TB") > -1, Alipay: e2.indexOf("AliApp(AP") > -1, Weibo: e2.indexOf("Weibo") > -1, Douban: e2.indexOf("com.douban.frodo") > -1, Suning: e2.indexOf("SNEBUY-APP") > -1, iQiYi: e2.indexOf("IqiyiApp") > -1, Windows: e2.indexOf("Windows") > -1, Linux: e2.indexOf("Linux") > -1 || e2.indexOf("X11") > -1, macOS: e2.indexOf("Macintosh") > -1, Android: e2.indexOf("Android") > -1 || e2.indexOf("Adr") > -1, Ubuntu: e2.indexOf("Ubuntu") > -1, FreeBSD: e2.indexOf("FreeBSD") > -1, Debian: e2.indexOf("Debian") > -1, "Windows Phone": e2.indexOf("IEMobile") > -1 || e2.indexOf("Windows Phone") > -1, BlackBerry: e2.indexOf("BlackBerry") > -1 || e2.indexOf("RIM") > -1 || e2.indexOf("BB10") > -1, MeeGo: e2.indexOf("MeeGo") > -1, Symbian: e2.indexOf("Symbian") > -1, iOS: e2.indexOf("like Mac OS X") > -1, "Chrome OS": e2.indexOf("CrOS") > -1, WebOS: e2.indexOf("hpwOS") > -1, Mobile: e2.indexOf("Mobi") > -1 || e2.indexOf("iPh") > -1 || e2.indexOf("480") > -1, Tablet: e2.indexOf("Tablet") > -1 || e2.indexOf("Pad") > -1 || e2.indexOf("Nexus 7") > -1 };
          n2.Mobile && (n2.Mobile = !(e2.indexOf("iPad") > -1));
          var r2 = { browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"], os: ["Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"] };
          for (var i in r2)
            if (r2.hasOwnProperty(i))
              for (var o = 0, a = r2[i].length; o < a; o++) {
                var u = r2[i][o];
                n2[u] && (t2[i] = u);
              }
          var s = { Windows: function() {
            return { "10.0": "11", 6.4: "10", 6.3: "8.1", 6.2: "8", 6.1: "7", "6.0": "Vista", 5.2: "XP", 5.1: "XP", "5.0": "2000" }[e2.replace(/^.*Windows NT ([\d.]+).*$/, "$1")];
          }, Android: e2.replace(/^.*Android ([\d.]+);.*$/, "$1"), iOS: e2.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."), Debian: e2.replace(/^.*Debian\/([\d.]+).*$/, "$1"), "Windows Phone": e2.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"), macOS: e2.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."), WebOS: e2.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"), BlackBerry: e2.replace(/^.*BB([\d.]+);*$/, "$1") };
          t2.osVersion = "";
          var l = s[t2.os];
          l && (t2.osVersion = "function" == typeof l ? l() : l == e2 ? "" : l);
          var c = { Safari: e2.replace(/^.*Version\/([\d.]+).*$/, "$1"), Chrome: e2.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"), IE: e2.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"), Edge: e2.replace(/^.*Edge?\/([\d.]+).*$/, "$1"), Firefox: e2.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"), "Firefox Focus": e2.replace(/^.*Focus\/([\d.]+).*$/, "$1"), Chromium: e2.replace(/^.*Chromium\/([\d.]+).*$/, "$1"), Opera: e2.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"), Vivaldi: e2.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"), Yandex: e2.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"), Kindle: e2.replace(/^.*Version\/([\d.]+).*$/, "$1"), Maxthon: e2.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"), QQBrowser: e2.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"), QQ: e2.replace(/^.*QQ\/([\d.]+).*$/, "$1"), Baidu: e2.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"), UC: e2.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"), Sogou: e2.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"), "2345Explorer": e2.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"), TheWorld: e2.replace(/^.*TheWorld ([\d.]+).*$/, "$1"), XiaoMi: e2.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"), Quark: e2.replace(/^.*Quark\/([\d.]+).*$/, "$1"), Qiyu: e2.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"), Wechat: e2.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"), Taobao: e2.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"), Alipay: e2.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"), Weibo: e2.replace(/^.*weibo__([\d.]+).*$/, "$1"), Douban: e2.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"), Suning: e2.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"), iQiYi: e2.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1") };
          t2.version = "";
          var f = c[t2.browser];
          return f && (t2.version = "function" == typeof f ? f() : f == e2 ? "" : f), void 0 == t2.browser && (t2.browser = "Unknow App"), t2;
        };
        t.default = r;
      }, function(e, t, n) {
        "use strict";
        t.__esModule = true, t.default = function(e2) {
          e2 = Object(e2);
          for (var t2 = 1, n2 = arguments.length; t2 < n2; t2++) {
            var r = arguments[t2];
            if (r)
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e2[i] = r[i]);
          }
          return e2;
        };
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          return /^\{[\s\S]*\}$/.test(JSON.stringify(e2));
        }
        function i(e2) {
          return "[object Function]" === {}.toString.call(e2);
        }
        function o(e2) {
          return "[object Array]" === {}.toString.call(e2);
        }
        function a(e2) {
          return void 0 === e2 || "function" == typeof e2 ? e2 + "" : JSON.stringify(e2);
        }
        function u(e2) {
          if ("string" == typeof e2)
            try {
              return JSON.parse(e2);
            } catch (t2) {
              return e2;
            }
        }
        function s() {
          if (!(this instanceof s))
            return new s();
        }
        function l(e2, t2) {
          var n2 = arguments, a2 = null;
          if (f || (f = s()), 0 === n2.length)
            return f.get();
          if (1 === n2.length) {
            if ("string" == typeof e2)
              return f.get(e2);
            if (r(e2))
              return f.set(e2);
          }
          if (2 === n2.length && "string" == typeof e2) {
            if (!t2)
              return f.remove(e2);
            if (t2 && "string" == typeof t2)
              return f.set(e2, t2);
            t2 && i(t2) && (a2 = null, a2 = t2(e2, f.get(e2)), l.set(e2, a2));
          }
          if (2 === n2.length && o(e2) && i(t2))
            for (var u2 = 0, c2 = e2.length; u2 < c2; u2++)
              a2 = t2(e2[u2], f.get(e2[u2])), l.set(e2[u2], a2);
          return l;
        }
        t.__esModule = true;
        var c = window.localStorage;
        c = function(e2) {
          var t2 = "_Is_Incognit";
          try {
            e2.setItem(t2, "yes");
          } catch (t3) {
            if (["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].indexOf(t3.name) > -1) {
              var n2 = function() {
              };
              e2.__proto__ = { setItem: n2, getItem: n2, removeItem: n2, clear: n2 };
            }
          } finally {
            "yes" === e2.getItem(t2) && e2.removeItem(t2);
          }
          return e2;
        }(c), s.prototype = { set: function(e2, t2) {
          if (e2 && !r(e2))
            c.setItem(e2, a(t2));
          else if (r(e2))
            for (var n2 in e2)
              this.set(n2, e2[n2]);
          return this;
        }, get: function(e2) {
          if (!e2) {
            var t2 = {};
            return this.each(function(e3, n3) {
              return t2[e3] = n3;
            }), t2;
          }
          if ("?" === e2.charAt(0))
            return this.has(e2.substr(1));
          var n2 = arguments;
          if (n2.length > 1) {
            for (var r2 = {}, i2 = 0, o2 = n2.length; i2 < o2; i2++) {
              var a2 = u(c.getItem(n2[i2]));
              a2 && (r2[n2[i2]] = a2);
            }
            return r2;
          }
          return u(c.getItem(e2));
        }, clear: function() {
          return c.clear(), this;
        }, remove: function(e2) {
          var t2 = this.get(e2);
          return c.removeItem(e2), t2;
        }, has: function(e2) {
          return {}.hasOwnProperty.call(this.get(), e2);
        }, keys: function() {
          var e2 = [];
          return this.each(function(t2) {
            e2.push(t2);
          }), e2;
        }, each: function(e2) {
          for (var t2 = 0, n2 = c.length; t2 < n2; t2++) {
            var r2 = c.key(t2);
            e2(r2, this.get(r2));
          }
          return this;
        }, search: function(e2) {
          for (var t2 = this.keys(), n2 = {}, r2 = 0, i2 = t2.length; r2 < i2; r2++)
            t2[r2].indexOf(e2) > -1 && (n2[t2[r2]] = this.get(t2[r2]));
          return n2;
        } };
        var f = null;
        for (var p in s.prototype)
          l[p] = s.prototype[p];
        t.default = l;
      }, function(e, t, n) {
        var r, i;
        !function(n2, o) {
          var o = function(e2, t2, n3) {
            function r2(i2, o2, a) {
              return a = Object.create(r2.fn), i2 && a.push.apply(a, i2[t2] ? [i2] : "" + i2 === i2 ? /</.test(i2) ? ((o2 = e2.createElement(o2)).innerHTML = i2, o2.children) : o2 ? (o2 = r2(o2)[0]) ? o2[n3](i2) : a : e2[n3](i2) : i2), a;
            }
            return r2.fn = [], r2.one = function(e3, t3) {
              return r2(e3, t3)[0] || null;
            }, r2;
          }(document, "addEventListener", "querySelectorAll");
          r = [], void 0 !== (i = (function() {
            return o;
          }).apply(t, r)) && (e.exports = i);
        }();
      }, function(e, t, n) {
        function r(e2) {
          return void 0 === e2 || null === e2;
        }
        function i(e2) {
          var t2 = {};
          for (var n2 in e2)
            t2[n2] = e2[n2];
          return t2;
        }
        function o(e2) {
          e2 = i(e2 || {}), e2.whiteList = e2.whiteList || a.whiteList, e2.onAttr = e2.onAttr || a.onAttr, e2.onIgnoreAttr = e2.onIgnoreAttr || a.onIgnoreAttr, e2.safeAttrValue = e2.safeAttrValue || a.safeAttrValue, this.options = e2;
        }
        var a = n(16), u = n(51);
        n(17);
        o.prototype.process = function(e2) {
          if (e2 = e2 || "", !(e2 = e2.toString()))
            return "";
          var t2 = this, n2 = t2.options, i2 = n2.whiteList, o2 = n2.onAttr, a2 = n2.onIgnoreAttr, s = n2.safeAttrValue;
          return u(e2, function(e3, t3, n3, u2, l) {
            var c = i2[n3], f = false;
            if (true === c ? f = c : "function" == typeof c ? f = c(u2) : c instanceof RegExp && (f = c.test(u2)), true !== f && (f = false), u2 = s(n3, u2)) {
              var p = { position: t3, sourcePosition: e3, source: l, isWhite: f };
              if (f) {
                var d = o2(n3, u2, p);
                return r(d) ? n3 + ":" + u2 : d;
              }
              var d = a2(n3, u2, p);
              return r(d) ? void 0 : d;
            }
          });
        }, e.exports = o;
      }, function(e, t, n) {
        function r(e2, t2) {
          function n2() {
            if (!o) {
              var n3 = i.trim(e2.slice(a, u)), r3 = n3.indexOf(":");
              if (-1 !== r3) {
                var l2 = i.trim(n3.slice(0, r3)), c2 = i.trim(n3.slice(r3 + 1));
                if (l2) {
                  var f = t2(a, s.length, l2, c2, n3);
                  f && (s += f + "; ");
                }
              }
            }
            a = u + 1;
          }
          e2 = i.trimRight(e2), ";" !== e2[e2.length - 1] && (e2 += ";");
          for (var r2 = e2.length, o = false, a = 0, u = 0, s = ""; u < r2; u++) {
            var l = e2[u];
            if ("/" === l && "*" === e2[u + 1]) {
              var c = e2.indexOf("*/", u + 2);
              if (-1 === c)
                break;
              u = c + 1, a = u + 1, o = false;
            } else
              "(" === l ? o = true : ")" === l ? o = false : ";" === l ? o || n2() : "\n" === l && n2();
          }
          return i.trim(s);
        }
        var i = n(17);
        e.exports = r;
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = n(1), o = r("%TypeError%"), a = n(54), u = r("%Reflect.apply%", true) || i("%Function.prototype.apply%");
        e.exports = function(e2, t2) {
          var n2 = arguments.length > 2 ? arguments[2] : [];
          if (!a(n2))
            throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
          return u(e2, t2, n2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = n(19), a = n(8);
        e.exports = function(e2, t2) {
          if ("Object" !== a(e2))
            throw new i("Assertion failed: `O` must be an Object");
          if (!o(t2))
            throw new i("Assertion failed: `P` must be a Property Key");
          return t2 in e2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Array%"), o = !i.isArray && n(1)("Object.prototype.toString");
        e.exports = i.isArray || function(e2) {
          return "[object Array]" === o(e2);
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = n(10);
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = n(18), a = n(58), u = n(8);
        e.exports = function(e2) {
          if ("Object" !== u(e2))
            throw new i("Assertion failed: `obj` must be an Object");
          return a(o(e2, "length"));
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(63), i = n(59);
        e.exports = function(e2) {
          var t2 = i(e2);
          return 0 !== t2 && (t2 = r(t2)), 0 === t2 ? 0 : t2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(72), i = n(57);
        e.exports = function(e2) {
          var t2 = i(e2);
          return t2 <= 0 ? 0 : t2 > r ? r : t2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = r("%Number%"), a = r("%RegExp%"), u = r("%parseInt%"), s = n(1), l = n(73), c = n(71), f = s("String.prototype.slice"), p = l(/^0b[01]+$/i), d = l(/^0o[0-7]+$/i), h = l(/^[-+]0x[0-9a-f]+$/i), v = ["", "​", "￾"].join(""), g = new a("[" + v + "]", "g"), m = l(g), y = ["	\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\uFEFF"].join(""), b = new RegExp("(^[" + y + "]+)|([" + y + "]+$)", "g"), D = s("String.prototype.replace"), x = function(e2) {
          return D(e2, b, "");
        }, w = n(61);
        e.exports = function e2(t2) {
          var n2 = c(t2) ? t2 : w(t2, o);
          if ("symbol" == typeof n2)
            throw new i("Cannot convert a Symbol value to a number");
          if ("bigint" == typeof n2)
            throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
          if ("string" == typeof n2) {
            if (p(n2))
              return e2(u(f(n2, 2), 2));
            if (d(n2))
              return e2(u(f(n2, 2), 8));
            if (m(n2) || h(n2))
              return NaN;
            var r2 = x(n2);
            if (r2 !== n2)
              return e2(r2);
          }
          return o(n2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Object%"), o = n(5);
        e.exports = function(e2) {
          return o(e2), i(e2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(76);
        e.exports = function(e2) {
          return arguments.length > 1 ? r(e2, arguments[1]) : r(e2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%");
        e.exports = function(e2, t2) {
          if (null == e2)
            throw new i(t2 || "Cannot call method on " + e2);
          return e2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(67), i = n(68), o = n(64), a = n(70), u = n(69), s = n(74);
        e.exports = function(e2) {
          var t2 = o(e2);
          return a(t2) ? 0 : 0 !== t2 && u(t2) ? s(t2) * i(r(t2)) : t2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(65);
        e.exports = function(e2) {
          var t2 = r(e2, Number);
          if ("string" != typeof t2)
            return +t2;
          var n2 = t2.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
          return /^0[ob]|^[+-]0x/.test(n2) ? NaN : +n2;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = n(77);
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          return null === e2 ? "Null" : void 0 === e2 ? "Undefined" : "function" == typeof e2 || "object" == typeof e2 ? "Object" : "number" == typeof e2 ? "Number" : "boolean" == typeof e2 ? "Boolean" : "string" == typeof e2 ? "String" : void 0;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Math.abs%");
        e.exports = function(e2) {
          return i(e2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = Math.floor;
        e.exports = function(e2) {
          return r(e2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = Number.isNaN || function(e2) {
          return e2 !== e2;
        };
        e.exports = Number.isFinite || function(e2) {
          return "number" == typeof e2 && !r(e2) && e2 !== 1 / 0 && e2 !== -1 / 0;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = Number.isNaN || function(e2) {
          return e2 !== e2;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          return null === e2 || "function" != typeof e2 && "object" != typeof e2;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Math%"), o = r("%Number%");
        e.exports = o.MAX_SAFE_INTEGER || i.pow(2, 53) - 1;
      }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("RegExp.prototype.test"), o = n(4);
        e.exports = function(e2) {
          return o(i, e2);
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          return e2 >= 0 ? 1 : -1;
        };
      }, function(e, t) {
        e.exports = function(e2) {
          var t2 = true, n = true, r = false;
          if ("function" == typeof e2) {
            try {
              e2.call("f", function(e3, n2, r2) {
                "object" != typeof r2 && (t2 = false);
              }), e2.call([null], function() {
                "use strict";
                n = "string" == typeof this;
              }, "x");
            } catch (e3) {
              r = true;
            }
            return !r && t2 && n;
          }
          return false;
        };
      }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator, i = n(21), o = n(10), a = n(80), u = n(82), s = function(e2, t2) {
          if (void 0 === e2 || null === e2)
            throw new TypeError("Cannot call method on " + e2);
          if ("string" != typeof t2 || "number" !== t2 && "string" !== t2)
            throw new TypeError('hint must be "string" or "number"');
          var n2, r2, a2, u2 = "string" === t2 ? ["toString", "valueOf"] : ["valueOf", "toString"];
          for (a2 = 0; a2 < u2.length; ++a2)
            if (n2 = e2[u2[a2]], o(n2) && (r2 = n2.call(e2), i(r2)))
              return r2;
          throw new TypeError("No default value");
        }, l = function(e2, t2) {
          var n2 = e2[t2];
          if (null !== n2 && void 0 !== n2) {
            if (!o(n2))
              throw new TypeError(n2 + " returned for property " + t2 + " of object " + e2 + " is not a function");
            return n2;
          }
        };
        e.exports = function(e2) {
          if (i(e2))
            return e2;
          var t2 = "default";
          arguments.length > 1 && (arguments[1] === String ? t2 = "string" : arguments[1] === Number && (t2 = "number"));
          var n2;
          if (r && (Symbol.toPrimitive ? n2 = l(e2, Symbol.toPrimitive) : u(e2) && (n2 = Symbol.prototype.valueOf)), void 0 !== n2) {
            var o2 = n2.call(e2, t2);
            if (i(o2))
              return o2;
            throw new TypeError("unable to convert exotic object to primitive");
          }
          return "default" === t2 && (a(e2) || u(e2)) && (t2 = "string"), s(e2, "default" === t2 ? "number" : t2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString, i = n(21), o = n(10), a = { "[[DefaultValue]]": function(e2) {
          var t2;
          if ((t2 = arguments.length > 1 ? arguments[1] : "[object Date]" === r.call(e2) ? String : Number) === String || t2 === Number) {
            var n2, a2, u = t2 === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (a2 = 0; a2 < u.length; ++a2)
              if (o(e2[u[a2]]) && (n2 = e2[u[a2]](), i(n2)))
                return n2;
            throw new TypeError("No default value");
          }
          throw new TypeError("invalid [[DefaultValue]] hint supplied");
        } };
        e.exports = function(e2) {
          return i(e2) ? e2 : arguments.length > 1 ? a["[[DefaultValue]]"](e2, arguments[1]) : a["[[DefaultValue]]"](e2);
        };
      }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.slice, i = Object.prototype.toString;
        e.exports = function(e2) {
          var t2 = this;
          if ("function" != typeof t2 || "[object Function]" !== i.call(t2))
            throw new TypeError("Function.prototype.bind called on incompatible " + t2);
          for (var n2, o = r.call(arguments, 1), a = function() {
            if (this instanceof n2) {
              var i2 = t2.apply(this, o.concat(r.call(arguments)));
              return Object(i2) === i2 ? i2 : this;
            }
            return t2.apply(e2, o.concat(r.call(arguments)));
          }, u = Math.max(0, t2.length - o.length), s = [], l = 0; l < u; l++)
            s.push("$" + l);
          if (n2 = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), t2.prototype) {
            var c = function() {
            };
            c.prototype = t2.prototype, n2.prototype = new c(), c.prototype = null;
          }
          return n2;
        };
      }, function(e, t, n) {
        !function(t2, n2) {
          e.exports = n2();
        }(0, function() {
          "use strict";
          function e2(e3) {
            return '<span style="color: slategray">' + e3 + "</span>";
          }
          var t2 = function(e3, t3) {
            return t3 = { exports: {} }, e3(t3, t3.exports), t3.exports;
          }(function(e3) {
            var t3 = e3.exports = function() {
              return new RegExp("(?:" + t3.line().source + ")|(?:" + t3.block().source + ")", "gm");
            };
            t3.line = function() {
              return /(?:^|\s)\/\/(.+?)$/gm;
            }, t3.block = function() {
              return /\/\*([\S\s]*?)\*\//gm;
            };
          }), n2 = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
          return function(r, i) {
            void 0 === i && (i = {});
            var o = i.colors;
            void 0 === o && (o = n2);
            var a = 0, u = {}, s = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/, l = /</, c = new RegExp("(" + s.source + "|" + l.source + ")|(" + t2().source + ")", "gmi");
            return r.replace(c, function(t3, n3, r2) {
              if (r2)
                return e2(r2);
              if ("<" === n3)
                return "&lt;";
              var i2;
              u[n3] ? i2 = u[n3] : (i2 = o[a], u[n3] = i2);
              var s2 = '<span style="color: #' + i2 + '">' + n3 + "</span>";
              return a = ++a % o.length, s2;
            });
          };
        });
      }, function(e, t, n) {
        "use strict";
        var r = Date.prototype.getDay, i = function(e2) {
          try {
            return r.call(e2), true;
          } catch (e3) {
            return false;
          }
        }, o = Object.prototype.toString, a = n(24)();
        e.exports = function(e2) {
          return "object" == typeof e2 && null !== e2 && (a ? i(e2) : "[object Date]" === o.call(e2));
        };
      }, function(e, t, n) {
        "use strict";
        var r = String.prototype.valueOf, i = function(e2) {
          try {
            return r.call(e2), true;
          } catch (e3) {
            return false;
          }
        }, o = Object.prototype.toString, a = n(24)();
        e.exports = function(e2) {
          return "string" == typeof e2 || "object" == typeof e2 && (a ? i(e2) : "[object String]" === o.call(e2));
        };
      }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        if (n(22)()) {
          var i = Symbol.prototype.toString, o = /^Symbol\(.*\)$/, a = function(e2) {
            return "symbol" == typeof e2.valueOf() && o.test(i.call(e2));
          };
          e.exports = function(e2) {
            if ("symbol" == typeof e2)
              return true;
            if ("[object Symbol]" !== r.call(e2))
              return false;
            try {
              return a(e2);
            } catch (e3) {
              return false;
            }
          };
        } else
          e.exports = function(e2) {
            return false;
          };
      }, function(e, t, n) {
        !function(e2, n2) {
          n2(t);
        }(0, function(e2) {
          "use strict";
          function t2(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r2 = t3[n3];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
            }
          }
          function n2(e3, n3, r2) {
            return n3 && t2(e3.prototype, n3), r2 && t2(e3, r2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
          }
          function r(e3, t3) {
            if (e3) {
              if ("string" == typeof e3)
                return i(e3, t3);
              var n3 = Object.prototype.toString.call(e3).slice(8, -1);
              return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? i(e3, t3) : void 0;
            }
          }
          function i(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
              r2[n3] = e3[n3];
            return r2;
          }
          function o(e3, t3) {
            var n3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
            if (n3)
              return (n3 = n3.call(e3)).next.bind(n3);
            if (Array.isArray(e3) || (n3 = r(e3)) || t3 && e3 && "number" == typeof e3.length) {
              n3 && (e3 = n3);
              var i2 = 0;
              return function() {
                return i2 >= e3.length ? { done: true } : { done: false, value: e3[i2++] };
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function a() {
            return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
          }
          function u(t3) {
            e2.defaults = t3;
          }
          function s(e3, t3) {
            if (t3) {
              if (k.test(e3))
                return e3.replace(E, S);
            } else if (F.test(e3))
              return e3.replace(C, S);
            return e3;
          }
          function l(e3) {
            return e3.replace(O, function(e4, t3) {
              return t3 = t3.toLowerCase(), "colon" === t3 ? ":" : "#" === t3.charAt(0) ? "x" === t3.charAt(1) ? String.fromCharCode(parseInt(t3.substring(2), 16)) : String.fromCharCode(+t3.substring(1)) : "";
            });
          }
          function c(e3, t3) {
            e3 = e3.source || e3, t3 = t3 || "";
            var n3 = { replace: function(t4, r2) {
              return r2 = r2.source || r2, r2 = r2.replace(B, "$1"), e3 = e3.replace(t4, r2), n3;
            }, getRegex: function() {
              return new RegExp(e3, t3);
            } };
            return n3;
          }
          function f(e3, t3, n3) {
            if (e3) {
              var r2;
              try {
                r2 = decodeURIComponent(l(n3)).replace($, "").toLowerCase();
              } catch (e4) {
                return null;
              }
              if (0 === r2.indexOf("javascript:") || 0 === r2.indexOf("vbscript:") || 0 === r2.indexOf("data:"))
                return null;
            }
            t3 && !j.test(n3) && (n3 = p(t3, n3));
            try {
              n3 = encodeURI(n3).replace(/%25/g, "%");
            } catch (e4) {
              return null;
            }
            return n3;
          }
          function p(e3, t3) {
            T[" " + e3] || (I.test(e3) ? T[" " + e3] = e3 + "/" : T[" " + e3] = v(e3, "/", true)), e3 = T[" " + e3];
            var n3 = -1 === e3.indexOf(":");
            return "//" === t3.substring(0, 2) ? n3 ? t3 : e3.replace(z, "$1") + t3 : "/" === t3.charAt(0) ? n3 ? t3 : e3.replace(R, "$1") + t3 : e3 + t3;
          }
          function d(e3) {
            for (var t3, n3, r2 = 1; r2 < arguments.length; r2++) {
              t3 = arguments[r2];
              for (n3 in t3)
                Object.prototype.hasOwnProperty.call(t3, n3) && (e3[n3] = t3[n3]);
            }
            return e3;
          }
          function h(e3, t3) {
            var n3 = e3.replace(/\|/g, function(e4, t4, n4) {
              for (var r3 = false, i3 = t4; --i3 >= 0 && "\\" === n4[i3]; )
                r3 = !r3;
              return r3 ? "|" : " |";
            }), r2 = n3.split(/ \|/), i2 = 0;
            if (r2[0].trim() || r2.shift(), r2.length > 0 && !r2[r2.length - 1].trim() && r2.pop(), r2.length > t3)
              r2.splice(t3);
            else
              for (; r2.length < t3; )
                r2.push("");
            for (; i2 < r2.length; i2++)
              r2[i2] = r2[i2].trim().replace(/\\\|/g, "|");
            return r2;
          }
          function v(e3, t3, n3) {
            var r2 = e3.length;
            if (0 === r2)
              return "";
            for (var i2 = 0; i2 < r2; ) {
              var o2 = e3.charAt(r2 - i2 - 1);
              if (o2 !== t3 || n3) {
                if (o2 === t3 || !n3)
                  break;
                i2++;
              } else
                i2++;
            }
            return e3.substr(0, r2 - i2);
          }
          function g(e3, t3) {
            if (-1 === e3.indexOf(t3[1]))
              return -1;
            for (var n3 = e3.length, r2 = 0, i2 = 0; i2 < n3; i2++)
              if ("\\" === e3[i2])
                i2++;
              else if (e3[i2] === t3[0])
                r2++;
              else if (e3[i2] === t3[1] && --r2 < 0)
                return i2;
            return -1;
          }
          function m(e3) {
            e3 && e3.sanitize && e3.silent;
          }
          function y(e3, t3) {
            if (t3 < 1)
              return "";
            for (var n3 = ""; t3 > 1; )
              1 & t3 && (n3 += e3), t3 >>= 1, e3 += e3;
            return n3 + e3;
          }
          function b(e3, t3, n3, r2) {
            var i2 = t3.href, o2 = t3.title ? s(t3.title) : null, a2 = e3[1].replace(/\\([\[\]])/g, "$1");
            if ("!" !== e3[0].charAt(0)) {
              r2.state.inLink = true;
              var u2 = { type: "link", raw: n3, href: i2, title: o2, text: a2, tokens: r2.inlineTokens(a2, []) };
              return r2.state.inLink = false, u2;
            }
            return { type: "image", raw: n3, href: i2, title: o2, text: s(a2) };
          }
          function D(e3, t3) {
            var n3 = e3.match(/^(\s+)(?:```)/);
            if (null === n3)
              return t3;
            var r2 = n3[1];
            return t3.split("\n").map(function(e4) {
              var t4 = e4.match(/^\s+/);
              return null === t4 ? e4 : t4[0].length >= r2.length ? e4.slice(r2.length) : e4;
            }).join("\n");
          }
          function x(e3) {
            return e3.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
          }
          function w(e3) {
            var t3, n3, r2 = "", i2 = e3.length;
            for (t3 = 0; t3 < i2; t3++)
              n3 = e3.charCodeAt(t3), Math.random() > 0.5 && (n3 = "x" + n3.toString(16)), r2 += "&#" + n3 + ";";
            return r2;
          }
          function A(e3, t3, n3) {
            if (void 0 === e3 || null === e3)
              throw new Error("marked(): input parameter is undefined or null");
            if ("string" != typeof e3)
              throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
            if ("function" == typeof t3 && (n3 = t3, t3 = null), t3 = d({}, A.defaults, t3 || {}), m(t3), n3) {
              var r2, i2 = t3.highlight;
              try {
                r2 = U.lex(e3, t3);
              } catch (e4) {
                return n3(e4);
              }
              var o2 = function(e4) {
                var o3;
                if (!e4)
                  try {
                    t3.walkTokens && A.walkTokens(r2, t3.walkTokens), o3 = V.parse(r2, t3);
                  } catch (t4) {
                    e4 = t4;
                  }
                return t3.highlight = i2, e4 ? n3(e4) : n3(null, o3);
              };
              if (!i2 || i2.length < 3)
                return o2();
              if (delete t3.highlight, !r2.length)
                return o2();
              var a2 = 0;
              return A.walkTokens(r2, function(e4) {
                "code" === e4.type && (a2++, setTimeout(function() {
                  i2(e4.text, e4.lang, function(t4, n4) {
                    if (t4)
                      return o2(t4);
                    null != n4 && n4 !== e4.text && (e4.text = n4, e4.escaped = true), 0 === --a2 && o2();
                  });
                }, 0));
              }), void (0 === a2 && o2());
            }
            try {
              var u2 = U.lex(e3, t3);
              return t3.walkTokens && A.walkTokens(u2, t3.walkTokens), V.parse(u2, t3);
            } catch (e4) {
              if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
                return "<p>An error occurred:</p><pre>" + s(e4.message + "", true) + "</pre>";
              throw e4;
            }
          }
          e2.defaults = a();
          var k = /[&<>"']/, E = /[&<>"']/g, F = /[<>"']|&(?!#?\w+;)/, C = /[<>"']|&(?!#?\w+;)/g, _ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, S = function(e3) {
            return _[e3];
          }, O = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, B = /(^|[^\[])\^/g, $ = /[^\w:]/g, j = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i, T = {}, I = /^[^:]+:\/*[^/]*$/, z = /^([^:]+:)[\s\S]*$/, R = /^([^:]+:\/*[^/]*)[\s\S]*$/, P = { exec: function() {
          } }, M = function() {
            function t3(t4) {
              this.options = t4 || e2.defaults;
            }
            var n3 = t3.prototype;
            return n3.space = function(e3) {
              var t4 = this.rules.block.newline.exec(e3);
              if (t4 && t4[0].length > 0)
                return { type: "space", raw: t4[0] };
            }, n3.code = function(e3) {
              var t4 = this.rules.block.code.exec(e3);
              if (t4) {
                var n4 = t4[0].replace(/^ {1,4}/gm, "");
                return { type: "code", raw: t4[0], codeBlockStyle: "indented", text: this.options.pedantic ? n4 : v(n4, "\n") };
              }
            }, n3.fences = function(e3) {
              var t4 = this.rules.block.fences.exec(e3);
              if (t4) {
                var n4 = t4[0], r2 = D(n4, t4[3] || "");
                return { type: "code", raw: n4, lang: t4[2] ? t4[2].trim() : t4[2], text: r2 };
              }
            }, n3.heading = function(e3) {
              var t4 = this.rules.block.heading.exec(e3);
              if (t4) {
                var n4 = t4[2].trim();
                if (/#$/.test(n4)) {
                  var r2 = v(n4, "#");
                  this.options.pedantic ? n4 = r2.trim() : r2 && !/ $/.test(r2) || (n4 = r2.trim());
                }
                var i2 = { type: "heading", raw: t4[0], depth: t4[1].length, text: n4, tokens: [] };
                return this.lexer.inline(i2.text, i2.tokens), i2;
              }
            }, n3.hr = function(e3) {
              var t4 = this.rules.block.hr.exec(e3);
              if (t4)
                return { type: "hr", raw: t4[0] };
            }, n3.blockquote = function(e3) {
              var t4 = this.rules.block.blockquote.exec(e3);
              if (t4) {
                var n4 = t4[0].replace(/^ *> ?/gm, "");
                return { type: "blockquote", raw: t4[0], tokens: this.lexer.blockTokens(n4, []), text: n4 };
              }
            }, n3.list = function(e3) {
              var t4 = this.rules.block.list.exec(e3);
              if (t4) {
                var n4, r2, i2, a2, u2, s2, l2, c2, f2, p2, d2, h2, v2 = t4[1].trim(), g2 = v2.length > 1, m2 = { type: "list", raw: "", ordered: g2, start: g2 ? +v2.slice(0, -1) : "", loose: false, items: [] };
                v2 = g2 ? "\\d{1,9}\\" + v2.slice(-1) : "\\" + v2, this.options.pedantic && (v2 = g2 ? v2 : "[*+-]");
                for (var y2 = new RegExp("^( {0,3}" + v2 + ")((?: [^\\n]*)?(?:\\n|$))"); e3 && (h2 = false, t4 = y2.exec(e3)) && !this.rules.block.hr.test(e3); ) {
                  if (n4 = t4[0], e3 = e3.substring(n4.length), c2 = t4[2].split("\n", 1)[0], f2 = e3.split("\n", 1)[0], this.options.pedantic ? (a2 = 2, d2 = c2.trimLeft()) : (a2 = t4[2].search(/[^ ]/), a2 = a2 > 4 ? 1 : a2, d2 = c2.slice(a2), a2 += t4[1].length), s2 = false, !c2 && /^ *$/.test(f2) && (n4 += f2 + "\n", e3 = e3.substring(f2.length + 1), h2 = true), !h2)
                    for (var b2 = new RegExp("^ {0," + Math.min(3, a2 - 1) + "}(?:[*+-]|\\d{1,9}[.)])"); e3 && (p2 = e3.split("\n", 1)[0], c2 = p2, this.options.pedantic && (c2 = c2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !b2.test(c2)); ) {
                      if (c2.search(/[^ ]/) >= a2 || !c2.trim())
                        d2 += "\n" + c2.slice(a2);
                      else {
                        if (s2)
                          break;
                        d2 += "\n" + c2;
                      }
                      s2 || c2.trim() || (s2 = true), n4 += p2 + "\n", e3 = e3.substring(p2.length + 1);
                    }
                  m2.loose || (l2 ? m2.loose = true : /\n *\n *$/.test(n4) && (l2 = true)), this.options.gfm && (r2 = /^\[[ xX]\] /.exec(d2)) && (i2 = "[ ] " !== r2[0], d2 = d2.replace(/^\[[ xX]\] +/, "")), m2.items.push({ type: "list_item", raw: n4, task: !!r2, checked: i2, loose: false, text: d2 }), m2.raw += n4;
                }
                m2.items[m2.items.length - 1].raw = n4.trimRight(), m2.items[m2.items.length - 1].text = d2.trimRight(), m2.raw = m2.raw.trimRight();
                var D2 = m2.items.length;
                for (u2 = 0; u2 < D2; u2++) {
                  this.lexer.state.top = false, m2.items[u2].tokens = this.lexer.blockTokens(m2.items[u2].text, []);
                  var x2 = m2.items[u2].tokens.filter(function(e4) {
                    return "space" === e4.type;
                  }), w2 = x2.every(function(e4) {
                    for (var t5, n5 = e4.raw.split(""), r3 = 0, i3 = o(n5); !(t5 = i3()).done; ) {
                      if ("\n" === t5.value && (r3 += 1), r3 > 1)
                        return true;
                    }
                    return false;
                  });
                  !m2.loose && x2.length && w2 && (m2.loose = true, m2.items[u2].loose = true);
                }
                return m2;
              }
            }, n3.html = function(e3) {
              var t4 = this.rules.block.html.exec(e3);
              if (t4) {
                var n4 = { type: "html", raw: t4[0], pre: !this.options.sanitizer && ("pre" === t4[1] || "script" === t4[1] || "style" === t4[1]), text: t4[0] };
                return this.options.sanitize && (n4.type = "paragraph", n4.text = this.options.sanitizer ? this.options.sanitizer(t4[0]) : s(t4[0]), n4.tokens = [], this.lexer.inline(n4.text, n4.tokens)), n4;
              }
            }, n3.def = function(e3) {
              var t4 = this.rules.block.def.exec(e3);
              if (t4) {
                t4[3] && (t4[3] = t4[3].substring(1, t4[3].length - 1));
                return { type: "def", tag: t4[1].toLowerCase().replace(/\s+/g, " "), raw: t4[0], href: t4[2], title: t4[3] };
              }
            }, n3.table = function(e3) {
              var t4 = this.rules.block.table.exec(e3);
              if (t4) {
                var n4 = { type: "table", header: h(t4[1]).map(function(e4) {
                  return { text: e4 };
                }), align: t4[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t4[3] && t4[3].trim() ? t4[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
                if (n4.header.length === n4.align.length) {
                  n4.raw = t4[0];
                  var r2, i2, o2, a2, u2 = n4.align.length;
                  for (r2 = 0; r2 < u2; r2++)
                    /^ *-+: *$/.test(n4.align[r2]) ? n4.align[r2] = "right" : /^ *:-+: *$/.test(n4.align[r2]) ? n4.align[r2] = "center" : /^ *:-+ *$/.test(n4.align[r2]) ? n4.align[r2] = "left" : n4.align[r2] = null;
                  for (u2 = n4.rows.length, r2 = 0; r2 < u2; r2++)
                    n4.rows[r2] = h(n4.rows[r2], n4.header.length).map(function(e4) {
                      return { text: e4 };
                    });
                  for (u2 = n4.header.length, i2 = 0; i2 < u2; i2++)
                    n4.header[i2].tokens = [], this.lexer.inlineTokens(n4.header[i2].text, n4.header[i2].tokens);
                  for (u2 = n4.rows.length, i2 = 0; i2 < u2; i2++)
                    for (a2 = n4.rows[i2], o2 = 0; o2 < a2.length; o2++)
                      a2[o2].tokens = [], this.lexer.inlineTokens(a2[o2].text, a2[o2].tokens);
                  return n4;
                }
              }
            }, n3.lheading = function(e3) {
              var t4 = this.rules.block.lheading.exec(e3);
              if (t4) {
                var n4 = { type: "heading", raw: t4[0], depth: "=" === t4[2].charAt(0) ? 1 : 2, text: t4[1], tokens: [] };
                return this.lexer.inline(n4.text, n4.tokens), n4;
              }
            }, n3.paragraph = function(e3) {
              var t4 = this.rules.block.paragraph.exec(e3);
              if (t4) {
                var n4 = { type: "paragraph", raw: t4[0], text: "\n" === t4[1].charAt(t4[1].length - 1) ? t4[1].slice(0, -1) : t4[1], tokens: [] };
                return this.lexer.inline(n4.text, n4.tokens), n4;
              }
            }, n3.text = function(e3) {
              var t4 = this.rules.block.text.exec(e3);
              if (t4) {
                var n4 = { type: "text", raw: t4[0], text: t4[0], tokens: [] };
                return this.lexer.inline(n4.text, n4.tokens), n4;
              }
            }, n3.escape = function(e3) {
              var t4 = this.rules.inline.escape.exec(e3);
              if (t4)
                return { type: "escape", raw: t4[0], text: s(t4[1]) };
            }, n3.tag = function(e3) {
              var t4 = this.rules.inline.tag.exec(e3);
              if (t4)
                return !this.lexer.state.inLink && /^<a /i.test(t4[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t4[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t4[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t4[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t4[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t4[0]) : s(t4[0]) : t4[0] };
            }, n3.link = function(e3) {
              var t4 = this.rules.inline.link.exec(e3);
              if (t4) {
                var n4 = t4[2].trim();
                if (!this.options.pedantic && /^</.test(n4)) {
                  if (!/>$/.test(n4))
                    return;
                  var r2 = v(n4.slice(0, -1), "\\");
                  if ((n4.length - r2.length) % 2 == 0)
                    return;
                } else {
                  var i2 = g(t4[2], "()");
                  if (i2 > -1) {
                    var o2 = 0 === t4[0].indexOf("!") ? 5 : 4, a2 = o2 + t4[1].length + i2;
                    t4[2] = t4[2].substring(0, i2), t4[0] = t4[0].substring(0, a2).trim(), t4[3] = "";
                  }
                }
                var u2 = t4[2], s2 = "";
                if (this.options.pedantic) {
                  var l2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u2);
                  l2 && (u2 = l2[1], s2 = l2[3]);
                } else
                  s2 = t4[3] ? t4[3].slice(1, -1) : "";
                return u2 = u2.trim(), /^</.test(u2) && (u2 = this.options.pedantic && !/>$/.test(n4) ? u2.slice(1) : u2.slice(1, -1)), b(t4, { href: u2 ? u2.replace(this.rules.inline._escapes, "$1") : u2, title: s2 ? s2.replace(this.rules.inline._escapes, "$1") : s2 }, t4[0], this.lexer);
              }
            }, n3.reflink = function(e3, t4) {
              var n4;
              if ((n4 = this.rules.inline.reflink.exec(e3)) || (n4 = this.rules.inline.nolink.exec(e3))) {
                var r2 = (n4[2] || n4[1]).replace(/\s+/g, " ");
                if (!(r2 = t4[r2.toLowerCase()]) || !r2.href) {
                  var i2 = n4[0].charAt(0);
                  return { type: "text", raw: i2, text: i2 };
                }
                return b(n4, r2, n4[0], this.lexer);
              }
            }, n3.emStrong = function(e3, t4, n4) {
              void 0 === n4 && (n4 = "");
              var r2 = this.rules.inline.emStrong.lDelim.exec(e3);
              if (r2 && (!r2[3] || !n4.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
                var i2 = r2[1] || r2[2] || "";
                if (!i2 || i2 && ("" === n4 || this.rules.inline.punctuation.exec(n4))) {
                  var o2, a2, u2 = r2[0].length - 1, s2 = u2, l2 = 0, c2 = "*" === r2[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                  for (c2.lastIndex = 0, t4 = t4.slice(-1 * e3.length + u2); null != (r2 = c2.exec(t4)); )
                    if (o2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6])
                      if (a2 = o2.length, r2[3] || r2[4])
                        s2 += a2;
                      else if (!((r2[5] || r2[6]) && u2 % 3) || (u2 + a2) % 3) {
                        if (!((s2 -= a2) > 0)) {
                          if (a2 = Math.min(a2, a2 + s2 + l2), Math.min(u2, a2) % 2) {
                            var f2 = e3.slice(1, u2 + r2.index + a2);
                            return { type: "em", raw: e3.slice(0, u2 + r2.index + a2 + 1), text: f2, tokens: this.lexer.inlineTokens(f2, []) };
                          }
                          var p2 = e3.slice(2, u2 + r2.index + a2 - 1);
                          return { type: "strong", raw: e3.slice(0, u2 + r2.index + a2 + 1), text: p2, tokens: this.lexer.inlineTokens(p2, []) };
                        }
                      } else
                        l2 += a2;
                }
              }
            }, n3.codespan = function(e3) {
              var t4 = this.rules.inline.code.exec(e3);
              if (t4) {
                var n4 = t4[2].replace(/\n/g, " "), r2 = /[^ ]/.test(n4), i2 = /^ /.test(n4) && / $/.test(n4);
                return r2 && i2 && (n4 = n4.substring(1, n4.length - 1)), n4 = s(n4, true), { type: "codespan", raw: t4[0], text: n4 };
              }
            }, n3.br = function(e3) {
              var t4 = this.rules.inline.br.exec(e3);
              if (t4)
                return { type: "br", raw: t4[0] };
            }, n3.del = function(e3) {
              var t4 = this.rules.inline.del.exec(e3);
              if (t4)
                return { type: "del", raw: t4[0], text: t4[2], tokens: this.lexer.inlineTokens(t4[2], []) };
            }, n3.autolink = function(e3, t4) {
              var n4 = this.rules.inline.autolink.exec(e3);
              if (n4) {
                var r2, i2;
                return "@" === n4[2] ? (r2 = s(this.options.mangle ? t4(n4[1]) : n4[1]), i2 = "mailto:" + r2) : (r2 = s(n4[1]), i2 = r2), { type: "link", raw: n4[0], text: r2, href: i2, tokens: [{ type: "text", raw: r2, text: r2 }] };
              }
            }, n3.url = function(e3, t4) {
              var n4;
              if (n4 = this.rules.inline.url.exec(e3)) {
                var r2, i2;
                if ("@" === n4[2])
                  r2 = s(this.options.mangle ? t4(n4[0]) : n4[0]), i2 = "mailto:" + r2;
                else {
                  var o2;
                  do {
                    o2 = n4[0], n4[0] = this.rules.inline._backpedal.exec(n4[0])[0];
                  } while (o2 !== n4[0]);
                  r2 = s(n4[0]), i2 = "www." === n4[1] ? "http://" + r2 : r2;
                }
                return { type: "link", raw: n4[0], text: r2, href: i2, tokens: [{ type: "text", raw: r2, text: r2 }] };
              }
            }, n3.inlineText = function(e3, t4) {
              var n4 = this.rules.inline.text.exec(e3);
              if (n4) {
                var r2;
                return r2 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n4[0]) : s(n4[0]) : n4[0] : s(this.options.smartypants ? t4(n4[0]) : n4[0]), { type: "text", raw: n4[0], text: r2 };
              }
            }, t3;
          }(), L = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: P, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/ };
          L._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/, L._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, L.def = c(L.def).replace("label", L._label).replace("title", L._title).getRegex(), L.bullet = /(?:[*+-]|\d{1,9}[.)])/, L.listItemStart = c(/^( *)(bull) */).replace("bull", L.bullet).getRegex(), L.list = c(L.list).replace(/bull/g, L.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + L.def.source + ")").getRegex(), L._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", L._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, L.html = c(L.html, "i").replace("comment", L._comment).replace("tag", L._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), L.paragraph = c(L._paragraph).replace("hr", L.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", L._tag).getRegex(), L.blockquote = c(L.blockquote).replace("paragraph", L.paragraph).getRegex(), L.normal = d({}, L), L.gfm = d({}, L.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), L.gfm.table = c(L.gfm.table).replace("hr", L.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", L._tag).getRegex(), L.gfm.paragraph = c(L._paragraph).replace("hr", L.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", L.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", L._tag).getRegex(), L.pedantic = d({}, L.normal, { html: c(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", L._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: P, paragraph: c(L.normal._paragraph).replace("hr", L.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", L.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
          var N = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: P, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: P, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
          N._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", N.punctuation = c(N.punctuation).replace(/punctuation/g, N._punctuation).getRegex(), N.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, N.escapedEmSt = /\\\*|\\_/g, N._comment = c(L._comment).replace("(?:-->|$)", "-->").getRegex(), N.emStrong.lDelim = c(N.emStrong.lDelim).replace(/punct/g, N._punctuation).getRegex(), N.emStrong.rDelimAst = c(N.emStrong.rDelimAst, "g").replace(/punct/g, N._punctuation).getRegex(), N.emStrong.rDelimUnd = c(N.emStrong.rDelimUnd, "g").replace(/punct/g, N._punctuation).getRegex(), N._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, N._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, N._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, N.autolink = c(N.autolink).replace("scheme", N._scheme).replace("email", N._email).getRegex(), N._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, N.tag = c(N.tag).replace("comment", N._comment).replace("attribute", N._attribute).getRegex(), N._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, N._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, N._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, N.link = c(N.link).replace("label", N._label).replace("href", N._href).replace("title", N._title).getRegex(), N.reflink = c(N.reflink).replace("label", N._label).replace("ref", L._label).getRegex(), N.nolink = c(N.nolink).replace("ref", L._label).getRegex(), N.reflinkSearch = c(N.reflinkSearch, "g").replace("reflink", N.reflink).replace("nolink", N.nolink).getRegex(), N.normal = d({}, N), N.pedantic = d({}, N.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", N._label).getRegex(), reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N._label).getRegex() }), N.gfm = d({}, N.normal, { escape: c(N.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), N.gfm.url = c(N.gfm.url, "i").replace("email", N.gfm._extended_email).getRegex(), N.breaks = d({}, N.gfm, { br: c(N.br).replace("{2,}", "*").getRegex(), text: c(N.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
          var U = function() {
            function t3(t4) {
              this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t4 || e2.defaults, this.options.tokenizer = this.options.tokenizer || new M(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
              var n3 = { block: L.normal, inline: N.normal };
              this.options.pedantic ? (n3.block = L.pedantic, n3.inline = N.pedantic) : this.options.gfm && (n3.block = L.gfm, this.options.breaks ? n3.inline = N.breaks : n3.inline = N.gfm), this.tokenizer.rules = n3;
            }
            t3.lex = function(e3, n3) {
              return new t3(n3).lex(e3);
            }, t3.lexInline = function(e3, n3) {
              return new t3(n3).inlineTokens(e3);
            };
            var r2 = t3.prototype;
            return r2.lex = function(e3) {
              e3 = e3.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e3, this.tokens);
              for (var t4; t4 = this.inlineQueue.shift(); )
                this.inlineTokens(t4.src, t4.tokens);
              return this.tokens;
            }, r2.blockTokens = function(e3, t4) {
              var n3 = this;
              void 0 === t4 && (t4 = []), this.options.pedantic && (e3 = e3.replace(/^ +$/gm, ""));
              for (var r3, i2, o2, a2; e3; )
                if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(i3) {
                  return !!(r3 = i3.call({ lexer: n3 }, e3, t4)) && (e3 = e3.substring(r3.raw.length), t4.push(r3), true);
                }))) {
                  if (r3 = this.tokenizer.space(e3))
                    e3 = e3.substring(r3.raw.length), 1 === r3.raw.length && t4.length > 0 ? t4[t4.length - 1].raw += "\n" : t4.push(r3);
                  else if (r3 = this.tokenizer.code(e3))
                    e3 = e3.substring(r3.raw.length), i2 = t4[t4.length - 1], !i2 || "paragraph" !== i2.type && "text" !== i2.type ? t4.push(r3) : (i2.raw += "\n" + r3.raw, i2.text += "\n" + r3.text, this.inlineQueue[this.inlineQueue.length - 1].src = i2.text);
                  else if (r3 = this.tokenizer.fences(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.heading(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.hr(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.blockquote(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.list(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.html(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.def(e3))
                    e3 = e3.substring(r3.raw.length), i2 = t4[t4.length - 1], !i2 || "paragraph" !== i2.type && "text" !== i2.type ? this.tokens.links[r3.tag] || (this.tokens.links[r3.tag] = { href: r3.href, title: r3.title }) : (i2.raw += "\n" + r3.raw, i2.text += "\n" + r3.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i2.text);
                  else if (r3 = this.tokenizer.table(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.lheading(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (o2 = e3, this.options.extensions && this.options.extensions.startBlock && function() {
                    var t5 = 1 / 0, r4 = e3.slice(1), i3 = void 0;
                    n3.options.extensions.startBlock.forEach(function(e4) {
                      "number" == typeof (i3 = e4.call({ lexer: this }, r4)) && i3 >= 0 && (t5 = Math.min(t5, i3));
                    }), t5 < 1 / 0 && t5 >= 0 && (o2 = e3.substring(0, t5 + 1));
                  }(), this.state.top && (r3 = this.tokenizer.paragraph(o2)))
                    i2 = t4[t4.length - 1], a2 && "paragraph" === i2.type ? (i2.raw += "\n" + r3.raw, i2.text += "\n" + r3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i2.text) : t4.push(r3), a2 = o2.length !== e3.length, e3 = e3.substring(r3.raw.length);
                  else if (r3 = this.tokenizer.text(e3))
                    e3 = e3.substring(r3.raw.length), i2 = t4[t4.length - 1], i2 && "text" === i2.type ? (i2.raw += "\n" + r3.raw, i2.text += "\n" + r3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i2.text) : t4.push(r3);
                  else if (e3) {
                    var u2 = "Infinite loop on byte: " + e3.charCodeAt(0);
                    if (this.options.silent)
                      break;
                    throw new Error(u2);
                  }
                }
              return this.state.top = true, t4;
            }, r2.inline = function(e3, t4) {
              this.inlineQueue.push({ src: e3, tokens: t4 });
            }, r2.inlineTokens = function(e3, t4) {
              var n3 = this;
              void 0 === t4 && (t4 = []);
              var r3, i2, o2, a2, u2, s2, l2 = e3;
              if (this.tokens.links) {
                var c2 = Object.keys(this.tokens.links);
                if (c2.length > 0)
                  for (; null != (a2 = this.tokenizer.rules.inline.reflinkSearch.exec(l2)); )
                    c2.includes(a2[0].slice(a2[0].lastIndexOf("[") + 1, -1)) && (l2 = l2.slice(0, a2.index) + "[" + y("a", a2[0].length - 2) + "]" + l2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
              }
              for (; null != (a2 = this.tokenizer.rules.inline.blockSkip.exec(l2)); )
                l2 = l2.slice(0, a2.index) + "[" + y("a", a2[0].length - 2) + "]" + l2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
              for (; null != (a2 = this.tokenizer.rules.inline.escapedEmSt.exec(l2)); )
                l2 = l2.slice(0, a2.index) + "++" + l2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
              for (; e3; )
                if (u2 || (s2 = ""), u2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(i3) {
                  return !!(r3 = i3.call({ lexer: n3 }, e3, t4)) && (e3 = e3.substring(r3.raw.length), t4.push(r3), true);
                })))
                  if (r3 = this.tokenizer.escape(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.tag(e3))
                    e3 = e3.substring(r3.raw.length), i2 = t4[t4.length - 1], i2 && "text" === r3.type && "text" === i2.type ? (i2.raw += r3.raw, i2.text += r3.text) : t4.push(r3);
                  else if (r3 = this.tokenizer.link(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.reflink(e3, this.tokens.links))
                    e3 = e3.substring(r3.raw.length), i2 = t4[t4.length - 1], i2 && "text" === r3.type && "text" === i2.type ? (i2.raw += r3.raw, i2.text += r3.text) : t4.push(r3);
                  else if (r3 = this.tokenizer.emStrong(e3, l2, s2))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.codespan(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.br(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.del(e3))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (r3 = this.tokenizer.autolink(e3, w))
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
                  else if (this.state.inLink || !(r3 = this.tokenizer.url(e3, w))) {
                    if (o2 = e3, this.options.extensions && this.options.extensions.startInline && function() {
                      var t5 = 1 / 0, r4 = e3.slice(1), i3 = void 0;
                      n3.options.extensions.startInline.forEach(function(e4) {
                        "number" == typeof (i3 = e4.call({ lexer: this }, r4)) && i3 >= 0 && (t5 = Math.min(t5, i3));
                      }), t5 < 1 / 0 && t5 >= 0 && (o2 = e3.substring(0, t5 + 1));
                    }(), r3 = this.tokenizer.inlineText(o2, x))
                      e3 = e3.substring(r3.raw.length), "_" !== r3.raw.slice(-1) && (s2 = r3.raw.slice(-1)), u2 = true, i2 = t4[t4.length - 1], i2 && "text" === i2.type ? (i2.raw += r3.raw, i2.text += r3.text) : t4.push(r3);
                    else if (e3) {
                      var f2 = "Infinite loop on byte: " + e3.charCodeAt(0);
                      if (this.options.silent)
                        break;
                      throw new Error(f2);
                    }
                  } else
                    e3 = e3.substring(r3.raw.length), t4.push(r3);
              return t4;
            }, n2(t3, null, [{ key: "rules", get: function() {
              return { block: L, inline: N };
            } }]), t3;
          }(), Q = function() {
            function t3(t4) {
              this.options = t4 || e2.defaults;
            }
            var n3 = t3.prototype;
            return n3.code = function(e3, t4, n4) {
              var r2 = (t4 || "").match(/\S*/)[0];
              if (this.options.highlight) {
                var i2 = this.options.highlight(e3, r2);
                null != i2 && i2 !== e3 && (n4 = true, e3 = i2);
              }
              return e3 = e3.replace(/\n$/, "") + "\n", r2 ? '<pre><code class="' + this.options.langPrefix + s(r2, true) + '">' + (n4 ? e3 : s(e3, true)) + "</code></pre>\n" : "<pre><code>" + (n4 ? e3 : s(e3, true)) + "</code></pre>\n";
            }, n3.blockquote = function(e3) {
              return "<blockquote>\n" + e3 + "</blockquote>\n";
            }, n3.html = function(e3) {
              return e3;
            }, n3.heading = function(e3, t4, n4, r2) {
              return this.options.headerIds ? "<h" + t4 + ' id="' + this.options.headerPrefix + r2.slug(n4) + '">' + e3 + "</h" + t4 + ">\n" : "<h" + t4 + ">" + e3 + "</h" + t4 + ">\n";
            }, n3.hr = function() {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            }, n3.list = function(e3, t4, n4) {
              var r2 = t4 ? "ol" : "ul";
              return "<" + r2 + (t4 && 1 !== n4 ? ' start="' + n4 + '"' : "") + ">\n" + e3 + "</" + r2 + ">\n";
            }, n3.listitem = function(e3) {
              return "<li>" + e3 + "</li>\n";
            }, n3.checkbox = function(e3) {
              return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
            }, n3.paragraph = function(e3) {
              return "<p>" + e3 + "</p>\n";
            }, n3.table = function(e3, t4) {
              return t4 && (t4 = "<tbody>" + t4 + "</tbody>"), "<table>\n<thead>\n" + e3 + "</thead>\n" + t4 + "</table>\n";
            }, n3.tablerow = function(e3) {
              return "<tr>\n" + e3 + "</tr>\n";
            }, n3.tablecell = function(e3, t4) {
              var n4 = t4.header ? "th" : "td";
              return (t4.align ? "<" + n4 + ' align="' + t4.align + '">' : "<" + n4 + ">") + e3 + "</" + n4 + ">\n";
            }, n3.strong = function(e3) {
              return "<strong>" + e3 + "</strong>";
            }, n3.em = function(e3) {
              return "<em>" + e3 + "</em>";
            }, n3.codespan = function(e3) {
              return "<code>" + e3 + "</code>";
            }, n3.br = function() {
              return this.options.xhtml ? "<br/>" : "<br>";
            }, n3.del = function(e3) {
              return "<del>" + e3 + "</del>";
            }, n3.link = function(e3, t4, n4) {
              if (null === (e3 = f(this.options.sanitize, this.options.baseUrl, e3)))
                return n4;
              var r2 = '<a href="' + s(e3) + '"';
              return t4 && (r2 += ' title="' + t4 + '"'), r2 += ">" + n4 + "</a>";
            }, n3.image = function(e3, t4, n4) {
              if (null === (e3 = f(this.options.sanitize, this.options.baseUrl, e3)))
                return n4;
              var r2 = '<img src="' + e3 + '" alt="' + n4 + '"';
              return t4 && (r2 += ' title="' + t4 + '"'), r2 += this.options.xhtml ? "/>" : ">";
            }, n3.text = function(e3) {
              return e3;
            }, t3;
          }(), q = function() {
            function e3() {
            }
            var t3 = e3.prototype;
            return t3.strong = function(e4) {
              return e4;
            }, t3.em = function(e4) {
              return e4;
            }, t3.codespan = function(e4) {
              return e4;
            }, t3.del = function(e4) {
              return e4;
            }, t3.html = function(e4) {
              return e4;
            }, t3.text = function(e4) {
              return e4;
            }, t3.link = function(e4, t4, n3) {
              return "" + n3;
            }, t3.image = function(e4, t4, n3) {
              return "" + n3;
            }, t3.br = function() {
              return "";
            }, e3;
          }(), W = function() {
            function e3() {
              this.seen = {};
            }
            var t3 = e3.prototype;
            return t3.serialize = function(e4) {
              return e4.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
            }, t3.getNextSafeSlug = function(e4, t4) {
              var n3 = e4, r2 = 0;
              if (this.seen.hasOwnProperty(n3)) {
                r2 = this.seen[e4];
                do {
                  r2++, n3 = e4 + "-" + r2;
                } while (this.seen.hasOwnProperty(n3));
              }
              return t4 || (this.seen[e4] = r2, this.seen[n3] = 0), n3;
            }, t3.slug = function(e4, t4) {
              void 0 === t4 && (t4 = {});
              var n3 = this.serialize(e4);
              return this.getNextSafeSlug(n3, t4.dryrun);
            }, e3;
          }(), V = function() {
            function t3(t4) {
              this.options = t4 || e2.defaults, this.options.renderer = this.options.renderer || new Q(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new q(), this.slugger = new W();
            }
            t3.parse = function(e3, n4) {
              return new t3(n4).parse(e3);
            }, t3.parseInline = function(e3, n4) {
              return new t3(n4).parseInline(e3);
            };
            var n3 = t3.prototype;
            return n3.parse = function(e3, t4) {
              void 0 === t4 && (t4 = true);
              var n4, r2, i2, o2, a2, u2, s2, c2, f2, p2, d2, h2, v2, g2, m2, y2, b2, D2, x2, w2 = "", A2 = e3.length;
              for (n4 = 0; n4 < A2; n4++)
                if (p2 = e3[n4], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p2.type]) || false === (x2 = this.options.extensions.renderers[p2.type].call({ parser: this }, p2)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(p2.type))
                  switch (p2.type) {
                    case "space":
                      continue;
                    case "hr":
                      w2 += this.renderer.hr();
                      continue;
                    case "heading":
                      w2 += this.renderer.heading(this.parseInline(p2.tokens), p2.depth, l(this.parseInline(p2.tokens, this.textRenderer)), this.slugger);
                      continue;
                    case "code":
                      w2 += this.renderer.code(p2.text, p2.lang, p2.escaped);
                      continue;
                    case "table":
                      for (c2 = "", s2 = "", o2 = p2.header.length, r2 = 0; r2 < o2; r2++)
                        s2 += this.renderer.tablecell(this.parseInline(p2.header[r2].tokens), { header: true, align: p2.align[r2] });
                      for (c2 += this.renderer.tablerow(s2), f2 = "", o2 = p2.rows.length, r2 = 0; r2 < o2; r2++) {
                        for (u2 = p2.rows[r2], s2 = "", a2 = u2.length, i2 = 0; i2 < a2; i2++)
                          s2 += this.renderer.tablecell(this.parseInline(u2[i2].tokens), { header: false, align: p2.align[i2] });
                        f2 += this.renderer.tablerow(s2);
                      }
                      w2 += this.renderer.table(c2, f2);
                      continue;
                    case "blockquote":
                      f2 = this.parse(p2.tokens), w2 += this.renderer.blockquote(f2);
                      continue;
                    case "list":
                      for (d2 = p2.ordered, h2 = p2.start, v2 = p2.loose, o2 = p2.items.length, f2 = "", r2 = 0; r2 < o2; r2++)
                        m2 = p2.items[r2], y2 = m2.checked, b2 = m2.task, g2 = "", m2.task && (D2 = this.renderer.checkbox(y2), v2 ? m2.tokens.length > 0 && "paragraph" === m2.tokens[0].type ? (m2.tokens[0].text = D2 + " " + m2.tokens[0].text, m2.tokens[0].tokens && m2.tokens[0].tokens.length > 0 && "text" === m2.tokens[0].tokens[0].type && (m2.tokens[0].tokens[0].text = D2 + " " + m2.tokens[0].tokens[0].text)) : m2.tokens.unshift({ type: "text", text: D2 }) : g2 += D2), g2 += this.parse(m2.tokens, v2), f2 += this.renderer.listitem(g2, b2, y2);
                      w2 += this.renderer.list(f2, d2, h2);
                      continue;
                    case "html":
                      w2 += this.renderer.html(p2.text);
                      continue;
                    case "paragraph":
                      w2 += this.renderer.paragraph(this.parseInline(p2.tokens));
                      continue;
                    case "text":
                      for (f2 = p2.tokens ? this.parseInline(p2.tokens) : p2.text; n4 + 1 < A2 && "text" === e3[n4 + 1].type; )
                        p2 = e3[++n4], f2 += "\n" + (p2.tokens ? this.parseInline(p2.tokens) : p2.text);
                      w2 += t4 ? this.renderer.paragraph(f2) : f2;
                      continue;
                    default:
                      var k2 = 'Token with "' + p2.type + '" type was not found.';
                      if (this.options.silent)
                        return;
                      throw new Error(k2);
                  }
                else
                  w2 += x2 || "";
              return w2;
            }, n3.parseInline = function(e3, t4) {
              t4 = t4 || this.renderer;
              var n4, r2, i2, o2 = "", a2 = e3.length;
              for (n4 = 0; n4 < a2; n4++)
                if (r2 = e3[n4], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r2.type]) || false === (i2 = this.options.extensions.renderers[r2.type].call({ parser: this }, r2)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r2.type))
                  switch (r2.type) {
                    case "escape":
                      o2 += t4.text(r2.text);
                      break;
                    case "html":
                      o2 += t4.html(r2.text);
                      break;
                    case "link":
                      o2 += t4.link(r2.href, r2.title, this.parseInline(r2.tokens, t4));
                      break;
                    case "image":
                      o2 += t4.image(r2.href, r2.title, r2.text);
                      break;
                    case "strong":
                      o2 += t4.strong(this.parseInline(r2.tokens, t4));
                      break;
                    case "em":
                      o2 += t4.em(this.parseInline(r2.tokens, t4));
                      break;
                    case "codespan":
                      o2 += t4.codespan(r2.text);
                      break;
                    case "br":
                      o2 += t4.br();
                      break;
                    case "del":
                      o2 += t4.del(this.parseInline(r2.tokens, t4));
                      break;
                    case "text":
                      o2 += t4.text(r2.text);
                      break;
                    default:
                      var u2 = 'Token with "' + r2.type + '" type was not found.';
                      if (this.options.silent)
                        return;
                      throw new Error(u2);
                  }
                else
                  o2 += i2 || "";
              return o2;
            }, t3;
          }();
          A.options = A.setOptions = function(e3) {
            return d(A.defaults, e3), u(A.defaults), A;
          }, A.getDefaults = a, A.defaults = e2.defaults, A.use = function() {
            for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
              t3[n3] = arguments[n3];
            var r2, i2 = d.apply(void 0, [{}].concat(t3)), o2 = A.defaults.extensions || { renderers: {}, childTokens: {} };
            t3.forEach(function(e4) {
              if (e4.extensions && (r2 = true, e4.extensions.forEach(function(e5) {
                if (!e5.name)
                  throw new Error("extension name required");
                if (e5.renderer) {
                  var t5 = o2.renderers ? o2.renderers[e5.name] : null;
                  o2.renderers[e5.name] = t5 ? function() {
                    for (var n4 = arguments.length, r3 = new Array(n4), i3 = 0; i3 < n4; i3++)
                      r3[i3] = arguments[i3];
                    var o3 = e5.renderer.apply(this, r3);
                    return false === o3 && (o3 = t5.apply(this, r3)), o3;
                  } : e5.renderer;
                }
                if (e5.tokenizer) {
                  if (!e5.level || "block" !== e5.level && "inline" !== e5.level)
                    throw new Error("extension level must be 'block' or 'inline'");
                  o2[e5.level] ? o2[e5.level].unshift(e5.tokenizer) : o2[e5.level] = [e5.tokenizer], e5.start && ("block" === e5.level ? o2.startBlock ? o2.startBlock.push(e5.start) : o2.startBlock = [e5.start] : "inline" === e5.level && (o2.startInline ? o2.startInline.push(e5.start) : o2.startInline = [e5.start]));
                }
                e5.childTokens && (o2.childTokens[e5.name] = e5.childTokens);
              })), e4.renderer && function() {
                var t5 = A.defaults.renderer || new Q();
                for (var n4 in e4.renderer)
                  !function(n5) {
                    var r3 = t5[n5];
                    t5[n5] = function() {
                      for (var i3 = arguments.length, o3 = new Array(i3), a2 = 0; a2 < i3; a2++)
                        o3[a2] = arguments[a2];
                      var u2 = e4.renderer[n5].apply(t5, o3);
                      return false === u2 && (u2 = r3.apply(t5, o3)), u2;
                    };
                  }(n4);
                i2.renderer = t5;
              }(), e4.tokenizer && function() {
                var t5 = A.defaults.tokenizer || new M();
                for (var n4 in e4.tokenizer)
                  !function(n5) {
                    var r3 = t5[n5];
                    t5[n5] = function() {
                      for (var i3 = arguments.length, o3 = new Array(i3), a2 = 0; a2 < i3; a2++)
                        o3[a2] = arguments[a2];
                      var u2 = e4.tokenizer[n5].apply(t5, o3);
                      return false === u2 && (u2 = r3.apply(t5, o3)), u2;
                    };
                  }(n4);
                i2.tokenizer = t5;
              }(), e4.walkTokens) {
                var t4 = A.defaults.walkTokens;
                i2.walkTokens = function(n4) {
                  e4.walkTokens.call(this, n4), t4 && t4.call(this, n4);
                };
              }
              r2 && (i2.extensions = o2), A.setOptions(i2);
            });
          }, A.walkTokens = function(e3, t3) {
            for (var n3, r2 = o(e3); !(n3 = r2()).done; )
              !function() {
                var e4 = n3.value;
                switch (t3.call(A, e4), e4.type) {
                  case "table":
                    for (var r3, i2 = o(e4.header); !(r3 = i2()).done; ) {
                      var a2 = r3.value;
                      A.walkTokens(a2.tokens, t3);
                    }
                    for (var u2, s2 = o(e4.rows); !(u2 = s2()).done; )
                      for (var l2, c2 = u2.value, f2 = o(c2); !(l2 = f2()).done; ) {
                        var p2 = l2.value;
                        A.walkTokens(p2.tokens, t3);
                      }
                    break;
                  case "list":
                    A.walkTokens(e4.items, t3);
                    break;
                  default:
                    A.defaults.extensions && A.defaults.extensions.childTokens && A.defaults.extensions.childTokens[e4.type] ? A.defaults.extensions.childTokens[e4.type].forEach(function(n4) {
                      A.walkTokens(e4[n4], t3);
                    }) : e4.tokens && A.walkTokens(e4.tokens, t3);
                }
              }();
          }, A.parseInline = function(e3, t3) {
            if (void 0 === e3 || null === e3)
              throw new Error("marked.parseInline(): input parameter is undefined or null");
            if ("string" != typeof e3)
              throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
            t3 = d({}, A.defaults, t3 || {}), m(t3);
            try {
              var n3 = U.lexInline(e3, t3);
              return t3.walkTokens && A.walkTokens(n3, t3.walkTokens), V.parseInline(n3, t3);
            } catch (e4) {
              if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
                return "<p>An error occurred:</p><pre>" + s(e4.message + "", true) + "</pre>";
              throw e4;
            }
          }, A.Parser = V, A.parser = V.parse, A.Renderer = Q, A.TextRenderer = q, A.Lexer = U, A.lexer = U.lex, A.Tokenizer = M, A.Slugger = W, A.parse = A;
          var H = A.options, K = A.setOptions, Z = A.use, G = A.walkTokens, J = A.parseInline, X = A, Y = V.parse, ee = U.lex;
          e2.Lexer = U, e2.Parser = V, e2.Renderer = Q, e2.Slugger = W, e2.TextRenderer = q, e2.Tokenizer = M, e2.getDefaults = a, e2.lexer = ee, e2.marked = A, e2.options = H, e2.parse = X, e2.parseInline = J, e2.parser = Y, e2.setOptions = K, e2.use = Z, e2.walkTokens = G, Object.defineProperty(e2, "__esModule", { value: true });
        });
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          var t2 = {};
          return c(f(e2), function(e3) {
            var n2 = e3[0], r2 = e3[1];
            c(r2, function(e4) {
              t2[e4] = n2;
            });
          }), t2;
        }
        function i(e2, t2) {
          var n2 = r(e2.pluralTypeToLanguages);
          return n2[t2] || n2[m.call(t2, /-/, 1)[0]] || n2.en;
        }
        function o(e2, t2, n2) {
          return e2.pluralTypes[t2](n2);
        }
        function a(e2) {
          return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function u(e2) {
          var t2 = e2 && e2.prefix || "%{", n2 = e2 && e2.suffix || "}";
          if (t2 === y || n2 === y)
            throw new RangeError('"' + y + '" token is reserved for pluralization');
          return new RegExp(a(t2) + "(.*?)" + a(n2), "g");
        }
        function s(e2, t2, n2, r2, i2) {
          if ("string" != typeof e2)
            throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
          if (null == t2)
            return e2;
          var a2 = e2, u2 = r2 || w, s2 = "number" == typeof t2 ? { smart_count: t2 } : t2;
          if (null != s2.smart_count && e2) {
            var l2 = i2 || D, c2 = m.call(e2, y), f2 = n2 || "en", p2 = x(l2, f2), v2 = o(l2, p2, s2.smart_count);
            a2 = h(c2[v2] || c2[0]);
          }
          return a2 = g.call(a2, u2, function(e3, t3) {
            return d(s2, t3) && null != s2[t3] ? s2[t3] : e3;
          });
        }
        function l(e2) {
          var t2 = e2 || {};
          this.phrases = {}, this.extend(t2.phrases || {}), this.currentLocale = t2.locale || "en";
          var n2 = t2.allowMissing ? s : null;
          this.onMissingKey = "function" == typeof t2.onMissingKey ? t2.onMissingKey : n2, this.warn = t2.warn || v, this.tokenRegex = u(t2.interpolation), this.pluralRules = t2.pluralRules || D;
        }
        var c = n(43), f = n(89), p = n(94), d = n(25), h = n(92), v = function(e2) {
          p(false, e2);
        }, g = String.prototype.replace, m = String.prototype.split, y = "||||", b = function(e2) {
          var t2 = e2 % 100, n2 = t2 % 10;
          return 11 !== t2 && 1 === n2 ? 0 : 2 <= n2 && n2 <= 4 && !(t2 >= 12 && t2 <= 14) ? 1 : 2;
        }, D = { pluralTypes: { arabic: function(e2) {
          if (e2 < 3)
            return e2;
          var t2 = e2 % 100;
          return t2 >= 3 && t2 <= 10 ? 3 : t2 >= 11 ? 4 : 5;
        }, bosnian_serbian: b, chinese: function() {
          return 0;
        }, croatian: b, french: function(e2) {
          return e2 >= 2 ? 1 : 0;
        }, german: function(e2) {
          return 1 !== e2 ? 1 : 0;
        }, russian: b, lithuanian: function(e2) {
          return e2 % 10 == 1 && e2 % 100 != 11 ? 0 : e2 % 10 >= 2 && e2 % 10 <= 9 && (e2 % 100 < 11 || e2 % 100 > 19) ? 1 : 2;
        }, czech: function(e2) {
          return 1 === e2 ? 0 : e2 >= 2 && e2 <= 4 ? 1 : 2;
        }, polish: function(e2) {
          if (1 === e2)
            return 0;
          var t2 = e2 % 10;
          return 2 <= t2 && t2 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2;
        }, icelandic: function(e2) {
          return e2 % 10 != 1 || e2 % 100 == 11 ? 1 : 0;
        }, slovenian: function(e2) {
          var t2 = e2 % 100;
          return 1 === t2 ? 0 : 2 === t2 ? 1 : 3 === t2 || 4 === t2 ? 2 : 3;
        } }, pluralTypeToLanguages: { arabic: ["ar"], bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"], chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"], croatian: ["hr", "hr-HR"], german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"], french: ["fr", "tl", "pt-br"], russian: ["ru", "ru-RU"], lithuanian: ["lt"], czech: ["cs", "cs-CZ", "sk"], polish: ["pl"], icelandic: ["is"], slovenian: ["sl-SL"] } }, x = /* @__PURE__ */ function() {
          var e2 = {};
          return function(t2, n2) {
            var r2 = e2[n2];
            return r2 && !t2.pluralTypes[r2] && (r2 = null, e2[n2] = r2), r2 || (r2 = i(t2, n2)) && (e2[n2] = r2), r2;
          };
        }(), w = /%\{(.*?)\}/g;
        l.prototype.locale = function(e2) {
          return e2 && (this.currentLocale = e2), this.currentLocale;
        }, l.prototype.extend = function(e2, t2) {
          c(f(e2 || {}), function(e3) {
            var n2 = e3[0], r2 = e3[1], i2 = t2 ? t2 + "." + n2 : n2;
            "object" == typeof r2 ? this.extend(r2, i2) : this.phrases[i2] = r2;
          }, this);
        }, l.prototype.unset = function(e2, t2) {
          "string" == typeof e2 ? delete this.phrases[e2] : c(f(e2 || {}), function(e3) {
            var n2 = e3[0], r2 = e3[1], i2 = t2 ? t2 + "." + n2 : n2;
            "object" == typeof r2 ? this.unset(r2, i2) : delete this.phrases[i2];
          }, this);
        }, l.prototype.clear = function() {
          this.phrases = {};
        }, l.prototype.replace = function(e2) {
          this.clear(), this.extend(e2);
        }, l.prototype.t = function(e2, t2) {
          var n2, r2, i2 = null == t2 ? {} : t2;
          if ("string" == typeof this.phrases[e2])
            n2 = this.phrases[e2];
          else if ("string" == typeof i2._)
            n2 = i2._;
          else if (this.onMissingKey) {
            var o2 = this.onMissingKey;
            r2 = o2(e2, i2, this.currentLocale, this.tokenRegex, this.pluralRules);
          } else
            this.warn('Missing translation for key: "' + e2 + '"'), r2 = e2;
          return "string" == typeof n2 && (r2 = s(n2, i2, this.currentLocale, this.tokenRegex, this.pluralRules)), r2;
        }, l.prototype.has = function(e2) {
          return d(this.phrases, e2);
        }, l.transformPhrase = function(e2, t2, n2) {
          return s(e2, t2, n2);
        }, e.exports = l;
      }, function(e, t, n) {
        "use strict";
        function r(e2) {
          if (null === e2 || void 0 === e2)
            throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e2);
        }
        var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
          try {
            if (!Object.assign)
              return false;
            var e2 = new String("abc");
            if (e2[5] = "de", "5" === Object.getOwnPropertyNames(e2)[0])
              return false;
            for (var t2 = {}, n2 = 0; n2 < 10; n2++)
              t2["_" + String.fromCharCode(n2)] = n2;
            if ("0123456789" !== Object.getOwnPropertyNames(t2).map(function(e3) {
              return t2[e3];
            }).join(""))
              return false;
            var r2 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e3) {
              r2[e3] = e3;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r2)).join("");
          } catch (e3) {
            return false;
          }
        }() ? Object.assign : function(e2, t2) {
          for (var n2, u, s = r(e2), l = 1; l < arguments.length; l++) {
            n2 = Object(arguments[l]);
            for (var c in n2)
              o.call(n2, c) && (s[c] = n2[c]);
            if (i) {
              u = i(n2);
              for (var f = 0; f < u.length; f++)
                a.call(n2, u[f]) && (s[u[f]] = n2[u[f]]);
            }
          }
          return s;
        };
      }, function(e, t, n) {
        function r(e2, t2) {
          if (e2 === 1 / 0 || e2 === -1 / 0 || e2 !== e2 || e2 && e2 > -1e3 && e2 < 1e3 || ne.call(/e/, t2))
            return t2;
          var n2 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" == typeof e2) {
            var r2 = e2 < 0 ? -ae(-e2) : ae(e2);
            if (r2 !== e2) {
              var i2 = String(r2), o2 = X.call(t2, i2.length + 1);
              return Y.call(i2, n2, "$&_") + "." + Y.call(Y.call(o2, /([0-9]{3})/g, "$&_"), /_$/, "");
            }
          }
          return Y.call(t2, n2, "$&_");
        }
        function i(e2, t2, n2) {
          var r2 = "double" === (n2.quoteStyle || t2) ? '"' : "'";
          return r2 + e2 + r2;
        }
        function o(e2) {
          return Y.call(String(e2), /"/g, "&quot;");
        }
        function a(e2) {
          return !("[object Array]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function u(e2) {
          return !("[object Date]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function s(e2) {
          return !("[object RegExp]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function l(e2) {
          return !("[object Error]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function c(e2) {
          return !("[object String]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function f(e2) {
          return !("[object Number]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function p(e2) {
          return !("[object Boolean]" !== g(e2) || fe && "object" == typeof e2 && fe in e2);
        }
        function d(e2) {
          if (ce)
            return e2 && "object" == typeof e2 && e2 instanceof Symbol;
          if ("symbol" == typeof e2)
            return true;
          if (!e2 || "object" != typeof e2 || !le)
            return false;
          try {
            return le.call(e2), true;
          } catch (e3) {
          }
          return false;
        }
        function h(e2) {
          if (!e2 || "object" != typeof e2 || !ue)
            return false;
          try {
            return ue.call(e2), true;
          } catch (e3) {
          }
          return false;
        }
        function v(e2, t2) {
          return ge.call(e2, t2);
        }
        function g(e2) {
          return Z.call(e2);
        }
        function m(e2) {
          if (e2.name)
            return e2.name;
          var t2 = J.call(G.call(e2), /^function\s*([\w$]+)/);
          return t2 ? t2[1] : null;
        }
        function y(e2, t2) {
          if (e2.indexOf)
            return e2.indexOf(t2);
          for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
            if (e2[n2] === t2)
              return n2;
          return -1;
        }
        function b(e2) {
          if (!z || !e2 || "object" != typeof e2)
            return false;
          try {
            z.call(e2);
            try {
              L.call(e2);
            } catch (e3) {
              return true;
            }
            return e2 instanceof Map;
          } catch (e3) {
          }
          return false;
        }
        function D(e2) {
          if (!Q || !e2 || "object" != typeof e2)
            return false;
          try {
            Q.call(e2, Q);
            try {
              W.call(e2, W);
            } catch (e3) {
              return true;
            }
            return e2 instanceof WeakMap;
          } catch (e3) {
          }
          return false;
        }
        function x(e2) {
          if (!H || !e2 || "object" != typeof e2)
            return false;
          try {
            return H.call(e2), true;
          } catch (e3) {
          }
          return false;
        }
        function w(e2) {
          if (!L || !e2 || "object" != typeof e2)
            return false;
          try {
            L.call(e2);
            try {
              z.call(e2);
            } catch (e3) {
              return true;
            }
            return e2 instanceof Set;
          } catch (e3) {
          }
          return false;
        }
        function A(e2) {
          if (!W || !e2 || "object" != typeof e2)
            return false;
          try {
            W.call(e2, W);
            try {
              Q.call(e2, Q);
            } catch (e3) {
              return true;
            }
            return e2 instanceof WeakSet;
          } catch (e3) {
          }
          return false;
        }
        function k(e2) {
          return !(!e2 || "object" != typeof e2) && ("undefined" != typeof HTMLElement && e2 instanceof HTMLElement || "string" == typeof e2.nodeName && "function" == typeof e2.getAttribute);
        }
        function E(e2, t2) {
          if (e2.length > t2.maxStringLength) {
            var n2 = e2.length - t2.maxStringLength, r2 = "... " + n2 + " more character" + (n2 > 1 ? "s" : "");
            return E(X.call(e2, 0, t2.maxStringLength), t2) + r2;
          }
          return i(Y.call(Y.call(e2, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, F), "single", t2);
        }
        function F(e2) {
          var t2 = e2.charCodeAt(0), n2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t2];
          return n2 ? "\\" + n2 : "\\x" + (t2 < 16 ? "0" : "") + ee.call(t2.toString(16));
        }
        function C(e2) {
          return "Object(" + e2 + ")";
        }
        function _(e2) {
          return e2 + " { ? }";
        }
        function S(e2, t2, n2, r2) {
          return e2 + " (" + t2 + ") {" + (r2 ? $(n2, r2) : ie.call(n2, ", ")) + "}";
        }
        function O(e2) {
          for (var t2 = 0; t2 < e2.length; t2++)
            if (y(e2[t2], "\n") >= 0)
              return false;
          return true;
        }
        function B(e2, t2) {
          var n2;
          if ("	" === e2.indent)
            n2 = "	";
          else {
            if (!("number" == typeof e2.indent && e2.indent > 0))
              return null;
            n2 = ie.call(Array(e2.indent + 1), " ");
          }
          return { base: n2, prev: ie.call(Array(t2 + 1), n2) };
        }
        function $(e2, t2) {
          if (0 === e2.length)
            return "";
          var n2 = "\n" + t2.prev + t2.base;
          return n2 + ie.call(e2, "," + n2) + "\n" + t2.prev;
        }
        function j(e2, t2) {
          var n2 = a(e2), r2 = [];
          if (n2) {
            r2.length = e2.length;
            for (var i2 = 0; i2 < e2.length; i2++)
              r2[i2] = v(e2, i2) ? t2(e2[i2], e2) : "";
          }
          var o2, u2 = "function" == typeof se ? se(e2) : [];
          if (ce) {
            o2 = {};
            for (var s2 = 0; s2 < u2.length; s2++)
              o2["$" + u2[s2]] = u2[s2];
          }
          for (var l2 in e2)
            v(e2, l2) && (n2 && String(Number(l2)) === l2 && l2 < e2.length || ce && o2["$" + l2] instanceof Symbol || (ne.call(/[^\w$]/, l2) ? r2.push(t2(l2, e2) + ": " + t2(e2[l2], e2)) : r2.push(l2 + ": " + t2(e2[l2], e2))));
          if ("function" == typeof se)
            for (var c2 = 0; c2 < u2.length; c2++)
              pe.call(e2, u2[c2]) && r2.push("[" + t2(u2[c2]) + "]: " + t2(e2[u2[c2]], e2));
          return r2;
        }
        var T = "function" == typeof Map && Map.prototype, I = Object.getOwnPropertyDescriptor && T ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, z = T && I && "function" == typeof I.get ? I.get : null, R = T && Map.prototype.forEach, P = "function" == typeof Set && Set.prototype, M = Object.getOwnPropertyDescriptor && P ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, L = P && M && "function" == typeof M.get ? M.get : null, N = P && Set.prototype.forEach, U = "function" == typeof WeakMap && WeakMap.prototype, Q = U ? WeakMap.prototype.has : null, q = "function" == typeof WeakSet && WeakSet.prototype, W = q ? WeakSet.prototype.has : null, V = "function" == typeof WeakRef && WeakRef.prototype, H = V ? WeakRef.prototype.deref : null, K = Boolean.prototype.valueOf, Z = Object.prototype.toString, G = Function.prototype.toString, J = String.prototype.match, X = String.prototype.slice, Y = String.prototype.replace, ee = String.prototype.toUpperCase, te = String.prototype.toLowerCase, ne = RegExp.prototype.test, re = Array.prototype.concat, ie = Array.prototype.join, oe = Array.prototype.slice, ae = Math.floor, ue = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, se = Object.getOwnPropertySymbols, le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, ce = "function" == typeof Symbol && "object" == typeof Symbol.iterator, fe = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === ce ? "object" : "symbol") ? Symbol.toStringTag : null, pe = Object.prototype.propertyIsEnumerable, de = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e2) {
          return e2.__proto__;
        } : null), he = n(102).custom, ve = he && d(he) ? he : null;
        e.exports = function e2(t2, n2, F2, T2) {
          function I2(t3, n3, r2) {
            if (n3 && (T2 = oe.call(T2), T2.push(n3)), r2) {
              var i2 = { depth: P2.depth };
              return v(P2, "quoteStyle") && (i2.quoteStyle = P2.quoteStyle), e2(t3, i2, F2 + 1, T2);
            }
            return e2(t3, P2, F2 + 1, T2);
          }
          var P2 = n2 || {};
          if (v(P2, "quoteStyle") && "single" !== P2.quoteStyle && "double" !== P2.quoteStyle)
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
          if (v(P2, "maxStringLength") && ("number" == typeof P2.maxStringLength ? P2.maxStringLength < 0 && P2.maxStringLength !== 1 / 0 : null !== P2.maxStringLength))
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
          var M2 = !v(P2, "customInspect") || P2.customInspect;
          if ("boolean" != typeof M2 && "symbol" !== M2)
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
          if (v(P2, "indent") && null !== P2.indent && "	" !== P2.indent && !(parseInt(P2.indent, 10) === P2.indent && P2.indent > 0))
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
          if (v(P2, "numericSeparator") && "boolean" != typeof P2.numericSeparator)
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
          var U2 = P2.numericSeparator;
          if (void 0 === t2)
            return "undefined";
          if (null === t2)
            return "null";
          if ("boolean" == typeof t2)
            return t2 ? "true" : "false";
          if ("string" == typeof t2)
            return E(t2, P2);
          if ("number" == typeof t2) {
            if (0 === t2)
              return 1 / 0 / t2 > 0 ? "0" : "-0";
            var Q2 = String(t2);
            return U2 ? r(t2, Q2) : Q2;
          }
          if ("bigint" == typeof t2) {
            var q2 = String(t2) + "n";
            return U2 ? r(t2, q2) : q2;
          }
          var W2 = void 0 === P2.depth ? 5 : P2.depth;
          if (void 0 === F2 && (F2 = 0), F2 >= W2 && W2 > 0 && "object" == typeof t2)
            return a(t2) ? "[Array]" : "[Object]";
          var V2 = B(P2, F2);
          if (void 0 === T2)
            T2 = [];
          else if (y(T2, t2) >= 0)
            return "[Circular]";
          if ("function" == typeof t2) {
            var H2 = m(t2), Z2 = j(t2, I2);
            return "[Function" + (H2 ? ": " + H2 : " (anonymous)") + "]" + (Z2.length > 0 ? " { " + ie.call(Z2, ", ") + " }" : "");
          }
          if (d(t2)) {
            var G2 = ce ? Y.call(String(t2), /^(Symbol\(.*\))_[^)]*$/, "$1") : le.call(t2);
            return "object" != typeof t2 || ce ? G2 : C(G2);
          }
          if (k(t2)) {
            for (var J2 = "<" + te.call(String(t2.nodeName)), ee2 = t2.attributes || [], ne2 = 0; ne2 < ee2.length; ne2++)
              J2 += " " + ee2[ne2].name + "=" + i(o(ee2[ne2].value), "double", P2);
            return J2 += ">", t2.childNodes && t2.childNodes.length && (J2 += "..."), J2 += "</" + te.call(String(t2.nodeName)) + ">";
          }
          if (a(t2)) {
            if (0 === t2.length)
              return "[]";
            var ae2 = j(t2, I2);
            return V2 && !O(ae2) ? "[" + $(ae2, V2) + "]" : "[ " + ie.call(ae2, ", ") + " ]";
          }
          if (l(t2)) {
            var se2 = j(t2, I2);
            return "cause" in t2 && !pe.call(t2, "cause") ? "{ [" + String(t2) + "] " + ie.call(re.call("[cause]: " + I2(t2.cause), se2), ", ") + " }" : 0 === se2.length ? "[" + String(t2) + "]" : "{ [" + String(t2) + "] " + ie.call(se2, ", ") + " }";
          }
          if ("object" == typeof t2 && M2) {
            if (ve && "function" == typeof t2[ve])
              return t2[ve]();
            if ("symbol" !== M2 && "function" == typeof t2.inspect)
              return t2.inspect();
          }
          if (b(t2)) {
            var he2 = [];
            return R.call(t2, function(e3, n3) {
              he2.push(I2(n3, t2, true) + " => " + I2(e3, t2));
            }), S("Map", z.call(t2), he2, V2);
          }
          if (w(t2)) {
            var ge2 = [];
            return N.call(t2, function(e3) {
              ge2.push(I2(e3, t2));
            }), S("Set", L.call(t2), ge2, V2);
          }
          if (D(t2))
            return _("WeakMap");
          if (A(t2))
            return _("WeakSet");
          if (x(t2))
            return _("WeakRef");
          if (f(t2))
            return C(I2(Number(t2)));
          if (h(t2))
            return C(I2(ue.call(t2)));
          if (p(t2))
            return C(K.call(t2));
          if (c(t2))
            return C(I2(String(t2)));
          if (!u(t2) && !s(t2)) {
            var me = j(t2, I2), ye = de ? de(t2) === Object.prototype : t2 instanceof Object || t2.constructor === Object, be = t2 instanceof Object ? "" : "null prototype", De = !ye && fe && Object(t2) === t2 && fe in t2 ? X.call(g(t2), 8, -1) : be ? "Object" : "", xe = ye || "function" != typeof t2.constructor ? "" : t2.constructor.name ? t2.constructor.name + " " : "", we = xe + (De || be ? "[" + ie.call(re.call([], De || [], be || []), ": ") + "] " : "");
            return 0 === me.length ? we + "{}" : V2 ? we + "{" + $(me, V2) + "}" : we + "{ " + ie.call(me, ", ") + " }";
          }
          return String(t2);
        };
        var ge = Object.prototype.hasOwnProperty || function(e2) {
          return e2 in this;
        };
      }, function(e, t, n) {
        "use strict";
        var r;
        if (!Object.keys) {
          var i = Object.prototype.hasOwnProperty, o = Object.prototype.toString, a = n(26), u = Object.prototype.propertyIsEnumerable, s = !u.call({ toString: null }, "toString"), l = u.call(function() {
          }, "prototype"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], f = function(e2) {
            var t2 = e2.constructor;
            return t2 && t2.prototype === e2;
          }, p = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, d = function() {
            if ("undefined" == typeof window)
              return false;
            for (var e2 in window)
              try {
                if (!p["$" + e2] && i.call(window, e2) && null !== window[e2] && "object" == typeof window[e2])
                  try {
                    f(window[e2]);
                  } catch (e3) {
                    return true;
                  }
              } catch (e3) {
                return true;
              }
            return false;
          }(), h = function(e2) {
            if ("undefined" == typeof window || !d)
              return f(e2);
            try {
              return f(e2);
            } catch (e3) {
              return false;
            }
          };
          r = function(e2) {
            var t2 = null !== e2 && "object" == typeof e2, n2 = "[object Function]" === o.call(e2), r2 = a(e2), u2 = t2 && "[object String]" === o.call(e2), f2 = [];
            if (!t2 && !n2 && !r2)
              throw new TypeError("Object.keys called on a non-object");
            var p2 = l && n2;
            if (u2 && e2.length > 0 && !i.call(e2, 0))
              for (var d2 = 0; d2 < e2.length; ++d2)
                f2.push(String(d2));
            if (r2 && e2.length > 0)
              for (var v = 0; v < e2.length; ++v)
                f2.push(String(v));
            else
              for (var g in e2)
                p2 && "prototype" === g || !i.call(e2, g) || f2.push(String(g));
            if (s)
              for (var m = h(e2), y = 0; y < c.length; ++y)
                m && "constructor" === c[y] || !i.call(e2, c[y]) || f2.push(c[y]);
            return f2;
          };
        }
        e.exports = r;
      }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.slice, i = n(26), o = Object.keys, a = o ? function(e2) {
          return o(e2);
        } : n(87), u = Object.keys;
        a.shim = function() {
          if (Object.keys) {
            (function() {
              var e2 = Object.keys(arguments);
              return e2 && e2.length === arguments.length;
            })(1, 2) || (Object.keys = function(e2) {
              return u(i(e2) ? r.call(e2) : e2);
            });
          } else
            Object.keys = a;
          return Object.keys || a;
        }, e.exports = a;
      }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(4), o = n(27), a = n(28), u = n(90), s = i(a(), Object);
        r(s, { getPolyfill: a, implementation: o, shim: u }), e.exports = s;
      }, function(e, t, n) {
        "use strict";
        var r = n(28), i = n(2);
        e.exports = function() {
          var e2 = r();
          return i(Object, { entries: e2 }, { entries: function() {
            return Object.entries !== e2;
          } }), e2;
        };
      }, function(e, t) {
        function n() {
          throw new Error("setTimeout has not been defined");
        }
        function r() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e2) {
          if (c === setTimeout)
            return setTimeout(e2, 0);
          if ((c === n || !c) && setTimeout)
            return c = setTimeout, setTimeout(e2, 0);
          try {
            return c(e2, 0);
          } catch (t2) {
            try {
              return c.call(null, e2, 0);
            } catch (t3) {
              return c.call(this, e2, 0);
            }
          }
        }
        function o(e2) {
          if (f === clearTimeout)
            return clearTimeout(e2);
          if ((f === r || !f) && clearTimeout)
            return f = clearTimeout, clearTimeout(e2);
          try {
            return f(e2);
          } catch (t2) {
            try {
              return f.call(null, e2);
            } catch (t3) {
              return f.call(this, e2);
            }
          }
        }
        function a() {
          v && d && (v = false, d.length ? h = d.concat(h) : g = -1, h.length && u());
        }
        function u() {
          if (!v) {
            var e2 = i(a);
            v = true;
            for (var t2 = h.length; t2; ) {
              for (d = h, h = []; ++g < t2; )
                d && d[g].run();
              g = -1, t2 = h.length;
            }
            d = null, v = false, o(e2);
          }
        }
        function s(e2, t2) {
          this.fun = e2, this.array = t2;
        }
        function l() {
        }
        var c, f, p = e.exports = {};
        !function() {
          try {
            c = "function" == typeof setTimeout ? setTimeout : n;
          } catch (e2) {
            c = n;
          }
          try {
            f = "function" == typeof clearTimeout ? clearTimeout : r;
          } catch (e2) {
            f = r;
          }
        }();
        var d, h = [], v = false, g = -1;
        p.nextTick = function(e2) {
          var t2 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n2 = 1; n2 < arguments.length; n2++)
              t2[n2 - 1] = arguments[n2];
          h.push(new s(e2, t2)), 1 !== h.length || v || i(u);
        }, s.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, p.title = "browser", p.browser = true, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(e2) {
          return [];
        }, p.binding = function(e2) {
          throw new Error("process.binding is not supported");
        }, p.cwd = function() {
          return "/";
        }, p.chdir = function(e2) {
          throw new Error("process.chdir is not supported");
        }, p.umask = function() {
          return 0;
        };
      }, function(e, t, n) {
        "use strict";
        var r = n(4), i = n(2), o = n(29), a = n(30), u = n(93), s = r(a());
        i(s, { getPolyfill: a, implementation: o, shim: u }), e.exports = s;
      }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(30);
        e.exports = function() {
          var e2 = i();
          return r(String.prototype, { trim: e2 }, { trim: function() {
            return String.prototype.trim !== e2;
          } }), e2;
        };
      }, function(e, t, n) {
        "use strict";
        (function(t2) {
          var n2 = "production" !== t2.env.NODE_ENV, r = function() {
          };
          if (n2) {
            var i = function(e2, t3) {
              var n3 = arguments.length;
              t3 = new Array(n3 > 1 ? n3 - 1 : 0);
              for (var r2 = 1; r2 < n3; r2++)
                t3[r2 - 1] = arguments[r2];
              var i2 = 0, o = "Warning: " + e2.replace(/%s/g, function() {
                return t3[i2++];
              });
              try {
                throw new Error(o);
              } catch (e3) {
              }
            };
            r = function(e2, t3, n3) {
              var r2 = arguments.length;
              n3 = new Array(r2 > 2 ? r2 - 2 : 0);
              for (var o = 2; o < r2; o++)
                n3[o - 2] = arguments[o];
              if (void 0 === t3)
                throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
              e2 || i.apply(null, [t3].concat(n3));
            };
          }
          e.exports = r;
        }).call(t, n(91));
      }, function(e, t, n) {
        function r(e2, t2) {
          return new a(t2).process(e2);
        }
        var i = n(31), o = n(32), a = n(96);
        t = e.exports = r, t.filterXSS = r, t.FilterXSS = a;
        for (var u in i)
          t[u] = i[u];
        for (var u in o)
          t[u] = o[u];
        "undefined" != typeof window && (window.filterXSS = e.exports), function() {
          return "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope;
        }() && (self.filterXSS = e.exports);
      }, function(e, t, n) {
        function r(e2) {
          return void 0 === e2 || null === e2;
        }
        function i(e2) {
          var t2 = p.spaceIndex(e2);
          if (-1 === t2)
            return { html: "", closing: "/" === e2[e2.length - 2] };
          e2 = p.trim(e2.slice(t2 + 1, -1));
          var n2 = "/" === e2[e2.length - 1];
          return n2 && (e2 = p.trim(e2.slice(0, -1))), { html: e2, closing: n2 };
        }
        function o(e2) {
          var t2 = {};
          for (var n2 in e2)
            t2[n2] = e2[n2];
          return t2;
        }
        function a(e2) {
          e2 = o(e2 || {}), e2.stripIgnoreTag && (e2.onIgnoreTag, e2.onIgnoreTag = s.onIgnoreTagStripAll), e2.whiteList = e2.whiteList || e2.allowList || s.whiteList, e2.onTag = e2.onTag || s.onTag, e2.onTagAttr = e2.onTagAttr || s.onTagAttr, e2.onIgnoreTag = e2.onIgnoreTag || s.onIgnoreTag, e2.onIgnoreTagAttr = e2.onIgnoreTagAttr || s.onIgnoreTagAttr, e2.safeAttrValue = e2.safeAttrValue || s.safeAttrValue, e2.escapeHtml = e2.escapeHtml || s.escapeHtml, this.options = e2, false === e2.css ? this.cssFilter = false : (e2.css = e2.css || {}, this.cssFilter = new u(e2.css));
        }
        var u = n(7).FilterCSS, s = n(31), l = n(32), c = l.parseTag, f = l.parseAttr, p = n(11);
        a.prototype.process = function(e2) {
          if (e2 = e2 || "", !(e2 = e2.toString()))
            return "";
          var t2 = this, n2 = t2.options, o2 = n2.whiteList, a2 = n2.onTag, u2 = n2.onIgnoreTag, l2 = n2.onTagAttr, d = n2.onIgnoreTagAttr, h = n2.safeAttrValue, v = n2.escapeHtml, g = t2.cssFilter;
          n2.stripBlankChar && (e2 = s.stripBlankChar(e2)), n2.allowCommentTag || (e2 = s.stripCommentTag(e2));
          var m = false;
          if (n2.stripIgnoreTagBody) {
            var m = s.StripTagBody(n2.stripIgnoreTagBody, u2);
            u2 = m.onIgnoreTag;
          }
          var y = c(e2, function(e3, t3, n3, s2, c2) {
            var m2 = { sourcePosition: e3, position: t3, isClosing: c2, isWhite: o2.hasOwnProperty(n3) }, y2 = a2(n3, s2, m2);
            if (!r(y2))
              return y2;
            if (m2.isWhite) {
              if (m2.isClosing)
                return "</" + n3 + ">";
              var b = i(s2), D = o2[n3], x = f(b.html, function(e4, t4) {
                var i2 = -1 !== p.indexOf(D, e4), o3 = l2(n3, e4, t4, i2);
                if (!r(o3))
                  return o3;
                if (i2)
                  return t4 = h(n3, e4, t4, g), t4 ? e4 + '="' + t4 + '"' : e4;
                var o3 = d(n3, e4, t4, i2);
                return r(o3) ? void 0 : o3;
              }), s2 = "<" + n3;
              return x && (s2 += " " + x), b.closing && (s2 += " /"), s2 += ">";
            }
            var y2 = u2(n3, s2, m2);
            return r(y2) ? v(s2) : y2;
          }, v);
          return m && (y = m.remove(y)), y;
        }, e.exports = a;
      }, function(e, t) {
        e.exports = { smile: "e3/2018new_weixioa02_org.png", lovely: "09/2018new_keai_org.png", happy: "1e/2018new_taikaixin_org.png", clap: "6e/2018new_guzhang_thumb.png", whee: "33/2018new_xixi_thumb.png", haha: "8f/2018new_haha_thumb.png", "laugh and cry": "4a/2018new_xiaoku_thumb.png", wink: "43/2018new_jiyan_org.png", greddy: "fa/2018new_chanzui_org.png", awkward: "a3/2018new_heixian_thumb.png", sweat: "28/2018new_han_org.png", "pick nose": "9a/2018new_wabi_thumb.png", hum: "7c/2018new_heng_thumb.png", angry: "f6/2018new_nu_thumb.png", grievance: "a5/2018new_weiqu_thumb.png", poor: "96/2018new_kelian_org.png", disappoint: "aa/2018new_shiwang_thumb.png", sad: "ee/2018new_beishang_org.png", tear: "6e/2018new_leimu_org.png", "no way": "83/2018new_kuxiao_org.png", shy: "c1/2018new_haixiu_org.png", dirt: "10/2018new_wu_thumb.png", "love you": "f6/2018new_aini_org.png", kiss: "2c/2018new_qinqin_thumb.png", amorousness: "9d/2018new_huaxin_org.png", longing: "c9/2018new_chongjing_org.png", desire: "3e/2018new_tianping_thumb.png", "bad laugh": "4d/2018new_huaixiao_org.png", blackness: "9e/2018new_yinxian_org.png", "laugh without word": "2d/2018new_xiaoerbuyu_org.png", titter: "71/2018new_touxiao_org.png", cool: "c4/2018new_ku_org.png", "not easy": "aa/2018new_bingbujiandan_thumb.png", think: "30/2018new_sikao_org.png", question: "b8/2018new_ningwen_org.png", "no idea": "2a/2018new_wenhao_thumb.png", dizzy: "07/2018new_yun_thumb.png", bomb: "a2/2018new_shuai_thumb.png", bone: "a1/2018new_kulou_thumb.png", "be quiet": "b0/2018new_xu_org.png", "shut up": "62/2018new_bizui_org.png", stupid: "dd/2018new_shayan_org.png", "surprise ": "49/2018new_chijing_org.png", vomit: "08/2018new_tu_org.png", cold: "40/2018new_kouzhao_thumb.png", sick: "3b/2018new_shengbing_thumb.png", bye: "fd/2018new_baibai_thumb.png", "look down on": "da/2018new_bishi_org.png", "white eye": "ef/2018new_landelini_org.png", "left hum": "43/2018new_zuohengheng_thumb.png", "right hum": "c1/2018new_youhengheng_thumb.png", crazy: "17/2018new_zhuakuang_org.png", "scold ": "87/2018new_zhouma_thumb.png", "hit on face": "cb/2018new_dalian_org.png", wow: "ae/2018new_ding_org.png", fan: "86/2018new_hufen02_org.png", money: "a2/2018new_qian_thumb.png", yawn: "55/2018new_dahaqian_org.png", sleepy: "3c/2018new_kun_thumb.png", sleep: "e2/2018new_shuijiao_thumb.png", "watermelon ": "01/2018new_chigua_thumb.png", doge: "a1/2018new_doge02_org.png", dog: "22/2018new_erha_org.png", cat: "7b/2018new_miaomiao_thumb.png", thumb: "e6/2018new_zan_org.png", good: "8a/2018new_good_org.png", ok: "45/2018new_ok_org.png", yeah: "29/2018new_ye_thumb.png", "shack hand": "e9/2018new_woshou_thumb.png", bow: "e7/2018new_zuoyi_org.png", come: "42/2018new_guolai_thumb.png", punch: "86/2018new_quantou_thumb.png" };
      }, function(e, t) {
        e.exports = { nick: "NickName", mail: "E-Mail", link: "Website(http://)", nickFail: "NickName cannot be less than 3 bytes.", mailFail: "Please confirm your email address.", sofa: "No comment yet.", submit: "Submit", reply: "Reply", cancelReply: "Cancel reply", comments: "Comments", cancel: "Cancel", confirm: "Confirm", continue: "Continue", more: "Load More...", preview: "Preview", emoji: "Emoji", expand: "See more....", seconds: "seconds ago", minutes: "minutes ago", hours: "hours ago", days: "days ago", now: "just now", uploading: "Uploading ...", uploadDone: "Upload completed!", busy: "Submit is busy, please wait...", "code-98": "Valine initialization failed, please check your version of av-min.js.", "code-99": "Valine initialization failed, Please check the `el` element in the init method.", "code-100": "Valine initialization failed, Please check your appId and appKey.", "code-140": "The total number of API calls today has exceeded the development version limit.", "code-401": "Unauthorized operation, Please check your appId and appKey.", "code-403": "Access denied by API domain white list, Please check your security domain." };
      }, function(e, t) {
        e.exports = { nick: "ニックネーム", mail: "メールアドレス", link: "サイト(http://)", nickFail: "3バイト以上のニックネームをご入力ください.", mailFail: "メールアドレスをご確認ください.", sofa: "コメントしましょう~", submit: "提出する", reply: "返信する", cancelReply: "キャンセル", comments: "コメント", cancel: "キャンセル", confirm: "確認する", continue: "继续", more: "さらに読み込む...", preview: "プレビュー", emoji: "絵文字", expand: "もっと見る", seconds: "秒前", minutes: "分前", hours: "時間前", days: "日前", now: "たっだ今", uploading: "アップロード中...", uploadDone: "アップロードが完了しました!", busy: "20 秒間隔で提出してください    ...", "code-98": "ロードエラーです。av-min.js のバージョンを確認してください.", "code-99": "ロードエラーです。initにある`el`エレメントを確認ください.", "code-100": "ロードエラーです。AppIdとAppKeyを確認ください.", "code-140": "今日のAPIコールの総数が開発バージョンの上限を超えた.", "code-401": "権限が制限されています。AppIdとAppKeyを確認ください.", "code-403": "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください" };
      }, function(e, t) {
        e.exports = { nick: "昵称", mail: "邮箱", link: "网址(http://)", nickFail: "昵称不能少于3个字符", mailFail: "请填写正确的邮件地址", sofa: "来发评论吧~", submit: "提交", reply: "回复", cancelReply: "取消回复", comments: "评论", cancel: "取消", confirm: "确认", continue: "继续", more: "加载更多...", preview: "预览", emoji: "表情", expand: "查看更多...", seconds: "秒前", minutes: "分钟前", hours: "小时前", days: "天前", now: "刚刚", uploading: "正在传输...", uploadDone: "传输完成!", busy: "操作频繁，请稍候再试...", "code-98": "Valine 初始化失败，请检查 av-min.js 版本", "code-99": "Valine 初始化失败，请检查init中的`el`元素.", "code-100": "Valine 初始化失败，请检查你的AppId和AppKey.", "code-140": "今日 API 调用总次数已超过开发版限制.", "code-401": "未经授权的操作，请检查你的AppId和AppKey.", "code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置." };
      }, function(e, t) {
        e.exports = { nick: "暱稱", mail: "郵箱", link: "網址(http://)", nickFail: "昵稱不能少於3個字符", mailFail: "請填寫正確的郵件地址", sofa: "來發評論吧~", submit: "提交", reply: "回覆", cancelReply: "取消回覆", comments: "評論", cancel: "取消", confirm: "確認", continue: "繼續", more: "加載更多...", preview: "預覽", emoji: "表情", expand: "查看更多...", seconds: "秒前", minutes: "分鐘前", hours: "小時前", days: "天前", now: "剛剛", uploading: "正在上傳...", uploadDone: "上傳完成!", busy: "操作頻繁，請稍候再試...", "code-98": "Valine 初始化失敗，請檢查 av-min.js 版本", "code-99": "Valine 初始化失敗，請檢查init中的`el`元素.", "code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.", "code-140": "今日 API 調用總次數已超過開發版限制.", "code-401": "未經授權的操作，請檢查你的AppId和AppKey.", "code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置." };
      }, function(e, t) {
      }, function(e, t, n) {
        var r = n(104);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var i = {};
        i.transform = void 0;
        n(106)(r, i);
        r.locals && (e.exports = r.locals);
      }, function(e, t, n) {
        t = n(105)(false), t.push([e.i, '.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#555}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] img{max-width:100%;border:none}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] pre,.v[data-class=v] code{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid rgba(238,238,238,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em;-webkit-box-sizing:border-box;box-sizing:border-box}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .vemoji,.v[data-class=v] .emoji{width:26px;height:26px;overflow:hidden;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px #dedede dashed}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width: 520px){.v[data-class=v] .vwrap .vheader .vinput{width:100%}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:100%}}.v[data-class=v] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vpower a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ul,.v[data-class=v] ol{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width: 520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width: 720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand::before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.9)));background:linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand::after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:rgba(255,255,255,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed rgba(238,238,238,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] p,[data-theme=dark] .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] .status-bar,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] p,.dark .v[data-class=v] pre code,.dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] p,.theme__dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] .status-bar,.night .v[data-class=v] .vinput,.night .v[data-class=v] .veditor,.night .v[data-class=v] p,.night .v[data-class=v] pre code,.night .v[data-class=v] .status-bar{color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,.theme__dark .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.night .v[data-class=v] .vsys{color:#929298}[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre code,.dark .v[data-class=v] pre,.dark .v[data-class=v] code,.dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre code,.night .v[data-class=v] pre,.night .v[data-class=v] code,.night .v[data-class=v] pre code{color:#929298;background-color:#151414}[data-theme=dark] .v[data-class=v] .vwrap,.dark .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap{border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon,.dark .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon{fill:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon.actived,.dark .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived{fill:#66b1ff}[data-theme=dark] .v[data-class=v] .vbtn,.dark .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vbtn:hover,.dark .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}[data-theme=dark] .v[data-class=v] a:hover,.dark .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover{color:#d7191a}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::before,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.night .v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::after,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.night .v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}@media(prefers-color-scheme: dark){.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#b2b2b5}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#929298}.v[data-class=v] pre,.v[data-class=v] code,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#b2b2b5}.v[data-class=v] .vicon{fill:#b2b2b5}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}.v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}}', ""]), e.exports = t;
      }, function(e, t, n) {
        "use strict";
        function r(e2, t2) {
          var n2 = e2[1] || "", r2 = e2[3];
          if (!r2)
            return n2;
          if (t2 && "function" == typeof btoa) {
            var o = i(r2);
            return [n2].concat(r2.sources.map(function(e3) {
              return "/*# sourceURL=".concat(r2.sourceRoot || "").concat(e3, " */");
            })).concat([o]).join("\n");
          }
          return [n2].join("\n");
        }
        function i(e2) {
          return "/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e2))))), " */");
        }
        e.exports = function(e2) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n2 = r(t3, e2);
              return t3[2] ? "@media ".concat(t3[2], " {").concat(n2, "}") : n2;
            }).join("");
          }, t2.i = function(e3, n2, r2) {
            "string" == typeof e3 && (e3 = [[null, e3, ""]]);
            var i2 = {};
            if (r2)
              for (var o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (i2[a] = true);
              }
            for (var u = 0; u < e3.length; u++) {
              var s = [].concat(e3[u]);
              r2 && i2[s[0]] || (n2 && (s[2] ? s[2] = "".concat(n2, " and ").concat(s[2]) : s[2] = n2), t2.push(s));
            }
          }, t2;
        };
      }, function(e, t, n) {
        function r(e2, t2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2], i2 = h[r2.id];
            if (i2) {
              i2.refs++;
              for (var o2 = 0; o2 < i2.parts.length; o2++)
                i2.parts[o2](r2.parts[o2]);
              for (; o2 < r2.parts.length; o2++)
                i2.parts.push(c(r2.parts[o2], t2));
            } else {
              for (var a2 = [], o2 = 0; o2 < r2.parts.length; o2++)
                a2.push(c(r2.parts[o2], t2));
              h[r2.id] = { id: r2.id, refs: 1, parts: a2 };
            }
          }
        }
        function i(e2, t2) {
          for (var n2 = [], r2 = {}, i2 = 0; i2 < e2.length; i2++) {
            var o2 = e2[i2], a2 = t2.base ? o2[0] + t2.base : o2[0], u2 = o2[1], s2 = o2[2], l2 = o2[3], c2 = { css: u2, media: s2, sourceMap: l2 };
            r2[a2] ? r2[a2].parts.push(c2) : n2.push(r2[a2] = { id: a2, parts: [c2] });
          }
          return n2;
        }
        function o(e2, t2) {
          var n2 = g(e2.insertInto);
          if (!n2)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var r2 = b[b.length - 1];
          if ("top" === e2.insertAt)
            r2 ? r2.nextSibling ? n2.insertBefore(t2, r2.nextSibling) : n2.appendChild(t2) : n2.insertBefore(t2, n2.firstChild), b.push(t2);
          else {
            if ("bottom" !== e2.insertAt)
              throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n2.appendChild(t2);
          }
        }
        function a(e2) {
          if (null === e2.parentNode)
            return false;
          e2.parentNode.removeChild(e2);
          var t2 = b.indexOf(e2);
          t2 >= 0 && b.splice(t2, 1);
        }
        function u(e2) {
          var t2 = document.createElement("style");
          return e2.attrs.type = "text/css", l(t2, e2.attrs), o(e2, t2), t2;
        }
        function s(e2) {
          var t2 = document.createElement("link");
          return e2.attrs.type = "text/css", e2.attrs.rel = "stylesheet", l(t2, e2.attrs), o(e2, t2), t2;
        }
        function l(e2, t2) {
          Object.keys(t2).forEach(function(n2) {
            e2.setAttribute(n2, t2[n2]);
          });
        }
        function c(e2, t2) {
          var n2, r2, i2, o2;
          if (t2.transform && e2.css) {
            if (!(o2 = t2.transform(e2.css)))
              return function() {
              };
            e2.css = o2;
          }
          if (t2.singleton) {
            var l2 = y++;
            n2 = m || (m = u(t2)), r2 = f.bind(null, n2, l2, false), i2 = f.bind(null, n2, l2, true);
          } else
            e2.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n2 = s(t2), r2 = d.bind(null, n2, t2), i2 = function() {
              a(n2), n2.href && URL.revokeObjectURL(n2.href);
            }) : (n2 = u(t2), r2 = p.bind(null, n2), i2 = function() {
              a(n2);
            });
          return r2(e2), function(t3) {
            if (t3) {
              if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
                return;
              r2(e2 = t3);
            } else
              i2();
          };
        }
        function f(e2, t2, n2, r2) {
          var i2 = n2 ? "" : r2.css;
          if (e2.styleSheet)
            e2.styleSheet.cssText = x(t2, i2);
          else {
            var o2 = document.createTextNode(i2), a2 = e2.childNodes;
            a2[t2] && e2.removeChild(a2[t2]), a2.length ? e2.insertBefore(o2, a2[t2]) : e2.appendChild(o2);
          }
        }
        function p(e2, t2) {
          var n2 = t2.css, r2 = t2.media;
          if (r2 && e2.setAttribute("media", r2), e2.styleSheet)
            e2.styleSheet.cssText = n2;
          else {
            for (; e2.firstChild; )
              e2.removeChild(e2.firstChild);
            e2.appendChild(document.createTextNode(n2));
          }
        }
        function d(e2, t2, n2) {
          var r2 = n2.css, i2 = n2.sourceMap, o2 = void 0 === t2.convertToAbsoluteUrls && i2;
          (t2.convertToAbsoluteUrls || o2) && (r2 = D(r2)), i2 && (r2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i2)))) + " */");
          var a2 = new Blob([r2], { type: "text/css" }), u2 = e2.href;
          e2.href = URL.createObjectURL(a2), u2 && URL.revokeObjectURL(u2);
        }
        var h = {}, v = /* @__PURE__ */ function(e2) {
          var t2;
          return function() {
            return void 0 === t2 && (t2 = e2.apply(this, arguments)), t2;
          };
        }(function() {
          return window && document && document.all && !window.atob;
        }), g = /* @__PURE__ */ function(e2) {
          var t2 = {};
          return function(n2) {
            return void 0 === t2[n2] && (t2[n2] = e2.call(this, n2)), t2[n2];
          };
        }(function(e2) {
          return document.querySelector(e2);
        }), m = null, y = 0, b = [], D = n(107);
        e.exports = function(e2, t2) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
          t2 = t2 || {}, t2.attrs = "object" == typeof t2.attrs ? t2.attrs : {}, t2.singleton || (t2.singleton = v()), t2.insertInto || (t2.insertInto = "head"), t2.insertAt || (t2.insertAt = "bottom");
          var n2 = i(e2, t2);
          return r(n2, t2), function(e3) {
            for (var o2 = [], a2 = 0; a2 < n2.length; a2++) {
              var u2 = n2[a2], s2 = h[u2.id];
              s2.refs--, o2.push(s2);
            }
            if (e3) {
              r(i(e3, t2), t2);
            }
            for (var a2 = 0; a2 < o2.length; a2++) {
              var s2 = o2[a2];
              if (0 === s2.refs) {
                for (var l2 = 0; l2 < s2.parts.length; l2++)
                  s2.parts[l2]();
                delete h[s2.id];
              }
            }
          };
        };
        var x = /* @__PURE__ */ function() {
          var e2 = [];
          return function(t2, n2) {
            return e2[t2] = n2, e2.filter(Boolean).join("\n");
          };
        }();
      }, function(e, t) {
        e.exports = function(e2) {
          var t2 = "undefined" != typeof window && window.location;
          if (!t2)
            throw new Error("fixUrls requires window.location");
          if (!e2 || "string" != typeof e2)
            return e2;
          var n = t2.protocol + "//" + t2.host, r = n + t2.pathname.replace(/\/[^\/]*$/, "/");
          return e2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e3, t3) {
            var i = t3.trim().replace(/^"(.*)"$/, function(e4, t4) {
              return t4;
            }).replace(/^'(.*)'$/, function(e4, t4) {
              return t4;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))
              return e3;
            var o;
            return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")";
          });
        };
      }, function(e, t, n) {
        n(103), e.exports = n(34);
      }]);
    });
  }
});
export default require_Valine_min();
/*! Bundled license information:

valine/dist/Valine.min.js:
  (*!
   * Valine v1.5.1
   * (c) 2017-2022 xCss
   * Released under the GPL-2.0 License.
   * Last Update: 2022-7-21 3:43:59 ├F10: PM┤
   *)
  (*!
  	autosize 4.0.4
  	license: MIT
  	http://www.jacklmoore.com/autosize
  *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=valine.js.map
