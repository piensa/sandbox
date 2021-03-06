// @observablehq/notebook-runtime Copyright 2018 Observable, Inc.
function e(e, t, n) {
  n = n || {};var r = e.ownerDocument,
      o = r.defaultView.CustomEvent;"function" == typeof o ? o = new o(t, { detail: n }) : ((o = r.createEvent("Event")).initEvent(t, !1, !1), o.detail = n), e.dispatchEvent(o);
}function t(e) {
  return Array.isArray(e) || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array;
}function n(e) {
  return e === (0 | e) + "";
}const r = Symbol.prototype.toString;function o(e) {
  return r.call(e);
}const { getOwnPropertySymbols: i, prototype: { hasOwnProperty: a } } = Object,
      { toStringTag: u } = Symbol,
      l = {},
      s = i;function c(e, t) {
  return a.call(e, t);
}function d(e) {
  return e[u] || e.constructor && e.constructor.name || "Object";
}function f(e, t) {
  try {
    const n = e[t];return n && n.constructor, n;
  } catch (e) {
    return l;
  }
}function p(n) {
  const r = t(n);let o, i, a;n instanceof Map ? (o = `Map(${n.size})`, i = h) : n instanceof Set ? (o = `Set(${n.size})`, i = m) : r ? (o = `${n.constructor.name}(${n.length})`, i = v) : (o = d(n), i = b);const u = document.createElement("span");u.className = "observablehq--expanded";const l = u.appendChild(document.createElement("a"));l.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>", l.appendChild(document.createTextNode(`${o}${r ? " [" : " {"}`)), l.addEventListener("mouseup", function (e) {
    e.stopPropagation(), I(u, y(n));
  }), i = i(n);for (let e = 0; !(a = i.next()).done && e < 20; ++e) u.appendChild(a.value);if (!a.done) {
    const t = u.appendChild(document.createElement("a"));t.className = "observablehq--field", t.style.display = "block", t.appendChild(document.createTextNode("  … more")), t.addEventListener("mouseup", function (t) {
      t.stopPropagation(), u.insertBefore(a.value, u.lastChild.previousSibling);for (let e = 0; !(a = i.next()).done && e < 19; ++e) u.insertBefore(a.value, u.lastChild.previousSibling);a.done && u.removeChild(u.lastChild.previousSibling), e(u, "load");
    });
  }return u.appendChild(document.createTextNode(r ? "]" : "}")), u;
}function* h(e) {
  for (const [t, n] of e) yield w(t, n);yield* b(e);
}function* m(e) {
  for (const t of e) yield g(t);yield* b(e);
}function* v(e) {
  for (let t = 0, n = e.length; t < n; ++t) t in e && (yield _(t, f(e, t), "observablehq--index"));for (const t in e) !n(t) && c(e, t) && (yield _(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield _(o(t), f(e, t), "observablehq--symbol");
}function* b(e) {
  for (const t in e) c(e, t) && (yield _(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield _(o(t), f(e, t), "observablehq--symbol");
}function _(e, t, n) {
  const r = document.createElement("div"),
        o = r.appendChild(document.createElement("span"));return r.className = "observablehq--field", o.className = n, o.textContent = `  ${e}`, r.appendChild(document.createTextNode(": ")), r.appendChild(H(t)), r;
}function w(e, t) {
  const n = document.createElement("div");return n.className = "observablehq--field", n.appendChild(document.createTextNode("  ")), n.appendChild(H(e)), n.appendChild(document.createTextNode(" => ")), n.appendChild(H(t)), n;
}function g(e) {
  const t = document.createElement("div");return t.className = "observablehq--field", t.appendChild(document.createTextNode("  ")), t.appendChild(H(e)), t;
}function y(e, n) {
  const r = t(e);let o, i, a;if (e instanceof Map ? (o = `Map(${e.size})`, i = x) : e instanceof Set ? (o = `Set(${e.size})`, i = E) : r ? (o = `${e.constructor.name}(${e.length})`, i = C) : (o = d(e), i = N), n) {
    const t = document.createElement("span");return t.className = "observablehq--shallow", t.appendChild(document.createTextNode(o)), t.addEventListener("mouseup", function (n) {
      n.stopPropagation(), I(t, y(e));
    }), t;
  }const u = document.createElement("span");u.className = "observablehq--collapsed";const l = u.appendChild(document.createElement("a"));l.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>", l.appendChild(document.createTextNode(`${o}${r ? " [" : " {"}`)), u.addEventListener("mouseup", function (t) {
    t.stopPropagation(), I(u, p(e));
  }, !0), i = i(e);for (let e = 0; !(a = i.next()).done && e < 20; ++e) e > 0 && u.appendChild(document.createTextNode(", ")), u.appendChild(a.value);return a.done || u.appendChild(document.createTextNode(", …")), u.appendChild(document.createTextNode(r ? "]" : "}")), u;
}function* x(e) {
  for (const [t, n] of e) yield P(t, n);yield* N(e);
}function* E(e) {
  for (const t of e) yield H(t, !0);yield* N(e);
}function* C(e) {
  for (let t = -1, n = 0, r = e.length; n < r; ++n) if (n in e) {
    let r = n - t - 1;if (r > 0) {
      const e = document.createElement("span");e.className = "observablehq--empty", e.textContent = 1 === r ? "empty" : `empty × ${n - t - 1}`, yield e;
    }yield H(f(e, n), !0), t = n;
  }for (const t in e) !n(t) && c(e, t) && (yield k(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield k(o(t), f(e, t), "observablehq--symbol");
}function* N(e) {
  for (const t in e) c(e, t) && (yield k(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield k(o(t), f(e, t), "observablehq--symbol");
}function k(e, t, n) {
  const r = document.createDocumentFragment(),
        o = r.appendChild(document.createElement("span"));return o.className = n, o.textContent = e, r.appendChild(document.createTextNode(": ")), r.appendChild(H(t, !0)), r;
}function P(e, t) {
  const n = document.createDocumentFragment();return n.appendChild(H(e, !0)), n.appendChild(document.createTextNode(" => ")), n.appendChild(H(t, !0)), n;
}function S(e, t) {
  var n = e + "",
      r = n.length;return r < t ? new Array(t - r + 1).join(0) + n : n;
}var j = Error.prototype.toString;var q = RegExp.prototype.toString;function L(e, t) {
  return t ? (O(e, /["\n]/g) <= O(e, /`|\${/g) ? JSON.stringify : function (e) {
    return "`" + e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, M) + "`";
  })(e) : (e.length > 100 && (e = `${e.slice(0, 50)}…${e.slice(-49)}`), JSON.stringify(e));
}function M(e) {
  var t = e.charCodeAt(0);return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e;
}function O(e, t) {
  for (var n = 0; t.exec(e);) ++n;return n;
}var A = Function.prototype.toString,
    T = { prefix: "async ƒ" },
    $ = { prefix: "async ƒ*" },
    R = { prefix: "class" },
    D = { prefix: "ƒ" },
    F = { prefix: "ƒ*" };function U(e, t) {
  var n = document.createElement("span");n.className = "observablehq--function";var r = n.appendChild(document.createElement("span"));return r.className = "observablehq--keyword", r.textContent = e.prefix, n.appendChild(document.createTextNode(" " + t)), n;
}const { prototype: { toString: z } } = Object;function H(e, t, n) {
  let r = typeof e;switch (r) {case "boolean":case "undefined":
      e += "";break;case "number":
      e = 0 === e && 1 / e < 0 ? "-0" : e + "";break;case "bigint":
      e += "n";break;case "string":
      e = L(e, !1 === t);break;case "symbol":
      e = o(e);break;case "function":
      return function (e) {
        var t,
            n,
            r = A.call(e);switch (e.constructor && e.constructor.name) {case "AsyncFunction":
            t = T;break;case "AsyncGeneratorFunction":
            t = $;break;case "GeneratorFunction":
            t = F;break;default:
            t = /^class\b/.test(r) ? R : D;}return t === R ? U(t, e.name || "") : (n = /^(?:async\s*)?(\w+)\s*=>/.exec(r)) ? U(t, "(" + n[1] + ")") : (n = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(r)) ? U(t, n[1] ? "(" + n[1].replace(/\s*,\s*/g, ", ") + ")" : "()") : (n = /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(r)) ? U(t, (e.name || "") + (n[1] ? "(" + n[1].replace(/\s*,\s*/g, ", ") + ")" : "()")) : U(t, (e.name || "") + "(…)");
      }(e);default:
      if (null === e) {
        r = null, e = "null";break;
      }if (e instanceof Date) {
        r = "date", e = function (e) {
          return isNaN(e) ? "Invalid Date" : S(e.getFullYear(), 4) + "-" + S(e.getMonth() + 1, 2) + "-" + S(e.getDate(), 2) + (e.getMilliseconds() ? "T" + S(e.getHours(), 2) + ":" + S(e.getMinutes(), 2) + ":" + S(e.getSeconds(), 2) + "." + S(e.getMilliseconds(), 3) : e.getSeconds() ? "T" + S(e.getHours(), 2) + ":" + S(e.getMinutes(), 2) + ":" + S(e.getSeconds(), 2) : e.getMinutes() || e.getHours() ? "T" + S(e.getHours(), 2) + ":" + S(e.getMinutes(), 2) : "");
        }(e);break;
      }if (e === l) {
        r = "forbidden", e = "[forbidden]";break;
      }switch (z.call(e)) {case "[object RegExp]":
          r = "regexp", e = function (e) {
            return q.call(e);
          }(e);break;case "[object Error]":case "[object DOMException]":
          r = "error", e = function (e) {
            return e.stack || j.call(e);
          }(e);break;default:
          return (n ? p : y)(e, t);}}const i = document.createElement("span");return i.className = `observablehq--${r}`, i.textContent = e, i;
}function I(t, n) {
  t.classList.contains("observablehq--inspect") && n.classList.add("observablehq--inspect"), t.parentNode.replaceChild(n, t), e(n, "load");
}const W = /\s+\(\d+:\d+\)$/m;class B {
  constructor(e) {
    if (!e) throw new Error("invalid node");this._node = e, e.classList.add("observablehq");
  }pending() {
    const { _node: e } = this;e.classList.remove("observablehq--error"), e.classList.add("observablehq--running");
  }fulfilled(t) {
    const { _node: n } = this;if ((!(t instanceof Element || t instanceof Text) || t.parentNode && t.parentNode !== n) && (t = H(t, !1, n.firstChild && n.firstChild.classList && n.firstChild.classList.contains("observablehq--expanded"))).classList.add("observablehq--inspect"), n.classList.remove("observablehq--running", "observablehq--error"), n.firstChild !== t) if (n.firstChild) {
      for (; n.lastChild !== n.firstChild;) n.removeChild(n.lastChild);n.replaceChild(t, n.firstChild);
    } else n.appendChild(t);e(n, "update");
  }rejected(t) {
    const { _node: n } = this;for (n.classList.remove("observablehq--running"), n.classList.add("observablehq--error"); n.lastChild;) n.removeChild(n.lastChild);var r = document.createElement("span");r.className = "observablehq--inspect", r.textContent = (t + "").replace(W, ""), n.appendChild(r), e(n, "error", { error: t });
  }
}function V(e) {
  return function () {
    return e;
  };
}B.into = function (e) {
  if ("string" == typeof e && null == (e = document.querySelector(e))) throw new Error("container not found");return function () {
    return new B(e.appendChild(document.createElement("div")));
  };
};var G = { math: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
    J = 0;function X(e) {
  this.id = e, this.href = window.location.href + "#" + e;
}X.prototype.toString = function () {
  return "url(" + this.href + ")";
};var Y = { canvas: function (e, t) {
    var n = document.createElement("canvas");return n.width = e, n.height = t, n;
  }, context2d: function (e, t, n) {
    null == n && (n = devicePixelRatio);var r = document.createElement("canvas");r.width = e * n, r.height = t * n, r.style.width = e + "px";var o = r.getContext("2d");return o.scale(n, n), o;
  }, download: function (e, t, n) {
    var r = document.createElement("a");return r.appendChild(document.createElement("button")).textContent = null == n ? "Download" : n, r.download = null == t ? "untitled" : t, r.onclick = function () {
      var t = r.href = URL.createObjectURL(e);setTimeout(function () {
        URL.revokeObjectURL(t);
      }, 50);
    }, r;
  }, element: function (e, t) {
    var n,
        r = e += "",
        o = r.indexOf(":");o >= 0 && "xmlns" !== (r = e.slice(0, o)) && (e = e.slice(o + 1));var i = G.hasOwnProperty(r) ? document.createElementNS(G[r], e) : document.createElement(e);if (t) for (var a in t) o = (r = a).indexOf(":"), n = t[a], o >= 0 && "xmlns" !== (r = a.slice(0, o)) && (a = a.slice(o + 1)), G.hasOwnProperty(r) ? i.setAttributeNS(G[r], a, n) : i.setAttribute(a, n);return i;
  }, input: function (e) {
    var t = document.createElement("input");return null != e && (t.type = e), t;
  }, range: function (e, t, n) {
    1 === arguments.length && (t = e, e = null);var r = document.createElement("input");return r.min = e = null == e ? 0 : +e, r.max = t = null == t ? 1 : +t, r.step = null == n ? "any" : n = +n, r.type = "range", r;
  }, select: function (e) {
    var t = document.createElement("select");return Array.prototype.forEach.call(e, function (e) {
      var n = document.createElement("option");n.value = n.textContent = e, t.appendChild(n);
    }), t;
  }, svg: function (e, t) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");return n.setAttribute("viewBox", [0, 0, e, t]), n.setAttribute("width", e), n.setAttribute("height", t), n;
  }, text: function (e) {
    return document.createTextNode(e);
  }, uid: function (e) {
    return new X("O-" + (null == e ? "" : e + "-") + ++J);
  } },
    K = { buffer: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();r.onload = function () {
        t(r.result);
      }, r.onerror = n, r.readAsArrayBuffer(e);
    });
  }, text: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();r.onload = function () {
        t(r.result);
      }, r.onerror = n, r.readAsText(e);
    });
  }, url: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();r.onload = function () {
        t(r.result);
      }, r.onerror = n, r.readAsDataURL(e);
    });
  } };function Q() {
  return this;
}function Z(e, t) {
  let n = !1;return { [Symbol.iterator]: Q, next: () => n ? { done: !0 } : (n = !0, { done: !1, value: e }), return: () => (n = !0, t(e), { done: !0 }), throw: () => ({ done: n = !0 }) };
}function ee(e) {
  let t,
      n,
      r = !1;const o = e(function (e) {
    return n ? (n(e), n = null) : r = !0, t = e;
  });return { [Symbol.iterator]: Q, throw: () => ({ done: !0 }), return: () => (null != o && o(), { done: !0 }), next: function () {
      return { done: !1, value: r ? (r = !1, Promise.resolve(t)) : new Promise(e => n = e) };
    } };
}function te(e) {
  switch (e.type) {case "range":case "number":
      return e.valueAsNumber;case "date":
      return e.valueAsDate;case "checkbox":
      return e.checked;case "file":
      return e.multiple ? e.files : e.files[0];default:
      return e.value;}
}var ne = { disposable: Z, filter: function* (e, t) {
    for (var n, r = -1; !(n = e.next()).done;) t(n.value, ++r) && (yield n.value);
  }, input: function (e) {
    return ee(function (t) {
      var n = function (e) {
        switch (e.type) {case "button":case "submit":case "checkbox":
            return "click";case "file":
            return "change";default:
            return "input";}
      }(e),
          r = te(e);function o() {
        t(te(e));
      }return e.addEventListener(n, o), void 0 !== r && t(r), function () {
        e.removeEventListener(n, o);
      };
    });
  }, map: function* (e, t) {
    for (var n, r = -1; !(n = e.next()).done;) yield t(n.value, ++r);
  }, observe: ee, queue: function (e) {
    let t;const n = [],
          r = e(function (e) {
      return n.push(e), t && (t(n.shift()), t = null), e;
    });return { [Symbol.iterator]: Q, throw: () => ({ done: !0 }), return: () => (null != r && r(), { done: !0 }), next: function () {
        return { done: !1, value: n.length ? Promise.resolve(n.shift()) : new Promise(e => t = e) };
      } };
  }, range: function* (e, t, n) {
    e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;for (var r = -1, o = 0 | Math.max(0, Math.ceil((t - e) / n)); ++r < o;) yield e + r * n;
  }, valueAt: function (e, t) {
    if (!(!isFinite(t = +t) || t < 0 || t != t | 0)) for (var n, r = -1; !(n = e.next()).done;) if (++r === t) return n.value;
  }, worker: function (e) {
    const t = URL.createObjectURL(new Blob([e], { type: "text/javascript" })),
          n = new Worker(t);return Z(n, () => {
      n.terminate(), URL.revokeObjectURL(t);
    });
  } };function re(e, t) {
  return function (n) {
    var r,
        o,
        i,
        a,
        u,
        l,
        s,
        c,
        d = n[0],
        f = [],
        p = null,
        h = -1;for (u = 1, l = arguments.length; u < l; ++u) {
      if ((r = arguments[u]) instanceof Node) f[++h] = r, d += "\x3c!--o:" + h + "--\x3e";else if (Array.isArray(r)) {
        for (s = 0, c = r.length; s < c; ++s) (o = r[s]) instanceof Node ? (null === p && (f[++h] = p = document.createDocumentFragment(), d += "\x3c!--o:" + h + "--\x3e"), p.appendChild(o)) : (p = null, d += o);p = null;
      } else d += r;d += n[u];
    }if (p = e(d), ++h > 0) {
      for (i = new Array(h), a = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1); a.nextNode();) o = a.currentNode, /^o:/.test(o.nodeValue) && (i[+o.nodeValue.slice(2)] = o);for (u = 0; u < h; ++u) (o = i[u]) && o.parentNode.replaceChild(f[u], o);
    }return 1 === p.childNodes.length ? p.removeChild(p.firstChild) : 11 === p.nodeType ? ((o = t()).appendChild(p), o) : p;
  };
}var oe = re(function (e) {
  var t = document.createElement("template");return t.innerHTML = e.trim(), document.importNode(t.content, !0);
}, function () {
  return document.createElement("div");
});function ie(e) {
  let t;Object.defineProperties(this, { generator: { value: ee(e => void (t = e)) }, value: { get: () => e, set: n => t(e = n) } }), void 0 !== e && t(e);
}function* ae() {
  for (;;) yield Date.now();
}var ue = new Map();function le(e, t) {
  var n;return (n = ue.get(e = +e)) ? n.then(V(t)) : (n = Date.now()) >= e ? Promise.resolve(t) : function (e, t) {
    var n = new Promise(function (n) {
      ue.delete(t);var r = t - e;if (!(r > 0)) throw new Error("invalid time");if (r > 2147483647) throw new Error("too long to wait");setTimeout(n, r);
    });return ue.set(t, n), n;
  }(n, e).then(V(t));
}var se = { delay: function (e, t) {
    return new Promise(function (n) {
      setTimeout(function () {
        n(t);
      }, e);
    });
  }, tick: function (e, t) {
    return le(Math.ceil((Date.now() + 1) / e) * e, t);
  }, when: le };function ce(e, t) {
  if (/^(\w+:)|\/\//i.test(e)) return e;if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");return "https://unpkg.com/" + e;
}const de = new Map(),
      fe = new Map(),
      pe = [],
      he = pe.map,
      me = pe.some,
      ve = pe.hasOwnProperty,
      be = "https://unpkg.com/",
      _e = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/;function we(e) {
  return "string" == typeof e ? e : "";
}function ge(e) {
  const t = _e.exec(e);return t && { name: t[1], version: t[2], path: t[3] };
}function ye(e) {
  const t = `${be}${e.name}${e.version ? `@${e.version}` : ""}/package.json`;let n = de.get(t);return n || de.set(t, n = fetch(t).then(e => {
    if (!e.ok) throw new Error("unable to load package.json");return e.redirected && !de.has(e.url) && de.set(e.url, n), e.json();
  })), n;
}const xe = Ee(async function (e, t) {
  if (e.startsWith(be) && (e = e.substring(be.length)), /^(\w+:)|\/\//i.test(e)) return e;if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");const n = ge(e);if (!n) return `${be}${e}`;if (!n.version && null != t && t.startsWith(be)) {
    const e = await ye(ge(t.substring(be.length)));n.version = e.dependencies && e.dependencies[n.name] || e.peerDependencies && e.peerDependencies[n.name];
  }const r = await ye(n);return `${be}${r.name}@${r.version}/${n.path || we(r.unpkg) || we(r.browser) || we(r.main) || "index.js"}`;
});function Ee(e) {
  const t = r(null);function n(e) {
    if ("string" != typeof e) return e;let t = fe.get(e);return t || fe.set(e, t = new Promise((t, n) => {
      const o = document.createElement("script");o.onload = () => {
        try {
          t(pe.pop()(r(e)));
        } catch (e) {
          n(new Error("invalid module"));
        }o.remove();
      }, o.onerror = () => {
        n(new Error("unable to load module")), o.remove();
      }, o.async = !0, o.src = e, window.define = Pe, document.head.appendChild(o);
    })), t;
  }function r(t) {
    return r => Promise.resolve(e(r, t)).then(n);
  }function o(e) {
    return arguments.length > 1 ? Promise.all(he.call(arguments, t)).then(Ce) : t(e);
  }return o.alias = function (t) {
    return Ee((n, r) => n in t && (r = null, "string" != typeof (n = t[n])) ? n : e(n, r));
  }, o.resolve = e, o;
}function Ce(e) {
  const t = {};for (const n of e) for (const e in n) ve.call(n, e) && (null == n[e] ? Object.defineProperty(t, e, { get: Ne(n, e) }) : t[e] = n[e]);return t;
}function Ne(e, t) {
  return () => e[t];
}function ke(e) {
  return e + "" == "exports";
}function Pe(e, t, n) {
  const r = arguments.length;r < 2 ? (n = e, t = []) : r < 3 && (n = t, t = "string" == typeof e ? [] : e), pe.push(me.call(t, ke) ? e => {
    const r = {};return Promise.all(he.call(t, t => ke(t += "") ? r : e(t))).then(e => (n.apply(null, e), r));
  } : e => Promise.all(he.call(t, e)).then(e => "function" == typeof n ? n.apply(null, e) : n));
}Pe.amd = {};var Se = re(function (e) {
  var t = document.createElementNS("http://www.w3.org/2000/svg", "g");return t.innerHTML = e.trim(), t;
}, function () {
  return document.createElementNS("http://www.w3.org/2000/svg", "g");
}),
    je = String.raw;function qe(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link");r.rel = "stylesheet", r.href = e, r.onerror = n, r.onload = t, document.head.appendChild(r);
  });
}var Le = 28;function Me() {
  return ee(function (e) {
    var t = e(window.innerWidth - Le);function n() {
      var n = window.innerWidth - Le;n !== t && e(t = n);
    }return window.addEventListener("resize", n), function () {
      window.removeEventListener("resize", n);
    };
  });
}function Oe(e) {
  const t = function (e) {
    return null == e ? xe : Ee(e);
  }(e);Object.defineProperties(this, { DOM: { value: Y, enumerable: !0 }, Files: { value: K, enumerable: !0 }, Generators: { value: ne, enumerable: !0 }, html: { value: V(oe), enumerable: !0 }, md: { value: function (e) {
        return function () {
          return e("marked@0.3.12/marked.min.js").then(function (t) {
            return re(function (n) {
              var r = document.createElement("div");r.innerHTML = t(n, { langPrefix: "" }).trim();var o = r.querySelectorAll("pre code[class]");return o.length > 0 && e("@observablehq/highlight.js@1.0.0/highlight.min.js").then(function (e) {
                o.forEach(e.highlightBlock);
              }), r;
            }, function () {
              return document.createElement("div");
            });
          });
        };
      }(t), enumerable: !0 }, Mutable: { value: V(ie), enumerable: !0 }, now: { value: ae, enumerable: !0 }, Promises: { value: se, enumerable: !0 }, require: { value: V(t), enumerable: !0 }, resolve: { value: V(ce), enumerable: !0 }, svg: { value: V(Se), enumerable: !0 }, tex: { value: function (e) {
        return function () {
          return Promise.all([e("@observablehq/katex@0.10.1/dist/katex.min.js"), e.resolve("@observablehq/katex@0.10.1/dist/katex.min.css").then(qe)]).then(function (e) {
            var t = e[0],
                n = r();function r(e) {
              return function () {
                var n = document.createElement("div");return t.render(je.apply(String, arguments), n, e), n.removeChild(n.firstChild);
              };
            }return n.block = r({ displayMode: !0 }), n;
          });
        };
      }(t), enumerable: !0 }, width: { value: Me, enumerable: !0 } });
}function Ae(e, t) {
  this.message = e + "", this.input = t;
}Ae.prototype = Object.create(Error.prototype), Ae.prototype.name = "RuntimeError", Ae.prototype.constructor = Ae;var Te = Array.prototype,
    $e = Te.map,
    Re = Te.forEach,
    De = function (e) {
  return e;
},
    Fe = function (e) {
  return function () {
    return e;
  };
},
    Ue = function () {},
    ze = 1,
    He = 2,
    Ie = 3,
    We = {};function Be(e, t, n) {
  var r;null == n && (n = We), Object.defineProperties(this, { _observer: { value: n, writable: !0 }, _definition: { value: Je, writable: !0 }, _duplicate: { value: void 0, writable: !0 }, _duplicates: { value: void 0, writable: !0 }, _indegree: { value: -1, writable: !0 }, _inputs: { value: [], writable: !0 }, _invalidate: { value: Ue, writable: !0 }, _module: { value: t }, _name: { value: null, writable: !0 }, _outputs: { value: new Set(), writable: !0 }, _promise: { value: Promise.resolve(void 0), writable: !0 }, _reachable: { value: n !== We, writable: !0 }, _rejector: { value: (r = this, function (e) {
        if (e === Je) throw new Ae(r._name + " is not defined", r._name);throw new Ae(r._name + " could not be resolved", r._name);
      }) }, _type: { value: e }, _value: { value: void 0, writable: !0 }, _version: { value: 0, writable: !0 } });
}function Ve(e) {
  e._module._runtime._dirty.add(e), e._outputs.add(this);
}function Ge(e) {
  e._module._runtime._dirty.add(e), e._outputs.delete(this);
}function Je() {
  throw Je;
}function Xe(e) {
  return function () {
    throw new Ae(e + " is defined more than once");
  };
}function Ye(e, t, n) {
  var r = this._module._scope,
      o = this._module._runtime;if (this._inputs.forEach(Ge, this), t.forEach(Ve, this), this._inputs = t, this._definition = n, this._value = void 0, e == this._name && r.get(e) === this) this._outputs.forEach(o._updates.add, o._updates);else {
    var i, a;if (this._name) if (this._outputs.size) r.delete(this._name), (a = this._module._resolve(this._name))._outputs = this._outputs, this._outputs = new Set(), a._outputs.forEach(function (e) {
      e._inputs[e._inputs.indexOf(this)] = a;
    }, this), a._outputs.forEach(o._updates.add, o._updates), o._dirty.add(a).add(this), r.set(this._name, a);else if ((a = r.get(this._name)) === this) r.delete(this._name);else {
      if (a._type !== Ie) throw new Error();a._duplicates.delete(this), this._duplicate = void 0, 1 === a._duplicates.size && (a = a._duplicates.keys().next().value, i = r.get(this._name), a._outputs = i._outputs, i._outputs = new Set(), a._outputs.forEach(function (e) {
        e._inputs[e._inputs.indexOf(i)] = a;
      }), a._definition = a._duplicate, a._duplicate = void 0, o._dirty.add(i).add(a), o._updates.add(a), r.set(this._name, a));
    }if (this._outputs.size) throw new Error();e && ((a = r.get(e)) ? a._type === Ie ? (this._definition = Xe(e), this._duplicate = n, a._duplicates.add(this)) : a._type === He ? (this._outputs = a._outputs, a._outputs = new Set(), this._outputs.forEach(function (e) {
      e._inputs[e._inputs.indexOf(a)] = this;
    }, this), o._dirty.add(a).add(this), r.set(e, this)) : (a._duplicate = a._definition, this._duplicate = n, (i = new Be(Ie, this._module))._name = e, i._definition = this._definition = a._definition = Xe(e), i._outputs = a._outputs, a._outputs = new Set(), i._outputs.forEach(function (e) {
      e._inputs[e._inputs.indexOf(a)] = i;
    }), i._duplicates = new Set([this, a]), o._dirty.add(a).add(i), o._updates.add(a).add(i), r.set(e, i)) : r.set(e, this)), this._name = e;
  }return o._updates.add(this), o._compute(), this;
}Object.defineProperties(Be.prototype, { _pending: { value: function () {
      this._observer.pending && this._observer.pending();
    }, writable: !0, configurable: !0 }, _fulfilled: { value: function (e) {
      this._observer.fulfilled && this._observer.fulfilled(e);
    }, writable: !0, configurable: !0 }, _rejected: { value: function (e) {
      this._observer.rejected && this._observer.rejected(e);
    }, writable: !0, configurable: !0 }, define: { value: function (e, t, n) {
      switch (arguments.length) {case 1:
          n = e, e = t = null;break;case 2:
          n = t, "string" == typeof e ? t = null : (t = e, e = null);}return Ye.call(this, null == e ? null : e + "", null == t ? [] : $e.call(t, this._module._resolve, this._module), "function" == typeof n ? n : Fe(n));
    }, writable: !0, configurable: !0 }, delete: { value: function () {
      return Ye.call(this, null, [], Ue);
    }, writable: !0, configurable: !0 }, import: { value: function (e, t, n) {
      arguments.length < 3 && (n = t, t = e);return Ye.call(this, t + "", [n._resolve(e + "")], De);
    }, writable: !0, configurable: !0 } });var Ke = new Map();function Qe(e) {
  Object.defineProperties(this, { _runtime: { value: e }, _scope: { value: new Map() } });
}function Ze(e) {
  return e._name;
}Object.defineProperties(Qe.prototype, { _copy: { value: function (e, t, n) {
      var r = new Qe(this._runtime);return n.set(this, r), this._scope.forEach(function (o, i) {
        var a,
            u = new Be(o._type, r);if (a = e.get(i)) u.import(a.name, a.alias, t);else if (o._definition === De) {
          var l = o._inputs[0],
              s = l._module,
              c = n.get(s) || s._copy(Ke, null, n);u.import(l._name, i, c);
        } else u.define(i, o._inputs.map(Ze), o._definition);
      }), r;
    }, writable: !0, configurable: !0 }, _resolve: { value: function (e) {
      var t = this._scope.get(e);t || (t = new Be(He, this), this._runtime._builtin._scope.has(e) ? t.import(e, this._runtime._builtin) : "invalidation" === e ? t.define(e, et) : "visibility" === e ? t.define(e, tt) : this._scope.set(t._name = e, t));return t;
    }, writable: !0, configurable: !0 }, define: { value: function () {
      var e = new Be(ze, this);return e.define.apply(e, arguments);
    }, writable: !0, configurable: !0 }, derive: { value: function (e, t) {
      var n = new Map();return Re.call(e, function (e) {
        "object" != typeof e && (e = { name: e + "" }), null == e.alias && (e.alias = e.name), n.set(e.alias, e);
      }), this._copy(n, t, new Map());
    }, writable: !0, configurable: !0 }, import: { value: function () {
      var e = new Be(ze, this);return e.import.apply(e, arguments);
    }, writable: !0, configurable: !0 }, variable: { value: function (e) {
      return new Be(ze, this, e);
    }, writable: !0, configurable: !0 } });var et = {},
    tt = {};function nt(e) {
  var t = this.module();if (Object.defineProperties(this, { _dirty: { value: new Set() }, _updates: { value: new Set() }, _computing: { value: null, writable: !0 }, _builtin: { value: t } }), e) for (var n in e) new Be(He, t).define(n, [], e[n]);
}function rt(e) {
  ++e._indegree;
}function ot(e) {
  return e._promise.catch(e._rejector);
}function it(e) {
  return new Promise(function (t) {
    e._invalidate = t;
  });
}function at(e, t) {
  let n,
      r,
      o = "function" == typeof IntersectionObserver && t._observer && t._observer._node,
      i = !o,
      a = Ue,
      u = Ue;return o && ((r = new IntersectionObserver(([e]) => (i = e.isIntersecting) && (n = null, a()))).observe(o), e.then(() => (r.disconnect(), r = null, u()))), function (e) {
    return i ? Promise.resolve(e) : r ? (n || (n = new Promise((e, t) => (a = e, u = t))), n.then(() => e)) : Promise.reject();
  };
}function ut(e) {
  e._invalidate(), e._invalidate = Ue, e._pending();var t = e._value,
      n = ++e._version,
      r = null,
      o = e._promise = Promise.all(e._inputs.map(ot)).then(function (o) {
    if (e._version === n) {
      for (var i = 0, a = o.length; i < a; ++i) switch (o[i]) {case et:
          o[i] = r = it(e);break;case tt:
          r || (r = it(e)), o[i] = at(r, e);}return e._definition.apply(t, o);
    }
  }).then(function (t) {
    return function (e) {
      return e && "function" == typeof e.next && "function" == typeof e.return;
    }(t) ? ((r || it(e)).then((i = t, function () {
      i.return();
    })), function (e, t, n, r) {
      function o() {
        var n = new Promise(function (e) {
          e(r.next());
        }).then(function (r) {
          return r.done ? void 0 : Promise.resolve(r.value).then(function (r) {
            if (e._version === t) return lt(e, r, n).then(o), e._fulfilled(r), r;
          });
        });n.catch(function (r) {
          e._version === t && (lt(e, void 0, n), e._rejected(r));
        });
      }return new Promise(function (e) {
        e(r.next());
      }).then(function (e) {
        if (!e.done) return n.then(o), e.value;
      });
    }(e, n, o, t)) : t;var i;
  });o.then(function (t) {
    e._version === n && (e._value = t, e._fulfilled(t));
  }, function (t) {
    e._version === n && (e._value = void 0, e._rejected(t));
  });
}function lt(e, t, n) {
  var r = e._module._runtime;return e._value = t, e._promise = n, e._outputs.forEach(r._updates.add, r._updates), r._compute();
}Object.defineProperties(nt, { load: { value: function (e, t, n) {
      if ("function" == typeof t && (n = t, t = null), "function" != typeof n) throw new Error("invalid observer");null == t && (t = new Oe());const { modules: r, id: o } = e,
            i = new Map(),
            a = new nt(t),
            u = l(o);function l(e) {
        let t = i.get(e);return t || i.set(e, t = a.module()), t;
      }for (const e of r) {
        const t = l(e.id);let r = 0;for (const o of e.variables) o.from ? t.import(o.remote, o.name, l(o.from)) : t === u ? t.variable(n(o, r, e.variables)).define(o.name, o.inputs, o.value) : t.define(o.name, o.inputs, o.value), ++r;
      }return a;
    }, writable: !0, configurable: !0 } }), Object.defineProperties(nt.prototype, { _compute: { value: function () {
      return this._computing || (this._computing = this._computeSoon());
    }, writable: !0, configurable: !0 }, _computeSoon: { value: function () {
      var e = this;return new Promise(function (t) {
        requestAnimationFrame(function () {
          t(), e._computeNow();
        });
      });
    }, writable: !0, configurable: !0 }, _computeNow: { value: function () {
      var e,
          t,
          n = [];(e = new Set(this._dirty)).forEach(function (t) {
        t._inputs.forEach(e.add, e);const n = function (e) {
          if (e._observer !== We) return !0;var t = new Set(e._outputs);for (const e of t) {
            if (e._observer !== We) return !0;e._outputs.forEach(t.add, t);
          }return !1;
        }(t);n > t._reachable ? this._updates.add(t) : n < t._reachable && t._invalidate(), t._reachable = n;
      }, this), (e = new Set(this._updates)).forEach(function (t) {
        t._reachable ? (t._indegree = 0, t._outputs.forEach(e.add, e)) : (t._indegree = -1, e.delete(t));
      }), this._computing = null, this._updates.clear(), this._dirty.clear(), e.forEach(function (e) {
        e._outputs.forEach(rt);
      }), e.forEach(function (e) {
        0 === e._indegree && n.push(e);
      });for (; t = n.pop();) ut(t), t._outputs.forEach(r), e.delete(t);function r(e) {
        0 == --e._indegree && n.push(e);
      }e.forEach(function (e) {
        var t = new Ae("circular definition");e._value = void 0, (e._promise = Promise.reject(t)).catch(Ue), e._rejected(t);
      });
    }, writable: !0, configurable: !0 }, module: { value: function () {
      return new Qe(this);
    }, writable: !0, configurable: !0 } });export { B as Inspector, Oe as Library, nt as Runtime, Ae as RuntimeError };