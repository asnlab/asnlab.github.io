var JSON;
JSON || (JSON = function() {
			function v(x) {
				return x < 10 ? "0" + x : x
			}
			Date.prototype.toJSON = function() {
				return this.getUTCFullYear() + "-" + v(this.getUTCMonth() + 1)
						+ "-" + v(this.getUTCDate()) + "T"
						+ v(this.getUTCHours()) + ":" + v(this.getUTCMinutes())
						+ ":" + v(this.getUTCSeconds()) + "Z"
			};
			String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
				return this.valueOf()
			};
			var i = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, m = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p, c, y = {
				"\u0008" : "\\b",
				"\t" : "\\t",
				"\n" : "\\n",
				"\u000c" : "\\f",
				"\r" : "\\r",
				'"' : '\\"',
				"\\" : "\\\\"
			}, C;
			function I(x) {
				m.lastIndex = 0;
				return m.test(x) ? '"'
						+ x.replace(m,
								function(E) {
									var u = y[E];
									if (typeof u === "string")
										return u;
									return "\\u"
											+ ("0000" + (+E.charCodeAt(0))
													.toString(16)).slice(-4)
								}) + '"' : '"' + x + '"'
			}
			function J(x, E) {
				var u, A, s = p, t, w = E[x];
				if (w && typeof w === "object"
						&& typeof w.toJSON === "function")
					w = w.toJSON(x);
				if (typeof C === "function")
					w = C.call(E, x, w);
				switch (typeof w) {
				case "string":
					return I(w);
				case "number":
					return isFinite(w) ? String(w) : "null";
				case "boolean":
				case "null":
					return String(w);
				case "object":
					if (!w)
						return "null";
					p += c;
					t = [];
					if (typeof w.length === "number"
							&& !w.propertyIsEnumerable("length")) {
						A = w.length;
						for (x = 0; x < A; x += 1)
							t[x] = J(x, w) || "null";
						E = t.length === 0 ? "[]" : p ? "[\n" + p
								+ t.join(",\n" + p) + "\n" + s + "]" : "["
								+ t.join(",") + "]";
						p = s;
						return E
					}
					if (C && typeof C === "object") {
						A = C.length;
						for (x = 0; x < A; x += 1) {
							u = C[x];
							if (typeof u === "string")
								if (E = J(u, w))
									t.push(I(u) + (p ? ": " : ":") + E)
						}
					} else
						for (u in w)
							if (Object.hasOwnProperty.call(w, u))
								if (E = J(u, w))
									t.push(I(u) + (p ? ": " : ":") + E);
					E = t.length === 0 ? "{}" : p ? "{\n" + p
							+ t.join(",\n" + p) + "\n" + s + "}" : "{"
							+ t.join(",") + "}";
					p = s;
					return E
				}
			}
			return {
				stringify : function(x, E, u) {
					E = E;
					u = u;
					var A;
					c = p = "";
					if (typeof u === "number")
						for (A = 0; A < u; A += 1)
							c += " ";
					else if (typeof u === "string")
						c = u;
					if ((C = E)
							&& typeof E !== "function"
							&& (typeof E !== "object" || typeof E.length !== "number"))
						throw new Error("JSON.stringify");
					return J("", {
						"" : x
					})
				},
				parse : function(x, E) {
					var u = E;
					function A(s, t) {
						var w, M, H = s[t];
						if (H && typeof H === "object")
							for (w in H)
								if (Object.hasOwnProperty.call(H, w)) {
									M = A(H, w);
									if (M !== undefined)
										H[w] = M;
									else
										delete H[w]
								}
						return u.call(s, t, H)
					}
					i.lastIndex = 0;
					if (i.test(x))
						x = x.replace(i,
								function(s) {
									return "\\u"
											+ ("0000" + (+s.charCodeAt(0))
													.toString(16)).slice(-4)
								});
					if (/^[\],:{}\s]*$/
							.test(x
									.replace(
											/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
											"@")
									.replace(
											/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
											"]").replace(
											/(?:^|:|,)(?:\s*\[)+/g, ""))) {
						x = eval("(" + x + ")");
						return typeof u === "function" ? A({
							"" : x
						}, "") : x
					}
					throw new Error("JSON.parse");
				}
			}
		}());
JSON.parse = function() {
	var v = JSON.parse;
	return function(i, m) {
		try {
			return v(i, m)
		} catch (p) {
			return false
		}
	}
}();
/*
 * jQuery JavaScript Library v1.3.2 https://jquery.com/
 * 
 * Copyright (c) 2009 John Resig Dual licensed under the MIT and GPL
 * licenses. https://docs.jquery.com/License
 * 
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009) Revision: 6246
 */
(function() {
	var v = this, i, m = v.jQuery, p = v.$, c = v.jQuery = v.$ = function(a, b) {
		return new c.fn.init(a, b)
	}, y = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, C = /^.[^:#\[\.,]*$/;
	c.fn = c.prototype = {
		init : function(a, b) {
			a = a || document;
			if (a.nodeType) {
				this[0] = a;
				this.length = 1;
				this.context = a;
				return this
			}
			if (typeof a === "string") {
				var d = y.exec(a);
				if (d && (d[1] || !b))
					if (d[1])
						a = c.clean([ d[1] ], b);
					else {
						if ((b = document.getElementById(d[3])) && b.id != d[3])
							return c().find(a);
						d = c(b || []);
						d.context = document;
						d.selector = a;
						return d
					}
				else
					return c(b).find(a)
			} else if (c.isFunction(a))
				return c(document).ready(a);
			if (a.selector && a.context) {
				this.selector = a.selector;
				this.context = a.context
			}
			return this.setArray(c.isArray(a) ? a : c.makeArray(a))
		},
		selector : "",
		jquery : "1.3.2",
		size : function() {
			return this.length
		},
		get : function(a) {
			return a === i ? Array.prototype.slice.call(this) : this[a]
		},
		pushStack : function(a, b, d) {
			a = c(a);
			a.prevObject = this;
			a.context = this.context;
			if (b === "find")
				a.selector = this.selector + (this.selector ? " " : "") + d;
			else if (b)
				a.selector = this.selector + "." + b + "(" + d + ")";
			return a
		},
		setArray : function(a) {
			this.length = 0;
			Array.prototype.push.apply(this, a);
			return this
		},
		each : function(a, b) {
			return c.each(this, a, b)
		},
		index : function(a) {
			return c.inArray(a && a.jquery ? a[0] : a, this)
		},
		attr : function(a, b, d) {
			var f = a;
			if (typeof a === "string")
				if (b === i)
					return this[0] && c[d || "attr"](this[0], a);
				else {
					f = {};
					f[a] = b
				}
			return this.each(function(h) {
				for (a in f)
					c.attr(d ? this.style : this, a, c
							.prop(this, f[a], d, h, a))
			})
		},
		css : function(a, b) {
			if ((a == "width" || a == "height") && parseFloat(b) < 0)
				b = i;
			return this.attr(a, b, "curCSS")
		},
		text : function(a) {
			if (typeof a !== "object" && a != null)
				return this.empty().append(
						(this[0] && this[0].ownerDocument || document)
								.createTextNode(a));
			var b = "";
			c.each(a || this, function() {
				c.each(this.childNodes, function() {
					if (this.nodeType != 8)
						b += this.nodeType != 1 ? this.nodeValue : c.fn
								.text([ this ])
				})
			});
			return b
		},
		wrapAll : function(a) {
			if (this[0]) {
				a = c(a, this[0].ownerDocument).clone();
				this[0].parentNode && a.insertBefore(this[0]);
				a.map(function() {
					for ( var b = this; b.firstChild;)
						b = b.firstChild;
					return b
				}).append(this)
			}
			return this
		},
		wrapInner : function(a) {
			return this.each(function() {
				c(this).contents().wrapAll(a)
			})
		},
		wrap : function(a) {
			return this.each(function() {
				c(this).wrapAll(a)
			})
		},
		append : function() {
			return this.domManip(arguments, true, function(a) {
				this.nodeType == 1 && this.appendChild(a)
			})
		},
		prepend : function() {
			return this.domManip(arguments, true, function(a) {
				this.nodeType == 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before : function() {
			return this.domManip(arguments, false, function(a) {
				this.parentNode.insertBefore(a, this)
			})
		},
		after : function() {
			return this.domManip(arguments, false, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		end : function() {
			return this.prevObject || c([])
		},
		push : [].push,
		sort : [].sort,
		splice : [].splice,
		find : function(a) {
			if (this.length === 1) {
				var b = this.pushStack([], "find", a);
				b.length = 0;
				c.find(a, this[0], b);
				return b
			} else
				return this.pushStack(c.unique(c.map(this, function(d) {
					return c.find(a, d)
				})), "find", a)
		},
		clone : function(a) {
			var b = this.map(function() {
				if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
					var h = this.outerHTML;
					if (!h) {
						h = this.ownerDocument.createElement("div");
						h.appendChild(this.cloneNode(true));
						h = h.innerHTML
					}
					return c.clean([ h
							.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(
									/^\s*/, "") ])[0]
				} else
					return this.cloneNode(true)
			});
			if (a === true) {
				var d = this.find("*").andSelf(), f = 0;
				b.find("*").andSelf().each(function() {
					if (this.nodeName === d[f].nodeName) {
						var h = c.data(d[f], "events");
						for ( var k in h)
							for ( var q in h[k])
								c.event.add(this, k, h[k][q], h[k][q].data);
						f++
					}
				})
			}
			return b
		},
		filter : function(a) {
			return this.pushStack(c.isFunction(a)
					&& c.grep(this, function(b, d) {
						return a.call(b, d)
					}) || c.multiFilter(a, c.grep(this, function(b) {
						return b.nodeType === 1
					})), "filter", a)
		},
		closest : function(a) {
			var b = c.expr.match.POS.test(a) ? c(a) : null, d = 0;
			return this.map(function() {
				for ( var f = this; f && f.ownerDocument;) {
					if (b ? b.index(f) > -1 : c(f).is(a)) {
						c.data(f, "closest", d);
						return f
					}
					f = f.parentNode;
					d++
				}
			})
		},
		not : function(a) {
			if (typeof a === "string")
				if (C.test(a))
					return this.pushStack(c.multiFilter(a, this, true), "not",
							a);
				else
					a = c.multiFilter(a, this);
			var b = a.length && a[a.length - 1] !== i && !a.nodeType;
			return this.filter(function() {
				return b ? c.inArray(this, a) < 0 : this != a
			})
		},
		add : function(a) {
			return this.pushStack(c.unique(c.merge(this.get(),
					typeof a === "string" ? c(a) : c.makeArray(a))))
		},
		is : function(a) {
			return !!a && c.multiFilter(a, this).length > 0
		},
		hasClass : function(a) {
			return !!a && this.is("." + a)
		},
		val : function(a) {
			if (a === i) {
				var b = this[0];
				if (b) {
					if (c.nodeName(b, "option"))
						return (b.attributes.value || {}).specified ? b.value
								: b.text;
					if (c.nodeName(b, "select")) {
						var d = b.selectedIndex, f = [], h = b.options;
						b = b.type == "select-one";
						if (d < 0)
							return null;
						var k = b ? d : 0;
						for (d = b ? d + 1 : h.length; k < d; k++) {
							var q = h[k];
							if (q.selected) {
								a = c(q).val();
								if (b)
									return a;
								f.push(a)
							}
						}
						return f
					}
					return (b.value || "").replace(/\r/g, "")
				}
				return i
			}
			if (typeof a === "number")
				a += "";
			return this
					.each(function() {
						if (this.nodeType == 1)
							if (c.isArray(a)
									&& /radio|checkbox/.test(this.type))
								this.checked = c.inArray(this.value, a) >= 0
										|| c.inArray(this.name, a) >= 0;
							else if (c.nodeName(this, "select")) {
								var n = c.makeArray(a);
								c("option", this)
										.each(
												function() {
													this.selected = c.inArray(
															this.value, n) >= 0
															|| c.inArray(
																	this.text,
																	n) >= 0
												});
								if (!n.length)
									this.selectedIndex = -1
							} else
								this.value = a
					})
		},
		html : function(a) {
			return a === i ? this[0] ? this[0].innerHTML.replace(
					/ jQuery\d+="(?:\d+|null)"/g, "") : null : this.empty()
					.append(a)
		},
		replaceWith : function(a) {
			return this.after(a).remove()
		},
		eq : function(a) {
			return this.slice(a, +a + 1)
		},
		slice : function() {
			return this.pushStack(Array.prototype.slice.apply(this, arguments),
					"slice", Array.prototype.slice.call(arguments).join(","))
		},
		map : function(a) {
			return this.pushStack(c.map(this, function(b, d) {
				return a.call(b, d, b)
			}))
		},
		andSelf : function() {
			return this.add(this.prevObject)
		},
		domManip : function(a, b, d) {
			if (this[0]) {
				var f = (this[0].ownerDocument || this[0])
						.createDocumentFragment();
				a = c.clean(a, this[0].ownerDocument || this[0], f);
				var h = f.firstChild;
				if (h)
					for ( var k = 0, q = this.length; k < q; k++)
						d.call(n(this[k], h), this.length > 1 || k > 0 ? f
								.cloneNode(true) : f);
				a && c.each(a, I)
			}
			return this;
			function n(D, K) {
				return b && c.nodeName(D, "table") && c.nodeName(K, "tr") ? D
						.getElementsByTagName("tbody")[0]
						|| D
								.appendChild(D.ownerDocument
										.createElement("tbody")) : D
			}
		}
	};
	c.fn.init.prototype = c.fn;
	function I(a, b) {
		b.src ? c.ajax({
			url : b.src,
			async : false,
			dataType : "script"
		}) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
		b.parentNode && b.parentNode.removeChild(b)
	}
	function J() {
		return +new Date
	}
	c.extend = c.fn.extend = function() {
		var a = arguments[0] || {}, b = 1, d = arguments.length, f = false, h;
		if (typeof a === "boolean") {
			f = a;
			a = arguments[1] || {};
			b = 2
		}
		if (typeof a !== "object" && !c.isFunction(a))
			a = {};
		if (d == b) {
			a = this;
			--b
		}
		for (; b < d; b++)
			if ((h = arguments[b]) != null)
				for ( var k in h) {
					var q = a[k], n = h[k];
					if (a !== n)
						if (f && n && typeof n === "object" && !n.nodeType)
							a[k] = c.extend(f, q
									|| (n.length != null ? [] : {}), n);
						else if (n !== i)
							a[k] = n
				}
		return a
	};
	var x = /z-?index|font-?weight|opacity|zoom|line-?height/i, E = document.defaultView
			|| {}, u = Object.prototype.toString;
	c
			.extend({
				noConflict : function(a) {
					v.$ = p;
					if (a)
						v.jQuery = m;
					return c
				},
				isFunction : function(a) {
					return u.call(a) === "[object Function]"
				},
				isArray : function(a) {
					return u.call(a) === "[object Array]"
				},
				isXMLDoc : function(a) {
					return a.nodeType === 9
							&& a.documentElement.nodeName !== "HTML"
							|| !!a.ownerDocument && c.isXMLDoc(a.ownerDocument)
				},
				globalEval : function(a) {
					if (a && /\S/.test(a)) {
						var b = document.getElementsByTagName("head")[0]
								|| document.documentElement, d = document
								.createElement("script");
						d.type = "text/javascript";
						if (c.support.scriptEval)
							d.appendChild(document.createTextNode(a));
						else
							d.text = a;
						b.insertBefore(d, b.firstChild);
						b.removeChild(d)
					}
				},
				nodeName : function(a, b) {
					return a.nodeName
							&& a.nodeName.toUpperCase() == b.toUpperCase()
				},
				each : function(a, b, d) {
					var f, h = 0, k = a.length;
					if (d)
						if (k === i)
							for (f in a) {
								if (b.apply(a[f], d) === false)
									break
							}
						else
							for (; h < k;) {
								if (b.apply(a[h++], d) === false)
									break
							}
					else if (k === i)
						for (f in a) {
							if (b.call(a[f], f, a[f]) === false)
								break
						}
					else
						for (d = a[0]; h < k && b.call(d, h, d) !== false; d = a[++h])
							;
					return a
				},
				prop : function(a, b, d, f, h) {
					if (c.isFunction(b))
						b = b.call(a, f);
					return typeof b === "number" && d == "curCSS" && !x.test(h) ? b
							+ "px"
							: b
				},
				className : {
					add : function(a, b) {
						c.each((b || "").split(/\s+/), function(d, f) {
							if (a.nodeType == 1
									&& !c.className.has(a.className, f))
								a.className += (a.className ? " " : "") + f
						})
					},
					remove : function(a, b) {
						if (a.nodeType == 1)
							a.className = b !== i ? c.grep(
									a.className.split(/\s+/), function(d) {
										return !c.className.has(b, d)
									}).join(" ") : ""
					},
					has : function(a, b) {
						return a
								&& c.inArray(b, (a.className || a).toString()
										.split(/\s+/)) > -1
					}
				},
				swap : function(a, b, d) {
					var f = {};
					for ( var h in b) {
						f[h] = a.style[h];
						a.style[h] = b[h]
					}
					d.call(a);
					for (h in b)
						a.style[h] = f[h]
				},
				css : function(a, b, d, f) {
					if (b == "width" || b == "height") {
						var h;
						d = {
							position : "absolute",
							visibility : "hidden",
							display : "block"
						};
						var k = b == "width" ? [ "Left", "Right" ] : [ "Top",
								"Bottom" ];
						function q() {
							h = b == "width" ? a.offsetWidth : a.offsetHeight;
							f !== "border"
									&& c
											.each(
													k,
													function() {
														f
																|| (h -= parseFloat(c
																		.curCSS(
																				a,
																				"padding"
																						+ this,
																				true)) || 0);
														if (f === "margin")
															h += parseFloat(c
																	.curCSS(
																			a,
																			"margin"
																					+ this,
																			true)) || 0;
														else
															h -= parseFloat(c
																	.curCSS(
																			a,
																			"border"
																					+ this
																					+ "Width",
																			true)) || 0
													})
						}
						a.offsetWidth !== 0 ? q() : c.swap(a, d, q);
						return Math.max(0, Math.round(h))
					}
					return c.curCSS(a, b, d)
				},
				curCSS : function(a, b, d) {
					var f, h = a.style;
					if (b == "opacity" && !c.support.opacity) {
						f = c.attr(h, "opacity");
						return f == "" ? "1" : f
					}
					if (b.match(/float/i))
						b = Z;
					if (!d && h && h[b])
						f = h[b];
					else if (E.getComputedStyle) {
						if (b.match(/float/i))
							b = "float";
						b = b.replace(/([A-Z])/g, "-$1").toLowerCase();
						if (a = E.getComputedStyle(a, null))
							f = a.getPropertyValue(b);
						if (b == "opacity" && f == "")
							f = "1"
					} else if (a.currentStyle) {
						f = b.replace(/\-(\w)/g, function(k, q) {
							return q.toUpperCase()
						});
						f = a.currentStyle[b] || a.currentStyle[f];
						if (!/^\d+(px)?$/i.test(f) && /^\d/.test(f)) {
							b = h.left;
							d = a.runtimeStyle.left;
							a.runtimeStyle.left = a.currentStyle.left;
							h.left = f || 0;
							f = h.pixelLeft + "px";
							h.left = b;
							a.runtimeStyle.left = d
						}
					}
					return f
				},
				clean : function(a, b, d) {
					b = b || document;
					if (typeof b.createElement === "undefined")
						b = b.ownerDocument || b[0] && b[0].ownerDocument
								|| document;
					if (!d && a.length === 1 && typeof a[0] === "string") {
						var f = /^<(\w+)\s*\/?>$/.exec(a[0]);
						if (f)
							return [ b.createElement(f[1]) ]
					}
					var h = [];
					f = [];
					var k = b.createElement("div");
					c
							.each(
									a,
									function(q, n) {
										if (typeof n === "number")
											n += "";
										if (n) {
											if (typeof n === "string") {
												n = n
														.replace(
																/(<(\w+)[^>]*?)\/>/g,
																function(L, G,
																		S) {
																	return S
																			.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? L
																			: G
																					+ "></"
																					+ S
																					+ ">"
																});
												q = n.replace(/^\s+/, "")
														.substring(0, 10)
														.toLowerCase();
												var D = !q.indexOf("<opt")
														&& [
																1,
																"<select multiple='multiple'>",
																"</select>" ]
														|| !q.indexOf("<leg")
														&& [ 1, "<fieldset>",
																"</fieldset>" ]
														|| q
																.match(/^<(thead|tbody|tfoot|colg|cap)/)
														&& [ 1, "<table>",
																"</table>" ]
														|| !q.indexOf("<tr")
														&& [
																2,
																"<table><tbody>",
																"</tbody></table>" ]
														|| (!q.indexOf("<td") || !q
																.indexOf("<th"))
														&& [
																3,
																"<table><tbody><tr>",
																"</tr></tbody></table>" ]
														|| !q.indexOf("<col")
														&& [
																2,
																"<table><tbody></tbody><colgroup>",
																"</colgroup></table>" ]
														|| !c.support.htmlSerialize
														&& [ 1, "div<div>",
																"</div>" ]
														|| [ 0, "", "" ];
												for (k.innerHTML = D[1] + n
														+ D[2]; D[0]--;)
													k = k.lastChild;
												if (!c.support.tbody) {
													var K = /<tbody/i.test(n);
													q = !q.indexOf("<table")
															&& !K ? k.firstChild
															&& k.firstChild.childNodes
															: D[1] == "<table>"
																	&& !K ? k.childNodes
																	: [];
													for (D = q.length - 1; D >= 0; --D)
														c.nodeName(q[D],
																"tbody")
																&& !q[D].childNodes.length
																&& q[D].parentNode
																		.removeChild(q[D])
												}
												!c.support.leadingWhitespace
														&& /^\s/.test(n)
														&& k
																.insertBefore(
																		b
																				.createTextNode(n
																						.match(/^\s*/)[0]),
																		k.firstChild);
												n = c.makeArray(k.childNodes)
											}
											if (n.nodeType)
												h.push(n);
											else
												h = c.merge(h, n)
										}
									});
					if (d) {
						for (a = 0; h[a]; a++)
							if (c.nodeName(h[a], "script")
									&& (!h[a].type || h[a].type.toLowerCase() === "text/javascript"))
								f.push(h[a].parentNode ? h[a].parentNode
										.removeChild(h[a]) : h[a]);
							else {
								h[a].nodeType === 1
										&& h.splice
												.apply(
														h,
														[ a + 1, 0 ]
																.concat(c
																		.makeArray(h[a]
																				.getElementsByTagName("script"))));
								d.appendChild(h[a])
							}
						return f
					}
					return h
				},
				attr : function(a, b, d) {
					if (!a || a.nodeType == 3 || a.nodeType == 8)
						return i;
					var f = !c.isXMLDoc(a), h = d !== i;
					b = f && c.props[b] || b;
					if (a.tagName) {
						var k = /href|src|style/.test(b);
						if (b in a && f && !k) {
							if (h) {
								if (b == "type" && c.nodeName(a, "input")
										&& a.parentNode)
									throw "type property can't be changed";
								a[b] = d
							}
							if (c.nodeName(a, "form") && a.getAttributeNode(b))
								return a.getAttributeNode(b).nodeValue;
							if (b == "tabIndex")
								return (b = a.getAttributeNode("tabIndex"))
										&& b.specified ? b.value
										: a.nodeName
												.match(/(button|input|object|select|textarea)/i) ? 0
												: a.nodeName
														.match(/^(a|area)$/i)
														&& a.href ? 0 : i;
							return a[b]
						}
						if (!c.support.style && f && b == "style")
							return c.attr(a.style, "cssText", d);
						h && a.setAttribute(b, "" + d);
						a = !c.support.hrefNormalized && f && k ? a
								.getAttribute(b, 2) : a.getAttribute(b);
						return a === null ? i : a
					}
					if (!c.support.opacity && b == "opacity") {
						if (h) {
							a.zoom = 1;
							a.filter = (a.filter || "").replace(
									/alpha\([^)]*\)/, "")
									+ (parseInt(d) + "" == "NaN" ? ""
											: "alpha(opacity=" + d * 100 + ")")
						}
						return a.filter && a.filter.indexOf("opacity=") >= 0 ? parseFloat(a.filter
								.match(/opacity=([^)]*)/)[1])
								/ 100 + ""
								: ""
					}
					b = b.replace(/-([a-z])/ig, function(q, n) {
						return n.toUpperCase()
					});
					if (h)
						a[b] = d;
					return a[b]
				},
				trim : function(a) {
					return (a || "").replace(/^\s+|\s+$/g, "")
				},
				makeArray : function(a) {
					var b = [];
					if (a != null) {
						var d = a.length;
						if (d == null || typeof a === "string"
								|| c.isFunction(a) || a.setInterval)
							b[0] = a;
						else
							for (; d;)
								b[--d] = a[d]
					}
					return b
				},
				inArray : function(a, b) {
					for ( var d = 0, f = b.length; d < f; d++)
						if (b[d] === a)
							return d;
					return -1
				},
				merge : function(a, b) {
					var d = 0, f, h = a.length;
					if (c.support.getAll)
						for (; (f = b[d++]) != null;)
							a[h++] = f;
					else
						for (; (f = b[d++]) != null;)
							if (f.nodeType != 8)
								a[h++] = f;
					return a
				},
				unique : function(a) {
					var b = [], d = {};
					try {
						for ( var f = 0, h = a.length; f < h; f++) {
							var k = c.data(a[f]);
							if (!d[k]) {
								d[k] = true;
								b.push(a[f])
							}
						}
					} catch (q) {
						b = a
					}
					return b
				},
				grep : function(a, b, d) {
					for ( var f = [], h = 0, k = a.length; h < k; h++)
						!d != !b(a[h], h) && f.push(a[h]);
					return f
				},
				map : function(a, b) {
					for ( var d = [], f = 0, h = a.length; f < h; f++) {
						var k = b(a[f], f);
						if (k != null)
							d[d.length] = k
					}
					return d.concat.apply([], d)
				}
			});
	var A = navigator.userAgent.toLowerCase();
	c.browser = {
		version : (A.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [ 0, "0" ])[1],
		safari : /webkit/.test(A),
		opera : /opera/.test(A),
		msie : /msie/.test(A) && !/opera/.test(A),
		mozilla : /mozilla/.test(A) && !/(compatible|webkit)/.test(A)
	};
	c.each({
		parent : function(a) {
			return a.parentNode
		},
		parents : function(a) {
			return c.dir(a, "parentNode")
		},
		next : function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev : function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll : function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll : function(a) {
			return c.dir(a, "previousSibling")
		},
		siblings : function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children : function(a) {
			return c.sibling(a.firstChild)
		},
		contents : function(a) {
			return c.nodeName(a, "iframe") ? a.contentDocument
					|| a.contentWindow.document : c.makeArray(a.childNodes)
		}
	}, function(a, b) {
		c.fn[a] = function(d) {
			var f = c.map(this, b);
			if (d && typeof d == "string")
				f = c.multiFilter(d, f);
			return this.pushStack(c.unique(f), a, d)
		}
	});
	c.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function(a, b) {
		c.fn[a] = function(d) {
			for ( var f = [], h = c(d), k = 0, q = h.length; k < q; k++) {
				var n = (k > 0 ? this.clone(true) : this).get();
				c.fn[b].apply(c(h[k]), n);
				f = f.concat(n)
			}
			return this.pushStack(f, a, d)
		}
	});
	c.each({
		removeAttr : function(a) {
			c.attr(this, a, "");
			this.nodeType == 1 && this.removeAttribute(a)
		},
		addClass : function(a) {
			c.className.add(this, a)
		},
		removeClass : function(a) {
			c.className.remove(this, a)
		},
		toggleClass : function(a, b) {
			if (typeof b !== "boolean")
				b = !c.className.has(this, a);
			c.className[b ? "add" : "remove"](this, a)
		},
		remove : function(a) {
			if (!a || c.filter(a, [ this ]).length) {
				c("*", this).add([ this ]).each(function() {
					c.event.remove(this);
					c.removeData(this)
				});
				this.parentNode && this.parentNode.removeChild(this)
			}
		},
		empty : function() {
			for (c(this).children().remove(); this.firstChild;)
				this.removeChild(this.firstChild)
		}
	}, function(a, b) {
		c.fn[a] = function() {
			return this.each(b, arguments)
		}
	});
	function s(a, b) {
		return a[0] && parseInt(c.curCSS(a[0], b, true), 10) || 0
	}
	var t = "jQuery" + J(), w = 0, M = {};
	c.extend({
		cache : {},
		data : function(a, b, d) {
			a = a == v ? M : a;
			var f = a[t];
			f || (f = a[t] = ++w);
			if (b && !c.cache[f])
				c.cache[f] = {};
			if (d !== i)
				c.cache[f][b] = d;
			return b ? c.cache[f][b] : f
		},
		removeData : function(a, b) {
			a = a == v ? M : a;
			var d = a[t];
			if (b) {
				if (c.cache[d]) {
					delete c.cache[d][b];
					b = "";
					for (b in c.cache[d])
						break;
					b || c.removeData(a)
				}
			} else {
				try {
					delete a[t]
				} catch (f) {
					a.removeAttribute && a.removeAttribute(t)
				}
				delete c.cache[d]
			}
		},
		queue : function(a, b, d) {
			if (a) {
				b = (b || "fx") + "queue";
				var f = c.data(a, b);
				if (!f || c.isArray(d))
					f = c.data(a, b, c.makeArray(d));
				else
					d && f.push(d)
			}
			return f
		},
		dequeue : function(a, b) {
			var d = c.queue(a, b), f = d.shift();
			if (!b || b === "fx")
				f = d[0];
			f !== i && f.call(a)
		}
	});
	c.fn.extend({
		data : function(a, b) {
			var d = a.split(".");
			d[1] = d[1] ? "." + d[1] : "";
			if (b === i) {
				var f = this.triggerHandler("getData" + d[1] + "!", [ d[0] ]);
				if (f === i && this.length)
					f = c.data(this[0], a);
				return f === i && d[1] ? this.data(d[0]) : f
			} else
				return this.trigger("setData" + d[1] + "!", [ d[0], b ]).each(
						function() {
							c.data(this, a, b)
						})
		},
		removeData : function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		},
		queue : function(a, b) {
			if (typeof a !== "string") {
				b = a;
				a = "fx"
			}
			if (b === i)
				return c.queue(this[0], a);
			return this.each(function() {
				var d = c.queue(this, a, b);
				a == "fx" && d.length == 1 && d[0].call(this)
			})
		},
		dequeue : function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		}
	});
	(function() {
		var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g, b = 0, d = Object.prototype.toString, f = function(
				e, g, j, l) {
			j = j || [];
			g = g || document;
			if (g.nodeType !== 1 && g.nodeType !== 9)
				return [];
			if (!e || typeof e !== "string")
				return j;
			var o = [], r, z, N, B = true;
			for (a.lastIndex = 0; (r = a.exec(e)) !== null;) {
				o.push(r[1]);
				if (r[2]) {
					N = RegExp.rightContext;
					break
				}
			}
			if (o.length > 1 && k.exec(e))
				if (o.length === 2 && h.relative[o[0]])
					r = aa(o[0] + o[1], g);
				else
					for (r = h.relative[o[0]] ? [ g ] : f(o.shift(), g); o.length;) {
						e = o.shift();
						if (h.relative[e])
							e += o.shift();
						r = aa(e, r)
					}
			else {
				r = l ? {
					expr : o.pop(),
					set : n(l)
				} : f
						.find(o.pop(),
								o.length === 1 && g.parentNode ? g.parentNode
										: g, O(g));
				r = f.filter(r.expr, r.set);
				if (o.length > 0)
					z = n(r);
				else
					B = false;
				for (; o.length;) {
					var Q = o.pop(), U = Q;
					if (h.relative[Q])
						U = o.pop();
					else
						Q = "";
					if (U == null)
						U = g;
					h.relative[Q](z, U, O(g))
				}
			}
			z || (z = r);
			if (!z)
				throw "Syntax error, unrecognized expression: " + (Q || e);
			if (d.call(z) === "[object Array]")
				if (B)
					if (g.nodeType === 1)
						for (e = 0; z[e] != null; e++) {
							if (z[e]
									&& (z[e] === true || z[e].nodeType === 1
											&& T(g, z[e])))
								j.push(r[e])
						}
					else
						for (e = 0; z[e] != null; e++)
							z[e] && z[e].nodeType === 1 && j.push(r[e]);
				else
					j.push.apply(j, z);
			else
				n(z, j);
			if (N) {
				f(N, g, j, l);
				if (K) {
					L = false;
					j.sort(K);
					if (L)
						for (e = 1; e < j.length; e++)
							j[e] === j[e - 1] && j.splice(e--, 1)
				}
			}
			return j
		};
		f.matches = function(e, g) {
			return f(e, null, null, g)
		};
		f.find = function(e, g, j) {
			var l, o;
			if (!e)
				return [];
			for ( var r = 0, z = h.order.length; r < z; r++) {
				var N = h.order[r];
				if (o = h.match[N].exec(e)) {
					var B = RegExp.leftContext;
					if (B.substr(B.length - 1) !== "\\") {
						o[1] = (o[1] || "").replace(/\\/g, "");
						l = h.find[N](o, g, j);
						if (l != null) {
							e = e.replace(h.match[N], "");
							break
						}
					}
				}
			}
			l || (l = g.getElementsByTagName("*"));
			return {
				set : l,
				expr : e
			}
		};
		f.filter = function(e, g, j, l) {
			for ( var o = e, r = [], z = g, N, B, Q = g && g[0] && O(g[0]); e
					&& g.length;) {
				for ( var U in h.filter)
					if ((N = h.match[U].exec(e)) != null) {
						var ia = h.filter[U], Y, ba;
						B = false;
						if (z == r)
							r = [];
						if (h.preFilter[U])
							if (N = h.preFilter[U](N, z, j, r, l, Q)) {
								if (N === true)
									continue
							} else
								B = Y = true;
						if (N)
							for ( var ca = 0; (ba = z[ca]) != null; ca++)
								if (ba) {
									Y = ia(ba, N, ca, z);
									var fa = l ^ !!Y;
									if (j && Y != null)
										if (fa)
											B = true;
										else
											z[ca] = false;
									else if (fa) {
										r.push(ba);
										B = true
									}
								}
						if (Y !== i) {
							j || (z = r);
							e = e.replace(h.match[U], "");
							if (!B)
								return [];
							break
						}
					}
				if (e == o)
					if (B == null)
						throw "Syntax error, unrecognized expression: " + e;
					else
						break;
				o = e
			}
			return z
		};
		var h = f.selectors = {
			order : [ "ID", "NAME", "TAG" ],
			match : {
				ID : /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
				CLASS : /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
				NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
				ATTR : /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
				TAG : /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
				CHILD : /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
				POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
				PSEUDO : /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
			},
			attrMap : {
				"class" : "className",
				"for" : "htmlFor"
			},
			attrHandle : {
				href : function(e) {
					return e.getAttribute("href")
				}
			},
			relative : {
				"+" : function(e, g, j) {
					var l = typeof g === "string", o = l && !/\W/.test(g);
					l = l && !o;
					if (o && !j)
						g = g.toUpperCase();
					j = 0;
					o = e.length;
					for ( var r; j < o; j++)
						if (r = e[j]) {
							for (; (r = r.previousSibling) && r.nodeType !== 1;)
								;
							e[j] = l || r && r.nodeName === g ? r || false
									: r === g
						}
					l && f.filter(g, e, true)
				},
				">" : function(e, g, j) {
					var l = typeof g === "string";
					if (l && !/\W/.test(g)) {
						g = j ? g : g.toUpperCase();
						j = 0;
						for ( var o = e.length; j < o; j++) {
							var r = e[j];
							if (r) {
								l = r.parentNode;
								e[j] = l.nodeName === g ? l : false
							}
						}
					} else {
						j = 0;
						for (o = e.length; j < o; j++)
							if (r = e[j])
								e[j] = l ? r.parentNode : r.parentNode === g;
						l && f.filter(g, e, true)
					}
				},
				"" : function(e, g, j) {
					var l = b++, o = S;
					if (!g.match(/\W/)) {
						var r = g = j ? g : g.toUpperCase();
						o = G
					}
					o("parentNode", g, l, e, r, j)
				},
				"~" : function(e, g, j) {
					var l = b++, o = S;
					if (typeof g === "string" && !g.match(/\W/)) {
						var r = g = j ? g : g.toUpperCase();
						o = G
					}
					o("previousSibling", g, l, e, r, j)
				}
			},
			find : {
				ID : function(e, g, j) {
					if (typeof g.getElementById !== "undefined" && !j)
						return (e = g.getElementById(e[1])) ? [ e ] : []
				},
				NAME : function(e, g) {
					if (typeof g.getElementsByName !== "undefined") {
						var j = [];
						g = g.getElementsByName(e[1]);
						for ( var l = 0, o = g.length; l < o; l++)
							g[l].getAttribute("name") === e[1] && j.push(g[l]);
						return j.length === 0 ? null : j
					}
				},
				TAG : function(e, g) {
					return g.getElementsByTagName(e[1])
				}
			},
			preFilter : {
				CLASS : function(e, g, j, l, o, r) {
					e = " " + e[1].replace(/\\/g, "") + " ";
					if (r)
						return e;
					r = 0;
					for ( var z; (z = g[r]) != null; r++)
						if (z)
							if (o
									^ (z.className && (" " + z.className + " ")
											.indexOf(e) >= 0))
								j || l.push(z);
							else if (j)
								g[r] = false;
					return false
				},
				ID : function(e) {
					return e[1].replace(/\\/g, "")
				},
				TAG : function(e, g) {
					for ( var j = 0; g[j] === false; j++)
						;
					return g[j] && O(g[j]) ? e[1] : e[1].toUpperCase()
				},
				CHILD : function(e) {
					if (e[1] == "nth") {
						var g = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(e[2] == "even"
								&& "2n" || e[2] == "odd" && "2n+1"
								|| !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
						e[2] = g[1] + (g[2] || 1) - 0;
						e[3] = g[3] - 0
					}
					e[0] = b++;
					return e
				},
				ATTR : function(e, g, j, l, o, r) {
					g = e[1].replace(/\\/g, "");
					if (!r && h.attrMap[g])
						e[1] = h.attrMap[g];
					if (e[2] === "~=")
						e[4] = " " + e[4] + " ";
					return e
				},
				PSEUDO : function(e, g, j, l, o) {
					if (e[1] === "not")
						if (e[3].match(a).length > 1 || /^\w/.test(e[3]))
							e[3] = f(e[3], null, null, g);
						else {
							e = f.filter(e[3], g, j, true ^ o);
							j || l.push.apply(l, e);
							return false
						}
					else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0]))
						return true;
					return e
				},
				POS : function(e) {
					e.unshift(true);
					return e
				}
			},
			filters : {
				enabled : function(e) {
					return e.disabled === false && e.type !== "hidden"
				},
				disabled : function(e) {
					return e.disabled === true
				},
				checked : function(e) {
					return e.checked === true
				},
				selected : function(e) {
					return e.selected === true
				},
				parent : function(e) {
					return !!e.firstChild
				},
				empty : function(e) {
					return !e.firstChild
				},
				has : function(e, g, j) {
					return !!f(j[3], e).length
				},
				header : function(e) {
					return /h\d/i.test(e.nodeName)
				},
				text : function(e) {
					return "text" === e.type
				},
				radio : function(e) {
					return "radio" === e.type
				},
				checkbox : function(e) {
					return "checkbox" === e.type
				},
				file : function(e) {
					return "file" === e.type
				},
				password : function(e) {
					return "password" === e.type
				},
				submit : function(e) {
					return "submit" === e.type
				},
				image : function(e) {
					return "image" === e.type
				},
				reset : function(e) {
					return "reset" === e.type
				},
				button : function(e) {
					return "button" === e.type
							|| e.nodeName.toUpperCase() === "BUTTON"
				},
				input : function(e) {
					return /input|select|textarea|button/i.test(e.nodeName)
				}
			},
			setFilters : {
				first : function(e, g) {
					return g === 0
				},
				last : function(e, g, j, l) {
					return g === l.length - 1
				},
				even : function(e, g) {
					return g % 2 === 0
				},
				odd : function(e, g) {
					return g % 2 === 1
				},
				lt : function(e, g, j) {
					return g < j[3] - 0
				},
				gt : function(e, g, j) {
					return g > j[3] - 0
				},
				nth : function(e, g, j) {
					return j[3] - 0 == g
				},
				eq : function(e, g, j) {
					return j[3] - 0 == g
				}
			},
			filter : {
				PSEUDO : function(e, g, j, l) {
					var o = g[1], r = h.filters[o];
					if (r)
						return r(e, j, g, l);
					else if (o === "contains")
						return (e.textContent || e.innerText || "")
								.indexOf(g[3]) >= 0;
					else if (o === "not") {
						g = g[3];
						j = 0;
						for (l = g.length; j < l; j++)
							if (g[j] === e)
								return false;
						return true
					}
				},
				CHILD : function(e, g) {
					var j = g[1], l = e;
					switch (j) {
					case "only":
					case "first":
						for (; l = l.previousSibling;)
							if (l.nodeType === 1)
								return false;
						if (j == "first")
							return true;
						l = e;
					case "last":
						for (; l = l.nextSibling;)
							if (l.nodeType === 1)
								return false;
						return true;
					case "nth":
						j = g[2];
						var o = g[3];
						if (j == 1 && o == 0)
							return true;
						g = g[0];
						var r = e.parentNode;
						if (r && (r.sizcache !== g || !e.nodeIndex)) {
							var z = 0;
							for (l = r.firstChild; l; l = l.nextSibling)
								if (l.nodeType === 1)
									l.nodeIndex = ++z;
							r.sizcache = g
						}
						e = e.nodeIndex - o;
						return j == 0 ? e == 0 : e % j == 0 && e / j >= 0
					}
				},
				ID : function(e, g) {
					return e.nodeType === 1 && e.getAttribute("id") === g
				},
				TAG : function(e, g) {
					return g === "*" && e.nodeType === 1 || e.nodeName === g
				},
				CLASS : function(e, g) {
					return (" " + (e.className || e.getAttribute("class")) + " ")
							.indexOf(g) > -1
				},
				ATTR : function(e, g) {
					var j = g[1];
					e = h.attrHandle[j] ? h.attrHandle[j](e)
							: e[j] != null ? e[j] : e.getAttribute(j);
					j = e + "";
					var l = g[2];
					g = g[4];
					return e == null ? l === "!="
							: l === "=" ? j === g
									: l === "*=" ? j.indexOf(g) >= 0
											: l === "~=" ? (" " + j + " ")
													.indexOf(g) >= 0
													: !g ? j && e !== false
															: l === "!=" ? j != g
																	: l === "^=" ? j
																			.indexOf(g) === 0
																			: l === "$=" ? j
																					.substr(j.length
																							- g.length) === g
																					: l === "|=" ? j === g
																							|| j
																									.substr(
																											0,
																											g.length + 1) === g
																									+ "-"
																							: false
				},
				POS : function(e, g, j, l) {
					var o = g[2];
					if (o = h.setFilters[o])
						return o(e, j, g, l)
				}
			}
		}, k = h.match.POS;
		for ( var q in h.match)
			h.match[q] = RegExp(h.match[q].source
					+ /(?![^\[]*\])(?![^\(]*\))/.source);
		var n = function(e, g) {
			e = Array.prototype.slice.call(e);
			if (g) {
				g.push.apply(g, e);
				return g
			}
			return e
		};
		try {
			Array.prototype.slice.call(document.documentElement.childNodes)
		} catch (D) {
			n = function(e, g) {
				g = g || [];
				if (d.call(e) === "[object Array]")
					Array.prototype.push.apply(g, e);
				else if (typeof e.length === "number")
					for ( var j = 0, l = e.length; j < l; j++)
						g.push(e[j]);
				else
					for (j = 0; e[j]; j++)
						g.push(e[j]);
				return g
			}
		}
		var K, L;
		if (document.documentElement.compareDocumentPosition)
			K = function(e, g) {
				e = e.compareDocumentPosition(g) & 4 ? -1 : e === g ? 0 : 1;
				if (e === 0)
					L = true;
				return e
			};
		else if ("sourceIndex" in document.documentElement)
			K = function(e, g) {
				e = e.sourceIndex - g.sourceIndex;
				if (e === 0)
					L = true;
				return e
			};
		else if (document.createRange)
			K = function(e, g) {
				var j = e.ownerDocument.createRange(), l = g.ownerDocument
						.createRange();
				j.selectNode(e);
				j.collapse(true);
				l.selectNode(g);
				l.collapse(true);
				e = j.compareBoundaryPoints(Range.START_TO_END, l);
				if (e === 0)
					L = true;
				return e
			};
		(function() {
			var e = document.createElement("form"), g = "script"
					+ (new Date).getTime();
			e.innerHTML = "<input name='" + g + "'/>";
			var j = document.documentElement;
			j.insertBefore(e, j.firstChild);
			if (document.getElementById(g)) {
				h.find.ID = function(l, o, r) {
					if (typeof o.getElementById !== "undefined" && !r)
						return (o = o.getElementById(l[1])) ? o.id === l[1]
								|| typeof o.getAttributeNode !== "undefined"
								&& o.getAttributeNode("id").nodeValue === l[1] ? [ o ]
								: i
								: []
				};
				h.filter.ID = function(l, o) {
					var r = typeof l.getAttributeNode !== "undefined"
							&& l.getAttributeNode("id");
					return l.nodeType === 1 && r && r.nodeValue === o
				}
			}
			j.removeChild(e)
		})();
		(function() {
			var e = document.createElement("div");
			e.appendChild(document.createComment(""));
			if (e.getElementsByTagName("*").length > 0)
				h.find.TAG = function(g, j) {
					j = j.getElementsByTagName(g[1]);
					if (g[1] === "*") {
						g = [];
						for ( var l = 0; j[l]; l++)
							j[l].nodeType === 1 && g.push(j[l]);
						j = g
					}
					return j
				};
			e.innerHTML = "<a href='#'></a>";
			if (e.firstChild
					&& typeof e.firstChild.getAttribute !== "undefined"
					&& e.firstChild.getAttribute("href") !== "#")
				h.attrHandle.href = function(g) {
					return g.getAttribute("href", 2)
				}
		})();
		document.querySelectorAll
				&& function() {
					var e = f, g = document.createElement("div");
					g.innerHTML = "<p class='TEST'></p>";
					if (!(g.querySelectorAll && g.querySelectorAll(".TEST").length === 0)) {
						f = function(j, l, o, r) {
							l = l || document;
							if (!r && l.nodeType === 9 && !O(l))
								try {
									return n(l.querySelectorAll(j), o)
								} catch (z) {
								}
							return e(j, l, o, r)
						};
						f.find = e.find;
						f.filter = e.filter;
						f.selectors = e.selectors;
						f.matches = e.matches
					}
				}();
		document.getElementsByClassName
				&& document.documentElement.getElementsByClassName
				&& function() {
					var e = document.createElement("div");
					e.innerHTML = "<div class='test e'></div><div class='test'></div>";
					if (e.getElementsByClassName("e").length !== 0) {
						e.lastChild.className = "e";
						if (e.getElementsByClassName("e").length !== 1) {
							h.order.splice(1, 0, "CLASS");
							h.find.CLASS = function(g, j, l) {
								if (typeof j.getElementsByClassName !== "undefined"
										&& !l)
									return j.getElementsByClassName(g[1])
							}
						}
					}
				}();
		function G(e, g, j, l, o, r) {
			o = e == "previousSibling" && !r;
			for ( var z = 0, N = l.length; z < N; z++) {
				var B = l[z];
				if (B) {
					if (o && B.nodeType === 1) {
						B.sizcache = j;
						B.sizset = z
					}
					B = B[e];
					for ( var Q = false; B;) {
						if (B.sizcache === j) {
							Q = l[B.sizset];
							break
						}
						if (B.nodeType === 1 && !r) {
							B.sizcache = j;
							B.sizset = z
						}
						if (B.nodeName === g) {
							Q = B;
							break
						}
						B = B[e]
					}
					l[z] = Q
				}
			}
		}
		function S(e, g, j, l, o, r) {
			o = e == "previousSibling" && !r;
			for ( var z = 0, N = l.length; z < N; z++) {
				var B = l[z];
				if (B) {
					if (o && B.nodeType === 1) {
						B.sizcache = j;
						B.sizset = z
					}
					B = B[e];
					for ( var Q = false; B;) {
						if (B.sizcache === j) {
							Q = l[B.sizset];
							break
						}
						if (B.nodeType === 1) {
							if (!r) {
								B.sizcache = j;
								B.sizset = z
							}
							if (typeof g !== "string") {
								if (B === g) {
									Q = true;
									break
								}
							} else if (f.filter(g, [ B ]).length > 0) {
								Q = B;
								break
							}
						}
						B = B[e]
					}
					l[z] = Q
				}
			}
		}
		var T = document.compareDocumentPosition ? function(e, g) {
			return e.compareDocumentPosition(g) & 16
		} : function(e, g) {
			return e !== g && (e.contains ? e.contains(g) : true)
		}, O = function(e) {
			return e.nodeType === 9 && e.documentElement.nodeName !== "HTML"
					|| !!e.ownerDocument && O(e.ownerDocument)
		}, aa = function(e, g) {
			var j = [], l = "", o;
			for (g = g.nodeType ? [ g ] : g; o = h.match.PSEUDO.exec(e);) {
				l += o[0];
				e = e.replace(h.match.PSEUDO, "")
			}
			e = h.relative[e] ? e + "*" : e;
			o = 0;
			for ( var r = g.length; o < r; o++)
				f(e, g[o], j);
			return f.filter(l, j)
		};
		c.find = f;
		c.filter = f.filter;
		c.expr = f.selectors;
		c.expr[":"] = c.expr.filters;
		f.selectors.filters.hidden = function(e) {
			return e.offsetWidth === 0 || e.offsetHeight === 0
		};
		f.selectors.filters.visible = function(e) {
			return e.offsetWidth > 0 || e.offsetHeight > 0
		};
		f.selectors.filters.animated = function(e) {
			return c.grep(c.timers, function(g) {
				return e === g.elem
			}).length
		};
		c.multiFilter = function(e, g, j) {
			if (j)
				e = ":not(" + e + ")";
			return f.matches(e, g)
		};
		c.dir = function(e, g) {
			var j = [];
			for (e = e[g]; e && e != document;) {
				e.nodeType == 1 && j.push(e);
				e = e[g]
			}
			return j
		};
		c.nth = function(e, g, j) {
			g = g || 1;
			for ( var l = 0; e; e = e[j])
				if (e.nodeType == 1 && ++l == g)
					break;
			return e
		};
		c.sibling = function(e, g) {
			for ( var j = []; e; e = e.nextSibling)
				e.nodeType == 1 && e != g && j.push(e);
			return j
		}
	})();
	c.event = {
		add : function(a, b, d, f) {
			if (!(a.nodeType == 3 || a.nodeType == 8)) {
				if (a.setInterval && a != v)
					a = v;
				if (!d.guid)
					d.guid = this.guid++;
				if (f !== i) {
					var h = d;
					d = this.proxy(h);
					d.data = f
				}
				var k = c.data(a, "events") || c.data(a, "events", {}), q = c
						.data(a, "handle")
						|| c.data(a, "handle", function() {
							return typeof c !== "undefined"
									&& !c.event.triggered ? c.event.handle
									.apply(arguments.callee.elem, arguments)
									: i
						});
				q.elem = a;
				c.each(b.split(/\s+/),
						function(n, D) {
							n = D.split(".");
							D = n.shift();
							d.type = n.slice().sort().join(".");
							var K = k[D];
							c.event.specialAll[D]
									&& c.event.specialAll[D].setup
											.call(a, f, n);
							if (!K) {
								K = k[D] = {};
								if (!c.event.special[D]
										|| c.event.special[D].setup.call(a, f,
												n) === false)
									if (a.addEventListener)
										a.addEventListener(D, q, false);
									else
										a.attachEvent
												&& a.attachEvent("on" + D, q)
							}
							K[d.guid] = d;
							c.event.global[D] = true
						});
				a = null
			}
		},
		guid : 1,
		global : {},
		remove : function(a, b, d) {
			if (!(a.nodeType == 3 || a.nodeType == 8)) {
				var f = c.data(a, "events"), h;
				if (f) {
					if (b === i || typeof b === "string" && b.charAt(0) == ".")
						for ( var k in f)
							this.remove(a, k + (b || ""));
					else {
						if (b.type) {
							d = b.handler;
							b = b.type
						}
						c
								.each(
										b.split(/\s+/),
										function(q, n) {
											q = n.split(".");
											n = q.shift();
											var D = RegExp("(^|\\.)"
													+ q.slice().sort().join(
															".*\\.")
													+ "(\\.|$)");
											if (f[n]) {
												if (d)
													delete f[n][d.guid];
												else
													for ( var K in f[n])
														D.test(f[n][K].type)
																&& delete f[n][K];
												c.event.specialAll[n]
														&& c.event.specialAll[n].teardown
																.call(a, q);
												for (h in f[n])
													break;
												if (!h) {
													if (!c.event.special[n]
															|| c.event.special[n].teardown
																	.call(a, q) === false)
														if (a.removeEventListener)
															a
																	.removeEventListener(
																			n,
																			c
																					.data(
																							a,
																							"handle"),
																			false);
														else
															a.detachEvent
																	&& a
																			.detachEvent(
																					"on"
																							+ n,
																					c
																							.data(
																									a,
																									"handle"));
													h = null;
													delete f[n]
												}
											}
										})
					}
					for (h in f)
						break;
					if (!h) {
						if (b = c.data(a, "handle"))
							b.elem = null;
						c.removeData(a, "events");
						c.removeData(a, "handle")
					}
				}
			}
		},
		trigger : function(a, b, d, f) {
			var h = a.type || a;
			if (!f) {
				a = typeof a === "object" ? a[t] ? a : c.extend(c.Event(h), a)
						: c.Event(h);
				if (h.indexOf("!") >= 0) {
					a.type = h = h.slice(0, -1);
					a.exclusive = true
				}
				if (!d) {
					a.stopPropagation();
					this.global[h]
							&& c.each(c.cache, function() {
								this.events
										&& this.events[h]
										&& c.event.trigger(a, b,
												this.handle.elem)
							})
				}
				if (!d || d.nodeType == 3 || d.nodeType == 8)
					return i;
				a.result = i;
				a.target = d;
				b = c.makeArray(b);
				b.unshift(a)
			}
			a.currentTarget = d;
			var k = c.data(d, "handle");
			k && k.apply(d, b);
			if ((!d[h] || c.nodeName(d, "a") && h == "click") && d["on" + h]
					&& d["on" + h].apply(d, b) === false)
				a.result = false;
			if (!f && d[h] && !a.isDefaultPrevented()
					&& !(c.nodeName(d, "a") && h == "click")) {
				this.triggered = true;
				try {
					d[h]()
				} catch (q) {
				}
			}
			this.triggered = false;
			if (!a.isPropagationStopped())
				(d = d.parentNode || d.ownerDocument)
						&& c.event.trigger(a, b, d, true)
		},
		handle : function(a) {
			var b, d;
			a = arguments[0] = c.event.fix(a || v.event);
			a.currentTarget = this;
			d = a.type.split(".");
			a.type = d.shift();
			b = !d.length && !a.exclusive;
			var f = RegExp("(^|\\.)" + d.slice().sort().join(".*\\.")
					+ "(\\.|$)");
			d = (c.data(this, "events") || {})[a.type];
			for ( var h in d) {
				var k = d[h];
				if (b || f.test(k.type)) {
					a.handler = k;
					a.data = k.data;
					k = k.apply(this, arguments);
					if (k !== i) {
						a.result = k;
						if (k === false) {
							a.preventDefault();
							a.stopPropagation()
						}
					}
					if (a.isImmediatePropagationStopped())
						break
				}
			}
		},
		props : "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which"
				.split(" "),
		fix : function(a) {
			if (a[t])
				return a;
			var b = a;
			a = c.Event(b);
			for ( var d = this.props.length, f; d;) {
				f = this.props[--d];
				a[f] = b[f]
			}
			if (!a.target)
				a.target = a.srcElement || document;
			if (a.target.nodeType == 3)
				a.target = a.target.parentNode;
			if (!a.relatedTarget && a.fromElement)
				a.relatedTarget = a.fromElement == a.target ? a.toElement
						: a.fromElement;
			if (a.pageX == null && a.clientX != null) {
				b = document.documentElement;
				d = document.body;
				a.pageX = a.clientX
						+ (b && b.scrollLeft || d && d.scrollLeft || 0)
						- (b.clientLeft || 0);
				a.pageY = a.clientY
						+ (b && b.scrollTop || d && d.scrollTop || 0)
						- (b.clientTop || 0)
			}
			if (!a.which
					&& (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode))
				a.which = a.charCode || a.keyCode;
			if (!a.metaKey && a.ctrlKey)
				a.metaKey = a.ctrlKey;
			if (!a.which && a.button)
				a.which = a.button & 1 ? 1 : a.button & 2 ? 3
						: a.button & 4 ? 2 : 0;
			return a
		},
		proxy : function(a, b) {
			b = b || function() {
				return a.apply(this, arguments)
			};
			b.guid = a.guid = a.guid || b.guid || this.guid++;
			return b
		},
		special : {
			ready : {
				setup : ga,
				teardown : function() {
				}
			}
		},
		specialAll : {
			live : {
				setup : function(a, b) {
					c.event.add(this, b[0], V)
				},
				teardown : function(a) {
					if (a.length) {
						var b = 0, d = RegExp("(^|\\.)" + a[0] + "(\\.|$)");
						c.each(c.data(this, "events").live || {}, function() {
							d.test(this.type) && b++
						});
						b < 1 && c.event.remove(this, a[0], V)
					}
				}
			}
		}
	};
	c.Event = function(a) {
		if (!this.preventDefault)
			return new c.Event(a);
		if (a && a.type) {
			this.originalEvent = a;
			this.type = a.type
		} else
			this.type = a;
		this.timeStamp = J();
		this[t] = true
	};
	function H() {
		return false
	}
	function P() {
		return true
	}
	c.Event.prototype = {
		preventDefault : function() {
			this.isDefaultPrevented = P;
			var a = this.originalEvent;
			if (a) {
				a.preventDefault && a.preventDefault();
				a.returnValue = false
			}
		},
		stopPropagation : function() {
			this.isPropagationStopped = P;
			var a = this.originalEvent;
			if (a) {
				a.stopPropagation && a.stopPropagation();
				a.cancelBubble = true
			}
		},
		stopImmediatePropagation : function() {
			this.isImmediatePropagationStopped = P;
			this.stopPropagation()
		},
		isDefaultPrevented : H,
		isPropagationStopped : H,
		isImmediatePropagationStopped : H
	};
	var F = function(a) {
		for ( var b = a.relatedTarget; b && b != this;)
			try {
				b = b.parentNode
			} catch (d) {
				b = this
			}
		if (b != this) {
			a.type = a.data;
			c.event.handle.apply(this, arguments)
		}
	};
	c.each({
		mouseover : "mouseenter",
		mouseout : "mouseleave"
	}, function(a, b) {
		c.event.special[b] = {
			setup : function() {
				c.event.add(this, a, F, b)
			},
			teardown : function() {
				c.event.remove(this, a, F)
			}
		}
	});
	c.fn.extend({
		bind : function(a, b, d) {
			return a == "unload" ? this.one(a, b, d) : this.each(function() {
				c.event.add(this, a, d || b, d && b)
			})
		},
		one : function(a, b, d) {
			var f = c.event.proxy(d || b, function(h) {
				c(this).unbind(h, f);
				return (d || b).apply(this, arguments)
			});
			return this.each(function() {
				c.event.add(this, a, f, d && b)
			})
		},
		unbind : function(a, b) {
			return this.each(function() {
				c.event.remove(this, a, b)
			})
		},
		trigger : function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler : function(a, b) {
			if (this[0]) {
				a = c.Event(a);
				a.preventDefault();
				a.stopPropagation();
				c.event.trigger(a, b, this[0]);
				return a.result
			}
		},
		toggle : function(a) {
			for ( var b = arguments, d = 1; d < b.length;)
				c.event.proxy(a, b[d++]);
			return this.click(c.event.proxy(a, function(f) {
				this.lastToggle = (this.lastToggle || 0) % d;
				f.preventDefault();
				return b[this.lastToggle++].apply(this, arguments) || false
			}))
		},
		hover : function(a, b) {
			return this.mouseenter(a).mouseleave(b)
		},
		ready : function(a) {
			ga();
			c.isReady ? a.call(document, c) : c.readyList.push(a);
			return this
		},
		live : function(a, b) {
			b = c.event.proxy(b);
			b.guid += this.selector + a;
			c(document).bind(W(a, this.selector), this.selector, b);
			return this
		},
		die : function(a, b) {
			c(document).unbind(W(a, this.selector), b ? {
				guid : b.guid + this.selector + a
			} : null);
			return this
		}
	});
	function V(a) {
		var b = RegExp("(^|\\.)" + a.type + "(\\.|$)"), d = true, f = [];
		c.each(c.data(this, "events").live || [], function(h, k) {
			if (b.test(k.type))
				(h = c(a.target).closest(k.data)[0]) && f.push({
					elem : h,
					fn : k
				})
		});
		f.sort(function(h, k) {
			return c.data(h.elem, "closest") - c.data(k.elem, "closest")
		});
		c.each(f, function() {
			if (this.fn.call(this.elem, a, this.fn.data) === false)
				return d = false
		});
		return d
	}
	function W(a, b) {
		return [ "live", a, b.replace(/\./g, "`").replace(/ /g, "|") ]
				.join(".")
	}
	c.extend({
		isReady : false,
		readyList : [],
		ready : function() {
			if (!c.isReady) {
				c.isReady = true;
				if (c.readyList) {
					c.each(c.readyList, function() {
						this.call(document, c)
					});
					c.readyList = null
				}
				c(document).triggerHandler("ready")
			}
		}
	});
	var R = false;
	function ga() {
		if (!R) {
			R = true;
			if (document.addEventListener)
				document.addEventListener("DOMContentLoaded", function() {
					document.removeEventListener("DOMContentLoaded",
							arguments.callee, false);
					c.ready()
				}, false);
			else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", function() {
					if (document.readyState === "complete") {
						document.detachEvent("onreadystatechange",
								arguments.callee);
						c.ready()
					}
				});
				document.documentElement.doScroll && v == v.top && function() {
					if (!c.isReady) {
						try {
							document.documentElement.doScroll("left")
						} catch (a) {
							setTimeout(arguments.callee, 0);
							return
						}
						c.ready()
					}
				}()
			}
			c.event.add(v, "load", c.ready)
		}
	}
	c
			.each(
					"blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error"
							.split(","), function(a, b) {
						c.fn[b] = function(d) {
							return d ? this.bind(b, d) : this.trigger(b)
						}
					});
	c(v).bind(
			"unload",
			function() {
				for ( var a in c.cache)
					a != 1 && c.cache[a].handle
							&& c.event.remove(c.cache[a].handle.elem)
			});
	(function() {
		c.support = {};
		var a = document.documentElement, b = document.createElement("script"), d = document
				.createElement("div"), f = "script" + (new Date).getTime();
		d.style.display = "none";
		d.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
		var h = d.getElementsByTagName("*"), k = d.getElementsByTagName("a")[0];
		if (!(!h || !h.length || !k)) {
			c.support = {
				leadingWhitespace : d.firstChild.nodeType == 3,
				tbody : !d.getElementsByTagName("tbody").length,
				objectAll : !!d.getElementsByTagName("object")[0]
						.getElementsByTagName("*").length,
				htmlSerialize : !!d.getElementsByTagName("link").length,
				style : /red/.test(k.getAttribute("style")),
				hrefNormalized : k.getAttribute("href") === "/a",
				opacity : k.style.opacity === "0.5",
				cssFloat : !!k.style.cssFloat,
				scriptEval : false,
				noCloneEvent : true,
				boxModel : null
			};
			b.type = "text/javascript";
			try {
				b.appendChild(document.createTextNode("window." + f + "=1;"))
			} catch (q) {
			}
			a.insertBefore(b, a.firstChild);
			if (v[f]) {
				c.support.scriptEval = true;
				delete v[f]
			}
			a.removeChild(b);
			if (d.attachEvent && d.fireEvent) {
				d.attachEvent("onclick", function() {
					c.support.noCloneEvent = false;
					d.detachEvent("onclick", arguments.callee)
				});
				d.cloneNode(true).fireEvent("onclick")
			}
			c(function() {
				var n = document.createElement("div");
				n.style.width = n.style.paddingLeft = "1px";
				document.body.appendChild(n);
				c.boxModel = c.support.boxModel = n.offsetWidth === 2;
				document.body.removeChild(n).style.display = "none"
			})
		}
	})();
	var Z = c.support.cssFloat ? "cssFloat" : "styleFloat";
	c.props = {
		"for" : "htmlFor",
		"class" : "className",
		"float" : Z,
		cssFloat : Z,
		styleFloat : Z,
		readonly : "readOnly",
		maxlength : "maxLength",
		cellspacing : "cellSpacing",
		rowspan : "rowSpan",
		tabindex : "tabIndex"
	};
	c.fn
			.extend({
				_load : c.fn.load,
				load : function(a, b, d) {
					if (typeof a !== "string")
						return this._load(a);
					var f = a.indexOf(" ");
					if (f >= 0) {
						var h = a.slice(f, a.length);
						a = a.slice(0, f)
					}
					f = "GET";
					if (b)
						if (c.isFunction(b)) {
							d = b;
							b = null
						} else if (typeof b === "object") {
							b = c.param(b);
							f = "POST"
						}
					var k = this;
					c
							.ajax({
								url : a,
								type : f,
								dataType : "html",
								data : b,
								complete : function(q, n) {
									if (n == "success" || n == "notmodified")
										k
												.html(h ? c("<div/>")
														.append(
																q.responseText
																		.replace(
																				/<script(.|\s)*?\/script>/g,
																				""))
														.find(h)
														: q.responseText);
									d && k.each(d, [ q.responseText, n, q ])
								}
							});
					return this
				},
				serialize : function() {
					return c.param(this.serializeArray())
				},
				serializeArray : function() {
					return this
							.map(
									function() {
										return this.elements ? c
												.makeArray(this.elements)
												: this
									})
							.filter(
									function() {
										return this.name
												&& !this.disabled
												&& (this.checked
														|| /select|textarea/i
																.test(this.nodeName) || /text|hidden|password|search/i
														.test(this.type))
									}).map(
									function(a, b) {
										a = c(this).val();
										return a == null ? null
												: c.isArray(a) ? c.map(a,
														function(d) {
															return {
																name : b.name,
																value : d
															}
														}) : {
													name : b.name,
													value : a
												}
									}).get()
				}
			});
	c.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend"
			.split(","), function(a, b) {
		c.fn[b] = function(d) {
			return this.bind(b, d)
		}
	});
	var ja = J();
	c
			.extend({
				get : function(a, b, d, f) {
					if (c.isFunction(b)) {
						d = b;
						b = null
					}
					return c.ajax({
						type : "GET",
						url : a,
						data : b,
						success : d,
						dataType : f
					})
				},
				getScript : function(a, b) {
					return c.get(a, null, b, "script")
				},
				getJSON : function(a, b, d) {
					return c.get(a, b, d, "json")
				},
				post : function(a, b, d, f) {
					if (c.isFunction(b)) {
						d = b;
						b = {}
					}
					return c.ajax({
						type : "POST",
						url : a,
						data : b,
						success : d,
						dataType : f
					})
				},
				ajaxSetup : function(a) {
					c.extend(c.ajaxSettings, a)
				},
				ajaxSettings : {
					url : location.href,
					global : true,
					type : "GET",
					contentType : "application/x-www-form-urlencoded",
					processData : true,
					async : true,
					xhr : function() {
						return v.ActiveXObject ? new ActiveXObject(
								"Microsoft.XMLHTTP") : new XMLHttpRequest
					},
					accepts : {
						xml : "application/xml, text/xml",
						html : "text/html",
						script : "text/javascript, application/javascript",
						json : "application/json, text/javascript",
						text : "text/plain",
						_default : "*/*"
					}
				},
				lastModified : {},
				ajax : function(a) {
					a = c
							.extend(true, a, c.extend(true, {}, c.ajaxSettings,
									a));
					var b, d = /=\?(&|$)/g, f, h, k = a.type.toUpperCase();
					if (a.data && a.processData && typeof a.data !== "string")
						a.data = c.param(a.data);
					if (a.dataType == "jsonp") {
						if (k == "GET")
							a.url.match(d)
									|| (a.url += (a.url.match(/\?/) ? "&" : "?")
											+ (a.jsonp || "callback") + "=?");
						else if (!a.data || !a.data.match(d))
							a.data = (a.data ? a.data + "&" : "")
									+ (a.jsonp || "callback") + "=?";
						a.dataType = "json"
					}
					if (a.dataType == "json"
							&& (a.data && a.data.match(d) || a.url.match(d))) {
						b = "jsonp" + ja++;
						if (a.data)
							a.data = (a.data + "").replace(d, "=" + b + "$1");
						a.url = a.url.replace(d, "=" + b + "$1");
						a.dataType = "script";
						v[b] = function(j) {
							h = j;
							e();
							g();
							v[b] = i;
							try {
								delete v[b]
							} catch (l) {
							}
							n && n.removeChild(D)
						}
					}
					if (a.dataType == "script" && a.cache == null)
						a.cache = false;
					if (a.cache === false && k == "GET") {
						d = J();
						var q = a.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + d
								+ "$2");
						a.url = q
								+ (q == a.url ? (a.url.match(/\?/) ? "&" : "?")
										+ "_=" + d : "")
					}
					if (a.data && k == "GET") {
						a.url += (a.url.match(/\?/) ? "&" : "?") + a.data;
						a.data = null
					}
					a.global && !c.active++ && c.event.trigger("ajaxStart");
					d = /^(\w+:)?\/\/([^\/?#]+)/.exec(a.url);
					if (a.dataType == "script"
							&& k == "GET"
							&& d
							&& (d[1] && d[1] != location.protocol || d[2] != location.host)) {
						var n = document.getElementsByTagName("head")[0], D = document
								.createElement("script");
						D.src = a.url;
						if (a.scriptCharset)
							D.charset = a.scriptCharset;
						if (!b) {
							var K = false;
							D.onload = D.onreadystatechange = function() {
								if (!K
										&& (!this.readyState
												|| this.readyState == "loaded" || this.readyState == "complete")) {
									K = true;
									e();
									g();
									D.onload = D.onreadystatechange = null;
									n.removeChild(D)
								}
							}
						}
						n.appendChild(D);
						return i
					}
					var L = false, G = a.xhr();
					a.username ? G.open(k, a.url, a.async, a.username,
							a.password) : G.open(k, a.url, a.async);
					try {
						a.data
								&& G.setRequestHeader("Content-Type",
										a.contentType);
						if (a.ifModified)
							G.setRequestHeader("If-Modified-Since",
									c.lastModified[a.url]
											|| "Thu, 01 Jan 1970 00:00:00 GMT");
						G
								.setRequestHeader("X-Requested-With",
										"XMLHttpRequest");
						G
								.setRequestHeader(
										"Accept",
										a.dataType && a.accepts[a.dataType] ? a.accepts[a.dataType]
												+ ", */*"
												: a.accepts._default)
					} catch (S) {
					}
					if (a.beforeSend && a.beforeSend(G, a) === false) {
						a.global && !--c.active && c.event.trigger("ajaxStop");
						G.abort();
						return false
					}
					a.global && c.event.trigger("ajaxSend", [ G, a ]);
					var T = function(j) {
						if (G.readyState == 0) {
							if (O) {
								clearInterval(O);
								O = null;
								a.global && !--c.active
										&& c.event.trigger("ajaxStop")
							}
						} else if (!L && G
								&& (G.readyState == 4 || j == "timeout")) {
							L = true;
							if (O) {
								clearInterval(O);
								O = null
							}
							f = j == "timeout" ? "timeout"
									: !c.httpSuccess(G) ? "error"
											: a.ifModified
													&& c.httpNotModified(G,
															a.url) ? "notmodified"
													: "success";
							if (f == "success")
								try {
									h = c.httpData(G, a.dataType, a)
								} catch (l) {
									f = "parsererror"
								}
							if (f == "success") {
								var o;
								try {
									o = G.getResponseHeader("Last-Modified")
								} catch (r) {
								}
								if (a.ifModified && o)
									c.lastModified[a.url] = o;
								b || e()
							} else
								c.handleError(a, G, f);
							g();
							j && G.abort();
							if (a.async)
								G = null
						}
					};
					if (a.async) {
						var O = setInterval(T, 13);
						a.timeout > 0 && setTimeout(function() {
							G && !L && T("timeout")
						}, a.timeout)
					}
					try {
						G.send(a.data)
					} catch (aa) {
						c.handleError(a, G, null, aa)
					}
					a.async || T();
					function e() {
						a.success && a.success(h, f);
						a.global && c.event.trigger("ajaxSuccess", [ G, a ])
					}
					function g() {
						a.complete && a.complete(G, f);
						a.global && c.event.trigger("ajaxComplete", [ G, a ]);
						a.global && !--c.active && c.event.trigger("ajaxStop")
					}
					return G
				},
				handleError : function(a, b, d, f) {
					a.error && a.error(b, d, f);
					a.global && c.event.trigger("ajaxError", [ b, a, f ])
				},
				active : 0,
				httpSuccess : function(a) {
					try {
						return !a.status && location.protocol == "file:"
								|| a.status >= 200 && a.status < 300
								|| a.status == 304 || a.status == 1223
					} catch (b) {
					}
					return false
				},
				httpNotModified : function(a, b) {
					try {
						var d = a.getResponseHeader("Last-Modified");
						return a.status == 304 || d == c.lastModified[b]
					} catch (f) {
					}
					return false
				},
				httpData : function(a, b, d) {
					var f = a.getResponseHeader("content-type");
					a = (f = b == "xml" || !b && f && f.indexOf("xml") >= 0) ? a.responseXML
							: a.responseText;
					if (f && a.documentElement.tagName == "parsererror")
						throw "parsererror";
					if (d && d.dataFilter)
						a = d.dataFilter(a, b);
					if (typeof a === "string") {
						b == "script" && c.globalEval(a);
						if (b == "json")
							a = v.eval("(" + a + ")")
					}
					return a
				},
				param : function(a) {
					var b = [];
					function d(h, k) {
						b[b.length] = encodeURIComponent(h) + "="
								+ encodeURIComponent(k)
					}
					if (c.isArray(a) || a.jquery)
						c.each(a, function() {
							d(this.name, this.value)
						});
					else
						for ( var f in a)
							c.isArray(a[f]) ? c.each(a[f], function() {
								d(f, this)
							}) : d(f, c.isFunction(a[f]) ? a[f]() : a[f]);
					return b.join("&").replace(/%20/g, "+")
				}
			});
	var ea = {}, da, ha = [
			[ "height", "marginTop", "marginBottom", "paddingTop",
					"paddingBottom" ],
			[ "width", "marginLeft", "marginRight", "paddingLeft",
					"paddingRight" ], [ "opacity" ] ];
	function X(a, b) {
		var d = {};
		c.each(ha.concat.apply([], ha.slice(0, b)), function() {
			d[this] = a
		});
		return d
	}
	c.fn
			.extend({
				show : function(a, b) {
					if (a)
						return this.animate(X("show", 3), a, b);
					else {
						a = 0;
						for (b = this.length; a < b; a++) {
							var d = c.data(this[a], "olddisplay");
							this[a].style.display = d || "";
							if (c.css(this[a], "display") === "none") {
								d = this[a].tagName;
								var f;
								if (ea[d])
									f = ea[d];
								else {
									var h = c("<" + d + " />").appendTo("body");
									f = h.css("display");
									if (f === "none")
										f = "block";
									h.remove();
									ea[d] = f
								}
								c.data(this[a], "olddisplay", f)
							}
						}
						a = 0;
						for (b = this.length; a < b; a++)
							this[a].style.display = c.data(this[a],
									"olddisplay")
									|| "";
						return this
					}
				},
				hide : function(a, b) {
					if (a)
						return this.animate(X("hide", 3), a, b);
					else {
						a = 0;
						for (b = this.length; a < b; a++) {
							var d = c.data(this[a], "olddisplay");
							!d
									&& d !== "none"
									&& c.data(this[a], "olddisplay", c.css(
											this[a], "display"))
						}
						a = 0;
						for (b = this.length; a < b; a++)
							this[a].style.display = "none";
						return this
					}
				},
				_toggle : c.fn.toggle,
				toggle : function(a, b) {
					var d = typeof a === "boolean";
					return c.isFunction(a) && c.isFunction(b) ? this._toggle
							.apply(this, arguments) : a == null || d ? this
							.each(function() {
								var f = d ? a : c(this).is(":hidden");
								c(this)[f ? "show" : "hide"]()
							}) : this.animate(X("toggle", 3), a, b)
				},
				fadeTo : function(a, b, d) {
					return this.animate({
						opacity : b
					}, a, d)
				},
				animate : function(a, b, d, f) {
					var h = c.speed(b, d, f);
					return this[h.queue === false ? "each" : "queue"]
							(function() {
								var k = c.extend({}, h), q, n = this.nodeType == 1
										&& c(this).is(":hidden"), D = this;
								for (q in a) {
									if (a[q] == "hide" && n || a[q] == "show"
											&& !n)
										return k.complete.call(this);
									if ((q == "height" || q == "width")
											&& this.style) {
										k.display = c.css(this, "display");
										k.overflow = this.style.overflow
									}
								}
								if (k.overflow != null)
									this.style.overflow = "hidden";
								k.curAnim = c.extend({}, a);
								c
										.each(
												a,
												function(K, L) {
													var G = new c.fx(D, k, K);
													if (/toggle|show|hide/
															.test(L))
														G[L == "toggle" ? n ? "show"
																: "hide"
																: L](a);
													else {
														var S = L
																.toString()
																.match(
																		/^([+-]=)?([\d+-.]+)(.*)$/), T = G
																.cur(true) || 0;
														if (S) {
															L = parseFloat(S[2]);
															var O = S[3]
																	|| "px";
															if (O != "px") {
																D.style[K] = (L || 1)
																		+ O;
																T = (L || 1)
																		/ G
																				.cur(true)
																		* T;
																D.style[K] = T
																		+ O
															}
															if (S[1])
																L = (S[1] == "-=" ? -1
																		: 1)
																		* L + T;
															G.custom(T, L, O)
														} else
															G.custom(T, L, "")
													}
												});
								return true
							})
				},
				stop : function(a, b) {
					var d = c.timers;
					a && this.queue([]);
					this.each(function() {
						for ( var f = d.length - 1; f >= 0; f--)
							if (d[f].elem == this) {
								b && d[f](true);
								d.splice(f, 1)
							}
					});
					b || this.dequeue();
					return this
				}
			});
	c.each({
		slideDown : X("show", 1),
		slideUp : X("hide", 1),
		slideToggle : X("toggle", 1),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		}
	}, function(a, b) {
		c.fn[a] = function(d, f) {
			return this.animate(b, d, f)
		}
	});
	c.extend({
		speed : function(a, b, d) {
			var f = typeof a === "object" ? a : {
				complete : d || !d && b || c.isFunction(a) && a,
				duration : a,
				easing : d && b || b && !c.isFunction(b) && b
			};
			f.duration = c.fx.off ? 0
					: typeof f.duration === "number" ? f.duration
							: c.fx.speeds[f.duration] || c.fx.speeds._default;
			f.old = f.complete;
			f.complete = function() {
				f.queue !== false && c(this).dequeue();
				c.isFunction(f.old) && f.old.call(this)
			};
			return f
		},
		easing : {
			linear : function(a, b, d, f) {
				return d + f * a
			},
			swing : function(a, b, d, f) {
				return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + d
			}
		},
		timers : [],
		fx : function(a, b, d) {
			this.options = b;
			this.elem = a;
			this.prop = d;
			if (!b.orig)
				b.orig = {}
		}
	});
	c.fx.prototype = {
		update : function() {
			this.options.step
					&& this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this);
			if ((this.prop == "height" || this.prop == "width")
					&& this.elem.style)
				this.elem.style.display = "block"
		},
		cur : function(a) {
			if (this.elem[this.prop] != null
					&& (!this.elem.style || this.elem.style[this.prop] == null))
				return this.elem[this.prop];
			return (a = parseFloat(c.css(this.elem, this.prop, a)))
					&& a > -10000 ? a : parseFloat(c.curCSS(this.elem,
					this.prop)) || 0
		},
		custom : function(a, b, d) {
			this.startTime = J();
			this.start = a;
			this.end = b;
			this.unit = d || this.unit || "px";
			this.now = this.start;
			this.pos = this.state = 0;
			var f = this;
			function h(k) {
				return f.step(k)
			}
			h.elem = this.elem;
			if (h() && c.timers.push(h) && !da)
				da = setInterval(function() {
					for ( var k = c.timers, q = 0; q < k.length; q++)
						k[q]() || k.splice(q--, 1);
					if (!k.length) {
						clearInterval(da);
						da = i
					}
				}, 13)
		},
		show : function() {
			this.options.orig[this.prop] = c.attr(this.elem.style, this.prop);
			this.options.show = true;
			this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0,
					this.cur());
			c(this.elem).show()
		},
		hide : function() {
			this.options.orig[this.prop] = c.attr(this.elem.style, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step : function(a) {
			var b = J();
			if (a || b >= this.options.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				a = this.options.curAnim[this.prop] = true;
				for ( var d in this.options.curAnim)
					if (this.options.curAnim[d] !== true)
						a = false;
				if (a) {
					if (this.options.display != null) {
						this.elem.style.overflow = this.options.overflow;
						this.elem.style.display = this.options.display;
						if (c.css(this.elem, "display") == "none")
							this.elem.style.display = "block"
					}
					this.options.hide && c(this.elem).hide();
					if (this.options.hide || this.options.show)
						for ( var f in this.options.curAnim)
							c.attr(this.elem.style, f, this.options.orig[f]);
					this.options.complete.call(this.elem)
				}
				return false
			} else {
				d = b - this.startTime;
				this.state = d / this.options.duration;
				this.pos = c.easing[this.options.easing
						|| (c.easing.swing ? "swing" : "linear")](this.state,
						d, 0, 1, this.options.duration);
				this.now = this.start + (this.end - this.start) * this.pos;
				this.update()
			}
			return true
		}
	};
	c.extend(c.fx, {
		speeds : {
			slow : 600,
			fast : 200,
			_default : 400
		},
		step : {
			opacity : function(a) {
				c.attr(a.elem.style, "opacity", a.now)
			},
			_default : function(a) {
				if (a.elem.style && a.elem.style[a.prop] != null)
					a.elem.style[a.prop] = a.now + a.unit;
				else
					a.elem[a.prop] = a.now
			}
		}
	});
	c.fn.offset = document.documentElement.getBoundingClientRect ? function() {
		if (!this[0])
			return {
				top : 0,
				left : 0
			};
		if (this[0] === this[0].ownerDocument.body)
			return c.offset.bodyOffset(this[0]);
		var a = this[0].getBoundingClientRect(), b = this[0].ownerDocument, d = b.body;
		b = b.documentElement;
		var f = b.clientTop || d.clientTop || 0, h = b.clientLeft
				|| d.clientLeft || 0;
		f = a.top
				+ (self.pageYOffset || c.boxModel && b.scrollTop || d.scrollTop)
				- f;
		a = a.left
				+ (self.pageXOffset || c.boxModel && b.scrollLeft || d.scrollLeft)
				- h;
		return {
			top : f,
			left : a
		}
	}
			: function() {
				if (!this[0])
					return {
						top : 0,
						left : 0
					};
				if (this[0] === this[0].ownerDocument.body)
					return c.offset.bodyOffset(this[0]);
				c.offset.initialized || c.offset.initialize();
				var a = this[0], b = a.offsetParent, d = a.ownerDocument, f, h = d.documentElement, k = d.body;
				d = d.defaultView;
				f = d.getComputedStyle(a, null);
				for ( var q = a.offsetTop, n = a.offsetLeft; (a = a.parentNode)
						&& a !== k && a !== h;) {
					f = d.getComputedStyle(a, null);
					q -= a.scrollTop, n -= a.scrollLeft;
					if (a === b) {
						q += a.offsetTop, n += a.offsetLeft;
						if (c.offset.doesNotAddBorder
								&& !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i
										.test(a.tagName)))
							q += parseInt(f.borderTopWidth, 10) || 0,
									n += parseInt(f.borderLeftWidth, 10) || 0;
						b, b = a.offsetParent
					}
					if (c.offset.subtractsBorderForOverflowNotVisible
							&& f.overflow !== "visible")
						q += parseInt(f.borderTopWidth, 10) || 0,
								n += parseInt(f.borderLeftWidth, 10) || 0;
					f = f
				}
				if (f.position === "relative" || f.position === "static")
					q += k.offsetTop, n += k.offsetLeft;
				if (f.position === "fixed")
					q += Math.max(h.scrollTop, k.scrollTop), n += Math.max(
							h.scrollLeft, k.scrollLeft);
				return {
					top : q,
					left : n
				}
			};
	c.offset = {
		initialize : function() {
			if (!this.initialized) {
				var a = document.body, b = document.createElement("div"), d, f, h, k = a.style.marginTop, q = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
				f = {
					position : "absolute",
					top : 0,
					left : 0,
					margin : 0,
					border : 0,
					width : "1px",
					height : "1px",
					visibility : "hidden"
				};
				for (h in f)
					b.style[h] = f[h];
				b.innerHTML = q;
				a.insertBefore(b, a.firstChild);
				d = b.firstChild, f = d.firstChild,
						h = d.nextSibling.firstChild.firstChild;
				this.doesNotAddBorder = f.offsetTop !== 5;
				this.doesAddBorderForTableAndCells = h.offsetTop === 5;
				d.style.overflow = "hidden", d.style.position = "relative";
				this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
				a.style.marginTop = "1px";
				this.doesNotIncludeMarginInBodyOffset = a.offsetTop === 0;
				a.style.marginTop = k;
				a.removeChild(b);
				this.initialized = true
			}
		},
		bodyOffset : function(a) {
			c.offset.initialized || c.offset.initialize();
			var b = a.offsetTop, d = a.offsetLeft;
			if (c.offset.doesNotIncludeMarginInBodyOffset)
				b += parseInt(c.curCSS(a, "marginTop", true), 10) || 0,
						d += parseInt(c.curCSS(a, "marginLeft", true), 10) || 0;
			return {
				top : b,
				left : d
			}
		}
	};
	c.fn
			.extend({
				position : function() {
					var a;
					if (this[0]) {
						a = this.offsetParent();
						var b = this.offset(), d = /^body|html$/i
								.test(a[0].tagName) ? {
							top : 0,
							left : 0
						} : a.offset();
						b.top -= s(this, "marginTop");
						b.left -= s(this, "marginLeft");
						d.top += s(a, "borderTopWidth");
						d.left += s(a, "borderLeftWidth");
						a = {
							top : b.top - d.top,
							left : b.left - d.left
						}
					}
					return a
				},
				offsetParent : function() {
					for ( var a = this[0].offsetParent || document.body; a
							&& !/^body|html$/i.test(a.tagName)
							&& c.css(a, "position") == "static";)
						a = a.offsetParent;
					return c(a)
				}
			});
	c.each([ "Left", "Top" ], function(a, b) {
		var d = "scroll" + b;
		c.fn[d] = function(f) {
			if (!this[0])
				return null;
			return f !== i ? this.each(function() {
				this == v || this == document ? v.scrollTo(!a ? f : c(v)
						.scrollLeft(), a ? f : c(v).scrollTop())
						: (this[d] = f)
			}) : this[0] == v || this[0] == document ? self[a ? "pageYOffset"
					: "pageXOffset"]
					|| c.boxModel
					&& document.documentElement[d]
					|| document.body[d] : this[0][d]
		}
	});
	c.each([ "Height", "Width" ], function(a, b) {
		var d = b.toLowerCase();
		c.fn["inner" + b] = function() {
			return this[0] ? c.css(this[0], d, false, "padding") : null
		};
		c.fn["outer" + b] = function(h) {
			return this[0] ? c.css(this[0], d, false, h ? "margin" : "border")
					: null
		};
		var f = b.toLowerCase();
		c.fn[f] = function(h) {
			return this[0] == v ? document.compatMode == "CSS1Compat"
					&& document.documentElement["client" + b]
					|| document.body["client" + b] : this[0] == document ? Math
					.max(document.documentElement["client" + b],
							document.body["scroll" + b],
							document.documentElement["scroll" + b],
							document.body["offset" + b],
							document.documentElement["offset" + b])
					: h === i ? this.length ? c.css(this[0], f) : null : this
							.css(f, typeof h === "string" ? h : h + "px")
		}
	})
})();
(function() {
	try {
		document.execCommand("BackgroundImageCache", false, true)
	} catch (v) {
	}
	window.ASNLAB_CSITimer = {};
	ASNLAB_CSITimer.load = window.jstiming.load
})(jQuery);
(function() {
	var v = "Menu";
	window[v] = function(i, m, p, c, y) {
		this.iid = window[v].instance.length;
		window[v].instance[this.iid] = this;
		this.target = typeof i == "string" ? document.getElementById(i) : i;
		m = typeof m == "string" ? document.getElementById(m) : m;
		this.onShow = c && typeof c == "function" ? c : null;
		y = typeof y == "string" ? document.getElementById(y) : y;
		this.trigger = m || i;
		this.items = [];
		this.onOpenEvents = [];
		this.triggerType = p || "click";
		this.menu = this.createElement("div", "menuDiv instance" + this.iid);
		this.targetId = this.target.getAttribute("id");
		i = this.targetId != null ? "menuDiv-" + this.targetId
				: "menuDiv-instance" + this.iid;
		this.menu.setAttribute("id", i);
		this.hide();
		this.addCategory("default");
		this.addEvent(this.trigger, this.triggerType, this.wrap(this.toggle));
		this.addEvent(window, "resize", this.wrap(this.adjustSizeAndLocation));
		this.addEvent(document, "click", this.wrap(this.hide));
		this.addEvent(this.menu, "click", this.stopPropagation());
		this.addEvent(this.trigger, "click", this.stopPropagation())
	};
	window[v].prototype = {
		target : null,
		targetId : null,
		trigger : null,
		triggerType : null,
		menu : null,
		onShow : null,
		icon : null,
		categories : null,
		thread : -1,
		iid : -1,
		items : null,
		scrolls : false,
		onOpenEvents : null,
		createElement : function(i, m, p) {
			i = document.createElement(i);
			i.className = m;
			p && this.append(p, i);
			return i
		},
		addEvent : function(i, m, p) {
			if (i.addEventListener)
				i.addEventListener(m, p, false);
			else
				try {
					i.attachEvent("on" + m, p)
				} catch (c) {
					i["on" + m] = p
				}
		},
		addOnOpen : function(i) {
			var m = this.onOpenEvents.length;
			this.onOpenEvents.push(i);
			return m
		},
		wrap : function(i, m) {
			var p = i, c = m || this;
			return function() {
				p.apply(c)
			}
		},
		addCategory : function(i, m) {
			this.categories = this.categories || [];
			var p = this.createElement("div", "menuCategory " + i);
			p._categoryName = i;
			if (m) {
				m = this.createElement("b", "categoryTitle " + i, m);
				m.style.display = "block";
				this.append(m);
				p._categoryTitle = m
			}
			this.append(p);
			return this.categories[this.categories.length] = this.categories[i] = p
		},
		emptyCategory : function(i) {
			if (this.categories[i]) {
				i = this.categories[i];
				for ( var m = i.childNodes.length - 1; m >= 0; m--)
					i.removeChild(i.childNodes[m])
			}
		},
		clear : function() {
			for ( var i = 0; i < this.categories.length; i++)
				this.categories[this.categories[i]._categoryName] = null;
			this.items.splice(0, this.items.length);
			this.categories.splice(0, this.categories.length);
			this.categories = [];
			this.items = [];
			this.menu.innerHTML = ""
		},
		removeItem : function(i) {
			for ( var m = null, p = 0; p < this.items.length; p++) {
				if (this.items[p] == i) {
					m = this.items[p];
					this.items.splice(p, 1)
				}
				this.items[p].item._index = p
			}
			return m
		},
		removeCategory : function(i) {
			if ((i = this.categories[i]) && i.parentNode) {
				i._categoryTitle
						&& i._categoryTitle.parentNode
								.removeChild(i._categoryTitle);
				i.parentNode.removeChild(i);
				for ( var m = 0; m < this.categories.length; m++)
					if (this.categories[m] === i) {
						this.categories[this.categories[m]._categoryName] = null;
						this.categories.splice(m, 1);
						return
					}
				for (m = 0; m < i.childNodes.length; m++)
					i.childNodes[m]._index ? this.items.splice(
							i.childNodes[m]._index, 1) : this
							.removeItem(i.childNodes[m])
			}
		},
		addItem : function(i, m, p, c) {
			p = p ? this.categories[p] || this.addCategory(p, c)
					: this.categories["default"];
			m = m == undefined ? "#" : m;
			c = undefined;
			c = m ? this.createElement("a", "menuItem", i) : this
					.createElement("span", "menuText", i);
			i = typeof i == "string" ? i : i.innerText || "ERROR";
			c.style.display = "block";
			m && c.setAttribute("href", m);
			c._index = this.items.length;
			this.append(c, p);
			this.items[this.items.length] = {
				item : c,
				text : i
			};
			return c
		},
		addSeparator : function(i, m) {
			i = i ? this.categories[i] || this.addCategory(i, m)
					: this.categories["default"];
			m = this.createElement("hr", "menuSeparator");
			this.append(m, i)
		},
		adjustSizeAndLocation : function() {
			var i = this.menu.style;
			i.position = "absolute";
			for ( var m = null, p = 0; p < this.categories.length; p++) {
				this.categories[p].className = this.categories[p].className
						.replace(/ first/, "");
				if (this.categories[p].childNodes.length == 0)
					this.categories[p].style.display = "none";
				else {
					this.categories[p].style.display = "";
					if (!m) {
						m = this.categories[p];
						m.className += " first"
					}
				}
			}
			var c = i.display != "none" && i.visibility != "hidden";
			m = document.documentElement.clientWidth;
			p = document.documentElement.clientHeight;
			m = {
				w : (window.innerWidth || m && m > 0 ? m
						: document.body.clientWidth) || 1,
				h : (window.innerHeight || p && p > 0 ? p
						: document.body.clientHeight) || 1
			};
			p = this.find(this.target);
			var y = {
				w : this.target.offsetWidth,
				h : this.target.offsetHeight
			}, C = {
				w : this.menu.offsetWidth,
				h : this.menu.offsetHeight
			};
			if (!c) {
				c = i.visibility;
				var I = i.display;
				i.visibility = "hidden";
				i.display = "";
				i.height = "";
				i.width = "";
				C = {
					w : this.menu.offsetWidth,
					h : this.menu.offsetHeight
				};
				i.display = I;
				i.visibility = c
			}
			if (c = this.menu.offsetHeight / m.h > 0.8) {
				C.h = parseInt(m.h * 0.8, 10);
				i.height = C.h + "px";
				i.overflowX = "hidden";
				i.overflowY = "auto"
			} else
				i.height = i.overflowY = i.overflowX = "";
			i.top = p.y + y.h + "px";
			i.left = p.x + "px";
			if (C.w < 175)
				i.width = "175px";
			if (c)
				i.width = parseInt(i.width, 10) + 13 + "px";
			if (p.x + C.w > m.w)
				i.left = p.x - (C.w - y.w) + "px"
		},
		html : function(i) {
			var m = this.menu.innerHTML;
			if (i)
				this.menu.innerHTML = i;
			return m
		},
		append : function(i, m) {
			var p = m || this.menu;
			if (typeof m == "string" && this.categories[m])
				p = this.categories[m];
			if (typeof i == "string")
				p.innerHTML += i;
			else
				p.appendChild(i)
		},
		over : function() {
			this.menu.style.display != "none" && this.show();
			if (this.thread != -1) {
				clearTimeout(this.thread);
				this.thread = -1
			}
		},
		out : function() {
			if (this.thread != -1) {
				clearTimeout(this.thread);
				this.thread = -1
			}
			this.thread = setTimeout(this.wrap(this.hide), 400)
		},
		stopPropagation : function() {
			return function(i) {
				if (!i)
					i = window.event;
				i.cancelBubble = true;
				i.stopPropagation && i.stopPropagation()
			}
		},
		toggle : function() {
			this.menu.style.display == "none" ? this.show() : this.hide()
		},
		show : function() {
			if (this.menu.style.display != "") {
				for ( var i = 0; i < this.onOpenEvents.length; i++)
					this.onOpenEvents[i].call(null, this);
				this.menu.style.visibility = "hidden";
				this.menu.style.display = "";
				this.adjustSizeAndLocation();
				this.trigger.nodeName && this.trigger.nodeName == "A"
						&& this.trigger.blur();
				this.menu.style.visibility = "visible";
				for (i = 0; i < window[v].instance.length; i++) {
					var m = window[v].instance[i];
					m != this && m.hide()
				}
				this.onShow && this.onShow()
			}
		},
		hide : function() {
			this.menu.style.display = "none"
		},
		find : function(i) {
			var m = 0, p = 0;
			if (i.offsetParent) {
				do {
					m += i.offsetLeft;
					p += i.offsetTop
				} while ((i = i.offsetParent) && i.style
						&& i.style.position != "relative"
						&& i.style.position != "absolute")
			}
			return {
				x : m,
				y : p
			}
		}
	};
	window[v].instance = []
})();
(function() {
	var v = /\/\/([^\/]*)?(\/[^\#\?]*)?([^\#]*)?(.*)$/, i = [ "a + ul",
			"a + ol", "h1 + ul", "h1 + ol", "h2 + ul", "h2 + ol",
			"span.tlw-title + ul", "span.tlw-title + ol" ].join();
	function m(y) {
		for ( var C = 5381, I = 0; I < y.length; I++)
			C = (C << 5) + C + y.charCodeAt(I);
		return C
	}
	var p = window._tocPath_ ? [ null, null, _tocPath_, null, "" ] : v
			.exec(location.href), c = p ? [ "ck_", m(p[2] + p[4]) ].join("")
			: "ck_checksumError";
	window.ASNLAB_filterSingleQuotes = function(y) {
		var C = /(\')/g;
		return String.prototype.replace.call(y, C, "\\$1")
	};
	window.ASNLAB_createTreeLists = function(y) {
		y = y != jQuery && y || ".treelist";
		function C(u, A, s, t) {
			s = s || ASNLAB_msgs.treelist.EXPAND_DEFAULT;
			var w = t || ASNLAB_msgs.treelist.COLLAPSE_DEFAULT;
			A = jQuery(A);
			t = A.parents("div:first").next();
			s = u ? w : s;
			w = u ? "tlw-minus" : "tlw-plus";
			A.attr("alt", s).parent().attr("title", s);
			A.removeClass("tlw-minus tlw-plus").addClass(w);
			u ? t.show() : t.hide()
		}
		var I = function() {
			var u = function() {
				var A = [], s = null;
				for ( var t in this)
					if (t != "toString") {
						t = ASNLAB_filterSingleQuotes(t);
						s = ASNLAB_filterSingleQuotes(this[t]);
						A.push([ '"', t, '":"', s, '"' ].join(""))
					}
				return [ "{", A.join(), "}" ].join("")
			};
			return function() {
				var A = null, s = null;
				if (A = (new RegExp([ c, "=([^;]*)?" ].join("")))
						.exec(document.cookie))
					s = JSON.parse(A[1]);
				s = s || {};
				s.toString = u;
				return s
			}
		}();
		function J(u, A) {
			var s = I();
			if (A)
				s[u] = true;
			else
				delete s[u];
			document.cookie = [ c, "=", s.toString() ].join("")
		}
		var x = [
				'<div class="tlw-title"><a href="javascript:void(0)" class="tlw-control" title=""><img src="',
				ASNLAB_derivePath("/images/cleardot.gif"),
				'" alt="" class="tlw-control"></a></div>' ].join("");
		jQuery(y)
				.each(
						function() {
							var u = jQuery(this);
							if (!u.is(".tlw-processed")) {
								u._count = 0;
								var A = arguments.callee, s = (A._list = A._list
										|| []).length;
								A._list.push(u);
								u.addClass("tlw-processed tlw-instance-" + s);
								u.find("a + span.new").each(
										function() {
											var t = jQuery(this);
											t = t.prev();
											var w = jQuery("<span>");
											w.css("textDecoration", t
													.css("textDecoration"));
											w.append(t.html());
											t.css("textDecoration", "none")
													.empty();
											t.append(w).append(this)
										});
								u
										.find(i)
										.each(
												function() {
													var t = jQuery(this), w = [
															s, "sub", u._count ]
															.join("-"), M = t
															.prev(), H = jQuery(x), P = jQuery(
															"img.tlw-control:first",
															H), F = ASNLAB_msgs.treelist.EXPAND
															.replace(/@1/g, M
																	.text()), V = ASNLAB_msgs.treelist.COLLAPSE
															.replace(/@1/g, M
																	.text());
													if (!M.is(".tlw-ignore")) {
														var W = {
															$open : function(R) {
																if ((R = R || false)
																		|| t
																				.is(":hidden")) {
																	C(true, P,
																			F,
																			V);
																	ASNLAB_createTreeLists._init
																			&& J(
																					w,
																					true)
																}
															},
															$close : function(R) {
																if ((R = R || false)
																		|| t
																				.is(":visible")) {
																	C(false, P,
																			F,
																			V);
																	ASNLAB_createTreeLists._init
																			&& J(
																					w,
																					false)
																}
															},
															$toggle : function() {
																var R = t
																		.is(":hidden");
																C(R, P, F, V);
																ASNLAB_createTreeLists._init
																		&& J(w,
																				R)
															}
														};
														jQuery.extend(this, W);
														jQuery
																.extend(
																		P
																				.parent()[0],
																		W);
														t.attr("id", w);
														t.before(H);
														H.append(M);
														H
																.addClass("tlw-branch");
														H.parent().css({
															paddingTop : "0",
															paddingBottom : "0"
														});
														this.$close(true);
														P
																.parent()
																.click(
																		function() {
																			this
																					.$toggle()
																		});
														u._count++
													}
												})
							}
						});
		var E = I();
		jQuery.each(E, function(u) {
			if (u != "toString")
				try {
					jQuery("#" + u)[0].$open()
				} catch (A) {
				}
		});
		window.ontreelistcomplete && typeof ontreelistcomplete == "function"
				&& window.ontreelistcomplete(y)
	};
	window.ASNLAB_derivePath = function(y) {
		var C = window.ORIGINAL_PAGE_PATH;
		if (!C)
			return y;
		var I = window.location.href;
		I = I.substring(0, I.lastIndexOf("/"));
		C = C.substring(0, C.lastIndexOf("/"));
		I = I.substring(0, I.length - C.length);
		return I + y
	};
	window.ASNLAB_convertTableOfContents = function() {
		jQuery("#gc-toc ul:first, #gc-toc ol:first").addClass(
				"treelist tlw-nested-only").siblings("ul, ol").addClass(
				"treelist tlw-nested-only");
		for ( var y = 0, C = jQuery(".treelist.tlw-nested-only").children(); y < C.length; y++)
			jQuery(C[y]).children(":first").next(i).prev().addClass(
					"tlw-ignore")
	};
	window.ASNLAB_tocHighlighter = function() {
		var y = /\/intl\/.*?\//, C = /\/index\.html$/, I = jQuery("#gc-toc a[href]"), J = window.location.href, x = null, E = x = null, u = v
				.exec(J);
		if (u)
			J = u[2];
		J = J.replace(y, "/").replace(C, "/");
		for (u = 0; u < I.length; u++)
			if (x = v.exec(I[u].href)) {
				E = jQuery(I[u]);
				x = (x[2] + x[4]).replace(y, "/").replace(C, "/");
				if (J == x) {
					E.parent().addClass("selected");
					E.is(".tlw-hidden") && E.parent().addClass("tlw-hidden");
					x = E.siblings("a.tlw-control");
					for ( var A = 0; A < x.length; A++)
						x[A].$open();
					E = E.parents("ul").siblings(".tlw-branch").find(
							"a.tlw-control");
					for (x = 0; x < E.length; x++)
						E[x].$open()
				}
			}
		var s = jQuery(".tlw-branch .tlw-expanded"), t = jQuery(".tlw-branch .tlw-collapsed");
		for (u = 0; u < s.length; u++)
			(y = s[u].previousSibling) && y.$open && y.$open();
		for (u = 0; u < t.length; u++)
			(y = t[u].previousSibling) && y.$close && y.$close();
		window.ontreelisthighlight && typeof ontreelisthighlight == "function"
				&& window.ontreelisthighlight()
	};
	window.ASNLAB_buildTreelistWidgetCalled = false;
	window.ASNLAB_buildTreelistWidget = function() {
		if (!ASNLAB_buildTreelistWidgetCalled) {
			var y = new window.jstiming.Timer;
			ASNLAB_CSITimer.load.tick("toc_start");
			ASNLAB_convertTableOfContents();
			ASNLAB_createTreeLists();
			ASNLAB_tocHighlighter();
			ASNLAB_CSITimer.load.tick("toc_done");
			y.tick("toc");
			y.name = "toc";
			ASNLAB_CSITimer.toc = y;
			window.ASNLAB_buildTreelistWidgetCalled = true
		}
	};
	window.ASNLAB_docEarlyProcessing = function() {
		ASNLAB_buildTreelistWidget()
	};
	jQuery(document).ready(function() {
		ASNLAB_buildTreelistWidget()
	});
	jQuery(window).load(function() {
		ASNLAB_createTreeLists._init = true
	})
})(jQuery);
window.ASNLAB_msgs = {
	treelist : {
		EXPAND : "Expand @1",
		EXPAND_DEFAULT : "Expand branch",
		COLLAPSE : "Collapse @1",
		COLLAPSE_DEFAULT : "Collapse branch"
	}
};
