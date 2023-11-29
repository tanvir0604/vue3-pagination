import { defineComponent as Je, ref as U, toRef as V, onMounted as $e, watch as W, openBlock as K, createElementBlock as G, normalizeClass as C, createElementVNode as R, Fragment as Ve, renderList as We, toDisplayString as Ke, createCommentVNode as Ge } from "vue";
function Re(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xe } = Object.prototype, { getPrototypeOf: oe } = Object, q = ((e) => (t) => {
  const r = Xe.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), T = (e) => (e = e.toLowerCase(), (t) => q(t) === e), I = (e) => (t) => typeof t === e, { isArray: F } = Array, L = I("undefined");
function Qe(e) {
  return e !== null && !L(e) && e.constructor !== null && !L(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ge = T("ArrayBuffer");
function Ze(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ge(e.buffer), t;
}
const Ye = I("string"), O = I("function"), Te = I("number"), z = (e) => e !== null && typeof e == "object", et = (e) => e === !0 || e === !1, k = (e) => {
  if (q(e) !== "object")
    return !1;
  const t = oe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, tt = T("Date"), nt = T("File"), rt = T("Blob"), st = T("FileList"), ot = (e) => z(e) && O(e.pipe), it = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || O(e.append) && ((t = q(e)) === "formdata" || // detect form-data instance
  t === "object" && O(e.toString) && e.toString() === "[object FormData]"));
}, at = T("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function D(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), F(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (n = 0; n < o; n++)
      l = i[n], t.call(null, e[l], l, e);
  }
}
function Ae(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const xe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ne = (e) => !L(e) && e !== xe;
function ee() {
  const { caseless: e } = Ne(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && Ae(t, s) || s;
    k(t[i]) && k(n) ? t[i] = ee(t[i], n) : k(n) ? t[i] = ee({}, n) : F(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && D(arguments[n], r);
  return t;
}
const ct = (e, t, r, { allOwnKeys: n } = {}) => (D(t, (s, i) => {
  r && O(s) ? e[i] = Re(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), ut = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ft = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, dt = (e, t, r, n) => {
  let s, i, o;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = r !== !1 && oe(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, pt = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ht = (e) => {
  if (!e)
    return null;
  if (F(e))
    return e;
  let t = e.length;
  if (!Te(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, mt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && oe(Uint8Array)), yt = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, bt = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Et = T("HTMLFormElement"), wt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), fe = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), St = T("RegExp"), Pe = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  D(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, Ot = (e) => {
  Pe(e, (t, r) => {
    if (O(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (O(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Rt = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return F(e) ? n(e) : n(String(e).split(t)), r;
}, gt = () => {
}, Tt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), X = "abcdefghijklmnopqrstuvwxyz", de = "0123456789", Ce = {
  DIGIT: de,
  ALPHA: X,
  ALPHA_DIGIT: X + X.toUpperCase() + de
}, At = (e = 16, t = Ce.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function xt(e) {
  return !!(e && O(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Nt = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (z(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = F(n) ? [] : {};
        return D(n, (o, l) => {
          const p = r(o, s + 1);
          !L(p) && (i[l] = p);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Pt = T("AsyncFunction"), Ct = (e) => e && (z(e) || O(e)) && O(e.then) && O(e.catch), a = {
  isArray: F,
  isArrayBuffer: ge,
  isBuffer: Qe,
  isFormData: it,
  isArrayBufferView: Ze,
  isString: Ye,
  isNumber: Te,
  isBoolean: et,
  isObject: z,
  isPlainObject: k,
  isUndefined: L,
  isDate: tt,
  isFile: nt,
  isBlob: rt,
  isRegExp: St,
  isFunction: O,
  isStream: ot,
  isURLSearchParams: at,
  isTypedArray: mt,
  isFileList: st,
  forEach: D,
  merge: ee,
  extend: ct,
  trim: lt,
  stripBOM: ut,
  inherits: ft,
  toFlatObject: dt,
  kindOf: q,
  kindOfTest: T,
  endsWith: pt,
  toArray: ht,
  forEachEntry: yt,
  matchAll: bt,
  isHTMLForm: Et,
  hasOwnProperty: fe,
  hasOwnProp: fe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pe,
  freezeMethods: Ot,
  toObjectSet: Rt,
  toCamelCase: wt,
  noop: gt,
  toFiniteNumber: Tt,
  findKey: Ae,
  global: xe,
  isContextDefined: Ne,
  ALPHABET: Ce,
  generateString: At,
  isSpecCompliantForm: xt,
  toJSONObject: Nt,
  isAsyncFn: Pt,
  isThenable: Ct
};
function y(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Be = y.prototype, Fe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Fe[e] = { value: e };
});
Object.defineProperties(y, Fe);
Object.defineProperty(Be, "isAxiosError", { value: !0 });
y.from = (e, t, r, n, s, i) => {
  const o = Object.create(Be);
  return a.toFlatObject(e, o, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Bt = null;
function te(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function _e(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pe(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = _e(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Ft(e) {
  return a.isArray(e) && !e.some(te);
}
const _t = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function J(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, m) {
    return !a.isUndefined(m[f]);
  });
  const n = r.metaTokens, s = r.visitor || d, i = r.dots, o = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(u) {
    if (u === null)
      return "";
    if (a.isDate(u))
      return u.toISOString();
    if (!p && a.isBlob(u))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(u) || a.isTypedArray(u) ? p && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function d(u, f, m) {
    let b = u;
    if (u && !m && typeof u == "object") {
      if (a.endsWith(f, "{}"))
        f = n ? f : f.slice(0, -2), u = JSON.stringify(u);
      else if (a.isArray(u) && Ft(u) || (a.isFileList(u) || a.endsWith(f, "[]")) && (b = a.toArray(u)))
        return f = _e(f), b.forEach(function(N, ze) {
          !(a.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? pe([f], ze, i) : o === null ? f : f + "[]",
            h(N)
          );
        }), !1;
    }
    return te(u) ? !0 : (t.append(pe(m, f, i), h(u)), !1);
  }
  const c = [], E = Object.assign(_t, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: te
  });
  function S(u, f) {
    if (!a.isUndefined(u)) {
      if (c.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      c.push(u), a.forEach(u, function(b, A) {
        (!(a.isUndefined(b) || b === null) && s.call(
          t,
          b,
          a.isString(A) ? A.trim() : A,
          f,
          E
        )) === !0 && S(b, f ? f.concat(A) : [A]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function he(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ie(e, t) {
  this._pairs = [], e && J(e, this, t);
}
const Le = ie.prototype;
Le.append = function(t, r) {
  this._pairs.push([t, r]);
};
Le.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, he);
  } : he;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Lt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function De(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Lt, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = a.isURLSearchParams(t) ? t.toString() : new ie(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Dt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const me = Dt, je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jt = typeof URLSearchParams < "u" ? URLSearchParams : ie, Ut = typeof FormData < "u" ? FormData : null, kt = typeof Blob < "u" ? Blob : null, vt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jt,
    FormData: Ut,
    Blob: kt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ue = typeof window < "u" && typeof document < "u", Ht = ((e) => Ue && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Mt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ue,
  hasStandardBrowserEnv: Ht,
  hasStandardBrowserWebWorkerEnv: Mt
}, Symbol.toStringTag, { value: "Module" })), g = {
  ...qt,
  ...vt
};
function It(e, t) {
  return J(e, new g.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return g.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function zt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jt(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function ke(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    const l = Number.isFinite(+o), p = i >= r.length;
    return o = !o && a.isArray(s) ? s.length : o, p ? (a.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !l) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && a.isArray(s[o]) && (s[o] = Jt(s[o])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (n, s) => {
      t(zt(n), s, r, 0);
    }), r;
  }
  return null;
}
function $t(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ae = {
  transitional: je,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(ke(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return It(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return J(
          l ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), $t(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ae.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: g.classes.FormData,
    Blob: g.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ae.headers[e] = {};
});
const le = ae, Vt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Wt = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Vt[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ye = Symbol("internals");
function _(e) {
  return e && String(e).trim().toLowerCase();
}
function v(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(v) : String(e);
}
function Kt(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Gt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Q(e, t, r, n, s) {
  if (a.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!a.isString(t)) {
    if (a.isString(n))
      return t.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(t);
  }
}
function Xt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Qt(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class $ {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(l, p, h) {
      const d = _(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, d);
      (!c || s[c] === void 0 || h === !0 || h === void 0 && s[c] !== !1) && (s[c || p] = v(l));
    }
    const o = (l, p) => a.forEach(l, (h, d) => i(h, d, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : a.isString(t) && (t = t.trim()) && !Gt(t) ? o(Wt(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = _(t), t) {
      const n = a.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Kt(s);
        if (a.isFunction(r))
          return r.call(this, s, n);
        if (a.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = _(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Q(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = _(o), o) {
        const l = a.findKey(n, o);
        l && (!r || Q(n, n[l], l, r)) && (delete n[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Q(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(n, i);
      if (o) {
        r[o] = v(s), delete r[i];
        return;
      }
      const l = t ? Xt(i) : String(i).trim();
      l !== i && delete r[i], r[l] = v(s), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[ye] = this[ye] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const l = _(o);
      n[l] || (Qt(s, o), n[l] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors($.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods($);
const x = $;
function Z(e, t) {
  const r = this || le, n = t || r, s = x.from(n.headers);
  let i = n.data;
  return a.forEach(e, function(l) {
    i = l.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function ve(e) {
  return !!(e && e.__CANCEL__);
}
function j(e, t, r) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(j, y, {
  __CANCEL__: !0
});
function Zt(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new y(
    "Request failed with status code " + r.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Yt = g.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      a.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), a.isString(n) && o.push("path=" + n), a.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function en(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function He(e, t) {
  return e && !en(t) ? tn(e, t) : t;
}
const nn = g.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(i) {
      let o = i;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const l = a.isString(o) ? s(o) : o;
      return l.protocol === n.protocol && l.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function rn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function sn(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const h = Date.now(), d = n[i];
    o || (o = h), r[s] = p, n[s] = h;
    let c = i, E = 0;
    for (; c !== s; )
      E += r[c++], c = c % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), h - o < t)
      return;
    const S = d && h - d;
    return S ? Math.round(E * 1e3 / S) : void 0;
  };
}
function be(e, t) {
  let r = 0;
  const n = sn(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, l = i - r, p = n(l), h = i <= o;
    r = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: p || void 0,
      estimated: p && o && h ? (o - i) / p : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const on = typeof XMLHttpRequest < "u", an = on && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = x.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: l } = e, p;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    let d;
    if (a.isFormData(s)) {
      if (g.hasStandardBrowserEnv || g.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((d = i.getContentType()) !== !1) {
        const [f, ...m] = d ? d.split(";").map((b) => b.trim()).filter(Boolean) : [];
        i.setContentType([f || "multipart/form-data", ...m].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const f = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(f + ":" + m));
    }
    const E = He(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), De(E, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function S() {
      if (!c)
        return;
      const f = x.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), b = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: f,
        config: e,
        request: c
      };
      Zt(function(N) {
        r(N), h();
      }, function(N) {
        n(N), h();
      }, b), c = null;
    }
    if ("onloadend" in c ? c.onloadend = S : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, c.onabort = function() {
      c && (n(new y("Request aborted", y.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new y("Network Error", y.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || je;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new y(
        m,
        b.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        c
      )), c = null;
    }, g.hasStandardBrowserEnv && (l && a.isFunction(l) && (l = l(e)), l || l !== !1 && nn(E))) {
      const f = e.xsrfHeaderName && e.xsrfCookieName && Yt.read(e.xsrfCookieName);
      f && i.set(e.xsrfHeaderName, f);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in c && a.forEach(i.toJSON(), function(m, b) {
      c.setRequestHeader(b, m);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", be(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", be(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (f) => {
      c && (n(!f || f.type ? new j(null, e, c) : f), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const u = rn(E);
    if (u && g.protocols.indexOf(u) === -1) {
      n(new y("Unsupported protocol " + u + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, ne = {
  http: Bt,
  xhr: an
};
a.forEach(ne, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ee = (e) => `- ${e}`, ln = (e) => a.isFunction(e) || e === null || e === !1, Me = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !ln(r) && (n = ne[(o = String(r)).toLowerCase()], n === void 0))
        throw new y(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([l, p]) => `adapter ${l} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Ee).join(`
`) : " " + Ee(i[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ne
};
function Y(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new j(null, e);
}
function we(e) {
  return Y(e), e.headers = x.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Me.getAdapter(e.adapter || le.adapter)(e).then(function(n) {
    return Y(e), n.data = Z.call(
      e,
      e.transformResponse,
      n
    ), n.headers = x.from(n.headers), n;
  }, function(n) {
    return ve(n) || (Y(e), n && n.response && (n.response.data = Z.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = x.from(n.response.headers))), Promise.reject(n);
  });
}
const Se = (e) => e instanceof x ? e.toJSON() : e;
function B(e, t) {
  t = t || {};
  const r = {};
  function n(h, d, c) {
    return a.isPlainObject(h) && a.isPlainObject(d) ? a.merge.call({ caseless: c }, h, d) : a.isPlainObject(d) ? a.merge({}, d) : a.isArray(d) ? d.slice() : d;
  }
  function s(h, d, c) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(h))
        return n(void 0, h, c);
    } else
      return n(h, d, c);
  }
  function i(h, d) {
    if (!a.isUndefined(d))
      return n(void 0, d);
  }
  function o(h, d) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(h))
        return n(void 0, h);
    } else
      return n(void 0, d);
  }
  function l(h, d, c) {
    if (c in t)
      return n(h, d);
    if (c in e)
      return n(void 0, h);
  }
  const p = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (h, d) => s(Se(h), Se(d), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const c = p[d] || s, E = c(e[d], t[d], d);
    a.isUndefined(E) && c !== l || (r[d] = E);
  }), r;
}
const qe = "1.6.2", ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ce[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Oe = {};
ce.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + qe + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new y(
        s(o, " has been removed" + (r ? " in " + r : "")),
        y.ERR_DEPRECATED
      );
    return r && !Oe[o] && (Oe[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
function cn(e, t, r) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const l = e[i], p = l === void 0 || o(l, i, e);
      if (p !== !0)
        throw new y("option " + i + " must be " + p, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const re = {
  assertOptions: cn,
  validators: ce
}, P = re.validators;
class M {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new me(),
      response: new me()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = B(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && re.assertOptions(n, {
      silentJSONParsing: P.transitional(P.boolean),
      forcedJSONParsing: P.transitional(P.boolean),
      clarifyTimeoutError: P.transitional(P.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : re.assertOptions(s, {
      encode: P.function,
      serialize: P.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[r.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (u) => {
        delete i[u];
      }
    ), r.headers = x.concat(o, i);
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(r) === !1 || (p = p && f.synchronous, l.unshift(f.fulfilled, f.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(f) {
      h.push(f.fulfilled, f.rejected);
    });
    let d, c = 0, E;
    if (!p) {
      const u = [we.bind(this), void 0];
      for (u.unshift.apply(u, l), u.push.apply(u, h), E = u.length, d = Promise.resolve(r); c < E; )
        d = d.then(u[c++], u[c++]);
      return d;
    }
    E = l.length;
    let S = r;
    for (c = 0; c < E; ) {
      const u = l[c++], f = l[c++];
      try {
        S = u(S);
      } catch (m) {
        f.call(this, m);
        break;
      }
    }
    try {
      d = we.call(this, S);
    } catch (u) {
      return Promise.reject(u);
    }
    for (c = 0, E = h.length; c < E; )
      d = d.then(h[c++], h[c++]);
    return d;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const r = He(t.baseURL, t.url);
    return De(r, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(r, n) {
    return this.request(B(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, l) {
      return this.request(B(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  M.prototype[t] = r(), M.prototype[t + "Form"] = r(!0);
});
const H = M;
class ue {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((l) => {
        n.subscribe(l), i = l;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, l) {
      n.reason || (n.reason = new j(i, o, l), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ue(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const un = ue;
function fn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function dn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const se = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(se).forEach(([e, t]) => {
  se[t] = e;
});
const pn = se;
function Ie(e) {
  const t = new H(e), r = Re(H.prototype.request, t);
  return a.extend(r, H.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Ie(B(e, s));
  }, r;
}
const w = Ie(le);
w.Axios = H;
w.CanceledError = j;
w.CancelToken = un;
w.isCancel = ve;
w.VERSION = qe;
w.toFormData = J;
w.AxiosError = y;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = fn;
w.isAxiosError = dn;
w.mergeConfig = B;
w.AxiosHeaders = x;
w.formToJSON = (e) => ke(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Me.getAdapter;
w.HttpStatusCode = pn;
w.default = w;
const hn = w, mn = { class: "pagination justify-content-center" }, yn = ["innerHTML"], bn = ["innerHTML"], En = ["onClick"], wn = ["innerHTML"], Sn = ["innerHTML"], Rn = /* @__PURE__ */ Je({
  __name: "Pagination",
  props: {
    url: { type: String },
    filters: { type: Object },
    headers: { type: Object, required: !1, default: {} },
    postData: { type: Object, required: !1, default: {} },
    perPage: { type: Number, default: 20 },
    defaultPageNo: { type: Number, default: 1 },
    firstButtonText: { type: String, default: "First" },
    lastButtonText: { type: String, default: "Last" },
    nextButtonText: { type: String, default: '<i class="fa fa-angle-double-right" style="font-size: 12px;"></i>' },
    prevButtonText: { type: String, default: '<i class="fa fa-angle-double-left" style="font-size: 12px;"></i>' },
    sortBy: { type: Number },
    sortOrder: { type: Number },
    className: { type: String },
    method: { type: String, default: "POST", required: !1 },
    loaderStart: { type: Function, required: !1 },
    loaderEnd: { type: Function, required: !1 }
  },
  emits: ["update"],
  setup(e, { emit: t }) {
    const r = t, n = e, s = U(1), i = U([]), o = U(0), l = U(0), p = V(n, "filters"), h = V(n, "perPage"), d = V(n, "sortBy");
    $e(() => {
      c();
    }), W(p, async (u, f) => {
      s.value = 1, o.value = 0, c();
    }), W(h, async (u, f) => {
      s.value = 1, o.value = 0, c();
    }), W(d, async (u, f) => {
      s.value = 1, o.value = 0, c();
    });
    const c = () => {
      n.loaderStart && n.loaderStart();
      let u = new URLSearchParams();
      for (var f in n.postData)
        u.append(f, n.postData[f]);
      u.append("filters", JSON.stringify(n.filters)), u.append("total_items", o.value), u.append("perpage", n.perPage), u.append("page_no", s.value), u.append("sort_by", n.sortBy), u.append("sort_order", n.sortOrder), typeof csrf_name < "u" && u.append(csrf_name, csrf_hash);
      let m = hn;
      n.method.toLowerCase() == "post" ? m = m.post(n.url, u, { headers: n.headers }) : m = m.get(n.url, u, { headers: n.headers }), m.then(function(b) {
        b.status == 200 && (o.value == 0 && (o.value = b.data.total_items, E()), r("update", b.data)), n.showLoader;
      }).catch(function(b) {
        console.log(b);
      }).finally(
        function() {
          n.loaderEnd && n.loaderEnd();
        }
      );
    }, E = () => {
      i.value = [];
      let u = 0, f = 0;
      if (o.value == 0 || n.perPage == 0)
        return !1;
      l.value = Math.ceil(o.value / n.perPage), s.value > l.value && (s.value = l.value, c()), l.value <= 7 ? (u = 1, f = l.value) : (u = s.value - 3, f = s.value + 3, u < 1 && (u = 1), f > l.value && (f = l.value), f - u < 6 && (u == 1 ? f += 6 - (f - u) : f == l.value && (u -= 6 - (f - u))));
      for (let m = u; m <= f; m++)
        i.value.push(m);
    }, S = (u) => {
      s.value = u, c(), E();
    };
    return (u, f) => i.value.length > 1 ? (K(), G("nav", {
      key: 0,
      "aria-label": "Page navigation",
      class: C(n.className)
    }, [
      R("ul", mn, [
        R("li", {
          class: C(["page-item", s.value == 1 ? "disabled" : ""])
        }, [
          R("a", {
            class: "page-link",
            href: "javascript:;",
            tabindex: "-1",
            onClick: f[0] || (f[0] = (m) => S(1)),
            innerHTML: e.firstButtonText
          }, null, 8, yn)
        ], 2),
        R("li", {
          class: C(["page-item", s.value == 1 ? "disabled" : ""])
        }, [
          R("a", {
            class: "page-link",
            href: "javascript:;",
            tabindex: "-1",
            onClick: f[1] || (f[1] = (m) => S(s.value - 1)),
            innerHTML: e.prevButtonText
          }, null, 8, bn)
        ], 2),
        (K(!0), G(Ve, null, We(i.value, (m, b) => (K(), G("li", {
          class: C(["page-item", m == s.value ? "active disabled" : ""])
        }, [
          R("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: (A) => S(m)
          }, Ke(m), 9, En)
        ], 2))), 256)),
        R("li", {
          class: C(["page-item", s.value == l.value ? "disabled" : ""])
        }, [
          R("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: f[2] || (f[2] = (m) => S(s.value + 1)),
            innerHTML: e.nextButtonText
          }, null, 8, wn)
        ], 2),
        R("li", {
          class: C(["page-item", s.value == l.value ? "disabled" : ""])
        }, [
          R("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: f[3] || (f[3] = (m) => S(l.value)),
            innerHTML: e.lastButtonText
          }, null, 8, Sn)
        ], 2)
      ])
    ], 2)) : Ge("", !0);
  }
});
export {
  Rn as Pagination
};
