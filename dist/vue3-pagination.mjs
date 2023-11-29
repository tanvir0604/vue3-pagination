import { defineComponent as Je, ref as C, toRef as V, onMounted as $e, watch as W, openBlock as K, createElementBlock as G, normalizeClass as B, createElementVNode as g, Fragment as Ve, renderList as We, toDisplayString as Ke, createCommentVNode as Ge } from "vue";
function ge(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xe } = Object.prototype, { getPrototypeOf: oe } = Object, I = ((e) => (t) => {
  const n = Xe.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => I(t) === e), q = (e) => (t) => typeof t === e, { isArray: _ } = Array, D = q("undefined");
function Qe(e) {
  return e !== null && !D(e) && e.constructor !== null && !D(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Te = A("ArrayBuffer");
function Ze(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Te(e.buffer), t;
}
const Ye = q("string"), R = q("function"), Ae = q("number"), z = (e) => e !== null && typeof e == "object", et = (e) => e === !0 || e === !1, k = (e) => {
  if (I(e) !== "object")
    return !1;
  const t = oe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, tt = A("Date"), nt = A("File"), rt = A("Blob"), st = A("FileList"), ot = (e) => z(e) && R(e.pipe), it = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = I(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, at = A("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function j(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), _(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function xe(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ne = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Pe = (e) => !D(e) && e !== Ne;
function ee() {
  const { caseless: e } = Pe(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && xe(t, s) || s;
    k(t[i]) && k(r) ? t[i] = ee(t[i], r) : k(r) ? t[i] = ee({}, r) : _(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && j(arguments[r], n);
  return t;
}
const ct = (e, t, n, { allOwnKeys: r } = {}) => (j(t, (s, i) => {
  n && R(s) ? e[i] = ge(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), ut = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ft = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, dt = (e, t, n, r) => {
  let s, i, o;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && oe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, pt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ht = (e) => {
  if (!e)
    return null;
  if (_(e))
    return e;
  let t = e.length;
  if (!Ae(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, mt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && oe(Uint8Array)), yt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, bt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Et = A("HTMLFormElement"), wt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), de = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), St = A("RegExp"), Ce = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  j(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, Ot = (e) => {
  Ce(e, (t, n) => {
    if (R(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (R(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Rt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return _(e) ? r(e) : r(String(e).split(t)), n;
}, gt = () => {
}, Tt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), X = "abcdefghijklmnopqrstuvwxyz", pe = "0123456789", Be = {
  DIGIT: pe,
  ALPHA: X,
  ALPHA_DIGIT: X + X.toUpperCase() + pe
}, At = (e = 16, t = Be.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function xt(e) {
  return !!(e && R(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Nt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (z(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = _(r) ? [] : {};
        return j(r, (o, l) => {
          const h = n(o, s + 1);
          !D(h) && (i[l] = h);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Pt = A("AsyncFunction"), Ct = (e) => e && (z(e) || R(e)) && R(e.then) && R(e.catch), a = {
  isArray: _,
  isArrayBuffer: Te,
  isBuffer: Qe,
  isFormData: it,
  isArrayBufferView: Ze,
  isString: Ye,
  isNumber: Ae,
  isBoolean: et,
  isObject: z,
  isPlainObject: k,
  isUndefined: D,
  isDate: tt,
  isFile: nt,
  isBlob: rt,
  isRegExp: St,
  isFunction: R,
  isStream: ot,
  isURLSearchParams: at,
  isTypedArray: mt,
  isFileList: st,
  forEach: j,
  merge: ee,
  extend: ct,
  trim: lt,
  stripBOM: ut,
  inherits: ft,
  toFlatObject: dt,
  kindOf: I,
  kindOfTest: A,
  endsWith: pt,
  toArray: ht,
  forEachEntry: yt,
  matchAll: bt,
  isHTMLForm: Et,
  hasOwnProperty: de,
  hasOwnProp: de,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ce,
  freezeMethods: Ot,
  toObjectSet: Rt,
  toCamelCase: wt,
  noop: gt,
  toFiniteNumber: Tt,
  findKey: xe,
  global: Ne,
  isContextDefined: Pe,
  ALPHABET: Be,
  generateString: At,
  isSpecCompliantForm: xt,
  toJSONObject: Nt,
  isAsyncFn: Pt,
  isThenable: Ct
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(b, Error, {
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
const Fe = b.prototype, _e = {};
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
  _e[e] = { value: e };
});
Object.defineProperties(b, _e);
Object.defineProperty(Fe, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, i) => {
  const o = Object.create(Fe);
  return a.toFlatObject(e, o, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), b.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Bt = null;
function te(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Le(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function he(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Le(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ft(e) {
  return a.isArray(e) && !e.some(te);
}
const _t = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function J(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, d) {
    return !a.isUndefined(d[f]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(p) {
    if (p === null)
      return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!h && a.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? h && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, f, d) {
    let y = p;
    if (p && !d && typeof p == "object") {
      if (a.endsWith(f, "{}"))
        f = r ? f : f.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && Ft(p) || (a.isFileList(p) || a.endsWith(f, "[]")) && (y = a.toArray(p)))
        return f = Le(f), y.forEach(function(x, fe) {
          !(a.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? he([f], fe, i) : o === null ? f : f + "[]",
            m(x)
          );
        }), !1;
    }
    return te(p) ? !0 : (t.append(he(d, f, i), m(p)), !1);
  }
  const c = [], w = Object.assign(_t, {
    defaultVisitor: u,
    convertValue: m,
    isVisitable: te
  });
  function O(p, f) {
    if (!a.isUndefined(p)) {
      if (c.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      c.push(p), a.forEach(p, function(y, E) {
        (!(a.isUndefined(y) || y === null) && s.call(
          t,
          y,
          a.isString(E) ? E.trim() : E,
          f,
          w
        )) === !0 && O(y, f ? f.concat(E) : [E]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function me(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ie(e, t) {
  this._pairs = [], e && J(e, this, t);
}
const De = ie.prototype;
De.append = function(t, n) {
  this._pairs.push([t, n]);
};
De.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, me);
  } : me;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Lt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function je(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Lt, s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new ie(t, n).toString(r), i) {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ye = Dt, Ue = {
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
}, ke = typeof window < "u" && typeof document < "u", Ht = ((e) => ke && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Mt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ke,
  hasStandardBrowserEnv: Ht,
  hasStandardBrowserWebWorkerEnv: Mt
}, Symbol.toStringTag, { value: "Module" })), T = {
  ...It,
  ...vt
};
function qt(e, t) {
  return J(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return T.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function zt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function ve(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    const l = Number.isFinite(+o), h = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, h ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !l) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Jt(s[o])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(zt(r), s, n, 0);
    }), n;
  }
  return null;
}
function $t(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ae = {
  transitional: Ue,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(ve(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return qt(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return J(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), $t(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ae.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? b.from(l, b.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: T.classes.FormData,
    Blob: T.classes.Blob
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
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Vt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function L(e) {
  return e && String(e).trim().toLowerCase();
}
function v(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(v) : String(e);
}
function Kt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Gt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Q(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Xt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Qt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class $ {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, h, m) {
      const u = L(h);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, u);
      (!c || s[c] === void 0 || m === !0 || m === void 0 && s[c] !== !1) && (s[c || h] = v(l));
    }
    const o = (l, h) => a.forEach(l, (m, u) => i(m, u, h));
    return a.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : a.isString(t) && (t = t.trim()) && !Gt(t) ? o(Wt(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = L(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Kt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = L(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Q(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = L(o), o) {
        const l = a.findKey(r, o);
        l && (!n || Q(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Q(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = v(s), delete n[i];
        return;
      }
      const l = t ? Xt(i) : String(i).trim();
      l !== i && delete n[i], n[l] = v(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[be] = this[be] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const l = L(o);
      r[l] || (Qt(s, o), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors($.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods($);
const N = $;
function Z(e, t) {
  const n = this || le, r = t || n, s = N.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function He(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(U, b, {
  __CANCEL__: !0
});
function Zt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Yt = T.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), a.isString(r) && o.push("path=" + r), a.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function Me(e, t) {
  return e && !en(t) ? tn(e, t) : t;
}
const nn = T.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(i) {
      let o = i;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(o) {
      const l = a.isString(o) ? s(o) : o;
      return l.protocol === r.protocol && l.host === r.host;
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
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const m = Date.now(), u = r[i];
    o || (o = m), n[s] = h, r[s] = m;
    let c = i, w = 0;
    for (; c !== s; )
      w += n[c++], c = c % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), m - o < t)
      return;
    const O = u && m - u;
    return O ? Math.round(w * 1e3 / O) : void 0;
  };
}
function Ee(e, t) {
  let n = 0;
  const r = sn(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, l = i - n, h = r(l), m = i <= o;
    n = i;
    const u = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: h || void 0,
      estimated: h && o && m ? (o - i) / h : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const on = typeof XMLHttpRequest < "u", an = on && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const i = N.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: l } = e, h;
    function m() {
      e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h);
    }
    let u;
    if (a.isFormData(s)) {
      if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((u = i.getContentType()) !== !1) {
        const [f, ...d] = u ? u.split(";").map((y) => y.trim()).filter(Boolean) : [];
        i.setContentType([f || "multipart/form-data", ...d].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const f = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(f + ":" + d));
    }
    const w = Me(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), je(w, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function O() {
      if (!c)
        return;
      const f = N.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), y = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: f,
        config: e,
        request: c
      };
      Zt(function(x) {
        n(x), m();
      }, function(x) {
        r(x), m();
      }, y), c = null;
    }
    if ("onloadend" in c ? c.onloadend = O : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, c.onabort = function() {
      c && (r(new b("Request aborted", b.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || Ue;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new b(
        d,
        y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        c
      )), c = null;
    }, T.hasStandardBrowserEnv && (l && a.isFunction(l) && (l = l(e)), l || l !== !1 && nn(w))) {
      const f = e.xsrfHeaderName && e.xsrfCookieName && Yt.read(e.xsrfCookieName);
      f && i.set(e.xsrfHeaderName, f);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in c && a.forEach(i.toJSON(), function(d, y) {
      c.setRequestHeader(y, d);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Ee(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ee(e.onUploadProgress)), (e.cancelToken || e.signal) && (h = (f) => {
      c && (r(!f || f.type ? new U(null, e, c) : f), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h)));
    const p = rn(w);
    if (p && T.protocols.indexOf(p) === -1) {
      r(new b("Unsupported protocol " + p + ":", b.ERR_BAD_REQUEST, e));
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
const we = (e) => `- ${e}`, ln = (e) => a.isFunction(e) || e === null || e === !1, Ie = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (r = n, !ln(n) && (r = ne[(o = String(n)).toLowerCase()], r === void 0))
        throw new b(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(we).join(`
`) : " " + we(i[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ne
};
function Y(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new U(null, e);
}
function Se(e) {
  return Y(e), e.headers = N.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ie.getAdapter(e.adapter || le.adapter)(e).then(function(r) {
    return Y(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return He(r) || (Y(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const Oe = (e) => e instanceof N ? e.toJSON() : e;
function F(e, t) {
  t = t || {};
  const n = {};
  function r(m, u, c) {
    return a.isPlainObject(m) && a.isPlainObject(u) ? a.merge.call({ caseless: c }, m, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(m, u, c) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(m))
        return r(void 0, m, c);
    } else
      return r(m, u, c);
  }
  function i(m, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function o(m, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, u);
  }
  function l(m, u, c) {
    if (c in t)
      return r(m, u);
    if (c in e)
      return r(void 0, m);
  }
  const h = {
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
    headers: (m, u) => s(Oe(m), Oe(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const c = h[u] || s, w = c(e[u], t[u], u);
    a.isUndefined(w) && c !== l || (n[u] = w);
  }), n;
}
const qe = "1.6.2", ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ce[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Re = {};
ce.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + qe + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new b(
        s(o, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Re[o] && (Re[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
function cn(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const l = e[i], h = l === void 0 || o(l, i, e);
      if (h !== !0)
        throw new b("option " + i + " must be " + h, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const re = {
  assertOptions: cn,
  validators: ce
}, P = re.validators;
class M {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ye(),
      response: new ye()
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = F(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && re.assertOptions(r, {
      silentJSONParsing: P.transitional(P.boolean),
      forcedJSONParsing: P.transitional(P.boolean),
      clarifyTimeoutError: P.transitional(P.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : re.assertOptions(s, {
      encode: P.function,
      serialize: P.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), n.headers = N.concat(o, i);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(n) === !1 || (h = h && f.synchronous, l.unshift(f.fulfilled, f.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(f) {
      m.push(f.fulfilled, f.rejected);
    });
    let u, c = 0, w;
    if (!h) {
      const p = [Se.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, m), w = p.length, u = Promise.resolve(n); c < w; )
        u = u.then(p[c++], p[c++]);
      return u;
    }
    w = l.length;
    let O = n;
    for (c = 0; c < w; ) {
      const p = l[c++], f = l[c++];
      try {
        O = p(O);
      } catch (d) {
        f.call(this, d);
        break;
      }
    }
    try {
      u = Se.call(this, O);
    } catch (p) {
      return Promise.reject(p);
    }
    for (c = 0, w = m.length; c < w; )
      u = u.then(m[c++], m[c++]);
    return u;
  }
  getUri(t) {
    t = F(this.defaults, t);
    const n = Me(t.baseURL, t.url);
    return je(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request(F(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(F(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
const H = M;
class ue {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, l) {
      r.reason || (r.reason = new U(i, o, l), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
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
  return function(n) {
    return e.apply(null, n);
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
function ze(e) {
  const t = new H(e), n = ge(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ze(F(e, s));
  }, n;
}
const S = ze(le);
S.Axios = H;
S.CanceledError = U;
S.CancelToken = un;
S.isCancel = He;
S.VERSION = qe;
S.toFormData = J;
S.AxiosError = b;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = fn;
S.isAxiosError = dn;
S.mergeConfig = F;
S.AxiosHeaders = N;
S.formToJSON = (e) => ve(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Ie.getAdapter;
S.HttpStatusCode = pn;
S.default = S;
const hn = S, mn = { class: "pagination justify-content-center" }, yn = ["innerHTML"], bn = ["innerHTML"], En = ["onClick"], wn = ["innerHTML"], Sn = ["innerHTML"], Rn = /* @__PURE__ */ Je({
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
    className: { type: String }
  },
  emits: ["update", "loaderStart", "loaderEnd"],
  setup(e, { emit: t }) {
    const n = t, r = e, s = C(1), i = C([]), o = C(0), l = C(0), h = V(r, "filters"), m = V(r, "perPage"), u = V(r, "sortBy"), c = C(!1), w = C(!1);
    $e(() => {
      var y, E;
      const d = getCurrentInstance();
      c.value = !!((y = d == null ? void 0 : d.arrts) != null && y.loaderStart), w.value = !!((E = d == null ? void 0 : d.arrts) != null && E.loaderEnd), O();
    }), W(h, async (d, y) => {
      s.value = 1, o.value = 0, O();
    }), W(m, async (d, y) => {
      s.value = 1, o.value = 0, O();
    }), W(u, async (d, y) => {
      s.value = 1, o.value = 0, O();
    });
    const O = () => {
      c.value && n("loaderStart");
      let d = new URLSearchParams();
      for (var y in r.postData)
        d.append(y, r.postData[y]);
      d.append("filters", JSON.stringify(r.filters)), d.append("total_items", o.value), d.append("perpage", r.perPage), d.append("page_no", s.value), d.append("sort_by", r.sortBy), d.append("sort_order", r.sortOrder), typeof csrf_name < "u" && d.append(csrf_name, csrf_hash), hn.post(r.url, d, { headers: r.headers }).then(function(E) {
        E.status == 200 && (o.value == 0 && (o.value = E.data.total_items, p()), n("update", E.data)), r.showLoader;
      }).catch(function(E) {
        console.log(E);
      }).finally(
        function() {
          w.value && n("loaderEnd");
        }
      );
    }, p = () => {
      i.value = [];
      let d = 0, y = 0;
      if (o.value == 0 || r.perPage == 0)
        return !1;
      l.value = Math.ceil(o.value / r.perPage), s.value > l.value && (s.value = l.value, O()), l.value <= 7 ? (d = 1, y = l.value) : (d = s.value - 3, y = s.value + 3, d < 1 && (d = 1), y > l.value && (y = l.value), y - d < 6 && (d == 1 ? y += 6 - (y - d) : y == l.value && (d -= 6 - (y - d))));
      for (let E = d; E <= y; E++)
        i.value.push(E);
    }, f = (d) => {
      s.value = d, O(), p();
    };
    return (d, y) => i.value.length > 1 ? (K(), G("nav", {
      key: 0,
      "aria-label": "Page navigation",
      class: B(r.className)
    }, [
      g("ul", mn, [
        g("li", {
          class: B(["page-item", s.value == 1 ? "disabled" : ""])
        }, [
          g("a", {
            class: "page-link",
            href: "javascript:;",
            tabindex: "-1",
            onClick: y[0] || (y[0] = (E) => f(1)),
            innerHTML: e.firstButtonText
          }, null, 8, yn)
        ], 2),
        g("li", {
          class: B(["page-item", s.value == 1 ? "disabled" : ""])
        }, [
          g("a", {
            class: "page-link",
            href: "javascript:;",
            tabindex: "-1",
            onClick: y[1] || (y[1] = (E) => f(s.value - 1)),
            innerHTML: e.prevButtonText
          }, null, 8, bn)
        ], 2),
        (K(!0), G(Ve, null, We(i.value, (E, x) => (K(), G("li", {
          class: B(["page-item", E == s.value ? "active disabled" : ""])
        }, [
          g("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: (fe) => f(E)
          }, Ke(E), 9, En)
        ], 2))), 256)),
        g("li", {
          class: B(["page-item", s.value == l.value ? "disabled" : ""])
        }, [
          g("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: y[2] || (y[2] = (E) => f(s.value + 1)),
            innerHTML: e.nextButtonText
          }, null, 8, wn)
        ], 2),
        g("li", {
          class: B(["page-item", s.value == l.value ? "disabled" : ""])
        }, [
          g("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: y[3] || (y[3] = (E) => f(l.value)),
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
