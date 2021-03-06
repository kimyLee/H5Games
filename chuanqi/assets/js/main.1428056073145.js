/** 
 * -------------------------------------------------------------
 * Copyright (c) 2015.
 * -------------------------------------------------------------
 */

! function(a, b) {
	function c(a) {
		var b = a.length,
			c = fa.type(a);
		return fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
	}

	function d(a) {
		var b = oa[a] = {};
		return fa.each(a.match(ha) || [], function(a, c) {
			b[c] = !0
		}), b
	}

	function e() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = fa.expando + Math.random()
	}

	function f(a, c, d) {
		var e;
		if (d === b && 1 === a.nodeType)
			if (e = "data-" + c.replace(sa, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
				try {
					d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : ra.test(d) ? JSON.parse(d) : d
				} catch (f) {}
				pa.set(a, c, d)
			} else d = b;
		return d
	}

	function g() {
		return !0
	}

	function h() {
		return !1
	}

	function i() {
		try {
			return T.activeElement
		} catch (a) {}
	}

	function j(a, b) {
		for (;
			(a = a[b]) && 1 !== a.nodeType;);
		return a
	}

	function k(a, b, c) {
		if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return fa.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (Ca.test(b)) return fa.filter(b, a, c);
			b = fa.filter(b, a)
		}
		return fa.grep(a, function(a) {
			return ba.call(b, a) >= 0 !== c
		})
	}

	function l(a, b) {
		return fa.nodeName(a, "table") && fa.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function m(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function n(a) {
		var b = Ma.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function o(a, b) {
		for (var c = a.length, d = 0; c > d; d++) qa.set(a[d], "globalEval", !b || qa.get(b[d], "globalEval"))
	}

	function p(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (qa.hasData(a) && (f = qa.access(a), g = fa.extend({}, f), j = f.events, qa.set(b, g), j)) {
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
			}
			pa.hasData(a) && (h = pa.access(a), i = fa.extend({}, h), pa.set(b, i))
		}
	}

	function q(a, c) {
		var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
		return c === b || c && fa.nodeName(a, c) ? fa.merge([a], d) : d
	}

	function r(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && Ja.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}

	function s(a, b) {
		if (b in a) return b;
		for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = $a.length; e--;)
			if (b = $a[e] + c, b in a) return b;
		return d
	}

	function t(a, b) {
		return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
	}

	function u(b) {
		return a.getComputedStyle(b, null)
	}

	function v(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qa.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qa.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qa.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function w(a, b, c) {
		var d = Ta.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function x(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Za[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Za[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Za[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Za[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Za[f] + "Width", !0, e)));
		return g
	}

	function y(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = u(a),
			g = fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Pa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ua.test(e)) return e;
			d = g && (fa.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function z(a) {
		var b = T,
			c = Wa[a];
		return c || (c = A(a, b), "none" !== c && c || (Qa = (Qa || fa("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Qa[0].contentWindow || Qa[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Qa.detach()), Wa[a] = c), c
	}

	function A(a, b) {
		var c = fa(b.createElement(a)).appendTo(b.body),
			d = fa.css(c[0], "display");
		return c.remove(), d
	}

	function B(a, b, c, d) {
		var e;
		if (fa.isArray(b)) fa.each(b, function(b, e) {
			c || ab.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== fa.type(b)) d(a, b);
		else
			for (e in b) B(a + "[" + e + "]", b[e], c, d)
	}

	function C(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(ha) || [];
			if (fa.isFunction(c))
				for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function D(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, fa.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {},
			g = a === rb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}

	function E(a, c) {
		var d, e, f = fa.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
		return e && fa.extend(!0, a, e), a
	}

	function F(a, c, d) {
		for (var e, f, g, h, i = a.contents, j = a.dataTypes;
			"*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
		if (e)
			for (f in i)
				if (i[f] && i[f].test(e)) {
					j.unshift(f);
					break
				}
		if (j[0] in d) g = j[0];
		else {
			for (f in d) {
				if (!j[0] || a.converters[f + " " + j[0]]) {
					g = f;
					break
				}
				h || (h = f)
			}
			g = g || h
		}
		return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
	}

	function G(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}

	function H() {
		return setTimeout(function() {
			Ab = b
		}), Ab = fa.now()
	}

	function I(a, b) {
		fa.each(b, function(b, c) {
			for (var d = (Gb[b] || []).concat(Gb["*"]), e = 0, f = d.length; f > e; e++)
				if (d[e].call(a, b, c)) return
		})
	}

	function J(a, b, c) {
		var d, e, f = 0,
			g = Fb.length,
			h = fa.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = Ab || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: fa.extend({}, b),
				opts: fa.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Ab || H(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (K(k, j.opts.specialEasing); g > f; f++)
			if (d = Fb[f].call(j, a, k, j.opts)) return d;
		return I(j, k), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function K(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function L(a, c, d) {
		var e, f, g, h, i, j, k, l, m, n = this,
			o = a.style,
			p = {},
			q = [],
			r = a.nodeType && t(a);
		d.queue || (l = fa._queueHooks(a, "fx"), null == l.unqueued && (l.unqueued = 0, m = l.empty.fire, l.empty.fire = function() {
			l.unqueued || m()
		}), l.unqueued++, n.always(function() {
			n.always(function() {
				l.unqueued--, fa.queue(a, "fx").length || l.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [o.overflow, o.overflowX, o.overflowY], "inline" === fa.css(a, "display") && "none" === fa.css(a, "float") && (o.display = "inline-block")), d.overflow && (o.overflow = "hidden", n.always(function() {
			o.overflow = d.overflow[0], o.overflowX = d.overflow[1], o.overflowY = d.overflow[2]
		})), i = qa.get(a, "fxshow");
		for (e in c)
			if (g = c[e], Cb.exec(g)) {
				if (delete c[e], j = j || "toggle" === g, g === (r ? "hide" : "show")) {
					if ("show" !== g || i === b || i[e] === b) continue;
					r = !0
				}
				q.push(e)
			}
		if (h = q.length) {
			i = qa.get(a, "fxshow") || qa.access(a, "fxshow", {}), "hidden" in i && (r = i.hidden), j && (i.hidden = !r), r ? fa(a).show() : n.done(function() {
				fa(a).hide()
			}), n.done(function() {
				var b;
				qa.remove(a, "fxshow");
				for (b in p) fa.style(a, b, p[b])
			});
			for (e = 0; h > e; e++) f = q[e], k = n.createTween(f, r ? i[f] : 0), p[f] = i[f] || fa.style(a, f), f in i || (i[f] = k.start, r && (k.end = k.start, k.start = "width" === f || "height" === f ? 1 : 0))
		}
	}

	function M(a, b, c, d, e) {
		return new M.prototype.init(a, b, c, d, e)
	}

	function N(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Za[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function O(a) {
		return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	var P, Q, R = typeof b,
		S = a.location,
		T = a.document,
		U = T.documentElement,
		V = a.jQuery,
		W = a.$,
		X = {},
		Y = [],
		Z = "2.0.0",
		$ = Y.concat,
		_ = Y.push,
		aa = Y.slice,
		ba = Y.indexOf,
		ca = X.toString,
		da = X.hasOwnProperty,
		ea = Z.trim,
		fa = function(a, b) {
			return new fa.fn.init(a, b, P)
		},
		ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ha = /\S+/g,
		ia = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ja = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ka = /^-ms-/,
		la = /-([\da-z])/gi,
		ma = function(a, b) {
			return b.toUpperCase()
		},
		na = function() {
			T.removeEventListener("DOMContentLoaded", na, !1), a.removeEventListener("load", na, !1), fa.ready()
		};
	fa.fn = fa.prototype = {
			jquery: Z,
			constructor: fa,
			init: function(a, c, d) {
				var e, f;
				if (!a) return this;
				if ("string" == typeof a) {
					if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ia.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
					if (e[1]) {
						if (c = c instanceof fa ? c[0] : c, fa.merge(this, fa.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), ja.test(e[1]) && fa.isPlainObject(c))
							for (e in c) fa.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
						return this
					}
					return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
				}
				return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
			},
			selector: "",
			length: 0,
			toArray: function() {
				return aa.call(this)
			},
			get: function(a) {
				return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
			},
			pushStack: function(a) {
				var b = fa.merge(this.constructor(), a);
				return b.prevObject = this, b.context = this.context, b
			},
			each: function(a, b) {
				return fa.each(this, a, b)
			},
			ready: function(a) {
				return fa.ready.promise().done(a), this
			},
			slice: function() {
				return this.pushStack(aa.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(a) {
				var b = this.length,
					c = +a + (0 > a ? b : 0);
				return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
			},
			map: function(a) {
				return this.pushStack(fa.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: _,
			sort: [].sort,
			splice: [].splice
		}, fa.fn.init.prototype = fa.fn, fa.extend = fa.fn.extend = function() {
			var a, c, d, e, f, g, h = arguments[0] || {},
				i = 1,
				j = arguments.length,
				k = !1;
			for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fa.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
				if (null != (a = arguments[i]))
					for (c in a) d = h[c], e = a[c], h !== e && (k && e && (fa.isPlainObject(e) || (f = fa.isArray(e))) ? (f ? (f = !1, g = d && fa.isArray(d) ? d : []) : g = d && fa.isPlainObject(d) ? d : {}, h[c] = fa.extend(k, g, e)) : e !== b && (h[c] = e));
			return h
		}, fa.extend({
			expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
			noConflict: function(b) {
				return a.$ === fa && (a.$ = W), b && a.jQuery === fa && (a.jQuery = V), fa
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(a) {
				a ? fa.readyWait++ : fa.ready(!0)
			},
			ready: function(a) {
				(a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (Q.resolveWith(T, [fa]), fa.fn.trigger && fa(T).trigger("ready").off("ready")))
			},
			isFunction: function(a) {
				return "function" === fa.type(a)
			},
			isArray: Array.isArray,
			isWindow: function(a) {
				return null != a && a === a.window
			},
			isNumeric: function(a) {
				return !isNaN(parseFloat(a)) && isFinite(a)
			},
			type: function(a) {
				return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[ca.call(a)] || "object" : typeof a
			},
			isPlainObject: function(a) {
				if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
				try {
					if (a.constructor && !da.call(a.constructor.prototype, "isPrototypeOf")) return !1
				} catch (b) {
					return !1
				}
				return !0
			},
			isEmptyObject: function(a) {
				var b;
				for (b in a) return !1;
				return !0
			},
			error: function(a) {
				throw new Error(a)
			},
			parseHTML: function(a, b, c) {
				if (!a || "string" != typeof a) return null;
				"boolean" == typeof b && (c = b, b = !1), b = b || T;
				var d = ja.exec(a),
					e = !c && [];
				return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && fa(e).remove(), fa.merge([], d.childNodes))
			},
			parseJSON: JSON.parse,
			parseXML: function(a) {
				var c, d;
				if (!a || "string" != typeof a) return null;
				try {
					d = new DOMParser, c = d.parseFromString(a, "text/xml")
				} catch (e) {
					c = b
				}
				return (!c || c.getElementsByTagName("parsererror").length) && fa.error("Invalid XML: " + a), c
			},
			noop: function() {},
			globalEval: function(a) {
				var b, c = eval;
				a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
			},
			camelCase: function(a) {
				return a.replace(ka, "ms-").replace(la, ma)
			},
			nodeName: function(a, b) {
				return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
			},
			each: function(a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a);
				if (d) {
					if (h)
						for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
					else
						for (f in a)
							if (e = b.apply(a[f], d), e === !1) break
				} else if (h)
					for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
				else
					for (f in a)
						if (e = b.call(a[f], f, a[f]), e === !1) break;
				return a
			},
			trim: function(a) {
				return null == a ? "" : ea.call(a)
			},
			makeArray: function(a, b) {
				var d = b || [];
				return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
			},
			inArray: function(a, b, c) {
				return null == b ? -1 : ba.call(b, a, c)
			},
			merge: function(a, c) {
				var d = c.length,
					e = a.length,
					f = 0;
				if ("number" == typeof d)
					for (; d > f; f++) a[e++] = c[f];
				else
					for (; c[f] !== b;) a[e++] = c[f++];
				return a.length = e, a
			},
			grep: function(a, b, c) {
				var d, e = [],
					f = 0,
					g = a.length;
				for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
				return e
			},
			map: function(a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a),
					i = [];
				if (h)
					for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
				else
					for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
				return $.apply([], i)
			},
			guid: 1,
			proxy: function(a, c) {
				var d, e, f;
				return "string" == typeof c && (d = a[c], c = a, a = d), fa.isFunction(a) ? (e = aa.call(arguments, 2), f = function() {
					return a.apply(c || this, e.concat(aa.call(arguments)))
				}, f.guid = a.guid = a.guid || fa.guid++, f) : b
			},
			access: function(a, c, d, e, f, g, h) {
				var i = 0,
					j = a.length,
					k = null == d;
				if ("object" === fa.type(d)) {
					f = !0;
					for (i in d) fa.access(a, c, i, d[i], !0, g, h)
				} else if (e !== b && (f = !0, fa.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
						return k.call(fa(a), c)
					})), c))
					for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
				return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
			},
			now: Date.now,
			swap: function(a, b, c, d) {
				var e, f, g = {};
				for (f in b) g[f] = a.style[f], a.style[f] = b[f];
				e = c.apply(a, d || []);
				for (f in b) a.style[f] = g[f];
				return e
			}
		}), fa.ready.promise = function(b) {
			return Q || (Q = fa.Deferred(), "complete" === T.readyState ? setTimeout(fa.ready) : (T.addEventListener("DOMContentLoaded", na, !1), a.addEventListener("load", na, !1))), Q.promise(b)
		}, fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			X["[object " + b + "]"] = b.toLowerCase()
		}), P = fa(T),
		function(a, b) {
			function c(a) {
				return ta.test(a + "")
			}

			function d() {
				var a, b = [];
				return a = function(c, d) {
					return b.push(c += " ") > A.cacheLength && delete a[b.shift()], a[c] = d
				}
			}

			function e(a) {
				return a[O] = !0, a
			}

			function f(a) {
				var b = H.createElement("div");
				try {
					return !!a(b)
				} catch (c) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}

			function g(a, b, c, d) {
				var e, f, g, h, i, j, k, l, m, p;
				if ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, c = c || [], !a || "string" != typeof a) return c;
				if (1 !== (h = b.nodeType) && 9 !== h) return [];
				if (J && !d) {
					if (e = ua.exec(a))
						if (g = e[1]) {
							if (9 === h) {
								if (f = b.getElementById(g), !f || !f.parentNode) return c;
								if (f.id === g) return c.push(f), c
							} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && N(b, f) && f.id === g) return c.push(f), c
						} else {
							if (e[2]) return ba.apply(c, b.getElementsByTagName(a)), c;
							if ((g = e[3]) && Q.getElementsByClassName && b.getElementsByClassName) return ba.apply(c, b.getElementsByClassName(g)), c
						}
					if (Q.qsa && (!K || !K.test(a))) {
						if (l = k = O, m = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
							for (j = n(a), (k = b.getAttribute("id")) ? l = k.replace(xa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + o(j[i]);
							m = oa.test(a) && b.parentNode || b, p = j.join(",")
						}
						if (p) try {
							return ba.apply(c, m.querySelectorAll(p)), c
						} catch (q) {} finally {
							k || b.removeAttribute("id")
						}
					}
				}
				return w(a.replace(la, "$1"), b, c, d)
			}

			function h(a, b) {
				var c = b && a,
					d = c && (~b.sourceIndex || Z) - (~a.sourceIndex || Z);
				if (d) return d;
				if (c)
					for (; c = c.nextSibling;)
						if (c === b) return -1;
				return a ? 1 : -1
			}

			function i(a, c, d) {
				var e;
				return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : a[c] === !0 ? c.toLowerCase() : null
			}

			function j(a, c, d) {
				var e;
				return d ? b : e = a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
			}

			function k(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}

			function l(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}

			function m(a) {
				return e(function(b) {
					return b = +b, e(function(c, d) {
						for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}

			function n(a, b) {
				var c, d, e, f, h, i, j, k = U[a + " "];
				if (k) return b ? 0 : k.slice(0);
				for (h = a, i = [], j = A.preFilter; h;) {
					(!c || (d = ma.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = na.exec(h)) && (c = d.shift(), e.push({
						value: c,
						type: d[0].replace(la, " ")
					}), h = h.slice(c.length));
					for (f in A.filter) !(d = sa[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({
						value: c,
						type: f,
						matches: d
					}), h = h.slice(c.length));
					if (!c) break
				}
				return b ? h.length : h ? g.error(a) : U(a, i).slice(0)
			}

			function o(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}

			function p(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = S++;
				return b.first ? function(b, c, f) {
					for (; b = b[d];)
						if (1 === b.nodeType || e) return a(b, c, f)
				} : function(b, c, g) {
					var h, i, j, k = R + " " + f;
					if (g) {
						for (; b = b[d];)
							if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else
						for (; b = b[d];)
							if (1 === b.nodeType || e)
								if (j = b[O] || (b[O] = {}), (i = j[d]) && i[0] === k) {
									if ((h = i[1]) === !0 || h === z) return h === !0
								} else if (i = j[d] = [k], i[1] = a(b, c, g) || z, i[1] === !0) return !0
				}
			}

			function q(a) {
				return a.length > 1 ? function(b, c, d) {
					for (var e = a.length; e--;)
						if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}

			function r(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				return g
			}

			function s(a, b, c, d, f, g) {
				return d && !d[O] && (d = s(d)), f && !f[O] && (f = s(f, g)), e(function(e, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						p = e || v(b || "*", h.nodeType ? [h] : h, []),
						q = !a || !e && b ? p : r(p, m, a, h, i),
						s = c ? f || (e ? a : o || d) ? [] : g : q;
					if (c && c(q, s, h, i), d)
						for (j = r(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(q[n[k]] = l));
					if (e) {
						if (f || a) {
							if (f) {
								for (j = [], k = s.length; k--;)(l = s[k]) && j.push(q[k] = l);
								f(null, s = [], j, i)
							}
							for (k = s.length; k--;)(l = s[k]) && (j = f ? da.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
						}
					} else s = r(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ba.apply(g, s)
				})
			}

			function t(a) {
				for (var b, c, d, e = a.length, f = A.relative[a[0].type], g = f || A.relative[" "], h = f ? 1 : 0, i = p(function(a) {
						return a === b
					}, g, !0), j = p(function(a) {
						return da.call(b, a) > -1
					}, g, !0), k = [function(a, c, d) {
						return !f && (d || c !== E) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
					}]; e > h; h++)
					if (c = A.relative[a[h].type]) k = [p(q(k), c)];
					else {
						if (c = A.filter[a[h].type].apply(null, a[h].matches), c[O]) {
							for (d = ++h; e > d && !A.relative[a[d].type]; d++);
							return s(h > 1 && q(k), h > 1 && o(a.slice(0, h - 1)).replace(la, "$1"), c, d > h && t(a.slice(h, d)), e > d && t(a = a.slice(d)), e > d && o(a))
						}
						k.push(c)
					}
				return q(k)
			}

			function u(a, b) {
				var c = 0,
					d = b.length > 0,
					f = a.length > 0,
					h = function(e, h, i, j, k) {
						var l, m, n, o = [],
							p = 0,
							q = "0",
							s = e && [],
							t = null != k,
							u = E,
							v = e || f && A.find.TAG("*", k && h.parentNode || h),
							w = R += null == u ? 1 : Math.random() || .1;
						for (t && (E = h !== H && h, z = c); null != (l = v[q]); q++) {
							if (f && l) {
								for (m = 0; n = a[m++];)
									if (n(l, h, i)) {
										j.push(l);
										break
									}
								t && (R = w, z = ++c)
							}
							d && ((l = !n && l) && p--, e && s.push(l))
						}
						if (p += q, d && q !== p) {
							for (m = 0; n = b[m++];) n(s, o, h, i);
							if (e) {
								if (p > 0)
									for (; q--;) s[q] || o[q] || (o[q] = _.call(j));
								o = r(o)
							}
							ba.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && g.uniqueSort(j)
						}
						return t && (R = w, E = u), s
					};
				return d ? e(h) : h
			}

			function v(a, b, c) {
				for (var d = 0, e = b.length; e > d; d++) g(a, b[d], c);
				return c
			}

			function w(a, b, c, d) {
				var e, f, g, h, i, j = n(a);
				if (!d && 1 === j.length) {
					if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && A.relative[f[1].type]) {
						if (b = (A.find.ID(g.matches[0].replace(ya, za), b) || [])[0], !b) return c;
						a = a.slice(f.shift().value.length)
					}
					for (e = sa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !A.relative[h = g.type]);)
						if ((i = A.find[h]) && (d = i(g.matches[0].replace(ya, za), oa.test(f[0].type) && b.parentNode || b))) {
							if (f.splice(e, 1), a = d.length && o(f), !a) return ba.apply(c, d), c;
							break
						}
				}
				return D(a, j)(d, b, !J, c, oa.test(a)), c
			}

			function x() {}
			var y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + -new Date,
				P = a.document,
				Q = {},
				R = 0,
				S = 0,
				T = d(),
				U = d(),
				V = d(),
				W = !1,
				X = function() {
					return 0
				},
				Y = typeof b,
				Z = 1 << 31,
				$ = [],
				_ = $.pop,
				aa = $.push,
				ba = $.push,
				ca = $.slice,
				da = $.indexOf || function(a) {
					for (var b = 0, c = this.length; c > b; b++)
						if (this[b] === a) return b;
					return -1
				},
				ea = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ga = "[\\x20\\t\\r\\n\\f]",
				ha = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ia = ha.replace("w", "w#"),
				ja = "\\[" + ga + "*(" + ha + ")" + ga + "*(?:([*^$|!~]?=)" + ga + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ia + ")|)|)" + ga + "*\\]",
				ka = ":(" + ha + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ja.replace(3, 8) + ")*)|.*)\\)|)",
				la = new RegExp("^" + ga + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ga + "+$", "g"),
				ma = new RegExp("^" + ga + "*," + ga + "*"),
				na = new RegExp("^" + ga + "*([>+~]|" + ga + ")" + ga + "*"),
				oa = new RegExp(ga + "*[+~]"),
				pa = new RegExp("=" + ga + "*([^\\]'\"]*)" + ga + "*\\]", "g"),
				qa = new RegExp(ka),
				ra = new RegExp("^" + ia + "$"),
				sa = {
					ID: new RegExp("^#(" + ha + ")"),
					CLASS: new RegExp("^\\.(" + ha + ")"),
					TAG: new RegExp("^(" + ha.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ja),
					PSEUDO: new RegExp("^" + ka),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ga + "*(even|odd|(([+-]|)(\\d*)n|)" + ga + "*(?:([+-]|)" + ga + "*(\\d+)|))" + ga + "*\\)|)", "i"),
					"boolean": new RegExp("^(?:" + ea + ")$", "i"),
					needsContext: new RegExp("^" + ga + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ga + "*((?:-\\d)?\\d*)" + ga + "*\\)|)(?=[^-]|$)", "i")
				},
				ta = /^[^{]+\{\s*\[native \w/,
				ua = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				va = /^(?:input|select|textarea|button)$/i,
				wa = /^h\d$/i,
				xa = /'|\\/g,
				ya = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				za = function(a, b) {
					var c = "0x" + b - 65536;
					return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320)
				};
			try {
				ba.apply($ = ca.call(P.childNodes), P.childNodes), $[P.childNodes.length].nodeType
			} catch (Aa) {
				ba = {
					apply: $.length ? function(a, b) {
						aa.apply(a, ca.call(b))
					} : function(a, b) {
						for (var c = a.length, d = 0; a[c++] = b[d++];);
						a.length = c - 1
					}
				}
			}
			C = g.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1
			}, G = g.setDocument = function(a) {
				var d = a ? a.ownerDocument || a : P;
				return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = d.documentElement, J = !C(d), Q.getElementsByTagName = f(function(a) {
					return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
				}), Q.attributes = f(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), Q.getElementsByClassName = f(function(a) {
					return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
				}), Q.sortDetached = f(function(a) {
					return 1 & a.compareDocumentPosition(H.createElement("div"))
				}), Q.getById = f(function(a) {
					return I.appendChild(a).id = O, !d.getElementsByName || !d.getElementsByName(O).length
				}), Q.getById ? (A.find.ID = function(a, b) {
					if (typeof b.getElementById !== Y && J) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, A.filter.ID = function(a) {
					var b = a.replace(ya, za);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (A.find.ID = function(a, c) {
					if (typeof c.getElementById !== Y && J) {
						var d = c.getElementById(a);
						return d ? d.id === a || typeof d.getAttributeNode !== Y && d.getAttributeNode("id").value === a ? [d] : b : []
					}
				}, A.filter.ID = function(a) {
					var b = a.replace(ya, za);
					return function(a) {
						var c = typeof a.getAttributeNode !== Y && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), A.find.TAG = Q.getElementsByTagName ? function(a, b) {
					return typeof b.getElementsByTagName !== Y ? b.getElementsByTagName(a) : void 0
				} : function(a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						for (; c = f[e++];) 1 === c.nodeType && d.push(c);
						return d
					}
					return f
				}, A.find.CLASS = Q.getElementsByClassName && function(a, b) {
					return typeof b.getElementsByClassName !== Y && J ? b.getElementsByClassName(a) : void 0
				}, L = [], K = [], (Q.qsa = c(d.querySelectorAll)) && (f(function(a) {
					a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || K.push("\\[" + ga + "*(?:value|" + ea + ")"), a.querySelectorAll(":checked").length || K.push(":checked")
				}), f(function(a) {
					var b = H.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && K.push("[*^$]=" + ga + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
				})), (Q.matchesSelector = c(M = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && f(function(a) {
					Q.disconnectedMatch = M.call(a, "div"), M.call(a, "[s!='']:x"), L.push("!=", ka)
				}), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), N = c(I.contains) || I.compareDocumentPosition ? function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b)
						for (; b = b.parentNode;)
							if (b === a) return !0;
					return !1
				}, X = I.compareDocumentPosition ? function(a, b) {
					if (a === b) return W = !0, 0;
					var c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
					return c ? 1 & c || !Q.sortDetached && b.compareDocumentPosition(a) === c ? a === d || N(P, a) ? -1 : b === d || N(P, b) ? 1 : F ? da.call(F, a) - da.call(F, b) : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
				} : function(a, b) {
					var c, e = 0,
						f = a.parentNode,
						g = b.parentNode,
						i = [a],
						j = [b];
					if (a === b) return W = !0, 0;
					if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : F ? da.call(F, a) - da.call(F, b) : 0;
					if (f === g) return h(a, b);
					for (c = a; c = c.parentNode;) i.unshift(c);
					for (c = b; c = c.parentNode;) j.unshift(c);
					for (; i[e] === j[e];) e++;
					return e ? h(i[e], j[e]) : i[e] === P ? -1 : j[e] === P ? 1 : 0
				}, H) : H
			}, g.matches = function(a, b) {
				return g(a, null, null, b)
			}, g.matchesSelector = function(a, b) {
				if ((a.ownerDocument || a) !== H && G(a), b = b.replace(pa, "='$1']"), !(!Q.matchesSelector || !J || L && L.test(b) || K && K.test(b))) try {
					var c = M.call(a, b);
					if (c || Q.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
				} catch (d) {}
				return g(b, H, null, [a]).length > 0
			}, g.contains = function(a, b) {
				return (a.ownerDocument || a) !== H && G(a), N(a, b)
			}, g.attr = function(a, c) {
				(a.ownerDocument || a) !== H && G(a);
				var d = A.attrHandle[c.toLowerCase()],
					e = d && d(a, c, !J);
				return e === b ? Q.attributes || !J ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
			}, g.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, g.uniqueSort = function(a) {
				var b, c = [],
					d = 0,
					e = 0;
				if (W = !Q.detectDuplicates, F = !Q.sortStable && a.slice(0), a.sort(X), W) {
					for (; b = a[e++];) b === a[e] && (d = c.push(e));
					for (; d--;) a.splice(c[d], 1)
				}
				return a
			}, B = g.getText = function(a) {
				var b, c = "",
					d = 0,
					e = a.nodeType;
				if (e) {
					if (1 === e || 9 === e || 11 === e) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += B(a)
					} else if (3 === e || 4 === e) return a.nodeValue
				} else
					for (; b = a[d]; d++) c += B(b);
				return c
			}, A = g.selectors = {
				cacheLength: 50,
				createPseudo: e,
				match: sa,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						return a[1] = a[1].replace(ya, za), a[3] = (a[4] || a[5] || "").replace(ya, za), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c = !a[5] && a[2];
						return sa.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && qa.test(c) && (b = n(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function(a) {
						var b = a.replace(ya, za).toLowerCase();
						return "*" === a ? function() {
							return !0
						} : function(a) {
							return a.nodeName && a.nodeName.toLowerCase() === b
						}
					},
					CLASS: function(a) {
						var b = T[a + " "];
						return b || (b = new RegExp("(^|" + ga + ")" + a + "(" + ga + "|$)")) && T(a, function(a) {
							return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== Y && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, b, c) {
						return function(d) {
							var e = g.attr(d, a);
							return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ? function(a) {
							return !!a.parentNode
						} : function(b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h;
							if (q) {
								if (f) {
									for (; p;) {
										for (l = b; l = l[p];)
											if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									for (k = q[O] || (q[O] = {}), j = k[a] || [], n = j[0] === R && j[1], m = j[0] === R && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
										if (1 === l.nodeType && ++m && l === b) {
											k[a] = [R, n, m];
											break
										}
								} else if (s && (j = (b[O] || (b[O] = {}))[a]) && j[0] === R) m = j[1];
								else
									for (;
										(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[O] || (l[O] = {}))[a] = [R, m]), l !== b)););
								return m -= e, m === d || m % d === 0 && m / d >= 0
							}
						}
					},
					PSEUDO: function(a, b) {
						var c, d = A.pseudos[a] || A.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
						return d[O] ? d(b) : d.length > 1 ? (c = [a, a, "", b], A.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
							for (var e, f = d(a, b), g = f.length; g--;) e = da.call(a, f[g]), a[e] = !(c[e] = f[g])
						}) : function(a) {
							return d(a, 0, c)
						}) : d
					}
				},
				pseudos: {
					not: e(function(a) {
						var b = [],
							c = [],
							d = D(a.replace(la, "$1"));
						return d[O] ? e(function(a, b, c, e) {
							for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), !c.pop()
						}
					}),
					has: e(function(a) {
						return function(b) {
							return g(a, b).length > 0
						}
					}),
					contains: e(function(a) {
						return function(b) {
							return (b.textContent || b.innerText || B(b)).indexOf(a) > -1
						}
					}),
					lang: e(function(a) {
						return ra.test(a || "") || g.error("unsupported lang: " + a), a = a.replace(ya, za).toLowerCase(),
							function(b) {
								var c;
								do
									if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
								while ((b = b.parentNode) && 1 === b.nodeType);
								return !1
							}
					}),
					target: function(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function(a) {
						return a === I
					},
					focus: function(a) {
						return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !!a.checked || "option" === b && !!a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling)
							if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
						return !0
					},
					parent: function(a) {
						return !A.pseudos.empty(a)
					},
					header: function(a) {
						return wa.test(a.nodeName)
					},
					input: function(a) {
						return va.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
					},
					first: m(function() {
						return [0]
					}),
					last: m(function(a, b) {
						return [b - 1]
					}),
					eq: m(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: m(function(a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: m(function(a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a;

					}),
					lt: m(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: m(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			};
			for (y in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) A.pseudos[y] = k(y);
			for (y in {
					submit: !0,
					reset: !0
				}) A.pseudos[y] = l(y);
			D = g.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = V[a + " "];
				if (!f) {
					for (b || (b = n(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
					f = V(a, u(e, d))
				}
				return f
			}, A.pseudos.nth = A.pseudos.eq, x.prototype = A.filters = A.pseudos, A.setFilters = new x, Q.sortStable = O.split("").sort(X).join("") === O, G(), [0, 0].sort(X), Q.detectDuplicates = W, f(function(a) {
				if (a.innerHTML = "<a href='#'></a>", "#" !== a.firstChild.getAttribute("href"))
					for (var b = "type|href|height|width".split("|"), c = b.length; c--;) A.attrHandle[b[c]] = j
			}), f(function(a) {
				if (null != a.getAttribute("disabled"))
					for (var b = ea.split("|"), c = b.length; c--;) A.attrHandle[b[c]] = i
			}), fa.find = g, fa.expr = g.selectors, fa.expr[":"] = fa.expr.pseudos, fa.unique = g.uniqueSort, fa.text = g.getText, fa.isXMLDoc = g.isXML, fa.contains = g.contains
		}(a);
	var oa = {};
	fa.Callbacks = function(a) {
		a = "string" == typeof a ? oa[a] || d(a) : fa.extend({}, a);
		var c, e, f, g, h, i, j = [],
			k = !a.once && [],
			l = function(b) {
				for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
					if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
						c = !1;
						break
					}
				f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
			},
			m = {
				add: function() {
					if (j) {
						var b = j.length;
						! function d(b) {
							fa.each(b, function(b, c) {
								var e = fa.type(c);
								"function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
							})
						}(arguments), f ? h = j.length : c && (g = b, l(c))
					}
					return this
				},
				remove: function() {
					return j && fa.each(arguments, function(a, b) {
						for (var c;
							(c = fa.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
					}), this
				},
				has: function(a) {
					return a ? fa.inArray(a, j) > -1 : !(!j || !j.length)
				},
				empty: function() {
					return j = [], h = 0, this
				},
				disable: function() {
					return j = k = c = b, this
				},
				disabled: function() {
					return !j
				},
				lock: function() {
					return k = b, c || m.disable(), this
				},
				locked: function() {
					return !k
				},
				fireWith: function(a, b) {
					return b = b || [], b = [a, b.slice ? b.slice() : b], !j || e && !k || (f ? k.push(b) : l(b)), this
				},
				fire: function() {
					return m.fireWith(this, arguments), this
				},
				fired: function() {
					return !!e
				}
			};
		return m
	}, fa.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", fa.Callbacks("once memory"), "resolved"],
					["reject", "fail", fa.Callbacks("once memory"), "rejected"],
					["notify", "progress", fa.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return fa.Deferred(function(c) {
							fa.each(b, function(b, f) {
								var g = f[0],
									h = fa.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = h && h.apply(this, arguments);
									a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? fa.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, fa.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b, c, d, e = 0,
				f = aa.call(arguments),
				g = f.length,
				h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : fa.Deferred(),
				j = function(a, c, d) {
					return function(e) {
						c[a] = this, d[a] = arguments.length > 1 ? aa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	}), fa.support = function(b) {
		var c = T.createElement("input"),
			d = T.createDocumentFragment(),
			e = T.createElement("div"),
			f = T.createElement("select"),
			g = f.appendChild(T.createElement("option"));
		return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fa(function() {
			var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				g = T.getElementsByTagName("body")[0];
			g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fa.swap(g, null != g.style.zoom ? {
				zoom: 1
			} : {}, function() {
				b.boxSizing = 4 === e.offsetWidth
			}), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
				width: "4px"
			}).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
		}), b) : b
	}({});
	var pa, qa, ra = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		sa = /([A-Z])/g;
	e.uid = 1, e.accepts = function(a) {
		return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
	}, e.prototype = {
		key: function(a) {
			if (!e.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = e.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, fa.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function(a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (fa.isEmptyObject(f)) this.cache[e] = b;
			else
				for (d in b) f[d] = b[d]
		},
		get: function(a, c) {
			var d = this.cache[this.key(a)];
			return c === b ? d : d[c]
		},
		access: function(a, c, d) {
			return c === b || c && "string" == typeof c && d === b ? this.get(a, c) : (this.set(a, c, d), d !== b ? d : c)
		},
		remove: function(a, c) {
			var d, e, f = this.key(a),
				g = this.cache[f];
			if (c === b) this.cache[f] = {};
			else {
				fa.isArray(c) ? e = c.concat(c.map(fa.camelCase)) : c in g ? e = [c] : (e = fa.camelCase(c), e = e in g ? [e] : e.match(ha) || []), d = e.length;
				for (; d--;) delete g[e[d]]
			}
		},
		hasData: function(a) {
			return !fa.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function(a) {
			delete this.cache[this.key(a)]
		}
	}, pa = new e, qa = new e, fa.extend({
		acceptData: e.accepts,
		hasData: function(a) {
			return pa.hasData(a) || qa.hasData(a)
		},
		data: function(a, b, c) {
			return pa.access(a, b, c)
		},
		removeData: function(a, b) {
			pa.remove(a, b)
		},
		_data: function(a, b, c) {
			return qa.access(a, b, c)
		},
		_removeData: function(a, b) {
			qa.remove(a, b)
		}
	}), fa.fn.extend({
		data: function(a, c) {
			var d, e, g = this[0],
				h = 0,
				i = null;
			if (a === b) {
				if (this.length && (i = pa.get(g), 1 === g.nodeType && !qa.get(g, "hasDataAttrs"))) {
					for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fa.camelCase(e.substring(5)), f(g, e, i[e]));
					qa.set(g, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof a ? this.each(function() {
				pa.set(this, a)
			}) : fa.access(this, function(c) {
				var d, e = fa.camelCase(a);
				if (g && c === b) {
					if (d = pa.get(g, a), d !== b) return d;
					if (d = pa.get(g, e), d !== b) return d;
					if (d = f(g, e, b), d !== b) return d
				} else this.each(function() {
					var d = pa.get(this, e);
					pa.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pa.set(this, a, c)
				})
			}, null, c, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				pa.remove(this, a)
			})
		}
	}), fa.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = qa.get(a, b), c && (!d || fa.isArray(c) ? d = qa.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = fa.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = fa._queueHooks(a, b),
				g = function() {
					fa.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return qa.get(a, c) || qa.access(a, c, {
				empty: fa.Callbacks("once memory").add(function() {
					qa.remove(a, [b + "queue", c])
				})
			})
		}
	}), fa.fn.extend({
		queue: function(a, c) {
			var d = 2;
			return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fa.queue(this[0], a) : c === b ? this : this.each(function() {
				var b = fa.queue(this, a, c);
				fa._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fa.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				fa.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = fa.fx ? fa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			var d, e = 1,
				f = fa.Deferred(),
				g = this,
				h = this.length,
				i = function() {
					--e || f.resolveWith(g, [g])
				};
			for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = qa.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
			return i(), f.promise(c)
		}
	});
	var ta, ua, va = /[\t\r\n]/g,
		wa = /\r/g,
		xa = /^(?:input|select|textarea|button)$/i;
	fa.fn.extend({
		attr: function(a, b) {
			return fa.access(this, fa.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				fa.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return fa.access(this, fa.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return this.each(function() {
				delete this[fa.propFix[a] || a]
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g = 0,
				h = this.length,
				i = "string" == typeof a && a;
			if (fa.isFunction(a)) return this.each(function(b) {
				fa(this).addClass(a.call(this, b, this.className))
			});
			if (i)
				for (b = (a || "").match(ha) || []; h > g; g++)
					if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : " ")) {
						for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						c.className = fa.trim(d)
					}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g = 0,
				h = this.length,
				i = 0 === arguments.length || "string" == typeof a && a;
			if (fa.isFunction(a)) return this.each(function(b) {
				fa(this).removeClass(a.call(this, b, this.className))
			});
			if (i)
				for (b = (a || "").match(ha) || []; h > g; g++)
					if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : "")) {
						for (f = 0; e = b[f++];)
							for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
						c.className = a ? fa.trim(d) : ""
					}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = "boolean" == typeof b;
			return this.each(fa.isFunction(a) ? function(c) {
				fa(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function() {
				if ("string" === c)
					for (var e, f = 0, g = fa(this), h = b, i = a.match(ha) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
				else(c === R || "boolean" === c) && (this.className && qa.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qa.get(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(va, " ").indexOf(b) >= 0) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, f = this[0]; {
				if (arguments.length) return e = fa.isFunction(a), this.each(function(d) {
					var f, g = fa(this);
					1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fa.isArray(f) && (f = fa.map(f, function(a) {
						return null == a ? "" : a + ""
					})), c = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
				});
				if (f) return c = fa.valHooks[f.type] || fa.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wa, "") : null == d ? "" : d)
			}
		}
	}), fa.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (fa.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fa.nodeName(c.parentNode, "optgroup"))) {
							if (b = fa(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function(a, b) {
					for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa(d).val(), f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		},
		attr: function(a, c, d) {
			var e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === R ? fa.prop(a, c, d) : (1 === g && fa.isXMLDoc(a) || (c = c.toLowerCase(), e = fa.attrHooks[c] || (fa.expr.match["boolean"].test(c) ? ua : ta)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fa.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void fa.removeAttr(a, c))
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(ha);
			if (f && 1 === a.nodeType)
				for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match["boolean"].test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!fa.support.radioValue && "radio" === b && fa.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !fa.isXMLDoc(a), g && (c = fa.propFix[c] || c, f = fa.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					return a.hasAttribute("tabindex") || xa.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), ua = {
		set: function(a, b, c) {
			return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, fa.each(fa.expr.match["boolean"].source.match(/\w+/g), function(a, c) {
		var d = fa.expr.attrHandle[c] || fa.find.attr;
		fa.expr.attrHandle[c] = function(a, c, e) {
			var f = fa.expr.attrHandle[c],
				g = e ? b : (fa.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
			return fa.expr.attrHandle[c] = f, g
		}
	}), fa.support.optSelected || (fa.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		fa.propFix[this.toLowerCase()] = this
	}), fa.each(["radio", "checkbox"], function() {
		fa.valHooks[this] = {
			set: function(a, b) {
				return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) >= 0 : void 0
			}
		}, fa.support.checkOn || (fa.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var ya = /^key/,
		za = /^(?:mouse|contextmenu)|click/,
		Aa = /^(?:focusinfocus|focusoutblur)$/,
		Ba = /^([^.]*)(?:\.(.+)|)$/;
	fa.event = {
		global: {},
		add: function(a, c, d, e, f) {
			var g, h, i, j, k, l, m, n, o, p, q, r = qa.get(a);
			if (r) {
				for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fa.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
						return typeof fa === R || a && fa.event.triggered === a.type ? b : fa.event.dispatch.apply(h.elem, arguments)
					}, h.elem = a), c = (c || "").match(ha) || [""], k = c.length; k--;) i = Ba.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fa.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fa.event.special[o] || {}, l = fa.extend({
					type: o,
					origType: q,
					data: e,
					handler: d,
					guid: d.guid,
					selector: f,
					needsContext: f && fa.expr.match.needsContext.test(f),
					namespace: p.join(".")
				}, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fa.event.global[o] = !0);
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = qa.hasData(a) && qa.get(a);
			if (q && (i = q.events)) {
				for (b = (b || "").match(ha) || [""], j = b.length; j--;)
					if (h = Ba.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
					} else
						for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
				fa.isEmptyObject(i) && (delete q.handle, qa.remove(a, "events"))
			}
		},
		trigger: function(c, d, e, f) {
			var g, h, i, j, k, l, m, n = [e || T],
				o = da.call(c, "type") ? c.type : c,
				p = da.call(c, "namespace") ? c.namespace.split(".") : [];
			if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Aa.test(o + fa.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fa.expando] ? c : new fa.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fa.makeArray(d, [c]), m = fa.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
				if (!f && !m.noBubble && !fa.isWindow(e)) {
					for (j = m.delegateType || o, Aa.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), i = h;
					i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
				}
				for (g = 0;
					(h = n[g++]) && !c.isPropagationStopped();) c.type = g > 1 ? j : m.bindType || o, l = (qa.get(h, "events") || {})[c.type] && qa.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fa.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
				return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fa.acceptData(e) || k && fa.isFunction(e[o]) && !fa.isWindow(e) && (i = e[k], i && (e[k] = null), fa.event.triggered = o, e[o](), fa.event.triggered = b, i && (e[k] = i)), c.result
			}
		},
		dispatch: function(a) {
			a = fa.event.fix(a);
			var c, d, e, f, g, h = [],
				i = aa.call(arguments),
				j = (qa.get(this, "events") || {})[a.type] || [],
				k = fa.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				for (h = fa.event.handlers.call(this, a, j), c = 0;
					(f = h[c++]) && !a.isPropagationStopped();)
					for (a.currentTarget = f.elem, d = 0;
						(g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fa.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, c) {
			var d, e, f, g, h = [],
				i = c.delegateCount,
				j = a.target;
			if (i && j.nodeType && (!a.button || "click" !== a.type))
				for (; j !== this; j = j.parentNode || this)
					if (j.disabled !== !0 || "click" !== a.type) {
						for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fa(f, this).index(j) >= 0 : fa.find(f, this, null, [j]).length), e[f] && e.push(g);
						e.length && h.push({
							elem: j,
							handlers: e
						})
					}
			return i < c.length && h.push({
				elem: this,
				handlers: c.slice(i)
			}), h
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, c) {
				var d, e, f, g = c.button;
				return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		fix: function(a) {
			if (a[fa.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = za.test(e) ? this.mouseHooks : ya.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== i() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === i() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return fa.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					a.result !== b && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = fa.extend(new fa.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, fa.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, fa.Event = function(a, b) {
		return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
	}, fa.Event.prototype = {
		isDefaultPrevented: h,
		isPropagationStopped: h,
		isImmediatePropagationStopped: h,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = g, this.stopPropagation()
		}
	}, fa.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		fa.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), fa.support.focusinBubbles || fa.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = 0,
			d = function(a) {
				fa.event.simulate(b, a.target, fa.event.fix(a), !0)
			};
		fa.event.special[b] = {
			setup: function() {
				0 === c++ && T.addEventListener(a, d, !0)
			},
			teardown: function() {
				0 === --c && T.removeEventListener(a, d, !0)
			}
		}
	}), fa.fn.extend({
		on: function(a, c, d, e, f) {
			var g, i;
			if ("object" == typeof a) {
				"string" != typeof c && (d = d || c, c = b);
				for (i in a) this.on(i, c, d, a[i], f);
				return this
			}
			if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = h;
			else if (!e) return this;
			return 1 === f && (g = e, e = function(a) {
				return fa().off(a), g.apply(this, arguments)
			}, e.guid = g.guid || (g.guid = fa.guid++)), this.each(function() {
				fa.event.add(this, a, e, d, c)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, c, d) {
			var e, f;
			if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fa(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
			if ("object" == typeof a) {
				for (f in a) this.off(f, c, a[f]);
				return this
			}
			return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function() {
				fa.event.remove(this, a, d, c)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				fa.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? fa.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Ca = /^.[^:#\[\.,]*$/,
		Da = fa.expr.match.needsContext,
		Ea = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	fa.fn.extend({
		find: function(a) {
			var b, c, d, e = this.length;
			if ("string" != typeof a) return b = this, this.pushStack(fa(a).filter(function() {
				for (d = 0; e > d; d++)
					if (fa.contains(b[d], this)) return !0
			}));
			for (c = [], d = 0; e > d; d++) fa.find(a, this[d], c);
			return c = this.pushStack(e > 1 ? fa.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
		},
		has: function(a) {
			var b = fa(a, this),
				c = b.length;
			return this.filter(function() {
				for (var a = 0; c > a; a++)
					if (fa.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(k(this, a || [], !0))
		},
		filter: function(a) {
			return this.pushStack(k(this, a || [], !1))
		},
		is: function(a) {
			return !!a && ("string" == typeof a ? Da.test(a) ? fa(a, this.context).index(this[0]) >= 0 : fa.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = Da.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
						c = f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? fa.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? ba.call(fa(a), this[0]) : ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			var c = "string" == typeof a ? fa(a, b) : fa.makeArray(a && a.nodeType ? [a] : a),
				d = fa.merge(this.get(), c);
			return this.pushStack(fa.unique(d))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), fa.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return fa.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return fa.dir(a, "parentNode", c)
		},
		next: function(a) {
			return j(a, "nextSibling")
		},
		prev: function(a) {
			return j(a, "previousSibling")
		},
		nextAll: function(a) {
			return fa.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return fa.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return fa.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return fa.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return fa.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return fa.sibling(a.firstChild)
		},
		contents: function(a) {
			return fa.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fa.merge([], a.childNodes)
		}
	}, function(a, b) {
		fa.fn[a] = function(c, d) {
			var e = fa.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (Ea[a] || fa.unique(e), "p" === a[0] && e.reverse()), this.pushStack(e)
		}
	}), fa.extend({
		filter: function(a, b, c) {
			var d = b[0];
			return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
				return 1 === a.nodeType
			}))
		},
		dir: function(a, c, d) {
			for (var e = [], f = d !== b;
				(a = a[c]) && 9 !== a.nodeType;)
				if (1 === a.nodeType) {
					if (f && fa(a).is(d)) break;
					e.push(a)
				}
			return e
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var Fa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Ga = /<([\w:]+)/,
		Ha = /<|&#?\w+;/,
		Ia = /<(?:script|style|link)/i,
		Ja = /^(?:checkbox|radio)$/i,
		Ka = /checked\s*(?:[^=]|=\s*.checked.)/i,
		La = /^$|\/(?:java|ecma)script/i,
		Ma = /^true\/(.*)/,
		Na = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Oa = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Oa.optgroup = Oa.option, Oa.tbody = Oa.tfoot = Oa.colgroup = Oa.caption = Oa.col = Oa.thead, Oa.th = Oa.td, fa.fn.extend({
		text: function(a) {
			return fa.access(this, function(a) {
				return a === b ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = l(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = l(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(q(a, !1)), a.textContent = "");
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return fa.clone(this, a, b)
			})
		},
		html: function(a) {
			return fa.access(this, function(a) {
				var c = this[0] || {},
					d = 0,
					e = this.length;
				if (a === b && 1 === c.nodeType) return c.innerHTML;
				if ("string" == typeof a && !Ia.test(a) && !Oa[(Ga.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Fa, "<$1></$2>");
					try {
						for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fa.cleanData(q(c, !1)), c.innerHTML = a);
						c = 0
					} catch (f) {}
				}
				c && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = fa.map(this, function(a) {
					return [a.nextSibling, a.parentNode]
				}),
				b = 0;
			return this.domManip(arguments, function(c) {
				var d = a[b++],
					e = a[b++];
				e && (fa(this).remove(), e.insertBefore(c, d))
			}, !0), b ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b, c) {
			a = $.apply([], a);
			var d, e, f, g, h, i, j = 0,
				k = this.length,
				l = this,
				o = k - 1,
				p = a[0],
				r = fa.isFunction(p);
			if (r || !(1 >= k || "string" != typeof p || fa.support.checkClone) && Ka.test(p)) return this.each(function(d) {
				var e = l.eq(d);
				r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
			});
			if (k && (d = fa.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
				for (f = fa.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fa.clone(h, !0, !0), g && fa.merge(f, q(h, "script"))), b.call(this[j], h, j);
				if (g)
					for (i = f[f.length - 1].ownerDocument, fa.map(f, n), j = 0; g > j; j++) h = f[j], La.test(h.type || "") && !qa.access(h, "globalEval") && fa.contains(i, h) && (h.src ? fa._evalUrl(h.src) : fa.globalEval(h.textContent.replace(Na, "")))
			}
			return this
		}
	}), fa.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		fa.fn[a] = function(a) {
			for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), _.apply(d, c.get());
			return this.pushStack(d)
		}
	}), fa.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = fa.contains(a.ownerDocument, a);
			if (!(fa.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
				for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]);
				else p(a, h);
			return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
				if (e = a[k], e || 0 === e)
					if ("object" === fa.type(e)) fa.merge(n, e.nodeType ? [e] : e);
					else if (Ha.test(e)) {
				for (f = f || m.appendChild(b.createElement("div")), g = (Ga.exec(e) || ["", ""])[1].toLowerCase(), h = Oa[g] || Oa._default, f.innerHTML = h[1] + e.replace(Fa, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.firstChild;
				fa.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
			} else n.push(b.createTextNode(e));
			for (m.textContent = "", k = 0; e = n[k++];)
				if ((!d || -1 === fa.inArray(e, d)) && (i = fa.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
					for (j = 0; e = f[j++];) La.test(e.type || "") && c.push(e);
			return m
		},
		cleanData: function(a) {
			for (var b, c, d, e = a.length, f = 0, g = fa.event.special; e > f; f++) {
				if (c = a[f], fa.acceptData(c) && (b = qa.access(c)))
					for (d in b.events) g[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
				pa.discard(c), qa.discard(c)
			}
		},
		_evalUrl: function(a) {
			return fa.ajax({
				url: a,
				type: "GET",
				dataType: "text",
				async: !1,
				global: !1,
				success: fa.globalEval
			})
		}
	}), fa.fn.extend({
		wrapAll: function(a) {
			var b;
			return fa.isFunction(a) ? this.each(function(b) {
				fa(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
				for (var a = this; a.firstElementChild;) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function(a) {
			return this.each(fa.isFunction(a) ? function(b) {
				fa(this).wrapInner(a.call(this, b))
			} : function() {
				var b = fa(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = fa.isFunction(a);
			return this.each(function(c) {
				fa(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pa, Qa, Ra = /^(none|table(?!-c[ea]).+)/,
		Sa = /^margin/,
		Ta = new RegExp("^(" + ga + ")(.*)$", "i"),
		Ua = new RegExp("^(" + ga + ")(?!px)[a-z%]+$", "i"),
		Va = new RegExp("^([+-])=(" + ga + ")", "i"),
		Wa = {
			BODY: "block"
		},
		Xa = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ya = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Za = ["Top", "Right", "Bottom", "Left"],
		$a = ["Webkit", "O", "Moz", "ms"];
	fa.fn.extend({
		css: function(a, c) {
			return fa.access(this, function(a, c, d) {
				var e, f, g = {},
					h = 0;
				if (fa.isArray(c)) {
					for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fa.css(a, c[h], !1, e);
					return g
				}
				return d !== b ? fa.style(a, c, d) : fa.css(a, c)
			}, a, c, arguments.length > 1)
		},
		show: function() {
			return v(this, !0)
		},
		hide: function() {
			return v(this)
		},
		toggle: function(a) {
			var b = "boolean" == typeof a;
			return this.each(function() {
				(b ? a : t(this)) ? fa(this).show(): fa(this).hide()
			})
		}
	}), fa.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = Pa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(a, c, d, e) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var f, g, h, i = fa.camelCase(c),
					j = a.style;
				return c = fa.cssProps[i] || (fa.cssProps[i] = s(j, i)), h = fa.cssHooks[c] || fa.cssHooks[i], d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Va.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fa.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fa.cssNumber[i] || (d += "px"), fa.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
			}
		},
		css: function(a, c, d, e) {
			var f, g, h, i = fa.camelCase(c);
			return c = fa.cssProps[i] || (fa.cssProps[i] = s(a.style, i)), h = fa.cssHooks[c] || fa.cssHooks[i], h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Pa(a, c, e)), "normal" === f && c in Ya && (f = Ya[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fa.isNumeric(g) ? g || 0 : f) : f
		}
	}), Pa = function(a, c, d) {
		var e, f, g, h = d || u(a),
			i = h ? h.getPropertyValue(c) || h[c] : b,
			j = a.style;
		return h && ("" !== i || fa.contains(a.ownerDocument, a) || (i = fa.style(a, c)), Ua.test(i) && Sa.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
	}, fa.each(["height", "width"], function(a, b) {
		fa.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? 0 === a.offsetWidth && Ra.test(fa.css(a, "display")) ? fa.swap(a, Xa, function() {
					return y(a, b, d)
				}) : y(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && u(a);
				return w(a, c, d ? x(a, b, d, fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), fa(function() {
		fa.support.reliableMarginRight || (fa.cssHooks.marginRight = {
			get: function(a, b) {
				return b ? fa.swap(a, {
					display: "inline-block"
				}, Pa, [a, "marginRight"]) : void 0
			}
		}), !fa.support.pixelPosition && fa.fn.position && fa.each(["top", "left"], function(a, b) {
			fa.cssHooks[b] = {
				get: function(a, c) {
					return c ? (c = Pa(a, b), Ua.test(c) ? fa(a).position()[b] + "px" : c) : void 0
				}
			}
		})
	}), fa.expr && fa.expr.filters && (fa.expr.filters.hidden = function(a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, fa.expr.filters.visible = function(a) {
		return !fa.expr.filters.hidden(a)
	}), fa.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		fa.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Za[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Sa.test(a) || (fa.cssHooks[a + b].set = w)
	});
	var _a = /%20/g,
		ab = /\[\]$/,
		bb = /\r?\n/g,
		cb = /^(?:submit|button|image|reset|file)$/i,
		db = /^(?:input|select|textarea|keygen)/i;
	fa.fn.extend({
		serialize: function() {
			return fa.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = fa.prop(this, "elements");
				return a ? fa.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !fa(this).is(":disabled") && db.test(this.nodeName) && !cb.test(a) && (this.checked || !Ja.test(a))
			}).map(function(a, b) {
				var c = fa(this).val();
				return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(bb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(bb, "\r\n")
				}
			}).get()
		}
	}), fa.param = function(a, c) {
		var d, e = [],
			f = function(a, b) {
				b = fa.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (c === b && (c = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
			f(this.name, this.value)
		});
		else
			for (d in a) B(d, a[d], c, f);
		return e.join("&").replace(_a, "+")
	}, fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		fa.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), fa.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var eb, fb, gb = fa.now(),
		hb = /\?/,
		ib = /#.*$/,
		jb = /([?&])_=[^&]*/,
		kb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		mb = /^(?:GET|HEAD)$/,
		nb = /^\/\//,
		ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		pb = fa.fn.load,
		qb = {},
		rb = {},
		sb = "*/".concat("*");
	try {
		fb = S.href
	} catch (tb) {
		fb = T.createElement("a"), fb.href = "", fb = fb.href
	}
	eb = ob.exec(fb.toLowerCase()) || [], fa.fn.load = function(a, c, d) {
		if ("string" != typeof a && pb) return pb.apply(this, arguments);
		var e, f, g, h = this,
			i = a.indexOf(" ");
		return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fa.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fa.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: c
		}).done(function(a) {
			g = arguments, h.html(e ? fa("<div>").append(fa.parseHTML(a)).find(e) : a)
		}).complete(d && function(a, b) {
			h.each(d, g || [a.responseText, b, a])
		}), this
	}, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		fa.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), fa.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: fb,
			type: "GET",
			isLocal: lb.test(eb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": sb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": fa.parseJSON,
				"text xml": fa.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? E(E(a, fa.ajaxSettings), b) : E(fa.ajaxSettings, a)
		},
		ajaxPrefilter: C(qb),
		ajaxTransport: C(rb),
		ajax: function(a, c) {
			function d(a, c, d, h) {
				var j, l, s, t, v, x = c;
				2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === a ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (c = a, a = b), c = c || {};
			var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c),
				n = m.context || m,
				o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
				p = fa.Deferred(),
				q = fa.Callbacks("once memory"),
				r = m.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === u) {
							if (!h)
								for (h = {}; b = kb.exec(g);) h[b[1].toLowerCase()] = b[2];
							b = h[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === u ? g : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function(a) {
						return u || (m.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a)
							if (2 > u)
								for (b in a) r[b] = [r[b], a[b]];
							else w.always(a[w.status]);
						return this
					},
					abort: function(a) {
						var b = a || v;
						return e && e.abort(b), d(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || fb) + "").replace(ib, "").replace(nb, eb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(ha) || [""], null == m.crossDomain && (j = ob.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === eb[1] && j[2] === eb[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (eb[3] || ("http:" === eb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), D(qb, m, c, w), 2 === u) return w;
			k = m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !mb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (hb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = jb.test(f) ? f.replace(jb, "$1_=" + gb++) : f + (hb.test(f) ? "&" : "?") + "_=" + gb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + sb + "; q=0.01" : "") : m.accepts["*"]);
			for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
			if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
			v = "abort";
			for (l in {
					success: 1,
					error: 1,
					complete: 1
				}) w[l](m[l]);
			if (e = D(rb, m, c, w)) {
				w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
					w.abort("timeout")
				}, m.timeout));
				try {
					u = 1, e.send(s, d)
				} catch (x) {
					if (!(2 > u)) throw x;
					d(-1, x)
				}
			} else d(-1, "No Transport");
			return w
		},
		getJSON: function(a, b, c) {
			return fa.get(a, b, c, "json")
		},
		getScript: function(a, c) {
			return fa.get(a, b, c, "script")
		}
	}), fa.each(["get", "post"], function(a, c) {
		fa[c] = function(a, d, e, f) {
			return fa.isFunction(d) && (f = f || e, e = d, d = b), fa.ajax({
				url: a,
				type: c,
				dataType: f,
				data: d,
				success: e
			})
		}
	}), fa.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return fa.globalEval(a), a
			}
		}
	}), fa.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), fa.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function(d, e) {
					b = fa("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), T.head.appendChild(b[0])
				},
				abort: function() {
					c && c()
				}
			}
		}
	});
	var ub = [],
		vb = /(=)\?(?=&|$)|\?\?/;
	fa.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = ub.pop() || fa.expando + "_" + gb++;
			return this[a] = !0, a
		}
	}), fa.ajaxPrefilter("json jsonp", function(c, d, e) {
		var f, g, h, i = c.jsonp !== !1 && (vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && vb.test(c.data) && "data");
		return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fa.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(vb, "$1" + f) : c.jsonp !== !1 && (c.url += (hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
			return h || fa.error(f + " was not called"), h[0]
		}, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
			h = arguments
		}, e.always(function() {
			a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, ub.push(f)), h && fa.isFunction(g) && g(h[0]), h = g = b
		}), "script") : void 0
	}), fa.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var wb = fa.ajaxSettings.xhr(),
		xb = {
			0: 200,
			1223: 204
		},
		yb = 0,
		zb = {};
	a.ActiveXObject && fa(a).on("unload", function() {
		for (var a in zb) zb[a]();
		zb = b
	}), fa.support.cors = !!wb && "withCredentials" in wb, fa.support.ajax = wb = !!wb, fa.ajaxTransport(function(a) {
		var c;
		return fa.support.cors || wb && !a.crossDomain ? {
			send: function(d, e) {
				var f, g, h = a.xhr();
				if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (f in a.xhrFields) h[f] = a.xhrFields[f];
				a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
				for (f in d) h.setRequestHeader(f, d[f]);
				c = function(a) {
					return function() {
						c && (delete zb[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(xb[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
							text: h.responseText
						} : b, h.getAllResponseHeaders()))
					}
				}, h.onload = c(), h.onerror = c("error"), c = zb[g = yb++] = c("abort"), h.send(a.hasContent && a.data || null)
			},
			abort: function() {
				c && c()
			}
		} : void 0
	});
	var Ab, Bb, Cb = /^(?:toggle|show|hide)$/,
		Db = new RegExp("^(?:([+-])=|)(" + ga + ")([a-z%]*)$", "i"),
		Eb = /queueHooks$/,
		Fb = [L],
		Gb = {
			"*": [function(a, b) {
				var c, d, e = this.createTween(a, b),
					f = Db.exec(b),
					g = e.cur(),
					h = +g || 0,
					i = 1,
					j = 20;
				if (f) {
					if (c = +f[2], d = f[3] || (fa.cssNumber[a] ? "" : "px"), "px" !== d && h) {
						h = fa.css(e.elem, a, !0) || c || 1;
						do i = i || ".5", h /= i, fa.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
					}
					e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
				}
				return e
			}]
		};
	fa.Animation = fa.extend(J, {
		tweener: function(a, b) {
			fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Gb[c] = Gb[c] || [], Gb[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? Fb.unshift(a) : Fb.push(a)
		}
	}), fa.Tween = M, M.prototype = {
		constructor: M,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = M.propHooks[this.prop];
			return a && a.get ? a.get(this) : M.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = M.propHooks[this.prop];
			return this.pos = b = this.options.duration ? fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
		}
	}, M.prototype.init.prototype = M.prototype, M.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, fa.each(["toggle", "show", "hide"], function(a, b) {
		var c = fa.fn[b];
		fa.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
		}
	}), fa.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(t).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = fa.isEmptyObject(a),
				f = fa.speed(b, c, d),
				g = function() {
					var b = J(this, fa.extend({}, a), f);
					g.finish = function() {
						b.stop(!0)
					}, (e || qa.get(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, c, d) {
			var e = function(a) {
				var b = a.stop;
				delete a.stop, b(d)
			};
			return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					c = null != a && a + "queueHooks",
					f = fa.timers,
					g = qa.get(this);
				if (c) g[c] && g[c].stop && e(g[c]);
				else
					for (c in g) g[c] && g[c].stop && Eb.test(c) && e(g[c]);
				for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
				(b || !d) && fa.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"), this.each(function() {
				var b, c = qa.get(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = fa.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, fa.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), fa.each({
		slideDown: N("show"),
		slideUp: N("hide"),
		slideToggle: N("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		fa.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), fa.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? fa.extend({}, a) : {
			complete: c || !c && b || fa.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !fa.isFunction(b) && b
		};
		return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
		}, d
	}, fa.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, fa.timers = [], fa.fx = M.prototype.init, fa.fx.tick = function() {
		var a, c = fa.timers,
			d = 0;
		for (Ab = fa.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
		c.length || fa.fx.stop(), Ab = b
	}, fa.fx.timer = function(a) {
		a() && fa.timers.push(a) && fa.fx.start()
	}, fa.fx.interval = 13, fa.fx.start = function() {
		Bb || (Bb = setInterval(fa.fx.tick, fa.fx.interval))
	}, fa.fx.stop = function() {
		clearInterval(Bb), Bb = null
	}, fa.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, fa.fx.step = {}, fa.expr && fa.expr.filters && (fa.expr.filters.animated = function(a) {
		return fa.grep(fa.timers, function(b) {
			return a === b.elem
		}).length
	}), fa.fn.offset = function(a) {
		if (arguments.length) return a === b ? this : this.each(function(b) {
			fa.offset.setOffset(this, a, b)
		});
		var c, d, e = this[0],
			f = {
				top: 0,
				left: 0
			},
			g = e && e.ownerDocument;
		if (g) return c = g.documentElement, fa.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
			top: f.top + d.pageYOffset - c.clientTop,
			left: f.left + d.pageXOffset - c.clientLeft
		}) : f
	}, fa.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = fa.css(a, "position"),
				l = fa(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, fa.fn.extend({
		position: function() {
			if (this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - fa.css(c, "marginTop", !0),
					left: b.left - d.left - fa.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || U; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position");) a = a.offsetParent;
				return a || U
			})
		}
	}), fa.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(c, d) {
		var e = "pageYOffset" === d;
		fa.fn[c] = function(f) {
			return fa.access(this, function(c, f, g) {
				var h = O(c);
				return g === b ? h ? h[d] : c[f] : void(h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g)
			}, c, f, arguments.length, null)
		}
	}), fa.each({
		Height: "height",
		Width: "width"
	}, function(a, c) {
		fa.each({
			padding: "inner" + a,
			content: c,
			"": "outer" + a
		}, function(d, e) {
			fa.fn[e] = function(e, f) {
				var g = arguments.length && (d || "boolean" != typeof e),
					h = d || (e === !0 || f === !0 ? "margin" : "border");
				return fa.access(this, function(c, d, e) {
					var f;
					return fa.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fa.css(c, d, h) : fa.style(c, d, e, h)
				}, c, g ? e : b, g, null)
			}
		})
	}), fa.fn.size = function() {
		return this.length
	}, fa.fn.andSelf = fa.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = fa : "function" == typeof define && define.amd && define("jquery", [], function() {
		return fa
	}), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fa)
}(window),
function(a) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	function b(b) {
		return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
			var d = a(this),
				e = d.data(B);
			e || (e = new c(this, b), d.data(B, e))
		})
	}

	function c(b, c) {
		function C(b) {
			if (!(ja() || a(b.target).closest(c.excludedElements, Sa).length > 0)) {
				var d, e = b.originalEvent ? b.originalEvent : b,
					f = y ? e.touches[0] : e;
				return Ta = u, y ? Ua = e.touches.length : b.preventDefault(), Ja = 0, Ka = null, Qa = null, La = 0, Ma = 0, Na = 0, Oa = 1, Pa = 0, Va = oa(), Ra = ra(), ha(), !y || Ua === c.fingers || c.fingers === s || R() ? (la(0, f), Wa = Aa(), 2 == Ua && (la(1, e.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)), (c.swipeStatus || c.pinchStatus) && (d = J(e, Ta))) : d = !1, d === !1 ? (Ta = x, J(e, Ta), d) : (c.hold && (ab = setTimeout(a.proxy(function() {
					Sa.trigger("hold", [e.target]), c.hold && (d = c.hold.call(Sa, e, e.target))
				}, this), c.longTapThreshold)), ka(!0), null)
			}
		}

		function D(a) {
			var b = a.originalEvent ? a.originalEvent : a;
			if (Ta !== w && Ta !== x && !ia()) {
				var d, e = y ? b.touches[0] : b,
					f = ma(e);
				if (Xa = Aa(), y && (Ua = b.touches.length), c.hold && clearTimeout(ab), Ta = v, 2 == Ua && (0 == Ma ? (la(1, b.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)) : (ma(b.touches[1]), Na = ua(Va[0].end, Va[1].end), Qa = wa(Va[0].end, Va[1].end)), Oa = va(Ma, Na), Pa = Math.abs(Ma - Na)), Ua === c.fingers || c.fingers === s || !y || R()) {
					if (Ka = za(f.start, f.end), P(a, Ka), Ja = xa(f.start, f.end), La = ta(), pa(Ka, Ja), (c.swipeStatus || c.pinchStatus) && (d = J(b, Ta)), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
						var g = !0;
						if (c.triggerOnTouchLeave) {
							var h = Ba(this);
							g = Ca(f.end, h)
						}!c.triggerOnTouchEnd && g ? Ta = I(v) : c.triggerOnTouchLeave && !g && (Ta = I(w)), (Ta == x || Ta == w) && J(b, Ta)
					}
				} else Ta = x, J(b, Ta);
				d === !1 && (Ta = x, J(b, Ta))
			}
		}

		function E(a) {
			var b = a.originalEvent;
			return y && b.touches.length > 0 ? (ga(), !0) : (ia() && (Ua = Za), Xa = Aa(), La = ta(), M() || !L() ? (Ta = x, J(b, Ta)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ta === v ? (a.preventDefault(), Ta = w, J(b, Ta)) : !c.triggerOnTouchEnd && Y() ? (Ta = w, K(b, Ta, n)) : Ta === v && (Ta = x, J(b, Ta)), ka(!1), null)
		}

		function F() {
			Ua = 0, Xa = 0, Wa = 0, Ma = 0, Na = 0, Oa = 1, ha(), ka(!1)
		}

		function G(a) {
			var b = a.originalEvent;
			c.triggerOnTouchLeave && (Ta = I(w), J(b, Ta))
		}

		function H() {
			Sa.unbind(Ea, C), Sa.unbind(Ia, F), Sa.unbind(Fa, D), Sa.unbind(Ga, E), Ha && Sa.unbind(Ha, G), ka(!1)
		}

		function I(a) {
			var b = a,
				d = O(),
				e = L(),
				f = M();
			return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w, b
		}

		function J(a, b) {
			var c = void 0;
			return V() || U() ? c = K(a, b, l) : (S() || R()) && c !== !1 && (c = K(a, b, m)), ea() && c !== !1 ? c = K(a, b, o) : fa() && c !== !1 ? c = K(a, b, p) : da() && c !== !1 && (c = K(a, b, n)), b === x && F(a), b === w && (y ? 0 == a.touches.length && F(a) : F(a)), c
		}

		function K(b, j, k) {
			var q = void 0;
			if (k == l) {
				if (Sa.trigger("swipeStatus", [j, Ka || null, Ja || 0, La || 0, Ua, Va]), c.swipeStatus && (q = c.swipeStatus.call(Sa, b, j, Ka || null, Ja || 0, La || 0, Ua, Va), q === !1)) return !1;
				if (j == w && T()) {
					if (Sa.trigger("swipe", [Ka, Ja, La, Ua, Va]), c.swipe && (q = c.swipe.call(Sa, b, Ka, Ja, La, Ua, Va), q === !1)) return !1;
					switch (Ka) {
						case d:
							Sa.trigger("swipeLeft", [Ka, Ja, La, Ua, Va]), c.swipeLeft && (q = c.swipeLeft.call(Sa, b, Ka, Ja, La, Ua, Va));
							break;
						case e:
							Sa.trigger("swipeRight", [Ka, Ja, La, Ua, Va]), c.swipeRight && (q = c.swipeRight.call(Sa, b, Ka, Ja, La, Ua, Va));
							break;
						case f:
							Sa.trigger("swipeUp", [Ka, Ja, La, Ua, Va]), c.swipeUp && (q = c.swipeUp.call(Sa, b, Ka, Ja, La, Ua, Va));
							break;
						case g:
							Sa.trigger("swipeDown", [Ka, Ja, La, Ua, Va]), c.swipeDown && (q = c.swipeDown.call(Sa, b, Ka, Ja, La, Ua, Va))
					}
				}
			}
			if (k == m) {
				if (Sa.trigger("pinchStatus", [j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchStatus && (q = c.pinchStatus.call(Sa, b, j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va), q === !1)) return !1;
				if (j == w && Q()) switch (Qa) {
					case h:
						Sa.trigger("pinchIn", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchIn && (q = c.pinchIn.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va));
						break;
					case i:
						Sa.trigger("pinchOut", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchOut && (q = c.pinchOut.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))
				}
			}
			return k == n ? (j === x || j === w) && (clearTimeout(_a), clearTimeout(ab), Z() && !aa() ? ($a = Aa(), _a = setTimeout(a.proxy(function() {
				$a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target))
			}, this), c.doubleTapThreshold)) : ($a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target)))) : k == o ? (j === x || j === w) && (clearTimeout(_a), $a = null, Sa.trigger("doubletap", [b.target]), c.doubleTap && (q = c.doubleTap.call(Sa, b, b.target))) : k == p && (j === x || j === w) && (clearTimeout(_a), $a = null, Sa.trigger("longtap", [b.target]), c.longTap && (q = c.longTap.call(Sa, b, b.target))), q
		}

		function L() {
			var a = !0;
			return null !== c.threshold && (a = Ja >= c.threshold), a
		}

		function M() {
			var a = !1;
			return null !== c.cancelThreshold && null !== Ka && (a = qa(Ka) - Ja >= c.cancelThreshold), a
		}

		function N() {
			return null !== c.pinchThreshold ? Pa >= c.pinchThreshold : !0
		}

		function O() {
			var a;
			return a = c.maxTimeThreshold && La >= c.maxTimeThreshold ? !1 : !0
		}

		function P(a, b) {
			if (c.allowPageScroll === j || R()) a.preventDefault();
			else {
				var h = c.allowPageScroll === k;
				switch (b) {
					case d:
						(c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
						break;
					case e:
						(c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
						break;
					case f:
						(c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
						break;
					case g:
						(c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
				}
			}
		}

		function Q() {
			var a = W(),
				b = X(),
				c = N();
			return a && b && c
		}

		function R() {
			return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
		}

		function S() {
			return !(!Q() || !R())
		}

		function T() {
			var a = O(),
				b = L(),
				c = W(),
				d = X(),
				e = M(),
				f = !e && d && c && b && a;
			return f
		}

		function U() {
			return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
		}

		function V() {
			return !(!T() || !U())
		}

		function W() {
			return Ua === c.fingers || c.fingers === s || !y
		}

		function X() {
			return 0 !== Va[0].end.x
		}

		function Y() {
			return !!c.tap
		}

		function Z() {
			return !!c.doubleTap
		}

		function $() {
			return !!c.longTap
		}

		function _() {
			if (null == $a) return !1;
			var a = Aa();
			return Z() && a - $a <= c.doubleTapThreshold
		}

		function aa() {
			return _()
		}

		function ba() {
			return (1 === Ua || !y) && (isNaN(Ja) || Ja < c.threshold)
		}

		function ca() {
			return La > c.longTapThreshold && t > Ja
		}

		function da() {
			return !(!ba() || !Y())
		}

		function ea() {
			return !(!_() || !Z())
		}

		function fa() {
			return !(!ca() || !$())
		}

		function ga() {
			Ya = Aa(), Za = event.touches.length + 1
		}

		function ha() {
			Ya = 0, Za = 0
		}

		function ia() {
			var a = !1;
			if (Ya) {
				var b = Aa() - Ya;
				b <= c.fingerReleaseThreshold && (a = !0)
			}
			return a
		}

		function ja() {
			return !(Sa.data(B + "_intouch") !== !0)
		}

		function ka(a) {
			a === !0 ? (Sa.bind(Fa, D), Sa.bind(Ga, E), Ha && Sa.bind(Ha, G)) : (Sa.unbind(Fa, D, !1), Sa.unbind(Ga, E, !1), Ha && Sa.unbind(Ha, G, !1)), Sa.data(B + "_intouch", a === !0)
		}

		function la(a, b) {
			var c = void 0 !== b.identifier ? b.identifier : 0;
			return Va[a].identifier = c, Va[a].start.x = Va[a].end.x = b.pageX || b.clientX, Va[a].start.y = Va[a].end.y = b.pageY || b.clientY, Va[a]
		}

		function ma(a) {
			var b = void 0 !== a.identifier ? a.identifier : 0,
				c = na(b);
			return c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
		}

		function na(a) {
			for (var b = 0; b < Va.length; b++)
				if (Va[b].identifier == a) return Va[b]
		}

		function oa() {
			for (var a = [], b = 0; 5 >= b; b++) a.push({
				start: {
					x: 0,
					y: 0
				},
				end: {
					x: 0,
					y: 0
				},
				identifier: 0
			});
			return a
		}

		function pa(a, b) {
			b = Math.max(b, qa(a)), Ra[a].distance = b
		}

		function qa(a) {
			return Ra[a] ? Ra[a].distance : void 0
		}

		function ra() {
			var a = {};
			return a[d] = sa(d), a[e] = sa(e), a[f] = sa(f), a[g] = sa(g), a
		}

		function sa(a) {
			return {
				direction: a,
				distance: 0
			}
		}

		function ta() {
			return Xa - Wa
		}

		function ua(a, b) {
			var c = Math.abs(a.x - b.x),
				d = Math.abs(a.y - b.y);
			return Math.round(Math.sqrt(c * c + d * d))
		}

		function va(a, b) {
			var c = b / a * 1;
			return c.toFixed(2)
		}

		function wa() {
			return 1 > Oa ? i : h
		}

		function xa(a, b) {
			return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
		}

		function ya(a, b) {
			var c = a.x - b.x,
				d = b.y - a.y,
				e = Math.atan2(d, c),
				f = Math.round(180 * e / Math.PI);
			return 0 > f && (f = 360 - Math.abs(f)), f
		}

		function za(a, b) {
			var c = ya(a, b);
			return 45 >= c && c >= 0 ? d : 360 >= c && c >= 315 ? d : c >= 135 && 225 >= c ? e : c > 45 && 135 > c ? g : f
		}

		function Aa() {
			var a = new Date;
			return a.getTime()
		}

		function Ba(b) {
			b = a(b);
			var c = b.offset(),
				d = {
					left: c.left,
					right: c.left + b.outerWidth(),
					top: c.top,
					bottom: c.top + b.outerHeight()
				};
			return d
		}

		function Ca(a, b) {
			return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
		}
		var Da = y || A || !c.fallbackToMouseEvents,
			Ea = Da ? A ? z ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
			Fa = Da ? A ? z ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
			Ga = Da ? A ? z ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
			Ha = Da ? null : "mouseleave",
			Ia = A ? z ? "MSPointerCancel" : "pointercancel" : "touchcancel",
			Ja = 0,
			Ka = null,
			La = 0,
			Ma = 0,
			Na = 0,
			Oa = 1,
			Pa = 0,
			Qa = 0,
			Ra = null,
			Sa = a(b),
			Ta = "start",
			Ua = 0,
			Va = null,
			Wa = 0,
			Xa = 0,
			Ya = 0,
			Za = 0,
			$a = 0,
			_a = null,
			ab = null;
		try {
			Sa.bind(Ea, C), Sa.bind(Ia, F)
		} catch (bb) {
			a.error("events not supported " + Ea + "," + Ia + " on jQuery.swipe")
		}
		this.enable = function() {
			return Sa.bind(Ea, C), Sa.bind(Ia, F), Sa
		}, this.disable = function() {
			return H(), Sa
		}, this.destroy = function() {
			return H(), Sa.data(B, null), Sa
		}, this.option = function(b, d) {
			if (void 0 !== c[b]) {
				if (void 0 === d) return c[b];
				c[b] = d
			} else a.error("Option " + b + " does not exist on jQuery.swipe.options");
			return null
		}
	}
	var d = "left",
		e = "right",
		f = "up",
		g = "down",
		h = "in",
		i = "out",
		j = "none",
		k = "auto",
		l = "swipe",
		m = "pinch",
		n = "tap",
		o = "doubletap",
		p = "longtap",
		q = "horizontal",
		r = "vertical",
		s = "all",
		t = 10,
		u = "start",
		v = "move",
		w = "end",
		x = "cancel",
		y = "ontouchstart" in window,
		z = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		A = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		B = "TouchSwipe",
		C = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: "label, button, input, select, textarea, a, .noSwipe"
		};
	a.fn.swipe = function(c) {
		var d = a(this),
			e = d.data(B);
		if (e && "string" == typeof c) {
			if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
			a.error("Method " + c + " does not exist on jQuery.swipe")
		} else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
		return d
	}, a.fn.swipe.defaults = C, a.fn.swipe.phases = {
		PHASE_START: u,
		PHASE_MOVE: v,
		PHASE_END: w,
		PHASE_CANCEL: x
	}, a.fn.swipe.directions = {
		LEFT: d,
		RIGHT: e,
		UP: f,
		DOWN: g,
		IN: h,
		OUT: i
	}, a.fn.swipe.pageScroll = {
		NONE: j,
		HORIZONTAL: q,
		VERTICAL: r,
		AUTO: k
	}, a.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		ALL: s
	}
}),
function() {
	function a(a) {
		b += "up" == a ? 1 : -1, b >= d || 0 > b || (e.removeClass("cur").addClass(a), f < 10 ? $("#link1").show() : $("#link1").hide(), e = c.page.eq(b), e.removeClass("up").addClass("cur"))
	}
    function ouput(f){
        if(f<=10)
        return "你共答对了"+f+"道题，当前成为传奇初级玩家";
        else{
            if(f<=20)
                return "你共答对了"+f+"道题，当前成为传奇中级玩家";
            else
               return "你共答对了"+f+"道题，当前成为传奇资深玩家";
        }
    }
	var b = 0,
		c = {
			p1: $("#p1"),
			p32: $("#p32 .answer li"),
			grid: $("#grid"),
			page: $("#grid .page"),
			an_li: $(".answer li"),
            an_li2: $(".answer1 li"),
            start: $("#start")
		},
		d = c.page.length,
		e = (window.innerHeight, window.innerWidth, c.page.eq(0));
	c.grid.swipe({
		swipe: function(b, c) {
			//("up" == c || "down" == c) && a(c)
			("up" == c ) && a(c)
		}
	});
	var f = 0;
    var str1="";
    var x;
    var y;
   /* function drop(ev)
    {
        "1" == $(this).data("an") && f++, $(this).addClass("on").siblings("li").removeClass("on"), a("up")

    }*/
    var div = document.getElementById('move');
    div.addEventListener('touchmove', function(event) {
        event.stopPropagation();
        event.preventDefault();
        // 如果这个元素的位置内只有一个手指的话
        if (event.targetTouches.length == 1) {
               // 把元素放在手指所在的位置

            var touch = event.targetTouches[0];
               // 把元素放在手指所在的位置
            div.style.left = touch.pageX-45 + 'px';
            div.style.top = touch.pageY-190 + 'px';
             x=touch.pageX-45;
             y=touch.pageY-190;
           /* var lock=0;
            if (lock==0&&y>225)
            {
                if(x<=55&&x>=15){f++;a("up");lock=1;}
                if(x>88&&x<140){a("up");lock=1;}
                if(x>=173&&x<225){a("up");lock=1;}
            }*/
        }
    }, false);
    div.addEventListener('touchend', function(event) {
        event.stopPropagation();

        // 如果这个元素的位置内只有一个手指的话

            var lock=0;
            if (lock==0&&y>200)
            {
                if(x<=55&&x>=15){a("up");lock=1;}
                if(x>88&&x<140){f++;a("up");lock=1;}
                if(x>=173&&x<225){a("up");lock=1;}
            }

    }, false);
    c.start.on( "click", function() {
        a("up");
    });

        c.an_li2.on("click", function() {
        "1" == $(this).data("an") && f++, $(this).addClass("on").siblings("li").removeClass("on"), a("up")
    });
	c.an_li.on("click", function() {

		"1" == $(this).data("an") && f++, $(this).addClass("on").siblings("li").removeClass("on"), a("up")
	}) ;
    c.p32.on("click", function() {
    str1=ouput(f), $("#result").text(str1)
    });
       /* $("#gamebtn").on("click", function() {
		f >= 10 ? window.location.href = "http://m.huodongshu.com/html/h5/event_detail.html?event_id=10016023" : location.reload()
	})*/
}();
