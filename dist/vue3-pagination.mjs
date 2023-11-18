import { defineComponent as Je, ref as k, toRef as V, onMounted as $e, watch as W, openBlock as K, createElementBlock as G, normalizeClass as C, createElementVNode as O, Fragment as Ve, renderList as We, toDisplayString as Ke, createCommentVNode as Ge } from "vue";
function Oe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xe } = Object.prototype, { getPrototypeOf: oe } = Object, I = ((e) => (t) => {
  const n = Xe.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), T = (e) => (e = e.toLowerCase(), (t) => I(t) === e), q = (e) => (t) => typeof t === e, { isArray: F } = Array, _ = q("undefined");
function Qe(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ge = T("ArrayBuffer");
function Ze(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ge(e.buffer), t;
}
const Ye = q("string"), R = q("function"), Te = q("number"), z = (e) => e !== null && typeof e == "object", et = (e) => e === !0 || e === !1, j = (e) => {
  if (I(e) !== "object")
    return !1;
  const t = oe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, tt = T("Date"), nt = T("File"), rt = T("Blob"), st = T("FileList"), ot = (e) => z(e) && R(e.pipe), it = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = I(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, at = T("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function D(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), F(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function Ae(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const xe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ne = (e) => !_(e) && e !== xe;
function ee() {
  const { caseless: e } = Ne(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && Ae(t, s) || s;
    j(t[i]) && j(r) ? t[i] = ee(t[i], r) : j(r) ? t[i] = ee({}, r) : F(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && D(arguments[r], n);
  return t;
}
const ct = (e, t, n, { allOwnKeys: r } = {}) => (D(t, (s, i) => {
  n && R(s) ? e[i] = Oe(s, n) : e[i] = s;
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
  if (F(e))
    return e;
  let t = e.length;
  if (!Te(t))
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
}, wt = T("HTMLFormElement"), Et = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), fe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), St = T("RegExp"), Pe = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  D(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, Rt = (e) => {
  Pe(e, (t, n) => {
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
}, Ot = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return F(e) ? r(e) : r(String(e).split(t)), n;
}, gt = () => {
}, Tt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), X = "abcdefghijklmnopqrstuvwxyz", de = "0123456789", Ce = {
  DIGIT: de,
  ALPHA: X,
  ALPHA_DIGIT: X + X.toUpperCase() + de
}, At = (e = 16, t = Ce.ALPHA_DIGIT) => {
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
        const i = F(r) ? [] : {};
        return D(r, (o, l) => {
          const p = n(o, s + 1);
          !_(p) && (i[l] = p);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Pt = T("AsyncFunction"), Ct = (e) => e && (z(e) || R(e)) && R(e.then) && R(e.catch), a = {
  isArray: F,
  isArrayBuffer: ge,
  isBuffer: Qe,
  isFormData: it,
  isArrayBufferView: Ze,
  isString: Ye,
  isNumber: Te,
  isBoolean: et,
  isObject: z,
  isPlainObject: j,
  isUndefined: _,
  isDate: tt,
  isFile: nt,
  isBlob: rt,
  isRegExp: St,
  isFunction: R,
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
  kindOf: I,
  kindOfTest: T,
  endsWith: pt,
  toArray: ht,
  forEachEntry: yt,
  matchAll: bt,
  isHTMLForm: wt,
  hasOwnProperty: fe,
  hasOwnProp: fe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pe,
  freezeMethods: Rt,
  toObjectSet: Ot,
  toCamelCase: Et,
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
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
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
const Be = m.prototype, Fe = {};
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
Object.defineProperties(m, Fe);
Object.defineProperty(Be, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, i) => {
  const o = Object.create(Be);
  return a.toFlatObject(e, o, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), m.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Bt = null;
function te(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Le(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pe(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Le(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ft(e) {
  return a.isArray(e) && !e.some(te);
}
const Lt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function J(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(u, y) {
    return !a.isUndefined(y[u]);
  });
  const r = n.metaTokens, s = n.visitor || d, i = n.dots, o = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, u, y) {
    let S = f;
    if (f && !y && typeof f == "object") {
      if (a.endsWith(u, "{}"))
        u = r ? u : u.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && Ft(f) || (a.isFileList(f) || a.endsWith(u, "[]")) && (S = a.toArray(f)))
        return u = Le(u), S.forEach(function(N, ze) {
          !(a.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? pe([u], ze, i) : o === null ? u : u + "[]",
            h(N)
          );
        }), !1;
    }
    return te(f) ? !0 : (t.append(pe(y, u, i), h(f)), !1);
  }
  const c = [], b = Object.assign(Lt, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: te
  });
  function E(f, u) {
    if (!a.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + u.join("."));
      c.push(f), a.forEach(f, function(S, A) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(A) ? A.trim() : A,
          u,
          b
        )) === !0 && E(S, u ? u.concat(A) : [A]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
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
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ie(e, t) {
  this._pairs = [], e && J(e, this, t);
}
const _e = ie.prototype;
_e.append = function(t, n) {
  this._pairs.push([t, n]);
};
_e.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, he);
  } : he;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function _t(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function De(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || _t, s = n && n.serialize;
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
const me = Dt, Ue = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ut = typeof URLSearchParams < "u" ? URLSearchParams : ie, kt = typeof FormData < "u" ? FormData : null, jt = typeof Blob < "u" ? Blob : null, vt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ut,
    FormData: kt,
    Blob: jt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ke = typeof window < "u" && typeof document < "u", Ht = ((e) => ke && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Mt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ke,
  hasStandardBrowserEnv: Ht,
  hasStandardBrowserWebWorkerEnv: Mt
}, Symbol.toStringTag, { value: "Module" })), g = {
  ...It,
  ...vt
};
function qt(e, t) {
  return J(e, new g.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return g.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
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
function je(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    const l = Number.isFinite(+o), p = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, p ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !l) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Jt(s[o])), !l);
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
      return s && s ? JSON.stringify(je(t)) : t;
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
        const p = this.env && this.env.FormData;
        return J(
          l ? { "files[]": t } : t,
          p && new p(),
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
          throw l.name === "SyntaxError" ? m.from(l, m.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Vt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ye = Symbol("internals");
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
    function i(l, p, h) {
      const d = L(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, d);
      (!c || s[c] === void 0 || h === !0 || h === void 0 && s[c] !== !1) && (s[c || p] = v(l));
    }
    const o = (l, p) => a.forEach(l, (h, d) => i(h, d, p));
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
    const r = (this[ye] = this[ye] = {
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
const x = $;
function Z(e, t) {
  const n = this || le, r = t || n, s = x.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function ve(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(U, m, {
  __CANCEL__: !0
});
function Zt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Yt = g.hasStandardBrowserEnv ? (
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
function He(e, t) {
  return e && !en(t) ? tn(e, t) : t;
}
const nn = g.hasStandardBrowserEnv ? (
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
  return t = t !== void 0 ? t : 1e3, function(p) {
    const h = Date.now(), d = r[i];
    o || (o = h), n[s] = p, r[s] = h;
    let c = i, b = 0;
    for (; c !== s; )
      b += n[c++], c = c % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), h - o < t)
      return;
    const E = d && h - d;
    return E ? Math.round(b * 1e3 / E) : void 0;
  };
}
function be(e, t) {
  let n = 0;
  const r = sn(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, l = i - n, p = r(l), h = i <= o;
    n = i;
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
  return new Promise(function(n, r) {
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
        const [u, ...y] = d ? d.split(";").map((S) => S.trim()).filter(Boolean) : [];
        i.setContentType([u || "multipart/form-data", ...y].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const u = e.auth.username || "", y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(u + ":" + y));
    }
    const b = He(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), De(b, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function E() {
      if (!c)
        return;
      const u = x.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: u,
        config: e,
        request: c
      };
      Zt(function(N) {
        n(N), h();
      }, function(N) {
        r(N), h();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = E : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let y = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Ue;
      e.timeoutErrorMessage && (y = e.timeoutErrorMessage), r(new m(
        y,
        S.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, g.hasStandardBrowserEnv && (l && a.isFunction(l) && (l = l(e)), l || l !== !1 && nn(b))) {
      const u = e.xsrfHeaderName && e.xsrfCookieName && Yt.read(e.xsrfCookieName);
      u && i.set(e.xsrfHeaderName, u);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in c && a.forEach(i.toJSON(), function(y, S) {
      c.setRequestHeader(S, y);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", be(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", be(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (u) => {
      c && (r(!u || u.type ? new U(null, e, c) : u), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const f = rn(b);
    if (f && g.protocols.indexOf(f) === -1) {
      r(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
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
const we = (e) => `- ${e}`, ln = (e) => a.isFunction(e) || e === null || e === !1, Me = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (r = n, !ln(n) && (r = ne[(o = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([l, p]) => `adapter ${l} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(we).join(`
`) : " " + we(i[0]) : "as no adapter specified";
      throw new m(
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
function Ee(e) {
  return Y(e), e.headers = x.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Me.getAdapter(e.adapter || le.adapter)(e).then(function(r) {
    return Y(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = x.from(r.headers), r;
  }, function(r) {
    return ve(r) || (Y(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = x.from(r.response.headers))), Promise.reject(r);
  });
}
const Se = (e) => e instanceof x ? e.toJSON() : e;
function B(e, t) {
  t = t || {};
  const n = {};
  function r(h, d, c) {
    return a.isPlainObject(h) && a.isPlainObject(d) ? a.merge.call({ caseless: c }, h, d) : a.isPlainObject(d) ? a.merge({}, d) : a.isArray(d) ? d.slice() : d;
  }
  function s(h, d, c) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(h))
        return r(void 0, h, c);
    } else
      return r(h, d, c);
  }
  function i(h, d) {
    if (!a.isUndefined(d))
      return r(void 0, d);
  }
  function o(h, d) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, d);
  }
  function l(h, d, c) {
    if (c in t)
      return r(h, d);
    if (c in e)
      return r(void 0, h);
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
    const c = p[d] || s, b = c(e[d], t[d], d);
    a.isUndefined(b) && c !== l || (n[d] = b);
  }), n;
}
const Ie = "1.6.2", ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ce[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Re = {};
ce.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Ie + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new m(
        s(o, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
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
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const l = e[i], p = l === void 0 || o(l, i, e);
      if (p !== !0)
        throw new m("option " + i + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + i, m.ERR_BAD_OPTION);
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = B(this.defaults, n);
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
      (f) => {
        delete i[f];
      }
    ), n.headers = x.concat(o, i);
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function(u) {
      typeof u.runWhen == "function" && u.runWhen(n) === !1 || (p = p && u.synchronous, l.unshift(u.fulfilled, u.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(u) {
      h.push(u.fulfilled, u.rejected);
    });
    let d, c = 0, b;
    if (!p) {
      const f = [Ee.bind(this), void 0];
      for (f.unshift.apply(f, l), f.push.apply(f, h), b = f.length, d = Promise.resolve(n); c < b; )
        d = d.then(f[c++], f[c++]);
      return d;
    }
    b = l.length;
    let E = n;
    for (c = 0; c < b; ) {
      const f = l[c++], u = l[c++];
      try {
        E = f(E);
      } catch (y) {
        u.call(this, y);
        break;
      }
    }
    try {
      d = Ee.call(this, E);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, b = h.length; c < b; )
      d = d.then(h[c++], h[c++]);
    return d;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = He(t.baseURL, t.url);
    return De(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request(B(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(B(l || {}, {
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
function qe(e) {
  const t = new H(e), n = Oe(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return qe(B(e, s));
  }, n;
}
const w = qe(le);
w.Axios = H;
w.CanceledError = U;
w.CancelToken = un;
w.isCancel = ve;
w.VERSION = Ie;
w.toFormData = J;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = fn;
w.isAxiosError = dn;
w.mergeConfig = B;
w.AxiosHeaders = x;
w.formToJSON = (e) => je(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Me.getAdapter;
w.HttpStatusCode = pn;
w.default = w;
const hn = w, mn = { class: "pagination justify-content-center" }, yn = ["innerHTML"], bn = ["innerHTML"], wn = ["onClick"], En = ["innerHTML"], Sn = ["innerHTML"], On = /* @__PURE__ */ Je({
  __name: "Pagination",
  props: {
    url: { type: String },
    filters: { type: Object },
    perPage: { type: Number, default: 20 },
    defaultPageNo: { type: Number, default: 1 },
    showLoader: { type: Boolean, default: !0 },
    firstButtonText: { type: String, default: "First" },
    lastButtonText: { type: String, default: "Last" },
    nextButtonText: { type: String, default: '<i class="fa fa-angle-double-right" style="font-size: 12px;"></i>' },
    prevButtonText: { type: String, default: '<i class="fa fa-angle-double-left" style="font-size: 12px;"></i>' },
    sortBy: { type: Number },
    sortOrder: { type: Number },
    className: { type: String }
  },
  emits: ["update"],
  setup(e, { emit: t }) {
    const n = t, r = e, s = k(1), i = k([]), o = k(0), l = k(0), p = V(r, "filters"), h = V(r, "perPage"), d = V(r, "sortBy");
    $e(() => {
      c();
    }), W(p, async (f, u) => {
      s.value = 1, o.value = 0, c();
    }), W(h, async (f, u) => {
      s.value = 1, o.value = 0, c();
    }), W(d, async (f, u) => {
      s.value = 1, o.value = 0, c();
    });
    const c = () => {
      r.showLoader;
      let f = new URLSearchParams();
      f.append("filters", JSON.stringify(r.filters)), f.append("total_items", o.value), f.append("perpage", r.perPage), f.append("page_no", s.value), f.append("sort_by", r.sortBy), f.append("sort_order", r.sortOrder), typeof csrf_name < "u" && f.append(csrf_name, csrf_hash), hn.post(r.url, f).then(function(u) {
        u.status == 200 && (o.value == 0 && (o.value = u.data.total_items, b()), n("update", u.data)), r.showLoader;
      }).catch(function(u) {
        console.log(u);
      }).finally(
        function() {
          r.showLoader;
        }
      );
    }, b = () => {
      i.value = [];
      let f = 0, u = 0;
      if (o.value == 0 || r.perPage == 0)
        return !1;
      l.value = Math.ceil(o.value / r.perPage), s.value > l.value && (s.value = l.value, c()), l.value <= 7 ? (f = 1, u = l.value) : (f = s.value - 3, u = s.value + 3, f < 1 && (f = 1), u > l.value && (u = l.value), u - f < 6 && (f == 1 ? u += 6 - (u - f) : u == l.value && (f -= 6 - (u - f))));
      for (let y = f; y <= u; y++)
        i.value.push(y);
    }, E = (f) => {
      s.value = f, c(), b();
    };
    return (f, u) => i.value.length > 1 ? (K(), G("nav", {
      key: 0,
      "aria-label": "Page navigation",
      class: C(r.className)
    }, [
      O("ul", mn, [
        O("li", {
          class: C(["page-item", s.value == 1 ? "disabled" : ""])
        }, [
          O("a", {
            class: "page-link",
            href: "javascript:;",
            tabindex: "-1",
            onClick: u[0] || (u[0] = (y) => E(1)),
            innerHTML: e.firstButtonText
          }, null, 8, yn)
        ], 2),
        O("li", {
          class: C(["page-item", s.value == 1 ? "disabled" : ""])
        }, [
          O("a", {
            class: "page-link",
            href: "javascript:;",
            tabindex: "-1",
            onClick: u[1] || (u[1] = (y) => E(s.value - 1)),
            innerHTML: e.prevButtonText
          }, null, 8, bn)
        ], 2),
        (K(!0), G(Ve, null, We(i.value, (y, S) => (K(), G("li", {
          class: C(["page-item", y == s.value ? "active disabled" : ""])
        }, [
          O("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: (A) => E(y)
          }, Ke(y), 9, wn)
        ], 2))), 256)),
        O("li", {
          class: C(["page-item", s.value == l.value ? "disabled" : ""])
        }, [
          O("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: u[2] || (u[2] = (y) => E(s.value + 1)),
            innerHTML: e.nextButtonText
          }, null, 8, En)
        ], 2),
        O("li", {
          class: C(["page-item", s.value == l.value ? "disabled" : ""])
        }, [
          O("a", {
            class: "page-link",
            href: "javascript:;",
            onClick: u[3] || (u[3] = (y) => E(l.value)),
            innerHTML: e.lastButtonText
          }, null, 8, Sn)
        ], 2)
      ])
    ], 2)) : Ge("", !0);
  }
});
export {
  On as Pagination
};
