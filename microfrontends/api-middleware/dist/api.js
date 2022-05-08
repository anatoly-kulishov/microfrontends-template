(() => {
  function e(e, t, n, r) {
    Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
  }
  var t =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {};
  function n(e) {
    Object.defineProperty(e, '__esModule', { value: !0, configurable: !0 });
  }
  function r(e, t) {
    return (
      Object.keys(t).forEach(function (n) {
        'default' === n ||
          '__esModule' === n ||
          e.hasOwnProperty(n) ||
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: function () {
              return t[n];
            },
          });
      }),
      e
    );
  }
  function o(e) {
    return e && e.__esModule ? e.default : e;
  }
  var i = {},
    s = {},
    a = t.parcelRequire4162;
  null == a &&
    (((a = function (e) {
      if (e in i) return i[e].exports;
      if (e in s) {
        var t = s[e];
        delete s[e];
        var n = { id: e, exports: {} };
        return (i[e] = n), t.call(n.exports, n, n.exports), n.exports;
      }
      var r = new Error("Cannot find module '" + e + "'");
      throw ((r.code = 'MODULE_NOT_FOUND'), r);
    }).register = function (e, t) {
      s[e] = t;
    }),
    (t.parcelRequire4162 = a)),
    a.register('klx4C', function (e, t) {
      'use strict';
      var n = a('eEeLw'),
        r = a('emdE0'),
        o = a('h8h9r'),
        i = a('cZvcO');
      function s(e) {
        var t = new o(e),
          i = r(o.prototype.request, t);
        return n.extend(i, o.prototype, t), n.extend(i, t), i;
      }
      var u = s(a('03QLL'));
      (u.Axios = o),
        (u.create = function (e) {
          return s(i(u.defaults, e));
        }),
        (u.Cancel = a('avJ31')),
        (u.CancelToken = a('jtkuz')),
        (u.isCancel = a('chbS6')),
        (u.all = function (e) {
          return Promise.all(e);
        }),
        (u.spread = a('lu2Sl')),
        (u.isAxiosError = a('48AH1')),
        (e.exports = u),
        (e.exports.default = u);
    }),
    a.register('eEeLw', function (e, t) {
      'use strict';
      var n = a('emdE0'),
        r = Object.prototype.toString;
      function o(e) {
        return '[object Array]' === r.call(e);
      }
      function i(e) {
        return void 0 === e;
      }
      function s(e) {
        return null !== e && 'object' == typeof e;
      }
      function u(e) {
        if ('[object Object]' !== r.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      function c(e) {
        return '[object Function]' === r.call(e);
      }
      function l(e, t) {
        if (null != e)
          if (('object' != typeof e && (e = [e]), o(e)))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
      }
      e.exports = {
        isArray: o,
        isArrayBuffer: function (e) {
          return '[object ArrayBuffer]' === r.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !i(e) &&
            null !== e.constructor &&
            !i(e.constructor) &&
            'function' == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return 'undefined' != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return 'string' == typeof e;
        },
        isNumber: function (e) {
          return 'number' == typeof e;
        },
        isObject: s,
        isPlainObject: u,
        isUndefined: i,
        isDate: function (e) {
          return '[object Date]' === r.call(e);
        },
        isFile: function (e) {
          return '[object File]' === r.call(e);
        },
        isBlob: function (e) {
          return '[object Blob]' === r.call(e);
        },
        isFunction: c,
        isStream: function (e) {
          return s(e) && c(e.pipe);
        },
        isURLSearchParams: function (e) {
          return 'undefined' != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function () {
          return (
            ('undefined' == typeof navigator ||
              ('ReactNative' !== navigator.product &&
                'NativeScript' !== navigator.product &&
                'NS' !== navigator.product)) &&
            'undefined' != typeof window &&
            'undefined' != typeof document
          );
        },
        forEach: l,
        merge: function e() {
          var t = {};
          function n(n, r) {
            u(t[r]) && u(n) ? (t[r] = e(t[r], n)) : u(n) ? (t[r] = e({}, n)) : o(n) ? (t[r] = n.slice()) : (t[r] = n);
          }
          for (var r = 0, i = arguments.length; r < i; r++) l(arguments[r], n);
          return t;
        },
        extend: function (e, t, r) {
          return (
            l(t, function (t, o) {
              e[o] = r && 'function' == typeof t ? n(t, r) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
      };
    }),
    a.register('emdE0', function (e, t) {
      'use strict';
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
          return e.apply(t, n);
        };
      };
    }),
    a.register('h8h9r', function (e, t) {
      'use strict';
      var n = a('eEeLw'),
        r = a('g1ToS'),
        o = a('i7QPp'),
        i = a('dDKIz'),
        s = a('cZvcO'),
        u = a('bAHue'),
        c = u.validators;
      function l(e) {
        (this.defaults = e), (this.interceptors = { request: new o(), response: new o() });
      }
      (l.prototype.request = function (e) {
        'string' == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
          (e = s(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = 'get');
        var t = e.transitional;
        void 0 !== t &&
          u.assertOptions(
            t,
            {
              silentJSONParsing: c.transitional(c.boolean, '1.0.0'),
              forcedJSONParsing: c.transitional(c.boolean, '1.0.0'),
              clarifyTimeoutError: c.transitional(c.boolean, '1.0.0'),
            },
            !1,
          );
        var n = [],
          r = !0;
        this.interceptors.request.forEach(function (t) {
          ('function' == typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected));
        });
        var o,
          a = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            a.push(e.fulfilled, e.rejected);
          }),
          !r)
        ) {
          var l = [i, void 0];
          for (Array.prototype.unshift.apply(l, n), l = l.concat(a), o = Promise.resolve(e); l.length; )
            o = o.then(l.shift(), l.shift());
          return o;
        }
        for (var f = e; n.length; ) {
          var h = n.shift(),
            d = n.shift();
          try {
            f = h(f);
          } catch (e) {
            d(e);
            break;
          }
        }
        try {
          o = i(f);
        } catch (e) {
          return Promise.reject(e);
        }
        for (; a.length; ) o = o.then(a.shift(), a.shift());
        return o;
      }),
        (l.prototype.getUri = function (e) {
          return (e = s(this.defaults, e)), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, '');
        }),
        n.forEach(['delete', 'get', 'head', 'options'], function (e) {
          l.prototype[e] = function (t, n) {
            return this.request(s(n || {}, { method: e, url: t, data: (n || {}).data }));
          };
        }),
        n.forEach(['post', 'put', 'patch'], function (e) {
          l.prototype[e] = function (t, n, r) {
            return this.request(s(r || {}, { method: e, url: t, data: n }));
          };
        }),
        (e.exports = l);
    }),
    a.register('g1ToS', function (e, t) {
      'use strict';
      var n = a('eEeLw');
      function r(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      e.exports = function (e, t, o) {
        if (!t) return e;
        var i;
        if (o) i = o(t);
        else if (n.isURLSearchParams(t)) i = t.toString();
        else {
          var s = [];
          n.forEach(t, function (e, t) {
            null != e &&
              (n.isArray(e) ? (t += '[]') : (e = [e]),
              n.forEach(e, function (e) {
                n.isDate(e) ? (e = e.toISOString()) : n.isObject(e) && (e = JSON.stringify(e)),
                  s.push(r(t) + '=' + r(e));
              }));
          }),
            (i = s.join('&'));
        }
        if (i) {
          var a = e.indexOf('#');
          -1 !== a && (e = e.slice(0, a)), (e += (-1 === e.indexOf('?') ? '?' : '&') + i);
        }
        return e;
      };
    }),
    a.register('i7QPp', function (e, t) {
      'use strict';
      var n = a('eEeLw');
      function r() {
        this.handlers = [];
      }
      (r.prototype.use = function (e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (r.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (r.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = r);
    }),
    a.register('dDKIz', function (e, t) {
      'use strict';
      var n = a('eEeLw'),
        r = a('iFjKt'),
        o = a('chbS6'),
        i = a('03QLL');
      function s(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      e.exports = function (e) {
        return (
          s(e),
          (e.headers = e.headers || {}),
          (e.data = r.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
          n.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
            delete e.headers[t];
          }),
          (e.adapter || i.adapter)(e).then(
            function (t) {
              return s(e), (t.data = r.call(e, t.data, t.headers, e.transformResponse)), t;
            },
            function (t) {
              return (
                o(t) ||
                  (s(e),
                  t &&
                    t.response &&
                    (t.response.data = r.call(e, t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
              );
            },
          )
        );
      };
    }),
    a.register('iFjKt', function (e, t) {
      'use strict';
      var n = a('eEeLw'),
        r = a('03QLL');
      e.exports = function (e, t, o) {
        var i = this || r;
        return (
          n.forEach(o, function (n) {
            e = n.call(i, e, t);
          }),
          e
        );
      };
    }),
    a.register('03QLL', function (e, t) {
      'use strict';
      var n = a('nj8kx'),
        r = a('eEeLw'),
        o = a('kfLRH'),
        i = a('faaVB'),
        s = { 'Content-Type': 'application/x-www-form-urlencoded' };
      function u(e, t) {
        !r.isUndefined(e) && r.isUndefined(e['Content-Type']) && (e['Content-Type'] = t);
      }
      var c,
        l = {
          transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
          adapter:
            (('undefined' != typeof XMLHttpRequest ||
              (void 0 !== n && '[object process]' === Object.prototype.toString.call(n))) &&
              (c = a('3VoFI')),
            c),
          transformRequest: [
            function (e, t) {
              return (
                o(t, 'Accept'),
                o(t, 'Content-Type'),
                r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (u(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString())
                  : r.isObject(e) || (t && 'application/json' === t['Content-Type'])
                  ? (u(t, 'application/json'),
                    (function (e, t, n) {
                      if (r.isString(e))
                        try {
                          return (t || JSON.parse)(e), r.trim(e);
                        } catch (e) {
                          if ('SyntaxError' !== e.name) throw e;
                        }
                      return (n || JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                n = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                s = !n && 'json' === this.responseType;
              if (s || (o && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (s) {
                    if ('SyntaxError' === e.name) throw i(e, this, 'E_JSON_PARSE');
                    throw e;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (l.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
        r.forEach(['delete', 'get', 'head'], function (e) {
          l.headers[e] = {};
        }),
        r.forEach(['post', 'put', 'patch'], function (e) {
          l.headers[e] = r.merge(s);
        }),
        (e.exports = l);
    }),
    a.register('nj8kx', function (e, t) {
      var n,
        r,
        o = (e.exports = {});
      function i() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          r = s;
        }
      })();
      var u,
        c = [],
        l = !1,
        f = -1;
      function h() {
        l && u && ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && d());
      }
      function d() {
        if (!l) {
          var e = a(h);
          l = !0;
          for (var t = c.length; t; ) {
            for (u = c, c = []; ++f < t; ) u && u[f].run();
            (f = -1), (t = c.length);
          }
          (u = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new p(e, t)), 1 !== c.length || l || a(d);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (o.cwd = function () {
          return '/';
        }),
        (o.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (o.umask = function () {
          return 0;
        });
    }),
    a.register('kfLRH', function (e, t) {
      'use strict';
      var n = a('eEeLw');
      e.exports = function (e, t) {
        n.forEach(e, function (n, r) {
          r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r]);
        });
      };
    }),
    a.register('faaVB', function (e, t) {
      'use strict';
      e.exports = function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    }),
    a.register('3VoFI', function (e, t) {
      'use strict';
      var n = a('eEeLw'),
        r = a('5eiNb'),
        o = a('j50BC'),
        i = a('g1ToS'),
        s = a('fOJlk'),
        u = a('egzyE'),
        c = a('cxj0X'),
        l = a('7wf2C');
      e.exports = function (e) {
        return new Promise(function (t, a) {
          var f = e.data,
            h = e.headers,
            d = e.responseType;
          n.isFormData(f) && delete h['Content-Type'];
          var p = new XMLHttpRequest();
          if (e.auth) {
            var g = e.auth.username || '',
              v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
            h.Authorization = 'Basic ' + btoa(g + ':' + v);
          }
          var y = s(e.baseURL, e.url);
          function m() {
            if (p) {
              var n = 'getAllResponseHeaders' in p ? u(p.getAllResponseHeaders()) : null,
                o = {
                  data: d && 'text' !== d && 'json' !== d ? p.response : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: n,
                  config: e,
                  request: p,
                };
              r(t, a, o), (p = null);
            }
          }
          if (
            (p.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0),
            (p.timeout = e.timeout),
            'onloadend' in p
              ? (p.onloadend = m)
              : (p.onreadystatechange = function () {
                  p &&
                    4 === p.readyState &&
                    (0 !== p.status || (p.responseURL && 0 === p.responseURL.indexOf('file:'))) &&
                    setTimeout(m);
                }),
            (p.onabort = function () {
              p && (a(l('Request aborted', e, 'ECONNABORTED', p)), (p = null));
            }),
            (p.onerror = function () {
              a(l('Network Error', e, null, p)), (p = null);
            }),
            (p.ontimeout = function () {
              var t = 'timeout of ' + e.timeout + 'ms exceeded';
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                a(l(t, e, e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', p)),
                (p = null);
            }),
            n.isStandardBrowserEnv())
          ) {
            var w = (e.withCredentials || c(y)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
            w && (h[e.xsrfHeaderName] = w);
          }
          'setRequestHeader' in p &&
            n.forEach(h, function (e, t) {
              void 0 === f && 'content-type' === t.toLowerCase() ? delete h[t] : p.setRequestHeader(t, e);
            }),
            n.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials),
            d && 'json' !== d && (p.responseType = e.responseType),
            'function' == typeof e.onDownloadProgress && p.addEventListener('progress', e.onDownloadProgress),
            'function' == typeof e.onUploadProgress &&
              p.upload &&
              p.upload.addEventListener('progress', e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                p && (p.abort(), a(e), (p = null));
              }),
            f || (f = null),
            p.send(f);
        });
      };
    }),
    a.register('5eiNb', function (e, t) {
      'use strict';
      var n = a('7wf2C');
      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status)
          ? t(n('Request failed with status code ' + r.status, r.config, null, r.request, r))
          : e(r);
      };
    }),
    a.register('7wf2C', function (e, t) {
      'use strict';
      var n = a('faaVB');
      e.exports = function (e, t, r, o, i) {
        var s = new Error(e);
        return n(s, t, r, o, i);
      };
    }),
    a.register('j50BC', function (e, t) {
      'use strict';
      var n = a('eEeLw');
      e.exports = n.isStandardBrowserEnv()
        ? {
            write: function (e, t, r, o, i, s) {
              var a = [];
              a.push(e + '=' + encodeURIComponent(t)),
                n.isNumber(r) && a.push('expires=' + new Date(r).toGMTString()),
                n.isString(o) && a.push('path=' + o),
                n.isString(i) && a.push('domain=' + i),
                !0 === s && a.push('secure'),
                (document.cookie = a.join('; '));
            },
            read: function (e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, '', Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    }),
    a.register('fOJlk', function (e, t) {
      'use strict';
      var n = a('3N1r5'),
        r = a('1iPxN');
      e.exports = function (e, t) {
        return e && !n(t) ? r(e, t) : t;
      };
    }),
    a.register('3N1r5', function (e, t) {
      'use strict';
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    }),
    a.register('1iPxN', function (e, t) {
      'use strict';
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
      };
    }),
    a.register('egzyE', function (e, t) {
      'use strict';
      var n = a('eEeLw'),
        r = [
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ];
      e.exports = function (e) {
        var t,
          o,
          i,
          s = {};
        return e
          ? (n.forEach(e.split('\n'), function (e) {
              if (
                ((i = e.indexOf(':')), (t = n.trim(e.substr(0, i)).toLowerCase()), (o = n.trim(e.substr(i + 1))), t)
              ) {
                if (s[t] && r.indexOf(t) >= 0) return;
                s[t] = 'set-cookie' === t ? (s[t] ? s[t] : []).concat([o]) : s[t] ? s[t] + ', ' + o : o;
              }
            }),
            s)
          : s;
      };
    }),
    a.register('cxj0X', function (e, t) {
      'use strict';
      var n = a('eEeLw');
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement('a');
            function o(e) {
              var n = e;
              return (
                t && (r.setAttribute('href', n), (n = r.href)),
                r.setAttribute('href', n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, '') : '',
                  hash: r.hash ? r.hash.replace(/^#/, '') : '',
                  hostname: r.hostname,
                  port: r.port,
                  pathname: '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var r = n.isString(t) ? o(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    }),
    a.register('chbS6', function (e, t) {
      'use strict';
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    }),
    a.register('cZvcO', function (e, t) {
      'use strict';
      var n = a('eEeLw');
      e.exports = function (e, t) {
        t = t || {};
        var r = {},
          o = ['url', 'method', 'data'],
          i = ['headers', 'auth', 'proxy', 'params'],
          s = [
            'baseURL',
            'transformRequest',
            'transformResponse',
            'paramsSerializer',
            'timeout',
            'timeoutMessage',
            'withCredentials',
            'adapter',
            'responseType',
            'xsrfCookieName',
            'xsrfHeaderName',
            'onUploadProgress',
            'onDownloadProgress',
            'decompress',
            'maxContentLength',
            'maxBodyLength',
            'maxRedirects',
            'transport',
            'httpAgent',
            'httpsAgent',
            'cancelToken',
            'socketPath',
            'responseEncoding',
          ],
          a = ['validateStatus'];
        function u(e, t) {
          return n.isPlainObject(e) && n.isPlainObject(t)
            ? n.merge(e, t)
            : n.isPlainObject(t)
            ? n.merge({}, t)
            : n.isArray(t)
            ? t.slice()
            : t;
        }
        function c(o) {
          n.isUndefined(t[o]) ? n.isUndefined(e[o]) || (r[o] = u(void 0, e[o])) : (r[o] = u(e[o], t[o]));
        }
        n.forEach(o, function (e) {
          n.isUndefined(t[e]) || (r[e] = u(void 0, t[e]));
        }),
          n.forEach(i, c),
          n.forEach(s, function (o) {
            n.isUndefined(t[o]) ? n.isUndefined(e[o]) || (r[o] = u(void 0, e[o])) : (r[o] = u(void 0, t[o]));
          }),
          n.forEach(a, function (n) {
            n in t ? (r[n] = u(e[n], t[n])) : n in e && (r[n] = u(void 0, e[n]));
          });
        var l = o.concat(i).concat(s).concat(a),
          f = Object.keys(e)
            .concat(Object.keys(t))
            .filter(function (e) {
              return -1 === l.indexOf(e);
            });
        return n.forEach(f, c), r;
      };
    }),
    a.register('bAHue', function (e, t) {
      'use strict';
      var n = a('k4PRs'),
        r = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
        r[e] = function (n) {
          return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
      });
      var o = {},
        i = n.version.split('.');
      function s(e, t) {
        for (var n = t ? t.split('.') : i, r = e.split('.'), o = 0; o < 3; o++) {
          if (n[o] > r[o]) return !0;
          if (n[o] < r[o]) return !1;
        }
        return !1;
      }
      (r.transitional = function (e, t, r) {
        var i = t && s(t);
        function a(e, t) {
          return '[Axios v' + n.version + "] Transitional option '" + e + "'" + t + (r ? '. ' + r : '');
        }
        return function (n, r, s) {
          if (!1 === e) throw new Error(a(r, ' has been removed in ' + t));
          return (
            i &&
              !o[r] &&
              ((o[r] = !0),
              console.warn(a(r, ' has been deprecated since v' + t + ' and will be removed in the near future'))),
            !e || e(n, r, s)
          );
        };
      }),
        (e.exports = {
          isOlderVersion: s,
          assertOptions: function (e, t, n) {
            if ('object' != typeof e) throw new TypeError('options must be an object');
            for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
              var i = r[o],
                s = t[i];
              if (s) {
                var a = e[i],
                  u = void 0 === a || s(a, i, e);
                if (!0 !== u) throw new TypeError('option ' + i + ' must be ' + u);
              } else if (!0 !== n) throw Error('Unknown option ' + i);
            }
          },
          validators: r,
        });
    }),
    a.register('k4PRs', function (e, t) {
      e.exports = JSON.parse(
        '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}',
      );
    }),
    a.register('avJ31', function (e, t) {
      'use strict';
      function n(e) {
        this.message = e;
      }
      (n.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      }),
        (n.prototype.__CANCEL__ = !0),
        (e.exports = n);
    }),
    a.register('jtkuz', function (e, t) {
      'use strict';
      var n = a('avJ31');
      function r(e) {
        if ('function' != typeof e) throw new TypeError('executor must be a function.');
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        e(function (e) {
          r.reason || ((r.reason = new n(e)), t(r.reason));
        });
      }
      (r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (r.source = function () {
          var e;
          return {
            token: new r(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (e.exports = r);
    }),
    a.register('lu2Sl', function (e, t) {
      'use strict';
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    }),
    a.register('48AH1', function (e, t) {
      'use strict';
      e.exports = function (e) {
        return 'object' == typeof e && !0 === e.isAxiosError;
      };
    }),
    a.register('kH5R5', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.Sha256 = void 0);
      var n = a('3Iu6a'),
        r = a('sGs99'),
        o = a('9uIwY'),
        i = a('hkyEW'),
        s = a('8jruJ'),
        u = a('6Hv5e'),
        c = (function () {
          function e(e) {
            (0, i.supportsWebCrypto)((0, u.locateWindow)())
              ? (this.hash = new r.Sha256(e))
              : (0, s.isMsWindow)((0, u.locateWindow)())
              ? (this.hash = new n.Sha256(e))
              : (this.hash = new o.Sha256(e));
          }
          return (
            (e.prototype.update = function (e, t) {
              this.hash.update(e, t);
            }),
            (e.prototype.digest = function () {
              return this.hash.digest();
            }),
            e
          );
        })();
      e.exports.Sha256 = c;
    }),
    a.register('3Iu6a', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.Sha256 = void 0);
      var n = a('burUg'),
        r = a('8EfnR'),
        o = a('3n91s'),
        i = a('6Hv5e'),
        s = (function () {
          function e(e) {
            e
              ? ((this.operation = (function (e) {
                  return new Promise(function (t, n) {
                    var o = (0, i.locateWindow)().msCrypto.subtle.importKey('raw', u(e), r.SHA_256_HMAC_ALGO, !1, [
                      'sign',
                    ]);
                    (o.oncomplete = function () {
                      o.result && t(o.result), n(new Error('ImportKey completed without importing key.'));
                    }),
                      (o.onerror = function () {
                        n(new Error('ImportKey failed to import key.'));
                      });
                  });
                })(e).then(function (e) {
                  return (0, i.locateWindow)().msCrypto.subtle.sign(r.SHA_256_HMAC_ALGO, e);
                })),
                this.operation.catch(function () {}))
              : (this.operation = Promise.resolve((0, i.locateWindow)().msCrypto.subtle.digest('SHA-256')));
          }
          return (
            (e.prototype.update = function (e) {
              var t = this;
              (0, n.isEmptyData)(e) ||
                ((this.operation = this.operation.then(function (n) {
                  return (
                    (n.onerror = function () {
                      t.operation = Promise.reject(new Error('Error encountered updating hash'));
                    }),
                    n.process(u(e)),
                    n
                  );
                })),
                this.operation.catch(function () {}));
            }),
            (e.prototype.digest = function () {
              return this.operation.then(function (e) {
                return new Promise(function (t, n) {
                  (e.onerror = function () {
                    n(new Error('Error encountered finalizing hash'));
                  }),
                    (e.oncomplete = function () {
                      e.result && t(new Uint8Array(e.result)), n(new Error('Error encountered finalizing hash'));
                    }),
                    e.finish();
                });
              });
            }),
            e
          );
        })();
      function u(e) {
        return 'string' == typeof e
          ? (0, o.fromUtf8)(e)
          : ArrayBuffer.isView(e)
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT)
          : new Uint8Array(e);
      }
      e.exports.Sha256 = s;
    }),
    a.register('burUg', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.isEmptyData = void 0),
        (e.exports.isEmptyData = function (e) {
          return 'string' == typeof e ? 0 === e.length : 0 === e.byteLength;
        });
    }),
    a.register('8EfnR', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.EMPTY_DATA_SHA_256 = e.exports.SHA_256_HMAC_ALGO = e.exports.SHA_256_HASH = void 0),
        (e.exports.SHA_256_HASH = { name: 'SHA-256' }),
        (e.exports.SHA_256_HMAC_ALGO = { name: 'HMAC', hash: e.exports.SHA_256_HASH }),
        (e.exports.EMPTY_DATA_SHA_256 = new Uint8Array([
          227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147,
          76, 164, 149, 153, 27, 120, 82, 184, 85,
        ]));
    }),
    a.register('3n91s', function (t, n) {
      e(t.exports, 'fromUtf8', () => i);
      var r = a('DdqPs'),
        o = a('jIku0'),
        i = function (e) {
          return 'function' == typeof TextEncoder ? o.fromUtf8(e) : r.fromUtf8(e);
        };
    }),
    a.register('DdqPs', function (t, n) {
      e(t.exports, 'fromUtf8', () => r), e(t.exports, 'toUtf8', () => o);
      var r = function (e) {
          for (var t = [], n = 0, r = e.length; n < r; n++) {
            var o = e.charCodeAt(n);
            if (o < 128) t.push(o);
            else if (o < 2048) t.push((o >> 6) | 192, (63 & o) | 128);
            else if (n + 1 < e.length && 55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(n + 1))) {
              var i = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n));
              t.push((i >> 18) | 240, ((i >> 12) & 63) | 128, ((i >> 6) & 63) | 128, (63 & i) | 128);
            } else t.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
          }
          return Uint8Array.from(t);
        },
        o = function (e) {
          for (var t = '', n = 0, r = e.length; n < r; n++) {
            var o = e[n];
            if (o < 128) t += String.fromCharCode(o);
            else if (192 <= o && o < 224) {
              var i = e[++n];
              t += String.fromCharCode(((31 & o) << 6) | (63 & i));
            } else if (240 <= o && o < 365) {
              var s =
                '%' +
                [o, e[++n], e[++n], e[++n]]
                  .map(function (e) {
                    return e.toString(16);
                  })
                  .join('%');
              t += decodeURIComponent(s);
            } else t += String.fromCharCode(((15 & o) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n]));
          }
          return t;
        };
    }),
    a.register('jIku0', function (t, n) {
      function r(e) {
        return new TextEncoder().encode(e);
      }
      function o(e) {
        return new TextDecoder('utf-8').decode(e);
      }
      e(t.exports, 'fromUtf8', () => r), e(t.exports, 'toUtf8', () => o);
    }),
    a.register('6Hv5e', function (t, n) {
      e(t.exports, 'locateWindow', () => o);
      var r = {};
      function o() {
        return 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : r;
      }
    }),
    a.register('sGs99', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.Sha256 = void 0);
      var n = a('3Qtnr'),
        r = a('8EfnR'),
        o = a('6Hv5e'),
        i = (function () {
          function e(e) {
            (this.toHash = new Uint8Array(0)),
              void 0 !== e &&
                ((this.key = new Promise(function (t, i) {
                  (0, o.locateWindow)()
                    .crypto.subtle.importKey('raw', (0, n.convertToBuffer)(e), r.SHA_256_HMAC_ALGO, !1, ['sign'])
                    .then(t, i);
                })),
                this.key.catch(function () {}));
          }
          return (
            (e.prototype.update = function (e) {
              if (!(0, n.isEmptyData)(e)) {
                var t = (0, n.convertToBuffer)(e),
                  r = new Uint8Array(this.toHash.byteLength + t.byteLength);
                r.set(this.toHash, 0), r.set(t, this.toHash.byteLength), (this.toHash = r);
              }
            }),
            (e.prototype.digest = function () {
              var e = this;
              return this.key
                ? this.key.then(function (t) {
                    return (0, o.locateWindow)()
                      .crypto.subtle.sign(r.SHA_256_HMAC_ALGO, t, e.toHash)
                      .then(function (e) {
                        return new Uint8Array(e);
                      });
                  })
                : (0, n.isEmptyData)(this.toHash)
                ? Promise.resolve(r.EMPTY_DATA_SHA_256)
                : Promise.resolve()
                    .then(function () {
                      return (0, o.locateWindow)().crypto.subtle.digest(r.SHA_256_HASH, e.toHash);
                    })
                    .then(function (e) {
                      return Promise.resolve(new Uint8Array(e));
                    });
            }),
            e
          );
        })();
      e.exports.Sha256 = i;
    }),
    a.register('3Qtnr', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.uint32ArrayFrom = e.exports.numToUint8 = e.exports.isEmptyData = e.exports.convertToBuffer = void 0);
      var n = a('8KdcN');
      Object.defineProperty(e.exports, 'convertToBuffer', {
        enumerable: !0,
        get: function () {
          return n.convertToBuffer;
        },
      });
      var r = a('iDUY9');
      Object.defineProperty(e.exports, 'isEmptyData', {
        enumerable: !0,
        get: function () {
          return r.isEmptyData;
        },
      });
      var o = a('j2aYm');
      Object.defineProperty(e.exports, 'numToUint8', {
        enumerable: !0,
        get: function () {
          return o.numToUint8;
        },
      });
      var i = a('983Sh');
      Object.defineProperty(e.exports, 'uint32ArrayFrom', {
        enumerable: !0,
        get: function () {
          return i.uint32ArrayFrom;
        },
      });
    }),
    a.register('8KdcN', function (e, t) {
      'use strict';
      var n = a('4q79f').Buffer;
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.convertToBuffer = void 0);
      var r = a('jSesT'),
        o =
          void 0 !== n && n.from
            ? function (e) {
                return n.from(e, 'utf8');
              }
            : r.fromUtf8;
      e.exports.convertToBuffer = function (e) {
        return e instanceof Uint8Array
          ? e
          : 'string' == typeof e
          ? o(e)
          : ArrayBuffer.isView(e)
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT)
          : new Uint8Array(e);
      };
    }),
    a.register('4q79f', function (n, r) {
      var o, i;
      e(
        n.exports,
        'Buffer',
        () => o,
        e => (o = e),
      ),
        e(
          n.exports,
          'INSPECT_MAX_BYTES',
          () => i,
          e => (i = e),
        );
      var s = a('34HyG'),
        u = a('4IpZR'),
        c = a('jisNi');
      function l() {
        return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function f(e, t) {
        if (l() < t) throw new RangeError('Invalid typed array length');
        return (
          h.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = h.prototype)
            : (null === e && (e = new h(t)), (e.length = t)),
          e
        );
      }
      function h(e, t, n) {
        if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h)) return new h(e, t, n);
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw new Error('If encoding is specified then the first argument must be a string');
          return g(this, e);
        }
        return d(this, e, t, n);
      }
      function d(e, t, n, r) {
        if ('number' == typeof t) throw new TypeError('"value" argument must not be a number');
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n)) throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              h.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = h.prototype) : (e = v(e, t));
              return e;
            })(e, t, n, r)
          : 'string' == typeof t
          ? (function (e, t, n) {
              ('string' == typeof n && '' !== n) || (n = 'utf8');
              if (!h.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
              var r = 0 | m(t, n),
                o = (e = f(e, r)).write(t, n);
              o !== r && (e = e.slice(0, o));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (h.isBuffer(t)) {
                var n = 0 | y(t.length);
                return 0 === (e = f(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || 'length' in t)
                  return 'number' != typeof t.length || (r = t.length) != r ? f(e, 0) : v(e, t);
                if ('Buffer' === t.type && c(t.data)) return v(e, t.data);
              }
              var r;
              throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
            })(e, t);
      }
      function p(e) {
        if ('number' != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function g(e, t) {
        if ((p(t), (e = f(e, t < 0 ? 0 : 0 | y(t))), !h.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function v(e, t) {
        var n = t.length < 0 ? 0 : 0 | y(t.length);
        e = f(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function y(e) {
        if (e >= l())
          throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + l().toString(16) + ' bytes');
        return 0 | e;
      }
      function m(e, t) {
        if (h.isBuffer(e)) return e.length;
        if (
          'undefined' != typeof ArrayBuffer &&
          'function' == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        'string' != typeof e && (e = '' + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return n;
            case 'utf8':
            case 'utf-8':
            case void 0:
              return K(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * n;
            case 'hex':
              return n >>> 1;
            case 'base64':
              return V(e).length;
            default:
              if (r) return K(e).length;
              (t = ('' + t).toLowerCase()), (r = !0);
          }
      }
      function w(e, t, n) {
        var r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return '';
        if ((n >>>= 0) <= (t >>>= 0)) return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return U(this, t, n);
            case 'utf8':
            case 'utf-8':
              return O(this, t, n);
            case 'ascii':
              return R(this, t, n);
            case 'latin1':
            case 'binary':
              return N(this, t, n);
            case 'base64':
              return k(this, t, n);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return L(this, t, n);
            default:
              if (r) throw new TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (r = !0);
          }
      }
      function b(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function S(e, t, n, r, o) {
        if (0 === e.length) return -1;
        if (
          ('string' == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = o ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (o) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if (('string' == typeof t && (t = h.from(t, r)), h.isBuffer(t))) return 0 === t.length ? -1 : _(e, t, n, r, o);
        if ('number' == typeof t)
          return (
            (t &= 255),
            h.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : _(e, [t], n, r, o)
          );
        throw new TypeError('val must be string, number or Buffer');
      }
      function _(e, t, n, r, o) {
        var i,
          s = 1,
          a = e.length,
          u = t.length;
        if (
          void 0 !== r &&
          ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (n /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
          var l = -1;
          for (i = n; i < a; i++)
            if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
              if ((-1 === l && (l = i), i - l + 1 === u)) return l * s;
            } else -1 !== l && (i -= i - l), (l = -1);
        } else
          for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
            for (var f = !0, h = 0; h < u; h++)
              if (c(e, i + h) !== c(t, h)) {
                f = !1;
                break;
              }
            if (f) return i;
          }
        return -1;
      }
      function A(e, t, n, r) {
        n = Number(n) || 0;
        var o = e.length - n;
        r ? (r = Number(r)) > o && (r = o) : (r = o);
        var i = t.length;
        if (i % 2 != 0) throw new TypeError('Invalid hex string');
        r > i / 2 && (r = i / 2);
        for (var s = 0; s < r; ++s) {
          var a = parseInt(t.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          e[n + s] = a;
        }
        return s;
      }
      function E(e, t, n, r) {
        return W(K(t, e.length - n), e, n, r);
      }
      function C(e, t, n, r) {
        return W(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r,
        );
      }
      function T(e, t, n, r) {
        return C(e, t, n, r);
      }
      function I(e, t, n, r) {
        return W(V(t), e, n, r);
      }
      function P(e, t, n, r) {
        return W(
          (function (e, t) {
            for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (r = (n = e.charCodeAt(s)) >> 8), (o = n % 256), i.push(o), i.push(r);
            return i;
          })(t, e.length - n),
          e,
          n,
          r,
        );
      }
      function k(e, t, n) {
        return 0 === t && n === e.length ? s.fromByteArray(e) : s.fromByteArray(e.slice(t, n));
      }
      function O(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], o = t; o < n; ) {
          var i,
            s,
            a,
            u,
            c = e[o],
            l = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + f <= n)
            switch (f) {
              case 1:
                c < 128 && (l = c);
                break;
              case 2:
                128 == (192 & (i = e[o + 1])) && (u = ((31 & c) << 6) | (63 & i)) > 127 && (l = u);
                break;
              case 3:
                (i = e[o + 1]),
                  (s = e[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & s) &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
                    (u < 55296 || u > 57343) &&
                    (l = u);
                break;
              case 4:
                (i = e[o + 1]),
                  (s = e[o + 2]),
                  (a = e[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (u = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (l = u);
            }
          null === l
            ? ((l = 65533), (f = 1))
            : l > 65535 && ((l -= 65536), r.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
            r.push(l),
            (o += f);
        }
        return (function (e) {
          var t = e.length;
          if (t <= x) return String.fromCharCode.apply(String, e);
          var n = '',
            r = 0;
          for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += x)));
          return n;
        })(r);
      }
      (o = h),
        (i = 50),
        (h.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() && 'function' == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        l(),
        (h.poolSize = 8192),
        (h._augment = function (e) {
          return (e.__proto__ = h.prototype), e;
        }),
        (h.from = function (e, t, n) {
          return d(null, e, t, n);
        }),
        h.TYPED_ARRAY_SUPPORT &&
          ((h.prototype.__proto__ = Uint8Array.prototype),
          (h.__proto__ = Uint8Array),
          'undefined' != typeof Symbol &&
            Symbol.species &&
            h[Symbol.species] === h &&
            Object.defineProperty(h, Symbol.species, { value: null, configurable: !0 })),
        (h.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              p(t),
              t <= 0 ? f(e, t) : void 0 !== n ? ('string' == typeof r ? f(e, t).fill(n, r) : f(e, t).fill(n)) : f(e, t)
            );
          })(null, e, t, n);
        }),
        (h.allocUnsafe = function (e) {
          return g(null, e);
        }),
        (h.allocUnsafeSlow = function (e) {
          return g(null, e);
        }),
        (h.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (h.compare = function (e, t) {
          if (!h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError('Arguments must be Buffers');
          if (e === t) return 0;
          for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
            if (e[o] !== t[o]) {
              (n = e[o]), (r = t[o]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (h.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (h.concat = function (e, t) {
          if (!c(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return h.alloc(0);
          var n;
          if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = h.allocUnsafe(t),
            o = 0;
          for (n = 0; n < e.length; ++n) {
            var i = e[n];
            if (!h.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(r, o), (o += i.length);
          }
          return r;
        }),
        (h.byteLength = m),
        (h.prototype._isBuffer = !0),
        (h.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var t = 0; t < e; t += 2) b(this, t, t + 1);
          return this;
        }),
        (h.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
          return this;
        }),
        (h.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var t = 0; t < e; t += 8)
            b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
          return this;
        }),
        (h.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e ? '' : 0 === arguments.length ? O(this, 0, e) : w.apply(this, arguments);
        }),
        (h.prototype.equals = function (e) {
          if (!h.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          return this === e || 0 === h.compare(this, e);
        }),
        (h.prototype.inspect = function () {
          var e = '',
            t = i;
          return (
            this.length > 0 &&
              ((e = this.toString('hex', 0, t).match(/.{2}/g).join(' ')), this.length > t && (e += ' ... ')),
            '<Buffer ' + e + '>'
          );
        }),
        (h.prototype.compare = function (e, t, n, r, o) {
          if (!h.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = this.length),
            t < 0 || n > e.length || r < 0 || o > this.length)
          )
            throw new RangeError('out of range index');
          if (r >= o && t >= n) return 0;
          if (r >= o) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var i = (o >>>= 0) - (r >>>= 0),
              s = (n >>>= 0) - (t >>>= 0),
              a = Math.min(i, s),
              u = this.slice(r, o),
              c = e.slice(t, n),
              l = 0;
            l < a;
            ++l
          )
            if (u[l] !== c[l]) {
              (i = u[l]), (s = c[l]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (h.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (h.prototype.indexOf = function (e, t, n) {
          return S(this, e, t, n, !0);
        }),
        (h.prototype.lastIndexOf = function (e, t, n) {
          return S(this, e, t, n, !1);
        }),
        (h.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
          else if (void 0 === n && 'string' == typeof t) (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
            (t |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0));
          }
          var o = this.length - t;
          if (((void 0 === n || n > o) && (n = o), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
            throw new RangeError('Attempt to write outside buffer bounds');
          r || (r = 'utf8');
          for (var i = !1; ; )
            switch (r) {
              case 'hex':
                return A(this, e, t, n);
              case 'utf8':
              case 'utf-8':
                return E(this, e, t, n);
              case 'ascii':
                return C(this, e, t, n);
              case 'latin1':
              case 'binary':
                return T(this, e, t, n);
              case 'base64':
                return I(this, e, t, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return P(this, e, t, n);
              default:
                if (i) throw new TypeError('Unknown encoding: ' + r);
                (r = ('' + r).toLowerCase()), (i = !0);
            }
        }),
        (h.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      var x = 4096;
      function R(e, t, n) {
        var r = '';
        n = Math.min(e.length, n);
        for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
        return r;
      }
      function N(e, t, n) {
        var r = '';
        n = Math.min(e.length, n);
        for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
        return r;
      }
      function U(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var o = '', i = t; i < n; ++i) o += z(e[i]);
        return o;
      }
      function L(e, t, n) {
        for (var r = e.slice(t, n), o = '', i = 0; i < r.length; i += 2)
          o += String.fromCharCode(r[i] + 256 * r[i + 1]);
        return o;
      }
      function M(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
        if (e + t > n) throw new RangeError('Trying to access beyond buffer length');
      }
      function D(e, t, n, r, o, i) {
        if (!h.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError('Index out of range');
      }
      function F(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
          e[n + o] = (t & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o));
      }
      function j(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = (t >>> (8 * (r ? o : 3 - o))) & 255;
      }
      function B(e, t, n, r, o, i) {
        if (n + r > e.length) throw new RangeError('Index out of range');
        if (n < 0) throw new RangeError('Index out of range');
      }
      function H(e, t, n, r, o) {
        return o || B(e, 0, n, 4), u.write(e, t, n, r, 23, 4), n + 4;
      }
      function G(e, t, n, r, o) {
        return o || B(e, 0, n, 8), u.write(e, t, n, r, 52, 8), n + 8;
      }
      (h.prototype.slice = function (e, t) {
        var n,
          r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          t < e && (t = e),
          h.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = h.prototype;
        else {
          var o = t - e;
          n = new h(o, void 0);
          for (var i = 0; i < o; ++i) n[i] = this[i + e];
        }
        return n;
      }),
        (h.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
          return r;
        }),
        (h.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); ) r += this[e + --t] * o;
          return r;
        }),
        (h.prototype.readUInt8 = function (e, t) {
          return t || M(e, 1, this.length), this[e];
        }),
        (h.prototype.readUInt16LE = function (e, t) {
          return t || M(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (h.prototype.readUInt16BE = function (e, t) {
          return t || M(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (h.prototype.readUInt32LE = function (e, t) {
          return (
            t || M(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
          );
        }),
        (h.prototype.readUInt32BE = function (e, t) {
          return (
            t || M(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (h.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
          return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (h.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); ) i += this[e + --r] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (h.prototype.readInt8 = function (e, t) {
          return t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }),
        (h.prototype.readInt16LE = function (e, t) {
          t || M(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (h.prototype.readInt16BE = function (e, t) {
          t || M(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (h.prototype.readInt32LE = function (e, t) {
          return t || M(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
        }),
        (h.prototype.readInt32BE = function (e, t) {
          return t || M(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
        }),
        (h.prototype.readFloatLE = function (e, t) {
          return t || M(e, 4, this.length), u.read(this, e, !0, 23, 4);
        }),
        (h.prototype.readFloatBE = function (e, t) {
          return t || M(e, 4, this.length), u.read(this, e, !1, 23, 4);
        }),
        (h.prototype.readDoubleLE = function (e, t) {
          return t || M(e, 8, this.length), u.read(this, e, !0, 52, 8);
        }),
        (h.prototype.readDoubleBE = function (e, t) {
          return t || M(e, 8, this.length), u.read(this, e, !1, 52, 8);
        }),
        (h.prototype.writeUIntLE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var o = 1,
            i = 0;
          for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = (e / o) & 255;
          return t + n;
        }),
        (h.prototype.writeUIntBE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var o = n - 1,
            i = 1;
          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = (e / i) & 255;
          return t + n;
        }),
        (h.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 1, 255, 0),
            h.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (h.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 2, 65535, 0),
            h.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : F(this, e, t, !0),
            t + 2
          );
        }),
        (h.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 2, 65535, 0),
            h.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : F(this, e, t, !1),
            t + 2
          );
        }),
        (h.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 4, 4294967295, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e))
              : j(this, e, t, !0),
            t + 4
          );
        }),
        (h.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 4, 4294967295, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
              : j(this, e, t, !1),
            t + 4
          );
        }),
        (h.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            D(this, e, t, n, o - 1, -o);
          }
          var i = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++i < n && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + n;
        }),
        (h.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            D(this, e, t, n, o - 1, -o);
          }
          var i = n - 1,
            s = 1,
            a = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + n;
        }),
        (h.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 1, 127, -128),
            h.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (h.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 2, 32767, -32768),
            h.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : F(this, e, t, !0),
            t + 2
          );
        }),
        (h.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 2, 32767, -32768),
            h.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : F(this, e, t, !1),
            t + 2
          );
        }),
        (h.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 4, 2147483647, -2147483648),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24))
              : j(this, e, t, !0),
            t + 4
          );
        }),
        (h.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || D(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
              : j(this, e, t, !1),
            t + 4
          );
        }),
        (h.prototype.writeFloatLE = function (e, t, n) {
          return H(this, e, t, !0, n);
        }),
        (h.prototype.writeFloatBE = function (e, t, n) {
          return H(this, e, t, !1, n);
        }),
        (h.prototype.writeDoubleLE = function (e, t, n) {
          return G(this, e, t, !0, n);
        }),
        (h.prototype.writeDoubleBE = function (e, t, n) {
          return G(this, e, t, !1, n);
        }),
        (h.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError('targetStart out of bounds');
          if (n < 0 || n >= this.length) throw new RangeError('sourceStart out of bounds');
          if (r < 0) throw new RangeError('sourceEnd out of bounds');
          r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
          var o,
            i = r - n;
          if (this === e && n < t && t < r) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
          else if (i < 1e3 || !h.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
          return i;
        }),
        (h.prototype.fill = function (e, t, n, r) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : 'string' == typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var o = e.charCodeAt(0);
              o < 256 && (e = o);
            }
            if (void 0 !== r && 'string' != typeof r) throw new TypeError('encoding must be a string');
            if ('string' == typeof r && !h.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r);
          } else 'number' == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
          if (n <= t) return this;
          var i;
          if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' == typeof e))
            for (i = t; i < n; ++i) this[i] = e;
          else {
            var s = h.isBuffer(e) ? e : K(new h(e, r).toString()),
              a = s.length;
            for (i = 0; i < n - t; ++i) this[i + t] = s[i % a];
          }
          return this;
        });
      var q = /[^+\/0-9A-Za-z-_]/g;
      function z(e) {
        return e < 16 ? '0' + e.toString(16) : e.toString(16);
      }
      function K(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
          if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((t -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error('Invalid code point');
            if ((t -= 4) < 0) break;
            i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
          }
        }
        return i;
      }
      function V(e) {
        return s.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
              })(e).replace(q, '')).length < 2
            )
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e),
        );
      }
      function W(e, t, n, r) {
        for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
        return o;
      }
    }),
    a.register('34HyG', function (t, n) {
      var r, o;
      e(
        t.exports,
        'toByteArray',
        () => r,
        e => (r = e),
      ),
        e(
          t.exports,
          'fromByteArray',
          () => o,
          e => (o = e),
        ),
        (r = function (e) {
          var t,
            n,
            r = f(e),
            o = r[0],
            i = r[1],
            u = new a(
              (function (e, t, n) {
                return (3 * (t + n)) / 4 - n;
              })(0, o, i),
            ),
            c = 0,
            l = i > 0 ? o - 4 : o;
          for (n = 0; n < l; n += 4)
            (t =
              (s[e.charCodeAt(n)] << 18) |
              (s[e.charCodeAt(n + 1)] << 12) |
              (s[e.charCodeAt(n + 2)] << 6) |
              s[e.charCodeAt(n + 3)]),
              (u[c++] = (t >> 16) & 255),
              (u[c++] = (t >> 8) & 255),
              (u[c++] = 255 & t);
          2 === i && ((t = (s[e.charCodeAt(n)] << 2) | (s[e.charCodeAt(n + 1)] >> 4)), (u[c++] = 255 & t));
          1 === i &&
            ((t = (s[e.charCodeAt(n)] << 10) | (s[e.charCodeAt(n + 1)] << 4) | (s[e.charCodeAt(n + 2)] >> 2)),
            (u[c++] = (t >> 8) & 255),
            (u[c++] = 255 & t));
          return u;
        }),
        (o = function (e) {
          for (var t, n = e.length, r = n % 3, o = [], s = 16383, a = 0, u = n - r; a < u; a += s)
            o.push(h(e, a, a + s > u ? u : a + s));
          1 === r
            ? ((t = e[n - 1]), o.push(i[t >> 2] + i[(t << 4) & 63] + '=='))
            : 2 === r &&
              ((t = (e[n - 2] << 8) + e[n - 1]), o.push(i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + '='));
          return o.join('');
        });
      for (
        var i = [],
          s = [],
          a = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          c = 0,
          l = u.length;
        c < l;
        ++c
      )
        (i[c] = u[c]), (s[u.charCodeAt(c)] = c);
      function f(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
        var n = e.indexOf('=');
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
      }
      function h(e, t, n) {
        for (var r, o, s = [], a = t; a < n; a += 3)
          (r = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
            s.push(i[((o = r) >> 18) & 63] + i[(o >> 12) & 63] + i[(o >> 6) & 63] + i[63 & o]);
        return s.join('');
      }
      (s['-'.charCodeAt(0)] = 62), (s['_'.charCodeAt(0)] = 63);
    }),
    a.register('4IpZR', function (t, n) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var r, o;
      e(
        t.exports,
        'read',
        () => r,
        e => (r = e),
      ),
        e(
          t.exports,
          'write',
          () => o,
          e => (o = e),
        ),
        (r = function (e, t, n, r, o) {
          var i,
            s,
            a = 8 * o - r - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            f = n ? o - 1 : 0,
            h = n ? -1 : 1,
            d = e[t + f];
          for (f += h, i = d & ((1 << -l) - 1), d >>= -l, l += a; l > 0; i = 256 * i + e[t + f], f += h, l -= 8);
          for (s = i & ((1 << -l) - 1), i >>= -l, l += r; l > 0; s = 256 * s + e[t + f], f += h, l -= 8);
          if (0 === i) i = 1 - c;
          else {
            if (i === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, r)), (i -= c);
          }
          return (d ? -1 : 1) * s * Math.pow(2, i - r);
        }),
        (o = function (e, t, n, r, o, i) {
          var s,
            a,
            u,
            c = 8 * i - o - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : i - 1,
            p = r ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, (u /= 2)),
                  s + f >= l
                    ? ((a = 0), (s = l))
                    : s + f >= 1
                    ? ((a = (t * u - 1) * Math.pow(2, o)), (s += f))
                    : ((a = t * Math.pow(2, f - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            e[n + d] = 255 & a, d += p, a /= 256, o -= 8
          );
          for (s = (s << o) | a, c += o; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8);
          e[n + d - p] |= 128 * g;
        });
    }),
    a.register('jisNi', function (e, t) {
      var n = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return '[object Array]' == n.call(e);
        };
    }),
    a.register('jSesT', function (t, n) {
      e(t.exports, 'fromUtf8', () => i);
      var r = a('aiKqQ'),
        o = a('8N08D'),
        i = function (e) {
          return 'function' == typeof TextEncoder ? o.fromUtf8(e) : r.fromUtf8(e);
        };
    }),
    a.register('aiKqQ', function (t, n) {
      e(t.exports, 'fromUtf8', () => r), e(t.exports, 'toUtf8', () => o);
      var r = function (e) {
          for (var t = [], n = 0, r = e.length; n < r; n++) {
            var o = e.charCodeAt(n);
            if (o < 128) t.push(o);
            else if (o < 2048) t.push((o >> 6) | 192, (63 & o) | 128);
            else if (n + 1 < e.length && 55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(n + 1))) {
              var i = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n));
              t.push((i >> 18) | 240, ((i >> 12) & 63) | 128, ((i >> 6) & 63) | 128, (63 & i) | 128);
            } else t.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
          }
          return Uint8Array.from(t);
        },
        o = function (e) {
          for (var t = '', n = 0, r = e.length; n < r; n++) {
            var o = e[n];
            if (o < 128) t += String.fromCharCode(o);
            else if (192 <= o && o < 224) {
              var i = e[++n];
              t += String.fromCharCode(((31 & o) << 6) | (63 & i));
            } else if (240 <= o && o < 365) {
              var s =
                '%' +
                [o, e[++n], e[++n], e[++n]]
                  .map(function (e) {
                    return e.toString(16);
                  })
                  .join('%');
              t += decodeURIComponent(s);
            } else t += String.fromCharCode(((15 & o) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n]));
          }
          return t;
        };
    }),
    a.register('8N08D', function (t, n) {
      function r(e) {
        return new TextEncoder().encode(e);
      }
      function o(e) {
        return new TextDecoder('utf-8').decode(e);
      }
      e(t.exports, 'fromUtf8', () => r), e(t.exports, 'toUtf8', () => o);
    }),
    a.register('iDUY9', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.isEmptyData = void 0),
        (e.exports.isEmptyData = function (e) {
          return 'string' == typeof e ? 0 === e.length : 0 === e.byteLength;
        });
    }),
    a.register('j2aYm', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.numToUint8 = void 0),
        (e.exports.numToUint8 = function (e) {
          return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]);
        });
    }),
    a.register('983Sh', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.uint32ArrayFrom = void 0),
        (e.exports.uint32ArrayFrom = function (e) {
          if (!Array.from) {
            for (var t = new Uint32Array(e.length); 0 < e.length; ) t[0] = e[0];
            return t;
          }
          return Uint32Array.from(e);
        });
    }),
    a.register('9uIwY', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), l(a('9nxPa'), e.exports);
    });
  function u(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function c(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function l(e, t) {
    for (var n in e) 'default' === n || t.hasOwnProperty(n) || (t[n] = e[n]);
  }
  function f(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? h(Object(n), !0).forEach(function (t) {
            f(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : h(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function p(e) {
    return (
      'Minified Redux error #' +
      e +
      '; visit https://redux.js.org/Errors?code=' +
      e +
      ' for the full message or use the non-minified dev environment for full errors. '
    );
  }
  a.register('9nxPa', function (e, t) {
    'use strict';
    Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.Sha256 = void 0);
    var n = a('e27Ac'),
      r = a('eKIOu'),
      o = a('3Qtnr'),
      i = (function () {
        function e(e) {
          if (((this.hash = new r.RawSha256()), e)) {
            this.outer = new r.RawSha256();
            var t = (function (e) {
                var t = (0, o.convertToBuffer)(e);
                if (t.byteLength > n.BLOCK_SIZE) {
                  var i = new r.RawSha256();
                  i.update(t), (t = i.digest());
                }
                var s = new Uint8Array(n.BLOCK_SIZE);
                return s.set(t), s;
              })(e),
              i = new Uint8Array(n.BLOCK_SIZE);
            i.set(t);
            for (var s = 0; s < n.BLOCK_SIZE; s++) (t[s] ^= 54), (i[s] ^= 92);
            this.hash.update(t), this.outer.update(i);
            for (s = 0; s < t.byteLength; s++) t[s] = 0;
          }
        }
        return (
          (e.prototype.update = function (e) {
            if (!(0, o.isEmptyData)(e) && !this.error)
              try {
                this.hash.update((0, o.convertToBuffer)(e));
              } catch (e) {
                this.error = e;
              }
          }),
          (e.prototype.digestSync = function () {
            if (this.error) throw this.error;
            return this.outer
              ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest())
              : this.hash.digest();
          }),
          (e.prototype.digest = function () {
            return u(this, void 0, void 0, function () {
              return c(this, function (e) {
                return [2, this.digestSync()];
              });
            });
          }),
          e
        );
      })();
    e.exports.Sha256 = i;
  }),
    a.register('e27Ac', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.MAX_HASHABLE_LENGTH =
          e.exports.INIT =
          e.exports.KEY =
          e.exports.DIGEST_LENGTH =
          e.exports.BLOCK_SIZE =
            void 0),
        (e.exports.BLOCK_SIZE = 64),
        (e.exports.DIGEST_LENGTH = 32),
        (e.exports.KEY = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
          310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
          264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
          3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
          1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
          3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
          1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ])),
        (e.exports.INIT = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
        ]),
        (e.exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1);
    }),
    a.register('eKIOu', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.RawSha256 = void 0);
      var n = a('e27Ac'),
        r = (function () {
          function e() {
            (this.state = Int32Array.from(n.INIT)),
              (this.temp = new Int32Array(64)),
              (this.buffer = new Uint8Array(64)),
              (this.bufferLength = 0),
              (this.bytesHashed = 0),
              (this.finished = !1);
          }
          return (
            (e.prototype.update = function (e) {
              if (this.finished) throw new Error('Attempted to update an already finished hash.');
              var t = 0,
                r = e.byteLength;
              if (((this.bytesHashed += r), 8 * this.bytesHashed > n.MAX_HASHABLE_LENGTH))
                throw new Error('Cannot hash more than 2^53 - 1 bits');
              for (; r > 0; )
                (this.buffer[this.bufferLength++] = e[t++]),
                  r--,
                  this.bufferLength === n.BLOCK_SIZE && (this.hashBuffer(), (this.bufferLength = 0));
            }),
            (e.prototype.digest = function () {
              if (!this.finished) {
                var e = 8 * this.bytesHashed,
                  t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                  r = this.bufferLength;
                if ((t.setUint8(this.bufferLength++, 128), r % n.BLOCK_SIZE >= n.BLOCK_SIZE - 8)) {
                  for (var o = this.bufferLength; o < n.BLOCK_SIZE; o++) t.setUint8(o, 0);
                  this.hashBuffer(), (this.bufferLength = 0);
                }
                for (o = this.bufferLength; o < n.BLOCK_SIZE - 8; o++) t.setUint8(o, 0);
                t.setUint32(n.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0),
                  t.setUint32(n.BLOCK_SIZE - 4, e),
                  this.hashBuffer(),
                  (this.finished = !0);
              }
              var i = new Uint8Array(n.DIGEST_LENGTH);
              for (o = 0; o < 8; o++)
                (i[4 * o] = (this.state[o] >>> 24) & 255),
                  (i[4 * o + 1] = (this.state[o] >>> 16) & 255),
                  (i[4 * o + 2] = (this.state[o] >>> 8) & 255),
                  (i[4 * o + 3] = (this.state[o] >>> 0) & 255);
              return i;
            }),
            (e.prototype.hashBuffer = function () {
              for (
                var e = this.buffer,
                  t = this.state,
                  r = t[0],
                  o = t[1],
                  i = t[2],
                  s = t[3],
                  a = t[4],
                  u = t[5],
                  c = t[6],
                  l = t[7],
                  f = 0;
                f < n.BLOCK_SIZE;
                f++
              ) {
                if (f < 16)
                  this.temp[f] =
                    ((255 & e[4 * f]) << 24) |
                    ((255 & e[4 * f + 1]) << 16) |
                    ((255 & e[4 * f + 2]) << 8) |
                    (255 & e[4 * f + 3]);
                else {
                  var h = this.temp[f - 2],
                    d = ((h >>> 17) | (h << 15)) ^ ((h >>> 19) | (h << 13)) ^ (h >>> 10),
                    p = (((h = this.temp[f - 15]) >>> 7) | (h << 25)) ^ ((h >>> 18) | (h << 14)) ^ (h >>> 3);
                  this.temp[f] = ((d + this.temp[f - 7]) | 0) + ((p + this.temp[f - 16]) | 0);
                }
                var g =
                    ((((((a >>> 6) | (a << 26)) ^ ((a >>> 11) | (a << 21)) ^ ((a >>> 25) | (a << 7))) +
                      ((a & u) ^ (~a & c))) |
                      0) +
                      ((l + ((n.KEY[f] + this.temp[f]) | 0)) | 0)) |
                    0,
                  v =
                    ((((r >>> 2) | (r << 30)) ^ ((r >>> 13) | (r << 19)) ^ ((r >>> 22) | (r << 10))) +
                      ((r & o) ^ (r & i) ^ (o & i))) |
                    0;
                (l = c), (c = u), (u = a), (a = (s + g) | 0), (s = i), (i = o), (o = r), (r = (g + v) | 0);
              }
              (t[0] += r), (t[1] += o), (t[2] += i), (t[3] += s), (t[4] += a), (t[5] += u), (t[6] += c), (t[7] += l);
            }),
            e
          );
        })();
      e.exports.RawSha256 = r;
    }),
    a.register('hkyEW', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), a('8FEE3').__exportStar(a('3h7qe'), e.exports);
    }),
    a.register('8FEE3', function (t, n) {
      e(t.exports, '__awaiter', () => r), e(t.exports, '__generator', () => o), e(t.exports, '__exportStar', () => i);
      function r(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function o(e, t) {
        var n,
          r,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return s.label++, { value: i[1], done: !1 };
                    case 5:
                      s.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        s = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        s.label = i[1];
                        break;
                      }
                      if (6 === i[0] && s.label < o[1]) {
                        (s.label = o[1]), (o = i);
                        break;
                      }
                      if (o && s.label < o[2]) {
                        (s.label = o[2]), s.ops.push(i);
                        break;
                      }
                      o[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  i = t.call(e, s);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      }
      function i(e, t) {
        for (var n in e) 'default' === n || t.hasOwnProperty(n) || (t[n] = e[n]);
      }
    }),
    a.register('3h7qe', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.supportsZeroByteGCM =
          e.exports.supportsSubtleCrypto =
          e.exports.supportsSecureRandom =
          e.exports.supportsWebCrypto =
            void 0);
      var n = a('8FEE3'),
        r = ['decrypt', 'digest', 'encrypt', 'exportKey', 'generateKey', 'importKey', 'sign', 'verify'];
      function o(e) {
        return 'object' == typeof e && 'object' == typeof e.crypto && 'function' == typeof e.crypto.getRandomValues;
      }
      function i(e) {
        return (
          e &&
          r.every(function (t) {
            return 'function' == typeof e[t];
          })
        );
      }
      (e.exports.supportsWebCrypto = function (e) {
        return !(!o(e) || 'object' != typeof e.crypto.subtle) && i(e.crypto.subtle);
      }),
        (e.exports.supportsSecureRandom = o),
        (e.exports.supportsSubtleCrypto = i),
        (e.exports.supportsZeroByteGCM = function (e) {
          return n.__awaiter(this, void 0, void 0, function () {
            var t;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!i(e)) return [2, !1];
                  n.label = 1;
                case 1:
                  return (
                    n.trys.push([1, 4, , 5]), [4, e.generateKey({ name: 'AES-GCM', length: 128 }, !1, ['encrypt'])]
                  );
                case 2:
                  return (
                    (t = n.sent()),
                    [
                      4,
                      e.encrypt(
                        {
                          name: 'AES-GCM',
                          iv: new Uint8Array(Array(12)),
                          additionalData: new Uint8Array(Array(16)),
                          tagLength: 128,
                        },
                        t,
                        new Uint8Array(0),
                      ),
                    ]
                  );
                case 3:
                  return [2, 16 === n.sent().byteLength];
                case 4:
                  return n.sent(), [2, !1];
                case 5:
                  return [2];
              }
            });
          });
        });
    }),
    a.register('8jruJ', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 });
      var n = a('aeCiR');
      n.__exportStar(a('bQ4SS'), e.exports),
        n.__exportStar(a('jBh3n'), e.exports),
        n.__exportStar(a('guSE0'), e.exports),
        n.__exportStar(a('4vJjg'), e.exports),
        n.__exportStar(a('6w3hF'), e.exports);
    }),
    a.register('aeCiR', function (t, n) {
      e(t.exports, '__exportStar', () => r);
      function r(e, t) {
        for (var n in e) 'default' === n || t.hasOwnProperty(n) || (t[n] = e[n]);
      }
    }),
    a.register('bQ4SS', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 });
    }),
    a.register('jBh3n', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 });
    }),
    a.register('guSE0', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 });
    }),
    a.register('4vJjg', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 });
    }),
    a.register('6w3hF', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }), (e.exports.isMsWindow = void 0);
      var n = ['decrypt', 'digest', 'encrypt', 'exportKey', 'generateKey', 'importKey', 'sign', 'verify'];
      e.exports.isMsWindow = function (e) {
        if (
          (function (e) {
            return 'MSInputMethodContext' in e && 'msCrypto' in e;
          })(e) &&
          void 0 !== e.msCrypto.subtle
        ) {
          var t = e.msCrypto,
            r = t.getRandomValues,
            o = t.subtle;
          return n
            .map(function (e) {
              return o[e];
            })
            .concat(r)
            .every(function (e) {
              return 'function' == typeof e;
            });
        }
        return !1;
      };
    }),
    a.register('iTs6l', function (e, n) {
      var r;
      e.exports =
        ((r =
          r ||
          (function (e, n) {
            var r;
            if (
              ('undefined' != typeof window && window.crypto && (r = window.crypto),
              'undefined' != typeof self && self.crypto && (r = self.crypto),
              'undefined' != typeof globalThis && globalThis.crypto && (r = globalThis.crypto),
              !r && 'undefined' != typeof window && window.msCrypto && (r = window.msCrypto),
              !r && void 0 !== t && t.crypto && (r = t.crypto),
              !r)
            )
              try {
                r = a('79B2d');
              } catch (e) {}
            var o = function () {
                if (r) {
                  if ('function' == typeof r.getRandomValues)
                    try {
                      return r.getRandomValues(new Uint32Array(1))[0];
                    } catch (e) {}
                  if ('function' == typeof r.randomBytes)
                    try {
                      return r.randomBytes(4).readInt32LE();
                    } catch (e) {}
                }
                throw new Error('Native crypto module could not be used to get secure random number.');
              },
              i =
                Object.create ||
                (function () {
                  function e() {}
                  return function (t) {
                    var n;
                    return (e.prototype = t), (n = new e()), (e.prototype = null), n;
                  };
                })(),
              s = {},
              u = (s.lib = {}),
              c = (u.Base = {
                extend: function (e) {
                  var t = i(this);
                  return (
                    e && t.mixIn(e),
                    (t.hasOwnProperty('init') && this.init !== t.init) ||
                      (t.init = function () {
                        t.$super.init.apply(this, arguments);
                      }),
                    (t.init.prototype = t),
                    (t.$super = this),
                    t
                  );
                },
                create: function () {
                  var e = this.extend();
                  return e.init.apply(e, arguments), e;
                },
                init: function () {},
                mixIn: function (e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                  e.hasOwnProperty('toString') && (this.toString = e.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              l = (u.WordArray = c.extend({
                init: function (e, t) {
                  (e = this.words = e || []), (this.sigBytes = t != n ? t : 4 * e.length);
                },
                toString: function (e) {
                  return (e || h).stringify(this);
                },
                concat: function (e) {
                  var t = this.words,
                    n = e.words,
                    r = this.sigBytes,
                    o = e.sigBytes;
                  if ((this.clamp(), r % 4))
                    for (var i = 0; i < o; i++) {
                      var s = (n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      t[(r + i) >>> 2] |= s << (24 - ((r + i) % 4) * 8);
                    }
                  else for (var a = 0; a < o; a += 4) t[(r + a) >>> 2] = n[a >>> 2];
                  return (this.sigBytes += o), this;
                },
                clamp: function () {
                  var t = this.words,
                    n = this.sigBytes;
                  (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)), (t.length = e.ceil(n / 4));
                },
                clone: function () {
                  var e = c.clone.call(this);
                  return (e.words = this.words.slice(0)), e;
                },
                random: function (e) {
                  for (var t = [], n = 0; n < e; n += 4) t.push(o());
                  return new l.init(t, e);
                },
              })),
              f = (s.enc = {}),
              h = (f.Hex = {
                stringify: function (e) {
                  for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                    var i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
                  }
                  return r.join('');
                },
                parse: function (e) {
                  for (var t = e.length, n = [], r = 0; r < t; r += 2)
                    n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                  return new l.init(n, t / 2);
                },
              }),
              d = (f.Latin1 = {
                stringify: function (e) {
                  for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                    var i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    r.push(String.fromCharCode(i));
                  }
                  return r.join('');
                },
                parse: function (e) {
                  for (var t = e.length, n = [], r = 0; r < t; r++)
                    n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                  return new l.init(n, t);
                },
              }),
              p = (f.Utf8 = {
                stringify: function (e) {
                  try {
                    return decodeURIComponent(escape(d.stringify(e)));
                  } catch (e) {
                    throw new Error('Malformed UTF-8 data');
                  }
                },
                parse: function (e) {
                  return d.parse(unescape(encodeURIComponent(e)));
                },
              }),
              g = (u.BufferedBlockAlgorithm = c.extend({
                reset: function () {
                  (this._data = new l.init()), (this._nDataBytes = 0);
                },
                _append: function (e) {
                  'string' == typeof e && (e = p.parse(e)), this._data.concat(e), (this._nDataBytes += e.sigBytes);
                },
                _process: function (t) {
                  var n,
                    r = this._data,
                    o = r.words,
                    i = r.sigBytes,
                    s = this.blockSize,
                    a = i / (4 * s),
                    u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,
                    c = e.min(4 * u, i);
                  if (u) {
                    for (var f = 0; f < u; f += s) this._doProcessBlock(o, f);
                    (n = o.splice(0, u)), (r.sigBytes -= c);
                  }
                  return new l.init(n, c);
                },
                clone: function () {
                  var e = c.clone.call(this);
                  return (e._data = this._data.clone()), e;
                },
                _minBufferSize: 0,
              })),
              v =
                ((u.Hasher = g.extend({
                  cfg: c.extend(),
                  init: function (e) {
                    (this.cfg = this.cfg.extend(e)), this.reset();
                  },
                  reset: function () {
                    g.reset.call(this), this._doReset();
                  },
                  update: function (e) {
                    return this._append(e), this._process(), this;
                  },
                  finalize: function (e) {
                    return e && this._append(e), this._doFinalize();
                  },
                  blockSize: 16,
                  _createHelper: function (e) {
                    return function (t, n) {
                      return new e.init(n).finalize(t);
                    };
                  },
                  _createHmacHelper: function (e) {
                    return function (t, n) {
                      return new v.HMAC.init(e, n).finalize(t);
                    };
                  },
                })),
                (s.algo = {}));
            return s;
          })(Math)),
        r);
    }),
    a.register('79B2d', function (e, t) {}),
    a.register('CSYCJ', function (e, t) {
      var n;
      e.exports =
        ((n = a('iTs6l')),
        (function () {
          if ('function' == typeof ArrayBuffer) {
            var e = n.lib.WordArray,
              t = e.init,
              r = (e.init = function (e) {
                if (
                  (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                  (e instanceof Int8Array ||
                    ('undefined' != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray) ||
                    e instanceof Int16Array ||
                    e instanceof Uint16Array ||
                    e instanceof Int32Array ||
                    e instanceof Uint32Array ||
                    e instanceof Float32Array ||
                    e instanceof Float64Array) &&
                    (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
                  e instanceof Uint8Array)
                ) {
                  for (var n = e.byteLength, r = [], o = 0; o < n; o++) r[o >>> 2] |= e[o] << (24 - (o % 4) * 8);
                  t.call(this, r, n);
                } else t.apply(this, arguments);
              });
            r.prototype = e;
          }
        })(),
        n.lib.WordArray);
    }),
    a.register('eMcSz', function (e, t) {
      var n;
      e.exports =
        ((n = a('iTs6l')),
        (function (e) {
          var t = n,
            r = t.lib,
            o = r.WordArray,
            i = r.Hasher,
            s = t.algo,
            a = [],
            u = [];
          !(function () {
            function t(t) {
              for (var n = e.sqrt(t), r = 2; r <= n; r++) if (!(t % r)) return !1;
              return !0;
            }
            function n(e) {
              return (4294967296 * (e - (0 | e))) | 0;
            }
            for (var r = 2, o = 0; o < 64; )
              t(r) && (o < 8 && (a[o] = n(e.pow(r, 0.5))), (u[o] = n(e.pow(r, 1 / 3))), o++), r++;
          })();
          var c = [],
            l = (s.SHA256 = i.extend({
              _doReset: function () {
                this._hash = new o.init(a.slice(0));
              },
              _doProcessBlock: function (e, t) {
                for (
                  var n = this._hash.words,
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    s = n[3],
                    a = n[4],
                    l = n[5],
                    f = n[6],
                    h = n[7],
                    d = 0;
                  d < 64;
                  d++
                ) {
                  if (d < 16) c[d] = 0 | e[t + d];
                  else {
                    var p = c[d - 15],
                      g = ((p << 25) | (p >>> 7)) ^ ((p << 14) | (p >>> 18)) ^ (p >>> 3),
                      v = c[d - 2],
                      y = ((v << 15) | (v >>> 17)) ^ ((v << 13) | (v >>> 19)) ^ (v >>> 10);
                    c[d] = g + c[d - 7] + y + c[d - 16];
                  }
                  var m = (r & o) ^ (r & i) ^ (o & i),
                    w = ((r << 30) | (r >>> 2)) ^ ((r << 19) | (r >>> 13)) ^ ((r << 10) | (r >>> 22)),
                    b =
                      h +
                      (((a << 26) | (a >>> 6)) ^ ((a << 21) | (a >>> 11)) ^ ((a << 7) | (a >>> 25))) +
                      ((a & l) ^ (~a & f)) +
                      u[d] +
                      c[d];
                  (h = f), (f = l), (l = a), (a = (s + b) | 0), (s = i), (i = o), (o = r), (r = (b + (w + m)) | 0);
                }
                (n[0] = (n[0] + r) | 0),
                  (n[1] = (n[1] + o) | 0),
                  (n[2] = (n[2] + i) | 0),
                  (n[3] = (n[3] + s) | 0),
                  (n[4] = (n[4] + a) | 0),
                  (n[5] = (n[5] + l) | 0),
                  (n[6] = (n[6] + f) | 0),
                  (n[7] = (n[7] + h) | 0);
              },
              _doFinalize: function () {
                var t = this._data,
                  n = t.words,
                  r = 8 * this._nDataBytes,
                  o = 8 * t.sigBytes;
                return (
                  (n[o >>> 5] |= 128 << (24 - (o % 32))),
                  (n[14 + (((o + 64) >>> 9) << 4)] = e.floor(r / 4294967296)),
                  (n[15 + (((o + 64) >>> 9) << 4)] = r),
                  (t.sigBytes = 4 * n.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var e = i.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              },
            }));
          (t.SHA256 = i._createHelper(l)), (t.HmacSHA256 = i._createHmacHelper(l));
        })(Math),
        n.SHA256);
    }),
    a.register('5wa3w', function (e, t) {
      var n;
      e.exports = ((n = a('iTs6l')), a('eMcSz'), a('40VZK'), n.HmacSHA256);
    }),
    a.register('40VZK', function (e, t) {
      var n, r, o, i;
      e.exports =
        ((n = a('iTs6l')),
        (o = (r = n).lib.Base),
        (i = r.enc.Utf8),
        void (r.algo.HMAC = o.extend({
          init: function (e, t) {
            (e = this._hasher = new e.init()), 'string' == typeof t && (t = i.parse(t));
            var n = e.blockSize,
              r = 4 * n;
            t.sigBytes > r && (t = e.finalize(t)), t.clamp();
            for (
              var o = (this._oKey = t.clone()), s = (this._iKey = t.clone()), a = o.words, u = s.words, c = 0;
              c < n;
              c++
            )
              (a[c] ^= 1549556828), (u[c] ^= 909522486);
            (o.sigBytes = s.sigBytes = r), this.reset();
          },
          reset: function () {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
          },
          update: function (e) {
            return this._hasher.update(e), this;
          },
          finalize: function (e) {
            var t = this._hasher,
              n = t.finalize(e);
            return t.reset(), t.finalize(this._oKey.clone().concat(n));
          },
        })));
    }),
    a.register('gHkqp', function (e, t) {
      var n;
      e.exports =
        ((n = a('iTs6l')),
        (function () {
          var e = n,
            t = e.lib.WordArray;
          function r(e, n, r) {
            for (var o = [], i = 0, s = 0; s < n; s++)
              if (s % 4) {
                var a = (r[e.charCodeAt(s - 1)] << ((s % 4) * 2)) | (r[e.charCodeAt(s)] >>> (6 - (s % 4) * 2));
                (o[i >>> 2] |= a << (24 - (i % 4) * 8)), i++;
              }
            return t.create(o, i);
          }
          e.enc.Base64 = {
            stringify: function (e) {
              var t = e.words,
                n = e.sigBytes,
                r = this._map;
              e.clamp();
              for (var o = [], i = 0; i < n; i += 3)
                for (
                  var s =
                      (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                      (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
                      ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                    a = 0;
                  a < 4 && i + 0.75 * a < n;
                  a++
                )
                  o.push(r.charAt((s >>> (6 * (3 - a))) & 63));
              var u = r.charAt(64);
              if (u) for (; o.length % 4; ) o.push(u);
              return o.join('');
            },
            parse: function (e) {
              var t = e.length,
                n = this._map,
                o = this._reverseMap;
              if (!o) {
                o = this._reverseMap = [];
                for (var i = 0; i < n.length; i++) o[n.charCodeAt(i)] = i;
              }
              var s = n.charAt(64);
              if (s) {
                var a = e.indexOf(s);
                -1 !== a && (t = a);
              }
              return r(e, t, o);
            },
            _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          };
        })(),
        n.enc.Base64);
    }),
    a.register('gmmGS', function (t, r) {
      function o(e, t) {
        return (
          (t = t || {}),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest(),
              i = [],
              s = [],
              a = {},
              u = function () {
                return {
                  ok: 2 == ((o.status / 100) | 0),
                  statusText: o.statusText,
                  status: o.status,
                  url: o.responseURL,
                  text: function () {
                    return Promise.resolve(o.responseText);
                  },
                  json: function () {
                    return Promise.resolve(o.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([o.response]));
                  },
                  clone: u,
                  headers: {
                    keys: function () {
                      return i;
                    },
                    entries: function () {
                      return s;
                    },
                    get: function (e) {
                      return a[e.toLowerCase()];
                    },
                    has: function (e) {
                      return e.toLowerCase() in a;
                    },
                  },
                };
              };
            for (var c in (o.open(t.method || 'get', e, !0),
            (o.onload = function () {
              o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
                i.push((t = t.toLowerCase())), s.push([t, n]), (a[t] = a[t] ? a[t] + ',' + n : n);
              }),
                n(u());
            }),
            (o.onerror = r),
            (o.withCredentials = 'include' == t.credentials),
            t.headers))
              o.setRequestHeader(c, t.headers[c]);
            o.send(t.body || null);
          })
        );
      }
      n(t.exports), e(t.exports, 'default', () => o);
    }),
    a.register('8schB', function (e, n) {
      !(function (r) {
        var o = n && !n.nodeType && n,
          i = e && !e.nodeType && e,
          s = 'object' == typeof t && t;
        (s.global !== s && s.window !== s && s.self !== s) || (r = s);
        var a,
          u,
          c = 2147483647,
          l = 36,
          f = /^xn--/,
          h = /[^\x20-\x7E]/,
          d = /[\x2E\u3002\uFF0E\uFF61]/g,
          p = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          g = Math.floor,
          v = String.fromCharCode;
        function y(e) {
          throw RangeError(p[e]);
        }
        function m(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
          return r;
        }
        function w(e, t) {
          var n = e.split('@'),
            r = '';
          return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + m((e = e.replace(d, '.')).split('.'), t).join('.');
        }
        function b(e) {
          for (var t, n, r = [], o = 0, i = e.length; o < i; )
            (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
              ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                : (r.push(t), o--)
              : r.push(t);
          return r;
        }
        function S(e) {
          return m(e, function (e) {
            var t = '';
            return (
              e > 65535 && ((t += v((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += v(e))
            );
          }).join('');
        }
        function _(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function A(e, t, n) {
          var r = 0;
          for (e = n ? g(e / 700) : e >> 1, e += g(e / t); e > 455; r += l) e = g(e / 35);
          return g(r + (36 * e) / (e + 38));
        }
        function E(e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            a,
            u,
            f,
            h,
            d,
            p = [],
            v = e.length,
            m = 0,
            w = 128,
            b = 72;
          for ((n = e.lastIndexOf('-')) < 0 && (n = 0), r = 0; r < n; ++r)
            e.charCodeAt(r) >= 128 && y('not-basic'), p.push(e.charCodeAt(r));
          for (o = n > 0 ? n + 1 : 0; o < v; ) {
            for (
              i = m, s = 1, a = l;
              o >= v && y('invalid-input'),
                ((u = (d = e.charCodeAt(o++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : l) >=
                  l ||
                  u > g((c - m) / s)) &&
                  y('overflow'),
                (m += u * s),
                !(u < (f = a <= b ? 1 : a >= b + 26 ? 26 : a - b));
              a += l
            )
              s > g(c / (h = l - f)) && y('overflow'), (s *= h);
            (b = A(m - i, (t = p.length + 1), 0 == i)),
              g(m / t) > c - w && y('overflow'),
              (w += g(m / t)),
              (m %= t),
              p.splice(m++, 0, w);
          }
          return S(p);
        }
        function C(e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            a,
            u,
            f,
            h,
            d,
            p,
            m,
            w,
            S,
            E = [];
          for (p = (e = b(e)).length, t = 128, n = 0, i = 72, s = 0; s < p; ++s) (d = e[s]) < 128 && E.push(v(d));
          for (r = o = E.length, o && E.push('-'); r < p; ) {
            for (a = c, s = 0; s < p; ++s) (d = e[s]) >= t && d < a && (a = d);
            for (a - t > g((c - n) / (m = r + 1)) && y('overflow'), n += (a - t) * m, t = a, s = 0; s < p; ++s)
              if (((d = e[s]) < t && ++n > c && y('overflow'), d == t)) {
                for (u = n, f = l; !(u < (h = f <= i ? 1 : f >= i + 26 ? 26 : f - i)); f += l)
                  (S = u - h), (w = l - h), E.push(v(_(h + (S % w), 0))), (u = g(S / w));
                E.push(v(_(u, 0))), (i = A(n, m, r == o)), (n = 0), ++r;
              }
            ++n, ++t;
          }
          return E.join('');
        }
        if (
          ((a = {
            version: '1.3.2',
            ucs2: { decode: b, encode: S },
            decode: E,
            encode: C,
            toASCII: function (e) {
              return w(e, function (e) {
                return h.test(e) ? 'xn--' + C(e) : e;
              });
            },
            toUnicode: function (e) {
              return w(e, function (e) {
                return f.test(e) ? E(e.slice(4).toLowerCase()) : e;
              });
            },
          }),
          'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
          define('punycode', function () {
            return a;
          });
        else if (o && i)
          if (e.exports == o) i.exports = a;
          else for (u in a) a.hasOwnProperty(u) && (o[u] = a[u]);
        else r.punycode = a;
      })(this);
    }),
    a.register('kUypp', function (e, t) {
      'use strict';
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e, t, o, i) {
        (t = t || '&'), (o = o || '=');
        var s = {};
        if ('string' != typeof e || 0 === e.length) return s;
        var a = /\+/g;
        e = e.split(t);
        var u = 1e3;
        i && 'number' == typeof i.maxKeys && (u = i.maxKeys);
        var c = e.length;
        u > 0 && c > u && (c = u);
        for (var l = 0; l < c; ++l) {
          var f,
            h,
            d,
            p,
            g = e[l].replace(a, '%20'),
            v = g.indexOf(o);
          v >= 0 ? ((f = g.substr(0, v)), (h = g.substr(v + 1))) : ((f = g), (h = '')),
            (d = decodeURIComponent(f)),
            (p = decodeURIComponent(h)),
            n(s, d) ? (r(s[d]) ? s[d].push(p) : (s[d] = [s[d], p])) : (s[d] = p);
        }
        return s;
      };
      var r =
        Array.isArray ||
        function (e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        };
    }),
    a.register('e4VGJ', function (e, t) {
      'use strict';
      var n = function (e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'boolean':
            return e ? 'true' : 'false';
          case 'number':
            return isFinite(e) ? e : '';
          default:
            return '';
        }
      };
      e.exports = function (e, t, s, a) {
        return (
          (t = t || '&'),
          (s = s || '='),
          null === e && (e = void 0),
          'object' == typeof e
            ? o(i(e), function (i) {
                var a = encodeURIComponent(n(i)) + s;
                return r(e[i])
                  ? o(e[i], function (e) {
                      return a + encodeURIComponent(n(e));
                    }).join(t)
                  : a + encodeURIComponent(n(e[i]));
              }).join(t)
            : a
            ? encodeURIComponent(n(a)) + s + encodeURIComponent(n(e))
            : ''
        );
      };
      var r =
        Array.isArray ||
        function (e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        };
      function o(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n;
      }
      var i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
          return t;
        };
    }),
    a.register('aapJ3', function (e, t) {
      'use strict';
      Object.defineProperty(e.exports, '__esModule', { value: !0 }),
        (e.exports.default = function (e, t) {
          if (null == e) throw new TypeError('assign requires that input parameter not be null or undefined');
          for (var n in (t = t || {})) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
        (e.exports = e.exports.default);
    });
  var g = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
    v = function () {
      return Math.random().toString(36).substring(7).split('').join('.');
    },
    y = {
      INIT: '@@redux/INIT' + v(),
      REPLACE: '@@redux/REPLACE' + v(),
      PROBE_UNKNOWN_ACTION: function () {
        return '@@redux/PROBE_UNKNOWN_ACTION' + v();
      },
    };
  function m(e) {
    if ('object' != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  }
  function w(e, t, n) {
    var r;
    if (
      ('function' == typeof t && 'function' == typeof n) ||
      ('function' == typeof n && 'function' == typeof arguments[3])
    )
      throw new Error(p(0));
    if (('function' == typeof t && void 0 === n && ((n = t), (t = void 0)), void 0 !== n)) {
      if ('function' != typeof n) throw new Error(p(1));
      return n(w)(e, t);
    }
    if ('function' != typeof e) throw new Error(p(2));
    var o = e,
      i = t,
      s = [],
      a = s,
      u = !1;
    function c() {
      a === s && (a = s.slice());
    }
    function l() {
      if (u) throw new Error(p(3));
      return i;
    }
    function f(e) {
      if ('function' != typeof e) throw new Error(p(4));
      if (u) throw new Error(p(5));
      var t = !0;
      return (
        c(),
        a.push(e),
        function () {
          if (t) {
            if (u) throw new Error(p(6));
            (t = !1), c();
            var n = a.indexOf(e);
            a.splice(n, 1), (s = null);
          }
        }
      );
    }
    function h(e) {
      if (!m(e)) throw new Error(p(7));
      if (void 0 === e.type) throw new Error(p(8));
      if (u) throw new Error(p(9));
      try {
        (u = !0), (i = o(i, e));
      } finally {
        u = !1;
      }
      for (var t = (s = a), n = 0; n < t.length; n++) {
        (0, t[n])();
      }
      return e;
    }
    function d(e) {
      if ('function' != typeof e) throw new Error(p(10));
      (o = e), h({ type: y.REPLACE });
    }
    function v() {
      var e,
        t = f;
      return (
        ((e = {
          subscribe: function (e) {
            if ('object' != typeof e || null === e) throw new Error(p(11));
            function n() {
              e.next && e.next(l());
            }
            return n(), { unsubscribe: t(n) };
          },
        })[g] = function () {
          return this;
        }),
        e
      );
    }
    return h({ type: y.INIT }), ((r = { dispatch: h, subscribe: f, getState: l, replaceReducer: d })[g] = v), r;
  }
  function b() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length
      ? function (e) {
          return e;
        }
      : 1 === t.length
      ? t[0]
      : t.reduce(function (e, t) {
          return function () {
            return e(t.apply(void 0, arguments));
          };
        });
  }
  function S() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (e) {
      return function () {
        var n = e.apply(void 0, arguments),
          r = function () {
            throw new Error(p(15));
          },
          o = {
            getState: n.getState,
            dispatch: function () {
              return r.apply(void 0, arguments);
            },
          },
          i = t.map(function (e) {
            return e(o);
          });
        return (r = b.apply(void 0, i)(n.dispatch)), d(d({}, n), {}, { dispatch: r });
      };
    };
  }
  var _ = {};
  e(_, 'GlobalStore', () => A.GlobalStore), e(_, 'GlobalStore', () => H.GlobalStore);
  var A = {},
    E = {};
  e(
    E,
    'GlobalStore',
    () => B,
    e => (B = e),
  );
  var C = {};
  e(
    C,
    'ConsoleLogger',
    () => R,
    e => (R = e),
  );
  var T = {};
  e(
    T,
    'AbstractLogger',
    () => O,
    e => (O = e),
  );
  var I,
    P,
    k = function () {
      return (
        (k =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        k.apply(this, arguments)
      );
    },
    O = (function () {
      function e(e) {
        this.LoggerIdentity = e;
      }
      return (
        (e.prototype.LogEvent = function (e, t, n) {
          try {
            this.processEvent(e, t, n),
              void 0 !== this.NextLogger && null !== this.NextLogger && this.NextLogger.LogEvent(e, t, n);
          } catch (e) {}
        }),
        (e.prototype.LogException = function (e, t, n) {
          try {
            this.processException(e, t, n),
              void 0 !== this.NextLogger && null !== this.NextLogger && this.NextLogger.LogException(e, t, n);
          } catch (e) {}
        }),
        (e.prototype.SetNextLogger = function (e) {
          null != e &&
            (this.isLoggerLoopCreated(e) ||
              (void 0 === this.NextLogger || null === this.NextLogger
                ? (this.NextLogger = e)
                : this.NextLogger.SetNextLogger(e)));
        }),
        (e.prototype.isLoggerLoopCreated = function (e) {
          var t = k({}, e);
          do {
            if (t.LoggerIdentity === this.LoggerIdentity) return !0;
            t = t.NextLogger;
          } while (null != t);
          return !1;
        }),
        e
      );
    })(),
    x =
      ((I = function (e, t) {
        return (I =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      }),
      function (e, t) {
        function n() {
          this.constructor = e;
        }
        I(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }),
    R = (function (e) {
      function t(t) {
        void 0 === t && (t = !1);
        var n = e.call(this, 'DEFAULT_CONSOLE_LOGGER') || this;
        return (n._debugMode = t), (n.NextLogger = null), n;
      }
      return (
        x(t, e),
        (t.prototype.processEvent = function (e, t, n) {
          try {
            if (!this._debugMode) return;
            console.log('EVENT : ' + t + '. (' + e + ')');
          } catch (e) {}
        }),
        (t.prototype.processException = function (e, t, n) {
          try {
            if (!this._debugMode) return;
            console.error(t);
          } catch (e) {}
        }),
        t
      );
    })(T.AbstractLogger),
    N = (function (e, t) {
      return {
        parse: function (e, t) {
          var o = JSON.parse(e, s).map(i),
            a = o[0],
            u = t || n,
            c = 'object' == typeof a && a ? r(o, new Set(), a, u) : a;
          return u.call({ '': c }, '', c);
        },
        stringify: function (e, r, i) {
          for (
            var s,
              a = new Map(),
              u = [],
              c = [],
              l =
                r && typeof r == typeof u
                  ? function (e, t) {
                      if ('' === e || -1 < r.indexOf(e)) return t;
                    }
                  : r || n,
              f = +o(a, u, l.call({ '': e }, '', e)),
              h = function (e, n) {
                if (s) return (s = !s), n;
                var r = l.call(this, e, n);
                switch (typeof r) {
                  case 'object':
                    if (null === r) return r;
                  case t:
                    return a.get(r) || o(a, u, r);
                }
                return r;
              };
            f < u.length;
            f++
          )
            (s = !0), (c[f] = JSON.stringify(u[f], h, i));
          return '[' + c.join(',') + ']';
        },
      };
      function n(e, t) {
        return t;
      }
      function r(t, n, o, i) {
        return Object.keys(o).reduce(function (o, s) {
          var a = o[s];
          if (a instanceof e) {
            var u = t[a];
            'object' != typeof u || n.has(u)
              ? (o[s] = i.call(o, s, u))
              : (n.add(u), (o[s] = i.call(o, s, r(t, n, u, i))));
          } else o[s] = i.call(o, s, a);
          return o;
        }, o);
      }
      function o(t, n, r) {
        var o = e(n.push(r) - 1);
        return t.set(r, o), o;
      }
      function i(t) {
        return t instanceof e ? e(t) : t;
      }
      function s(n, r) {
        return typeof r === t ? new e(r) : r;
      }
    })(String, 'string'),
    U = (N.parse, N.stringify),
    L = (function () {
      function e(e) {
        this._logger = e;
      }
      return (
        (e.prototype.CreateMiddleware = function () {
          var e = this;
          return function (t) {
            return function (n) {
              return function (r) {
                if (!e.IsLoggingAllowed(r)) return n(r);
                var o = new Date(),
                  i = t.getState();
                e.LogActionDispatchStart(i, r);
                var s = null;
                try {
                  s = n(r);
                } catch (t) {
                  throw (e.LogActionDispatchFailure(r, o, t), t);
                }
                return (i = t.getState()), e.LogActionDispatchComplete(i, r, o), s;
              };
            };
          };
        }),
        (e.prototype.SetLogger = function (e) {
          void 0 === this._logger || null === this._logger ? (this._logger = e) : this._logger.SetNextLogger(e);
        }),
        (e.prototype.IsLoggingAllowed = function (e) {
          return (
            void 0 !== e.logEnabled &&
            null !== e.logEnabled &&
            !0 === e.logEnabled &&
            void 0 !== this._logger &&
            null !== this._logger
          );
        }),
        (e.prototype.LogActionDispatchStart = function (e, t) {
          try {
            var n = {
              OldState: U(e),
              ActionName: t.type,
              DispatchStatus: 'Dispatched',
              DispatchedOn: new Date().toISOString(),
              Payload: U(t.payload),
            };
            this._logger.LogEvent('Fxp.Store.ActionLogger', t.type + ' :: DISPATCHED', n);
          } catch (e) {
            console.error('ERROR: There was an error while trying to log the Dispatch Complete event'),
              console.error(e);
          }
        }),
        (e.prototype.LogActionDispatchComplete = function (e, t, n) {
          try {
            var r = new Date().getTime() - n.getTime(),
              o = {
                NewState: U(e),
                ActionName: t.type,
                DispatchStatus: 'Completed',
                DispatchedOn: new Date().toISOString(),
                Payload: U(t.payload),
                TimeTaken: r.toString(),
              };
            this._logger.LogEvent('Fxp.Store.ActionLogger', t.type + ' :: COMPLETED', o);
          } catch (e) {
            console.error('ERROR: There was an error while trying to log the Dispatch Complete event'),
              console.error(e);
          }
        }),
        (e.prototype.LogActionDispatchFailure = function (e, t, n) {
          try {
            var r = new Date().getTime() - t.getTime(),
              o = {
                ActionName: e.type,
                DispatchStatus: 'Failed',
                DispatchedOn: new Date().toISOString(),
                Payload: U(e.payload),
                TimeTaken: r.toString(),
              };
            this._logger.LogEvent('Fxp.Store.ActionLogger', e.type + ' :: FAILED', o),
              this._logger.LogException('Fxp.Store.ActionLogger', n, o),
              console.error(n);
          } catch (e) {
            console.error('ERROR: There was an error while trying to log the Dispatch Failure event'), console.error(e);
          }
        }),
        e
      );
    })(),
    M = b;
  (P =
    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (0 !== arguments.length) return 'object' == typeof arguments[0] ? M : M.apply(null, arguments);
        }),
    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
  var D = function () {
      return (
        (D =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        D.apply(this, arguments)
      );
    },
    F = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    j = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(F(arguments[t]));
      return e;
    },
    B = (function () {
      function e(e) {
        void 0 === e && (e = null),
          (this._logger = e),
          (this._actionLogger = null),
          (this._stores = {}),
          (this._globalActions = {}),
          (this._globalListeners = []),
          (this._actionLogger = new L(e));
      }
      return (
        (e.Get = function (t, n) {
          void 0 === t && (t = !1),
            void 0 === n && (n = null),
            t && (this.DebugMode = t),
            t && null == n && (n = new C.ConsoleLogger(t));
          var r = window[e.InstanceName] || null;
          return null == r && ((r = new e(n)), (window[e.InstanceName] = r)), r;
        }),
        (e.prototype.CreateStore = function (t, n, r, o, i, s) {
          void 0 === i && (i = !1), void 0 === s && (s = !1);
          var a = this._stores[t];
          if (null == a || i) {
            null == r && (r = []);
            var u = w(n, e.DebugMode ? P(S.apply(void 0, j(r))) : S.apply(void 0, j(r)));
            return this.RegisterStore(t, u, o, i), u;
          }
          return (
            s &&
              (console.warn('The reducer for ' + t + ' is getting replaced'),
              a.replaceReducer(n),
              this.RegisterStore(t, a, o, !0)),
            a
          );
        }),
        (e.prototype.RegisterStore = function (e, t, n, r) {
          void 0 === r && (r = !1);
          var o = this._stores[e];
          (null != o && !1 === r) ||
            ((this._stores[e] = t),
            t.subscribe(this.InvokeGlobalListeners.bind(this)),
            this.RegisterGlobalActions(e, n),
            this.LogRegistration(e, null != o));
        }),
        (e.prototype.RegisterGlobalActions = function (e, t) {
          if (null != t && 0 !== t.length) {
            var n = this._globalActions[e];
            null == n && ((n = []), (this._globalActions[e] = []));
            var r = t.filter(function (e) {
              return (
                void 0 ===
                n.find(function (t) {
                  return e === t;
                })
              );
            });
            (r = j(new Set(r))), (this._globalActions[e] = j(this._globalActions[e], r));
          }
        }),
        (e.prototype.GetPlatformState = function () {
          var e = this.GetPlatformStore();
          return null == e ? null : this.CopyState(e.getState());
        }),
        (e.prototype.GetPartnerState = function (e) {
          var t = this.GetPartnerStore(e);
          if (null == t) return null;
          var n = t.getState();
          return this.CopyState(n);
        }),
        (e.prototype.GetGlobalState = function () {
          var e = {};
          for (var t in this._stores) {
            var n = this._stores[t].getState();
            e[t] = n;
          }
          return this.CopyState(e);
        }),
        (e.prototype.DispatchGlobalAction = function (e, t) {
          for (var n in this._stores) {
            this.IsActionRegisteredAsGlobal(n, t) && this._stores[n].dispatch(t);
          }
        }),
        (e.prototype.DispatchLocalAction = function (e, t) {
          var n = this._stores[e];
          if (null == n) {
            var r = new Error('Store is not registered');
            throw (void 0 !== this._logger && null !== this._logger && this._logger.LogException(e, r, {}), r);
          }
          n.dispatch(t);
        }),
        (e.prototype.DispatchAction = function (e, t) {
          this.DispatchGlobalAction(e, t), this.IsActionRegisteredAsGlobal(e, t) || this.DispatchLocalAction(e, t);
        }),
        (e.prototype.Subscribe = function (e, t) {
          var n = this.GetPartnerStore(e);
          if (null == n) throw new Error('ERROR: Store for ' + e + " hasn't been registered");
          return n.subscribe(function () {
            return t(n.getState());
          });
        }),
        (e.prototype.SubscribeToPlatformState = function (e, t) {
          var n = this.GetPlatformStore();
          return n.subscribe(function () {
            return t(n.getState());
          });
        }),
        (e.prototype.SubscribeToPartnerState = function (e, t, n) {
          var r = this.GetPartnerStore(t);
          if (null == r)
            throw new Error(
              'ERROR: ' +
                e +
                ' is trying to subscribe to partner ' +
                t +
                '. Either ' +
                t +
                " doesn't exist or hasn't been loaded yet",
            );
          return r.subscribe(function () {
            return n(r.getState());
          });
        }),
        (e.prototype.SubscribeToGlobalState = function (e, t) {
          var n = this;
          return (
            this._globalListeners.push(t),
            function () {
              n._globalListeners = n._globalListeners.filter(function (e) {
                return e !== t;
              });
            }
          );
        }),
        (e.prototype.SetLogger = function (e) {
          void 0 === this._logger || null === this._logger ? (this._logger = e) : this._logger.SetNextLogger(e),
            this._actionLogger.SetLogger(e);
        }),
        (e.prototype.InvokeGlobalListeners = function () {
          var e = this.GetGlobalState();
          this._globalListeners.forEach(function (t) {
            t(e);
          });
        }),
        (e.prototype.GetPlatformStore = function () {
          return this.GetPartnerStore(e.Platform);
        }),
        (e.prototype.GetPartnerStore = function (e) {
          return this._stores[e];
        }),
        (e.prototype.GetGlobalMiddlewares = function () {
          return [this._actionLogger.CreateMiddleware()];
        }),
        (e.prototype.IsActionRegisteredAsGlobal = function (t, n) {
          var r = this._globalActions[t];
          return (
            null != r &&
            r.some(function (t) {
              return t === n.type || t === e.AllowAll;
            })
          );
        }),
        (e.prototype.LogRegistration = function (e, t) {
          try {
            var n = { AppName: e, IsReplaced: t.toString() };
            this._logger && this._logger.LogEvent('Store.GlobalStore', 'StoreRegistered', n);
          } catch (t) {
            console.error('ERROR: There was an error while logging registration for ' + e), console.error(t);
          }
        }),
        (e.prototype.CopyState = function (e) {
          return null == e || 'object' != typeof e ? e : D({}, e);
        }),
        (e.Platform = 'Platform'),
        (e.AllowAll = '*'),
        (e.InstanceName = 'GlobalStoreInstance'),
        (e.DebugMode = !1),
        e
      );
    })(),
    H = {};
  let G, q;
  r(_, E),
    r(_, T),
    r(_, H),
    (function (e) {
      (e.API = 'API'), (e.APP = 'APP');
    })(G || (G = {})),
    (function (e) {
      e.INBOX = '/inbox';
    })(q || (q = {}));
  const z = 'API/REFRESH_ROOT_STATE';
  let K, V, W, Y;
  !(function (e) {
    (e.LOADING = 'loading'), (e.ACCEPTED = 'accepted'), (e.DENIED = 'denied');
  })(K || (K = {})),
    (function (e) {
      (e.API_PROFILE_FETCH_DATA = 'API/PROFILE/FETCH_DATA'),
        (e.PROFILE_SET_DATA = 'PROFILE_SET_DATA'),
        (e.PROFILE_FETCH_START = 'PROFILE_FETCH_START'),
        (e.PROFILE_FETCH_COMPLETE = 'PROFILE_FETCH_COMPLETE'),
        (e.API_PROFILE_PUT_DATA = 'API/PROFILE/PUT_DATA'),
        (e.PROFILE_PUT_START = 'PROFILE_PUT_START'),
        (e.PROFILE_PUT_COMPLETE = 'PROFILE_PUT_COMPLETE');
    })(V || (V = {})),
    (function (e) {
      (e.API_CHAT_CONNECTION = 'API/CHAT/CONNECTION'),
        (e.CHAT_SET_CONNECTION_MESSAGE = 'CHAT_SET_CONNECTION_MESSAGE'),
        (e.API_CHAT_GET_HISTORY_DIALOG = 'API/CHAT/GET_HISTORY_DIALOG'),
        (e.CHAT_SET_HISTORY_DIALOG = 'CHAT_SET_HISTORY_DIALOG'),
        (e.API_CHAT_NEW_RESPONSE_MESSAGE = 'API/CHAT/NEW_RESPONSE_MESSAGE'),
        (e.API_CHAT_NEW_REQUEST_MESSAGE = 'API/CHAT/NEW_REQUEST_MESSAGE'),
        (e.API_CHAT_SEND_FILE = 'API/CHAT/SEND_FILE'),
        (e.CHAT_SEND_FILE_STATUS = 'CHAT_SEND_FILE_STATUS'),
        (e.CHAT_SET_ERROR = 'CHAT_SET_ERROR'),
        (e.API_CHAT_REFRESH_ERROR = 'API/CHAT_REFRESH_ERROR'),
        (e.API_CHAT_REFRESH_FILE_STATUS = 'API/CHAT_REFRESH_FILE_STATUS'),
        (e.API_CHAT_CLIENT_ACTIVITY = 'API/CHAT/CLIENT_ACTIVITY'),
        (e.CHAT_UNREAD_MESSAGES_COUNT = 'CHAT_UNREAD_MESSAGES_COUNT'),
        (e.API_CHAT_SET_READ_MESSAGES = 'API/CHAT/SET_READ_MESSAGES'),
        (e.API_CHAT_ACTUAL_APP_PATH = 'API/CHAT/ACTUAL_APP_PATH'),
        (e.CHAT_SET_ACTUAL_APP_PATH = 'CHAT_SET_ACTUAL_APP_PATH');
    })(W || (W = {})),
    (function (e) {
      (e.API_LOGIN_CHECK_AUTH = 'API/LOGIN/CHECK_AUTH'),
        (e.API_LOGIN_SIGN_IN = 'API/LOGIN/SIGN_IN'),
        (e.SIGN_IN_START = 'SIGN_IN_START'),
        (e.SIGN_IN_ACCEPTED = 'SIGN_IN_ACCEPTED'),
        (e.SIGN_IN_DENIED = 'SIGN_IN_DENIED'),
        (e.API_LOGIN_SIGN_OUT = 'API/LOGIN/SIGN_OUT'),
        (e.API_LOGIN_FORGOT_PASSWORD = 'API/LOGIN/FORGOT_PASSWORD'),
        (e.API_LOGIN_RECREATE_PASSWORD = 'API/LOGIN/RECREATE_PASSWORD'),
        (e.RECREATE_PASSWORD_START = 'RECREATE_PASSWORD_START'),
        (e.RECREATE_PASSWORD_ACCEPTED = 'RECREATE_PASSWORD_ACCEPTED'),
        (e.RECREATE_PASSWORD_DENIED = 'RECREATE_PASSWORD_DENIED'),
        (e.API_LOGIN_REFRESH_STATE = 'API/LOGIN/REFRESH_STATE');
    })(Y || (Y = {}));
  var $;
  let J;
  ($ = a('klx4C')),
    (function (e) {
      e.SET_ERROR = 'SET_ERROR';
    })(J || (J = {}));
  var Z,
    X,
    Q,
    ee = {};
  function te(e) {
    return (
      e &&
      !!['provider'].find(function (t) {
        return e.hasOwnProperty(t);
      })
    );
  }
  function ne(e) {
    return void 0 !== e.redirectSignIn;
  }
  e(
    ee,
    'Auth',
    () => yh,
    e => (yh = e),
  ),
    (function (e) {
      (e.Cognito = 'COGNITO'),
        (e.Google = 'Google'),
        (e.Facebook = 'Facebook'),
        (e.Amazon = 'LoginWithAmazon'),
        (e.Apple = 'SignInWithApple');
    })(Z || (Z = {})),
    (function (e) {
      (e.NoConfig = 'noConfig'),
        (e.MissingAuthConfig = 'missingAuthConfig'),
        (e.EmptyUsername = 'emptyUsername'),
        (e.InvalidUsername = 'invalidUsername'),
        (e.EmptyPassword = 'emptyPassword'),
        (e.EmptyCode = 'emptyCode'),
        (e.SignUpError = 'signUpError'),
        (e.NoMFA = 'noMFA'),
        (e.InvalidMFA = 'invalidMFA'),
        (e.EmptyChallengeResponse = 'emptyChallengeResponse'),
        (e.NoUserSession = 'noUserSession'),
        (e.Default = 'default'),
        (e.DeviceConfig = 'deviceConfig'),
        (e.NetworkError = 'networkError');
    })(X || (X = {})),
    (function (e) {
      (e.API_KEY = 'API_KEY'),
        (e.AWS_IAM = 'AWS_IAM'),
        (e.OPENID_CONNECT = 'OPENID_CONNECT'),
        (e.AMAZON_COGNITO_USER_POOLS = 'AMAZON_COGNITO_USER_POOLS'),
        (e.AWS_LAMBDA = 'AWS_LAMBDA');
    })(Q || (Q = {}));
  var re = {};
  n(re),
    e(re, 'ConsoleLogger', () => ie.ConsoleLogger),
    e(re, 'Hub', () => be.Hub),
    e(re, 'Credentials', () => _a.Credentials),
    e(re, 'StorageHelper', () => Ca),
    e(re, 'UniversalStorage', () => bl),
    e(re, 'Amplify', () => oe.Amplify),
    e(re, 'JS', () => We),
    e(re, 'Parser', () => Qe.Parser),
    e(re, 'JS', () => Qe.JS),
    e(re, 'urlSafeDecode', () => Qe.urlSafeDecode),
    e(re, 'urlSafeEncode', () => Qe.urlSafeEncode);
  var oe = {};
  e(
    oe,
    'Amplify',
    () => ye,
    e => (ye = e),
  );
  var ie = {};
  e(
    ie,
    'ConsoleLogger',
    () => pe,
    e => (pe = e),
  );
  var se,
    ae = 'Logging',
    ue = 'No credentials',
    ce = ['ResourceNotFoundException', 'InvalidSequenceTokenException'],
    le = function (e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          },
        };
      throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    },
    fe = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    he = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(fe(arguments[t]));
      return e;
    },
    de = { VERBOSE: 1, DEBUG: 2, INFO: 3, WARN: 4, ERROR: 5 };
  !(function (e) {
    (e.DEBUG = 'DEBUG'), (e.ERROR = 'ERROR'), (e.INFO = 'INFO'), (e.WARN = 'WARN'), (e.VERBOSE = 'VERBOSE');
  })(se || (se = {}));
  var pe = (function () {
      function e(e, t) {
        void 0 === t && (t = se.WARN), (this.name = e), (this.level = t), (this._pluggables = []);
      }
      return (
        (e.prototype._padding = function (e) {
          return e < 10 ? '0' + e : '' + e;
        }),
        (e.prototype._ts = function () {
          var e = new Date();
          return [this._padding(e.getMinutes()), this._padding(e.getSeconds())].join(':') + '.' + e.getMilliseconds();
        }),
        (e.prototype.configure = function (e) {
          return e ? ((this._config = e), this._config) : this._config;
        }),
        (e.prototype._log = function (t) {
          for (var n, r, o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
          var s = this.level;
          e.LOG_LEVEL && (s = e.LOG_LEVEL), 'undefined' != typeof window && window.LOG_LEVEL && (s = window.LOG_LEVEL);
          var a = de[s],
            u = de[t];
          if (u >= a) {
            var c = console.log.bind(console);
            t === se.ERROR && console.error && (c = console.error.bind(console)),
              t === se.WARN && console.warn && (c = console.warn.bind(console));
            var l = '[' + t + '] ' + this._ts() + ' ' + this.name,
              f = '';
            if (1 === o.length && 'string' == typeof o[0]) c((f = l + ' - ' + o[0]));
            else if (1 === o.length) (f = l + ' ' + o[0]), c(l, o[0]);
            else if ('string' == typeof o[0]) {
              var h = o.slice(1);
              1 === h.length && (h = h[0]), (f = l + ' - ' + o[0] + ' ' + h), c(l + ' - ' + o[0], h);
            } else (f = l + ' ' + o), c(l, o);
            try {
              for (var d = le(this._pluggables), p = d.next(); !p.done; p = d.next()) {
                var g = p.value,
                  v = { message: f, timestamp: Date.now() };
                g.pushLogs([v]);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                p && !p.done && (r = d.return) && r.call(d);
              } finally {
                if (n) throw n.error;
              }
            }
          }
        }),
        (e.prototype.log = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._log.apply(this, he([se.INFO], e));
        }),
        (e.prototype.info = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._log.apply(this, he([se.INFO], e));
        }),
        (e.prototype.warn = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._log.apply(this, he([se.WARN], e));
        }),
        (e.prototype.error = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._log.apply(this, he([se.ERROR], e));
        }),
        (e.prototype.debug = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._log.apply(this, he([se.DEBUG], e));
        }),
        (e.prototype.verbose = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._log.apply(this, he([se.VERBOSE], e));
        }),
        (e.prototype.addPluggable = function (e) {
          e && e.getCategoryName() === ae && (this._pluggables.push(e), e.configure(this._config));
        }),
        (e.prototype.listPluggables = function () {
          return this._pluggables;
        }),
        (e.LOG_LEVEL = null),
        e
      );
    })(),
    ge = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    ve = new ie.ConsoleLogger('Amplify'),
    ye = new ((function () {
      function e() {
        (this._components = []),
          (this._config = {}),
          (this._modules = {}),
          (this.Auth = null),
          (this.Analytics = null),
          (this.API = null),
          (this.Credentials = null),
          (this.Storage = null),
          (this.I18n = null),
          (this.Cache = null),
          (this.PubSub = null),
          (this.Interactions = null),
          (this.Pushnotification = null),
          (this.UI = null),
          (this.XR = null),
          (this.Predictions = null),
          (this.DataStore = null),
          (this.Geo = null),
          (this.Logger = ie.ConsoleLogger),
          (this.ServiceWorker = null);
      }
      return (
        (e.prototype.register = function (e) {
          ve.debug('component registered in amplify', e),
            this._components.push(e),
            'function' == typeof e.getModuleName
              ? ((this._modules[e.getModuleName()] = e), (this[e.getModuleName()] = e))
              : ve.debug('no getModuleName method for component', e),
            e.configure(this._config);
        }),
        (e.prototype.configure = function (e) {
          var t = this;
          return e
            ? ((this._config = Object.assign(this._config, e)),
              ve.debug('amplify config', this._config),
              Object.entries(this._modules).forEach(function (e) {
                var n = ge(e, 2),
                  r = (n[0], n[1]);
                Object.keys(r).forEach(function (e) {
                  t._modules[e] && (r[e] = t._modules[e]);
                });
              }),
              this._components.map(function (e) {
                e.configure(t._config);
              }),
              this._config)
            : this._config;
        }),
        (e.prototype.addPluggable = function (e) {
          e &&
            e.getCategory &&
            'function' == typeof e.getCategory &&
            this._components.map(function (t) {
              t.addPluggable && 'function' == typeof t.addPluggable && t.addPluggable(e);
            });
        }),
        e
      );
    })())(),
    me = { userAgent: 'aws-amplify/4.5.0 js', product: '', navigator: null, isReactNative: !1 };
  if ('undefined' != typeof navigator && navigator.product)
    if (
      ((me.product = navigator.product || ''), (me.navigator = navigator || null), 'ReactNative' === navigator.product)
    )
      (me.userAgent = 'aws-amplify/4.5.0 react-native'), (me.isReactNative = !0);
    else (me.userAgent = 'aws-amplify/4.5.0 js'), (me.isReactNative = !1);
  var we = function () {
      return me.userAgent;
    },
    be = {};
  e(
    be,
    'Hub',
    () => Te,
    e => (Te = e),
  );
  var Se = function () {
      return (
        (Se =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        Se.apply(this, arguments)
      );
    },
    _e = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    Ae = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_e(arguments[t]));
      return e;
    },
    Ee = new ie.ConsoleLogger('Hub'),
    Ce =
      'undefined' != typeof Symbol && 'function' == typeof Symbol.for
        ? Symbol.for('amplify_default')
        : '@@amplify_default';
  var Te = new ((function () {
      function e(e) {
        (this.listeners = []),
          (this.patterns = []),
          (this.protectedChannels = [
            'core',
            'auth',
            'api',
            'analytics',
            'interactions',
            'pubsub',
            'storage',
            'ui',
            'xr',
          ]),
          (this.name = e);
      }
      return (
        (e.prototype.remove = function (e, t) {
          if (e instanceof RegExp) {
            var n = this.patterns.find(function (t) {
              return t.pattern.source === e.source;
            });
            if (!n) return void Ee.warn('No listeners for ' + e);
            this.patterns = Ae(
              this.patterns.filter(function (e) {
                return e !== n;
              }),
            );
          } else {
            var r = this.listeners[e];
            if (!r) return void Ee.warn('No listeners for ' + e);
            this.listeners[e] = Ae(
              r.filter(function (e) {
                return e.callback !== t;
              }),
            );
          }
        }),
        (e.prototype.dispatch = function (e, t, n, r) {
          (void 0 === n && (n = ''), this.protectedChannels.indexOf(e) > -1) &&
            (r === Ce ||
              Ee.warn('WARNING: ' + e + ' is protected and dispatching on it can have unintended consequences'));
          var o = { channel: e, payload: Se({}, t), source: n, patternInfo: [] };
          try {
            this._toListeners(o);
          } catch (e) {
            Ee.error(e);
          }
        }),
        (e.prototype.listen = function (e, t, n) {
          var r,
            o = this;
          if (
            (void 0 === n && (n = 'noname'),
            (function (e) {
              return void 0 !== e.onHubCapsule;
            })(t))
          )
            Ee.warn('WARNING onHubCapsule is Deprecated. Please pass in a callback.'), (r = t.onHubCapsule.bind(t));
          else {
            if ('function' != typeof t) throw new Error('No callback supplied to Hub');
            r = t;
          }
          if (e instanceof RegExp) this.patterns.push({ pattern: e, callback: r });
          else {
            var i = this.listeners[e];
            i || ((i = []), (this.listeners[e] = i)), i.push({ name: n, callback: r });
          }
          return function () {
            o.remove(e, r);
          };
        }),
        (e.prototype._toListeners = function (e) {
          var t = e.channel,
            n = e.payload,
            r = this.listeners[t];
          if (
            (r &&
              r.forEach(function (r) {
                Ee.debug('Dispatching to ' + t + ' with ', n);
                try {
                  r.callback(e);
                } catch (e) {
                  Ee.error(e);
                }
              }),
            this.patterns.length > 0)
          ) {
            if (!n.message) return void Ee.warn('Cannot perform pattern matching without a message key');
            var o = n.message;
            this.patterns.forEach(function (t) {
              var n = o.match(t.pattern);
              if (n) {
                var r = _e(n).slice(1),
                  i = Se(Se({}, e), { patternInfo: r });
                try {
                  t.callback(i);
                } catch (e) {
                  Ee.error(e);
                }
              }
            });
          }
        }),
        e
      );
    })())('__default__'),
    Ie = new ie.ConsoleLogger('I18n'),
    Pe = (function () {
      function e(e) {
        (this._options = null),
          (this._lang = null),
          (this._dict = {}),
          (this._options = Object.assign({}, e)),
          (this._lang = this._options.language),
          !this._lang &&
            'undefined' != typeof window &&
            window &&
            window.navigator &&
            (this._lang = window.navigator.language),
          Ie.debug(this._lang);
      }
      return (
        (e.prototype.setLanguage = function (e) {
          this._lang = e;
        }),
        (e.prototype.get = function (e, t) {
          if ((void 0 === t && (t = void 0), !this._lang)) return void 0 !== t ? t : e;
          var n = this._lang,
            r = this.getByLanguage(e, n);
          return r || (n.indexOf('-') > 0 && (r = this.getByLanguage(e, n.split('-')[0])), r || (void 0 !== t ? t : e));
        }),
        (e.prototype.getByLanguage = function (e, t, n) {
          if ((void 0 === n && (n = null), !t)) return n;
          var r = this._dict[t];
          return r ? r[e] : n;
        }),
        (e.prototype.putVocabulariesForLanguage = function (e, t) {
          var n = this._dict[e];
          n || (n = this._dict[e] = {}), Object.assign(n, t);
        }),
        (e.prototype.putVocabularies = function (e) {
          var t = this;
          Object.keys(e).map(function (n) {
            t.putVocabulariesForLanguage(n, e[n]);
          });
        }),
        e
      );
    })(),
    ke = new ie.ConsoleLogger('I18n'),
    Oe = null,
    xe = null,
    Re = (function () {
      function e() {}
      return (
        (e.configure = function (t) {
          return (
            ke.debug('configure I18n'), t ? ((Oe = Object.assign({}, Oe, t.I18n || t)), e.createInstance(), Oe) : Oe
          );
        }),
        (e.getModuleName = function () {
          return 'I18n';
        }),
        (e.createInstance = function () {
          ke.debug('create I18n instance'), xe || (xe = new Pe(Oe));
        }),
        (e.setLanguage = function (t) {
          return e.checkConfig(), xe.setLanguage(t);
        }),
        (e.get = function (t, n) {
          return e.checkConfig() ? xe.get(t, n) : void 0 === n ? t : n;
        }),
        (e.putVocabulariesForLanguage = function (t, n) {
          return e.checkConfig(), xe.putVocabulariesForLanguage(t, n);
        }),
        (e.putVocabularies = function (t) {
          return e.checkConfig(), xe.putVocabularies(t);
        }),
        (e.checkConfig = function () {
          return xe || (xe = new Pe(Oe)), !0;
        }),
        e
      );
    })();
  oe.Amplify.register(Re);
  var Ne = a('nj8kx'),
    Ue = [
      { type: 'text/plain', ext: 'txt' },
      { type: 'text/html', ext: 'html' },
      { type: 'text/javascript', ext: 'js' },
      { type: 'text/css', ext: 'css' },
      { type: 'text/csv', ext: 'csv' },
      { type: 'text/yaml', ext: 'yml' },
      { type: 'text/yaml', ext: 'yaml' },
      { type: 'text/calendar', ext: 'ics' },
      { type: 'text/calendar', ext: 'ical' },
      { type: 'image/apng', ext: 'apng' },
      { type: 'image/bmp', ext: 'bmp' },
      { type: 'image/gif', ext: 'gif' },
      { type: 'image/x-icon', ext: 'ico' },
      { type: 'image/x-icon', ext: 'cur' },
      { type: 'image/jpeg', ext: 'jpg' },
      { type: 'image/jpeg', ext: 'jpeg' },
      { type: 'image/jpeg', ext: 'jfif' },
      { type: 'image/jpeg', ext: 'pjp' },
      { type: 'image/jpeg', ext: 'pjpeg' },
      { type: 'image/png', ext: 'png' },
      { type: 'image/svg+xml', ext: 'svg' },
      { type: 'image/tiff', ext: 'tif' },
      { type: 'image/tiff', ext: 'tiff' },
      { type: 'image/webp', ext: 'webp' },
      { type: 'application/json', ext: 'json' },
      { type: 'application/xml', ext: 'xml' },
      { type: 'application/x-sh', ext: 'sh' },
      { type: 'application/zip', ext: 'zip' },
      { type: 'application/x-rar-compressed', ext: 'rar' },
      { type: 'application/x-tar', ext: 'tar' },
      { type: 'application/x-bzip', ext: 'bz' },
      { type: 'application/x-bzip2', ext: 'bz2' },
      { type: 'application/pdf', ext: 'pdf' },
      { type: 'application/java-archive', ext: 'jar' },
      { type: 'application/msword', ext: 'doc' },
      { type: 'application/vnd.ms-excel', ext: 'xls' },
      { type: 'application/vnd.ms-excel', ext: 'xlsx' },
      { type: 'message/rfc822', ext: 'eml' },
    ],
    Le = function (e) {
      return void 0 === e && (e = {}), 0 === Object.keys(e).length;
    },
    Me = function (e, t, n) {
      if (!e || !e.sort) return !1;
      var r = n && 'desc' === n ? -1 : 1;
      return (
        e.sort(function (e, n) {
          var o = e[t],
            i = n[t];
          return void 0 === i ? (void 0 === o ? 0 : 1 * r) : void 0 === o || o < i ? -1 * r : o > i ? 1 * r : 0;
        }),
        !0
      );
    },
    De = function (e, t) {
      var n = Object.assign({}, e);
      return (
        t &&
          ('string' == typeof t
            ? delete n[t]
            : t.forEach(function (e) {
                delete n[e];
              })),
        n
      );
    },
    Fe = function (e, t) {
      void 0 === t && (t = 'application/octet-stream');
      var n = e.toLowerCase(),
        r = Ue.filter(function (e) {
          return n.endsWith('.' + e.ext);
        });
      return r.length > 0 ? r[0].type : t;
    },
    je = function (e) {
      var t = e.toLowerCase();
      return !!t.startsWith('text/') || 'application/json' === t || 'application/xml' === t || 'application/sh' === t;
    },
    Be = function () {
      for (var e = '', t = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', n = 32; n > 0; n -= 1)
        e += t[Math.floor(Math.random() * t.length)];
      return e;
    },
    He = function (e) {
      if (e.isResolved) return e;
      var t = !0,
        n = !1,
        r = !1,
        o = e.then(
          function (e) {
            return (r = !0), (t = !1), e;
          },
          function (e) {
            throw ((n = !0), (t = !1), e);
          },
        );
      return (
        (o.isFullfilled = function () {
          return r;
        }),
        (o.isPending = function () {
          return t;
        }),
        (o.isRejected = function () {
          return n;
        }),
        o
      );
    },
    Ge = function () {
      if ('undefined' == typeof self) return !1;
      var e = self;
      return void 0 !== e.WorkerGlobalScope && self instanceof e.WorkerGlobalScope;
    },
    qe = function () {
      return {
        isBrowser: 'undefined' != typeof window && void 0 !== window.document,
        isNode: void 0 !== Ne && null != Ne.versions && null != Ne.versions.node,
      };
    },
    ze = function (e, t, n) {
      if ((void 0 === t && (t = []), void 0 === n && (n = []), !Ve(e))) return e;
      var r = {};
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          r[t.includes(o) ? o : o[0].toLowerCase() + o.slice(1)] = n.includes(o) ? e[o] : ze(e[o], t, n);
        }
      return r;
    },
    Ke = function (e, t, n) {
      if ((void 0 === t && (t = []), void 0 === n && (n = []), !Ve(e))) return e;
      var r = {};
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          r[t.includes(o) ? o : o[0].toUpperCase() + o.slice(1)] = n.includes(o) ? e[o] : Ke(e[o], t, n);
        }
      return r;
    },
    Ve = function (e) {
      return !(
        !(e instanceof Object) ||
        e instanceof Array ||
        e instanceof Function ||
        e instanceof Number ||
        e instanceof String ||
        e instanceof Boolean
      );
    },
    We = (function () {
      function e() {}
      return (
        (e.isEmpty = Le),
        (e.sortByField = Me),
        (e.objectLessAttributes = De),
        (e.filenameToContentType = Fe),
        (e.isTextFile = je),
        (e.generateRandomString = Be),
        (e.makeQuerablePromise = He),
        (e.isWebWorker = Ge),
        (e.browserOrNode = qe),
        (e.transferKeyToLowerCase = ze),
        (e.transferKeyToUpperCase = Ke),
        (e.isStrictObject = Ve),
        e
      );
    })(),
    Ye = {};
  e(
    Ye,
    'parseMobileHubConfig',
    () => Ze,
    e => (Ze = e),
  ),
    e(
      Ye,
      'Parser',
      () => Xe,
      e => (Xe = e),
    );
  var $e = function () {
      return (
        ($e =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        $e.apply(this, arguments)
      );
    },
    Je = new ie.ConsoleLogger('Parser'),
    Ze = function (e) {
      var t,
        n = {};
      if (e.aws_mobile_analytics_app_id) {
        var r = { AWSPinpoint: { appId: e.aws_mobile_analytics_app_id, region: e.aws_mobile_analytics_app_region } };
        n.Analytics = r;
      }
      return (
        (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) &&
          (n.Auth = {
            userPoolId: e.aws_user_pools_id,
            userPoolWebClientId: e.aws_user_pools_web_client_id,
            region: e.aws_cognito_region,
            identityPoolId: e.aws_cognito_identity_pool_id,
            identityPoolRegion: e.aws_cognito_region,
            mandatorySignIn: 'enable' === e.aws_mandatory_sign_in,
          }),
        (t = e.aws_user_files_s3_bucket
          ? {
              AWSS3: {
                bucket: e.aws_user_files_s3_bucket,
                region: e.aws_user_files_s3_bucket_region,
                dangerouslyConnectToHttpEndpointForTesting:
                  e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing,
              },
            }
          : e
          ? e.Storage || e
          : {}),
        e.Logging && (n.Logging = $e($e({}, e.Logging), { region: e.aws_project_region })),
        e.geo &&
          ((n.Geo = Object.assign({}, e.geo)),
          e.geo.amazon_location_service && (n.Geo = { AmazonLocationService: e.geo.amazon_location_service })),
        (n.Analytics = Object.assign({}, n.Analytics, e.Analytics)),
        (n.Auth = Object.assign({}, n.Auth, e.Auth)),
        (n.Storage = Object.assign({}, t)),
        (n.Logging = Object.assign({}, n.Logging, e.Logging)),
        Je.debug('parse config', e, 'to amplifyconfig', n),
        n
      );
    },
    Xe = (function () {
      function e() {}
      return (e.parseMobilehubConfig = Ze), e;
    })(),
    Qe = {},
    et = function (e, t) {
      return (et =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(e, t);
    };
  function tt(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
      this.constructor = e;
    }
    et(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
  }
  var nt = function () {
    return (
      (nt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      nt.apply(this, arguments)
    );
  };
  function rt(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function ot(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  Object.create;
  function it(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  Object.create;
  var st;
  st = JSON.parse(
    '{"name":"@aws-sdk/client-cloudwatch-logs","description":"AWS SDK for JavaScript Cloudwatch Logs Client for Node.js, Browser and React Native","version":"3.6.1","scripts":{"clean":"yarn remove-definitions && yarn remove-dist && yarn remove-documentation","build-documentation":"yarn remove-documentation && typedoc ./","prepublishOnly":"yarn build","pretest":"yarn build:cjs","remove-definitions":"rimraf ./configs","remove-dist":"rimraf ./dist","remove-documentation":"rimraf ./docs","test":"exit 0","build:cjs":"tsc -p tsconfig.json","build:es":"tsc -p tsconfig.es.json","build":"yarn build:cjs && yarn build:es","postbuild":"downlevel-dts configs configs/ts3.4"},"main":"./dist/cjs/index.js","configs":"./configs/index.d.ts","module":"./dist/es/index.js","browser":{"./runtimeConfig":"./runtimeConfig.browser"},"react-native":{"./runtimeConfig":"./runtimeConfig.native"},"sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"^1.0.0","@aws-crypto/sha256-js":"^1.0.0","@aws-sdk/config-resolver":"3.6.1","@aws-sdk/credential-provider-node":"3.6.1","@aws-sdk/fetch-http-handler":"3.6.1","@aws-sdk/hash-node":"3.6.1","@aws-sdk/invalid-dependency":"3.6.1","@aws-sdk/middleware-content-length":"3.6.1","@aws-sdk/middleware-host-header":"3.6.1","@aws-sdk/middleware-logger":"3.6.1","@aws-sdk/middleware-retry":"3.6.1","@aws-sdk/middleware-serde":"3.6.1","@aws-sdk/middleware-signing":"3.6.1","@aws-sdk/middleware-stack":"3.6.1","@aws-sdk/middleware-user-agent":"3.6.1","@aws-sdk/node-config-provider":"3.6.1","@aws-sdk/node-http-handler":"3.6.1","@aws-sdk/protocol-http":"3.6.1","@aws-sdk/smithy-client":"3.6.1","@aws-sdk/configs":"3.6.1","@aws-sdk/url-parser":"3.6.1","@aws-sdk/url-parser-native":"3.6.1","@aws-sdk/util-base64-browser":"3.6.1","@aws-sdk/util-base64-node":"3.6.1","@aws-sdk/util-body-length-browser":"3.6.1","@aws-sdk/util-body-length-node":"3.6.1","@aws-sdk/util-user-agent-browser":"3.6.1","@aws-sdk/util-user-agent-node":"3.6.1","@aws-sdk/util-utf8-browser":"3.6.1","@aws-sdk/util-utf8-node":"3.6.1","tslib":"^2.0.0"},"devDependencies":{"@aws-sdk/client-documentation-generator":"3.6.1","@configs/node":"^12.7.5","downlevel-dts":"0.7.0","jest":"^26.1.0","rimraf":"^3.0.0","typedoc":"^0.19.2","typescript":"~4.1.2"},"engines":{"node":">=10.0.0"},"typesVersions":{"<4.0":{"configs/*":["configs/ts3.4/*"]}},"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cloudwatch-logs","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-cloudwatch-logs"}}',
  );
  var at = {};
  Object.defineProperty(at, '__esModule', { value: !0 }),
    (at.WebCryptoSha256 = at.Ie11Sha256 = void 0),
    l(a('kH5R5'), at);
  var ut = a('3Iu6a');
  Object.defineProperty(at, 'Ie11Sha256', {
    enumerable: !0,
    get: function () {
      return ut.Sha256;
    },
  });
  var ct = a('sGs99');
  Object.defineProperty(at, 'WebCryptoSha256', {
    enumerable: !0,
    get: function () {
      return ct.Sha256;
    },
  });
  function lt(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function ft(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function ht(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        },
      };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  var dt = (function () {
    function e(e) {
      (this.statusCode = e.statusCode), (this.headers = e.headers || {}), (this.body = e.body);
    }
    return (
      (e.isInstance = function (e) {
        if (!e) return !1;
        var t = e;
        return 'number' == typeof t.statusCode && 'object' == typeof t.headers;
      }),
      e
    );
  })();
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var pt = function () {
    return (
      (pt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      pt.apply(this, arguments)
    );
  };
  function gt(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  var vt = (function () {
    function e(e) {
      (this.method = e.method || 'GET'),
        (this.hostname = e.hostname || 'localhost'),
        (this.port = e.port),
        (this.query = e.query || {}),
        (this.headers = e.headers || {}),
        (this.body = e.body),
        (this.protocol = e.protocol ? (':' !== e.protocol.substr(-1) ? e.protocol + ':' : e.protocol) : 'https:'),
        (this.path = e.path ? ('/' !== e.path.charAt(0) ? '/' + e.path : e.path) : '/');
    }
    return (
      (e.isInstance = function (e) {
        if (!e) return !1;
        var t = e;
        return (
          'method' in t &&
          'protocol' in t &&
          'hostname' in t &&
          'path' in t &&
          'object' == typeof t.query &&
          'object' == typeof t.headers
        );
      }),
      (e.prototype.clone = function () {
        var t,
          n = new e(pt(pt({}, this), { headers: pt({}, this.headers) }));
        return (
          n.query &&
            (n.query =
              ((t = n.query),
              Object.keys(t).reduce(function (e, n) {
                var r,
                  o = t[n];
                return pt(
                  pt({}, e),
                  (((r = {})[n] = Array.isArray(o)
                    ? (function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(gt(arguments[t]));
                        return e;
                      })(o)
                    : o),
                  r),
                );
              }, {}))),
          n
        );
      }),
      e
    );
  })();
  function yt(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        },
      };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  var mt = function (e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, wt);
    },
    wt = function (e) {
      return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    };
  for (
    var bt = (function () {
        function e(e) {
          var t = (void 0 === e ? {} : e).requestTimeout;
          this.requestTimeout = t;
        }
        return (
          (e.prototype.destroy = function () {}),
          (e.prototype.handle = function (e, t) {
            var n = (void 0 === t ? {} : t).abortSignal,
              r = this.requestTimeout;
            if (null == n ? void 0 : n.aborted) {
              var o = new Error('Request aborted');
              return (o.name = 'AbortError'), Promise.reject(o);
            }
            var i = e.path;
            if (e.query) {
              var s = (function (e) {
                var t,
                  n,
                  r = [];
                try {
                  for (var o = yt(Object.keys(e).sort()), i = o.next(); !i.done; i = o.next()) {
                    var s = i.value,
                      a = e[s];
                    if (((s = mt(s)), Array.isArray(a)))
                      for (var u = 0, c = a.length; u < c; u++) r.push(s + '=' + mt(a[u]));
                    else {
                      var l = s;
                      (a || 'string' == typeof a) && (l += '=' + mt(a)), r.push(l);
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return r.join('&');
              })(e.query);
              s && (i += '?' + s);
            }
            var a = e.port,
              u = e.method,
              c = e.protocol + '//' + e.hostname + (a ? ':' + a : '') + i,
              l = { body: 'GET' === u || 'HEAD' === u ? void 0 : e.body, headers: new Headers(e.headers), method: u };
            'undefined' != typeof AbortController && (l.signal = n);
            var f,
              h = new Request(c, l),
              d = [
                fetch(h).then(function (e) {
                  var t,
                    n,
                    r = e.headers,
                    o = {};
                  try {
                    for (var i = ht(r.entries()), s = i.next(); !s.done; s = i.next()) {
                      var a = s.value;
                      o[a[0]] = a[1];
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      s && !s.done && (n = i.return) && n.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return void 0 !== e.body
                    ? { response: new dt({ headers: o, statusCode: e.status, body: e.body }) }
                    : e.blob().then(function (t) {
                        return { response: new dt({ headers: o, statusCode: e.status, body: t }) };
                      });
                }),
                ((f = r),
                void 0 === f && (f = 0),
                new Promise(function (e, t) {
                  f &&
                    setTimeout(function () {
                      var e = new Error('Request did not complete within ' + f + ' ms');
                      (e.name = 'TimeoutError'), t(e);
                    }, f);
                })),
              ];
            return (
              n &&
                d.push(
                  new Promise(function (e, t) {
                    n.onabort = function () {
                      var e = new Error('Request aborted');
                      (e.name = 'AbortError'), t(e);
                    };
                  }),
                ),
              Promise.race(d)
            );
          }),
          e
        );
      })(),
      St = {},
      _t = new Array(64),
      At = 0,
      Et = 'A'.charCodeAt(0),
      Ct = 'Z'.charCodeAt(0);
    At + Et <= Ct;
    At++
  ) {
    var Tt = String.fromCharCode(At + Et);
    (St[Tt] = At), (_t[At] = Tt);
  }
  for (At = 0, Et = 'a'.charCodeAt(0), Ct = 'z'.charCodeAt(0); At + Et <= Ct; At++) {
    Tt = String.fromCharCode(At + Et);
    var It = At + 26;
    (St[Tt] = It), (_t[It] = Tt);
  }
  for (At = 0; At < 10; At++) {
    St[At.toString(10)] = At + 52;
    (Tt = At.toString(10)), (It = At + 52);
    (St[Tt] = It), (_t[It] = Tt);
  }
  (St['+'] = 62), (_t[62] = '+'), (St['/'] = 63), (_t[63] = '/');
  function Pt(e) {
    var t = (e.length / 4) * 3;
    '==' === e.substr(-2) ? (t -= 2) : '=' === e.substr(-1) && t--;
    for (var n = new ArrayBuffer(t), r = new DataView(n), o = 0; o < e.length; o += 4) {
      for (var i = 0, s = 0, a = o, u = o + 3; a <= u; a++)
        '=' !== e[a] ? ((i |= St[e[a]] << (6 * (u - a))), (s += 6)) : (i >>= 6);
      var c = (o / 4) * 3;
      i >>= s % 8;
      for (var l = Math.floor(s / 8), f = 0; f < l; f++) {
        var h = 8 * (l - f - 1);
        r.setUint8(c + f, (i & (255 << h)) >> h);
      }
    }
    return new Uint8Array(n);
  }
  function kt(e) {
    for (var t = '', n = 0; n < e.length; n += 3) {
      for (var r = 0, o = 0, i = n, s = Math.min(n + 3, e.length); i < s; i++)
        (r |= e[i] << (8 * (s - i - 1))), (o += 8);
      var a = Math.ceil(o / 6);
      r <<= 6 * a - o;
      for (var u = 1; u <= a; u++) {
        var c = 6 * (a - u);
        t += _t[(r & (63 << c)) >> c];
      }
      t += '=='.slice(0, 4 - a);
    }
    return t;
  }
  var Ot = function (e) {
    return 'function' == typeof Blob && e instanceof Blob
      ? (function (e) {
          return lt(this, void 0, void 0, function () {
            var t, n;
            return ft(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, xt(e)];
                case 1:
                  return (t = r.sent()), (n = Pt(t)), [2, new Uint8Array(n)];
              }
            });
          });
        })(e)
      : (function (e) {
          return lt(this, void 0, void 0, function () {
            var t, n, r, o, i, s, a;
            return ft(this, function (u) {
              switch (u.label) {
                case 0:
                  (t = new Uint8Array(0)), (n = e.getReader()), (r = !1), (u.label = 1);
                case 1:
                  return r ? [3, 3] : [4, n.read()];
                case 2:
                  return (
                    (o = u.sent()),
                    (i = o.done),
                    (s = o.value) && ((a = t), (t = new Uint8Array(a.length + s.length)).set(a), t.set(s, a.length)),
                    (r = i),
                    [3, 1]
                  );
                case 3:
                  return [2, t];
              }
            });
          });
        })(e);
  };
  function xt(e) {
    return new Promise(function (t, n) {
      var r = new FileReader();
      (r.onloadend = function () {
        var e;
        if (2 !== r.readyState) return n(new Error('Reader aborted too early'));
        var o = null !== (e = r.result) && void 0 !== e ? e : '',
          i = o.indexOf(','),
          s = i > -1 ? i + 1 : o.length;
        t(o.substring(s));
      }),
        (r.onabort = function () {
          return n(new Error('Read aborted'));
        }),
        (r.onerror = function () {
          return n(r.error);
        }),
        r.readAsDataURL(e);
    });
  }
  var Rt = function (e) {
    return function () {
      return Promise.reject(e);
    };
  };
  var Nt = function () {
    return (
      (Nt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      Nt.apply(this, arguments)
    );
  };
  function Ut(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function Lt(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function Mt(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  var Dt,
    Ft = function (e) {
      return function (t, n) {
        return function (r) {
          return Ut(void 0, void 0, void 0, function () {
            var o;
            return Lt(this, function (i) {
              return (
                (null === (o = null == e ? void 0 : e.retryStrategy) || void 0 === o ? void 0 : o.mode) &&
                  (n.userAgent = (function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Mt(arguments[t]));
                    return e;
                  })(n.userAgent || [], [['cfg/retry-mode', e.retryStrategy.mode]])),
                [2, e.retryStrategy.retry(t, r)]
              );
            });
          });
        };
      };
    },
    jt = { name: 'retryMiddleware', tags: ['RETRY'], step: 'finalizeRequest', priority: 'high', override: !0 },
    Bt = function (e) {
      return {
        applyToStack: function (t) {
          t.add(Ft(e), jt);
        },
      };
    },
    Ht = [
      'AuthFailure',
      'InvalidSignatureException',
      'RequestExpired',
      'RequestInTheFuture',
      'RequestTimeTooSkewed',
      'SignatureDoesNotMatch',
    ],
    Gt = [
      'BandwidthLimitExceeded',
      'EC2ThrottledException',
      'LimitExceededException',
      'PriorRequestNotComplete',
      'ProvisionedThroughputExceededException',
      'RequestLimitExceeded',
      'RequestThrottled',
      'RequestThrottledException',
      'SlowDown',
      'ThrottledException',
      'Throttling',
      'ThrottlingException',
      'TooManyRequestsException',
      'TransactionInProgressException',
    ],
    qt = ['AbortError', 'TimeoutError', 'RequestTimeout', 'RequestTimeoutException'],
    zt = [500, 502, 503, 504],
    Kt = function (e) {
      var t, n;
      return (
        429 === (null === (t = e.$metadata) || void 0 === t ? void 0 : t.httpStatusCode) ||
        Gt.includes(e.name) ||
        1 == (null === (n = e.$retryable) || void 0 === n ? void 0 : n.throttling)
      );
    },
    Vt = {},
    Wt = {},
    Yt =
      ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
  if (Yt) {
    var $t = new Uint8Array(16);
    Wt = function () {
      return Yt($t), $t;
    };
  } else {
    var Jt = new Array(16);
    Wt = function () {
      for (var e, t = 0; t < 16; t++)
        0 == (3 & t) && (e = 4294967296 * Math.random()), (Jt[t] = (e >>> ((3 & t) << 3)) & 255);
      return Jt;
    };
  }
  for (var Zt, Xt, Qt = {}, en = [], tn = 0; tn < 256; ++tn) en[tn] = (tn + 256).toString(16).substr(1);
  Qt = function (e, t) {
    var n = t || 0,
      r = en;
    return [
      r[e[n++]],
      r[e[n++]],
      r[e[n++]],
      r[e[n++]],
      '-',
      r[e[n++]],
      r[e[n++]],
      '-',
      r[e[n++]],
      r[e[n++]],
      '-',
      r[e[n++]],
      r[e[n++]],
      '-',
      r[e[n++]],
      r[e[n++]],
      r[e[n++]],
      r[e[n++]],
      r[e[n++]],
      r[e[n++]],
    ].join('');
  };
  var nn = 0,
    rn = 0;
  Dt = function (e, t, n) {
    var r = (t && n) || 0,
      o = t || [],
      i = (e = e || {}).node || Zt,
      s = void 0 !== e.clockseq ? e.clockseq : Xt;
    if (null == i || null == s) {
      var a = Wt();
      null == i && (i = Zt = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]),
        null == s && (s = Xt = 16383 & ((a[6] << 8) | a[7]));
    }
    var u = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
      c = void 0 !== e.nsecs ? e.nsecs : rn + 1,
      l = u - nn + (c - rn) / 1e4;
    if (
      (l < 0 && void 0 === e.clockseq && (s = (s + 1) & 16383),
      (l < 0 || u > nn) && void 0 === e.nsecs && (c = 0),
      c >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    (nn = u), (rn = c), (Xt = s);
    var f = (1e4 * (268435455 & (u += 122192928e5)) + c) % 4294967296;
    (o[r++] = (f >>> 24) & 255), (o[r++] = (f >>> 16) & 255), (o[r++] = (f >>> 8) & 255), (o[r++] = 255 & f);
    var h = ((u / 4294967296) * 1e4) & 268435455;
    (o[r++] = (h >>> 8) & 255),
      (o[r++] = 255 & h),
      (o[r++] = ((h >>> 24) & 15) | 16),
      (o[r++] = (h >>> 16) & 255),
      (o[r++] = (s >>> 8) | 128),
      (o[r++] = 255 & s);
    for (var d = 0; d < 6; ++d) o[r + d] = i[d];
    return t || Qt(o);
  };
  var on;
  var sn = (on = function (e, t, n) {
    var r = (t && n) || 0;
    'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
    var o = (e = e || {}).random || (e.rng || Wt)();
    if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) for (var i = 0; i < 16; ++i) t[r + i] = o[i];
    return t || Qt(o);
  });
  (sn.v1 = Dt), (sn.v4 = on), (Vt = sn);
  var an = function (e, t) {
      return Math.floor(Math.min(2e4, Math.random() * Math.pow(2, t) * e));
    },
    un = function (e) {
      return (
        !!e &&
        ((function (e) {
          return void 0 !== e.$retryable;
        })(e) ||
          (function (e) {
            return Ht.includes(e.name);
          })(e) ||
          Kt(e) ||
          (function (e) {
            var t;
            return (
              qt.includes(e.name) ||
              zt.includes((null === (t = e.$metadata) || void 0 === t ? void 0 : t.httpStatusCode) || 0)
            );
          })(e))
      );
    },
    cn = 'standard',
    ln = (function () {
      function e(e, t) {
        var n, r, o, i, s, a, u, c;
        (this.maxAttemptsProvider = e),
          (this.mode = cn),
          (this.retryDecider = null !== (n = null == t ? void 0 : t.retryDecider) && void 0 !== n ? n : un),
          (this.delayDecider = null !== (r = null == t ? void 0 : t.delayDecider) && void 0 !== r ? r : an),
          (this.retryQuota =
            null !== (o = null == t ? void 0 : t.retryQuota) && void 0 !== o
              ? o
              : ((s = i = 500),
                (a = i),
                (u = function (e) {
                  return 'TimeoutError' === e.name ? 10 : 5;
                }),
                (c = function (e) {
                  return u(e) <= a;
                }),
                Object.freeze({
                  hasRetryTokens: c,
                  retrieveRetryTokens: function (e) {
                    if (!c(e)) throw new Error('No retry token available');
                    var t = u(e);
                    return (a -= t), t;
                  },
                  releaseRetryTokens: function (e) {
                    (a += null != e ? e : 1), (a = Math.min(a, s));
                  },
                })));
      }
      return (
        (e.prototype.shouldRetry = function (e, t, n) {
          return t < n && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
        }),
        (e.prototype.getMaxAttempts = function () {
          return Ut(this, void 0, void 0, function () {
            var e;
            return Lt(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 2, , 3]), [4, this.maxAttemptsProvider()];
                case 1:
                  return (e = t.sent()), [3, 3];
                case 2:
                  return t.sent(), (e = 3), [3, 3];
                case 3:
                  return [2, e];
              }
            });
          });
        }),
        (e.prototype.retry = function (e, t) {
          return Ut(this, void 0, void 0, function () {
            var n, r, o, i, s, a, u, c;
            return Lt(this, function (l) {
              switch (l.label) {
                case 0:
                  return (r = 0), (o = 0), [4, this.getMaxAttempts()];
                case 1:
                  (i = l.sent()),
                    (s = t.request),
                    vt.isInstance(s) && (s.headers['amz-sdk-invocation-id'] = Vt.v4()),
                    (a = function () {
                      var a, c, l, f, h;
                      return Lt(this, function (d) {
                        switch (d.label) {
                          case 0:
                            return (
                              d.trys.push([0, 2, , 5]),
                              vt.isInstance(s) && (s.headers['amz-sdk-request'] = 'attempt=' + (r + 1) + '; max=' + i),
                              [4, e(t)]
                            );
                          case 1:
                            return (
                              (a = d.sent()),
                              (c = a.response),
                              (l = a.output),
                              u.retryQuota.releaseRetryTokens(n),
                              (l.$metadata.attempts = r + 1),
                              (l.$metadata.totalRetryDelay = o),
                              [2, { value: { response: c, output: l } }]
                            );
                          case 2:
                            return (
                              (f = d.sent()),
                              r++,
                              u.shouldRetry(f, r, i)
                                ? ((n = u.retryQuota.retrieveRetryTokens(f)),
                                  (h = u.delayDecider(Kt(f) ? 500 : 100, r)),
                                  (o += h),
                                  [
                                    4,
                                    new Promise(function (e) {
                                      return setTimeout(e, h);
                                    }),
                                  ])
                                : [3, 4]
                            );
                          case 3:
                            return d.sent(), [2, 'continue'];
                          case 4:
                            throw (
                              (f.$metadata || (f.$metadata = {}),
                              (f.$metadata.attempts = r),
                              (f.$metadata.totalRetryDelay = o),
                              f)
                            );
                          case 5:
                            return [2];
                        }
                      });
                    }),
                    (u = this),
                    (l.label = 2);
                case 2:
                  return [5, a()];
                case 3:
                  return 'object' == typeof (c = l.sent()) ? [2, c.value] : [3, 2];
                case 4:
                  return [2];
              }
            });
          });
        }),
        e
      );
    })(),
    fn = function (e) {
      var t = hn(e.maxAttempts);
      return Nt(Nt({}, e), { maxAttempts: t, retryStrategy: e.retryStrategy || new ln(t) });
    },
    hn = function (e) {
      if ((void 0 === e && (e = 3), 'number' == typeof e)) {
        var t = Promise.resolve(e);
        return function () {
          return t;
        };
      }
      return e;
    };
  function dn(e) {
    if ('string' == typeof e) {
      for (var t = e.length, n = t - 1; n >= 0; n--) {
        var r = e.charCodeAt(n);
        r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2);
      }
      return t;
    }
    return 'number' == typeof e.byteLength ? e.byteLength : 'number' == typeof e.size ? e.size : void 0;
  }
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function pn(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function gn(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  var vn = {};
  vn = (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 90))
    );
  })({
    17: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r = n(18),
        o = (function () {
          function e() {}
          return (
            (e.getFirstMatch = function (e, t) {
              var n = t.match(e);
              return (n && n.length > 0 && n[1]) || '';
            }),
            (e.getSecondMatch = function (e, t) {
              var n = t.match(e);
              return (n && n.length > 1 && n[2]) || '';
            }),
            (e.matchAndReturnConst = function (e, t, n) {
              if (e.test(t)) return n;
            }),
            (e.getWindowsVersionName = function (e) {
              switch (e) {
                case 'NT':
                  return 'NT';
                case 'XP':
                case 'NT 5.1':
                  return 'XP';
                case 'NT 5.0':
                  return '2000';
                case 'NT 5.2':
                  return '2003';
                case 'NT 6.0':
                  return 'Vista';
                case 'NT 6.1':
                  return '7';
                case 'NT 6.2':
                  return '8';
                case 'NT 6.3':
                  return '8.1';
                case 'NT 10.0':
                  return '10';
                default:
                  return;
              }
            }),
            (e.getMacOSVersionName = function (e) {
              var t = e
                .split('.')
                .splice(0, 2)
                .map(function (e) {
                  return parseInt(e, 10) || 0;
                });
              if ((t.push(0), 10 === t[0]))
                switch (t[1]) {
                  case 5:
                    return 'Leopard';
                  case 6:
                    return 'Snow Leopard';
                  case 7:
                    return 'Lion';
                  case 8:
                    return 'Mountain Lion';
                  case 9:
                    return 'Mavericks';
                  case 10:
                    return 'Yosemite';
                  case 11:
                    return 'El Capitan';
                  case 12:
                    return 'Sierra';
                  case 13:
                    return 'High Sierra';
                  case 14:
                    return 'Mojave';
                  case 15:
                    return 'Catalina';
                  default:
                    return;
                }
            }),
            (e.getAndroidVersionName = function (e) {
              var t = e
                .split('.')
                .splice(0, 2)
                .map(function (e) {
                  return parseInt(e, 10) || 0;
                });
              if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                return 1 === t[0] && t[1] < 6
                  ? 'Cupcake'
                  : 1 === t[0] && t[1] >= 6
                  ? 'Donut'
                  : 2 === t[0] && t[1] < 2
                  ? 'Eclair'
                  : 2 === t[0] && 2 === t[1]
                  ? 'Froyo'
                  : 2 === t[0] && t[1] > 2
                  ? 'Gingerbread'
                  : 3 === t[0]
                  ? 'Honeycomb'
                  : 4 === t[0] && t[1] < 1
                  ? 'Ice Cream Sandwich'
                  : 4 === t[0] && t[1] < 4
                  ? 'Jelly Bean'
                  : 4 === t[0] && t[1] >= 4
                  ? 'KitKat'
                  : 5 === t[0]
                  ? 'Lollipop'
                  : 6 === t[0]
                  ? 'Marshmallow'
                  : 7 === t[0]
                  ? 'Nougat'
                  : 8 === t[0]
                  ? 'Oreo'
                  : 9 === t[0]
                  ? 'Pie'
                  : void 0;
            }),
            (e.getVersionPrecision = function (e) {
              return e.split('.').length;
            }),
            (e.compareVersions = function (t, n, r) {
              void 0 === r && (r = !1);
              var o = e.getVersionPrecision(t),
                i = e.getVersionPrecision(n),
                s = Math.max(o, i),
                a = 0,
                u = e.map([t, n], function (t) {
                  var n = s - e.getVersionPrecision(t),
                    r = t + new Array(n + 1).join('.0');
                  return e
                    .map(r.split('.'), function (e) {
                      return new Array(20 - e.length).join('0') + e;
                    })
                    .reverse();
                });
              for (r && (a = s - Math.min(o, i)), s -= 1; s >= a; ) {
                if (u[0][s] > u[1][s]) return 1;
                if (u[0][s] === u[1][s]) {
                  if (s === a) return 0;
                  s -= 1;
                } else if (u[0][s] < u[1][s]) return -1;
              }
            }),
            (e.map = function (e, t) {
              var n,
                r = [];
              if (Array.prototype.map) return Array.prototype.map.call(e, t);
              for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
              return r;
            }),
            (e.find = function (e, t) {
              var n, r;
              if (Array.prototype.find) return Array.prototype.find.call(e, t);
              for (n = 0, r = e.length; n < r; n += 1) {
                var o = e[n];
                if (t(o, n)) return o;
              }
            }),
            (e.assign = function (e) {
              for (var t, n, r = e, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
                i[s - 1] = arguments[s];
              if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
              var a = function () {
                var e = i[t];
                'object' == typeof e &&
                  null !== e &&
                  Object.keys(e).forEach(function (t) {
                    r[t] = e[t];
                  });
              };
              for (t = 0, n = i.length; t < n; t += 1) a();
              return e;
            }),
            (e.getBrowserAlias = function (e) {
              return r.BROWSER_ALIASES_MAP[e];
            }),
            (e.getBrowserTypeByAlias = function (e) {
              return r.BROWSER_MAP[e] || '';
            }),
            e
          );
        })();
      (t.default = o), (e.exports = t.default);
    },
    18: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0),
        (t.BROWSER_ALIASES_MAP = {
          'Amazon Silk': 'amazon_silk',
          'Android Browser': 'android',
          Bada: 'bada',
          BlackBerry: 'blackberry',
          Chrome: 'chrome',
          Chromium: 'chromium',
          Electron: 'electron',
          Epiphany: 'epiphany',
          Firefox: 'firefox',
          Focus: 'focus',
          Generic: 'generic',
          'Google Search': 'google_search',
          Googlebot: 'googlebot',
          'Internet Explorer': 'ie',
          'K-Meleon': 'k_meleon',
          Maxthon: 'maxthon',
          'Microsoft Edge': 'edge',
          'MZ Browser': 'mz',
          'NAVER Whale Browser': 'naver',
          Opera: 'opera',
          'Opera Coast': 'opera_coast',
          PhantomJS: 'phantomjs',
          Puffin: 'puffin',
          QupZilla: 'qupzilla',
          QQ: 'qq',
          QQLite: 'qqlite',
          Safari: 'safari',
          Sailfish: 'sailfish',
          'Samsung Internet for Android': 'samsung_internet',
          SeaMonkey: 'seamonkey',
          Sleipnir: 'sleipnir',
          Swing: 'swing',
          Tizen: 'tizen',
          'UC Browser': 'uc',
          Vivaldi: 'vivaldi',
          'WebOS Browser': 'webos',
          WeChat: 'wechat',
          'Yandex Browser': 'yandex',
          Roku: 'roku',
        }),
        (t.BROWSER_MAP = {
          amazon_silk: 'Amazon Silk',
          android: 'Android Browser',
          bada: 'Bada',
          blackberry: 'BlackBerry',
          chrome: 'Chrome',
          chromium: 'Chromium',
          electron: 'Electron',
          epiphany: 'Epiphany',
          firefox: 'Firefox',
          focus: 'Focus',
          generic: 'Generic',
          googlebot: 'Googlebot',
          google_search: 'Google Search',
          ie: 'Internet Explorer',
          k_meleon: 'K-Meleon',
          maxthon: 'Maxthon',
          edge: 'Microsoft Edge',
          mz: 'MZ Browser',
          naver: 'NAVER Whale Browser',
          opera: 'Opera',
          opera_coast: 'Opera Coast',
          phantomjs: 'PhantomJS',
          puffin: 'Puffin',
          qupzilla: 'QupZilla',
          qq: 'QQ Browser',
          qqlite: 'QQ Browser Lite',
          safari: 'Safari',
          sailfish: 'Sailfish',
          samsung_internet: 'Samsung Internet for Android',
          seamonkey: 'SeaMonkey',
          sleipnir: 'Sleipnir',
          swing: 'Swing',
          tizen: 'Tizen',
          uc: 'UC Browser',
          vivaldi: 'Vivaldi',
          webos: 'WebOS Browser',
          wechat: 'WeChat',
          yandex: 'Yandex Browser',
        }),
        (t.PLATFORMS_MAP = { tablet: 'tablet', mobile: 'mobile', desktop: 'desktop', tv: 'tv' }),
        (t.OS_MAP = {
          WindowsPhone: 'Windows Phone',
          Windows: 'Windows',
          MacOS: 'macOS',
          iOS: 'iOS',
          Android: 'Android',
          WebOS: 'WebOS',
          BlackBerry: 'BlackBerry',
          Bada: 'Bada',
          Tizen: 'Tizen',
          Linux: 'Linux',
          ChromeOS: 'Chrome OS',
          PlayStation4: 'PlayStation 4',
          Roku: 'Roku',
        }),
        (t.ENGINE_MAP = {
          EdgeHTML: 'EdgeHTML',
          Blink: 'Blink',
          Trident: 'Trident',
          Presto: 'Presto',
          Gecko: 'Gecko',
          WebKit: 'WebKit',
        });
    },
    90: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = (r = n(91)) && r.__esModule ? r : { default: r },
        i = n(18);
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = (function () {
        function e() {}
        var t;
        return (
          (e.getParser = function (e, t) {
            if ((void 0 === t && (t = !1), 'string' != typeof e)) throw new Error('UserAgent should be a string');
            return new o.default(e, t);
          }),
          (e.parse = function (e) {
            return new o.default(e).getResult();
          }),
          (t = [
            {
              key: 'BROWSER_MAP',
              get: function () {
                return i.BROWSER_MAP;
              },
            },
            {
              key: 'ENGINE_MAP',
              get: function () {
                return i.ENGINE_MAP;
              },
            },
            {
              key: 'OS_MAP',
              get: function () {
                return i.OS_MAP;
              },
            },
            {
              key: 'PLATFORMS_MAP',
              get: function () {
                return i.PLATFORMS_MAP;
              },
            },
          ]) && s(e, t),
          e
        );
      })();
      (t.default = a), (e.exports = t.default);
    },
    91: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r = u(n(92)),
        o = u(n(93)),
        i = u(n(94)),
        s = u(n(95)),
        a = u(n(17));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function () {
        function e(e, t) {
          if ((void 0 === t && (t = !1), null == e || '' === e)) throw new Error("UserAgent parameter can't be empty");
          (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
        }
        var t = e.prototype;
        return (
          (t.getUA = function () {
            return this._ua;
          }),
          (t.test = function (e) {
            return e.test(this._ua);
          }),
          (t.parseBrowser = function () {
            var e = this;
            this.parsedResult.browser = {};
            var t = a.default.find(r.default, function (t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array)
                return t.test.some(function (t) {
                  return e.test(t);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
          }),
          (t.getBrowser = function () {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }),
          (t.getBrowserName = function (e) {
            return e ? String(this.getBrowser().name).toLowerCase() || '' : this.getBrowser().name || '';
          }),
          (t.getBrowserVersion = function () {
            return this.getBrowser().version;
          }),
          (t.getOS = function () {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }),
          (t.parseOS = function () {
            var e = this;
            this.parsedResult.os = {};
            var t = a.default.find(o.default, function (t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array)
                return t.test.some(function (t) {
                  return e.test(t);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
          }),
          (t.getOSName = function (e) {
            var t = this.getOS().name;
            return e ? String(t).toLowerCase() || '' : t || '';
          }),
          (t.getOSVersion = function () {
            return this.getOS().version;
          }),
          (t.getPlatform = function () {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }),
          (t.getPlatformType = function (e) {
            void 0 === e && (e = !1);
            var t = this.getPlatform().type;
            return e ? String(t).toLowerCase() || '' : t || '';
          }),
          (t.parsePlatform = function () {
            var e = this;
            this.parsedResult.platform = {};
            var t = a.default.find(i.default, function (t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array)
                return t.test.some(function (t) {
                  return e.test(t);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
          }),
          (t.getEngine = function () {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }),
          (t.getEngineName = function (e) {
            return e ? String(this.getEngine().name).toLowerCase() || '' : this.getEngine().name || '';
          }),
          (t.parseEngine = function () {
            var e = this;
            this.parsedResult.engine = {};
            var t = a.default.find(s.default, function (t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array)
                return t.test.some(function (t) {
                  return e.test(t);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
          }),
          (t.parse = function () {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }),
          (t.getResult = function () {
            return a.default.assign({}, this.parsedResult);
          }),
          (t.satisfies = function (e) {
            var t = this,
              n = {},
              r = 0,
              o = {},
              i = 0;
            if (
              (Object.keys(e).forEach(function (t) {
                var s = e[t];
                'string' == typeof s ? ((o[t] = s), (i += 1)) : 'object' == typeof s && ((n[t] = s), (r += 1));
              }),
              r > 0)
            ) {
              var s = Object.keys(n),
                u = a.default.find(s, function (e) {
                  return t.isOS(e);
                });
              if (u) {
                var c = this.satisfies(n[u]);
                if (void 0 !== c) return c;
              }
              var l = a.default.find(s, function (e) {
                return t.isPlatform(e);
              });
              if (l) {
                var f = this.satisfies(n[l]);
                if (void 0 !== f) return f;
              }
            }
            if (i > 0) {
              var h = Object.keys(o),
                d = a.default.find(h, function (e) {
                  return t.isBrowser(e, !0);
                });
              if (void 0 !== d) return this.compareVersion(o[d]);
            }
          }),
          (t.isBrowser = function (e, t) {
            void 0 === t && (t = !1);
            var n = this.getBrowserName().toLowerCase(),
              r = e.toLowerCase(),
              o = a.default.getBrowserTypeByAlias(r);
            return t && o && (r = o.toLowerCase()), r === n;
          }),
          (t.compareVersion = function (e) {
            var t = [0],
              n = e,
              r = !1,
              o = this.getBrowserVersion();
            if ('string' == typeof o)
              return (
                '>' === e[0] || '<' === e[0]
                  ? ((n = e.substr(1)),
                    '=' === e[1] ? ((r = !0), (n = e.substr(2))) : (t = []),
                    '>' === e[0] ? t.push(1) : t.push(-1))
                  : '=' === e[0]
                  ? (n = e.substr(1))
                  : '~' === e[0] && ((r = !0), (n = e.substr(1))),
                t.indexOf(a.default.compareVersions(o, n, r)) > -1
              );
          }),
          (t.isOS = function (e) {
            return this.getOSName(!0) === String(e).toLowerCase();
          }),
          (t.isPlatform = function (e) {
            return this.getPlatformType(!0) === String(e).toLowerCase();
          }),
          (t.isEngine = function (e) {
            return this.getEngineName(!0) === String(e).toLowerCase();
          }),
          (t.is = function (e, t) {
            return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
          }),
          (t.some = function (e) {
            var t = this;
            return (
              void 0 === e && (e = []),
              e.some(function (e) {
                return t.is(e);
              })
            );
          }),
          e
        );
      })();
      (t.default = c), (e.exports = t.default);
    },
    92: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = (r = n(17)) && r.__esModule ? r : { default: r },
        i = /version\/(\d+(\.?_?\d+)+)/i,
        s = [
          {
            test: [/googlebot/i],
            describe: function (e) {
              var t = { name: 'Googlebot' },
                n = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/opera/i],
            describe: function (e) {
              var t = { name: 'Opera' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/opr\/|opios/i],
            describe: function (e) {
              var t = { name: 'Opera' },
                n = o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/SamsungBrowser/i],
            describe: function (e) {
              var t = { name: 'Samsung Internet for Android' },
                n =
                  o.default.getFirstMatch(i, e) ||
                  o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/Whale/i],
            describe: function (e) {
              var t = { name: 'NAVER Whale Browser' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/MZBrowser/i],
            describe: function (e) {
              var t = { name: 'MZ Browser' },
                n = o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/focus/i],
            describe: function (e) {
              var t = { name: 'Focus' },
                n = o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/swing/i],
            describe: function (e) {
              var t = { name: 'Swing' },
                n = o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/coast/i],
            describe: function (e) {
              var t = { name: 'Opera Coast' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe: function (e) {
              var t = { name: 'Opera Touch' },
                n = o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/yabrowser/i],
            describe: function (e) {
              var t = { name: 'Yandex Browser' },
                n = o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/ucbrowser/i],
            describe: function (e) {
              var t = { name: 'UC Browser' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/Maxthon|mxios/i],
            describe: function (e) {
              var t = { name: 'Maxthon' },
                n =
                  o.default.getFirstMatch(i, e) ||
                  o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/epiphany/i],
            describe: function (e) {
              var t = { name: 'Epiphany' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/puffin/i],
            describe: function (e) {
              var t = { name: 'Puffin' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/sleipnir/i],
            describe: function (e) {
              var t = { name: 'Sleipnir' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/k-meleon/i],
            describe: function (e) {
              var t = { name: 'K-Meleon' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/micromessenger/i],
            describe: function (e) {
              var t = { name: 'WeChat' },
                n =
                  o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/qqbrowser/i],
            describe: function (e) {
              var t = { name: /qqbrowserlite/i.test(e) ? 'QQ Browser Lite' : 'QQ Browser' },
                n =
                  o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) ||
                  o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/msie|trident/i],
            describe: function (e) {
              var t = { name: 'Internet Explorer' },
                n = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/\sedg\//i],
            describe: function (e) {
              var t = { name: 'Microsoft Edge' },
                n = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/edg([ea]|ios)/i],
            describe: function (e) {
              var t = { name: 'Microsoft Edge' },
                n = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/vivaldi/i],
            describe: function (e) {
              var t = { name: 'Vivaldi' },
                n = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/seamonkey/i],
            describe: function (e) {
              var t = { name: 'SeaMonkey' },
                n = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/sailfish/i],
            describe: function (e) {
              var t = { name: 'Sailfish' },
                n = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/silk/i],
            describe: function (e) {
              var t = { name: 'Amazon Silk' },
                n = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/phantom/i],
            describe: function (e) {
              var t = { name: 'PhantomJS' },
                n = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/slimerjs/i],
            describe: function (e) {
              var t = { name: 'SlimerJS' },
                n = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe: function (e) {
              var t = { name: 'BlackBerry' },
                n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe: function (e) {
              var t = { name: 'WebOS Browser' },
                n =
                  o.default.getFirstMatch(i, e) ||
                  o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/bada/i],
            describe: function (e) {
              var t = { name: 'Bada' },
                n = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/tizen/i],
            describe: function (e) {
              var t = { name: 'Tizen' },
                n =
                  o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) ||
                  o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/qupzilla/i],
            describe: function (e) {
              var t = { name: 'QupZilla' },
                n = o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/firefox|iceweasel|fxios/i],
            describe: function (e) {
              var t = { name: 'Firefox' },
                n = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/electron/i],
            describe: function (e) {
              var t = { name: 'Electron' },
                n = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/MiuiBrowser/i],
            describe: function (e) {
              var t = { name: 'Miui' },
                n = o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/chromium/i],
            describe: function (e) {
              var t = { name: 'Chromium' },
                n = o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/chrome|crios|crmo/i],
            describe: function (e) {
              var t = { name: 'Chrome' },
                n = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/GSA/i],
            describe: function (e) {
              var t = { name: 'Google Search' },
                n = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: function (e) {
              var t = !e.test(/like android/i),
                n = e.test(/android/i);
              return t && n;
            },
            describe: function (e) {
              var t = { name: 'Android Browser' },
                n = o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/playstation 4/i],
            describe: function (e) {
              var t = { name: 'PlayStation 4' },
                n = o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/safari|applewebkit/i],
            describe: function (e) {
              var t = { name: 'Safari' },
                n = o.default.getFirstMatch(i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/.*/i],
            describe: function (e) {
              var t = -1 !== e.search('\\(') ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
              return { name: o.default.getFirstMatch(t, e), version: o.default.getSecondMatch(t, e) };
            },
          },
        ];
      (t.default = s), (e.exports = t.default);
    },
    93: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = (r = n(17)) && r.__esModule ? r : { default: r },
        i = n(18),
        s = [
          {
            test: [/Roku\/DVP/],
            describe: function (e) {
              var t = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
              return { name: i.OS_MAP.Roku, version: t };
            },
          },
          {
            test: [/windows phone/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
              return { name: i.OS_MAP.WindowsPhone, version: t };
            },
          },
          {
            test: [/windows /i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                n = o.default.getWindowsVersionName(t);
              return { name: i.OS_MAP.Windows, version: t, versionName: n };
            },
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: function (e) {
              var t = { name: i.OS_MAP.iOS },
                n = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/macintosh/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, '.'),
                n = o.default.getMacOSVersionName(t),
                r = { name: i.OS_MAP.MacOS, version: t };
              return n && (r.versionName = n), r;
            },
          },
          {
            test: [/(ipod|iphone|ipad)/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, '.');
              return { name: i.OS_MAP.iOS, version: t };
            },
          },
          {
            test: function (e) {
              var t = !e.test(/like android/i),
                n = e.test(/android/i);
              return t && n;
            },
            describe: function (e) {
              var t = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                n = o.default.getAndroidVersionName(t),
                r = { name: i.OS_MAP.Android, version: t };
              return n && (r.versionName = n), r;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                n = { name: i.OS_MAP.WebOS };
              return t && t.length && (n.version = t), n;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe: function (e) {
              var t =
                o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) ||
                o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) ||
                o.default.getFirstMatch(/\bbb(\d+)/i, e);
              return { name: i.OS_MAP.BlackBerry, version: t };
            },
          },
          {
            test: [/bada/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
              return { name: i.OS_MAP.Bada, version: t };
            },
          },
          {
            test: [/tizen/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
              return { name: i.OS_MAP.Tizen, version: t };
            },
          },
          {
            test: [/linux/i],
            describe: function () {
              return { name: i.OS_MAP.Linux };
            },
          },
          {
            test: [/CrOS/],
            describe: function () {
              return { name: i.OS_MAP.ChromeOS };
            },
          },
          {
            test: [/PlayStation 4/],
            describe: function (e) {
              var t = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
              return { name: i.OS_MAP.PlayStation4, version: t };
            },
          },
        ];
      (t.default = s), (e.exports = t.default);
    },
    94: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = (r = n(17)) && r.__esModule ? r : { default: r },
        i = n(18),
        s = [
          {
            test: [/googlebot/i],
            describe: function () {
              return { type: 'bot', vendor: 'Google' };
            },
          },
          {
            test: [/huawei/i],
            describe: function (e) {
              var t = o.default.getFirstMatch(/(can-l01)/i, e) && 'Nova',
                n = { type: i.PLATFORMS_MAP.mobile, vendor: 'Huawei' };
              return t && (n.model = t), n;
            },
          },
          {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet, vendor: 'Nexus' };
            },
          },
          {
            test: [/ipad/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet, vendor: 'Apple', model: 'iPad' };
            },
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet, vendor: 'Apple', model: 'iPad' };
            },
          },
          {
            test: [/kftt build/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet, vendor: 'Amazon', model: 'Kindle Fire HD 7' };
            },
          },
          {
            test: [/silk/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet, vendor: 'Amazon' };
            },
          },
          {
            test: [/tablet(?! pc)/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet };
            },
          },
          {
            test: function (e) {
              var t = e.test(/ipod|iphone/i),
                n = e.test(/like (ipod|iphone)/i);
              return t && !n;
            },
            describe: function (e) {
              var t = o.default.getFirstMatch(/(ipod|iphone)/i, e);
              return { type: i.PLATFORMS_MAP.mobile, vendor: 'Apple', model: t };
            },
          },
          {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.mobile, vendor: 'Nexus' };
            },
          },
          {
            test: [/[^-]mobi/i],
            describe: function () {
              return { type: i.PLATFORMS_MAP.mobile };
            },
          },
          {
            test: function (e) {
              return 'blackberry' === e.getBrowserName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.mobile, vendor: 'BlackBerry' };
            },
          },
          {
            test: function (e) {
              return 'bada' === e.getBrowserName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.mobile };
            },
          },
          {
            test: function (e) {
              return 'windows phone' === e.getBrowserName();
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.mobile, vendor: 'Microsoft' };
            },
          },
          {
            test: function (e) {
              var t = Number(String(e.getOSVersion()).split('.')[0]);
              return 'android' === e.getOSName(!0) && t >= 3;
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.tablet };
            },
          },
          {
            test: function (e) {
              return 'android' === e.getOSName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.mobile };
            },
          },
          {
            test: function (e) {
              return 'macos' === e.getOSName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.desktop, vendor: 'Apple' };
            },
          },
          {
            test: function (e) {
              return 'windows' === e.getOSName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.desktop };
            },
          },
          {
            test: function (e) {
              return 'linux' === e.getOSName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.desktop };
            },
          },
          {
            test: function (e) {
              return 'playstation 4' === e.getOSName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.tv };
            },
          },
          {
            test: function (e) {
              return 'roku' === e.getOSName(!0);
            },
            describe: function () {
              return { type: i.PLATFORMS_MAP.tv };
            },
          },
        ];
      (t.default = s), (e.exports = t.default);
    },
    95: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = (r = n(17)) && r.__esModule ? r : { default: r },
        i = n(18),
        s = [
          {
            test: function (e) {
              return 'microsoft edge' === e.getBrowserName(!0);
            },
            describe: function (e) {
              if (/\sedg\//i.test(e)) return { name: i.ENGINE_MAP.Blink };
              var t = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
              return { name: i.ENGINE_MAP.EdgeHTML, version: t };
            },
          },
          {
            test: [/trident/i],
            describe: function (e) {
              var t = { name: i.ENGINE_MAP.Trident },
                n = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: function (e) {
              return e.test(/presto/i);
            },
            describe: function (e) {
              var t = { name: i.ENGINE_MAP.Presto },
                n = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: function (e) {
              var t = e.test(/gecko/i),
                n = e.test(/like gecko/i);
              return t && !n;
            },
            describe: function (e) {
              var t = { name: i.ENGINE_MAP.Gecko },
                n = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
          {
            test: [/(apple)?webkit\/537\.36/i],
            describe: function () {
              return { name: i.ENGINE_MAP.Blink };
            },
          },
          {
            test: [/(apple)?webkit/i],
            describe: function (e) {
              var t = { name: i.ENGINE_MAP.WebKit },
                n = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
              return n && (t.version = n), t;
            },
          },
        ];
      (t.default = s), (e.exports = t.default);
    },
  });
  var yn = function (e) {
    var t = e.serviceId,
      n = e.clientVersion;
    return function () {
      return pn(void 0, void 0, void 0, function () {
        var e, r, i, s, a, u, c, l, f;
        return gn(this, function (h) {
          return (
            (e = (
              null === (i = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === i
                ? void 0
                : i.userAgent
            )
              ? o(vn).parse(window.navigator.userAgent)
              : void 0),
            (r = [
              ['aws-sdk-js', n],
              [
                'os/' + ((null === (s = null == e ? void 0 : e.os) || void 0 === s ? void 0 : s.name) || 'other'),
                null === (a = null == e ? void 0 : e.os) || void 0 === a ? void 0 : a.version,
              ],
              ['lang/js'],
              [
                'md/browser',
                (null !== (c = null === (u = null == e ? void 0 : e.browser) || void 0 === u ? void 0 : u.name) &&
                void 0 !== c
                  ? c
                  : 'unknown') +
                  '_' +
                  (null !== (f = null === (l = null == e ? void 0 : e.browser) || void 0 === l ? void 0 : l.version) &&
                  void 0 !== f
                    ? f
                    : 'unknown'),
              ],
            ]),
            t && r.push(['api/' + t, n]),
            [2, r]
          );
        });
      });
    };
  };
  var mn = 'logs.{region}.amazonaws.com',
    wn = new Set([
      'af-south-1',
      'ap-east-1',
      'ap-northeast-1',
      'ap-northeast-2',
      'ap-south-1',
      'ap-southeast-1',
      'ap-southeast-2',
      'ca-central-1',
      'eu-central-1',
      'eu-north-1',
      'eu-south-1',
      'eu-west-1',
      'eu-west-2',
      'eu-west-3',
      'me-south-1',
      'sa-east-1',
      'us-east-1',
      'us-east-2',
      'us-west-1',
      'us-west-2',
    ]),
    bn = new Set(['cn-north-1', 'cn-northwest-1']),
    Sn = new Set(['us-iso-east-1']),
    _n = new Set(['us-isob-east-1']),
    An = new Set(['us-gov-east-1', 'us-gov-west-1']);
  function En(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        },
      };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  function Cn(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  var Tn = function (e) {
      var t,
        n = new URL(e),
        r = n.hostname,
        o = n.pathname,
        i = n.port,
        s = n.protocol,
        a = n.search;
      return (
        a &&
          (t = (function (e) {
            var t,
              n,
              r = {};
            if ((e = e.replace(/^\?/, '')))
              try {
                for (var o = En(e.split('&')), i = o.next(); !i.done; i = o.next()) {
                  var s = Cn(i.value.split('='), 2),
                    a = s[0],
                    u = s[1],
                    c = void 0 === u ? null : u;
                  (a = decodeURIComponent(a)),
                    c && (c = decodeURIComponent(c)),
                    a in r ? (Array.isArray(r[a]) ? r[a].push(c) : (r[a] = [r[a], c])) : (r[a] = c);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
            return r;
          })(a)),
        { hostname: r, port: i ? parseInt(i) : void 0, protocol: s, path: o, query: t }
      );
    },
    In = {
      apiVersion: '2014-03-28',
      disableHostPrefix: !1,
      logger: {},
      regionInfoProvider: function (e, t) {
        var n = void 0;
        switch (e) {
          case 'af-south-1':
            n = { hostname: 'logs.af-south-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-east-1':
            n = { hostname: 'logs.ap-east-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-northeast-1':
            n = { hostname: 'logs.ap-northeast-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-northeast-2':
            n = { hostname: 'logs.ap-northeast-2.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-south-1':
            n = { hostname: 'logs.ap-south-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-southeast-1':
            n = { hostname: 'logs.ap-southeast-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-southeast-2':
            n = { hostname: 'logs.ap-southeast-2.amazonaws.com', partition: 'aws' };
            break;
          case 'ca-central-1':
            n = { hostname: 'logs.ca-central-1.amazonaws.com', partition: 'aws' };
            break;
          case 'cn-north-1':
            n = { hostname: 'logs.cn-north-1.amazonaws.com.cn', partition: 'aws-cn' };
            break;
          case 'cn-northwest-1':
            n = { hostname: 'logs.cn-northwest-1.amazonaws.com.cn', partition: 'aws-cn' };
            break;
          case 'eu-central-1':
            n = { hostname: 'logs.eu-central-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-north-1':
            n = { hostname: 'logs.eu-north-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-south-1':
            n = { hostname: 'logs.eu-south-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-west-1':
            n = { hostname: 'logs.eu-west-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-west-2':
            n = { hostname: 'logs.eu-west-2.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-west-3':
            n = { hostname: 'logs.eu-west-3.amazonaws.com', partition: 'aws' };
            break;
          case 'fips-us-east-1':
            n = { hostname: 'logs-fips.us-east-1.amazonaws.com', partition: 'aws', signingRegion: 'us-east-1' };
            break;
          case 'fips-us-east-2':
            n = { hostname: 'logs-fips.us-east-2.amazonaws.com', partition: 'aws', signingRegion: 'us-east-2' };
            break;
          case 'fips-us-west-1':
            n = { hostname: 'logs-fips.us-west-1.amazonaws.com', partition: 'aws', signingRegion: 'us-west-1' };
            break;
          case 'fips-us-west-2':
            n = { hostname: 'logs-fips.us-west-2.amazonaws.com', partition: 'aws', signingRegion: 'us-west-2' };
            break;
          case 'me-south-1':
            n = { hostname: 'logs.me-south-1.amazonaws.com', partition: 'aws' };
            break;
          case 'sa-east-1':
            n = { hostname: 'logs.sa-east-1.amazonaws.com', partition: 'aws' };
            break;
          case 'us-east-1':
            n = { hostname: 'logs.us-east-1.amazonaws.com', partition: 'aws' };
            break;
          case 'us-east-2':
            n = { hostname: 'logs.us-east-2.amazonaws.com', partition: 'aws' };
            break;
          case 'us-gov-east-1':
            n = {
              hostname: 'logs.us-gov-east-1.amazonaws.com',
              partition: 'aws-us-gov',
              signingRegion: 'us-gov-east-1',
            };
            break;
          case 'us-gov-west-1':
            n = {
              hostname: 'logs.us-gov-west-1.amazonaws.com',
              partition: 'aws-us-gov',
              signingRegion: 'us-gov-west-1',
            };
            break;
          case 'us-iso-east-1':
            n = { hostname: 'logs.us-iso-east-1.c2s.ic.gov', partition: 'aws-iso' };
            break;
          case 'us-isob-east-1':
            n = { hostname: 'logs.us-isob-east-1.sc2s.sgov.gov', partition: 'aws-iso-b' };
            break;
          case 'us-west-1':
            n = { hostname: 'logs.us-west-1.amazonaws.com', partition: 'aws' };
            break;
          case 'us-west-2':
            n = { hostname: 'logs.us-west-2.amazonaws.com', partition: 'aws' };
            break;
          default:
            wn.has(e) && (n = { hostname: mn.replace('{region}', e), partition: 'aws' }),
              bn.has(e) &&
                (n = { hostname: 'logs.{region}.amazonaws.com.cn'.replace('{region}', e), partition: 'aws-cn' }),
              Sn.has(e) && (n = { hostname: 'logs.{region}.c2s.ic.gov'.replace('{region}', e), partition: 'aws-iso' }),
              _n.has(e) &&
                (n = { hostname: 'logs.{region}.sc2s.sgov.gov'.replace('{region}', e), partition: 'aws-iso-b' }),
              An.has(e) &&
                (n = { hostname: 'logs.{region}.amazonaws.com'.replace('{region}', e), partition: 'aws-us-gov' }),
              void 0 === n && (n = { hostname: mn.replace('{region}', e), partition: 'aws' });
        }
        return Promise.resolve(nt({ signingService: 'logs' }, n));
      },
      serviceId: 'CloudWatch Logs',
      urlParser: Tn,
    },
    Pn = nt(nt({}, In), {
      runtime: 'browser',
      base64Decoder: Pt,
      base64Encoder: kt,
      bodyLengthChecker: dn,
      credentialDefaultProvider: function (e) {
        return function () {
          return Promise.reject(new Error('Credential is missing'));
        };
      },
      defaultUserAgentProvider: yn({ serviceId: In.serviceId, clientVersion: o(st).version }),
      maxAttempts: 3,
      region: Rt('Region is missing'),
      requestHandler: new bt(),
      sha256: at.Sha256,
      streamCollector: Ot,
      utf8Decoder: function (e) {
        return 'function' == typeof TextEncoder
          ? (function (e) {
              return new TextEncoder().encode(e);
            })(e)
          : (function (e) {
              for (var t = [], n = 0, r = e.length; n < r; n++) {
                var o = e.charCodeAt(n);
                if (o < 128) t.push(o);
                else if (o < 2048) t.push((o >> 6) | 192, (63 & o) | 128);
                else if (n + 1 < e.length && 55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                  var i = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n));
                  t.push((i >> 18) | 240, ((i >> 12) & 63) | 128, ((i >> 6) & 63) | 128, (63 & i) | 128);
                } else t.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
              }
              return Uint8Array.from(t);
            })(e);
      },
      utf8Encoder: function (e) {
        return 'function' == typeof TextDecoder
          ? (function (e) {
              return new TextDecoder('utf-8').decode(e);
            })(e)
          : (function (e) {
              for (var t = '', n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (o < 128) t += String.fromCharCode(o);
                else if (192 <= o && o < 224) {
                  var i = e[++n];
                  t += String.fromCharCode(((31 & o) << 6) | (63 & i));
                } else if (240 <= o && o < 365) {
                  var s =
                    '%' +
                    [o, e[++n], e[++n], e[++n]]
                      .map(function (e) {
                        return e.toString(16);
                      })
                      .join('%');
                  t += decodeURIComponent(s);
                } else t += String.fromCharCode(((15 & o) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n]));
              }
              return t;
            })(e);
      },
    });
  var kn = function () {
    return (
      (kn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      kn.apply(this, arguments)
    );
  };
  function On(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function xn(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  var Rn = function (e) {
      var t;
      return kn(kn({}, e), {
        tls: null === (t = e.tls) || void 0 === t || t,
        endpoint: e.endpoint
          ? Nn(e)
          : function () {
              return Un(e);
            },
        isCustomEndpoint: !!e.endpoint,
      });
    },
    Nn = function (e) {
      var t = e.endpoint,
        n = e.urlParser;
      if ('string' == typeof t) {
        var r = Promise.resolve(n(t));
        return function () {
          return r;
        };
      }
      if ('object' == typeof t) {
        var o = Promise.resolve(t);
        return function () {
          return o;
        };
      }
      return t;
    },
    Un = function (e) {
      return On(void 0, void 0, void 0, function () {
        var t, n, r, o, i;
        return xn(this, function (s) {
          switch (s.label) {
            case 0:
              return (t = e.tls), (n = void 0 === t || t), [4, e.region()];
            case 1:
              if (((r = s.sent()), !new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r)))
                throw new Error('Invalid region in client config');
              return [4, e.regionInfoProvider(r)];
            case 2:
              if (!(o = (null !== (i = s.sent()) && void 0 !== i ? i : {}).hostname))
                throw new Error('Cannot resolve hostname from client config');
              return [2, e.urlParser((n ? 'https:' : 'http:') + '//' + o)];
          }
        });
      });
    },
    Ln = function (e) {
      if (!e.region) throw new Error('Region is missing');
      return kn(kn({}, e), { region: Mn(e.region) });
    },
    Mn = function (e) {
      if ('string' == typeof e) {
        var t = Promise.resolve(e);
        return function () {
          return t;
        };
      }
      return e;
    };
  var Dn = function () {
    return (
      (Dn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      Dn.apply(this, arguments)
    );
  };
  function Fn(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function jn(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  var Bn = 'content-length';
  var Hn = {
      step: 'build',
      tags: ['SET_CONTENT_LENGTH', 'CONTENT_LENGTH'],
      name: 'contentLengthMiddleware',
      override: !0,
    },
    Gn = function (e) {
      return {
        applyToStack: function (t) {
          t.add(
            (function (e) {
              var t = this;
              return function (n) {
                return function (r) {
                  return Fn(t, void 0, void 0, function () {
                    var t, o, i, s, a;
                    return jn(this, function (u) {
                      return (
                        (t = r.request),
                        vt.isInstance(t) &&
                          ((o = t.body),
                          (i = t.headers),
                          o &&
                            -1 ===
                              Object.keys(i)
                                .map(function (e) {
                                  return e.toLowerCase();
                                })
                                .indexOf(Bn) &&
                            void 0 !== (s = e(o)) &&
                            (t.headers = Dn(Dn({}, t.headers), (((a = {})['content-length'] = String(s)), a)))),
                        [2, n(Dn(Dn({}, r), { request: t }))]
                      );
                    });
                  });
                };
              };
            })(e.bodyLengthChecker),
            Hn,
          );
        },
      };
    };
  function qn(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function zn(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  var Kn = { name: 'hostHeaderMiddleware', step: 'build', priority: 'low', tags: ['HOST'], override: !0 },
    Vn = function (e) {
      return {
        applyToStack: function (t) {
          t.add(
            (function (e) {
              return function (t) {
                return function (n) {
                  return qn(void 0, void 0, void 0, function () {
                    var r, o;
                    return zn(this, function (i) {
                      return vt.isInstance(n.request)
                        ? ((r = n.request),
                          (void 0 === (o = (e.requestHandler.metadata || {}).handlerProtocol) ? '' : o).indexOf('h2') >=
                            0 && !r.headers[':authority']
                            ? (delete r.headers.host, (r.headers[':authority'] = ''))
                            : r.headers.host || (r.headers.host = r.hostname),
                          [2, t(n)])
                        : [2, t(n)];
                    });
                  });
                };
              };
            })(e),
            Kn,
          );
        },
      };
    };
  function Wn(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function Yn(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  var $n = function () {
      return function (e, t) {
        return function (n) {
          return Wn(void 0, void 0, void 0, function () {
            var r, o, i, s, a, u, c, l, f;
            return Yn(this, function (h) {
              switch (h.label) {
                case 0:
                  return (
                    (r = t.clientName),
                    (o = t.commandName),
                    (i = t.inputFilterSensitiveLog),
                    (s = t.logger),
                    (a = t.outputFilterSensitiveLog),
                    [4, e(n)]
                  );
                case 1:
                  return (
                    (u = h.sent()),
                    s
                      ? ('function' == typeof s.info &&
                          ((c = u.output),
                          (l = c.$metadata),
                          (f = (function (e, t) {
                            var n = {};
                            for (var r in e)
                              Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                              var o = 0;
                              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                t.indexOf(r[o]) < 0 &&
                                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                                  (n[r[o]] = e[r[o]]);
                            }
                            return n;
                          })(c, ['$metadata'])),
                          s.info({ clientName: r, commandName: o, input: i(n.input), output: a(f), metadata: l })),
                        [2, u])
                      : [2, u]
                  );
              }
            });
          });
        };
      };
    },
    Jn = { name: 'loggerMiddleware', tags: ['LOGGER'], step: 'initialize', override: !0 },
    Zn = function (e) {
      return {
        applyToStack: function (e) {
          e.add($n(), Jn);
        },
      };
    };
  var Xn = function () {
    return (
      (Xn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      Xn.apply(this, arguments)
    );
  };
  function Qn(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function er(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function tr(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  var nr = function () {
    return (
      (nr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      nr.apply(this, arguments)
    );
  };
  function rr(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function or(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function ir(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        },
      };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  function sr(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  for (var ar = {}, ur = {}, cr = 0; cr < 256; cr++) {
    var lr = cr.toString(16).toLowerCase();
    1 === lr.length && (lr = '0' + lr), (ar[cr] = lr), (ur[lr] = cr);
  }
  function fr(e) {
    for (var t = '', n = 0; n < e.byteLength; n++) t += ar[e[n]];
    return t;
  }
  var hr = 'X-Amz-Date',
    dr = 'X-Amz-Signature',
    pr = 'X-Amz-Security-Token',
    gr = 'authorization',
    vr = hr.toLowerCase(),
    yr = [gr, vr, 'date'],
    mr = dr.toLowerCase(),
    wr = 'x-amz-content-sha256',
    br = pr.toLowerCase(),
    Sr = {
      authorization: !0,
      'cache-control': !0,
      connection: !0,
      expect: !0,
      from: !0,
      'keep-alive': !0,
      'max-forwards': !0,
      pragma: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      'transfer-encoding': !0,
      upgrade: !0,
      'user-agent': !0,
      'x-amzn-trace-id': !0,
    },
    _r = /^proxy-/,
    Ar = /^sec-/,
    Er = 'AWS4-HMAC-SHA256',
    Cr = 'AWS4-HMAC-SHA256-PAYLOAD',
    Tr = 'aws4_request',
    Ir = {},
    Pr = [];
  function kr(e, t, n) {
    return e + '/' + t + '/' + n + '/' + Tr;
  }
  function Or(e, t, n) {
    var r = new e(t);
    return r.update(n), r.digest();
  }
  function xr(e, t, n) {
    var r,
      o,
      i = e.headers,
      s = {};
    try {
      for (var a = ir(Object.keys(i).sort()), u = a.next(); !u.done; u = a.next()) {
        var c = u.value,
          l = c.toLowerCase();
        ((l in Sr || (null == t ? void 0 : t.has(l)) || _r.test(l) || Ar.test(l)) && (!n || (n && !n.has(l)))) ||
          (s[l] = i[c].trim().replace(/\s+/g, ' '));
      }
    } catch (e) {
      r = { error: e };
    } finally {
      try {
        u && !u.done && (o = a.return) && o.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
    return s;
  }
  function Rr(e, t) {
    var n = e.headers,
      r = e.body;
    return rr(this, void 0, void 0, function () {
      var e, o, i, s, a, u, c;
      return or(this, function (l) {
        switch (l.label) {
          case 0:
            try {
              for (e = ir(Object.keys(n)), o = e.next(); !o.done; o = e.next())
                if ((i = o.value).toLowerCase() === wr) return [2, n[i]];
            } catch (e) {
              u = { error: e };
            } finally {
              try {
                o && !o.done && (c = e.return) && c.call(e);
              } finally {
                if (u) throw u.error;
              }
            }
            return null != r ? [3, 1] : [2, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'];
          case 1:
            return 'string' == typeof r ||
              ArrayBuffer.isView(r) ||
              ((f = r),
              ('function' == typeof ArrayBuffer && f instanceof ArrayBuffer) ||
                '[object ArrayBuffer]' === Object.prototype.toString.call(f))
              ? ((s = new t()).update(r), (a = fr), [4, s.digest()])
              : [3, 3];
          case 2:
            return [2, a.apply(void 0, [l.sent()])];
          case 3:
            return [2, 'UNSIGNED-PAYLOAD'];
        }
        var f;
      });
    });
  }
  function Nr(e) {
    var t = e.headers,
      n = e.query,
      r = (function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        }
        return n;
      })(e, ['headers', 'query']);
    return nr(nr({}, r), { headers: nr({}, t), query: n ? Ur(n) : void 0 });
  }
  function Ur(e) {
    return Object.keys(e).reduce(function (t, n) {
      var r,
        o = e[n];
      return nr(
        nr({}, t),
        (((r = {})[n] = Array.isArray(o)
          ? (function () {
              for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(sr(arguments[t]));
              return e;
            })(o)
          : o),
        r),
      );
    }, {});
  }
  function Lr(e) {
    var t, n;
    e = 'function' == typeof e.clone ? e.clone() : Nr(e);
    try {
      for (var r = ir(Object.keys(e.headers)), o = r.next(); !o.done; o = r.next()) {
        var i = o.value;
        yr.indexOf(i.toLowerCase()) > -1 && delete e.headers[i];
      }
    } catch (e) {
      t = { error: e };
    } finally {
      try {
        o && !o.done && (n = r.return) && n.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return e;
  }
  function Mr(e) {
    return (function (e) {
      if ('number' == typeof e) return new Date(1e3 * e);
      if ('string' == typeof e) return Number(e) ? new Date(1e3 * Number(e)) : new Date(e);
      return e;
    })(e)
      .toISOString()
      .replace(/\.\d{3}Z$/, 'Z');
  }
  var Dr = (function () {
      function e(e) {
        var t = e.applyChecksum,
          n = e.credentials,
          r = e.region,
          o = e.service,
          i = e.sha256,
          s = e.uriEscapePath,
          a = void 0 === s || s;
        (this.service = o),
          (this.sha256 = i),
          (this.uriEscapePath = a),
          (this.applyChecksum = 'boolean' != typeof t || t),
          (this.regionProvider = Br(r)),
          (this.credentialProvider = Hr(n));
      }
      return (
        (e.prototype.presign = function (e, t) {
          return (
            void 0 === t && (t = {}),
            rr(this, void 0, void 0, function () {
              var n, r, o, i, s, a, u, c, l, f, h, d, p, g, v, y, m, w, b, S, _, A, E, C;
              return or(this, function (T) {
                switch (T.label) {
                  case 0:
                    return (
                      (n = t.signingDate),
                      (r = void 0 === n ? new Date() : n),
                      (o = t.expiresIn),
                      (i = void 0 === o ? 3600 : o),
                      (s = t.unsignableHeaders),
                      (a = t.unhoistableHeaders),
                      (u = t.signableHeaders),
                      (c = t.signingRegion),
                      (l = t.signingService),
                      [4, this.credentialProvider()]
                    );
                  case 1:
                    return (f = T.sent()), null == c ? [3, 2] : ((d = c), [3, 4]);
                  case 2:
                    return [4, this.regionProvider()];
                  case 3:
                    (d = T.sent()), (T.label = 4);
                  case 4:
                    return (
                      (h = d),
                      (p = Fr(r)),
                      (g = p.longDate),
                      (v = p.shortDate),
                      i > 604800
                        ? [
                            2,
                            Promise.reject(
                              'Signature version 4 presigned URLs must have an expiration date less than one week in the future',
                            ),
                          ]
                        : ((y = kr(v, h, null != l ? l : this.service)),
                          (m = (function (e, t) {
                            var n, r, o;
                            void 0 === t && (t = {});
                            var i = 'function' == typeof e.clone ? e.clone() : Nr(e),
                              s = i.headers,
                              a = i.query,
                              u = void 0 === a ? {} : a;
                            try {
                              for (var c = ir(Object.keys(s)), l = c.next(); !l.done; l = c.next()) {
                                var f = l.value,
                                  h = f.toLowerCase();
                                'x-amz-' !== h.substr(0, 6) ||
                                  (null === (o = t.unhoistableHeaders) || void 0 === o ? void 0 : o.has(h)) ||
                                  ((u[f] = s[f]), delete s[f]);
                              }
                            } catch (e) {
                              n = { error: e };
                            } finally {
                              try {
                                l && !l.done && (r = c.return) && r.call(c);
                              } finally {
                                if (n) throw n.error;
                              }
                            }
                            return nr(nr({}, e), { headers: s, query: u });
                          })(Lr(e), { unhoistableHeaders: a })),
                          f.sessionToken && (m.query['X-Amz-Security-Token'] = f.sessionToken),
                          (m.query['X-Amz-Algorithm'] = Er),
                          (m.query['X-Amz-Credential'] = f.accessKeyId + '/' + y),
                          (m.query['X-Amz-Date'] = g),
                          (m.query['X-Amz-Expires'] = i.toString(10)),
                          (w = xr(m, s, u)),
                          (m.query['X-Amz-SignedHeaders'] = jr(w)),
                          (b = m.query),
                          (S = dr),
                          (_ = this.getSignature),
                          (A = [g, y, this.getSigningKey(f, h, v, l)]),
                          (E = this.createCanonicalRequest),
                          (C = [m, w]),
                          [4, Rr(e, this.sha256)])
                    );
                  case 5:
                    return [4, _.apply(this, A.concat([E.apply(this, C.concat([T.sent()]))]))];
                  case 6:
                    return (b[S] = T.sent()), [2, m];
                }
              });
            })
          );
        }),
        (e.prototype.sign = function (e, t) {
          return rr(this, void 0, void 0, function () {
            return or(this, function (n) {
              return 'string' == typeof e
                ? [2, this.signString(e, t)]
                : e.headers && e.payload
                ? [2, this.signEvent(e, t)]
                : [2, this.signRequest(e, t)];
            });
          });
        }),
        (e.prototype.signEvent = function (e, t) {
          var n = e.headers,
            r = e.payload,
            o = t.signingDate,
            i = void 0 === o ? new Date() : o,
            s = t.priorSignature,
            a = t.signingRegion,
            u = t.signingService;
          return rr(this, void 0, void 0, function () {
            var e, t, o, c, l, f, h, d, p, g, v;
            return or(this, function (y) {
              switch (y.label) {
                case 0:
                  return null == a ? [3, 1] : ((t = a), [3, 3]);
                case 1:
                  return [4, this.regionProvider()];
                case 2:
                  (t = y.sent()), (y.label = 3);
                case 3:
                  return (
                    (e = t),
                    (o = Fr(i)),
                    (c = o.shortDate),
                    (l = o.longDate),
                    (f = kr(c, e, null != u ? u : this.service)),
                    [4, Rr({ headers: {}, body: r }, this.sha256)]
                  );
                case 4:
                  return (h = y.sent()), (d = new this.sha256()).update(n), (g = fr), [4, d.digest()];
                case 5:
                  return (
                    (p = g.apply(void 0, [y.sent()])),
                    (v = [Cr, l, f, s, p, h].join('\n')),
                    [2, this.signString(v, { signingDate: i, signingRegion: e, signingService: u })]
                  );
              }
            });
          });
        }),
        (e.prototype.signString = function (e, t) {
          var n = void 0 === t ? {} : t,
            r = n.signingDate,
            o = void 0 === r ? new Date() : r,
            i = n.signingRegion,
            s = n.signingService;
          return rr(this, void 0, void 0, function () {
            var t, n, r, a, u, c, l, f;
            return or(this, function (h) {
              switch (h.label) {
                case 0:
                  return [4, this.credentialProvider()];
                case 1:
                  return (t = h.sent()), null == i ? [3, 2] : ((r = i), [3, 4]);
                case 2:
                  return [4, this.regionProvider()];
                case 3:
                  (r = h.sent()), (h.label = 4);
                case 4:
                  return (
                    (n = r), (a = Fr(o).shortDate), (l = (c = this.sha256).bind), [4, this.getSigningKey(t, n, a, s)]
                  );
                case 5:
                  return (u = new (l.apply(c, [void 0, h.sent()]))()).update(e), (f = fr), [4, u.digest()];
                case 6:
                  return [2, f.apply(void 0, [h.sent()])];
              }
            });
          });
        }),
        (e.prototype.signRequest = function (e, t) {
          var n = void 0 === t ? {} : t,
            r = n.signingDate,
            o = void 0 === r ? new Date() : r,
            i = n.signableHeaders,
            s = n.unsignableHeaders,
            a = n.signingRegion,
            u = n.signingService;
          return rr(this, void 0, void 0, function () {
            var t, n, r, c, l, f, h, d, p, g, v;
            return or(this, function (y) {
              switch (y.label) {
                case 0:
                  return [4, this.credentialProvider()];
                case 1:
                  return (t = y.sent()), null == a ? [3, 2] : ((r = a), [3, 4]);
                case 2:
                  return [4, this.regionProvider()];
                case 3:
                  (r = y.sent()), (y.label = 4);
                case 4:
                  return (
                    (n = r),
                    (c = Lr(e)),
                    (l = Fr(o)),
                    (f = l.longDate),
                    (h = l.shortDate),
                    (d = kr(h, n, null != u ? u : this.service)),
                    (c.headers[vr] = f),
                    t.sessionToken && (c.headers[br] = t.sessionToken),
                    [4, Rr(c, this.sha256)]
                  );
                case 5:
                  return (
                    (p = y.sent()),
                    !(function (e, t) {
                      var n, r;
                      e = e.toLowerCase();
                      try {
                        for (var o = ir(Object.keys(t)), i = o.next(); !i.done; i = o.next())
                          if (e === i.value.toLowerCase()) return !0;
                      } catch (e) {
                        n = { error: e };
                      } finally {
                        try {
                          i && !i.done && (r = o.return) && r.call(o);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                      return !1;
                    })(wr, c.headers) &&
                      this.applyChecksum &&
                      (c.headers['x-amz-content-sha256'] = p),
                    (g = xr(c, s, i)),
                    [4, this.getSignature(f, d, this.getSigningKey(t, n, h, u), this.createCanonicalRequest(c, g, p))]
                  );
                case 6:
                  return (
                    (v = y.sent()),
                    (c.headers.authorization =
                      'AWS4-HMAC-SHA256 Credential=' +
                      t.accessKeyId +
                      '/' +
                      d +
                      ', SignedHeaders=' +
                      jr(g) +
                      ', Signature=' +
                      v),
                    [2, c]
                  );
              }
            });
          });
        }),
        (e.prototype.createCanonicalRequest = function (e, t, n) {
          var r = Object.keys(t).sort();
          return (
            e.method +
            '\n' +
            this.getCanonicalPath(e) +
            '\n' +
            (function (e) {
              var t,
                n,
                r = e.query,
                o = void 0 === r ? {} : r,
                i = [],
                s = {},
                a = function (e) {
                  if (e.toLowerCase() === mr) return 'continue';
                  i.push(e);
                  var t = o[e];
                  'string' == typeof t
                    ? (s[e] = mt(e) + '=' + mt(t))
                    : Array.isArray(t) &&
                      (s[e] = t
                        .slice(0)
                        .sort()
                        .reduce(function (t, n) {
                          return t.concat([mt(e) + '=' + mt(n)]);
                        }, [])
                        .join('&'));
                };
              try {
                for (var u = ir(Object.keys(o).sort()), c = u.next(); !c.done; c = u.next()) a(c.value);
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  c && !c.done && (n = u.return) && n.call(u);
                } finally {
                  if (t) throw t.error;
                }
              }
              return i
                .map(function (e) {
                  return s[e];
                })
                .filter(function (e) {
                  return e;
                })
                .join('&');
            })(e) +
            '\n' +
            r
              .map(function (e) {
                return e + ':' + t[e];
              })
              .join('\n') +
            '\n\n' +
            r.join(';') +
            '\n' +
            n
          );
        }),
        (e.prototype.createStringToSign = function (e, t, n) {
          return rr(this, void 0, void 0, function () {
            var r, o;
            return or(this, function (i) {
              switch (i.label) {
                case 0:
                  return (r = new this.sha256()).update(n), [4, r.digest()];
                case 1:
                  return (o = i.sent()), [2, 'AWS4-HMAC-SHA256\n' + e + '\n' + t + '\n' + fr(o)];
              }
            });
          });
        }),
        (e.prototype.getCanonicalPath = function (e) {
          var t = e.path;
          return this.uriEscapePath ? '/' + encodeURIComponent(t.replace(/^\//, '')).replace(/%2F/g, '/') : t;
        }),
        (e.prototype.getSignature = function (e, t, n, r) {
          return rr(this, void 0, void 0, function () {
            var o, i, s, a, u;
            return or(this, function (c) {
              switch (c.label) {
                case 0:
                  return [4, this.createStringToSign(e, t, r)];
                case 1:
                  return (o = c.sent()), (a = (s = this.sha256).bind), [4, n];
                case 2:
                  return (i = new (a.apply(s, [void 0, c.sent()]))()).update(o), (u = fr), [4, i.digest()];
                case 3:
                  return [2, u.apply(void 0, [c.sent()])];
              }
            });
          });
        }),
        (e.prototype.getSigningKey = function (e, t, n, r) {
          return (function (e, t, n, r, o) {
            return rr(void 0, void 0, void 0, function () {
              var i, s, a, u, c, l, f, h, d;
              return or(this, function (p) {
                switch (p.label) {
                  case 0:
                    return [4, Or(e, t.secretAccessKey, t.accessKeyId)];
                  case 1:
                    if (((i = p.sent()), (s = n + ':' + r + ':' + o + ':' + fr(i) + ':' + t.sessionToken) in Ir))
                      return [2, Ir[s]];
                    for (Pr.push(s); Pr.length > 50; ) delete Ir[Pr.shift()];
                    (a = 'AWS4' + t.secretAccessKey), (p.label = 2);
                  case 2:
                    p.trys.push([2, 7, 8, 9]), (u = ir([n, r, o, Tr])), (c = u.next()), (p.label = 3);
                  case 3:
                    return c.done ? [3, 6] : ((l = c.value), [4, Or(e, a, l)]);
                  case 4:
                    (a = p.sent()), (p.label = 5);
                  case 5:
                    return (c = u.next()), [3, 3];
                  case 6:
                    return [3, 9];
                  case 7:
                    return (f = p.sent()), (h = { error: f }), [3, 9];
                  case 8:
                    try {
                      c && !c.done && (d = u.return) && d.call(u);
                    } finally {
                      if (h) throw h.error;
                    }
                    return [7];
                  case 9:
                    return [2, (Ir[s] = a)];
                }
              });
            });
          })(this.sha256, e, n, t, r || this.service);
        }),
        e
      );
    })(),
    Fr = function (e) {
      var t = Mr(e).replace(/[\-:]/g, '');
      return { longDate: t, shortDate: t.substr(0, 8) };
    },
    jr = function (e) {
      return Object.keys(e).sort().join(';');
    },
    Br = function (e) {
      if ('string' == typeof e) {
        var t = Promise.resolve(e);
        return function () {
          return t;
        };
      }
      return e;
    },
    Hr = function (e) {
      if ('object' == typeof e) {
        var t = Promise.resolve(e);
        return function () {
          return t;
        };
      }
      return e;
    };
  function Gr(e) {
    var t,
      n = this,
      r = qr(e.credentials || e.credentialDefaultProvider(e)),
      o = e.signingEscapePath,
      i = void 0 === o || o,
      s = e.systemClockOffset,
      a = void 0 === s ? e.systemClockOffset || 0 : s,
      u = e.sha256;
    return (
      (t = e.signer
        ? qr(e.signer)
        : function () {
            return qr(e.region)()
              .then(function (t) {
                return Qn(n, void 0, void 0, function () {
                  return er(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.regionInfoProvider(t)];
                      case 1:
                        return [2, [n.sent() || {}, t]];
                    }
                  });
                });
              })
              .then(function (t) {
                var n = tr(t, 2),
                  o = n[0],
                  s = n[1],
                  a = o.signingRegion,
                  c = o.signingService;
                return (
                  (e.signingRegion = e.signingRegion || a || s),
                  (e.signingName = e.signingName || c || e.serviceId),
                  new Dr({
                    credentials: r,
                    region: e.signingRegion,
                    service: e.signingName,
                    sha256: u,
                    uriEscapePath: i,
                  })
                );
              });
          }),
      Xn(Xn({}, e), { systemClockOffset: a, signingEscapePath: i, credentials: r, signer: t })
    );
  }
  function qr(e) {
    if ('object' == typeof e) {
      var t = Promise.resolve(e);
      return function () {
        return t;
      };
    }
    return e;
  }
  var zr = function (e) {
    return new Date(Date.now() + e);
  };
  function Kr(e) {
    return function (t, n) {
      return function (r) {
        return Qn(this, void 0, void 0, function () {
          var o, i, s, a, u, c, l, f, h;
          return er(this, function (d) {
            switch (d.label) {
              case 0:
                return vt.isInstance(r.request)
                  ? 'function' != typeof e.signer
                    ? [3, 2]
                    : [4, e.signer()]
                  : [2, t(r)];
              case 1:
                return (i = d.sent()), [3, 3];
              case 2:
                (i = e.signer), (d.label = 3);
              case 3:
                return (
                  (o = i),
                  (a = t),
                  (u = [Xn({}, r)]),
                  (h = {}),
                  [
                    4,
                    o.sign(r.request, {
                      signingDate: new Date(Date.now() + e.systemClockOffset),
                      signingRegion: n.signing_region,
                      signingService: n.signing_service,
                    }),
                  ]
                );
              case 4:
                return [4, a.apply(void 0, [Xn.apply(void 0, u.concat([((h.request = d.sent()), h)]))])];
              case 5:
                return (
                  (s = d.sent()),
                  (c = s.response.headers),
                  (l = c && (c.date || c.Date)) &&
                    ((f = Date.parse(l)),
                    (p = f),
                    (g = e.systemClockOffset),
                    Math.abs(zr(g).getTime() - p) >= 3e5 && (e.systemClockOffset = f - Date.now())),
                  [2, s]
                );
            }
            var p, g;
          });
        });
      };
    };
  }
  var Vr = {
    name: 'awsAuthMiddleware',
    tags: ['SIGNATURE', 'AWSAUTH'],
    relation: 'after',
    toMiddleware: 'retryMiddleware',
    override: !0,
  };
  var Wr = function () {
    return (
      (Wr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      Wr.apply(this, arguments)
    );
  };
  function Yr(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function $r(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function Jr(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  function Zr() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Jr(arguments[t]));
    return e;
  }
  function Xr(e) {
    return Wr(Wr({}, e), {
      customUserAgent: 'string' == typeof e.customUserAgent ? [[e.customUserAgent]] : e.customUserAgent,
    });
  }
  var Qr = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
    eo = function (e) {
      var t = Jr(e, 2),
        n = t[0],
        r = t[1],
        o = n.indexOf('/'),
        i = n.substring(0, o),
        s = n.substring(o + 1);
      return (
        'api' === i && (s = s.toLowerCase()),
        [i, s, r]
          .filter(function (e) {
            return e && e.length > 0;
          })
          .map(function (e) {
            return null == e ? void 0 : e.replace(Qr, '_');
          })
          .join('/')
      );
    },
    to = {
      name: 'getUserAgentMiddleware',
      step: 'build',
      priority: 'low',
      tags: ['SET_USER_AGENT', 'USER_AGENT'],
      override: !0,
    },
    no = function (e) {
      return {
        applyToStack: function (t) {
          var n;
          t.add(
            ((n = e),
            function (e, t) {
              return function (r) {
                return Yr(void 0, void 0, void 0, function () {
                  var o, i, s, a, u, c, l, f;
                  return $r(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return (
                          (o = r.request),
                          vt.isInstance(o)
                            ? ((i = o.headers),
                              (s =
                                (null === (l = null == t ? void 0 : t.userAgent) || void 0 === l
                                  ? void 0
                                  : l.map(eo)) || []),
                              [4, n.defaultUserAgentProvider()])
                            : [2, e(r)]
                        );
                      case 1:
                        return (
                          (a = h.sent().map(eo)),
                          (u =
                            (null === (f = null == n ? void 0 : n.customUserAgent) || void 0 === f
                              ? void 0
                              : f.map(eo)) || []),
                          (i['x-amz-user-agent'] = Zr(a, s, u).join(' ')),
                          (c = Zr(
                            a.filter(function (e) {
                              return e.startsWith('aws-sdk-');
                            }),
                            u,
                          ).join(' ')),
                          'browser' !== n.runtime &&
                            c &&
                            (i['user-agent'] = i['user-agent'] ? i['user-agent'] + ' ' + c : c),
                          [2, e(Wr(Wr({}, r), { request: o }))]
                        );
                    }
                  });
                });
              };
            }),
            to,
          );
        },
      };
    };
  var ro = function () {
    return (
      (ro =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      ro.apply(this, arguments)
    );
  };
  function oo(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        },
      };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  function io(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  function so() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(io(arguments[t]));
    return e;
  }
  var ao = function () {
      var e = [],
        t = [],
        n = new Set(),
        r = function (n) {
          return (
            e.forEach(function (e) {
              n.add(e.middleware, ro({}, e));
            }),
            t.forEach(function (e) {
              n.addRelativeTo(e.middleware, ro({}, e));
            }),
            n
          );
        },
        o = function (e) {
          var t = [];
          return (
            e.before.forEach(function (e) {
              0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push.apply(t, so(o(e)));
            }),
            t.push(e),
            e.after.reverse().forEach(function (e) {
              0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push.apply(t, so(o(e)));
            }),
            t
          );
        },
        i = function () {
          var n,
            r = [],
            i = [],
            s = {};
          return (
            e.forEach(function (e) {
              var t = ro(ro({}, e), { before: [], after: [] });
              t.name && (s[t.name] = t), r.push(t);
            }),
            t.forEach(function (e) {
              var t = ro(ro({}, e), { before: [], after: [] });
              t.name && (s[t.name] = t), i.push(t);
            }),
            i.forEach(function (e) {
              if (e.toMiddleware) {
                var t = s[e.toMiddleware];
                if (void 0 === t)
                  throw new Error(
                    e.toMiddleware +
                      ' is not found when adding ' +
                      (e.name || 'anonymous') +
                      ' middleware ' +
                      e.relation +
                      ' ' +
                      e.toMiddleware,
                  );
                'after' === e.relation && t.after.push(e), 'before' === e.relation && t.before.push(e);
              }
            }),
            ((n = r),
            n.sort(function (e, t) {
              return uo[t.step] - uo[e.step] || co[t.priority || 'normal'] - co[e.priority || 'normal'];
            }))
              .map(o)
              .reduce(function (e, t) {
                return e.push.apply(e, so(t)), e;
              }, [])
              .map(function (e) {
                return e.middleware;
              })
          );
        },
        s = {
          add: function (t, r) {
            void 0 === r && (r = {});
            var o = r.name,
              i = r.override,
              s = ro({ step: 'initialize', priority: 'normal', middleware: t }, r);
            if (o) {
              if (n.has(o)) {
                if (!i) throw new Error("Duplicate middleware name '" + o + "'");
                var a = e.findIndex(function (e) {
                    return e.name === o;
                  }),
                  u = e[a];
                if (u.step !== s.step || u.priority !== s.priority)
                  throw new Error(
                    '"' +
                      o +
                      '" middleware with ' +
                      u.priority +
                      ' priority in ' +
                      u.step +
                      ' step cannot be overridden by same-name middleware with ' +
                      s.priority +
                      ' priority in ' +
                      s.step +
                      ' step.',
                  );
                e.splice(a, 1);
              }
              n.add(o);
            }
            e.push(s);
          },
          addRelativeTo: function (e, r) {
            var o = r.name,
              i = r.override,
              s = ro({ middleware: e }, r);
            if (o) {
              if (n.has(o)) {
                if (!i) throw new Error("Duplicate middleware name '" + o + "'");
                var a = t.findIndex(function (e) {
                    return e.name === o;
                  }),
                  u = t[a];
                if (u.toMiddleware !== s.toMiddleware || u.relation !== s.relation)
                  throw new Error(
                    '"' +
                      o +
                      '" middleware ' +
                      u.relation +
                      ' "' +
                      u.toMiddleware +
                      '" middleware cannot be overridden by same-name middleware ' +
                      s.relation +
                      ' "' +
                      s.toMiddleware +
                      '" middleware.',
                  );
                t.splice(a, 1);
              }
              n.add(o);
            }
            t.push(s);
          },
          clone: function () {
            return r(ao());
          },
          use: function (e) {
            e.applyToStack(s);
          },
          remove: function (r) {
            return 'string' == typeof r
              ? (function (r) {
                  var o = !1,
                    i = function (e) {
                      return !e.name || e.name !== r || ((o = !0), n.delete(r), !1);
                    };
                  return (e = e.filter(i)), (t = t.filter(i)), o;
                })(r)
              : (function (r) {
                  var o = !1,
                    i = function (e) {
                      return e.middleware !== r || ((o = !0), e.name && n.delete(e.name), !1);
                    };
                  return (e = e.filter(i)), (t = t.filter(i)), o;
                })(r);
          },
          removeByTag: function (r) {
            var o = !1,
              i = function (e) {
                var t = e.tags,
                  i = e.name;
                return !t || !t.includes(r) || (i && n.delete(i), (o = !0), !1);
              };
            return (e = e.filter(i)), (t = t.filter(i)), o;
          },
          concat: function (e) {
            var t = r(ao());
            return t.use(e), t;
          },
          applyToStack: r,
          resolve: function (e, t) {
            var n, r;
            try {
              for (var o = oo(i().reverse()), s = o.next(); !s.done; s = o.next()) {
                e = (0, s.value)(e, t);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return e;
          },
        };
      return s;
    },
    uo = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 },
    co = { high: 3, normal: 2, low: 1 },
    lo = (function () {
      function e(e) {
        (this.middlewareStack = ao()), (this.config = e);
      }
      return (
        (e.prototype.send = function (e, t, n) {
          var r = 'function' != typeof t ? t : void 0,
            o = 'function' == typeof t ? t : n,
            i = e.resolveMiddleware(this.middlewareStack, this.config, r);
          if (!o)
            return i(e).then(function (e) {
              return e.output;
            });
          i(e)
            .then(
              function (e) {
                return o(null, e.output);
              },
              function (e) {
                return o(e);
              },
            )
            .catch(function () {});
        }),
        (e.prototype.destroy = function () {
          this.config.requestHandler.destroy && this.config.requestHandler.destroy();
        }),
        e
      );
    })(),
    fo = function () {
      this.middlewareStack = ao();
    };
  var ho = function (e, t) {
    return (ho =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(e, t);
  };
  function po(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  function go() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(po(arguments[t]));
    return e;
  }
  var vo = function () {
    var e = Object.getPrototypeOf(this).constructor,
      t = Function.bind.apply(String, go([null], arguments)),
      n = new t();
    return Object.setPrototypeOf(n, e.prototype), n;
  };
  (vo.prototype = Object.create(String.prototype, {
    constructor: { value: vo, enumerable: !1, writable: !0, configurable: !0 },
  })),
    Object.setPrototypeOf(vo, String);
  !(function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    (function (e, t) {
      function n() {
        this.constructor = e;
      }
      ho(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    })(t, e),
      (t.prototype.deserializeJSON = function () {
        return JSON.parse(e.prototype.toString.call(this));
      }),
      (t.prototype.toJSON = function () {
        return e.prototype.toString.call(this);
      }),
      (t.fromObject = function (e) {
        return e instanceof t ? e : new t(e instanceof String || 'string' == typeof e ? e : JSON.stringify(e));
      });
  })(vo);
  var yo,
    mo,
    wo,
    bo,
    So,
    _o,
    Ao,
    Eo,
    Co,
    To,
    Io,
    Po,
    ko,
    Oo,
    xo,
    Ro,
    No,
    Uo,
    Lo,
    Mo,
    Do,
    Fo,
    jo,
    Bo,
    Ho,
    Go,
    qo,
    zo,
    Ko,
    Vo,
    Wo,
    Yo,
    $o,
    Jo,
    Zo,
    Xo,
    Qo,
    ei,
    ti,
    ni,
    ri,
    oi,
    ii,
    si,
    ai,
    ui,
    ci,
    li,
    fi,
    hi,
    di,
    pi,
    gi,
    vi,
    yi,
    mi,
    wi,
    bi,
    Si,
    _i,
    Ai,
    Ei,
    Ci,
    Ti,
    Ii,
    Pi,
    ki,
    Oi,
    xi,
    Ri,
    Ni,
    Ui,
    Li,
    Mi,
    Di,
    Fi,
    ji,
    Bi,
    Hi,
    Gi,
    qi,
    zi,
    Ki,
    Vi,
    Wi,
    Yi,
    $i,
    Ji,
    Zi,
    Xi,
    Qi,
    es,
    ts,
    ns,
    rs,
    os,
    is,
    ss,
    as,
    us,
    cs,
    ls,
    fs,
    hs,
    ds = (function (e) {
      function t(t) {
        var n,
          r = this,
          o = nt(nt({}, Pn), t),
          i = Ln(o),
          s = Gr(Rn(i)),
          a = Xr(fn(s));
        return (
          ((r = e.call(this, a) || this).config = a),
          r.middlewareStack.use(
            ((n = r.config),
            {
              applyToStack: function (e) {
                e.addRelativeTo(Kr(n), Vr);
              },
            }),
          ),
          r.middlewareStack.use(Bt(r.config)),
          r.middlewareStack.use(Gn(r.config)),
          r.middlewareStack.use(Vn(r.config)),
          r.middlewareStack.use(Zn(r.config)),
          r.middlewareStack.use(no(r.config)),
          r
        );
      }
      return (
        tt(t, e),
        (t.prototype.destroy = function () {
          e.prototype.destroy.call(this);
        }),
        t
      );
    })(lo);
  !(function (e) {
    e.filterSensitiveLog = function (e) {
      return nt({}, e);
    };
  })(yo || (yo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(mo || (mo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(wo || (wo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(bo || (bo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(So || (So = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(_o || (_o = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ao || (Ao = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Eo || (Eo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Co || (Co = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(To || (To = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Io || (Io = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Po || (Po = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ko || (ko = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Oo || (Oo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(xo || (xo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ro || (Ro = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(No || (No = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Uo || (Uo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Lo || (Lo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Mo || (Mo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Do || (Do = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Fo || (Fo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(jo || (jo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Bo || (Bo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ho || (Ho = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Go || (Go = {})),
    (function (e) {
      (e.CANCELLED = 'CANCELLED'),
        (e.COMPLETED = 'COMPLETED'),
        (e.FAILED = 'FAILED'),
        (e.PENDING = 'PENDING'),
        (e.PENDING_CANCEL = 'PENDING_CANCEL'),
        (e.RUNNING = 'RUNNING');
    })(qo || (qo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(zo || (zo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ko || (Ko = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Vo || (Vo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Wo || (Wo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Yo || (Yo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })($o || ($o = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Jo || (Jo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Zo || (Zo = {})),
    (function (e) {
      (e.LastEventTime = 'LastEventTime'), (e.LogStreamName = 'LogStreamName');
    })(Xo || (Xo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Qo || (Qo = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ei || (ei = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ti || (ti = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ni || (ni = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ri || (ri = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(oi || (oi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ii || (ii = {})),
    (function (e) {
      (e.Cancelled = 'Cancelled'),
        (e.Complete = 'Complete'),
        (e.Failed = 'Failed'),
        (e.Running = 'Running'),
        (e.Scheduled = 'Scheduled');
    })(si || (si = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ai || (ai = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ui || (ui = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ci || (ci = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(li || (li = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(fi || (fi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(hi || (hi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(di || (di = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(pi || (pi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(gi || (gi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(vi || (vi = {})),
    (function (e) {
      (e.ByLogStream = 'ByLogStream'), (e.Random = 'Random');
    })(yi || (yi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(mi || (mi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(wi || (wi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(bi || (bi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Si || (Si = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(_i || (_i = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ai || (Ai = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ei || (Ei = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ci || (Ci = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ti || (Ti = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ii || (Ii = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Pi || (Pi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ki || (ki = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Oi || (Oi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(xi || (xi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ri || (Ri = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ni || (Ni = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ui || (Ui = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Li || (Li = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Mi || (Mi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Di || (Di = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Fi || (Fi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ji || (ji = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Bi || (Bi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Hi || (Hi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Gi || (Gi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(qi || (qi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(zi || (zi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ki || (Ki = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Vi || (Vi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Wi || (Wi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Yi || (Yi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })($i || ($i = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ji || (Ji = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Zi || (Zi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Xi || (Xi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Qi || (Qi = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(es || (es = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ts || (ts = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ns || (ns = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(rs || (rs = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(os || (os = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(is || (is = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ss || (ss = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(as || (as = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(us || (us = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(cs || (cs = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ls || (ls = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(fs || (fs = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(hs || (hs = {}));
  var ps = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f, h, d;
        return ot(this, function (p) {
          switch (p.label) {
            case 0:
              return (r = [nt({}, e)]), (d = {}), [4, ra(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((d.body = p.sent()), d)]))),
                (i = 'UnknownError'),
                (i = oa(e, n.body)),
                i)
              ) {
                case 'InvalidParameterException':
                case 'com.amazonaws.cloudwatchlogs#InvalidParameterException':
                  return [3, 2];
                case 'LimitExceededException':
                case 'com.amazonaws.cloudwatchlogs#LimitExceededException':
                  return [3, 4];
                case 'OperationAbortedException':
                case 'com.amazonaws.cloudwatchlogs#OperationAbortedException':
                  return [3, 6];
                case 'ResourceAlreadyExistsException':
                case 'com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException':
                  return [3, 8];
                case 'ServiceUnavailableException':
                case 'com.amazonaws.cloudwatchlogs#ServiceUnavailableException':
                  return [3, 10];
              }
              return [3, 12];
            case 2:
              return (s = [{}]), [4, Ss(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([p.sent()])), { name: i, $metadata: ea(e) }])), [3, 13]
              );
            case 4:
              return (a = [{}]), [4, As(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([p.sent()])), { name: i, $metadata: ea(e) }])), [3, 13]
              );
            case 6:
              return (u = [{}]), [4, Es(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([p.sent()])), { name: i, $metadata: ea(e) }])), [3, 13]
              );
            case 8:
              return (c = [{}]), [4, Cs(n, t)];
            case 9:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, c.concat([p.sent()])), { name: i, $metadata: ea(e) }])), [3, 13]
              );
            case 10:
              return (l = [{}]), [4, Is(n, t)];
            case 11:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, l.concat([p.sent()])), { name: i, $metadata: ea(e) }])), [3, 13]
              );
            case 12:
              (f = n.body),
                (i = f.code || f.Code || i),
                (o = nt(nt({}, f), {
                  name: '' + i,
                  message: f.message || f.Message || i,
                  $fault: 'client',
                  $metadata: ea(e),
                })),
                (p.label = 13);
            case 13:
              return (
                (h = o.message || o.Message || i),
                (o.message = h),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(h), o))]
              );
          }
        });
      });
    },
    gs = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f, h;
        return ot(this, function (d) {
          switch (d.label) {
            case 0:
              return (r = [nt({}, e)]), (h = {}), [4, ra(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((h.body = d.sent()), h)]))),
                (i = 'UnknownError'),
                (i = oa(e, n.body)),
                i)
              ) {
                case 'InvalidParameterException':
                case 'com.amazonaws.cloudwatchlogs#InvalidParameterException':
                  return [3, 2];
                case 'ResourceAlreadyExistsException':
                case 'com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException':
                  return [3, 4];
                case 'ResourceNotFoundException':
                case 'com.amazonaws.cloudwatchlogs#ResourceNotFoundException':
                  return [3, 6];
                case 'ServiceUnavailableException':
                case 'com.amazonaws.cloudwatchlogs#ServiceUnavailableException':
                  return [3, 8];
              }
              return [3, 10];
            case 2:
              return (s = [{}]), [4, Ss(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([d.sent()])), { name: i, $metadata: ea(e) }])), [3, 11]
              );
            case 4:
              return (a = [{}]), [4, Cs(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([d.sent()])), { name: i, $metadata: ea(e) }])), [3, 11]
              );
            case 6:
              return (u = [{}]), [4, Ts(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([d.sent()])), { name: i, $metadata: ea(e) }])), [3, 11]
              );
            case 8:
              return (c = [{}]), [4, Is(n, t)];
            case 9:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, c.concat([d.sent()])), { name: i, $metadata: ea(e) }])), [3, 11]
              );
            case 10:
              (l = n.body),
                (i = l.code || l.Code || i),
                (o = nt(nt({}, l), {
                  name: '' + i,
                  message: l.message || l.Message || i,
                  $fault: 'client',
                  $metadata: ea(e),
                })),
                (d.label = 11);
            case 11:
              return (
                (f = o.message || o.Message || i),
                (o.message = f),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(f), o))]
              );
          }
        });
      });
    },
    vs = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l;
        return ot(this, function (f) {
          switch (f.label) {
            case 0:
              return (r = [nt({}, e)]), (l = {}), [4, ra(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((l.body = f.sent()), l)]))),
                (i = 'UnknownError'),
                (i = oa(e, n.body)),
                i)
              ) {
                case 'InvalidParameterException':
                case 'com.amazonaws.cloudwatchlogs#InvalidParameterException':
                  return [3, 2];
                case 'ServiceUnavailableException':
                case 'com.amazonaws.cloudwatchlogs#ServiceUnavailableException':
                  return [3, 4];
              }
              return [3, 6];
            case 2:
              return (s = [{}]), [4, Ss(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([f.sent()])), { name: i, $metadata: ea(e) }])), [3, 7]
              );
            case 4:
              return (a = [{}]), [4, Is(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([f.sent()])), { name: i, $metadata: ea(e) }])), [3, 7]
              );
            case 6:
              (u = n.body),
                (i = u.code || u.Code || i),
                (o = nt(nt({}, u), {
                  name: '' + i,
                  message: u.message || u.Message || i,
                  $fault: 'client',
                  $metadata: ea(e),
                })),
                (f.label = 7);
            case 7:
              return (
                (c = o.message || o.Message || i),
                (o.message = c),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(c), o))]
              );
          }
        });
      });
    },
    ys = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f;
        return ot(this, function (h) {
          switch (h.label) {
            case 0:
              return (r = [nt({}, e)]), (f = {}), [4, ra(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((f.body = h.sent()), f)]))),
                (i = 'UnknownError'),
                (i = oa(e, n.body)),
                i)
              ) {
                case 'InvalidParameterException':
                case 'com.amazonaws.cloudwatchlogs#InvalidParameterException':
                  return [3, 2];
                case 'ResourceNotFoundException':
                case 'com.amazonaws.cloudwatchlogs#ResourceNotFoundException':
                  return [3, 4];
                case 'ServiceUnavailableException':
                case 'com.amazonaws.cloudwatchlogs#ServiceUnavailableException':
                  return [3, 6];
              }
              return [3, 8];
            case 2:
              return (s = [{}]), [4, Ss(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([h.sent()])), { name: i, $metadata: ea(e) }])), [3, 9]
              );
            case 4:
              return (a = [{}]), [4, Ts(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([h.sent()])), { name: i, $metadata: ea(e) }])), [3, 9]
              );
            case 6:
              return (u = [{}]), [4, Is(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([h.sent()])), { name: i, $metadata: ea(e) }])), [3, 9]
              );
            case 8:
              (c = n.body),
                (i = c.code || c.Code || i),
                (o = nt(nt({}, c), {
                  name: '' + i,
                  message: c.message || c.Message || i,
                  $fault: 'client',
                  $metadata: ea(e),
                })),
                (h.label = 9);
            case 9:
              return (
                (l = o.message || o.Message || i),
                (o.message = l),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(l), o))]
              );
          }
        });
      });
    },
    ms = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f;
        return ot(this, function (h) {
          switch (h.label) {
            case 0:
              return (r = [nt({}, e)]), (f = {}), [4, ra(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((f.body = h.sent()), f)]))),
                (i = 'UnknownError'),
                (i = oa(e, n.body)),
                i)
              ) {
                case 'InvalidParameterException':
                case 'com.amazonaws.cloudwatchlogs#InvalidParameterException':
                  return [3, 2];
                case 'ResourceNotFoundException':
                case 'com.amazonaws.cloudwatchlogs#ResourceNotFoundException':
                  return [3, 4];
                case 'ServiceUnavailableException':
                case 'com.amazonaws.cloudwatchlogs#ServiceUnavailableException':
                  return [3, 6];
              }
              return [3, 8];
            case 2:
              return (s = [{}]), [4, Ss(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([h.sent()])), { name: i, $metadata: ea(e) }])), [3, 9]
              );
            case 4:
              return (a = [{}]), [4, Ts(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([h.sent()])), { name: i, $metadata: ea(e) }])), [3, 9]
              );
            case 6:
              return (u = [{}]), [4, Is(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([h.sent()])), { name: i, $metadata: ea(e) }])), [3, 9]
              );
            case 8:
              (c = n.body),
                (i = c.code || c.Code || i),
                (o = nt(nt({}, c), {
                  name: '' + i,
                  message: c.message || c.Message || i,
                  $fault: 'client',
                  $metadata: ea(e),
                })),
                (h.label = 9);
            case 9:
              return (
                (l = o.message || o.Message || i),
                (o.message = l),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(l), o))]
              );
          }
        });
      });
    },
    ws = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f, h, d, p;
        return ot(this, function (g) {
          switch (g.label) {
            case 0:
              return (r = [nt({}, e)]), (p = {}), [4, ra(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((p.body = g.sent()), p)]))),
                (i = 'UnknownError'),
                (i = oa(e, n.body)),
                i)
              ) {
                case 'DataAlreadyAcceptedException':
                case 'com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException':
                  return [3, 2];
                case 'InvalidParameterException':
                case 'com.amazonaws.cloudwatchlogs#InvalidParameterException':
                  return [3, 4];
                case 'InvalidSequenceTokenException':
                case 'com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException':
                  return [3, 6];
                case 'ResourceNotFoundException':
                case 'com.amazonaws.cloudwatchlogs#ResourceNotFoundException':
                  return [3, 8];
                case 'ServiceUnavailableException':
                case 'com.amazonaws.cloudwatchlogs#ServiceUnavailableException':
                  return [3, 10];
                case 'UnrecognizedClientException':
                case 'com.amazonaws.cloudwatchlogs#UnrecognizedClientException':
                  return [3, 12];
              }
              return [3, 14];
            case 2:
              return (s = [{}]), [4, bs(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([g.sent()])), { name: i, $metadata: ea(e) }])), [3, 15]
              );
            case 4:
              return (a = [{}]), [4, Ss(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([g.sent()])), { name: i, $metadata: ea(e) }])), [3, 15]
              );
            case 6:
              return (u = [{}]), [4, _s(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([g.sent()])), { name: i, $metadata: ea(e) }])), [3, 15]
              );
            case 8:
              return (c = [{}]), [4, Ts(n, t)];
            case 9:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, c.concat([g.sent()])), { name: i, $metadata: ea(e) }])), [3, 15]
              );
            case 10:
              return (l = [{}]), [4, Is(n, t)];
            case 11:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, l.concat([g.sent()])), { name: i, $metadata: ea(e) }])), [3, 15]
              );
            case 12:
              return (f = [{}]), [4, Ps(n, t)];
            case 13:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, f.concat([g.sent()])), { name: i, $metadata: ea(e) }])), [3, 15]
              );
            case 14:
              (h = n.body),
                (i = h.code || h.Code || i),
                (o = nt(nt({}, h), {
                  name: '' + i,
                  message: h.message || h.Message || i,
                  $fault: 'client',
                  $metadata: ea(e),
                })),
                (g.label = 15);
            case 15:
              return (
                (d = o.message || o.Message || i),
                (o.message = d),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(d), o))]
              );
          }
        });
      });
    },
    bs = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Ds(n, t)),
            [2, nt({ name: 'DataAlreadyAcceptedException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    Ss = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Hs(n, t)),
            [2, nt({ name: 'InvalidParameterException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    _s = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Gs(n, t)),
            [2, nt({ name: 'InvalidSequenceTokenException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    As = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = qs(n, t)),
            [2, nt({ name: 'LimitExceededException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    Es = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Vs(n, t)),
            [2, nt({ name: 'OperationAbortedException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    Cs = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Js(n, t)),
            [2, nt({ name: 'ResourceAlreadyExistsException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    Ts = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Zs(n, t)),
            [2, nt({ name: 'ResourceNotFoundException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    Is = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Xs(n, t)),
            [2, nt({ name: 'ServiceUnavailableException', $fault: 'server', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    Ps = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Qs(n, t)),
            [2, nt({ name: 'UnrecognizedClientException', $fault: 'client', $metadata: ea(e) }, r)]
          );
        });
      });
    },
    ks = function (e, t) {
      return nt(
        nt(
          nt({}, void 0 !== e.kmsKeyId && null !== e.kmsKeyId && { kmsKeyId: e.kmsKeyId }),
          void 0 !== e.logGroupName && null !== e.logGroupName && { logGroupName: e.logGroupName },
        ),
        void 0 !== e.tags && null !== e.tags && { tags: Ms(e.tags, t) },
      );
    },
    Os = function (e, t) {
      return nt(
        nt({}, void 0 !== e.logGroupName && null !== e.logGroupName && { logGroupName: e.logGroupName }),
        void 0 !== e.logStreamName && null !== e.logStreamName && { logStreamName: e.logStreamName },
      );
    },
    xs = function (e, t) {
      return nt(
        nt(
          nt({}, void 0 !== e.limit && null !== e.limit && { limit: e.limit }),
          void 0 !== e.logGroupNamePrefix &&
            null !== e.logGroupNamePrefix && { logGroupNamePrefix: e.logGroupNamePrefix },
        ),
        void 0 !== e.nextToken && null !== e.nextToken && { nextToken: e.nextToken },
      );
    },
    Rs = function (e, t) {
      return nt(
        nt(
          nt(
            nt(
              nt(
                nt({}, void 0 !== e.descending && null !== e.descending && { descending: e.descending }),
                void 0 !== e.limit && null !== e.limit && { limit: e.limit },
              ),
              void 0 !== e.logGroupName && null !== e.logGroupName && { logGroupName: e.logGroupName },
            ),
            void 0 !== e.logStreamNamePrefix &&
              null !== e.logStreamNamePrefix && { logStreamNamePrefix: e.logStreamNamePrefix },
          ),
          void 0 !== e.nextToken && null !== e.nextToken && { nextToken: e.nextToken },
        ),
        void 0 !== e.orderBy && null !== e.orderBy && { orderBy: e.orderBy },
      );
    },
    Ns = function (e, t) {
      return nt(
        nt(
          nt(
            nt(
              nt(
                nt(
                  nt({}, void 0 !== e.endTime && null !== e.endTime && { endTime: e.endTime }),
                  void 0 !== e.limit && null !== e.limit && { limit: e.limit },
                ),
                void 0 !== e.logGroupName && null !== e.logGroupName && { logGroupName: e.logGroupName },
              ),
              void 0 !== e.logStreamName && null !== e.logStreamName && { logStreamName: e.logStreamName },
            ),
            void 0 !== e.nextToken && null !== e.nextToken && { nextToken: e.nextToken },
          ),
          void 0 !== e.startFromHead && null !== e.startFromHead && { startFromHead: e.startFromHead },
        ),
        void 0 !== e.startTime && null !== e.startTime && { startTime: e.startTime },
      );
    },
    Us = function (e, t) {
      return e
        .filter(function (e) {
          return null != e;
        })
        .map(function (e) {
          return null === e
            ? null
            : (function (e, t) {
                return nt(
                  nt({}, void 0 !== e.message && null !== e.message && { message: e.message }),
                  void 0 !== e.timestamp && null !== e.timestamp && { timestamp: e.timestamp },
                );
              })(e);
        });
    },
    Ls = function (e, t) {
      return nt(
        nt(
          nt(
            nt({}, void 0 !== e.logEvents && null !== e.logEvents && { logEvents: Us(e.logEvents) }),
            void 0 !== e.logGroupName && null !== e.logGroupName && { logGroupName: e.logGroupName },
          ),
          void 0 !== e.logStreamName && null !== e.logStreamName && { logStreamName: e.logStreamName },
        ),
        void 0 !== e.sequenceToken && null !== e.sequenceToken && { sequenceToken: e.sequenceToken },
      );
    },
    Ms = function (e, t) {
      return Object.entries(e).reduce(function (e, t) {
        var n,
          r = it(t, 2),
          o = r[0],
          i = r[1];
        return null === i ? e : nt(nt({}, e), (((n = {})[o] = i), n));
      }, {});
    },
    Ds = function (e, t) {
      return {
        expectedSequenceToken:
          void 0 !== e.expectedSequenceToken && null !== e.expectedSequenceToken ? e.expectedSequenceToken : void 0,
        message: void 0 !== e.message && null !== e.message ? e.message : void 0,
      };
    },
    Fs = function (e, t) {
      return {
        logGroups: void 0 !== e.logGroups && null !== e.logGroups ? zs(e.logGroups, t) : void 0,
        nextToken: void 0 !== e.nextToken && null !== e.nextToken ? e.nextToken : void 0,
      };
    },
    js = function (e, t) {
      return {
        logStreams: void 0 !== e.logStreams && null !== e.logStreams ? Ks(e.logStreams, t) : void 0,
        nextToken: void 0 !== e.nextToken && null !== e.nextToken ? e.nextToken : void 0,
      };
    },
    Bs = function (e, t) {
      return {
        events: void 0 !== e.events && null !== e.events ? Ws(e.events, t) : void 0,
        nextBackwardToken:
          void 0 !== e.nextBackwardToken && null !== e.nextBackwardToken ? e.nextBackwardToken : void 0,
        nextForwardToken: void 0 !== e.nextForwardToken && null !== e.nextForwardToken ? e.nextForwardToken : void 0,
      };
    },
    Hs = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Gs = function (e, t) {
      return {
        expectedSequenceToken:
          void 0 !== e.expectedSequenceToken && null !== e.expectedSequenceToken ? e.expectedSequenceToken : void 0,
        message: void 0 !== e.message && null !== e.message ? e.message : void 0,
      };
    },
    qs = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    zs = function (e, t) {
      return (e || [])
        .filter(function (e) {
          return null != e;
        })
        .map(function (e) {
          return null === e
            ? null
            : (function (e, t) {
                return {
                  arn: void 0 !== e.arn && null !== e.arn ? e.arn : void 0,
                  creationTime: void 0 !== e.creationTime && null !== e.creationTime ? e.creationTime : void 0,
                  kmsKeyId: void 0 !== e.kmsKeyId && null !== e.kmsKeyId ? e.kmsKeyId : void 0,
                  logGroupName: void 0 !== e.logGroupName && null !== e.logGroupName ? e.logGroupName : void 0,
                  metricFilterCount:
                    void 0 !== e.metricFilterCount && null !== e.metricFilterCount ? e.metricFilterCount : void 0,
                  retentionInDays:
                    void 0 !== e.retentionInDays && null !== e.retentionInDays ? e.retentionInDays : void 0,
                  storedBytes: void 0 !== e.storedBytes && null !== e.storedBytes ? e.storedBytes : void 0,
                };
              })(e);
        });
    },
    Ks = function (e, t) {
      return (e || [])
        .filter(function (e) {
          return null != e;
        })
        .map(function (e) {
          return null === e
            ? null
            : (function (e, t) {
                return {
                  arn: void 0 !== e.arn && null !== e.arn ? e.arn : void 0,
                  creationTime: void 0 !== e.creationTime && null !== e.creationTime ? e.creationTime : void 0,
                  firstEventTimestamp:
                    void 0 !== e.firstEventTimestamp && null !== e.firstEventTimestamp ? e.firstEventTimestamp : void 0,
                  lastEventTimestamp:
                    void 0 !== e.lastEventTimestamp && null !== e.lastEventTimestamp ? e.lastEventTimestamp : void 0,
                  lastIngestionTime:
                    void 0 !== e.lastIngestionTime && null !== e.lastIngestionTime ? e.lastIngestionTime : void 0,
                  logStreamName: void 0 !== e.logStreamName && null !== e.logStreamName ? e.logStreamName : void 0,
                  storedBytes: void 0 !== e.storedBytes && null !== e.storedBytes ? e.storedBytes : void 0,
                  uploadSequenceToken:
                    void 0 !== e.uploadSequenceToken && null !== e.uploadSequenceToken ? e.uploadSequenceToken : void 0,
                };
              })(e);
        });
    },
    Vs = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Ws = function (e, t) {
      return (e || [])
        .filter(function (e) {
          return null != e;
        })
        .map(function (e) {
          return null === e
            ? null
            : (function (e, t) {
                return {
                  ingestionTime: void 0 !== e.ingestionTime && null !== e.ingestionTime ? e.ingestionTime : void 0,
                  message: void 0 !== e.message && null !== e.message ? e.message : void 0,
                  timestamp: void 0 !== e.timestamp && null !== e.timestamp ? e.timestamp : void 0,
                };
              })(e);
        });
    },
    Ys = function (e, t) {
      return {
        nextSequenceToken:
          void 0 !== e.nextSequenceToken && null !== e.nextSequenceToken ? e.nextSequenceToken : void 0,
        rejectedLogEventsInfo:
          void 0 !== e.rejectedLogEventsInfo && null !== e.rejectedLogEventsInfo
            ? $s(e.rejectedLogEventsInfo, t)
            : void 0,
      };
    },
    $s = function (e, t) {
      return {
        expiredLogEventEndIndex:
          void 0 !== e.expiredLogEventEndIndex && null !== e.expiredLogEventEndIndex
            ? e.expiredLogEventEndIndex
            : void 0,
        tooNewLogEventStartIndex:
          void 0 !== e.tooNewLogEventStartIndex && null !== e.tooNewLogEventStartIndex
            ? e.tooNewLogEventStartIndex
            : void 0,
        tooOldLogEventEndIndex:
          void 0 !== e.tooOldLogEventEndIndex && null !== e.tooOldLogEventEndIndex ? e.tooOldLogEventEndIndex : void 0,
      };
    },
    Js = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Zs = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Xs = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Qs = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    ea = function (e) {
      var t;
      return {
        httpStatusCode: e.statusCode,
        requestId: null !== (t = e.headers['x-amzn-requestid']) && void 0 !== t ? t : e.headers['x-amzn-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      };
    },
    ta = function (e, t) {
      return (
        void 0 === e && (e = new Uint8Array()),
        e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array())
      );
    },
    na = function (e, t, n, r, o) {
      return rt(void 0, void 0, void 0, function () {
        var i, s, a, u, c, l;
        return ot(this, function (f) {
          switch (f.label) {
            case 0:
              return [4, e.endpoint()];
            case 1:
              return (
                (i = f.sent()),
                (s = i.hostname),
                (a = i.protocol),
                (u = void 0 === a ? 'https' : a),
                (c = i.port),
                (l = { protocol: u, hostname: s, port: c, method: 'POST', path: n, headers: t }),
                void 0 !== r && (l.hostname = r),
                void 0 !== o && (l.body = o),
                [2, new vt(l)]
              );
          }
        });
      });
    },
    ra = function (e, t) {
      return (function (e, t) {
        return ta(e, t).then(function (e) {
          return t.utf8Encoder(e);
        });
      })(e, t).then(function (e) {
        return e.length ? JSON.parse(e) : {};
      });
    },
    oa = function (e, t) {
      var n,
        r,
        o = function (e) {
          var t = e;
          return t.indexOf(':') >= 0 && (t = t.split(':')[0]), t.indexOf('#') >= 0 && (t = t.split('#')[1]), t;
        },
        i =
          ((n = e.headers),
          (r = 'x-amzn-errortype'),
          Object.keys(n).find(function (e) {
            return e.toLowerCase() === r.toLowerCase();
          }));
      return void 0 !== i ? o(e.headers[i]) : void 0 !== t.code ? o(t.code) : void 0 !== t.__type ? o(t.__type) : '';
    };
  var ia = function () {
    return (
      (ia =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      ia.apply(this, arguments)
    );
  };
  function sa(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function aa(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  var ua = { name: 'deserializerMiddleware', step: 'deserialize', tags: ['DESERIALIZER'], override: !0 },
    ca = { name: 'serializerMiddleware', step: 'serialize', tags: ['SERIALIZER'], override: !0 };
  function la(e, t, n) {
    return {
      applyToStack: function (r) {
        r.add(
          (function (e, t) {
            return function (n, r) {
              return function (r) {
                return sa(void 0, void 0, void 0, function () {
                  var o, i;
                  return aa(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [4, n(r)];
                      case 1:
                        return (o = s.sent().response), [4, t(o, e)];
                      case 2:
                        return (i = s.sent()), [2, { response: o, output: i }];
                    }
                  });
                });
              };
            };
          })(e, n),
          ua,
        ),
          r.add(
            (function (e, t) {
              return function (n, r) {
                return function (r) {
                  return sa(void 0, void 0, void 0, function () {
                    var o;
                    return aa(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, t(r.input, e)];
                        case 1:
                          return (o = i.sent()), [2, n(ia(ia({}, r), { request: o }))];
                      }
                    });
                  });
                };
              };
            })(e, t),
            ca,
          );
      },
    };
  }
  var fa = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CloudWatchLogsClient',
              commandName: 'CreateLogGroupCommand',
              inputFilterSensitiveLog: Po.filterSensitiveLog,
              outputFilterSensitiveLog: function (e) {
                return e;
              },
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = {
                    'content-type': 'application/x-amz-json-1.1',
                    'x-amz-target': 'Logs_20140328.CreateLogGroup',
                  }),
                  (r = JSON.stringify(ks(e, t))),
                  [2, na(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n;
              return ot(this, function (r) {
                switch (r.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, ps(e, t)] : [4, ta(e.body, t)];
                  case 1:
                    return r.sent(), (n = { $metadata: ea(e) }), [2, Promise.resolve(n)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    ha = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CloudWatchLogsClient',
              commandName: 'CreateLogStreamCommand',
              inputFilterSensitiveLog: ko.filterSensitiveLog,
              outputFilterSensitiveLog: function (e) {
                return e;
              },
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = {
                    'content-type': 'application/x-amz-json-1.1',
                    'x-amz-target': 'Logs_20140328.CreateLogStream',
                  }),
                  (r = JSON.stringify(Os(e, t))),
                  [2, na(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n;
              return ot(this, function (r) {
                switch (r.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, gs(e, t)] : [4, ta(e.body, t)];
                  case 1:
                    return r.sent(), (n = { $metadata: ea(e) }), [2, Promise.resolve(n)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    da = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CloudWatchLogsClient',
              commandName: 'DescribeLogGroupsCommand',
              inputFilterSensitiveLog: $o.filterSensitiveLog,
              outputFilterSensitiveLog: Zo.filterSensitiveLog,
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = {
                    'content-type': 'application/x-amz-json-1.1',
                    'x-amz-target': 'Logs_20140328.DescribeLogGroups',
                  }),
                  (r = JSON.stringify(xs(e, t))),
                  [2, na(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r, o;
              return ot(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, vs(e, t)] : [4, ra(e.body, t)];
                  case 1:
                    return (n = i.sent()), (r = Fs(n, t)), (o = nt({ $metadata: ea(e) }, r)), [2, Promise.resolve(o)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    pa = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CloudWatchLogsClient',
              commandName: 'DescribeLogStreamsCommand',
              inputFilterSensitiveLog: Qo.filterSensitiveLog,
              outputFilterSensitiveLog: ti.filterSensitiveLog,
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = {
                    'content-type': 'application/x-amz-json-1.1',
                    'x-amz-target': 'Logs_20140328.DescribeLogStreams',
                  }),
                  (r = JSON.stringify(Rs(e, t))),
                  [2, na(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r, o;
              return ot(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, ys(e, t)] : [4, ra(e.body, t)];
                  case 1:
                    return (n = i.sent()), (r = js(n, t)), (o = nt({ $metadata: ea(e) }, r)), [2, Promise.resolve(o)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    ga = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CloudWatchLogsClient',
              commandName: 'GetLogEventsCommand',
              inputFilterSensitiveLog: Ci.filterSensitiveLog,
              outputFilterSensitiveLog: Ii.filterSensitiveLog,
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = { 'content-type': 'application/x-amz-json-1.1', 'x-amz-target': 'Logs_20140328.GetLogEvents' }),
                  (r = JSON.stringify(Ns(e, t))),
                  [2, na(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r, o;
              return ot(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, ms(e, t)] : [4, ra(e.body, t)];
                  case 1:
                    return (n = i.sent()), (r = Bs(n, t)), (o = nt({ $metadata: ea(e) }, r)), [2, Promise.resolve(o)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    va = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CloudWatchLogsClient',
              commandName: 'PutLogEventsCommand',
              inputFilterSensitiveLog: zi.filterSensitiveLog,
              outputFilterSensitiveLog: Vi.filterSensitiveLog,
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = { 'content-type': 'application/x-amz-json-1.1', 'x-amz-target': 'Logs_20140328.PutLogEvents' }),
                  (r = JSON.stringify(Ls(e, t))),
                  [2, na(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r, o;
              return ot(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, ws(e, t)] : [4, ra(e.body, t)];
                  case 1:
                    return (n = i.sent()), (r = Ys(n, t)), (o = nt({ $metadata: ea(e) }, r)), [2, Promise.resolve(o)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    ya = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    ma = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    wa = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    ba = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(wa(arguments[t]));
      return e;
    },
    Sa = new ie.ConsoleLogger('AWSCloudWatch'),
    _a =
      ((function () {
        function e(e) {
          this.configure(e),
            (this._dataTracker = { eventUploadInProgress: !1, logEvents: [] }),
            (this._currentLogBatch = []),
            this._initiateLogPushInterval();
        }
        (e.prototype.getProviderName = function () {
          return e.PROVIDER_NAME;
        }),
          (e.prototype.getCategoryName = function () {
            return e.CATEGORY;
          }),
          (e.prototype.getLogQueue = function () {
            return this._dataTracker.logEvents;
          }),
          (e.prototype.configure = function (e) {
            if (!e) return this._config || {};
            var t = Object.assign({}, this._config, Ye.parseMobileHubConfig(e).Logging, e);
            return (this._config = t), this._config;
          }),
          (e.prototype.createLogGroup = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n;
              return ma(this, function (r) {
                switch (r.label) {
                  case 0:
                    Sa.debug('creating new log group in CloudWatch - ', e.logGroupName), (t = new fa(e)), (r.label = 1);
                  case 1:
                    return r.trys.push([1, 4, , 5]), [4, this._ensureCredentials()];
                  case 2:
                    if (!r.sent()) throw new Error(ue);
                    return [4, this._initCloudWatchLogs().send(t)];
                  case 3:
                    return [2, r.sent()];
                  case 4:
                    throw ((n = r.sent()), Sa.error('error creating log group - ' + n), n);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getLogGroups = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n;
              return ma(this, function (r) {
                switch (r.label) {
                  case 0:
                    Sa.debug('getting list of log groups'), (t = new da(e)), (r.label = 1);
                  case 1:
                    return r.trys.push([1, 4, , 5]), [4, this._ensureCredentials()];
                  case 2:
                    if (!r.sent()) throw new Error(ue);
                    return [4, this._initCloudWatchLogs().send(t)];
                  case 3:
                    return [2, r.sent()];
                  case 4:
                    throw ((n = r.sent()), Sa.error('error getting log group - ' + n), n);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.createLogStream = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n;
              return ma(this, function (r) {
                switch (r.label) {
                  case 0:
                    Sa.debug('creating new log stream in CloudWatch - ', e.logStreamName),
                      (t = new ha(e)),
                      (r.label = 1);
                  case 1:
                    return r.trys.push([1, 4, , 5]), [4, this._ensureCredentials()];
                  case 2:
                    if (!r.sent()) throw new Error(ue);
                    return [4, this._initCloudWatchLogs().send(t)];
                  case 3:
                    return [2, r.sent()];
                  case 4:
                    throw ((n = r.sent()), Sa.error('error creating log stream - ' + n), n);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getLogStreams = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n;
              return ma(this, function (r) {
                switch (r.label) {
                  case 0:
                    Sa.debug('getting list of log streams'), (t = new pa(e)), (r.label = 1);
                  case 1:
                    return r.trys.push([1, 4, , 5]), [4, this._ensureCredentials()];
                  case 2:
                    if (!r.sent()) throw new Error(ue);
                    return [4, this._initCloudWatchLogs().send(t)];
                  case 3:
                    return [2, r.sent()];
                  case 4:
                    throw ((n = r.sent()), Sa.error('error getting log stream - ' + n), n);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getLogEvents = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n;
              return ma(this, function (r) {
                switch (r.label) {
                  case 0:
                    Sa.debug('getting log events from stream - ', e.logStreamName), (t = new ga(e)), (r.label = 1);
                  case 1:
                    return r.trys.push([1, 4, , 5]), [4, this._ensureCredentials()];
                  case 2:
                    if (!r.sent()) throw new Error(ue);
                    return [4, this._initCloudWatchLogs().send(t)];
                  case 3:
                    return [2, r.sent()];
                  case 4:
                    throw ((n = r.sent()), Sa.error('error getting log events - ' + n), n);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.pushLogs = function (e) {
            Sa.debug('pushing log events to Cloudwatch...'),
              (this._dataTracker.logEvents = ba(this._dataTracker.logEvents, e));
          }),
          (e.prototype._validateLogGroupExistsAndCreate = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n, r, o;
              return ma(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (this._dataTracker.verifiedLogGroup) return [2, this._dataTracker.verifiedLogGroup];
                    i.label = 1;
                  case 1:
                    return i.trys.push([1, 5, , 6]), [4, this._ensureCredentials()];
                  case 2:
                    if (!i.sent()) throw new Error(ue);
                    return [4, this.getLogGroups({ logGroupNamePrefix: e })];
                  case 3:
                    return 'string' != typeof (t = i.sent()) &&
                      t.logGroups &&
                      (n = t.logGroups.filter(function (t) {
                        return t.logGroupName === e;
                      })).length > 0
                      ? ((this._dataTracker.verifiedLogGroup = n[0]), [2, n[0]])
                      : [4, this.createLogGroup({ logGroupName: e })];
                  case 4:
                    return i.sent(), [2, null];
                  case 5:
                    throw ((r = i.sent()), (o = 'failure during log group search: ' + r), Sa.error(o), r);
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._validateLogStreamExists = function (e, t) {
            return ya(this, void 0, void 0, function () {
              var n, r, o, i;
              return ma(this, function (s) {
                switch (s.label) {
                  case 0:
                    return s.trys.push([0, 4, , 5]), [4, this._ensureCredentials()];
                  case 1:
                    if (!s.sent()) throw new Error(ue);
                    return [4, this.getLogStreams({ logGroupName: e, logStreamNamePrefix: t })];
                  case 2:
                    return (n = s.sent()).logStreams &&
                      (r = n.logStreams.filter(function (e) {
                        return e.logStreamName === t;
                      })).length > 0
                      ? ((this._nextSequenceToken = r[0].uploadSequenceToken), [2, r[0]])
                      : [4, this.createLogStream({ logGroupName: e, logStreamName: t })];
                  case 3:
                    return s.sent(), [2, null];
                  case 4:
                    throw ((o = s.sent()), (i = 'failure during log stream search: ' + o), Sa.error(i), o);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._sendLogEvents = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n, r;
              return ma(this, function (o) {
                switch (o.label) {
                  case 0:
                    return o.trys.push([0, 3, , 4]), [4, this._ensureCredentials()];
                  case 1:
                    if (!o.sent()) throw new Error(ue);
                    return (
                      Sa.debug('sending log events to stream - ', e.logStreamName),
                      (t = new va(e)),
                      [4, this._initCloudWatchLogs().send(t)]
                    );
                  case 2:
                    return [2, o.sent()];
                  case 3:
                    return (n = o.sent()), (r = 'failure during log push: ' + n), Sa.error(r), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._initCloudWatchLogs = function () {
            return new ds({
              region: this._config.region,
              credentials: this._config.credentials,
              customUserAgent: we(),
              endpoint: this._config.endpoint,
            });
          }),
          (e.prototype._ensureCredentials = function () {
            return ya(this, void 0, void 0, function () {
              var e = this;
              return ma(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      _a.Credentials.get()
                        .then(function (t) {
                          if (!t) return !1;
                          var n = _a.Credentials.shear(t);
                          return Sa.debug('set credentials for logging', n), (e._config.credentials = n), !0;
                        })
                        .catch(function (e) {
                          return Sa.warn('ensure credentials error', e), !1;
                        }),
                    ];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype._getNextSequenceToken = function () {
            return ya(this, void 0, void 0, function () {
              var e, t;
              return ma(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (this._nextSequenceToken && this._nextSequenceToken.length > 0)
                      return [2, this._nextSequenceToken];
                    n.label = 1;
                  case 1:
                    return (
                      n.trys.push([1, 4, , 5]), [4, this._validateLogGroupExistsAndCreate(this._config.logGroupName)]
                    );
                  case 2:
                    return (
                      n.sent(),
                      (this._nextSequenceToken = void 0),
                      [4, this._validateLogStreamExists(this._config.logGroupName, this._config.logStreamName)]
                    );
                  case 3:
                    return (
                      (e = n.sent()) && (this._nextSequenceToken = e.uploadSequenceToken), [2, this._nextSequenceToken]
                    );
                  case 4:
                    throw ((t = n.sent()), Sa.error('failure while getting next sequence token: ' + t), t);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._safeUploadLogEvents = function () {
            return ya(this, void 0, void 0, function () {
              var e, t, n, r, o;
              return ma(this, function (i) {
                switch (i.label) {
                  case 0:
                    return i.trys.push([0, 3, , 4]), [4, this._getNextSequenceToken()];
                  case 1:
                    return (
                      (e = i.sent()),
                      (t = 0 === this._currentLogBatch.length ? this._getBufferedBatchOfLogs() : this._currentLogBatch),
                      (n = {
                        logGroupName: this._config.logGroupName,
                        logStreamName: this._config.logStreamName,
                        logEvents: t,
                        sequenceToken: e,
                      }),
                      (this._dataTracker.eventUploadInProgress = !0),
                      [4, this._sendLogEvents(n)]
                    );
                  case 2:
                    return (
                      (r = i.sent()),
                      (this._nextSequenceToken = r.nextSequenceToken),
                      (this._dataTracker.eventUploadInProgress = !1),
                      (this._currentLogBatch = []),
                      [2, r]
                    );
                  case 3:
                    if (((o = i.sent()), Sa.error('error during _safeUploadLogEvents: ' + o), !ce.includes(o.name)))
                      throw ((this._dataTracker.eventUploadInProgress = !1), o);
                    return (
                      this._getNewSequenceTokenAndSubmit({
                        logEvents: this._currentLogBatch,
                        logGroupName: this._config.logGroupName,
                        logStreamName: this._config.logStreamName,
                      }),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._getBufferedBatchOfLogs = function () {
            for (var e = 0, t = 0; e < this._dataTracker.logEvents.length; ) {
              var n = this._dataTracker.logEvents[e],
                r = n ? new TextEncoder().encode(n.message).length + 26 : 0;
              if (r > 256e3) {
                var o =
                  'Log entry exceeds maximum size for CloudWatch logs. Log size: ' + r + '. Truncating log message.';
                Sa.warn(o), (n.message = n.message.substring(0, r));
              }
              if (t + r > 1048576) break;
              (t += r), e++;
            }
            return (this._currentLogBatch = this._dataTracker.logEvents.splice(0, e)), this._currentLogBatch;
          }),
          (e.prototype._getNewSequenceTokenAndSubmit = function (e) {
            return ya(this, void 0, void 0, function () {
              var t, n, r;
              return ma(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 3, , 4]),
                      (this._nextSequenceToken = void 0),
                      (this._dataTracker.eventUploadInProgress = !0),
                      [4, this._getNextSequenceToken()]
                    );
                  case 1:
                    return (t = o.sent()), (e.sequenceToken = t), [4, this._sendLogEvents(e)];
                  case 2:
                    return (
                      (n = o.sent()),
                      (this._dataTracker.eventUploadInProgress = !1),
                      (this._currentLogBatch = []),
                      [2, n]
                    );
                  case 3:
                    throw (
                      ((r = o.sent()),
                      Sa.error('error when retrying log submission with new sequence token: ' + r),
                      (this._dataTracker.eventUploadInProgress = !1),
                      r)
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._initiateLogPushInterval = function () {
            var e = this;
            this._timer && clearInterval(this._timer),
              (this._timer = setInterval(function () {
                return ya(e, void 0, void 0, function () {
                  var e;
                  return ma(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 3, , 4]),
                          this._getDocUploadPermissibility() ? [4, this._safeUploadLogEvents()] : [3, 2]
                        );
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [3, 4];
                      case 3:
                        return (
                          (e = t.sent()),
                          Sa.error('error when calling _safeUploadLogEvents in the timer interval - ' + e),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }, 2e3));
          }),
          (e.prototype._getDocUploadPermissibility = function () {
            return (
              (0 !== this._dataTracker.logEvents.length || 0 !== this._currentLogBatch.length) &&
              !this._dataTracker.eventUploadInProgress
            );
          }),
          (e.PROVIDER_NAME = 'AWSCloudWatch'),
          (e.CATEGORY = ae);
      })(),
      {});
  e(
    _a,
    'Credentials',
    () => al,
    e => (al = e),
  );
  var Aa = {},
    Ea = (function () {
      function e() {}
      return (
        (e.setItem = function (e, t) {
          return (Aa[e] = t), Aa[e];
        }),
        (e.getItem = function (e) {
          return Object.prototype.hasOwnProperty.call(Aa, e) ? Aa[e] : void 0;
        }),
        (e.removeItem = function (e) {
          return delete Aa[e];
        }),
        (e.clear = function () {
          return (Aa = {});
        }),
        e
      );
    })(),
    Ca = (function () {
      function e() {
        try {
          (this.storageWindow = window.localStorage),
            this.storageWindow.setItem('aws.amplify.test-ls', 1),
            this.storageWindow.removeItem('aws.amplify.test-ls');
        } catch (e) {
          this.storageWindow = Ea;
        }
      }
      return (
        (e.prototype.getStorage = function () {
          return this.storageWindow;
        }),
        e
      );
    })(),
    Ta = {};
  e(
    Ta,
    'GoogleOAuth',
    () => Ka,
    e => (Ka = e),
  );
  var Ia = {};
  e(Ia, 'urlSafeDecode', () => Ba), e(Ia, 'urlSafeEncode', () => ja);
  var Pa = {};
  e(
    Pa,
    'NonRetryableError',
    () => La,
    e => (La = e),
  ),
    e(
      Pa,
      'jitteredExponentialRetry',
      () => Fa,
      e => (Fa = e),
    );
  var ka = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
      };
    })(),
    Oa = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    xa = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    Ra = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    Na = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ra(arguments[t]));
      return e;
    },
    Ua = new ie.ConsoleLogger('Util'),
    La = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (n.nonRetryable = !0), n;
      }
      return ka(t, e), t;
    })(Error);
  function Ma(e, t, n, r) {
    return (
      void 0 === r && (r = 1),
      Oa(this, void 0, void 0, function () {
        var o, i;
        return xa(this, function (s) {
          switch (s.label) {
            case 0:
              if ('function' != typeof e) throw Error('functionToRetry must be a function');
              Ua.debug(e.name + ' attempt #' + r + ' with this vars: ' + JSON.stringify(t)), (s.label = 1);
            case 1:
              return s.trys.push([1, 3, , 8]), [4, e.apply(void 0, Na(t))];
            case 2:
              return [2, s.sent()];
            case 3:
              if (((o = s.sent()), Ua.debug('error on ' + e.name, o), (a = o) && a.nonRetryable))
                throw (Ua.debug(e.name + ' non retryable error', o), o);
              return (
                (i = n(r, t, o)),
                Ua.debug(e.name + ' retrying in ' + i + ' ms'),
                !1 === i
                  ? [3, 6]
                  : [
                      4,
                      new Promise(function (e) {
                        return setTimeout(e, i);
                      }),
                    ]
              );
            case 4:
              return s.sent(), [4, Ma(e, t, n, r + 1)];
            case 5:
              return [2, s.sent()];
            case 6:
              throw o;
            case 7:
              return [3, 8];
            case 8:
              return [2];
          }
          var a;
        });
      })
    );
  }
  var Da = 3e5;
  var Fa = function (e, t, n) {
    return (
      void 0 === n && (n = Da),
      Ma(
        e,
        t,
        (function (e) {
          return (
            void 0 === e && (e = Da),
            function (t) {
              var n = 100 * Math.pow(2, t) + 100 * Math.random();
              return !(n > e) && n;
            }
          );
        })(n),
      )
    );
  };
  function ja(e) {
    return e
      .split('')
      .map(function (e) {
        return e.charCodeAt(0).toString(16).padStart(2, '0');
      })
      .join('');
  }
  function Ba(e) {
    return e
      .match(/.{2}/g)
      .map(function (e) {
        return String.fromCharCode(parseInt(e, 16));
      })
      .join('');
  }
  r(Ia, Pa), r(Ia, {});
  var Ha = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Ga = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    qa = new ie.ConsoleLogger('CognitoCredentials'),
    za = new Promise(function (e, t) {
      return qe().isBrowser
        ? (window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null)
          ? (qa.debug('google api already loaded'), e())
          : void setTimeout(function () {
              return e();
            }, 2e3)
        : (qa.debug('not in the browser, directly resolved'), e());
    }),
    Ka = (function () {
      function e() {
        (this.initialized = !1),
          (this.refreshGoogleToken = this.refreshGoogleToken.bind(this)),
          (this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this));
      }
      return (
        (e.prototype.refreshGoogleToken = function () {
          return Ha(this, void 0, void 0, function () {
            return Ga(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.initialized ? [3, 2] : (qa.debug('need to wait for the Google SDK loaded'), [4, za]);
                case 1:
                  e.sent(), (this.initialized = !0), qa.debug('finish waiting'), (e.label = 2);
                case 2:
                  return [2, this._refreshGoogleTokenImpl()];
              }
            });
          });
        }),
        (e.prototype._refreshGoogleTokenImpl = function () {
          var e = null;
          return (
            qe().isBrowser && (e = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null),
            e
              ? new Promise(function (t, n) {
                  e.getAuthInstance()
                    .then(function (e) {
                      e || (qa.debug('google Auth undefined'), n(new Pa.NonRetryableError('google Auth undefined')));
                      var r = e.currentUser.get();
                      r.isSignedIn()
                        ? (qa.debug('refreshing the google access token'),
                          r
                            .reloadAuthResponse()
                            .then(function (e) {
                              var n = e.id_token,
                                r = e.expires_at;
                              t({ token: n, expires_at: r });
                            })
                            .catch(function (e) {
                              e && 'network_error' === e.error
                                ? n('Network error reloading google auth response')
                                : n(new Pa.NonRetryableError('Failed to reload google auth response'));
                            }))
                        : n(new Pa.NonRetryableError('User is not signed in with Google'));
                    })
                    .catch(function (e) {
                      qa.debug('Failed to refresh google token', e),
                        n(new Pa.NonRetryableError('Failed to refresh google token'));
                    });
                })
              : (qa.debug('no gapi auth2 available'), Promise.reject('no gapi auth2 available'))
          );
        }),
        e
      );
    })(),
    Va = {};
  e(
    Va,
    'FacebookOAuth',
    () => Za,
    e => (Za = e),
  );
  var Wa = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Ya = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    $a = new ie.ConsoleLogger('CognitoCredentials'),
    Ja = new Promise(function (e, t) {
      return qe().isBrowser
        ? window.FB
          ? ($a.debug('FB SDK already loaded'), e())
          : void setTimeout(function () {
              return e();
            }, 2e3)
        : ($a.debug('not in the browser, directly resolved'), e());
    }),
    Za = (function () {
      function e() {
        (this.initialized = !1),
          (this.refreshFacebookToken = this.refreshFacebookToken.bind(this)),
          (this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this));
      }
      return (
        (e.prototype.refreshFacebookToken = function () {
          return Wa(this, void 0, void 0, function () {
            return Ya(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.initialized ? [3, 2] : ($a.debug('need to wait for the Facebook SDK loaded'), [4, Ja]);
                case 1:
                  e.sent(), (this.initialized = !0), $a.debug('finish waiting'), (e.label = 2);
                case 2:
                  return [2, this._refreshFacebookTokenImpl()];
              }
            });
          });
        }),
        (e.prototype._refreshFacebookTokenImpl = function () {
          var e = null;
          if ((qe().isBrowser && (e = window.FB), !e)) {
            var t = 'no fb sdk available';
            return $a.debug(t), Promise.reject(new Pa.NonRetryableError(t));
          }
          return new Promise(function (t, n) {
            e.getLoginStatus(
              function (e) {
                if (e && e.authResponse) {
                  var r = e.authResponse,
                    o = r.accessToken,
                    i = 1e3 * r.expiresIn + new Date().getTime();
                  if (!o) {
                    s = 'the jwtToken is undefined';
                    $a.debug(s), n(new Pa.NonRetryableError(s));
                  }
                  t({ token: o, expires_at: i });
                } else {
                  var s = 'no response from facebook when refreshing the jwt token';
                  $a.debug(s), n(new Pa.NonRetryableError(s));
                }
              },
              { scope: 'public_profile,email' },
            );
          });
        }),
        e
      );
    })(),
    Xa = new Ta.GoogleOAuth(),
    Qa = new Va.FacebookOAuth();
  function eu(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function tu(e, t) {
    var n,
      r,
      o,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  }
  function nu(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  var ru;
  ru = JSON.parse(
    '{"name":"@aws-sdk/client-cognito-identity","description":"AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native","version":"3.6.1","scripts":{"clean":"yarn remove-definitions && yarn remove-dist && yarn remove-documentation","build-documentation":"yarn remove-documentation && typedoc ./","prepublishOnly":"yarn build","pretest":"yarn build:cjs","remove-definitions":"rimraf ./configs","remove-dist":"rimraf ./dist","remove-documentation":"rimraf ./docs","test:unit":"mocha **/cjs/**/*.spec.js","test:e2e":"mocha **/cjs/**/*.ispec.js && karma start karma.conf.js","test":"yarn test:unit","build:cjs":"tsc -p tsconfig.json","build:es":"tsc -p tsconfig.es.json","build":"yarn build:cjs && yarn build:es","postbuild":"downlevel-dts configs configs/ts3.4"},"main":"./dist/cjs/index.js","configs":"./configs/index.d.ts","module":"./dist/es/index.js","browser":{"./runtimeConfig":"./runtimeConfig.browser"},"react-native":{"./runtimeConfig":"./runtimeConfig.native"},"sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"^1.0.0","@aws-crypto/sha256-js":"^1.0.0","@aws-sdk/config-resolver":"3.6.1","@aws-sdk/credential-provider-node":"3.6.1","@aws-sdk/fetch-http-handler":"3.6.1","@aws-sdk/hash-node":"3.6.1","@aws-sdk/invalid-dependency":"3.6.1","@aws-sdk/middleware-content-length":"3.6.1","@aws-sdk/middleware-host-header":"3.6.1","@aws-sdk/middleware-logger":"3.6.1","@aws-sdk/middleware-retry":"3.6.1","@aws-sdk/middleware-serde":"3.6.1","@aws-sdk/middleware-signing":"3.6.1","@aws-sdk/middleware-stack":"3.6.1","@aws-sdk/middleware-user-agent":"3.6.1","@aws-sdk/node-config-provider":"3.6.1","@aws-sdk/node-http-handler":"3.6.1","@aws-sdk/protocol-http":"3.6.1","@aws-sdk/smithy-client":"3.6.1","@aws-sdk/configs":"3.6.1","@aws-sdk/url-parser":"3.6.1","@aws-sdk/url-parser-native":"3.6.1","@aws-sdk/util-base64-browser":"3.6.1","@aws-sdk/util-base64-node":"3.6.1","@aws-sdk/util-body-length-browser":"3.6.1","@aws-sdk/util-body-length-node":"3.6.1","@aws-sdk/util-user-agent-browser":"3.6.1","@aws-sdk/util-user-agent-node":"3.6.1","@aws-sdk/util-utf8-browser":"3.6.1","@aws-sdk/util-utf8-node":"3.6.1","tslib":"^2.0.0"},"devDependencies":{"@aws-sdk/client-documentation-generator":"3.6.1","@aws-sdk/client-iam":"3.6.1","@configs/chai":"^4.2.11","@configs/mocha":"^8.0.4","@configs/node":"^12.7.5","downlevel-dts":"0.7.0","jest":"^26.1.0","rimraf":"^3.0.0","typedoc":"^0.19.2","typescript":"~4.1.2"},"engines":{"node":">=10.0.0"},"typesVersions":{"<4.0":{"configs/*":["configs/ts3.4/*"]}},"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-cognito-identity"}}',
  );
  var ou,
    iu,
    su,
    au,
    uu,
    cu,
    lu,
    fu,
    hu,
    du,
    pu,
    gu,
    vu,
    yu,
    mu,
    wu,
    bu,
    Su,
    _u,
    Au,
    Eu,
    Cu,
    Tu,
    Iu,
    Pu,
    ku,
    Ou,
    xu,
    Ru,
    Nu,
    Uu,
    Lu,
    Mu,
    Du,
    Fu,
    ju,
    Bu,
    Hu,
    Gu,
    qu,
    zu,
    Ku,
    Vu,
    Wu,
    Yu,
    $u,
    Ju,
    Zu,
    Xu,
    Qu,
    ec,
    tc,
    nc,
    rc,
    oc,
    ic,
    sc,
    ac = 'cognito-identity.{region}.amazonaws.com',
    uc = new Set([
      'af-south-1',
      'ap-east-1',
      'ap-northeast-1',
      'ap-northeast-2',
      'ap-south-1',
      'ap-southeast-1',
      'ap-southeast-2',
      'ca-central-1',
      'eu-central-1',
      'eu-north-1',
      'eu-south-1',
      'eu-west-1',
      'eu-west-2',
      'eu-west-3',
      'me-south-1',
      'sa-east-1',
      'us-east-1',
      'us-east-2',
      'us-west-1',
      'us-west-2',
    ]),
    cc = new Set(['cn-north-1', 'cn-northwest-1']),
    lc = new Set(['us-iso-east-1']),
    fc = new Set(['us-isob-east-1']),
    hc = new Set(['us-gov-east-1', 'us-gov-west-1']),
    dc = {
      apiVersion: '2014-06-30',
      disableHostPrefix: !1,
      logger: {},
      regionInfoProvider: function (e, t) {
        var n = void 0;
        switch (e) {
          case 'ap-northeast-1':
            n = { hostname: 'cognito-identity.ap-northeast-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-northeast-2':
            n = { hostname: 'cognito-identity.ap-northeast-2.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-south-1':
            n = { hostname: 'cognito-identity.ap-south-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-southeast-1':
            n = { hostname: 'cognito-identity.ap-southeast-1.amazonaws.com', partition: 'aws' };
            break;
          case 'ap-southeast-2':
            n = { hostname: 'cognito-identity.ap-southeast-2.amazonaws.com', partition: 'aws' };
            break;
          case 'ca-central-1':
            n = { hostname: 'cognito-identity.ca-central-1.amazonaws.com', partition: 'aws' };
            break;
          case 'cn-north-1':
            n = { hostname: 'cognito-identity.cn-north-1.amazonaws.com.cn', partition: 'aws-cn' };
            break;
          case 'eu-central-1':
            n = { hostname: 'cognito-identity.eu-central-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-north-1':
            n = { hostname: 'cognito-identity.eu-north-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-west-1':
            n = { hostname: 'cognito-identity.eu-west-1.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-west-2':
            n = { hostname: 'cognito-identity.eu-west-2.amazonaws.com', partition: 'aws' };
            break;
          case 'eu-west-3':
            n = { hostname: 'cognito-identity.eu-west-3.amazonaws.com', partition: 'aws' };
            break;
          case 'fips-us-east-1':
            n = {
              hostname: 'cognito-identity-fips.us-east-1.amazonaws.com',
              partition: 'aws',
              signingRegion: 'us-east-1',
            };
            break;
          case 'fips-us-east-2':
            n = {
              hostname: 'cognito-identity-fips.us-east-2.amazonaws.com',
              partition: 'aws',
              signingRegion: 'us-east-2',
            };
            break;
          case 'fips-us-gov-west-1':
            n = {
              hostname: 'cognito-identity-fips.us-gov-west-1.amazonaws.com',
              partition: 'aws-us-gov',
              signingRegion: 'us-gov-west-1',
            };
            break;
          case 'fips-us-west-2':
            n = {
              hostname: 'cognito-identity-fips.us-west-2.amazonaws.com',
              partition: 'aws',
              signingRegion: 'us-west-2',
            };
            break;
          case 'sa-east-1':
            n = { hostname: 'cognito-identity.sa-east-1.amazonaws.com', partition: 'aws' };
            break;
          case 'us-east-1':
            n = { hostname: 'cognito-identity.us-east-1.amazonaws.com', partition: 'aws' };
            break;
          case 'us-east-2':
            n = { hostname: 'cognito-identity.us-east-2.amazonaws.com', partition: 'aws' };
            break;
          case 'us-gov-west-1':
            n = { hostname: 'cognito-identity.us-gov-west-1.amazonaws.com', partition: 'aws-us-gov' };
            break;
          case 'us-west-1':
            n = { hostname: 'cognito-identity.us-west-1.amazonaws.com', partition: 'aws' };
            break;
          case 'us-west-2':
            n = { hostname: 'cognito-identity.us-west-2.amazonaws.com', partition: 'aws' };
            break;
          default:
            uc.has(e) && (n = { hostname: ac.replace('{region}', e), partition: 'aws' }),
              cc.has(e) &&
                (n = {
                  hostname: 'cognito-identity.{region}.amazonaws.com.cn'.replace('{region}', e),
                  partition: 'aws-cn',
                }),
              lc.has(e) &&
                (n = { hostname: 'cognito-identity.{region}.c2s.ic.gov'.replace('{region}', e), partition: 'aws-iso' }),
              fc.has(e) &&
                (n = {
                  hostname: 'cognito-identity.{region}.sc2s.sgov.gov'.replace('{region}', e),
                  partition: 'aws-iso-b',
                }),
              hc.has(e) &&
                (n = {
                  hostname: 'cognito-identity.{region}.amazonaws.com'.replace('{region}', e),
                  partition: 'aws-us-gov',
                }),
              void 0 === n && (n = { hostname: ac.replace('{region}', e), partition: 'aws' });
        }
        return Promise.resolve(nt({ signingService: 'cognito-identity' }, n));
      },
      serviceId: 'Cognito Identity',
      urlParser: Tn,
    },
    pc = nt(nt({}, dc), {
      runtime: 'browser',
      base64Decoder: Pt,
      base64Encoder: kt,
      bodyLengthChecker: dn,
      credentialDefaultProvider: function (e) {
        return function () {
          return Promise.reject(new Error('Credential is missing'));
        };
      },
      defaultUserAgentProvider: yn({ serviceId: dc.serviceId, clientVersion: o(ru).version }),
      maxAttempts: 3,
      region: Rt('Region is missing'),
      requestHandler: new bt(),
      sha256: at.Sha256,
      streamCollector: Ot,
      utf8Decoder: function (e) {
        return 'function' == typeof TextEncoder
          ? (function (e) {
              return new TextEncoder().encode(e);
            })(e)
          : (function (e) {
              for (var t = [], n = 0, r = e.length; n < r; n++) {
                var o = e.charCodeAt(n);
                if (o < 128) t.push(o);
                else if (o < 2048) t.push((o >> 6) | 192, (63 & o) | 128);
                else if (n + 1 < e.length && 55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                  var i = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n));
                  t.push((i >> 18) | 240, ((i >> 12) & 63) | 128, ((i >> 6) & 63) | 128, (63 & i) | 128);
                } else t.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
              }
              return Uint8Array.from(t);
            })(e);
      },
      utf8Encoder: function (e) {
        return 'function' == typeof TextDecoder
          ? (function (e) {
              return new TextDecoder('utf-8').decode(e);
            })(e)
          : (function (e) {
              for (var t = '', n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (o < 128) t += String.fromCharCode(o);
                else if (192 <= o && o < 224) {
                  var i = e[++n];
                  t += String.fromCharCode(((31 & o) << 6) | (63 & i));
                } else if (240 <= o && o < 365) {
                  var s =
                    '%' +
                    [o, e[++n], e[++n], e[++n]]
                      .map(function (e) {
                        return e.toString(16);
                      })
                      .join('%');
                  t += decodeURIComponent(s);
                } else t += String.fromCharCode(((15 & o) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n]));
              }
              return t;
            })(e);
      },
    }),
    gc = (function (e) {
      function t(t) {
        var n = this,
          r = nt(nt({}, pc), t),
          o = Ln(r),
          i = Gr(Rn(o)),
          s = Xr(fn(i));
        return (
          ((n = e.call(this, s) || this).config = s),
          n.middlewareStack.use(Bt(n.config)),
          n.middlewareStack.use(Gn(n.config)),
          n.middlewareStack.use(Vn(n.config)),
          n.middlewareStack.use(Zn(n.config)),
          n.middlewareStack.use(no(n.config)),
          n
        );
      }
      return (
        tt(t, e),
        (t.prototype.destroy = function () {
          e.prototype.destroy.call(this);
        }),
        t
      );
    })(lo);
  !(function (e) {
    (e.AUTHENTICATED_ROLE = 'AuthenticatedRole'), (e.DENY = 'Deny');
  })(ou || (ou = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(iu || (iu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(su || (su = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(au || (au = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(uu || (uu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(cu || (cu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(lu || (lu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(fu || (fu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(hu || (hu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(du || (du = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(pu || (pu = {})),
    (function (e) {
      (e.ACCESS_DENIED = 'AccessDenied'), (e.INTERNAL_SERVER_ERROR = 'InternalServerError');
    })(gu || (gu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(vu || (vu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(yu || (yu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(mu || (mu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(wu || (wu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(bu || (bu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Su || (Su = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(_u || (_u = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Au || (Au = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Eu || (Eu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Cu || (Cu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Tu || (Tu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Iu || (Iu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Pu || (Pu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ku || (ku = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ou || (Ou = {})),
    (function (e) {
      (e.CONTAINS = 'Contains'), (e.EQUALS = 'Equals'), (e.NOT_EQUAL = 'NotEqual'), (e.STARTS_WITH = 'StartsWith');
    })(xu || (xu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ru || (Ru = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Nu || (Nu = {})),
    (function (e) {
      (e.RULES = 'Rules'), (e.TOKEN = 'Token');
    })(Uu || (Uu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Lu || (Lu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Mu || (Mu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Du || (Du = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Fu || (Fu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ju || (ju = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Bu || (Bu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Hu || (Hu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Gu || (Gu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(qu || (qu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(zu || (zu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ku || (Ku = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Vu || (Vu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Wu || (Wu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Yu || (Yu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })($u || ($u = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Ju || (Ju = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Zu || (Zu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Xu || (Xu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(Qu || (Qu = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ec || (ec = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(tc || (tc = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(nc || (nc = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(rc || (rc = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(oc || (oc = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(ic || (ic = {})),
    (function (e) {
      e.filterSensitiveLog = function (e) {
        return nt({}, e);
      };
    })(sc || (sc = {}));
  var vc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f, h, d, p, g, v;
        return ot(this, function (y) {
          switch (y.label) {
            case 0:
              return (r = [nt({}, e)]), (v = {}), [4, Kc(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((v.body = y.sent()), v)]))),
                (i = 'UnknownError'),
                (i = Vc(e, n.body)),
                i)
              ) {
                case 'ExternalServiceException':
                case 'com.amazonaws.cognitoidentity#ExternalServiceException':
                  return [3, 2];
                case 'InternalErrorException':
                case 'com.amazonaws.cognitoidentity#InternalErrorException':
                  return [3, 4];
                case 'InvalidIdentityPoolConfigurationException':
                case 'com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException':
                  return [3, 6];
                case 'InvalidParameterException':
                case 'com.amazonaws.cognitoidentity#InvalidParameterException':
                  return [3, 8];
                case 'NotAuthorizedException':
                case 'com.amazonaws.cognitoidentity#NotAuthorizedException':
                  return [3, 10];
                case 'ResourceConflictException':
                case 'com.amazonaws.cognitoidentity#ResourceConflictException':
                  return [3, 12];
                case 'ResourceNotFoundException':
                case 'com.amazonaws.cognitoidentity#ResourceNotFoundException':
                  return [3, 14];
                case 'TooManyRequestsException':
                case 'com.amazonaws.cognitoidentity#TooManyRequestsException':
                  return [3, 16];
              }
              return [3, 18];
            case 2:
              return (s = [{}]), [4, mc(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 4:
              return (a = [{}]), [4, wc(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 6:
              return (u = [{}]), [4, bc(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 8:
              return (c = [{}]), [4, Sc(n, t)];
            case 9:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, c.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 10:
              return (l = [{}]), [4, Ac(n, t)];
            case 11:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, l.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 12:
              return (f = [{}]), [4, Ec(n, t)];
            case 13:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, f.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 14:
              return (h = [{}]), [4, Cc(n, t)];
            case 15:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, h.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 16:
              return (d = [{}]), [4, Tc(n, t)];
            case 17:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, d.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 18:
              (p = n.body),
                (i = p.code || p.Code || i),
                (o = nt(nt({}, p), {
                  name: '' + i,
                  message: p.message || p.Message || i,
                  $fault: 'client',
                  $metadata: Gc(e),
                })),
                (y.label = 19);
            case 19:
              return (
                (g = o.message || o.Message || i),
                (o.message = g),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(g), o))]
              );
          }
        });
      });
    },
    yc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r, o, i, s, a, u, c, l, f, h, d, p, g, v;
        return ot(this, function (y) {
          switch (y.label) {
            case 0:
              return (r = [nt({}, e)]), (v = {}), [4, Kc(e.body, t)];
            case 1:
              switch (
                ((n = nt.apply(void 0, r.concat([((v.body = y.sent()), v)]))),
                (i = 'UnknownError'),
                (i = Vc(e, n.body)),
                i)
              ) {
                case 'ExternalServiceException':
                case 'com.amazonaws.cognitoidentity#ExternalServiceException':
                  return [3, 2];
                case 'InternalErrorException':
                case 'com.amazonaws.cognitoidentity#InternalErrorException':
                  return [3, 4];
                case 'InvalidParameterException':
                case 'com.amazonaws.cognitoidentity#InvalidParameterException':
                  return [3, 6];
                case 'LimitExceededException':
                case 'com.amazonaws.cognitoidentity#LimitExceededException':
                  return [3, 8];
                case 'NotAuthorizedException':
                case 'com.amazonaws.cognitoidentity#NotAuthorizedException':
                  return [3, 10];
                case 'ResourceConflictException':
                case 'com.amazonaws.cognitoidentity#ResourceConflictException':
                  return [3, 12];
                case 'ResourceNotFoundException':
                case 'com.amazonaws.cognitoidentity#ResourceNotFoundException':
                  return [3, 14];
                case 'TooManyRequestsException':
                case 'com.amazonaws.cognitoidentity#TooManyRequestsException':
                  return [3, 16];
              }
              return [3, 18];
            case 2:
              return (s = [{}]), [4, mc(n, t)];
            case 3:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, s.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 4:
              return (a = [{}]), [4, wc(n, t)];
            case 5:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, a.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 6:
              return (u = [{}]), [4, Sc(n, t)];
            case 7:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, u.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 8:
              return (c = [{}]), [4, _c(n, t)];
            case 9:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, c.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 10:
              return (l = [{}]), [4, Ac(n, t)];
            case 11:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, l.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 12:
              return (f = [{}]), [4, Ec(n, t)];
            case 13:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, f.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 14:
              return (h = [{}]), [4, Cc(n, t)];
            case 15:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, h.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 16:
              return (d = [{}]), [4, Tc(n, t)];
            case 17:
              return (
                (o = nt.apply(void 0, [nt.apply(void 0, d.concat([y.sent()])), { name: i, $metadata: Gc(e) }])), [3, 19]
              );
            case 18:
              (p = n.body),
                (i = p.code || p.Code || i),
                (o = nt(nt({}, p), {
                  name: '' + i,
                  message: p.message || p.Message || i,
                  $fault: 'client',
                  $metadata: Gc(e),
                })),
                (y.label = 19);
            case 19:
              return (
                (g = o.message || o.Message || i),
                (o.message = g),
                delete o.Message,
                [2, Promise.reject(Object.assign(new Error(g), o))]
              );
          }
        });
      });
    },
    mc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = xc(n, t)),
            [2, nt({ name: 'ExternalServiceException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    wc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Uc(n, t)),
            [2, nt({ name: 'InternalErrorException', $fault: 'server', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    bc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Lc(n, t)),
            [2, nt({ name: 'InvalidIdentityPoolConfigurationException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    Sc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Mc(n, t)),
            [2, nt({ name: 'InvalidParameterException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    _c = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Dc(n, t)),
            [2, nt({ name: 'LimitExceededException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    Ac = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Fc(n, t)),
            [2, nt({ name: 'NotAuthorizedException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    Ec = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = jc(n, t)),
            [2, nt({ name: 'ResourceConflictException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    Cc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Bc(n, t)),
            [2, nt({ name: 'ResourceNotFoundException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    Tc = function (e, t) {
      return rt(void 0, void 0, void 0, function () {
        var n, r;
        return ot(this, function (o) {
          return (
            (n = e.body),
            (r = Hc(n, t)),
            [2, nt({ name: 'TooManyRequestsException', $fault: 'client', $metadata: Gc(e) }, r)]
          );
        });
      });
    },
    Ic = function (e, t) {
      return nt(
        nt(
          nt({}, void 0 !== e.CustomRoleArn && null !== e.CustomRoleArn && { CustomRoleArn: e.CustomRoleArn }),
          void 0 !== e.IdentityId && null !== e.IdentityId && { IdentityId: e.IdentityId },
        ),
        void 0 !== e.Logins && null !== e.Logins && { Logins: kc(e.Logins, t) },
      );
    },
    Pc = function (e, t) {
      return nt(
        nt(
          nt({}, void 0 !== e.AccountId && null !== e.AccountId && { AccountId: e.AccountId }),
          void 0 !== e.IdentityPoolId && null !== e.IdentityPoolId && { IdentityPoolId: e.IdentityPoolId },
        ),
        void 0 !== e.Logins && null !== e.Logins && { Logins: kc(e.Logins, t) },
      );
    },
    kc = function (e, t) {
      return Object.entries(e).reduce(function (e, t) {
        var n,
          r = it(t, 2),
          o = r[0],
          i = r[1];
        return null === i ? e : nt(nt({}, e), (((n = {})[o] = i), n));
      }, {});
    },
    Oc = function (e, t) {
      return {
        AccessKeyId: void 0 !== e.AccessKeyId && null !== e.AccessKeyId ? e.AccessKeyId : void 0,
        Expiration:
          void 0 !== e.Expiration && null !== e.Expiration ? new Date(Math.round(1e3 * e.Expiration)) : void 0,
        SecretKey: void 0 !== e.SecretKey && null !== e.SecretKey ? e.SecretKey : void 0,
        SessionToken: void 0 !== e.SessionToken && null !== e.SessionToken ? e.SessionToken : void 0,
      };
    },
    xc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Rc = function (e, t) {
      return {
        Credentials: void 0 !== e.Credentials && null !== e.Credentials ? Oc(e.Credentials) : void 0,
        IdentityId: void 0 !== e.IdentityId && null !== e.IdentityId ? e.IdentityId : void 0,
      };
    },
    Nc = function (e, t) {
      return { IdentityId: void 0 !== e.IdentityId && null !== e.IdentityId ? e.IdentityId : void 0 };
    },
    Uc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Lc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Mc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Dc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Fc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    jc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Bc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Hc = function (e, t) {
      return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 };
    },
    Gc = function (e) {
      var t;
      return {
        httpStatusCode: e.statusCode,
        requestId: null !== (t = e.headers['x-amzn-requestid']) && void 0 !== t ? t : e.headers['x-amzn-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      };
    },
    qc = function (e, t) {
      return (
        void 0 === e && (e = new Uint8Array()),
        e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array())
      );
    },
    zc = function (e, t, n, r, o) {
      return rt(void 0, void 0, void 0, function () {
        var i, s, a, u, c, l;
        return ot(this, function (f) {
          switch (f.label) {
            case 0:
              return [4, e.endpoint()];
            case 1:
              return (
                (i = f.sent()),
                (s = i.hostname),
                (a = i.protocol),
                (u = void 0 === a ? 'https' : a),
                (c = i.port),
                (l = { protocol: u, hostname: s, port: c, method: 'POST', path: n, headers: t }),
                void 0 !== r && (l.hostname = r),
                void 0 !== o && (l.body = o),
                [2, new vt(l)]
              );
          }
        });
      });
    },
    Kc = function (e, t) {
      return (function (e, t) {
        return qc(e, t).then(function (e) {
          return t.utf8Encoder(e);
        });
      })(e, t).then(function (e) {
        return e.length ? JSON.parse(e) : {};
      });
    },
    Vc = function (e, t) {
      var n,
        r,
        o = function (e) {
          var t = e;
          return t.indexOf(':') >= 0 && (t = t.split(':')[0]), t.indexOf('#') >= 0 && (t = t.split('#')[1]), t;
        },
        i =
          ((n = e.headers),
          (r = 'x-amzn-errortype'),
          Object.keys(n).find(function (e) {
            return e.toLowerCase() === r.toLowerCase();
          }));
      return void 0 !== i ? o(e.headers[i]) : void 0 !== t.code ? o(t.code) : void 0 !== t.__type ? o(t.__type) : '';
    },
    Wc = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CognitoIdentityClient',
              commandName: 'GetCredentialsForIdentityCommand',
              inputFilterSensitiveLog: Eu.filterSensitiveLog,
              outputFilterSensitiveLog: Tu.filterSensitiveLog,
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = {
                    'content-type': 'application/x-amz-json-1.1',
                    'x-amz-target': 'AWSCognitoIdentityService.GetCredentialsForIdentity',
                  }),
                  (r = JSON.stringify(Ic(e, t))),
                  [2, zc(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r, o;
              return ot(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, vc(e, t)] : [4, Kc(e.body, t)];
                  case 1:
                    return (n = i.sent()), (r = Rc(n, t)), (o = nt({ $metadata: Gc(e) }, r)), [2, Promise.resolve(o)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    Yc = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.input = t), n;
      }
      return (
        tt(t, e),
        (t.prototype.resolveMiddleware = function (e, t, n) {
          this.middlewareStack.use(la(t, this.serialize, this.deserialize));
          var r = e.concat(this.middlewareStack),
            o = {
              logger: t.logger,
              clientName: 'CognitoIdentityClient',
              commandName: 'GetIdCommand',
              inputFilterSensitiveLog: Pu.filterSensitiveLog,
              outputFilterSensitiveLog: ku.filterSensitiveLog,
            },
            i = t.requestHandler;
          return r.resolve(function (e) {
            return i.handle(e.request, n || {});
          }, o);
        }),
        (t.prototype.serialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r;
              return ot(this, function (o) {
                return (
                  (n = {
                    'content-type': 'application/x-amz-json-1.1',
                    'x-amz-target': 'AWSCognitoIdentityService.GetId',
                  }),
                  (r = JSON.stringify(Pc(e, t))),
                  [2, zc(t, n, '/', void 0, r)]
                );
              });
            });
          })(e, t);
        }),
        (t.prototype.deserialize = function (e, t) {
          return (function (e, t) {
            return rt(void 0, void 0, void 0, function () {
              var n, r, o;
              return ot(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e.statusCode >= 300 ? [2, yc(e, t)] : [4, Kc(e.body, t)];
                  case 1:
                    return (n = i.sent()), (r = Nc(n, t)), (o = nt({ $metadata: Gc(e) }, r)), [2, Promise.resolve(o)];
                }
              });
            });
          })(e, t);
        }),
        t
      );
    })(fo),
    $c = function (e, t) {
      return ($c =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
  var Jc = (function (e) {
    function t(t, n) {
      void 0 === n && (n = !0);
      var r = e.call(this, t) || this;
      return (r.tryNextLink = n), r;
    }
    return (
      (function (e, t) {
        function n() {
          this.constructor = e;
        }
        $c(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      })(t, e),
      t
    );
  })(Error);
  function Zc(e) {
    return Promise.all(
      Object.keys(e).reduce(function (t, n) {
        var r = e[n];
        return (
          'string' == typeof r
            ? t.push([n, r])
            : t.push(
                r().then(function (e) {
                  return [n, e];
                }),
              ),
          t
        );
      }, []),
    ).then(function (e) {
      return e.reduce(function (e, t) {
        var n = nu(t, 2),
          r = n[0],
          o = n[1];
        return (e[r] = o), e;
      }, {});
    });
  }
  function Xc(e) {
    var t = this;
    return function () {
      return eu(t, void 0, void 0, function () {
        var t, n, r, o, i, s, a, u, c, l, f, h, d;
        return tu(this, function (p) {
          switch (p.label) {
            case 0:
              return (
                (l = (c = e.client).send),
                (f = Wc.bind),
                (d = { CustomRoleArn: e.customRoleArn, IdentityId: e.identityId }),
                e.logins ? [4, Zc(e.logins)] : [3, 2]
              );
            case 1:
              return (h = p.sent()), [3, 3];
            case 2:
              (h = void 0), (p.label = 3);
            case 3:
              return [4, l.apply(c, [new (f.apply(Wc, [void 0, ((d.Logins = h), d)]))()])];
            case 4:
              return (
                (t = p.sent().Credentials),
                (n =
                  void 0 === t
                    ? (function () {
                        throw new Jc('Response from Amazon Cognito contained no credentials');
                      })()
                    : t),
                (r = n.AccessKeyId),
                (o =
                  void 0 === r
                    ? (function () {
                        throw new Jc('Response from Amazon Cognito contained no access key ID');
                      })()
                    : r),
                (i = n.Expiration),
                (s = n.SecretKey),
                (a =
                  void 0 === s
                    ? (function () {
                        throw new Jc('Response from Amazon Cognito contained no secret key');
                      })()
                    : s),
                (u = n.SessionToken),
                [2, { identityId: e.identityId, accessKeyId: o, secretAccessKey: a, sessionToken: u, expiration: i }]
              );
          }
        });
      });
    };
  }
  var Qc = 'IdentityIds',
    el = (function () {
      function e(e) {
        void 0 === e && (e = 'aws:cognito-identity-ids'), (this.dbName = e);
      }
      return (
        (e.prototype.getItem = function (e) {
          return this.withObjectStore('readonly', function (t) {
            var n = t.get(e);
            return new Promise(function (e) {
              (n.onerror = function () {
                return e(null);
              }),
                (n.onsuccess = function () {
                  return e(n.result ? n.result.value : null);
                });
            });
          }).catch(function () {
            return null;
          });
        }),
        (e.prototype.removeItem = function (e) {
          return this.withObjectStore('readwrite', function (t) {
            var n = t.delete(e);
            return new Promise(function (e, t) {
              (n.onerror = function () {
                return t(n.error);
              }),
                (n.onsuccess = function () {
                  return e();
                });
            });
          });
        }),
        (e.prototype.setItem = function (e, t) {
          return this.withObjectStore('readwrite', function (n) {
            var r = n.put({ id: e, value: t });
            return new Promise(function (e, t) {
              (r.onerror = function () {
                return t(r.error);
              }),
                (r.onsuccess = function () {
                  return e();
                });
            });
          });
        }),
        (e.prototype.getDb = function () {
          var e = self.indexedDB.open(this.dbName, 1);
          return new Promise(function (t, n) {
            (e.onsuccess = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                n(e.error);
              }),
              (e.onblocked = function () {
                n(new Error('Unable to access DB'));
              }),
              (e.onupgradeneeded = function () {
                var t = e.result;
                (t.onerror = function () {
                  n(new Error('Failed to create object store'));
                }),
                  t.createObjectStore(Qc, { keyPath: 'id' });
              });
          });
        }),
        (e.prototype.withObjectStore = function (e, t) {
          return this.getDb().then(function (n) {
            var r = n.transaction(Qc, e);
            return (
              (r.oncomplete = function () {
                return n.close();
              }),
              new Promise(function (e, n) {
                (r.onerror = function () {
                  return n(r.error);
                }),
                  e(t(r.objectStore(Qc)));
              }).catch(function (e) {
                throw (n.close(), e);
              })
            );
          });
        }),
        e
      );
    })(),
    tl = new ((function () {
      function e(e) {
        void 0 === e && (e = {}), (this.store = e);
      }
      return (
        (e.prototype.getItem = function (e) {
          return e in this.store ? this.store[e] : null;
        }),
        (e.prototype.removeItem = function (e) {
          delete this.store[e];
        }),
        (e.prototype.setItem = function (e, t) {
          this.store[e] = t;
        }),
        e
      );
    })())();
  function nl(e) {
    var t = this,
      n = e.accountId,
      r = e.cache,
      o =
        void 0 === r
          ? 'object' == typeof self && self.indexedDB
            ? new el()
            : 'object' == typeof window && window.localStorage
            ? window.localStorage
            : tl
          : r,
      i = e.client,
      s = e.customRoleArn,
      a = e.identityPoolId,
      u = e.logins,
      c = e.userIdentifier,
      l = void 0 === c ? (u && 0 !== Object.keys(u).length ? void 0 : 'ANONYMOUS') : c,
      f = l ? 'aws:cognito-identity-credentials:' + a + ':' + l : void 0,
      h = function () {
        return eu(t, void 0, void 0, function () {
          var e, t, r, c, l, d, p, g, v;
          return tu(this, function (y) {
            switch (y.label) {
              case 0:
                return (t = f) ? [4, o.getItem(f)] : [3, 2];
              case 1:
                (t = y.sent()), (y.label = 2);
              case 2:
                return (e = t)
                  ? [3, 7]
                  : ((d = (l = i).send),
                    (p = Yc.bind),
                    (v = { AccountId: n, IdentityPoolId: a }),
                    u ? [4, Zc(u)] : [3, 4]);
              case 3:
                return (g = y.sent()), [3, 5];
              case 4:
                (g = void 0), (y.label = 5);
              case 5:
                return [4, d.apply(l, [new (p.apply(Yc, [void 0, ((v.Logins = g), v)]))()])];
              case 6:
                (r = y.sent().IdentityId),
                  (c =
                    void 0 === r
                      ? (function () {
                          throw new Jc('Response from Amazon Cognito contained no identity ID');
                        })()
                      : r),
                  (e = c),
                  f && Promise.resolve(o.setItem(f, e)).catch(function () {}),
                  (y.label = 7);
              case 7:
                return [2, (h = Xc({ client: i, customRoleArn: s, logins: u, identityId: e }))()];
            }
          });
        });
      };
    return function () {
      return h().catch(function (e) {
        return eu(t, void 0, void 0, function () {
          return tu(this, function (t) {
            throw (f && Promise.resolve(o.removeItem(f)).catch(function () {}), e);
          });
        });
      });
    };
  }
  var rl = function () {
      return (
        (rl =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        rl.apply(this, arguments)
      );
    },
    ol = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    il = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    sl = new ie.ConsoleLogger('Credentials'),
    al = new ((function () {
      function e(e) {
        (this._gettingCredPromise = null),
          (this._refreshHandlers = {}),
          (this.Auth = void 0),
          this.configure(e),
          (this._refreshHandlers.google = Xa.refreshGoogleToken),
          (this._refreshHandlers.facebook = Qa.refreshFacebookToken);
      }
      return (
        (e.prototype.getModuleName = function () {
          return 'Credentials';
        }),
        (e.prototype.getCredSource = function () {
          return this._credentials_source;
        }),
        (e.prototype.configure = function (e) {
          if (!e) return this._config || {};
          this._config = Object.assign({}, this._config, e);
          var t = this._config.refreshHandlers;
          return (
            t && (this._refreshHandlers = rl(rl({}, this._refreshHandlers), t)),
            (this._storage = this._config.storage),
            this._storage || (this._storage = new Ca().getStorage()),
            (this._storageSync = Promise.resolve()),
            'function' == typeof this._storage.sync && (this._storageSync = this._storage.sync()),
            this._config
          );
        }),
        (e.prototype.get = function () {
          return sl.debug('getting credentials'), this._pickupCredentials();
        }),
        (e.prototype._getCognitoIdentityIdStorageKey = function (e) {
          return 'CognitoIdentityId-' + e;
        }),
        (e.prototype._pickupCredentials = function () {
          return (
            sl.debug('picking up credentials'),
            this._gettingCredPromise && this._gettingCredPromise.isPending()
              ? sl.debug('getting old cred promise')
              : (sl.debug('getting new cred promise'), (this._gettingCredPromise = He(this._keepAlive()))),
            this._gettingCredPromise
          );
        }),
        (e.prototype._keepAlive = function () {
          return ol(this, void 0, void 0, function () {
            var e, t, n, r, o, i, s;
            return il(this, function (a) {
              switch (a.label) {
                case 0:
                  if (
                    (sl.debug('checking if credentials exists and not expired'),
                    (e = this._credentials) && !this._isExpired(e) && !this._isPastTTL())
                  )
                    return (
                      sl.debug('credentials not changed and not expired, directly return'), [2, Promise.resolve(e)]
                    );
                  if (
                    (sl.debug('need to get a new credential or refresh the existing one'),
                    (t = this.Auth),
                    !(n = void 0 === t ? oe.Amplify.Auth : t) || 'function' != typeof n.currentUserCredentials)
                  )
                    return [2, Promise.reject('No Auth module registered in Amplify')];
                  if (this._isExpired(e) || !this._isPastTTL()) return [3, 6];
                  sl.debug('ttl has passed but token is not yet expired'), (a.label = 1);
                case 1:
                  return a.trys.push([1, 5, , 6]), [4, n.currentUserPoolUser()];
                case 2:
                  return (r = a.sent()), [4, n.currentSession()];
                case 3:
                  return (
                    (o = a.sent()),
                    (i = o.refreshToken),
                    [
                      4,
                      new Promise(function (e, t) {
                        r.refreshSession(i, function (n, r) {
                          return n ? t(n) : e(r);
                        });
                      }),
                    ]
                  );
                case 4:
                  return a.sent(), [3, 6];
                case 5:
                  return (s = a.sent()), sl.debug('Error attempting to refreshing the session', s), [3, 6];
                case 6:
                  return [2, n.currentUserCredentials()];
              }
            });
          });
        }),
        (e.prototype.refreshFederatedToken = function (e) {
          sl.debug('Getting federated credentials');
          var t = e.provider,
            n = e.user,
            r = e.token,
            o = e.identity_id,
            i = e.expires_at;
          i = 1970 === new Date(i).getFullYear() ? 1e3 * i : i;
          var s = this;
          return (
            sl.debug('checking if federated jwt token expired'),
            i > new Date().getTime()
              ? (sl.debug('token not expired'),
                this._setCredentialsFromFederation({ provider: t, token: r, user: n, identity_id: o, expires_at: i }))
              : s._refreshHandlers[t] && 'function' == typeof s._refreshHandlers[t]
              ? (sl.debug('getting refreshed jwt token from federation provider'),
                this._providerRefreshWithRetry({ refreshHandler: s._refreshHandlers[t], provider: t, user: n }))
              : (sl.debug('no refresh handler for provider:', t),
                this.clear(),
                Promise.reject('no refresh handler for provider'))
          );
        }),
        (e.prototype._providerRefreshWithRetry = function (e) {
          var t = this,
            n = e.refreshHandler,
            r = e.provider,
            o = e.user;
          return Pa.jitteredExponentialRetry(n, [], 1e4)
            .then(function (e) {
              return (
                sl.debug('refresh federated token sucessfully', e),
                t._setCredentialsFromFederation({
                  provider: r,
                  token: e.token,
                  user: o,
                  identity_id: e.identity_id,
                  expires_at: e.expires_at,
                })
              );
            })
            .catch(function (e) {
              return (
                ('string' == typeof e && 0 === e.toLowerCase().lastIndexOf('network error', e.length)) || t.clear(),
                sl.debug('refresh federated token failed', e),
                Promise.reject('refreshing federation token failed: ' + e)
              );
            });
        }),
        (e.prototype._isExpired = function (e) {
          if (!e) return sl.debug('no credentials for expiration check'), !0;
          sl.debug('are these credentials expired?', e);
          var t = Date.now();
          return e.expiration.getTime() <= t;
        }),
        (e.prototype._isPastTTL = function () {
          return this._nextCredentialsRefresh <= Date.now();
        }),
        (e.prototype._setCredentialsForGuest = function () {
          return ol(this, void 0, void 0, function () {
            var e,
              t,
              n,
              r,
              o,
              i,
              s,
              a = this;
            return il(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    sl.debug('setting credentials for guest'),
                    (e = this._config),
                    (t = e.identityPoolId),
                    (n = e.region),
                    e.mandatorySignIn
                      ? [2, Promise.reject('cannot get guest credentials when mandatory signin enabled')]
                      : t
                      ? n
                        ? ((o = this), [4, this._getGuestIdentityId()])
                        : (sl.debug('region is not configured for getting the credentials'),
                          [2, Promise.reject('region is not configured for getting the credentials')])
                      : (sl.debug('No Cognito Identity pool provided for unauthenticated access'),
                        [2, Promise.reject('No Cognito Identity pool provided for unauthenticated access')])
                  );
                case 1:
                  return (
                    (r = o._identityId = u.sent()),
                    (i = new gc({ region: n, customUserAgent: we() })),
                    (s = void 0),
                    (s = r
                      ? Xc({ identityId: r, client: i })()
                      : (function () {
                          return ol(a, void 0, void 0, function () {
                            var e;
                            return il(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [4, i.send(new Yc({ IdentityPoolId: t }))];
                                case 1:
                                  return (
                                    (e = n.sent().IdentityId),
                                    (this._identityId = e),
                                    [2, Xc({ client: i, identityId: e })()]
                                  );
                              }
                            });
                          });
                        })().catch(function (e) {
                          return ol(a, void 0, void 0, function () {
                            return il(this, function (t) {
                              throw e;
                            });
                          });
                        })),
                    [
                      2,
                      this._loadCredentials(s, 'guest', !1, null)
                        .then(function (e) {
                          return e;
                        })
                        .catch(function (e) {
                          return ol(a, void 0, void 0, function () {
                            var n = this;
                            return il(this, function (o) {
                              switch (o.label) {
                                case 0:
                                  return 'ResourceNotFoundException' !== e.name ||
                                    e.message !== "Identity '" + r + "' not found."
                                    ? [3, 2]
                                    : (sl.debug('Failed to load guest credentials'),
                                      [4, this._removeGuestIdentityId()]);
                                case 1:
                                  return (
                                    o.sent(),
                                    (s = (function () {
                                      return ol(n, void 0, void 0, function () {
                                        var e;
                                        return il(this, function (n) {
                                          switch (n.label) {
                                            case 0:
                                              return [4, i.send(new Yc({ IdentityPoolId: t }))];
                                            case 1:
                                              return (
                                                (e = n.sent().IdentityId),
                                                (this._identityId = e),
                                                [2, Xc({ client: i, identityId: e })()]
                                              );
                                          }
                                        });
                                      });
                                    })().catch(function (e) {
                                      return ol(n, void 0, void 0, function () {
                                        return il(this, function (t) {
                                          throw e;
                                        });
                                      });
                                    })),
                                    [2, this._loadCredentials(s, 'guest', !1, null)]
                                  );
                                case 2:
                                  return [2, e];
                              }
                            });
                          });
                        }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype._setCredentialsFromFederation = function (e) {
          var t = e.provider,
            n = e.token,
            r = e.identity_id,
            o =
              {
                google: 'accounts.google.com',
                facebook: 'graph.facebook.com',
                amazon: 'www.amazon.com',
                developer: 'cognito-identity.amazonaws.com',
              }[t] || t;
          if (!o) return Promise.reject('You must specify a federated provider');
          var i = {};
          i[o] = n;
          var s = this._config,
            a = s.identityPoolId,
            u = s.region;
          if (!a)
            return (
              sl.debug('No Cognito Federated Identity pool provided'),
              Promise.reject('No Cognito Federated Identity pool provided')
            );
          if (!u)
            return (
              sl.debug('region is not configured for getting the credentials'),
              Promise.reject('region is not configured for getting the credentials')
            );
          var c = new gc({ region: u, customUserAgent: we() }),
            l = void 0;
          r
            ? (l = Xc({ identityId: r, logins: i, client: c })())
            : (l = nl({ logins: i, identityPoolId: a, client: c })());
          return this._loadCredentials(l, 'federated', !0, e);
        }),
        (e.prototype._setCredentialsFromSession = function (e) {
          var t = this;
          sl.debug('set credentials from session');
          var n = e.getIdToken().getJwtToken(),
            r = this._config,
            o = r.region,
            i = r.userPoolId,
            s = r.identityPoolId;
          if (!s)
            return (
              sl.debug('No Cognito Federated Identity pool provided'),
              Promise.reject('No Cognito Federated Identity pool provided')
            );
          if (!o)
            return (
              sl.debug('region is not configured for getting the credentials'),
              Promise.reject('region is not configured for getting the credentials')
            );
          var a = {};
          a['cognito-idp.' + o + '.amazonaws.com/' + i] = n;
          var u = new gc({ region: o, customUserAgent: we() }),
            c = ol(t, void 0, void 0, function () {
              var e, t, n, r, o, i, c, l, f, h;
              return il(this, function (d) {
                switch (d.label) {
                  case 0:
                    return [4, this._getGuestIdentityId()];
                  case 1:
                    return (e = d.sent()) ? [3, 3] : [4, u.send(new Yc({ IdentityPoolId: s, Logins: a }))];
                  case 2:
                    (n = d.sent().IdentityId), (t = n), (d.label = 3);
                  case 3:
                    return [4, u.send(new Wc({ IdentityId: e || t, Logins: a }))];
                  case 4:
                    return (
                      (r = d.sent()),
                      (o = r.Credentials),
                      (i = o.AccessKeyId),
                      (c = o.Expiration),
                      (l = o.SecretKey),
                      (f = o.SessionToken),
                      (h = r.IdentityId),
                      (this._identityId = h),
                      e
                        ? (sl.debug('The guest identity ' + e + ' has been successfully linked to the logins'),
                          e === h && sl.debug('The guest identity ' + e + ' has become the primary identity'),
                          [4, this._removeGuestIdentityId()])
                        : [3, 6]
                    );
                  case 5:
                    d.sent(), (d.label = 6);
                  case 6:
                    return [2, { accessKeyId: i, secretAccessKey: l, sessionToken: f, expiration: c, identityId: h }];
                }
              });
            }).catch(function (e) {
              return ol(t, void 0, void 0, function () {
                return il(this, function (t) {
                  throw e;
                });
              });
            });
          return this._loadCredentials(c, 'userPool', !0, null);
        }),
        (e.prototype._loadCredentials = function (e, t, n, r) {
          var o = this,
            i = this;
          return new Promise(function (s, a) {
            e.then(function (e) {
              return ol(o, void 0, void 0, function () {
                var o, a, u, c, l;
                return il(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        (sl.debug('Load credentials successfully', e),
                        this._identityId && !e.identityId && (e.identityId = this._identityId),
                        (i._credentials = e),
                        (i._credentials.authenticated = n),
                        (i._credentials_source = t),
                        (i._nextCredentialsRefresh = new Date().getTime() + 3e6),
                        'federated' === t)
                      ) {
                        (o = Object.assign({ id: this._credentials.identityId }, r.user)),
                          (a = r.provider),
                          (u = r.token),
                          (c = r.expires_at),
                          (l = r.identity_id);
                        try {
                          this._storage.setItem(
                            'aws-amplify-federatedInfo',
                            JSON.stringify({ provider: a, token: u, user: o, expires_at: c, identity_id: l }),
                          );
                        } catch (e) {
                          sl.debug('Failed to put federated info into auth storage', e);
                        }
                      }
                      return 'guest' !== t ? [3, 2] : [4, this._setGuestIdentityId(e.identityId)];
                    case 1:
                      f.sent(), (f.label = 2);
                    case 2:
                      return s(i._credentials), [2];
                  }
                });
              });
            }).catch(function (t) {
              if (t)
                return sl.debug('Failed to load credentials', e), sl.debug('Error loading credentials', t), void a(t);
            });
          });
        }),
        (e.prototype.set = function (e, t) {
          return 'session' === t
            ? this._setCredentialsFromSession(e)
            : 'federation' === t
            ? this._setCredentialsFromFederation(e)
            : 'guest' === t
            ? this._setCredentialsForGuest()
            : (sl.debug('no source specified for setting credentials'), Promise.reject('invalid source'));
        }),
        (e.prototype.clear = function () {
          return ol(this, void 0, void 0, function () {
            return il(this, function (e) {
              return (
                (this._credentials = null),
                (this._credentials_source = null),
                sl.debug('removing aws-amplify-federatedInfo from storage'),
                this._storage.removeItem('aws-amplify-federatedInfo'),
                [2]
              );
            });
          });
        }),
        (e.prototype._getGuestIdentityId = function () {
          return ol(this, void 0, void 0, function () {
            var e, t;
            return il(this, function (n) {
              switch (n.label) {
                case 0:
                  (e = this._config.identityPoolId), (n.label = 1);
                case 1:
                  return n.trys.push([1, 3, , 4]), [4, this._storageSync];
                case 2:
                  return n.sent(), [2, this._storage.getItem(this._getCognitoIdentityIdStorageKey(e))];
                case 3:
                  return (t = n.sent()), sl.debug('Failed to get the cached guest identityId', t), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype._setGuestIdentityId = function (e) {
          return ol(this, void 0, void 0, function () {
            var t, n;
            return il(this, function (r) {
              switch (r.label) {
                case 0:
                  (t = this._config.identityPoolId), (r.label = 1);
                case 1:
                  return r.trys.push([1, 3, , 4]), [4, this._storageSync];
                case 2:
                  return r.sent(), this._storage.setItem(this._getCognitoIdentityIdStorageKey(t), e), [3, 4];
                case 3:
                  return (n = r.sent()), sl.debug('Failed to cache guest identityId', n), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype._removeGuestIdentityId = function () {
          return ol(this, void 0, void 0, function () {
            var e;
            return il(this, function (t) {
              return (
                (e = this._config.identityPoolId),
                sl.debug('removing ' + this._getCognitoIdentityIdStorageKey(e) + ' from storage'),
                this._storage.removeItem(this._getCognitoIdentityIdStorageKey(e)),
                [2]
              );
            });
          });
        }),
        (e.prototype.shear = function (e) {
          return {
            accessKeyId: e.accessKeyId,
            sessionToken: e.sessionToken,
            secretAccessKey: e.secretAccessKey,
            identityId: e.identityId,
            authenticated: e.authenticated,
          };
        }),
        e
      );
    })())(null);
  oe.Amplify.register(al);
  var ul,
    cl,
    ll = {};
  e(
    ll,
    'default',
    () => yl,
    e => (yl = e),
  ),
    (ul = function (e, t) {
      if ('string' != typeof e) throw new TypeError('argument str must be a string');
      for (var n = {}, r = t || {}, o = e.split(';'), i = r.decode || fl, s = 0; s < o.length; s++) {
        var a = o[s],
          u = a.indexOf('=');
        if (!(u < 0)) {
          var c = a.substring(0, u).trim();
          if (null == n[c]) {
            var l = a.substring(u + 1, a.length).trim();
            '"' === l[0] && (l = l.slice(1, -1)), (n[c] = pl(l, i));
          }
        }
      }
      return n;
    }),
    (cl = function (e, t, n) {
      var r = n || {},
        o = r.encode || hl;
      if ('function' != typeof o) throw new TypeError('option encode is invalid');
      if (!dl.test(e)) throw new TypeError('argument name is invalid');
      var i = o(t);
      if (i && !dl.test(i)) throw new TypeError('argument val is invalid');
      var s = e + '=' + i;
      if (null != r.maxAge) {
        var a = r.maxAge - 0;
        if (isNaN(a) || !isFinite(a)) throw new TypeError('option maxAge is invalid');
        s += '; Max-Age=' + Math.floor(a);
      }
      if (r.domain) {
        if (!dl.test(r.domain)) throw new TypeError('option domain is invalid');
        s += '; Domain=' + r.domain;
      }
      if (r.path) {
        if (!dl.test(r.path)) throw new TypeError('option path is invalid');
        s += '; Path=' + r.path;
      }
      if (r.expires) {
        if ('function' != typeof r.expires.toUTCString) throw new TypeError('option expires is invalid');
        s += '; Expires=' + r.expires.toUTCString();
      }
      r.httpOnly && (s += '; HttpOnly');
      r.secure && (s += '; Secure');
      if (r.sameSite) {
        switch ('string' == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
          case !0:
            s += '; SameSite=Strict';
            break;
          case 'lax':
            s += '; SameSite=Lax';
            break;
          case 'strict':
            s += '; SameSite=Strict';
            break;
          case 'none':
            s += '; SameSite=None';
            break;
          default:
            throw new TypeError('option sameSite is invalid');
        }
      }
      return s;
    });
  var fl = decodeURIComponent,
    hl = encodeURIComponent,
    dl = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function pl(e, t) {
    try {
      return t(e);
    } catch (t) {
      return e;
    }
  }
  function gl(e, t) {
    void 0 === t && (t = {});
    var n = (function (e) {
      return e && 'j' === e[0] && ':' === e[1] ? e.substr(2) : e;
    })(e);
    if (
      (function (e, t) {
        return void 0 === t && (t = !e || ('{' !== e[0] && '[' !== e[0] && '"' !== e[0])), !t;
      })(n, t.doNotParse)
    )
      try {
        return JSON.parse(n);
      } catch (e) {}
    return e;
  }
  var vl = function () {
      return (
        (vl =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        vl.apply(this, arguments)
      );
    },
    yl = (function () {
      function e(e, t) {
        var n = this;
        (this.changeListeners = []),
          (this.HAS_DOCUMENT_COOKIE = !1),
          (this.cookies = (function (e, t) {
            return 'string' == typeof e ? ul(e, t) : 'object' == typeof e && null !== e ? e : {};
          })(e, t)),
          new Promise(function () {
            n.HAS_DOCUMENT_COOKIE = 'object' == typeof document && 'string' == typeof document.cookie;
          }).catch(function () {});
      }
      return (
        (e.prototype._updateBrowserValues = function (e) {
          this.HAS_DOCUMENT_COOKIE && (this.cookies = ul(document.cookie, e));
        }),
        (e.prototype._emitChange = function (e) {
          for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e);
        }),
        (e.prototype.get = function (e, t, n) {
          return void 0 === t && (t = {}), this._updateBrowserValues(n), gl(this.cookies[e], t);
        }),
        (e.prototype.getAll = function (e, t) {
          void 0 === e && (e = {}), this._updateBrowserValues(t);
          var n = {};
          for (var r in this.cookies) n[r] = gl(this.cookies[r], e);
          return n;
        }),
        (e.prototype.set = function (e, t, n) {
          var r;
          'object' == typeof t && (t = JSON.stringify(t)),
            (this.cookies = vl(vl({}, this.cookies), (((r = {})[e] = t), r))),
            this.HAS_DOCUMENT_COOKIE && (document.cookie = cl(e, t, n)),
            this._emitChange({ name: e, value: t, options: n });
        }),
        (e.prototype.remove = function (e, t) {
          var n = (t = vl(vl({}, t), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }));
          (this.cookies = vl({}, this.cookies)),
            delete this.cookies[e],
            this.HAS_DOCUMENT_COOKIE && (document.cookie = cl(e, '', n)),
            this._emitChange({ name: e, value: void 0, options: t });
        }),
        (e.prototype.addChangeListener = function (e) {
          this.changeListeners.push(e);
        }),
        (e.prototype.removeChangeListener = function (e) {
          var t = this.changeListeners.indexOf(e);
          t >= 0 && this.changeListeners.splice(t, 1);
        }),
        e
      );
    })(),
    ml = ll.default,
    wl = qe().isBrowser,
    bl = (function () {
      function e(e) {
        void 0 === e && (e = {}),
          (this.cookies = new ml()),
          (this.store = wl ? window.localStorage : Object.create(null)),
          (this.cookies = e.req ? new ml(e.req.headers.cookie) : new ml()),
          Object.assign(this.store, this.cookies.getAll());
      }
      return (
        Object.defineProperty(e.prototype, 'length', {
          get: function () {
            return Object.entries(this.store).length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.clear = function () {
          var e = this;
          Array.from(new Array(this.length))
            .map(function (t, n) {
              return e.key(n);
            })
            .forEach(function (t) {
              return e.removeItem(t);
            });
        }),
        (e.prototype.getItem = function (e) {
          return this.getLocalItem(e);
        }),
        (e.prototype.getLocalItem = function (e) {
          return Object.prototype.hasOwnProperty.call(this.store, e) ? this.store[e] : null;
        }),
        (e.prototype.getUniversalItem = function (e) {
          return this.cookies.get(e);
        }),
        (e.prototype.key = function (e) {
          return Object.keys(this.store)[e];
        }),
        (e.prototype.removeItem = function (e) {
          this.removeLocalItem(e), this.removeUniversalItem(e);
        }),
        (e.prototype.removeLocalItem = function (e) {
          delete this.store[e];
        }),
        (e.prototype.removeUniversalItem = function (e) {
          this.cookies.remove(e, { path: '/' });
        }),
        (e.prototype.setItem = function (e, t) {
          switch ((this.setLocalItem(e, t), e.split('.').pop())) {
            case 'LastAuthUser':
            case 'accessToken':
            case 'refreshToken':
            case 'idToken':
              wl ? this.setUniversalItem(e, t) : this.setLocalItem(e, t);
          }
        }),
        (e.prototype.setLocalItem = function (e, t) {
          this.store[e] = t;
        }),
        (e.prototype.setUniversalItem = function (e, t) {
          this.cookies.set(e, t, { path: '/', sameSite: !0, secure: 'localhost' !== window.location.hostname });
        }),
        e
      );
    })();
  me.userAgent, oe.Amplify;
  r(re, Ye), r(re, Ia);
  /*!
   * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */ var Sl = (function () {
      function e(e) {
        var t = e || {},
          n = t.ValidationData,
          r = t.Username,
          o = t.Password,
          i = t.AuthParameters,
          s = t.ClientMetadata;
        (this.validationData = n || {}),
          (this.authParameters = i || {}),
          (this.clientMetadata = s || {}),
          (this.username = r),
          (this.password = o);
      }
      var t = e.prototype;
      return (
        (t.getUsername = function () {
          return this.username;
        }),
        (t.getPassword = function () {
          return this.password;
        }),
        (t.getValidationData = function () {
          return this.validationData;
        }),
        (t.getAuthParameters = function () {
          return this.authParameters;
        }),
        (t.getClientMetadata = function () {
          return this.clientMetadata;
        }),
        e
      );
    })(),
    _l = a('4q79f'),
    Al = a('iTs6l');
  a('CSYCJ');
  var El,
    Cl = a('eMcSz'),
    Tl = a('5wa3w');
  if (
    ('undefined' != typeof window && window.crypto && (El = window.crypto),
    !El && 'undefined' != typeof window && window.msCrypto && (El = window.msCrypto),
    !El && void 0 !== t && t.crypto && (El = t.crypto),
    !El)
  )
    try {
      El = a('79B2d');
    } catch (e) {}
  function Il() {
    if (El) {
      if ('function' == typeof El.getRandomValues)
        try {
          return El.getRandomValues(new Uint32Array(1))[0];
        } catch (e) {}
      if ('function' == typeof El.randomBytes)
        try {
          return El.randomBytes(4).readInt32LE();
        } catch (e) {}
    }
    throw new Error('Native crypto module could not be used to get secure random number.');
  }
  var Pl,
    kl = (function () {
      function e(e, t) {
        (e = this.words = e || []), (this.sigBytes = null != t ? t : 4 * e.length);
      }
      var t = e.prototype;
      return (
        (t.random = function (t) {
          for (var n = [], r = 0; r < t; r += 4) n.push(Il());
          return new e(n, t);
        }),
        (t.toString = function () {
          return (function (e) {
            for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
              var i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
              r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
            }
            return r.join('');
          })(this);
        }),
        e
      );
    })(),
    Ol = xl;
  function xl(e, t) {
    null != e && this.fromString(e, t);
  }
  function Rl() {
    return new xl(null);
  }
  var Nl = 'undefined' != typeof navigator;
  Nl && 'Microsoft Internet Explorer' == navigator.appName
    ? ((xl.prototype.am = function (e, t, n, r, o, i) {
        for (var s = 32767 & t, a = t >> 15; --i >= 0; ) {
          var u = 32767 & this[e],
            c = this[e++] >> 15,
            l = a * u + c * s;
          (o = ((u = s * u + ((32767 & l) << 15) + n[r] + (1073741823 & o)) >>> 30) + (l >>> 15) + a * c + (o >>> 30)),
            (n[r++] = 1073741823 & u);
        }
        return o;
      }),
      (Pl = 30))
    : Nl && 'Netscape' != navigator.appName
    ? ((xl.prototype.am = function (e, t, n, r, o, i) {
        for (; --i >= 0; ) {
          var s = t * this[e++] + n[r] + o;
          (o = Math.floor(s / 67108864)), (n[r++] = 67108863 & s);
        }
        return o;
      }),
      (Pl = 26))
    : ((xl.prototype.am = function (e, t, n, r, o, i) {
        for (var s = 16383 & t, a = t >> 14; --i >= 0; ) {
          var u = 16383 & this[e],
            c = this[e++] >> 14,
            l = a * u + c * s;
          (o = ((u = s * u + ((16383 & l) << 14) + n[r] + o) >> 28) + (l >> 14) + a * c), (n[r++] = 268435455 & u);
        }
        return o;
      }),
      (Pl = 28)),
    (xl.prototype.DB = Pl),
    (xl.prototype.DM = (1 << Pl) - 1),
    (xl.prototype.DV = 1 << Pl);
  (xl.prototype.FV = Math.pow(2, 52)), (xl.prototype.F1 = 52 - Pl), (xl.prototype.F2 = 2 * Pl - 52);
  var Ul,
    Ll,
    Ml = new Array();
  for (Ul = '0'.charCodeAt(0), Ll = 0; Ll <= 9; ++Ll) Ml[Ul++] = Ll;
  for (Ul = 'a'.charCodeAt(0), Ll = 10; Ll < 36; ++Ll) Ml[Ul++] = Ll;
  for (Ul = 'A'.charCodeAt(0), Ll = 10; Ll < 36; ++Ll) Ml[Ul++] = Ll;
  function Dl(e) {
    return '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(e);
  }
  function Fl(e, t) {
    var n = Ml[e.charCodeAt(t)];
    return null == n ? -1 : n;
  }
  function jl(e) {
    var t = Rl();
    return t.fromInt(e), t;
  }
  function Bl(e) {
    var t,
      n = 1;
    return (
      0 != (t = e >>> 16) && ((e = t), (n += 16)),
      0 != (t = e >> 8) && ((e = t), (n += 8)),
      0 != (t = e >> 4) && ((e = t), (n += 4)),
      0 != (t = e >> 2) && ((e = t), (n += 2)),
      0 != (t = e >> 1) && ((e = t), (n += 1)),
      n
    );
  }
  function Hl(e) {
    (this.m = e),
      (this.mp = e.invDigit()),
      (this.mpl = 32767 & this.mp),
      (this.mph = this.mp >> 15),
      (this.um = (1 << (e.DB - 15)) - 1),
      (this.mt2 = 2 * e.t);
  }
  function Gl(e) {
    return _l.Buffer.from(new kl().random(e).toString(), 'hex');
  }
  (Hl.prototype.convert = function (e) {
    var t = Rl();
    return (
      e.abs().dlShiftTo(this.m.t, t),
      t.divRemTo(this.m, null, t),
      e.s < 0 && t.compareTo(xl.ZERO) > 0 && this.m.subTo(t, t),
      t
    );
  }),
    (Hl.prototype.revert = function (e) {
      var t = Rl();
      return e.copyTo(t), this.reduce(t), t;
    }),
    (Hl.prototype.reduce = function (e) {
      for (; e.t <= this.mt2; ) e[e.t++] = 0;
      for (var t = 0; t < this.m.t; ++t) {
        var n = 32767 & e[t],
          r = (n * this.mpl + (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) & e.DM;
        for (e[(n = t + this.m.t)] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV; ) (e[n] -= e.DV), e[++n]++;
      }
      e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
    }),
    (Hl.prototype.mulTo = function (e, t, n) {
      e.multiplyTo(t, n), this.reduce(n);
    }),
    (Hl.prototype.sqrTo = function (e, t) {
      e.squareTo(t), this.reduce(t);
    }),
    (xl.prototype.copyTo = function (e) {
      for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
      (e.t = this.t), (e.s = this.s);
    }),
    (xl.prototype.fromInt = function (e) {
      (this.t = 1), (this.s = e < 0 ? -1 : 0), e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + this.DV) : (this.t = 0);
    }),
    (xl.prototype.fromString = function (e, t) {
      var n;
      if (16 == t) n = 4;
      else if (8 == t) n = 3;
      else if (2 == t) n = 1;
      else if (32 == t) n = 5;
      else {
        if (4 != t) throw new Error('Only radix 2, 4, 8, 16, 32 are supported');
        n = 2;
      }
      (this.t = 0), (this.s = 0);
      for (var r = e.length, o = !1, i = 0; --r >= 0; ) {
        var s = Fl(e, r);
        s < 0
          ? '-' == e.charAt(r) && (o = !0)
          : ((o = !1),
            0 == i
              ? (this[this.t++] = s)
              : i + n > this.DB
              ? ((this[this.t - 1] |= (s & ((1 << (this.DB - i)) - 1)) << i), (this[this.t++] = s >> (this.DB - i)))
              : (this[this.t - 1] |= s << i),
            (i += n) >= this.DB && (i -= this.DB));
      }
      this.clamp(), o && xl.ZERO.subTo(this, this);
    }),
    (xl.prototype.clamp = function () {
      for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; ) --this.t;
    }),
    (xl.prototype.dlShiftTo = function (e, t) {
      var n;
      for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
      for (n = e - 1; n >= 0; --n) t[n] = 0;
      (t.t = this.t + e), (t.s = this.s);
    }),
    (xl.prototype.drShiftTo = function (e, t) {
      for (var n = e; n < this.t; ++n) t[n - e] = this[n];
      (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
    }),
    (xl.prototype.lShiftTo = function (e, t) {
      var n,
        r = e % this.DB,
        o = this.DB - r,
        i = (1 << o) - 1,
        s = Math.floor(e / this.DB),
        a = (this.s << r) & this.DM;
      for (n = this.t - 1; n >= 0; --n) (t[n + s + 1] = (this[n] >> o) | a), (a = (this[n] & i) << r);
      for (n = s - 1; n >= 0; --n) t[n] = 0;
      (t[s] = a), (t.t = this.t + s + 1), (t.s = this.s), t.clamp();
    }),
    (xl.prototype.rShiftTo = function (e, t) {
      t.s = this.s;
      var n = Math.floor(e / this.DB);
      if (n >= this.t) t.t = 0;
      else {
        var r = e % this.DB,
          o = this.DB - r,
          i = (1 << r) - 1;
        t[0] = this[n] >> r;
        for (var s = n + 1; s < this.t; ++s) (t[s - n - 1] |= (this[s] & i) << o), (t[s - n] = this[s] >> r);
        r > 0 && (t[this.t - n - 1] |= (this.s & i) << o), (t.t = this.t - n), t.clamp();
      }
    }),
    (xl.prototype.subTo = function (e, t) {
      for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
        (r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
      if (e.t < this.t) {
        for (r -= e.s; n < this.t; ) (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
        r += this.s;
      } else {
        for (r += this.s; n < e.t; ) (r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
        r -= e.s;
      }
      (t.s = r < 0 ? -1 : 0), r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r), (t.t = n), t.clamp();
    }),
    (xl.prototype.multiplyTo = function (e, t) {
      var n = this.abs(),
        r = e.abs(),
        o = n.t;
      for (t.t = o + r.t; --o >= 0; ) t[o] = 0;
      for (o = 0; o < r.t; ++o) t[o + n.t] = n.am(0, r[o], t, o, 0, n.t);
      (t.s = 0), t.clamp(), this.s != e.s && xl.ZERO.subTo(t, t);
    }),
    (xl.prototype.squareTo = function (e) {
      for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0; ) e[n] = 0;
      for (n = 0; n < t.t - 1; ++n) {
        var r = t.am(n, t[n], e, 2 * n, 0, 1);
        (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV &&
          ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
      }
      e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), (e.s = 0), e.clamp();
    }),
    (xl.prototype.divRemTo = function (e, t, n) {
      var r = e.abs();
      if (!(r.t <= 0)) {
        var o = this.abs();
        if (o.t < r.t) return null != t && t.fromInt(0), void (null != n && this.copyTo(n));
        null == n && (n = Rl());
        var i = Rl(),
          s = this.s,
          a = e.s,
          u = this.DB - Bl(r[r.t - 1]);
        u > 0 ? (r.lShiftTo(u, i), o.lShiftTo(u, n)) : (r.copyTo(i), o.copyTo(n));
        var c = i.t,
          l = i[c - 1];
        if (0 != l) {
          var f = l * (1 << this.F1) + (c > 1 ? i[c - 2] >> this.F2 : 0),
            h = this.FV / f,
            d = (1 << this.F1) / f,
            p = 1 << this.F2,
            g = n.t,
            v = g - c,
            y = null == t ? Rl() : t;
          for (
            i.dlShiftTo(v, y),
              n.compareTo(y) >= 0 && ((n[n.t++] = 1), n.subTo(y, n)),
              xl.ONE.dlShiftTo(c, y),
              y.subTo(i, i);
            i.t < c;

          )
            i[i.t++] = 0;
          for (; --v >= 0; ) {
            var m = n[--g] == l ? this.DM : Math.floor(n[g] * h + (n[g - 1] + p) * d);
            if ((n[g] += i.am(0, m, n, v, 0, c)) < m)
              for (i.dlShiftTo(v, y), n.subTo(y, n); n[g] < --m; ) n.subTo(y, n);
          }
          null != t && (n.drShiftTo(c, t), s != a && xl.ZERO.subTo(t, t)),
            (n.t = c),
            n.clamp(),
            u > 0 && n.rShiftTo(u, n),
            s < 0 && xl.ZERO.subTo(n, n);
        }
      }
    }),
    (xl.prototype.invDigit = function () {
      if (this.t < 1) return 0;
      var e = this[0];
      if (0 == (1 & e)) return 0;
      var t = 3 & e;
      return (t =
        ((t =
          ((t = ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) & 255) *
            (2 - (((65535 & e) * t) & 65535))) &
          65535) *
          (2 - ((e * t) % this.DV))) %
        this.DV) > 0
        ? this.DV - t
        : -t;
    }),
    (xl.prototype.addTo = function (e, t) {
      for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
        (r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
      if (e.t < this.t) {
        for (r += e.s; n < this.t; ) (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
        r += this.s;
      } else {
        for (r += this.s; n < e.t; ) (r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
        r += e.s;
      }
      (t.s = r < 0 ? -1 : 0), r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r), (t.t = n), t.clamp();
    }),
    (xl.prototype.toString = function (e) {
      if (this.s < 0) return '-' + this.negate().toString(e);
      var t;
      if (16 == e) t = 4;
      else if (8 == e) t = 3;
      else if (2 == e) t = 1;
      else if (32 == e) t = 5;
      else {
        if (4 != e) throw new Error('Only radix 2, 4, 8, 16, 32 are supported');
        t = 2;
      }
      var n,
        r = (1 << t) - 1,
        o = !1,
        i = '',
        s = this.t,
        a = this.DB - ((s * this.DB) % t);
      if (s-- > 0)
        for (a < this.DB && (n = this[s] >> a) > 0 && ((o = !0), (i = Dl(n))); s >= 0; )
          a < t
            ? ((n = (this[s] & ((1 << a) - 1)) << (t - a)), (n |= this[--s] >> (a += this.DB - t)))
            : ((n = (this[s] >> (a -= t)) & r), a <= 0 && ((a += this.DB), --s)),
            n > 0 && (o = !0),
            o && (i += Dl(n));
      return o ? i : '0';
    }),
    (xl.prototype.negate = function () {
      var e = Rl();
      return xl.ZERO.subTo(this, e), e;
    }),
    (xl.prototype.abs = function () {
      return this.s < 0 ? this.negate() : this;
    }),
    (xl.prototype.compareTo = function (e) {
      var t = this.s - e.s;
      if (0 != t) return t;
      var n = this.t;
      if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
      for (; --n >= 0; ) if (0 != (t = this[n] - e[n])) return t;
      return 0;
    }),
    (xl.prototype.bitLength = function () {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Bl(this[this.t - 1] ^ (this.s & this.DM));
    }),
    (xl.prototype.mod = function (e) {
      var t = Rl();
      return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(xl.ZERO) > 0 && e.subTo(t, t), t;
    }),
    (xl.prototype.equals = function (e) {
      return 0 == this.compareTo(e);
    }),
    (xl.prototype.add = function (e) {
      var t = Rl();
      return this.addTo(e, t), t;
    }),
    (xl.prototype.subtract = function (e) {
      var t = Rl();
      return this.subTo(e, t), t;
    }),
    (xl.prototype.multiply = function (e) {
      var t = Rl();
      return this.multiplyTo(e, t), t;
    }),
    (xl.prototype.divide = function (e) {
      var t = Rl();
      return this.divRemTo(e, t, null), t;
    }),
    (xl.prototype.modPow = function (e, t, n) {
      var r,
        o = e.bitLength(),
        i = jl(1),
        s = new Hl(t);
      if (o <= 0) return i;
      r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6;
      var a = new Array(),
        u = 3,
        c = r - 1,
        l = (1 << r) - 1;
      if (((a[1] = s.convert(this)), r > 1)) {
        var f = Rl();
        for (s.sqrTo(a[1], f); u <= l; ) (a[u] = Rl()), s.mulTo(f, a[u - 2], a[u]), (u += 2);
      }
      var h,
        d,
        p = e.t - 1,
        g = !0,
        v = Rl();
      for (o = Bl(e[p]) - 1; p >= 0; ) {
        for (
          o >= c
            ? (h = (e[p] >> (o - c)) & l)
            : ((h = (e[p] & ((1 << (o + 1)) - 1)) << (c - o)), p > 0 && (h |= e[p - 1] >> (this.DB + o - c))),
            u = r;
          0 == (1 & h);

        )
          (h >>= 1), --u;
        if (((o -= u) < 0 && ((o += this.DB), --p), g)) a[h].copyTo(i), (g = !1);
        else {
          for (; u > 1; ) s.sqrTo(i, v), s.sqrTo(v, i), (u -= 2);
          u > 0 ? s.sqrTo(i, v) : ((d = i), (i = v), (v = d)), s.mulTo(v, a[h], i);
        }
        for (; p >= 0 && 0 == (e[p] & (1 << o)); )
          s.sqrTo(i, v), (d = i), (i = v), (v = d), --o < 0 && ((o = this.DB - 1), --p);
      }
      var y = s.revert(i);
      return n(null, y), y;
    }),
    (xl.ZERO = jl(0)),
    (xl.ONE = jl(1));
  var ql = /^[89a-f]/i,
    zl = (function () {
      function e(e) {
        (this.N = new Ol(
          'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF',
          16,
        )),
          (this.g = new Ol('2', 16)),
          (this.k = new Ol(this.hexHash('' + this.padHex(this.N) + this.padHex(this.g)), 16)),
          (this.smallAValue = this.generateRandomSmallA()),
          this.getLargeAValue(function () {}),
          (this.infoBits = _l.Buffer.from('Caldera Derived Key', 'utf8')),
          (this.poolName = e);
      }
      var t = e.prototype;
      return (
        (t.getSmallAValue = function () {
          return this.smallAValue;
        }),
        (t.getLargeAValue = function (e) {
          var t = this;
          this.largeAValue
            ? e(null, this.largeAValue)
            : this.calculateA(this.smallAValue, function (n, r) {
                n && e(n, null), (t.largeAValue = r), e(null, t.largeAValue);
              });
        }),
        (t.generateRandomSmallA = function () {
          var e = Gl(128).toString('hex');
          return new Ol(e, 16);
        }),
        (t.generateRandomString = function () {
          return Gl(40).toString('base64');
        }),
        (t.getRandomPassword = function () {
          return this.randomPassword;
        }),
        (t.getSaltDevices = function () {
          return this.SaltToHashDevices;
        }),
        (t.getVerifierDevices = function () {
          return this.verifierDevices;
        }),
        (t.generateHashDevice = function (e, t, n) {
          var r = this;
          this.randomPassword = this.generateRandomString();
          var o = '' + e + t + ':' + this.randomPassword,
            i = this.hash(o),
            s = Gl(16).toString('hex');
          (this.SaltToHashDevices = this.padHex(new Ol(s, 16))),
            this.g.modPow(new Ol(this.hexHash(this.SaltToHashDevices + i), 16), this.N, function (e, t) {
              e && n(e, null), (r.verifierDevices = r.padHex(t)), n(null, null);
            });
        }),
        (t.calculateA = function (e, t) {
          var n = this;
          this.g.modPow(e, this.N, function (e, r) {
            e && t(e, null),
              r.mod(n.N).equals(Ol.ZERO) && t(new Error('Illegal paramater. A mod N cannot be 0.'), null),
              t(null, r);
          });
        }),
        (t.calculateU = function (e, t) {
          return (this.UHexHash = this.hexHash(this.padHex(e) + this.padHex(t))), new Ol(this.UHexHash, 16);
        }),
        (t.hash = function (e) {
          var t = e instanceof _l.Buffer ? o(Al).lib.WordArray.create(e) : e,
            n = o(Cl)(t).toString();
          return new Array(64 - n.length).join('0') + n;
        }),
        (t.hexHash = function (e) {
          return this.hash(_l.Buffer.from(e, 'hex'));
        }),
        (t.computehkdf = function (e, t) {
          var n = o(Al).lib.WordArray.create(
              _l.Buffer.concat([this.infoBits, _l.Buffer.from(String.fromCharCode(1), 'utf8')]),
            ),
            r = e instanceof _l.Buffer ? o(Al).lib.WordArray.create(e) : e,
            i = t instanceof _l.Buffer ? o(Al).lib.WordArray.create(t) : t,
            s = o(Tl)(r, i),
            a = o(Tl)(n, s);
          return _l.Buffer.from(a.toString(), 'hex').slice(0, 16);
        }),
        (t.getPasswordAuthenticationKey = function (e, t, n, r, o) {
          var i = this;
          if (n.mod(this.N).equals(Ol.ZERO)) throw new Error('B cannot be zero.');
          if (((this.UValue = this.calculateU(this.largeAValue, n)), this.UValue.equals(Ol.ZERO)))
            throw new Error('U cannot be zero.');
          var s = '' + this.poolName + e + ':' + t,
            a = this.hash(s),
            u = new Ol(this.hexHash(this.padHex(r) + a), 16);
          this.calculateS(u, n, function (e, t) {
            e && o(e, null);
            var n = i.computehkdf(_l.Buffer.from(i.padHex(t), 'hex'), _l.Buffer.from(i.padHex(i.UValue), 'hex'));
            o(null, n);
          });
        }),
        (t.calculateS = function (e, t, n) {
          var r = this;
          this.g.modPow(e, this.N, function (o, i) {
            o && n(o, null),
              t.subtract(r.k.multiply(i)).modPow(r.smallAValue.add(r.UValue.multiply(e)), r.N, function (e, t) {
                e && n(e, null), n(null, t.mod(r.N));
              });
          });
        }),
        (t.getNewPasswordRequiredChallengeUserAttributePrefix = function () {
          return 'userAttributes.';
        }),
        (t.padHex = function (e) {
          if (!(e instanceof Ol)) throw new Error('Not a BigInteger');
          var t = e.compareTo(Ol.ZERO) < 0,
            n = e.abs().toString(16);
          if (((n = n.length % 2 != 0 ? '0' + n : n), (n = ql.test(n) ? '00' + n : n), t)) {
            var r = n
              .split('')
              .map(function (e) {
                var t = 15 & ~parseInt(e, 16);
                return '0123456789ABCDEF'.charAt(t);
              })
              .join('');
            (n = new Ol(r, 16).add(Ol.ONE).toString(16)).toUpperCase().startsWith('FF8') && (n = n.substring(2));
          }
          return n;
        }),
        e
      );
    })(),
    Kl =
      ((_l = a('4q79f')),
      (function () {
        function e(e) {
          (this.jwtToken = e || ''), (this.payload = this.decodePayload());
        }
        var t = e.prototype;
        return (
          (t.getJwtToken = function () {
            return this.jwtToken;
          }),
          (t.getExpiration = function () {
            return this.payload.exp;
          }),
          (t.getIssuedAt = function () {
            return this.payload.iat;
          }),
          (t.decodePayload = function () {
            var e = this.jwtToken.split('.')[1];
            try {
              return JSON.parse(_l.Buffer.from(e, 'base64').toString('utf8'));
            } catch (e) {
              return {};
            }
          }),
          e
        );
      })());
  function Vl(e, t) {
    return (Vl =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  var Wl = (function (e) {
    var t, n;
    function r(t) {
      var n = (void 0 === t ? {} : t).AccessToken;
      return e.call(this, n || '') || this;
    }
    return (n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Vl(t, n), r;
  })(Kl);
  function Yl(e, t) {
    return (Yl =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  var $l = (function (e) {
      var t, n;
      function r(t) {
        var n = (void 0 === t ? {} : t).IdToken;
        return e.call(this, n || '') || this;
      }
      return (n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Yl(t, n), r;
    })(Kl),
    Jl = (function () {
      function e(e) {
        var t = (void 0 === e ? {} : e).RefreshToken;
        this.token = t || '';
      }
      return (
        (e.prototype.getToken = function () {
          return this.token;
        }),
        e
      );
    })();
  /*!
   * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */ (_l = a('4q79f')), (Al = a('iTs6l'));
  a('CSYCJ');
  var Zl = a('gHkqp'),
    Xl =
      ((Tl = a('5wa3w')),
      (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.IdToken,
            r = t.RefreshToken,
            o = t.AccessToken,
            i = t.ClockDrift;
          if (null == o || null == n) throw new Error('Id token and Access Token must be present.');
          (this.idToken = n),
            (this.refreshToken = r),
            (this.accessToken = o),
            (this.clockDrift = void 0 === i ? this.calculateClockDrift() : i);
        }
        var t = e.prototype;
        return (
          (t.getIdToken = function () {
            return this.idToken;
          }),
          (t.getRefreshToken = function () {
            return this.refreshToken;
          }),
          (t.getAccessToken = function () {
            return this.accessToken;
          }),
          (t.getClockDrift = function () {
            return this.clockDrift;
          }),
          (t.calculateClockDrift = function () {
            return Math.floor(new Date() / 1e3) - Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
          }),
          (t.isValid = function () {
            var e = Math.floor(new Date() / 1e3) - this.clockDrift;
            return e < this.accessToken.getExpiration() && e < this.idToken.getExpiration();
          }),
          e
        );
      })()),
    Ql = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ef = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    tf = (function () {
      function e() {}
      return (
        (e.prototype.getNowString = function () {
          var e = new Date(),
            t = ef[e.getUTCDay()],
            n = Ql[e.getUTCMonth()],
            r = e.getUTCDate(),
            o = e.getUTCHours();
          o < 10 && (o = '0' + o);
          var i = e.getUTCMinutes();
          i < 10 && (i = '0' + i);
          var s = e.getUTCSeconds();
          return (
            s < 10 && (s = '0' + s), t + ' ' + n + ' ' + r + ' ' + o + ':' + i + ':' + s + ' UTC ' + e.getUTCFullYear()
          );
        }),
        e
      );
    })(),
    nf = (function () {
      function e(e) {
        var t = void 0 === e ? {} : e,
          n = t.Name,
          r = t.Value;
        (this.Name = n || ''), (this.Value = r || '');
      }
      var t = e.prototype;
      return (
        (t.getValue = function () {
          return this.Value;
        }),
        (t.setValue = function (e) {
          return (this.Value = e), this;
        }),
        (t.getName = function () {
          return this.Name;
        }),
        (t.setName = function (e) {
          return (this.Name = e), this;
        }),
        (t.toString = function () {
          return JSON.stringify(this);
        }),
        (t.toJSON = function () {
          return { Name: this.Name, Value: this.Value };
        }),
        e
      );
    })(),
    rf = {},
    of = (function () {
      function e() {}
      return (
        (e.setItem = function (e, t) {
          return (rf[e] = t), rf[e];
        }),
        (e.getItem = function (e) {
          return Object.prototype.hasOwnProperty.call(rf, e) ? rf[e] : void 0;
        }),
        (e.removeItem = function (e) {
          return delete rf[e];
        }),
        (e.clear = function () {
          return (rf = {});
        }),
        e
      );
    })(),
    sf = (function () {
      function e() {
        try {
          (this.storageWindow = window.localStorage),
            this.storageWindow.setItem('aws.cognito.test-ls', 1),
            this.storageWindow.removeItem('aws.cognito.test-ls');
        } catch (e) {
          this.storageWindow = of;
        }
      }
      return (
        (e.prototype.getStorage = function () {
          return this.storageWindow;
        }),
        e
      );
    })(),
    af = 'undefined' != typeof navigator ? navigator.userAgent : 'nodejs',
    uf = (function () {
      function e(e) {
        if (null == e || null == e.Username || null == e.Pool)
          throw new Error('Username and Pool information are required.');
        (this.username = e.Username || ''),
          (this.pool = e.Pool),
          (this.Session = null),
          (this.client = e.Pool.client),
          (this.signInUserSession = null),
          (this.authenticationFlowType = 'USER_SRP_AUTH'),
          (this.storage = e.Storage || new sf().getStorage()),
          (this.keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId()),
          (this.userDataKey = this.keyPrefix + '.' + this.username + '.userData');
      }
      var t = e.prototype;
      return (
        (t.setSignInUserSession = function (e) {
          this.clearCachedUserData(), (this.signInUserSession = e), this.cacheTokens();
        }),
        (t.getSignInUserSession = function () {
          return this.signInUserSession;
        }),
        (t.getUsername = function () {
          return this.username;
        }),
        (t.getAuthenticationFlowType = function () {
          return this.authenticationFlowType;
        }),
        (t.setAuthenticationFlowType = function (e) {
          this.authenticationFlowType = e;
        }),
        (t.initiateAuth = function (e, t) {
          var n = this,
            r = e.getAuthParameters();
          r.USERNAME = this.username;
          var o = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(),
            i = { AuthFlow: 'CUSTOM_AUTH', ClientId: this.pool.getClientId(), AuthParameters: r, ClientMetadata: o };
          this.getUserContextData() && (i.UserContextData = this.getUserContextData()),
            this.client.request('InitiateAuth', i, function (e, r) {
              if (e) return t.onFailure(e);
              var o = r.ChallengeName,
                i = r.ChallengeParameters;
              return 'CUSTOM_CHALLENGE' === o
                ? ((n.Session = r.Session), t.customChallenge(i))
                : ((n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult)),
                  n.cacheTokens(),
                  t.onSuccess(n.signInUserSession));
            });
        }),
        (t.authenticateUser = function (e, t) {
          return 'USER_PASSWORD_AUTH' === this.authenticationFlowType
            ? this.authenticateUserPlainUsernamePassword(e, t)
            : 'USER_SRP_AUTH' === this.authenticationFlowType || 'CUSTOM_AUTH' === this.authenticationFlowType
            ? this.authenticateUserDefaultAuth(e, t)
            : t.onFailure(new Error('Authentication flow type is invalid.'));
        }),
        (t.authenticateUserDefaultAuth = function (e, t) {
          var n,
            r,
            i = this,
            s = new zl(this.pool.getUserPoolId().split('_')[1]),
            a = new tf(),
            u = {};
          null != this.deviceKey && (u.DEVICE_KEY = this.deviceKey),
            (u.USERNAME = this.username),
            s.getLargeAValue(function (c, l) {
              c && t.onFailure(c),
                (u.SRP_A = l.toString(16)),
                'CUSTOM_AUTH' === i.authenticationFlowType && (u.CHALLENGE_NAME = 'SRP_A');
              var f = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(),
                h = {
                  AuthFlow: i.authenticationFlowType,
                  ClientId: i.pool.getClientId(),
                  AuthParameters: u,
                  ClientMetadata: f,
                };
              i.getUserContextData(i.username) && (h.UserContextData = i.getUserContextData(i.username)),
                i.client.request('InitiateAuth', h, function (u, c) {
                  if (u) return t.onFailure(u);
                  var l = c.ChallengeParameters;
                  (i.username = l.USER_ID_FOR_SRP),
                    (i.userDataKey = i.keyPrefix + '.' + i.username + '.userData'),
                    (n = new Ol(l.SRP_B, 16)),
                    (r = new Ol(l.SALT, 16)),
                    i.getCachedDeviceKeyAndPassword(),
                    s.getPasswordAuthenticationKey(i.username, e.getPassword(), n, r, function (e, n) {
                      e && t.onFailure(e);
                      var r = a.getNowString(),
                        u = o(Al).lib.WordArray.create(
                          _l.Buffer.concat([
                            _l.Buffer.from(i.pool.getUserPoolId().split('_')[1], 'utf8'),
                            _l.Buffer.from(i.username, 'utf8'),
                            _l.Buffer.from(l.SECRET_BLOCK, 'base64'),
                            _l.Buffer.from(r, 'utf8'),
                          ]),
                        ),
                        h = o(Al).lib.WordArray.create(n),
                        d = o(Zl).stringify(o(Tl)(u, h)),
                        p = {};
                      (p.USERNAME = i.username),
                        (p.PASSWORD_CLAIM_SECRET_BLOCK = l.SECRET_BLOCK),
                        (p.TIMESTAMP = r),
                        (p.PASSWORD_CLAIM_SIGNATURE = d),
                        null != i.deviceKey && (p.DEVICE_KEY = i.deviceKey);
                      var g = {
                        ChallengeName: 'PASSWORD_VERIFIER',
                        ClientId: i.pool.getClientId(),
                        ChallengeResponses: p,
                        Session: c.Session,
                        ClientMetadata: f,
                      };
                      i.getUserContextData() && (g.UserContextData = i.getUserContextData()),
                        (function e(t, n) {
                          return i.client.request('RespondToAuthChallenge', t, function (r, o) {
                            return r &&
                              'ResourceNotFoundException' === r.code &&
                              -1 !== r.message.toLowerCase().indexOf('device')
                              ? ((p.DEVICE_KEY = null),
                                (i.deviceKey = null),
                                (i.randomPassword = null),
                                (i.deviceGroupKey = null),
                                i.clearCachedDeviceKeyAndPassword(),
                                e(t, n))
                              : n(r, o);
                          });
                        })(g, function (e, n) {
                          return e ? t.onFailure(e) : i.authenticateUserInternal(n, s, t);
                        });
                    });
                });
            });
        }),
        (t.authenticateUserPlainUsernamePassword = function (e, t) {
          var n = this,
            r = {};
          if (((r.USERNAME = this.username), (r.PASSWORD = e.getPassword()), r.PASSWORD)) {
            var o = new zl(this.pool.getUserPoolId().split('_')[1]);
            this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (r.DEVICE_KEY = this.deviceKey);
            var i = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(),
              s = {
                AuthFlow: 'USER_PASSWORD_AUTH',
                ClientId: this.pool.getClientId(),
                AuthParameters: r,
                ClientMetadata: i,
              };
            this.getUserContextData(this.username) && (s.UserContextData = this.getUserContextData(this.username)),
              this.client.request('InitiateAuth', s, function (e, r) {
                return e ? t.onFailure(e) : n.authenticateUserInternal(r, o, t);
              });
          } else t.onFailure(new Error('PASSWORD parameter is required'));
        }),
        (t.authenticateUserInternal = function (e, t, n) {
          var r = this,
            o = e.ChallengeName,
            i = e.ChallengeParameters;
          if ('SMS_MFA' === o) return (this.Session = e.Session), n.mfaRequired(o, i);
          if ('SELECT_MFA_TYPE' === o) return (this.Session = e.Session), n.selectMFAType(o, i);
          if ('MFA_SETUP' === o) return (this.Session = e.Session), n.mfaSetup(o, i);
          if ('SOFTWARE_TOKEN_MFA' === o) return (this.Session = e.Session), n.totpRequired(o, i);
          if ('CUSTOM_CHALLENGE' === o) return (this.Session = e.Session), n.customChallenge(i);
          if ('NEW_PASSWORD_REQUIRED' === o) {
            this.Session = e.Session;
            var s = null,
              a = null,
              u = [],
              c = t.getNewPasswordRequiredChallengeUserAttributePrefix();
            if (
              (i &&
                ((s = JSON.parse(e.ChallengeParameters.userAttributes)),
                (a = JSON.parse(e.ChallengeParameters.requiredAttributes))),
              a)
            )
              for (var l = 0; l < a.length; l++) u[l] = a[l].substr(c.length);
            return n.newPasswordRequired(s, u);
          }
          if ('DEVICE_SRP_AUTH' === o) return (this.Session = e.Session), void this.getDeviceResponse(n);
          (this.signInUserSession = this.getCognitoUserSession(e.AuthenticationResult)),
            (this.challengeName = o),
            this.cacheTokens();
          var f = e.AuthenticationResult.NewDeviceMetadata;
          if (null == f) return n.onSuccess(this.signInUserSession);
          t.generateHashDevice(
            e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
            e.AuthenticationResult.NewDeviceMetadata.DeviceKey,
            function (o) {
              if (o) return n.onFailure(o);
              var i = {
                Salt: _l.Buffer.from(t.getSaltDevices(), 'hex').toString('base64'),
                PasswordVerifier: _l.Buffer.from(t.getVerifierDevices(), 'hex').toString('base64'),
              };
              (r.verifierDevices = i.PasswordVerifier),
                (r.deviceGroupKey = f.DeviceGroupKey),
                (r.randomPassword = t.getRandomPassword()),
                r.client.request(
                  'ConfirmDevice',
                  {
                    DeviceKey: f.DeviceKey,
                    AccessToken: r.signInUserSession.getAccessToken().getJwtToken(),
                    DeviceSecretVerifierConfig: i,
                    DeviceName: af,
                  },
                  function (t, o) {
                    return t
                      ? n.onFailure(t)
                      : ((r.deviceKey = e.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                        r.cacheDeviceKeyAndPassword(),
                        !0 === o.UserConfirmationNecessary
                          ? n.onSuccess(r.signInUserSession, o.UserConfirmationNecessary)
                          : n.onSuccess(r.signInUserSession));
                  },
                );
            },
          );
        }),
        (t.completeNewPasswordChallenge = function (e, t, n, r) {
          var o = this;
          if (!e) return n.onFailure(new Error('New password is required.'));
          var i = new zl(this.pool.getUserPoolId().split('_')[1]),
            s = i.getNewPasswordRequiredChallengeUserAttributePrefix(),
            a = {};
          t &&
            Object.keys(t).forEach(function (e) {
              a[s + e] = t[e];
            }),
            (a.NEW_PASSWORD = e),
            (a.USERNAME = this.username);
          var u = {
            ChallengeName: 'NEW_PASSWORD_REQUIRED',
            ClientId: this.pool.getClientId(),
            ChallengeResponses: a,
            Session: this.Session,
            ClientMetadata: r,
          };
          this.getUserContextData() && (u.UserContextData = this.getUserContextData()),
            this.client.request('RespondToAuthChallenge', u, function (e, t) {
              return e ? n.onFailure(e) : o.authenticateUserInternal(t, i, n);
            });
        }),
        (t.getDeviceResponse = function (e, t) {
          var n = this,
            r = new zl(this.deviceGroupKey),
            i = new tf(),
            s = {};
          (s.USERNAME = this.username),
            (s.DEVICE_KEY = this.deviceKey),
            r.getLargeAValue(function (a, u) {
              a && e.onFailure(a), (s.SRP_A = u.toString(16));
              var c = {
                ChallengeName: 'DEVICE_SRP_AUTH',
                ClientId: n.pool.getClientId(),
                ChallengeResponses: s,
                ClientMetadata: t,
                Session: n.Session,
              };
              n.getUserContextData() && (c.UserContextData = n.getUserContextData()),
                n.client.request('RespondToAuthChallenge', c, function (t, s) {
                  if (t) return e.onFailure(t);
                  var a = s.ChallengeParameters,
                    u = new Ol(a.SRP_B, 16),
                    c = new Ol(a.SALT, 16);
                  r.getPasswordAuthenticationKey(n.deviceKey, n.randomPassword, u, c, function (t, r) {
                    if (t) return e.onFailure(t);
                    var u = i.getNowString(),
                      c = o(Al).lib.WordArray.create(
                        _l.Buffer.concat([
                          _l.Buffer.from(n.deviceGroupKey, 'utf8'),
                          _l.Buffer.from(n.deviceKey, 'utf8'),
                          _l.Buffer.from(a.SECRET_BLOCK, 'base64'),
                          _l.Buffer.from(u, 'utf8'),
                        ]),
                      ),
                      l = o(Al).lib.WordArray.create(r),
                      f = o(Zl).stringify(o(Tl)(c, l)),
                      h = {};
                    (h.USERNAME = n.username),
                      (h.PASSWORD_CLAIM_SECRET_BLOCK = a.SECRET_BLOCK),
                      (h.TIMESTAMP = u),
                      (h.PASSWORD_CLAIM_SIGNATURE = f),
                      (h.DEVICE_KEY = n.deviceKey);
                    var d = {
                      ChallengeName: 'DEVICE_PASSWORD_VERIFIER',
                      ClientId: n.pool.getClientId(),
                      ChallengeResponses: h,
                      Session: s.Session,
                    };
                    n.getUserContextData() && (d.UserContextData = n.getUserContextData()),
                      n.client.request('RespondToAuthChallenge', d, function (t, r) {
                        return t
                          ? e.onFailure(t)
                          : ((n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult)),
                            n.cacheTokens(),
                            e.onSuccess(n.signInUserSession));
                      });
                  });
                });
            });
        }),
        (t.confirmRegistration = function (e, t, n, r) {
          var o = {
            ClientId: this.pool.getClientId(),
            ConfirmationCode: e,
            Username: this.username,
            ForceAliasCreation: t,
            ClientMetadata: r,
          };
          this.getUserContextData() && (o.UserContextData = this.getUserContextData()),
            this.client.request('ConfirmSignUp', o, function (e) {
              return e ? n(e, null) : n(null, 'SUCCESS');
            });
        }),
        (t.sendCustomChallengeAnswer = function (e, t, n) {
          var r = this,
            o = {};
          (o.USERNAME = this.username), (o.ANSWER = e);
          var i = new zl(this.pool.getUserPoolId().split('_')[1]);
          this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (o.DEVICE_KEY = this.deviceKey);
          var s = {
            ChallengeName: 'CUSTOM_CHALLENGE',
            ChallengeResponses: o,
            ClientId: this.pool.getClientId(),
            Session: this.Session,
            ClientMetadata: n,
          };
          this.getUserContextData() && (s.UserContextData = this.getUserContextData()),
            this.client.request('RespondToAuthChallenge', s, function (e, n) {
              return e ? t.onFailure(e) : r.authenticateUserInternal(n, i, t);
            });
        }),
        (t.sendMFACode = function (e, t, n, r) {
          var o = this,
            i = {};
          (i.USERNAME = this.username), (i.SMS_MFA_CODE = e);
          var s = n || 'SMS_MFA';
          'SOFTWARE_TOKEN_MFA' === s && (i.SOFTWARE_TOKEN_MFA_CODE = e),
            null != this.deviceKey && (i.DEVICE_KEY = this.deviceKey);
          var a = {
            ChallengeName: s,
            ChallengeResponses: i,
            ClientId: this.pool.getClientId(),
            Session: this.Session,
            ClientMetadata: r,
          };
          this.getUserContextData() && (a.UserContextData = this.getUserContextData()),
            this.client.request('RespondToAuthChallenge', a, function (e, n) {
              if (e) return t.onFailure(e);
              if ('DEVICE_SRP_AUTH' !== n.ChallengeName) {
                if (
                  ((o.signInUserSession = o.getCognitoUserSession(n.AuthenticationResult)),
                  o.cacheTokens(),
                  null == n.AuthenticationResult.NewDeviceMetadata)
                )
                  return t.onSuccess(o.signInUserSession);
                var r = new zl(o.pool.getUserPoolId().split('_')[1]);
                r.generateHashDevice(
                  n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
                  n.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                  function (e) {
                    if (e) return t.onFailure(e);
                    var i = {
                      Salt: _l.Buffer.from(r.getSaltDevices(), 'hex').toString('base64'),
                      PasswordVerifier: _l.Buffer.from(r.getVerifierDevices(), 'hex').toString('base64'),
                    };
                    (o.verifierDevices = i.PasswordVerifier),
                      (o.deviceGroupKey = n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey),
                      (o.randomPassword = r.getRandomPassword()),
                      o.client.request(
                        'ConfirmDevice',
                        {
                          DeviceKey: n.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                          AccessToken: o.signInUserSession.getAccessToken().getJwtToken(),
                          DeviceSecretVerifierConfig: i,
                          DeviceName: af,
                        },
                        function (e, r) {
                          return e
                            ? t.onFailure(e)
                            : ((o.deviceKey = n.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                              o.cacheDeviceKeyAndPassword(),
                              !0 === r.UserConfirmationNecessary
                                ? t.onSuccess(o.signInUserSession, r.UserConfirmationNecessary)
                                : t.onSuccess(o.signInUserSession));
                        },
                      );
                  },
                );
              } else o.getDeviceResponse(t);
            });
        }),
        (t.changePassword = function (e, t, n, r) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n(new Error('User is not authenticated'), null);
          this.client.request(
            'ChangePassword',
            {
              PreviousPassword: e,
              ProposedPassword: t,
              AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
              ClientMetadata: r,
            },
            function (e) {
              return e ? n(e, null) : n(null, 'SUCCESS');
            },
          );
        }),
        (t.enableMFA = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error('User is not authenticated'), null);
          var t = [];
          t.push({ DeliveryMedium: 'SMS', AttributeName: 'phone_number' }),
            this.client.request(
              'SetUserSettings',
              { MFAOptions: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
              function (t) {
                return t ? e(t, null) : e(null, 'SUCCESS');
              },
            );
        }),
        (t.setUserMfaPreference = function (e, t, n) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n(new Error('User is not authenticated'), null);
          this.client.request(
            'SetUserMFAPreference',
            {
              SMSMfaSettings: e,
              SoftwareTokenMfaSettings: t,
              AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            },
            function (e) {
              return e ? n(e, null) : n(null, 'SUCCESS');
            },
          );
        }),
        (t.disableMFA = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error('User is not authenticated'), null);
          this.client.request(
            'SetUserSettings',
            { MFAOptions: [], AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
            function (t) {
              return t ? e(t, null) : e(null, 'SUCCESS');
            },
          );
        }),
        (t.deleteUser = function (e, t) {
          var n = this;
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error('User is not authenticated'), null);
          this.client.request(
            'DeleteUser',
            { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), ClientMetadata: t },
            function (t) {
              return t ? e(t, null) : (n.clearCachedUser(), e(null, 'SUCCESS'));
            },
          );
        }),
        (t.updateAttributes = function (e, t, n) {
          var r = this;
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t(new Error('User is not authenticated'), null);
          this.client.request(
            'UpdateUserAttributes',
            {
              AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
              UserAttributes: e,
              ClientMetadata: n,
            },
            function (e) {
              return e
                ? t(e, null)
                : r.getUserData(
                    function () {
                      return t(null, 'SUCCESS');
                    },
                    { bypassCache: !0 },
                  );
            },
          );
        }),
        (t.getUserAttributes = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error('User is not authenticated'), null);
          this.client.request(
            'GetUser',
            { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
            function (t, n) {
              if (t) return e(t, null);
              for (var r = [], o = 0; o < n.UserAttributes.length; o++) {
                var i = { Name: n.UserAttributes[o].Name, Value: n.UserAttributes[o].Value },
                  s = new nf(i);
                r.push(s);
              }
              return e(null, r);
            },
          );
        }),
        (t.getMFAOptions = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error('User is not authenticated'), null);
          this.client.request(
            'GetUser',
            { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
            function (t, n) {
              return t ? e(t, null) : e(null, n.MFAOptions);
            },
          );
        }),
        (t.createGetUserRequest = function () {
          return this.client.promisifyRequest('GetUser', {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          });
        }),
        (t.refreshSessionIfPossible = function (e) {
          var t = this;
          return (
            void 0 === e && (e = {}),
            new Promise(function (n) {
              var r = t.signInUserSession.getRefreshToken();
              r && r.getToken() ? t.refreshSession(r, n, e.clientMetadata) : n();
            })
          );
        }),
        (t.getUserData = function (e, t) {
          var n = this;
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return this.clearCachedUserData(), e(new Error('User is not authenticated'), null);
          var r = this.getUserDataFromCache();
          if (r)
            if (this.isFetchUserDataAndTokenRequired(t))
              this.fetchUserData()
                .then(function (e) {
                  return n.refreshSessionIfPossible(t).then(function () {
                    return e;
                  });
                })
                .then(function (t) {
                  return e(null, t);
                })
                .catch(e);
            else
              try {
                return void e(null, JSON.parse(r));
              } catch (t) {
                return this.clearCachedUserData(), void e(t, null);
              }
          else
            this.fetchUserData()
              .then(function (t) {
                e(null, t);
              })
              .catch(e);
        }),
        (t.getUserDataFromCache = function () {
          return this.storage.getItem(this.userDataKey);
        }),
        (t.isFetchUserDataAndTokenRequired = function (e) {
          var t = (e || {}).bypassCache;
          return void 0 !== t && t;
        }),
        (t.fetchUserData = function () {
          var e = this;
          return this.createGetUserRequest().then(function (t) {
            return e.cacheUserData(t), t;
          });
        }),
        (t.deleteAttributes = function (e, t) {
          var n = this;
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t(new Error('User is not authenticated'), null);
          this.client.request(
            'DeleteUserAttributes',
            { UserAttributeNames: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
            function (e) {
              return e
                ? t(e, null)
                : n.getUserData(
                    function () {
                      return t(null, 'SUCCESS');
                    },
                    { bypassCache: !0 },
                  );
            },
          );
        }),
        (t.resendConfirmationCode = function (e, t) {
          var n = { ClientId: this.pool.getClientId(), Username: this.username, ClientMetadata: t };
          this.client.request('ResendConfirmationCode', n, function (t, n) {
            return t ? e(t, null) : e(null, n);
          });
        }),
        (t.getSession = function (e, t) {
          if ((void 0 === t && (t = {}), null == this.username))
            return e(new Error('Username is null. Cannot retrieve a new session'), null);
          if (null != this.signInUserSession && this.signInUserSession.isValid())
            return e(null, this.signInUserSession);
          var n = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username,
            r = n + '.idToken',
            o = n + '.accessToken',
            i = n + '.refreshToken',
            s = n + '.clockDrift';
          if (this.storage.getItem(r)) {
            var a = new $l({ IdToken: this.storage.getItem(r) }),
              u = new Wl({ AccessToken: this.storage.getItem(o) }),
              c = new Jl({ RefreshToken: this.storage.getItem(i) }),
              l = parseInt(this.storage.getItem(s), 0) || 0,
              f = new Xl({ IdToken: a, AccessToken: u, RefreshToken: c, ClockDrift: l });
            if (f.isValid()) return (this.signInUserSession = f), e(null, this.signInUserSession);
            if (!c.getToken()) return e(new Error('Cannot retrieve a new session. Please authenticate.'), null);
            this.refreshSession(c, e, t.clientMetadata);
          } else e(new Error('Local storage is missing an ID Token, Please authenticate'), null);
        }),
        (t.refreshSession = function (e, t, n) {
          var r = this,
            o = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(t) : t,
            i = {};
          i.REFRESH_TOKEN = e.getToken();
          var s = 'CognitoIdentityServiceProvider.' + this.pool.getClientId(),
            a = s + '.LastAuthUser';
          if (this.storage.getItem(a)) {
            this.username = this.storage.getItem(a);
            var u = s + '.' + this.username + '.deviceKey';
            (this.deviceKey = this.storage.getItem(u)), (i.DEVICE_KEY = this.deviceKey);
          }
          var c = {
            ClientId: this.pool.getClientId(),
            AuthFlow: 'REFRESH_TOKEN_AUTH',
            AuthParameters: i,
            ClientMetadata: n,
          };
          this.getUserContextData() && (c.UserContextData = this.getUserContextData()),
            this.client.request('InitiateAuth', c, function (t, n) {
              if (t) return 'NotAuthorizedException' === t.code && r.clearCachedUser(), o(t, null);
              if (n) {
                var i = n.AuthenticationResult;
                return (
                  Object.prototype.hasOwnProperty.call(i, 'RefreshToken') || (i.RefreshToken = e.getToken()),
                  (r.signInUserSession = r.getCognitoUserSession(i)),
                  r.cacheTokens(),
                  o(null, r.signInUserSession)
                );
              }
            });
        }),
        (t.cacheTokens = function () {
          var e = 'CognitoIdentityServiceProvider.' + this.pool.getClientId(),
            t = e + '.' + this.username + '.idToken',
            n = e + '.' + this.username + '.accessToken',
            r = e + '.' + this.username + '.refreshToken',
            o = e + '.' + this.username + '.clockDrift',
            i = e + '.LastAuthUser';
          this.storage.setItem(t, this.signInUserSession.getIdToken().getJwtToken()),
            this.storage.setItem(n, this.signInUserSession.getAccessToken().getJwtToken()),
            this.storage.setItem(r, this.signInUserSession.getRefreshToken().getToken()),
            this.storage.setItem(o, '' + this.signInUserSession.getClockDrift()),
            this.storage.setItem(i, this.username);
        }),
        (t.cacheUserData = function (e) {
          this.storage.setItem(this.userDataKey, JSON.stringify(e));
        }),
        (t.clearCachedUserData = function () {
          this.storage.removeItem(this.userDataKey);
        }),
        (t.clearCachedUser = function () {
          this.clearCachedTokens(), this.clearCachedUserData();
        }),
        (t.cacheDeviceKeyAndPassword = function () {
          var e = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username,
            t = e + '.deviceKey',
            n = e + '.randomPasswordKey',
            r = e + '.deviceGroupKey';
          this.storage.setItem(t, this.deviceKey),
            this.storage.setItem(n, this.randomPassword),
            this.storage.setItem(r, this.deviceGroupKey);
        }),
        (t.getCachedDeviceKeyAndPassword = function () {
          var e = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username,
            t = e + '.deviceKey',
            n = e + '.randomPasswordKey',
            r = e + '.deviceGroupKey';
          this.storage.getItem(t) &&
            ((this.deviceKey = this.storage.getItem(t)),
            (this.randomPassword = this.storage.getItem(n)),
            (this.deviceGroupKey = this.storage.getItem(r)));
        }),
        (t.clearCachedDeviceKeyAndPassword = function () {
          var e = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username,
            t = e + '.deviceKey',
            n = e + '.randomPasswordKey',
            r = e + '.deviceGroupKey';
          this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(r);
        }),
        (t.clearCachedTokens = function () {
          var e = 'CognitoIdentityServiceProvider.' + this.pool.getClientId(),
            t = e + '.' + this.username + '.idToken',
            n = e + '.' + this.username + '.accessToken',
            r = e + '.' + this.username + '.refreshToken',
            o = e + '.LastAuthUser',
            i = e + '.' + this.username + '.clockDrift';
          this.storage.removeItem(t),
            this.storage.removeItem(n),
            this.storage.removeItem(r),
            this.storage.removeItem(o),
            this.storage.removeItem(i);
        }),
        (t.getCognitoUserSession = function (e) {
          var t = new $l(e),
            n = new Wl(e),
            r = new Jl(e);
          return new Xl({ IdToken: t, AccessToken: n, RefreshToken: r });
        }),
        (t.forgotPassword = function (e, t) {
          var n = { ClientId: this.pool.getClientId(), Username: this.username, ClientMetadata: t };
          this.getUserContextData() && (n.UserContextData = this.getUserContextData()),
            this.client.request('ForgotPassword', n, function (t, n) {
              return t
                ? e.onFailure(t)
                : 'function' == typeof e.inputVerificationCode
                ? e.inputVerificationCode(n)
                : e.onSuccess(n);
            });
        }),
        (t.confirmPassword = function (e, t, n, r) {
          var o = {
            ClientId: this.pool.getClientId(),
            Username: this.username,
            ConfirmationCode: e,
            Password: t,
            ClientMetadata: r,
          };
          this.getUserContextData() && (o.UserContextData = this.getUserContextData()),
            this.client.request('ConfirmForgotPassword', o, function (e) {
              return e ? n.onFailure(e) : n.onSuccess('SUCCESS');
            });
        }),
        (t.getAttributeVerificationCode = function (e, t, n) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'GetUserAttributeVerificationCode',
            { AttributeName: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), ClientMetadata: n },
            function (e, n) {
              return e
                ? t.onFailure(e)
                : 'function' == typeof t.inputVerificationCode
                ? t.inputVerificationCode(n)
                : t.onSuccess('SUCCESS');
            },
          );
        }),
        (t.verifyAttribute = function (e, t, n) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'VerifyUserAttribute',
            { AttributeName: e, Code: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
            function (e) {
              return e ? n.onFailure(e) : n.onSuccess('SUCCESS');
            },
          );
        }),
        (t.getDevice = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'GetDevice',
            { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey },
            function (t, n) {
              return t ? e.onFailure(t) : e.onSuccess(n);
            },
          );
        }),
        (t.forgetSpecificDevice = function (e, t) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'ForgetDevice',
            { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: e },
            function (e) {
              return e ? t.onFailure(e) : t.onSuccess('SUCCESS');
            },
          );
        }),
        (t.forgetDevice = function (e) {
          var t = this;
          this.forgetSpecificDevice(this.deviceKey, {
            onFailure: e.onFailure,
            onSuccess: function (n) {
              return (
                (t.deviceKey = null),
                (t.deviceGroupKey = null),
                (t.randomPassword = null),
                t.clearCachedDeviceKeyAndPassword(),
                e.onSuccess(n)
              );
            },
          });
        }),
        (t.setDeviceStatusRemembered = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'UpdateDeviceStatus',
            {
              AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
              DeviceKey: this.deviceKey,
              DeviceRememberedStatus: 'remembered',
            },
            function (t) {
              return t ? e.onFailure(t) : e.onSuccess('SUCCESS');
            },
          );
        }),
        (t.setDeviceStatusNotRemembered = function (e) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'UpdateDeviceStatus',
            {
              AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
              DeviceKey: this.deviceKey,
              DeviceRememberedStatus: 'not_remembered',
            },
            function (t) {
              return t ? e.onFailure(t) : e.onSuccess('SUCCESS');
            },
          );
        }),
        (t.listDevices = function (e, t, n) {
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n.onFailure(new Error('User is not authenticated'));
          var r = { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), Limit: e };
          t && (r.PaginationToken = t),
            this.client.request('ListDevices', r, function (e, t) {
              return e ? n.onFailure(e) : n.onSuccess(t);
            });
        }),
        (t.globalSignOut = function (e) {
          var t = this;
          if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error('User is not authenticated'));
          this.client.request(
            'GlobalSignOut',
            { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
            function (n) {
              return n ? e.onFailure(n) : (t.clearCachedUser(), e.onSuccess('SUCCESS'));
            },
          );
        }),
        (t.signOut = function (e) {
          var t = this;
          e && 'function' == typeof e
            ? this.getSession(function (n, r) {
                if (n) return e(n);
                t.revokeTokens(function (n) {
                  t.cleanClientData(), e(n);
                });
              })
            : this.cleanClientData();
        }),
        (t.revokeTokens = function (e) {
          if ((void 0 === e && (e = function () {}), 'function' != typeof e))
            throw new Error('Invalid revokeTokenCallback. It should be a function.');
          if (!this.signInUserSession) return e(new Error('User is not authenticated'));
          if (!this.signInUserSession.getAccessToken()) return e(new Error('No Access token available'));
          var t = this.signInUserSession.getRefreshToken().getToken(),
            n = this.signInUserSession.getAccessToken();
          if (this.isSessionRevocable(n) && t) return this.revokeToken({ token: t, callback: e });
          e();
        }),
        (t.isSessionRevocable = function (e) {
          if (e && 'function' == typeof e.decodePayload)
            try {
              return !!e.decodePayload().origin_jti;
            } catch (e) {}
          return !1;
        }),
        (t.cleanClientData = function () {
          (this.signInUserSession = null), this.clearCachedUser();
        }),
        (t.revokeToken = function (e) {
          var t = e.token,
            n = e.callback;
          this.client.requestWithRetry('RevokeToken', { Token: t, ClientId: this.pool.getClientId() }, function (e) {
            if (e) return n(e);
            n();
          });
        }),
        (t.sendMFASelectionAnswer = function (e, t) {
          var n = this,
            r = {};
          (r.USERNAME = this.username), (r.ANSWER = e);
          var o = {
            ChallengeName: 'SELECT_MFA_TYPE',
            ChallengeResponses: r,
            ClientId: this.pool.getClientId(),
            Session: this.Session,
          };
          this.getUserContextData() && (o.UserContextData = this.getUserContextData()),
            this.client.request('RespondToAuthChallenge', o, function (r, o) {
              return r
                ? t.onFailure(r)
                : ((n.Session = o.Session),
                  'SMS_MFA' === e
                    ? t.mfaRequired(o.ChallengeName, o.ChallengeParameters)
                    : 'SOFTWARE_TOKEN_MFA' === e
                    ? t.totpRequired(o.ChallengeName, o.ChallengeParameters)
                    : void 0);
            });
        }),
        (t.getUserContextData = function () {
          return this.pool.getUserContextData(this.username);
        }),
        (t.associateSoftwareToken = function (e) {
          var t = this;
          null != this.signInUserSession && this.signInUserSession.isValid()
            ? this.client.request(
                'AssociateSoftwareToken',
                { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() },
                function (t, n) {
                  return t ? e.onFailure(t) : e.associateSecretCode(n.SecretCode);
                },
              )
            : this.client.request('AssociateSoftwareToken', { Session: this.Session }, function (n, r) {
                return n ? e.onFailure(n) : ((t.Session = r.Session), e.associateSecretCode(r.SecretCode));
              });
        }),
        (t.verifySoftwareToken = function (e, t, n) {
          var r = this;
          null != this.signInUserSession && this.signInUserSession.isValid()
            ? this.client.request(
                'VerifySoftwareToken',
                {
                  AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
                  UserCode: e,
                  FriendlyDeviceName: t,
                },
                function (e, t) {
                  return e ? n.onFailure(e) : n.onSuccess(t);
                },
              )
            : this.client.request(
                'VerifySoftwareToken',
                { Session: this.Session, UserCode: e, FriendlyDeviceName: t },
                function (e, t) {
                  if (e) return n.onFailure(e);
                  r.Session = t.Session;
                  var o = {};
                  o.USERNAME = r.username;
                  var i = {
                    ChallengeName: 'MFA_SETUP',
                    ClientId: r.pool.getClientId(),
                    ChallengeResponses: o,
                    Session: r.Session,
                  };
                  r.getUserContextData() && (i.UserContextData = r.getUserContextData()),
                    r.client.request('RespondToAuthChallenge', i, function (e, t) {
                      return e
                        ? n.onFailure(e)
                        : ((r.signInUserSession = r.getCognitoUserSession(t.AuthenticationResult)),
                          r.cacheTokens(),
                          n.onSuccess(r.signInUserSession));
                    });
                },
              );
        }),
        e
      );
    })();
  self.fetch || (self.fetch = a('gmmGS').default || a('gmmGS'));
  var cf = { userAgent: 'aws-amplify/5.0.4 js', product: '', navigator: null, isReactNative: !1 };
  if ('undefined' != typeof navigator && navigator.product)
    if (
      ((cf.product = navigator.product || ''), (cf.navigator = navigator || null), 'ReactNative' === navigator.product)
    )
      (cf.userAgent = 'aws-amplify/5.0.4 react-native'), (cf.isReactNative = !0);
    else (cf.userAgent = 'aws-amplify/5.0.4 js'), (cf.isReactNative = !1);
  function lf() {}
  lf.prototype.userAgent = cf.userAgent;
  var ff = lf;
  function hf(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), vf(e, t);
  }
  function df(e) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (
      (df = function (e) {
        if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
        var n;
        if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return pf(e, arguments, yf(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
          })),
          vf(r, e)
        );
      }),
      df(e)
    );
  }
  function pf(e, t, n) {
    return (pf = gf()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r))();
          return n && vf(o, n.prototype), o;
        }).apply(null, arguments);
  }
  function gf() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function vf(e, t) {
    return (vf =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function yf(e) {
    return (yf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  var mf = (function (e) {
      function t(t, n, r, o) {
        var i;
        return ((i = e.call(this, t) || this).code = n), (i.name = r), (i.statusCode = o), i;
      }
      return hf(t, e), t;
    })(df(Error)),
    wf = (function () {
      function e(e, t, n) {
        this.endpoint = t || 'https://cognito-idp.' + e + '.amazonaws.com/';
        var r = (n || {}).credentials;
        this.fetchOptions = r ? { credentials: r } : {};
      }
      var t = e.prototype;
      return (
        (t.promisifyRequest = function (e, t) {
          var n = this;
          return new Promise(function (r, o) {
            n.request(e, t, function (e, t) {
              e ? o(new mf(e.message, e.code, e.name, e.statusCode)) : r(t);
            });
          });
        }),
        (t.requestWithRetry = function (e, t, n) {
          var r = this;
          (function (e, t, n) {
            void 0 === n && (n = _f);
            return Sf(
              e,
              t,
              (function (e) {
                var t = 100,
                  n = 100;
                return function (r) {
                  var o = Math.pow(2, r) * t + n * Math.random();
                  return !(o > e) && o;
                };
              })(n),
            );
          })(
            function (t) {
              return new Promise(function (n, o) {
                r.request(e, t, function (e, t) {
                  e ? o(e) : n(t);
                });
              });
            },
            [t],
            5e3,
          )
            .then(function (e) {
              return n(null, e);
            })
            .catch(function (e) {
              return n(e);
            });
        }),
        (t.request = function (e, t, n) {
          var r,
            o = {
              'Content-Type': 'application/x-amz-json-1.1',
              'X-Amz-Target': 'AWSCognitoIdentityProviderService.' + e,
              'X-Amz-User-Agent': ff.prototype.userAgent,
            },
            i = Object.assign({}, this.fetchOptions, {
              headers: o,
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              body: JSON.stringify(t),
            });
          fetch(this.endpoint, i)
            .then(
              function (e) {
                return (r = e), e;
              },
              function (e) {
                if (e instanceof TypeError) throw new Error('Network error');
                throw e;
              },
            )
            .then(function (e) {
              return e.json().catch(function () {
                return {};
              });
            })
            .then(function (e) {
              if (r.ok) return n(null, e);
              e;
              var t = (e.__type || e.code).split('#').pop(),
                o = new Error(e.message || e.Message || null);
              return (o.name = t), (o.code = t), n(o);
            })
            .catch(function (e) {
              if (r && r.headers && r.headers.get('x-amzn-errortype'))
                try {
                  var t = r.headers.get('x-amzn-errortype').split(':')[0],
                    o = new Error(r.status ? r.status.toString() : null);
                  return (o.code = t), (o.name = t), (o.statusCode = r.status), n(o);
                } catch (t) {
                  return n(e);
                }
              else e instanceof Error && 'Network error' === e.message && (e.code = 'NetworkError');
              return n(e);
            });
        }),
        e
      );
    })(),
    bf = function () {};
  Error;
  function Sf(e, t, n, r) {
    if ((void 0 === r && (r = 1), 'function' != typeof e)) throw Error('functionToRetry must be a function');
    return (
      bf(e.name + ' attempt #' + r + ' with args: ' + JSON.stringify(t)),
      e.apply(void 0, t).catch(function (o) {
        if ((bf('error on ' + e.name, o), (i = o) && i.nonRetryable)) throw (bf(e.name + ' non retryable error', o), o);
        var i,
          s = n(r, t, o);
        if ((bf(e.name + ' retrying in ' + s + ' ms'), !1 !== s))
          return new Promise(function (e) {
            return setTimeout(e, s);
          }).then(function () {
            return Sf(e, t, n, r + 1);
          });
        throw o;
      })
    );
  }
  var _f = 3e5;
  var Af = (function () {
      function e(e, t) {
        var n = e || {},
          r = n.UserPoolId,
          o = n.ClientId,
          i = n.endpoint,
          s = n.fetchOptions,
          a = n.AdvancedSecurityDataCollectionFlag;
        if (!r || !o) throw new Error('Both UserPoolId and ClientId are required.');
        if (r.length > 55 || !/^[\w-]+_[0-9a-zA-Z]+$/.test(r)) throw new Error('Invalid UserPoolId format.');
        var u = r.split('_')[0];
        (this.userPoolId = r),
          (this.clientId = o),
          (this.client = new wf(u, i, s)),
          (this.advancedSecurityDataCollectionFlag = !1 !== a),
          (this.storage = e.Storage || new sf().getStorage()),
          t && (this.wrapRefreshSessionCallback = t);
      }
      var t = e.prototype;
      return (
        (t.getUserPoolId = function () {
          return this.userPoolId;
        }),
        (t.getClientId = function () {
          return this.clientId;
        }),
        (t.signUp = function (e, t, n, r, o, i) {
          var s = this,
            a = {
              ClientId: this.clientId,
              Username: e,
              Password: t,
              UserAttributes: n,
              ValidationData: r,
              ClientMetadata: i,
            };
          this.getUserContextData(e) && (a.UserContextData = this.getUserContextData(e)),
            this.client.request('SignUp', a, function (t, n) {
              if (t) return o(t, null);
              var r = { Username: e, Pool: s, Storage: s.storage },
                i = {
                  user: new uf(r),
                  userConfirmed: n.UserConfirmed,
                  userSub: n.UserSub,
                  codeDeliveryDetails: n.CodeDeliveryDetails,
                };
              return o(null, i);
            });
        }),
        (t.getCurrentUser = function () {
          var e = 'CognitoIdentityServiceProvider.' + this.clientId + '.LastAuthUser',
            t = this.storage.getItem(e);
          if (t) {
            var n = { Username: t, Pool: this, Storage: this.storage };
            return new uf(n);
          }
          return null;
        }),
        (t.getUserContextData = function (e) {
          if ('undefined' != typeof AmazonCognitoAdvancedSecurityData) {
            var t = AmazonCognitoAdvancedSecurityData;
            if (this.advancedSecurityDataCollectionFlag) {
              var n = t.getData(e, this.userPoolId, this.clientId);
              if (n) return { EncodedData: n };
            }
            return {};
          }
        }),
        e
      );
    })(),
    Ef = {};
  !(function (e) {
    if (('function' == typeof define && define.amd && (define(e), !0), (Ef = e()), !!0)) {
      var t = window.Cookies,
        n = (window.Cookies = e());
      n.noConflict = function () {
        return (window.Cookies = t), n;
      };
    }
  })(function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) t[r] = n[r];
      }
      return t;
    }
    function t(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function n(r) {
      function o() {}
      function i(t, n, i) {
        if ('undefined' != typeof document) {
          'number' == typeof (i = e({ path: '/' }, o.defaults, i)).expires &&
            (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
            (i.expires = i.expires ? i.expires.toUTCString() : '');
          try {
            var s = JSON.stringify(n);
            /^[\{\[]/.test(s) && (n = s);
          } catch (e) {}
          (n = r.write
            ? r.write(n, t)
            : encodeURIComponent(String(n)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent,
              )),
            (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var a = '';
          for (var u in i) i[u] && ((a += '; ' + u), !0 !== i[u] && (a += '=' + i[u].split(';')[0]));
          return (document.cookie = t + '=' + n + a);
        }
      }
      function s(e, n) {
        if ('undefined' != typeof document) {
          for (var o = {}, i = document.cookie ? document.cookie.split('; ') : [], s = 0; s < i.length; s++) {
            var a = i[s].split('='),
              u = a.slice(1).join('=');
            n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
            try {
              var c = t(a[0]);
              if (((u = (r.read || r)(u, c) || t(u)), n))
                try {
                  u = JSON.parse(u);
                } catch (e) {}
              if (((o[c] = u), e === c)) break;
            } catch (e) {}
          }
          return e ? o[e] : o;
        }
      }
      return (
        (o.set = i),
        (o.get = function (e) {
          return s(e, !1);
        }),
        (o.getJSON = function (e) {
          return s(e, !0);
        }),
        (o.remove = function (t, n) {
          i(t, '', e(n, { expires: -1 }));
        }),
        (o.defaults = {}),
        (o.withConverter = n),
        o
      );
    })(function () {});
  });
  var Cf,
    Tf,
    If = (function () {
      function e(e) {
        if (!e.domain) throw new Error('The domain of cookieStorage can not be undefined.');
        if (
          ((this.domain = e.domain),
          e.path ? (this.path = e.path) : (this.path = '/'),
          Object.prototype.hasOwnProperty.call(e, 'expires') ? (this.expires = e.expires) : (this.expires = 365),
          Object.prototype.hasOwnProperty.call(e, 'secure') ? (this.secure = e.secure) : (this.secure = !0),
          Object.prototype.hasOwnProperty.call(e, 'sameSite'))
        ) {
          if (!['strict', 'lax', 'none'].includes(e.sameSite))
            throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
          if ('none' === e.sameSite && !this.secure)
            throw new Error('sameSite = None requires the Secure attribute in latest browser versions.');
          this.sameSite = e.sameSite;
        } else this.sameSite = null;
      }
      var t = e.prototype;
      return (
        (t.setItem = function (e, t) {
          var n = { path: this.path, expires: this.expires, domain: this.domain, secure: this.secure };
          return this.sameSite && (n.sameSite = this.sameSite), Ef.set(e, t, n), Ef.get(e);
        }),
        (t.getItem = function (e) {
          return Ef.get(e);
        }),
        (t.removeItem = function (e) {
          var t = { path: this.path, expires: this.expires, domain: this.domain, secure: this.secure };
          return this.sameSite && (t.sameSite = this.sameSite), Ef.remove(e, t);
        }),
        (t.clear = function () {
          for (var e = Ef.get(), t = Object.keys(e).length, n = 0; n < t; ++n) this.removeItem(Object.keys(e)[n]);
          return {};
        }),
        e
      );
    })(),
    Pf = a('8schB');
  function kf() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null);
  }
  (Tf = {
    isString: function (e) {
      return 'string' == typeof e;
    },
    isObject: function (e) {
      return 'object' == typeof e && null !== e;
    },
    isNull: function (e) {
      return null === e;
    },
    isNullOrUndefined: function (e) {
      return null == e;
    },
  }),
    (Cf = zf);
  var Of,
    xf,
    Rf = /^([a-z0-9.+-]+:)/i,
    Nf = /:[0-9]*$/,
    Uf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    Lf = ['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t']),
    Mf = ["'"].concat(Lf),
    Df = ['%', '/', '?', ';', '#'].concat(Mf),
    Ff = ['/', '?', '#'],
    jf = /^[+a-z0-9A-Z_-]{0,63}$/,
    Bf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    Hf = { javascript: !0, 'javascript:': !0 },
    Gf = { javascript: !0, 'javascript:': !0 },
    qf = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      'http:': !0,
      'https:': !0,
      'ftp:': !0,
      'gopher:': !0,
      'file:': !0,
    };
  function zf(e, t, n) {
    if (e && Tf.isObject(e) && e instanceof kf) return e;
    var r = new kf();
    return r.parse(e, t, n), r;
  }
  (Of = a('kUypp')),
    (xf = a('e4VGJ')),
    (kf.prototype.parse = function (e, t, n) {
      if (!Tf.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
      var r = e.indexOf('?'),
        o = -1 !== r && r < e.indexOf('#') ? '?' : '#',
        i = e.split(o);
      i[0] = i[0].replace(/\\/g, '/');
      var s = (e = i.join(o));
      if (((s = s.trim()), !n && 1 === e.split('#').length)) {
        var a = Uf.exec(s);
        if (a)
          return (
            (this.path = s),
            (this.href = s),
            (this.pathname = a[1]),
            a[2]
              ? ((this.search = a[2]), (this.query = t ? Of(this.search.substr(1)) : this.search.substr(1)))
              : t && ((this.search = ''), (this.query = {})),
            this
          );
      }
      var u = Rf.exec(s);
      if (u) {
        var c = (u = u[0]).toLowerCase();
        (this.protocol = c), (s = s.substr(u.length));
      }
      if (n || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var l = '//' === s.substr(0, 2);
        !l || (u && Gf[u]) || ((s = s.substr(2)), (this.slashes = !0));
      }
      if (!Gf[u] && (l || (u && !qf[u]))) {
        for (var f, h, d = -1, p = 0; p < Ff.length; p++) {
          -1 !== (g = s.indexOf(Ff[p])) && (-1 === d || g < d) && (d = g);
        }
        -1 !== (h = -1 === d ? s.lastIndexOf('@') : s.lastIndexOf('@', d)) &&
          ((f = s.slice(0, h)), (s = s.slice(h + 1)), (this.auth = decodeURIComponent(f))),
          (d = -1);
        for (p = 0; p < Df.length; p++) {
          var g;
          -1 !== (g = s.indexOf(Df[p])) && (-1 === d || g < d) && (d = g);
        }
        -1 === d && (d = s.length),
          (this.host = s.slice(0, d)),
          (s = s.slice(d)),
          this.parseHost(),
          (this.hostname = this.hostname || '');
        var v = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!v)
          for (var y = this.hostname.split(/\./), m = ((p = 0), y.length); p < m; p++) {
            var w = y[p];
            if (w && !w.match(jf)) {
              for (var b = '', S = 0, _ = w.length; S < _; S++) w.charCodeAt(S) > 127 ? (b += 'x') : (b += w[S]);
              if (!b.match(jf)) {
                var A = y.slice(0, p),
                  E = y.slice(p + 1),
                  C = w.match(Bf);
                C && (A.push(C[1]), E.unshift(C[2])),
                  E.length && (s = '/' + E.join('.') + s),
                  (this.hostname = A.join('.'));
                break;
              }
            }
          }
        this.hostname.length > 255 ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()),
          v || (this.hostname = Pf.toASCII(this.hostname));
        var T = this.port ? ':' + this.port : '',
          I = this.hostname || '';
        (this.host = I + T),
          (this.href += this.host),
          v && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== s[0] && (s = '/' + s));
      }
      if (!Hf[c])
        for (p = 0, m = Mf.length; p < m; p++) {
          var P = Mf[p];
          if (-1 !== s.indexOf(P)) {
            var k = encodeURIComponent(P);
            k === P && (k = escape(P)), (s = s.split(P).join(k));
          }
        }
      var O = s.indexOf('#');
      -1 !== O && ((this.hash = s.substr(O)), (s = s.slice(0, O)));
      var x = s.indexOf('?');
      if (
        (-1 !== x
          ? ((this.search = s.substr(x)),
            (this.query = s.substr(x + 1)),
            t && (this.query = Of(this.query)),
            (s = s.slice(0, x)))
          : t && ((this.search = ''), (this.query = {})),
        s && (this.pathname = s),
        qf[c] && this.hostname && !this.pathname && (this.pathname = '/'),
        this.pathname || this.search)
      ) {
        T = this.pathname || '';
        var R = this.search || '';
        this.path = T + R;
      }
      return (this.href = this.format()), this;
    }),
    (kf.prototype.format = function () {
      var e = this.auth || '';
      e && ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ':')), (e += '@'));
      var t = this.protocol || '',
        n = this.pathname || '',
        r = this.hash || '',
        o = !1,
        i = '';
      this.host
        ? (o = e + this.host)
        : this.hostname &&
          ((o = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')),
          this.port && (o += ':' + this.port)),
        this.query && Tf.isObject(this.query) && Object.keys(this.query).length && (i = xf(this.query));
      var s = this.search || (i && '?' + i) || '';
      return (
        t && ':' !== t.substr(-1) && (t += ':'),
        this.slashes || ((!t || qf[t]) && !1 !== o)
          ? ((o = '//' + (o || '')), n && '/' !== n.charAt(0) && (n = '/' + n))
          : o || (o = ''),
        r && '#' !== r.charAt(0) && (r = '#' + r),
        s && '?' !== s.charAt(0) && (s = '?' + s),
        t +
          o +
          (n = n.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e);
          })) +
          (s = s.replace('#', '%23')) +
          r
      );
    }),
    (kf.prototype.resolve = function (e) {
      return this.resolveObject(zf(e, !1, !0)).format();
    }),
    (kf.prototype.resolveObject = function (e) {
      if (Tf.isString(e)) {
        var t = new kf();
        t.parse(e, !1, !0), (e = t);
      }
      for (var n = new kf(), r = Object.keys(this), o = 0; o < r.length; o++) {
        var i = r[o];
        n[i] = this[i];
      }
      if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
      if (e.slashes && !e.protocol) {
        for (var s = Object.keys(e), a = 0; a < s.length; a++) {
          var u = s[a];
          'protocol' !== u && (n[u] = e[u]);
        }
        return qf[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = '/'), (n.href = n.format()), n;
      }
      if (e.protocol && e.protocol !== n.protocol) {
        if (!qf[e.protocol]) {
          for (var c = Object.keys(e), l = 0; l < c.length; l++) {
            var f = c[l];
            n[f] = e[f];
          }
          return (n.href = n.format()), n;
        }
        if (((n.protocol = e.protocol), e.host || Gf[e.protocol])) n.pathname = e.pathname;
        else {
          for (var h = (e.pathname || '').split('/'); h.length && !(e.host = h.shift()); );
          e.host || (e.host = ''),
            e.hostname || (e.hostname = ''),
            '' !== h[0] && h.unshift(''),
            h.length < 2 && h.unshift(''),
            (n.pathname = h.join('/'));
        }
        if (
          ((n.search = e.search),
          (n.query = e.query),
          (n.host = e.host || ''),
          (n.auth = e.auth),
          (n.hostname = e.hostname || e.host),
          (n.port = e.port),
          n.pathname || n.search)
        ) {
          var d = n.pathname || '',
            p = n.search || '';
          n.path = d + p;
        }
        return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
      }
      var g = n.pathname && '/' === n.pathname.charAt(0),
        v = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
        y = v || g || (n.host && e.pathname),
        m = y,
        w = (n.pathname && n.pathname.split('/')) || [],
        b = ((h = (e.pathname && e.pathname.split('/')) || []), n.protocol && !qf[n.protocol]);
      if (
        (b &&
          ((n.hostname = ''),
          (n.port = null),
          n.host && ('' === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
          (n.host = ''),
          e.protocol &&
            ((e.hostname = null),
            (e.port = null),
            e.host && ('' === h[0] ? (h[0] = e.host) : h.unshift(e.host)),
            (e.host = null)),
          (y = y && ('' === h[0] || '' === w[0]))),
        v)
      )
        (n.host = e.host || '' === e.host ? e.host : n.host),
          (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname),
          (n.search = e.search),
          (n.query = e.query),
          (w = h);
      else if (h.length) w || (w = []), w.pop(), (w = w.concat(h)), (n.search = e.search), (n.query = e.query);
      else if (!Tf.isNullOrUndefined(e.search)) {
        if (b)
          (n.hostname = n.host = w.shift()),
            (C = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
              ((n.auth = C.shift()), (n.host = n.hostname = C.shift()));
        return (
          (n.search = e.search),
          (n.query = e.query),
          (Tf.isNull(n.pathname) && Tf.isNull(n.search)) ||
            (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
          (n.href = n.format()),
          n
        );
      }
      if (!w.length)
        return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n;
      for (
        var S = w.slice(-1)[0],
          _ = ((n.host || e.host || w.length > 1) && ('.' === S || '..' === S)) || '' === S,
          A = 0,
          E = w.length;
        E >= 0;
        E--
      )
        '.' === (S = w[E]) ? w.splice(E, 1) : '..' === S ? (w.splice(E, 1), A++) : A && (w.splice(E, 1), A--);
      if (!y && !m) for (; A--; ) w.unshift('..');
      !y || '' === w[0] || (w[0] && '/' === w[0].charAt(0)) || w.unshift(''),
        _ && '/' !== w.join('/').substr(-1) && w.push('');
      var C,
        T = '' === w[0] || (w[0] && '/' === w[0].charAt(0));
      b &&
        ((n.hostname = n.host = T ? '' : w.length ? w.shift() : ''),
        (C = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
          ((n.auth = C.shift()), (n.host = n.hostname = C.shift())));
      return (
        (y = y || (n.host && w.length)) && !T && w.unshift(''),
        w.length ? (n.pathname = w.join('/')) : ((n.pathname = null), (n.path = null)),
        (Tf.isNull(n.pathname) && Tf.isNull(n.search)) ||
          (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
        (n.auth = e.auth || n.auth),
        (n.slashes = n.slashes || e.slashes),
        (n.href = n.format()),
        n
      );
    }),
    (kf.prototype.parseHost = function () {
      var e = this.host,
        t = Nf.exec(e);
      t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
        e && (this.hostname = e);
    });
  var Kf = {};
  e(
    Kf,
    'default',
    () => th,
    e => (th = e),
  );
  var Vf,
    Wf = function (e) {
      var t = window.open(e, '_self');
      return t ? Promise.resolve(t) : Promise.reject();
    },
    Yf =
      ((Cl = a('eMcSz')),
      (Zl = a('gHkqp')),
      function () {
        return (
          (Yf =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          Yf.apply(this, arguments)
        );
      }),
    $f = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Jf = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    Zf = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    Xf =
      'undefined' != typeof Symbol && 'function' == typeof Symbol.for
        ? Symbol.for('amplify_default')
        : '@@amplify_default',
    Qf = function (e, t, n) {
      be.Hub.dispatch('auth', { event: e, data: t, message: n }, 'Auth', Xf);
    },
    eh = new ie.ConsoleLogger('OAuth'),
    th = (function () {
      function e(e) {
        var t = e.config,
          n = e.cognitoClientId,
          r = e.scopes,
          o = void 0 === r ? [] : r;
        if (
          ((this._urlOpener = t.urlOpener || Wf),
          (this._config = t),
          (this._cognitoClientId = n),
          !this.isValidScopes(o))
        )
          throw Error('scopes must be a String Array');
        this._scopes = o;
      }
      return (
        (e.prototype.isValidScopes = function (e) {
          return (
            Array.isArray(e) &&
            e.every(function (e) {
              return 'string' == typeof e;
            })
          );
        }),
        (e.prototype.oauthSignIn = function (e, t, n, r, o, i) {
          void 0 === e && (e = 'code'), void 0 === o && (o = Z.Cognito);
          var s = this._generateState(32),
            a = i ? s + '-' + ja(i) : s;
          !(function (e) {
            window.sessionStorage.setItem('oauth_state', e);
          })(a);
          var u,
            c = this._generateRandom(128);
          (u = c), window.sessionStorage.setItem('ouath_pkce_key', u);
          var l = this._generateChallenge(c),
            f = this._scopes.join(' '),
            h =
              'https://' +
              t +
              '/oauth2/authorize?' +
              Object.entries(
                Yf(
                  Yf(
                    { redirect_uri: n, response_type: e, client_id: r, identity_provider: o, scope: f, state: a },
                    'code' === e ? { code_challenge: l } : {},
                  ),
                  'code' === e ? { code_challenge_method: 'S256' } : {},
                ),
              )
                .map(function (e) {
                  var t = Zf(e, 2),
                    n = t[0],
                    r = t[1];
                  return encodeURIComponent(n) + '=' + encodeURIComponent(r);
                })
                .join('&');
          eh.debug('Redirecting to ' + h), this._urlOpener(h, n);
        }),
        (e.prototype._handleCodeFlow = function (e) {
          return $f(this, void 0, void 0, function () {
            var t, n, r, o, i, s, a, u, c, l, f, h, d, p;
            return Jf(this, function (g) {
              switch (g.label) {
                case 0:
                  return (
                    (t = (Cf(e).query || '')
                      .split('&')
                      .map(function (e) {
                        return e.split('=');
                      })
                      .reduce(
                        function (e, t) {
                          var n,
                            r = Zf(t, 2),
                            o = r[0],
                            i = r[1];
                          return Yf(Yf({}, e), (((n = {})[o] = i), n));
                        },
                        { code: void 0 },
                      ).code),
                    (n = Cf(e).pathname || '/'),
                    (r = Cf(this._config.redirectSignIn).pathname || '/'),
                    t && n === r
                      ? ((o = 'https://' + this._config.domain + '/oauth2/token'),
                        Qf('codeFlow', {}, 'Retrieving tokens from ' + o),
                        (i = ne(this._config) ? this._cognitoClientId : this._config.clientID),
                        (s = ne(this._config) ? this._config.redirectSignIn : this._config.redirectUri),
                        (v = window.sessionStorage.getItem('ouath_pkce_key')),
                        window.sessionStorage.removeItem('ouath_pkce_key'),
                        (u = Yf(
                          { grant_type: 'authorization_code', code: t, client_id: i, redirect_uri: s },
                          (a = v) ? { code_verifier: a } : {},
                        )),
                        eh.debug('Calling token endpoint: ' + o + ' with', u),
                        (c = Object.entries(u)
                          .map(function (e) {
                            var t = Zf(e, 2),
                              n = t[0],
                              r = t[1];
                            return encodeURIComponent(n) + '=' + encodeURIComponent(r);
                          })
                          .join('&')),
                        [
                          4,
                          fetch(o, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: c,
                          }),
                        ])
                      : [2]
                  );
                case 1:
                  return [4, g.sent().json()];
                case 2:
                  if (((l = g.sent()), (f = l.access_token), (h = l.refresh_token), (d = l.id_token), (p = l.error)))
                    throw new Error(p);
                  return [2, { accessToken: f, refreshToken: h, idToken: d }];
              }
              var v;
            });
          });
        }),
        (e.prototype._handleImplicitFlow = function (e) {
          return $f(this, void 0, void 0, function () {
            var t, n, r;
            return Jf(this, function (o) {
              return (
                (t = (Cf(e).hash || '#')
                  .substr(1)
                  .split('&')
                  .map(function (e) {
                    return e.split('=');
                  })
                  .reduce(
                    function (e, t) {
                      var n,
                        r = Zf(t, 2),
                        o = r[0],
                        i = r[1];
                      return Yf(Yf({}, e), (((n = {})[o] = i), n));
                    },
                    { id_token: void 0, access_token: void 0 },
                  )),
                (n = t.id_token),
                (r = t.access_token),
                Qf('implicitFlow', {}, 'Got tokens from ' + e),
                eh.debug('Retrieving implicit tokens from ' + e + ' with'),
                [2, { accessToken: r, idToken: n, refreshToken: null }]
              );
            });
          });
        }),
        (e.prototype.handleAuthResponse = function (e) {
          return $f(this, void 0, void 0, function () {
            var t, n, r, o, i, s, a;
            return Jf(this, function (u) {
              switch (u.label) {
                case 0:
                  if (
                    (u.trys.push([0, 5, , 6]),
                    (t = e
                      ? Yf(
                          Yf(
                            {},
                            (Cf(e).hash || '#')
                              .substr(1)
                              .split('&')
                              .map(function (e) {
                                return e.split('=');
                              })
                              .reduce(function (e, t) {
                                var n = Zf(t, 2),
                                  r = n[0],
                                  o = n[1];
                                return (e[r] = o), e;
                              }, {}),
                          ),
                          (Cf(e).query || '')
                            .split('&')
                            .map(function (e) {
                              return e.split('=');
                            })
                            .reduce(function (e, t) {
                              var n = Zf(t, 2),
                                r = n[0],
                                o = n[1];
                              return (e[r] = o), e;
                            }, {}),
                        )
                      : {}),
                    (n = t.error),
                    (r = t.error_description),
                    n)
                  )
                    throw new Error(r);
                  return (
                    (o = this._validateState(t)),
                    eh.debug('Starting ' + this._config.responseType + ' flow with ' + e),
                    'code' !== this._config.responseType ? [3, 2] : ((i = [{}]), [4, this._handleCodeFlow(e)])
                  );
                case 1:
                  return [2, Yf.apply(void 0, [Yf.apply(void 0, i.concat([u.sent()])), { state: o }])];
                case 2:
                  return (s = [{}]), [4, this._handleImplicitFlow(e)];
                case 3:
                  return [2, Yf.apply(void 0, [Yf.apply(void 0, s.concat([u.sent()])), { state: o }])];
                case 4:
                  return [3, 6];
                case 5:
                  throw ((a = u.sent()), eh.error('Error handling auth response.', a), a);
                case 6:
                  return [2];
              }
            });
          });
        }),
        (e.prototype._validateState = function (e) {
          if (e) {
            var t,
              n =
                ((t = window.sessionStorage.getItem('oauth_state')),
                window.sessionStorage.removeItem('oauth_state'),
                t),
              r = e.state;
            if (n && n !== r) throw new Error('Invalid state in OAuth flow');
            return r;
          }
        }),
        (e.prototype.signOut = function () {
          return $f(this, void 0, void 0, function () {
            var e, t, n;
            return Jf(this, function (r) {
              return (
                (e = 'https://' + this._config.domain + '/logout?'),
                (t = ne(this._config) ? this._cognitoClientId : this._config.oauth.clientID),
                (n = ne(this._config) ? this._config.redirectSignOut : this._config.returnTo),
                (e += Object.entries({ client_id: t, logout_uri: encodeURIComponent(n) })
                  .map(function (e) {
                    var t = Zf(e, 2);
                    return t[0] + '=' + t[1];
                  })
                  .join('&')),
                Qf('oAuthSignOut', { oAuth: 'signOut' }, 'Signing out from ' + e),
                eh.debug('Signing out from ' + e),
                [2, this._urlOpener(e, n)]
              );
            });
          });
        }),
        (e.prototype._generateState = function (e) {
          for (var t = '', n = e, r = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; n > 0; --n)
            t += r[Math.round(Math.random() * (r.length - 1))];
          return t;
        }),
        (e.prototype._generateChallenge = function (e) {
          return this._base64URL(o(Cl)(e));
        }),
        (e.prototype._base64URL = function (e) {
          return e.toString(o(Zl)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        }),
        (e.prototype._generateRandom = function (e) {
          var t = new Uint8Array(e);
          if ('undefined' != typeof window && window.crypto) window.crypto.getRandomValues(t);
          else
            for (var n = 0; n < e; n += 1)
              t[n] = (Math.random() * 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'.length) | 0;
          return this._bufferToString(t);
        }),
        (e.prototype._bufferToString = function (e) {
          for (
            var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', n = [], r = 0;
            r < e.byteLength;
            r += 1
          ) {
            var o = e[r] % t.length;
            n.push(t[o]);
          }
          return n.join('');
        }),
        e
      );
    })(),
    nh = {};
  e(
    nh,
    'AuthError',
    () => ih,
    e => (ih = e),
  ),
    e(
      nh,
      'NoUserPoolError',
      () => sh,
      e => (sh = e),
    ),
    (function (e) {
      (e.DEFAULT_MSG = 'Authentication Error'),
        (e.EMPTY_EMAIL = 'Email cannot be empty'),
        (e.EMPTY_PHONE = 'Phone number cannot be empty'),
        (e.EMPTY_USERNAME = 'Username cannot be empty'),
        (e.INVALID_USERNAME = 'The username should either be a string or one of the sign in configs'),
        (e.EMPTY_PASSWORD = 'Password cannot be empty'),
        (e.EMPTY_CODE = 'Confirmation code cannot be empty'),
        (e.SIGN_UP_ERROR = 'Error creating account'),
        (e.NO_MFA = 'No valid MFA method provided'),
        (e.INVALID_MFA = 'Invalid MFA type'),
        (e.EMPTY_CHALLENGE = 'Challenge response cannot be empty'),
        (e.NO_USER_SESSION = 'Failed to get the session because the user is empty'),
        (e.NETWORK_ERROR = 'Network Error'),
        (e.DEVICE_CONFIG = 'Device tracking has not been configured in this User Pool');
    })(Vf || (Vf = {}));
  var rh = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
      };
    })(),
    oh = new ie.ConsoleLogger('AuthError'),
    ih = (function (e) {
      function t(n) {
        var r = this,
          o = ah[n],
          i = o.message,
          s = o.log;
        return (
          ((r = e.call(this, i) || this).constructor = t),
          Object.setPrototypeOf(r, t.prototype),
          (r.name = 'AuthError'),
          (r.log = s || i),
          oh.error(r.log),
          r
        );
      }
      return rh(t, e), t;
    })(Error),
    sh = (function (e) {
      function t(n) {
        var r = e.call(this, n) || this;
        return (r.constructor = t), Object.setPrototypeOf(r, t.prototype), (r.name = 'NoUserPoolError'), r;
      }
      return rh(t, e), t;
    })(ih),
    ah = {
      noConfig: {
        message: Vf.DEFAULT_MSG,
        log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        ",
      },
      missingAuthConfig: {
        message: Vf.DEFAULT_MSG,
        log: '\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        ',
      },
      emptyUsername: { message: Vf.EMPTY_USERNAME },
      invalidUsername: { message: Vf.INVALID_USERNAME },
      emptyPassword: { message: Vf.EMPTY_PASSWORD },
      emptyCode: { message: Vf.EMPTY_CODE },
      signUpError: { message: Vf.SIGN_UP_ERROR, log: 'The first parameter should either be non-null string or object' },
      noMFA: { message: Vf.NO_MFA },
      invalidMFA: { message: Vf.INVALID_MFA },
      emptyChallengeResponse: { message: Vf.EMPTY_CHALLENGE },
      noUserSession: { message: Vf.NO_USER_SESSION },
      deviceConfig: { message: Vf.DEVICE_CONFIG },
      networkError: { message: Vf.NETWORK_ERROR },
      default: { message: Vf.DEFAULT_MSG },
    },
    uh = function () {
      return (
        (uh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        uh.apply(this, arguments)
      );
    },
    ch = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    lh = function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    fh = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    },
    hh = new ie.ConsoleLogger('AuthClass'),
    dh = 'aws.cognito.signin.user.admin',
    ph =
      'undefined' != typeof Symbol && 'function' == typeof Symbol.for
        ? Symbol.for('amplify_default')
        : '@@amplify_default',
    gh = function (e, t, n) {
      be.Hub.dispatch('auth', { event: e, data: t, message: n }, 'Auth', ph);
    },
    vh = (function () {
      function e(e) {
        var t = this;
        (this.userPool = null),
          (this.user = null),
          (this.oAuthFlowInProgress = !1),
          (this.Credentials = _a.Credentials),
          (this.wrapRefreshSessionCallback = function (e) {
            return function (t, n) {
              return (
                n
                  ? gh('tokenRefresh', void 0, 'New token retrieved')
                  : gh('tokenRefresh_failure', t, 'Failed to retrieve new token'),
                e(t, n)
              );
            };
          }),
          this.configure(e),
          (this.currentCredentials = this.currentCredentials.bind(this)),
          (this.currentUserCredentials = this.currentUserCredentials.bind(this)),
          be.Hub.listen('auth', function (e) {
            switch (e.payload.event) {
              case 'signIn':
                t._storage.setItem('amplify-signin-with-hostedUI', 'false');
                break;
              case 'signOut':
                t._storage.removeItem('amplify-signin-with-hostedUI');
                break;
              case 'cognitoHostedUI':
                t._storage.setItem('amplify-signin-with-hostedUI', 'true');
            }
          });
      }
      return (
        (e.prototype.getModuleName = function () {
          return 'Auth';
        }),
        (e.prototype.configure = function (e) {
          var t = this;
          if (!e) return this._config || {};
          hh.debug('configure Auth');
          var n = Object.assign({}, this._config, Ye.Parser.parseMobilehubConfig(e).Auth, e);
          this._config = n;
          var r = this._config,
            o = r.userPoolId,
            i = r.userPoolWebClientId,
            s = r.cookieStorage,
            a = r.oauth,
            u = r.region,
            c = r.identityPoolId,
            l = r.mandatorySignIn,
            f = r.refreshHandlers,
            h = r.identityPoolRegion,
            d = r.clientMetadata,
            p = r.endpoint;
          if (this._config.storage) {
            if (!this._isValidAuthStorage(this._config.storage))
              throw (hh.error('The storage in the Auth config is not valid!'), new Error('Empty storage object'));
            this._storage = this._config.storage;
          } else this._storage = s ? new If(s) : e.ssr ? new bl() : new Ca().getStorage();
          if (
            ((this._storageSync = Promise.resolve()),
            'function' == typeof this._storage.sync && (this._storageSync = this._storage.sync()),
            o)
          ) {
            var g = { UserPoolId: o, ClientId: i, endpoint: p };
            (g.Storage = this._storage), (this.userPool = new Af(g, this.wrapRefreshSessionCallback));
          }
          this.Credentials.configure({
            mandatorySignIn: l,
            region: h || u,
            userPoolId: o,
            identityPoolId: c,
            refreshHandlers: f,
            storage: this._storage,
          });
          var v = a ? (ne(this._config.oauth) ? a : a.awsCognito) : void 0;
          if (v) {
            var y = Object.assign(
              {
                cognitoClientId: i,
                UserPoolId: o,
                domain: v.domain,
                scopes: v.scope,
                redirectSignIn: v.redirectSignIn,
                redirectSignOut: v.redirectSignOut,
                responseType: v.responseType,
                Storage: this._storage,
                urlOpener: v.urlOpener,
                clientMetadata: d,
              },
              v.options,
            );
            this._oAuthHandler = new Kf.default({ scopes: y.scopes, config: y, cognitoClientId: y.cognitoClientId });
            var m = {};
            !(function (e) {
              if (We.browserOrNode().isBrowser && window.location) e({ url: window.location.href });
              else if (!We.browserOrNode().isNode) throw new Error('Not supported');
            })(function (e) {
              var n = e.url;
              m[n] || ((m[n] = !0), t._handleAuthResponse(n));
            });
          }
          return gh('configured', null, 'The Auth category has been configured successfully'), this._config;
        }),
        (e.prototype.signUp = function (e) {
          for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          if (!this.userPool) return this.rejectNoUserPool();
          var o,
            i = null,
            s = null,
            a = [],
            u = null;
          if (e && 'string' == typeof e) {
            (i = e), (s = n ? n[0] : null);
            var c = n ? n[1] : null,
              l = n ? n[2] : null;
            c && a.push(new nf({ Name: 'email', Value: c })), l && a.push(new nf({ Name: 'phone_number', Value: l }));
          } else {
            if (!e || 'object' != typeof e) return this.rejectAuthError(X.SignUpError);
            (i = e.username),
              (s = e.password),
              e && e.clientMetadata
                ? (o = e.clientMetadata)
                : this._config.clientMetadata && (o = this._config.clientMetadata);
            var f = e.attributes;
            f &&
              Object.keys(f).map(function (e) {
                a.push(new nf({ Name: e, Value: f[e] }));
              });
            var h = e.validationData;
            h &&
              ((u = []),
              Object.keys(h).map(function (e) {
                u.push(new nf({ Name: e, Value: h[e] }));
              }));
          }
          return i
            ? s
              ? (hh.debug('signUp attrs:', a),
                hh.debug('signUp validation data:', u),
                new Promise(function (e, n) {
                  t.userPool.signUp(
                    i,
                    s,
                    a,
                    u,
                    function (t, r) {
                      t
                        ? (gh('signUp_failure', t, i + ' failed to signup'), n(t))
                        : (gh('signUp', r, i + ' has signed up successfully'), e(r));
                    },
                    o,
                  );
                }))
              : this.rejectAuthError(X.EmptyPassword)
            : this.rejectAuthError(X.EmptyUsername);
        }),
        (e.prototype.confirmSignUp = function (e, t, n) {
          if (!this.userPool) return this.rejectNoUserPool();
          if (!e) return this.rejectAuthError(X.EmptyUsername);
          if (!t) return this.rejectAuthError(X.EmptyCode);
          var r,
            o = this.createCognitoUser(e),
            i = !n || 'boolean' != typeof n.forceAliasCreation || n.forceAliasCreation;
          return (
            n && n.clientMetadata
              ? (r = n.clientMetadata)
              : this._config.clientMetadata && (r = this._config.clientMetadata),
            new Promise(function (e, n) {
              o.confirmRegistration(
                t,
                i,
                function (t, r) {
                  t ? n(t) : e(r);
                },
                r,
              );
            })
          );
        }),
        (e.prototype.resendSignUp = function (e, t) {
          if ((void 0 === t && (t = this._config.clientMetadata), !this.userPool)) return this.rejectNoUserPool();
          if (!e) return this.rejectAuthError(X.EmptyUsername);
          var n = this.createCognitoUser(e);
          return new Promise(function (e, r) {
            n.resendConfirmationCode(function (t, n) {
              t ? r(t) : e(n);
            }, t);
          });
        }),
        (e.prototype.signIn = function (e, t, n) {
          if ((void 0 === n && (n = this._config.clientMetadata), !this.userPool)) return this.rejectNoUserPool();
          var r = null,
            o = null,
            i = {};
          if ('string' == typeof e) (r = e), (o = t);
          else {
            if (!e.username) return this.rejectAuthError(X.InvalidUsername);
            void 0 !== t && hh.warn('The password should be defined under the first parameter object!'),
              (r = e.username),
              (o = e.password),
              (i = e.validationData);
          }
          if (!r) return this.rejectAuthError(X.EmptyUsername);
          var s = new Sl({ Username: r, Password: o, ValidationData: i, ClientMetadata: n });
          return o ? this.signInWithPassword(s) : this.signInWithoutPassword(s);
        }),
        (e.prototype.authCallbacks = function (e, t, n) {
          var r = this,
            o = this;
          return {
            onSuccess: function (i) {
              return ch(r, void 0, void 0, function () {
                var r, s, a, u;
                return lh(this, function (c) {
                  switch (c.label) {
                    case 0:
                      hh.debug(i), delete e.challengeName, delete e.challengeParam, (c.label = 1);
                    case 1:
                      return c.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                    case 2:
                      return c.sent(), [4, this.Credentials.set(i, 'session')];
                    case 3:
                      return (r = c.sent()), hh.debug('succeed to get cognito credentials', r), [3, 9];
                    case 4:
                      return (s = c.sent()), hh.debug('cannot get cognito credentials', s), [3, 9];
                    case 5:
                      return c.trys.push([5, 7, , 8]), [4, this.currentUserPoolUser()];
                    case 6:
                      return (
                        (a = c.sent()),
                        (o.user = a),
                        gh('signIn', a, 'A user ' + e.getUsername() + ' has been signed in'),
                        t(a),
                        [3, 8]
                      );
                    case 7:
                      return (u = c.sent()), hh.error('Failed to get the signed in user', u), n(u), [3, 8];
                    case 8:
                      return [7];
                    case 9:
                      return [2];
                  }
                });
              });
            },
            onFailure: function (t) {
              hh.debug('signIn failure', t), gh('signIn_failure', t, e.getUsername() + ' failed to signin'), n(t);
            },
            customChallenge: function (n) {
              hh.debug('signIn custom challenge answer required'),
                (e.challengeName = 'CUSTOM_CHALLENGE'),
                (e.challengeParam = n),
                t(e);
            },
            mfaRequired: function (n, r) {
              hh.debug('signIn MFA required'), (e.challengeName = n), (e.challengeParam = r), t(e);
            },
            mfaSetup: function (n, r) {
              hh.debug('signIn mfa setup', n), (e.challengeName = n), (e.challengeParam = r), t(e);
            },
            newPasswordRequired: function (n, r) {
              hh.debug('signIn new password'),
                (e.challengeName = 'NEW_PASSWORD_REQUIRED'),
                (e.challengeParam = { userAttributes: n, requiredAttributes: r }),
                t(e);
            },
            totpRequired: function (n, r) {
              hh.debug('signIn totpRequired'), (e.challengeName = n), (e.challengeParam = r), t(e);
            },
            selectMFAType: function (n, r) {
              hh.debug('signIn selectMFAType', n), (e.challengeName = n), (e.challengeParam = r), t(e);
            },
          };
        }),
        (e.prototype.signInWithPassword = function (e) {
          var t = this;
          if (this.pendingSignIn) throw new Error('Pending sign-in attempt already in progress');
          var n = this.createCognitoUser(e.getUsername());
          return (
            (this.pendingSignIn = new Promise(function (r, o) {
              n.authenticateUser(
                e,
                t.authCallbacks(
                  n,
                  function (e) {
                    (t.pendingSignIn = null), r(e);
                  },
                  function (e) {
                    (t.pendingSignIn = null), o(e);
                  },
                ),
              );
            })),
            this.pendingSignIn
          );
        }),
        (e.prototype.signInWithoutPassword = function (e) {
          var t = this,
            n = this.createCognitoUser(e.getUsername());
          return (
            n.setAuthenticationFlowType('CUSTOM_AUTH'),
            new Promise(function (r, o) {
              n.initiateAuth(e, t.authCallbacks(n, r, o));
            })
          );
        }),
        (e.prototype.getMFAOptions = function (e) {
          return new Promise(function (t, n) {
            e.getMFAOptions(function (e, r) {
              if (e) return hh.debug('get MFA Options failed', e), void n(e);
              hh.debug('get MFA options success', r), t(r);
            });
          });
        }),
        (e.prototype.getPreferredMFA = function (e, t) {
          var n = this,
            r = this;
          return new Promise(function (o, i) {
            var s = n._config.clientMetadata,
              a = !!t && t.bypassCache;
            e.getUserData(
              function (t, s) {
                return ch(n, void 0, void 0, function () {
                  var n, a;
                  return lh(this, function (u) {
                    switch (u.label) {
                      case 0:
                        if (!t) return [3, 5];
                        if ((hh.debug('getting preferred mfa failed', t), !this.isSessionInvalid(t))) return [3, 4];
                        u.label = 1;
                      case 1:
                        return u.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(e)];
                      case 2:
                        return u.sent(), [3, 4];
                      case 3:
                        return (
                          (n = u.sent()),
                          i(
                            new Error(
                              'Session is invalid due to: ' +
                                t.message +
                                ' and failed to clean up invalid session: ' +
                                n.message,
                            ),
                          ),
                          [2]
                        );
                      case 4:
                        return i(t), [2];
                      case 5:
                        return (a = r._getMfaTypeFromUserData(s)) ? (o(a), [2]) : (i('invalid MFA Type'), [2]);
                    }
                  });
                });
              },
              { bypassCache: a, clientMetadata: s },
            );
          });
        }),
        (e.prototype._getMfaTypeFromUserData = function (e) {
          var t = null,
            n = e.PreferredMfaSetting;
          if (n) t = n;
          else {
            var r = e.UserMFASettingList;
            if (r) 0 === r.length ? (t = 'NOMFA') : hh.debug('invalid case for getPreferredMFA', e);
            else t = e.MFAOptions ? 'SMS_MFA' : 'NOMFA';
          }
          return t;
        }),
        (e.prototype._getUserData = function (e, t) {
          var n = this;
          return new Promise(function (r, o) {
            e.getUserData(function (t, i) {
              return ch(n, void 0, void 0, function () {
                var n;
                return lh(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (!t) return [3, 5];
                      if ((hh.debug('getting user data failed', t), !this.isSessionInvalid(t))) return [3, 4];
                      s.label = 1;
                    case 1:
                      return s.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(e)];
                    case 2:
                      return s.sent(), [3, 4];
                    case 3:
                      return (
                        (n = s.sent()),
                        o(
                          new Error(
                            'Session is invalid due to: ' +
                              t.message +
                              ' and failed to clean up invalid session: ' +
                              n.message,
                          ),
                        ),
                        [2]
                      );
                    case 4:
                      return o(t), [2];
                    case 5:
                      r(i), (s.label = 6);
                    case 6:
                      return [2];
                  }
                });
              });
            }, t);
          });
        }),
        (e.prototype.setPreferredMFA = function (e, t) {
          return ch(this, void 0, void 0, function () {
            var n,
              r,
              o,
              i,
              s,
              a,
              u = this;
            return lh(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (n = this._config.clientMetadata), [4, this._getUserData(e, { bypassCache: !0, clientMetadata: n })]
                  );
                case 1:
                  switch (((r = c.sent()), (o = null), (i = null), t)) {
                    case 'TOTP':
                    case 'SOFTWARE_TOKEN_MFA':
                      return [3, 2];
                    case 'SMS':
                    case 'SMS_MFA':
                      return [3, 3];
                    case 'NOMFA':
                      return [3, 4];
                  }
                  return [3, 6];
                case 2:
                  return (i = { PreferredMfa: !0, Enabled: !0 }), [3, 7];
                case 3:
                  return (o = { PreferredMfa: !0, Enabled: !0 }), [3, 7];
                case 4:
                  return (s = r.UserMFASettingList), [4, this._getMfaTypeFromUserData(r)];
                case 5:
                  if ('NOMFA' === (a = c.sent())) return [2, Promise.resolve('No change for mfa type')];
                  if ('SMS_MFA' === a) o = { PreferredMfa: !1, Enabled: !1 };
                  else {
                    if ('SOFTWARE_TOKEN_MFA' !== a) return [2, this.rejectAuthError(X.InvalidMFA)];
                    i = { PreferredMfa: !1, Enabled: !1 };
                  }
                  return (
                    s &&
                      0 !== s.length &&
                      s.forEach(function (e) {
                        'SMS_MFA' === e
                          ? (o = { PreferredMfa: !1, Enabled: !1 })
                          : 'SOFTWARE_TOKEN_MFA' === e && (i = { PreferredMfa: !1, Enabled: !1 });
                      }),
                    [3, 7]
                  );
                case 6:
                  return hh.debug('no validmfa method provided'), [2, this.rejectAuthError(X.NoMFA)];
                case 7:
                  return (
                    this,
                    [
                      2,
                      new Promise(function (t, r) {
                        e.setUserMfaPreference(o, i, function (o, i) {
                          if (o) return hh.debug('Set user mfa preference error', o), r(o);
                          hh.debug('Set user mfa success', i),
                            hh.debug('Caching the latest user data into local'),
                            e.getUserData(
                              function (n, o) {
                                return ch(u, void 0, void 0, function () {
                                  var o;
                                  return lh(this, function (s) {
                                    switch (s.label) {
                                      case 0:
                                        if (!n) return [3, 5];
                                        if ((hh.debug('getting user data failed', n), !this.isSessionInvalid(n)))
                                          return [3, 4];
                                        s.label = 1;
                                      case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(e)];
                                      case 2:
                                        return s.sent(), [3, 4];
                                      case 3:
                                        return (
                                          (o = s.sent()),
                                          r(
                                            new Error(
                                              'Session is invalid due to: ' +
                                                n.message +
                                                ' and failed to clean up invalid session: ' +
                                                o.message,
                                            ),
                                          ),
                                          [2]
                                        );
                                      case 4:
                                        return [2, r(n)];
                                      case 5:
                                        return [2, t(i)];
                                    }
                                  });
                                });
                              },
                              { bypassCache: !0, clientMetadata: n },
                            );
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.disableSMS = function (e) {
          return new Promise(function (t, n) {
            e.disableMFA(function (e, r) {
              if (e) return hh.debug('disable mfa failed', e), void n(e);
              hh.debug('disable mfa succeed', r), t(r);
            });
          });
        }),
        (e.prototype.enableSMS = function (e) {
          return new Promise(function (t, n) {
            e.enableMFA(function (e, r) {
              if (e) return hh.debug('enable mfa failed', e), void n(e);
              hh.debug('enable mfa succeed', r), t(r);
            });
          });
        }),
        (e.prototype.setupTOTP = function (e) {
          return new Promise(function (t, n) {
            e.associateSoftwareToken({
              onFailure: function (e) {
                hh.debug('associateSoftwareToken failed', e), n(e);
              },
              associateSecretCode: function (e) {
                hh.debug('associateSoftwareToken sucess', e), t(e);
              },
            });
          });
        }),
        (e.prototype.verifyTotpToken = function (e, t) {
          return (
            hh.debug('verification totp token', e, t),
            new Promise(function (n, r) {
              e.verifySoftwareToken(t, 'My TOTP device', {
                onFailure: function (e) {
                  hh.debug('verifyTotpToken failed', e), r(e);
                },
                onSuccess: function (t) {
                  gh('signIn', e, 'A user ' + e.getUsername() + ' has been signed in'),
                    hh.debug('verifyTotpToken success', t),
                    n(t);
                },
              });
            })
          );
        }),
        (e.prototype.confirmSignIn = function (e, t, n, r) {
          var o = this;
          if ((void 0 === r && (r = this._config.clientMetadata), !t)) return this.rejectAuthError(X.EmptyCode);
          var i = this;
          return new Promise(function (s, a) {
            e.sendMFACode(
              t,
              {
                onSuccess: function (t) {
                  return ch(o, void 0, void 0, function () {
                    var n, r;
                    return lh(this, function (o) {
                      switch (o.label) {
                        case 0:
                          hh.debug(t), (o.label = 1);
                        case 1:
                          return o.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                        case 2:
                          return o.sent(), [4, this.Credentials.set(t, 'session')];
                        case 3:
                          return (n = o.sent()), hh.debug('succeed to get cognito credentials', n), [3, 6];
                        case 4:
                          return (r = o.sent()), hh.debug('cannot get cognito credentials', r), [3, 6];
                        case 5:
                          return (
                            (i.user = e),
                            gh('signIn', e, 'A user ' + e.getUsername() + ' has been signed in'),
                            s(e),
                            [7]
                          );
                        case 6:
                          return [2];
                      }
                    });
                  });
                },
                onFailure: function (e) {
                  hh.debug('confirm signIn failure', e), a(e);
                },
              },
              n,
              r,
            );
          });
        }),
        (e.prototype.completeNewPassword = function (e, t, n, r) {
          var o = this;
          if ((void 0 === n && (n = {}), void 0 === r && (r = this._config.clientMetadata), !t))
            return this.rejectAuthError(X.EmptyPassword);
          var i = this;
          return new Promise(function (s, a) {
            e.completeNewPasswordChallenge(
              t,
              n,
              {
                onSuccess: function (t) {
                  return ch(o, void 0, void 0, function () {
                    var n, r;
                    return lh(this, function (o) {
                      switch (o.label) {
                        case 0:
                          hh.debug(t), (o.label = 1);
                        case 1:
                          return o.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                        case 2:
                          return o.sent(), [4, this.Credentials.set(t, 'session')];
                        case 3:
                          return (n = o.sent()), hh.debug('succeed to get cognito credentials', n), [3, 6];
                        case 4:
                          return (r = o.sent()), hh.debug('cannot get cognito credentials', r), [3, 6];
                        case 5:
                          return (
                            (i.user = e),
                            gh('signIn', e, 'A user ' + e.getUsername() + ' has been signed in'),
                            s(e),
                            [7]
                          );
                        case 6:
                          return [2];
                      }
                    });
                  });
                },
                onFailure: function (e) {
                  hh.debug('completeNewPassword failure', e),
                    gh('completeNewPassword_failure', e, o.user + ' failed to complete the new password flow'),
                    a(e);
                },
                mfaRequired: function (t, n) {
                  hh.debug('signIn MFA required'), (e.challengeName = t), (e.challengeParam = n), s(e);
                },
                mfaSetup: function (t, n) {
                  hh.debug('signIn mfa setup', t), (e.challengeName = t), (e.challengeParam = n), s(e);
                },
                totpRequired: function (t, n) {
                  hh.debug('signIn mfa setup', t), (e.challengeName = t), (e.challengeParam = n), s(e);
                },
              },
              r,
            );
          });
        }),
        (e.prototype.sendCustomChallengeAnswer = function (e, t, n) {
          var r = this;
          if ((void 0 === n && (n = this._config.clientMetadata), !this.userPool)) return this.rejectNoUserPool();
          if (!t) return this.rejectAuthError(X.EmptyChallengeResponse);
          return new Promise(function (o, i) {
            e.sendCustomChallengeAnswer(t, r.authCallbacks(e, o, i), n);
          });
        }),
        (e.prototype.deleteUserAttributes = function (e, t) {
          var n = this;
          return new Promise(function (r, o) {
            n.userSession(e).then(function (n) {
              e.deleteAttributes(t, function (e, t) {
                return e ? o(e) : r(t);
              });
            });
          });
        }),
        (e.prototype.deleteUser = function () {
          return ch(this, void 0, void 0, function () {
            var e,
              t,
              n = this;
            return lh(this, function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 2, , 3]), [4, this._storageSync];
                case 1:
                  return r.sent(), [3, 3];
                case 2:
                  throw ((e = r.sent()), hh.debug('Failed to sync cache info into memory', e), new Error(e));
                case 3:
                  return (
                    (t = this._oAuthHandler && 'true' === this._storage.getItem('amplify-signin-with-hostedUI')),
                    [
                      2,
                      new Promise(function (e, r) {
                        return ch(n, void 0, void 0, function () {
                          var n,
                            o = this;
                          return lh(this, function (i) {
                            if (this.userPool) {
                              if (!(n = this.userPool.getCurrentUser()))
                                return (
                                  hh.debug('Failed to get user from user pool'), [2, r(new Error('No current user.'))]
                                );
                              n.getSession(function (i, s) {
                                return ch(o, void 0, void 0, function () {
                                  var o,
                                    s = this;
                                  return lh(this, function (a) {
                                    switch (a.label) {
                                      case 0:
                                        if (!i) return [3, 5];
                                        if ((hh.debug('Failed to get the user session', i), !this.isSessionInvalid(i)))
                                          return [3, 4];
                                        a.label = 1;
                                      case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(n)];
                                      case 2:
                                        return a.sent(), [3, 4];
                                      case 3:
                                        return (
                                          (o = a.sent()),
                                          r(
                                            new Error(
                                              'Session is invalid due to: ' +
                                                i.message +
                                                ' and failed to clean up invalid session: ' +
                                                o.message,
                                            ),
                                          ),
                                          [2]
                                        );
                                      case 4:
                                        return [2, r(i)];
                                      case 5:
                                        n.deleteUser(function (o, i) {
                                          if (o) r(o);
                                          else {
                                            gh('userDeleted', i, 'The authenticated user has been deleted.'),
                                              n.signOut(),
                                              (s.user = null);
                                            try {
                                              s.cleanCachedItems();
                                            } catch (e) {
                                              hh.debug('failed to clear cached items');
                                            }
                                            t
                                              ? s.oAuthSignOutRedirect(e, r)
                                              : (gh('signOut', s.user, 'A user has been signed out'), e(i));
                                          }
                                        }),
                                          (a.label = 6);
                                      case 6:
                                        return [2];
                                    }
                                  });
                                });
                              });
                            } else hh.debug('no Congito User pool'), r(new Error('Cognito User pool does not exist'));
                            return [2];
                          });
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.updateUserAttributes = function (e, t, n) {
          void 0 === n && (n = this._config.clientMetadata);
          var r = [],
            o = this;
          return new Promise(function (i, s) {
            o.userSession(e).then(function (o) {
              for (var a in t)
                if ('sub' !== a && a.indexOf('_verified') < 0) {
                  var u = { Name: a, Value: t[a] };
                  r.push(u);
                }
              e.updateAttributes(
                r,
                function (e, t) {
                  return e ? s(e) : i(t);
                },
                n,
              );
            });
          });
        }),
        (e.prototype.userAttributes = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            t.userSession(e).then(function (t) {
              e.getUserAttributes(function (e, t) {
                e ? r(e) : n(t);
              });
            });
          });
        }),
        (e.prototype.verifiedContact = function (e) {
          var t = this;
          return this.userAttributes(e).then(function (e) {
            var n = t.attributesToObject(e),
              r = {},
              o = {};
            return (
              n.email && (n.email_verified ? (o.email = n.email) : (r.email = n.email)),
              n.phone_number &&
                (n.phone_number_verified ? (o.phone_number = n.phone_number) : (r.phone_number = n.phone_number)),
              { verified: o, unverified: r }
            );
          });
        }),
        (e.prototype.isErrorWithMessage = function (e) {
          return 'object' == typeof e && Object.prototype.hasOwnProperty.call(e, 'message');
        }),
        (e.prototype.isTokenRevokedError = function (e) {
          return this.isErrorWithMessage(e) && 'Access Token has been revoked' === e.message;
        }),
        (e.prototype.isRefreshTokenRevokedError = function (e) {
          return this.isErrorWithMessage(e) && 'Refresh Token has been revoked' === e.message;
        }),
        (e.prototype.isUserDisabledError = function (e) {
          return this.isErrorWithMessage(e) && 'User is disabled.' === e.message;
        }),
        (e.prototype.isUserDoesNotExistError = function (e) {
          return this.isErrorWithMessage(e) && 'User does not exist.' === e.message;
        }),
        (e.prototype.isRefreshTokenExpiredError = function (e) {
          return this.isErrorWithMessage(e) && 'Refresh Token has expired' === e.message;
        }),
        (e.prototype.isSignedInHostedUI = function () {
          return this._oAuthHandler && 'true' === this._storage.getItem('amplify-signin-with-hostedUI');
        }),
        (e.prototype.isSessionInvalid = function (e) {
          return (
            this.isUserDisabledError(e) ||
            this.isUserDoesNotExistError(e) ||
            this.isTokenRevokedError(e) ||
            this.isRefreshTokenRevokedError(e) ||
            this.isRefreshTokenExpiredError(e)
          );
        }),
        (e.prototype.cleanUpInvalidSession = function (e) {
          return ch(this, void 0, void 0, function () {
            var t = this;
            return lh(this, function (n) {
              switch (n.label) {
                case 0:
                  e.signOut(), (this.user = null), (n.label = 1);
                case 1:
                  return n.trys.push([1, 3, , 4]), [4, this.cleanCachedItems()];
                case 2:
                  return n.sent(), [3, 4];
                case 3:
                  return n.sent(), hh.debug('failed to clear cached items'), [3, 4];
                case 4:
                  return this.isSignedInHostedUI()
                    ? [
                        2,
                        new Promise(function (e, n) {
                          t.oAuthSignOutRedirect(e, n);
                        }),
                      ]
                    : (gh('signOut', this.user, 'A user has been signed out'), [2]);
              }
            });
          });
        }),
        (e.prototype.currentUserPoolUser = function (e) {
          var t = this;
          return this.userPool
            ? new Promise(function (n, r) {
                t._storageSync
                  .then(function () {
                    return ch(t, void 0, void 0, function () {
                      var t,
                        o,
                        i = this;
                      return lh(this, function (s) {
                        switch (s.label) {
                          case 0:
                            return this.isOAuthInProgress()
                              ? (hh.debug('OAuth signIn in progress, waiting for resolution...'),
                                [
                                  4,
                                  new Promise(function (e) {
                                    var t = setTimeout(function () {
                                      hh.debug('OAuth signIn in progress timeout'), be.Hub.remove('auth', n), e();
                                    }, 1e4);
                                    function n(r) {
                                      var o = r.payload.event;
                                      ('cognitoHostedUI' !== o && 'cognitoHostedUI_failure' !== o) ||
                                        (hh.debug('OAuth signIn resolved: ' + o),
                                        clearTimeout(t),
                                        be.Hub.remove('auth', n),
                                        e());
                                    }
                                    be.Hub.listen('auth', n);
                                  }),
                                ])
                              : [3, 2];
                          case 1:
                            s.sent(), (s.label = 2);
                          case 2:
                            return (t = this.userPool.getCurrentUser())
                              ? ((o = this._config.clientMetadata),
                                t.getSession(
                                  function (o, s) {
                                    return ch(i, void 0, void 0, function () {
                                      var i,
                                        a,
                                        u,
                                        c,
                                        l = this;
                                      return lh(this, function (f) {
                                        switch (f.label) {
                                          case 0:
                                            if (!o) return [3, 5];
                                            if (
                                              (hh.debug('Failed to get the user session', o), !this.isSessionInvalid(o))
                                            )
                                              return [3, 4];
                                            f.label = 1;
                                          case 1:
                                            return f.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                                          case 2:
                                            return f.sent(), [3, 4];
                                          case 3:
                                            return (
                                              (i = f.sent()),
                                              r(
                                                new Error(
                                                  'Session is invalid due to: ' +
                                                    o.message +
                                                    ' and failed to clean up invalid session: ' +
                                                    i.message,
                                                ),
                                              ),
                                              [2]
                                            );
                                          case 4:
                                            return r(o), [2];
                                          case 5:
                                            return (a = !!e && e.bypassCache) ? [4, this.Credentials.clear()] : [3, 7];
                                          case 6:
                                            f.sent(), (f.label = 7);
                                          case 7:
                                            return (
                                              (u = this._config.clientMetadata),
                                              (c = s.getAccessToken().decodePayload().scope),
                                              (void 0 === c ? '' : c).split(' ').includes(dh)
                                                ? (t.getUserData(
                                                    function (e, o) {
                                                      return ch(l, void 0, void 0, function () {
                                                        var i, s, a, u, c, l, f;
                                                        return lh(this, function (h) {
                                                          switch (h.label) {
                                                            case 0:
                                                              if (!e) return [3, 7];
                                                              if (
                                                                (hh.debug('getting user data failed', e),
                                                                !this.isSessionInvalid(e))
                                                              )
                                                                return [3, 5];
                                                              h.label = 1;
                                                            case 1:
                                                              return (
                                                                h.trys.push([1, 3, , 4]),
                                                                [4, this.cleanUpInvalidSession(t)]
                                                              );
                                                            case 2:
                                                              return h.sent(), [3, 4];
                                                            case 3:
                                                              return (
                                                                (i = h.sent()),
                                                                r(
                                                                  new Error(
                                                                    'Session is invalid due to: ' +
                                                                      e.message +
                                                                      ' and failed to clean up invalid session: ' +
                                                                      i.message,
                                                                  ),
                                                                ),
                                                                [2]
                                                              );
                                                            case 4:
                                                              return r(e), [3, 6];
                                                            case 5:
                                                              n(t), (h.label = 6);
                                                            case 6:
                                                              return [2];
                                                            case 7:
                                                              for (
                                                                s = o.PreferredMfaSetting || 'NOMFA', a = [], u = 0;
                                                                u < o.UserAttributes.length;
                                                                u++
                                                              )
                                                                (c = {
                                                                  Name: o.UserAttributes[u].Name,
                                                                  Value: o.UserAttributes[u].Value,
                                                                }),
                                                                  (l = new nf(c)),
                                                                  a.push(l);
                                                              return (
                                                                (f = this.attributesToObject(a)),
                                                                Object.assign(t, { attributes: f, preferredMFA: s }),
                                                                [2, n(t)]
                                                              );
                                                          }
                                                        });
                                                      });
                                                    },
                                                    { bypassCache: a, clientMetadata: u },
                                                  ),
                                                  [2])
                                                : (hh.debug(
                                                    'Unable to get the user data because the aws.cognito.signin.user.admin is not in the scopes of the access token',
                                                  ),
                                                  [2, n(t)])
                                            );
                                        }
                                      });
                                    });
                                  },
                                  { clientMetadata: o },
                                ),
                                [2])
                              : (hh.debug('Failed to get user from user pool'), r('No current user'), [2]);
                        }
                      });
                    });
                  })
                  .catch(function (e) {
                    return hh.debug('Failed to sync cache info into memory', e), r(e);
                  });
              })
            : this.rejectNoUserPool();
        }),
        (e.prototype.isOAuthInProgress = function () {
          return this.oAuthFlowInProgress;
        }),
        (e.prototype.currentAuthenticatedUser = function (e) {
          return ch(this, void 0, void 0, function () {
            var t, n, r, o, i;
            return lh(this, function (s) {
              switch (s.label) {
                case 0:
                  hh.debug('getting current authenticated user'), (t = null), (s.label = 1);
                case 1:
                  return s.trys.push([1, 3, , 4]), [4, this._storageSync];
                case 2:
                  return s.sent(), [3, 4];
                case 3:
                  throw ((n = s.sent()), hh.debug('Failed to sync cache info into memory', n), n);
                case 4:
                  try {
                    (r = JSON.parse(this._storage.getItem('aws-amplify-federatedInfo'))) &&
                      (t = uh(uh({}, r.user), { token: r.token }));
                  } catch (e) {
                    hh.debug('cannot load federated user from auth storage');
                  }
                  return t
                    ? ((this.user = t), hh.debug('get current authenticated federated user', this.user), [2, this.user])
                    : [3, 5];
                case 5:
                  hh.debug('get current authenticated userpool user'), (o = null), (s.label = 6);
                case 6:
                  return s.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser(e)];
                case 7:
                  return (o = s.sent()), [3, 9];
                case 8:
                  return (
                    'No userPool' === (i = s.sent()) &&
                      hh.error(
                        'Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID',
                      ),
                    hh.debug('The user is not authenticated by the error', i),
                    [2, Promise.reject('The user is not authenticated')]
                  );
                case 9:
                  return (this.user = o), [2, this.user];
              }
            });
          });
        }),
        (e.prototype.currentSession = function () {
          var e = this;
          return (
            hh.debug('Getting current session'),
            this.userPool
              ? new Promise(function (t, n) {
                  e.currentUserPoolUser()
                    .then(function (r) {
                      e.userSession(r)
                        .then(function (e) {
                          t(e);
                        })
                        .catch(function (e) {
                          hh.debug('Failed to get the current session', e), n(e);
                        });
                    })
                    .catch(function (e) {
                      hh.debug('Failed to get the current user', e), n(e);
                    });
                })
              : this.rejectNoUserPool()
          );
        }),
        (e.prototype.userSession = function (e) {
          var t = this;
          if (!e) return hh.debug('the user is null'), this.rejectAuthError(X.NoUserSession);
          var n = this._config.clientMetadata;
          return new Promise(function (r, o) {
            hh.debug('Getting the session from this user:', e),
              e.getSession(
                function (n, i) {
                  return ch(t, void 0, void 0, function () {
                    var t;
                    return lh(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if (!n) return [3, 5];
                          if ((hh.debug('Failed to get the session from user', e), !this.isSessionInvalid(n)))
                            return [3, 4];
                          s.label = 1;
                        case 1:
                          return s.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(e)];
                        case 2:
                          return s.sent(), [3, 4];
                        case 3:
                          return (
                            (t = s.sent()),
                            o(
                              new Error(
                                'Session is invalid due to: ' +
                                  n.message +
                                  ' and failed to clean up invalid session: ' +
                                  t.message,
                              ),
                            ),
                            [2]
                          );
                        case 4:
                          return o(n), [2];
                        case 5:
                          return hh.debug('Succeed to get the user session', i), r(i), [2];
                      }
                    });
                  });
                },
                { clientMetadata: n },
              );
          });
        }),
        (e.prototype.currentUserCredentials = function () {
          return ch(this, void 0, void 0, function () {
            var e,
              t,
              n = this;
            return lh(this, function (r) {
              switch (r.label) {
                case 0:
                  hh.debug('Getting current user credentials'), (r.label = 1);
                case 1:
                  return r.trys.push([1, 3, , 4]), [4, this._storageSync];
                case 2:
                  return r.sent(), [3, 4];
                case 3:
                  throw ((e = r.sent()), hh.debug('Failed to sync cache info into memory', e), e);
                case 4:
                  t = null;
                  try {
                    t = JSON.parse(this._storage.getItem('aws-amplify-federatedInfo'));
                  } catch (e) {
                    hh.debug('failed to get or parse item aws-amplify-federatedInfo', e);
                  }
                  return t
                    ? [2, this.Credentials.refreshFederatedToken(t)]
                    : [
                        2,
                        this.currentSession()
                          .then(function (e) {
                            return hh.debug('getting session success', e), n.Credentials.set(e, 'session');
                          })
                          .catch(function () {
                            return hh.debug('getting guest credentials'), n.Credentials.set(null, 'guest');
                          }),
                      ];
              }
            });
          });
        }),
        (e.prototype.currentCredentials = function () {
          return hh.debug('getting current credentials'), this.Credentials.get();
        }),
        (e.prototype.verifyUserAttribute = function (e, t, n) {
          return (
            void 0 === n && (n = this._config.clientMetadata),
            new Promise(function (r, o) {
              e.getAttributeVerificationCode(
                t,
                {
                  onSuccess: function (e) {
                    return r(e);
                  },
                  onFailure: function (e) {
                    return o(e);
                  },
                },
                n,
              );
            })
          );
        }),
        (e.prototype.verifyUserAttributeSubmit = function (e, t, n) {
          return n
            ? new Promise(function (r, o) {
                e.verifyAttribute(t, n, {
                  onSuccess: function (e) {
                    r(e);
                  },
                  onFailure: function (e) {
                    o(e);
                  },
                });
              })
            : this.rejectAuthError(X.EmptyCode);
        }),
        (e.prototype.verifyCurrentUserAttribute = function (e) {
          var t = this;
          return t.currentUserPoolUser().then(function (n) {
            return t.verifyUserAttribute(n, e);
          });
        }),
        (e.prototype.verifyCurrentUserAttributeSubmit = function (e, t) {
          var n = this;
          return n.currentUserPoolUser().then(function (r) {
            return n.verifyUserAttributeSubmit(r, e, t);
          });
        }),
        (e.prototype.cognitoIdentitySignOut = function (e, t) {
          return ch(this, void 0, void 0, function () {
            var n,
              r,
              o = this;
            return lh(this, function (i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 2, , 3]), [4, this._storageSync];
                case 1:
                  return i.sent(), [3, 3];
                case 2:
                  throw ((n = i.sent()), hh.debug('Failed to sync cache info into memory', n), n);
                case 3:
                  return (
                    (r = this._oAuthHandler && 'true' === this._storage.getItem('amplify-signin-with-hostedUI')),
                    [
                      2,
                      new Promise(function (n, i) {
                        if (e && e.global) {
                          hh.debug('user global sign out', t);
                          var s = o._config.clientMetadata;
                          t.getSession(
                            function (e, s) {
                              return ch(o, void 0, void 0, function () {
                                var o,
                                  s = this;
                                return lh(this, function (a) {
                                  switch (a.label) {
                                    case 0:
                                      if (!e) return [3, 5];
                                      if ((hh.debug('failed to get the user session', e), !this.isSessionInvalid(e)))
                                        return [3, 4];
                                      a.label = 1;
                                    case 1:
                                      return a.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                                    case 2:
                                      return a.sent(), [3, 4];
                                    case 3:
                                      return (
                                        (o = a.sent()),
                                        i(
                                          new Error(
                                            'Session is invalid due to: ' +
                                              e.message +
                                              ' and failed to clean up invalid session: ' +
                                              o.message,
                                          ),
                                        ),
                                        [2]
                                      );
                                    case 4:
                                      return [2, i(e)];
                                    case 5:
                                      return (
                                        t.globalSignOut({
                                          onSuccess: function (e) {
                                            if ((hh.debug('global sign out success'), !r)) return n();
                                            s.oAuthSignOutRedirect(n, i);
                                          },
                                          onFailure: function (e) {
                                            return hh.debug('global sign out failed', e), i(e);
                                          },
                                        }),
                                        [2]
                                      );
                                  }
                                });
                              });
                            },
                            { clientMetadata: s },
                          );
                        } else
                          hh.debug('user sign out', t),
                            t.signOut(function () {
                              if (!r) return n();
                              o.oAuthSignOutRedirect(n, i);
                            });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.oAuthSignOutRedirect = function (e, t) {
          We.browserOrNode().isBrowser ? this.oAuthSignOutRedirectOrReject(t) : this.oAuthSignOutAndResolve(e);
        }),
        (e.prototype.oAuthSignOutAndResolve = function (e) {
          this._oAuthHandler.signOut(), e();
        }),
        (e.prototype.oAuthSignOutRedirectOrReject = function (e) {
          this._oAuthHandler.signOut(),
            setTimeout(function () {
              return e(Error('Signout timeout fail'));
            }, 3e3);
        }),
        (e.prototype.signOut = function (e) {
          return ch(this, void 0, void 0, function () {
            var t;
            return lh(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
                case 1:
                  return n.sent(), [3, 3];
                case 2:
                  return n.sent(), hh.debug('failed to clear cached items'), [3, 3];
                case 3:
                  return this.userPool
                    ? (t = this.userPool.getCurrentUser())
                      ? [4, this.cognitoIdentitySignOut(e, t)]
                      : [3, 5]
                    : [3, 7];
                case 4:
                  return n.sent(), [3, 6];
                case 5:
                  hh.debug('no current Cognito user'), (n.label = 6);
                case 6:
                  return [3, 8];
                case 7:
                  hh.debug('no Cognito User pool'), (n.label = 8);
                case 8:
                  return gh('signOut', this.user, 'A user has been signed out'), (this.user = null), [2];
              }
            });
          });
        }),
        (e.prototype.cleanCachedItems = function () {
          return ch(this, void 0, void 0, function () {
            return lh(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.Credentials.clear()];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.changePassword = function (e, t, n, r) {
          var o = this;
          return (
            void 0 === r && (r = this._config.clientMetadata),
            new Promise(function (i, s) {
              o.userSession(e).then(function (o) {
                e.changePassword(
                  t,
                  n,
                  function (e, t) {
                    return e ? (hh.debug('change password failure', e), s(e)) : i(t);
                  },
                  r,
                );
              });
            })
          );
        }),
        (e.prototype.forgotPassword = function (e, t) {
          if ((void 0 === t && (t = this._config.clientMetadata), !this.userPool)) return this.rejectNoUserPool();
          if (!e) return this.rejectAuthError(X.EmptyUsername);
          var n = this.createCognitoUser(e);
          return new Promise(function (r, o) {
            n.forgotPassword(
              {
                onSuccess: function () {
                  r();
                },
                onFailure: function (t) {
                  hh.debug('forgot password failure', t),
                    gh('forgotPassword_failure', t, e + ' forgotPassword failed'),
                    o(t);
                },
                inputVerificationCode: function (t) {
                  gh('forgotPassword', n, e + ' has initiated forgot password flow'), r(t);
                },
              },
              t,
            );
          });
        }),
        (e.prototype.forgotPasswordSubmit = function (e, t, n, r) {
          if ((void 0 === r && (r = this._config.clientMetadata), !this.userPool)) return this.rejectNoUserPool();
          if (!e) return this.rejectAuthError(X.EmptyUsername);
          if (!t) return this.rejectAuthError(X.EmptyCode);
          if (!n) return this.rejectAuthError(X.EmptyPassword);
          var o = this.createCognitoUser(e);
          return new Promise(function (i, s) {
            o.confirmPassword(
              t,
              n,
              {
                onSuccess: function (t) {
                  gh('forgotPasswordSubmit', o, e + ' forgotPasswordSubmit successful'), i(t);
                },
                onFailure: function (t) {
                  gh('forgotPasswordSubmit_failure', t, e + ' forgotPasswordSubmit failed'), s(t);
                },
              },
              r,
            );
          });
        }),
        (e.prototype.currentUserInfo = function () {
          return ch(this, void 0, void 0, function () {
            var e, t, n, r, o, i, s;
            return lh(this, function (a) {
              switch (a.label) {
                case 0:
                  return (e = this.Credentials.getCredSource()) && 'aws' !== e && 'userPool' !== e
                    ? [3, 9]
                    : [
                        4,
                        this.currentUserPoolUser().catch(function (e) {
                          return hh.error(e);
                        }),
                      ];
                case 1:
                  if (!(s = a.sent())) return [2, null];
                  a.label = 2;
                case 2:
                  return a.trys.push([2, 8, , 9]), [4, this.userAttributes(s)];
                case 3:
                  (t = a.sent()), (n = this.attributesToObject(t)), (r = null), (a.label = 4);
                case 4:
                  return a.trys.push([4, 6, , 7]), [4, this.currentCredentials()];
                case 5:
                  return (r = a.sent()), [3, 7];
                case 6:
                  return (
                    (o = a.sent()),
                    hh.debug('Failed to retrieve credentials while getting current user info', o),
                    [3, 7]
                  );
                case 7:
                  return [2, { id: r ? r.identityId : void 0, username: s.getUsername(), attributes: n }];
                case 8:
                  return (i = a.sent()), hh.error('currentUserInfo error', i), [2, {}];
                case 9:
                  return 'federated' === e ? [2, (s = this.user) || {}] : [2];
              }
            });
          });
        }),
        (e.prototype.federatedSignIn = function (e, t, n) {
          return ch(this, void 0, void 0, function () {
            var r, o, i, s, a, u, c, l, f, h, d;
            return lh(this, function (p) {
              switch (p.label) {
                case 0:
                  if (!this._config.identityPoolId && !this._config.userPoolId)
                    throw new Error('Federation requires either a User Pool or Identity Pool in config');
                  if (void 0 === e && this._config.identityPoolId && !this._config.userPoolId)
                    throw new Error('Federation with Identity Pools requires tokens passed as arguments');
                  return te(e) ||
                    ((g = e) &&
                      ['customProvider'].find(function (e) {
                        return g.hasOwnProperty(e);
                      })) ||
                    (function (e) {
                      return (
                        e &&
                        !!['customState'].find(function (t) {
                          return e.hasOwnProperty(t);
                        })
                      );
                    })(e) ||
                    void 0 === e
                    ? ((r = e || { provider: Z.Cognito }),
                      (a = te(r) ? r.provider : r.customProvider),
                      te(r),
                      (o = r.customState),
                      this._config.userPoolId &&
                        ((i = ne(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID),
                        (s = ne(this._config.oauth)
                          ? this._config.oauth.redirectSignIn
                          : this._config.oauth.redirectUri),
                        this._oAuthHandler.oauthSignIn(
                          this._config.oauth.responseType,
                          this._config.oauth.domain,
                          s,
                          i,
                          a,
                          o,
                        )),
                      [3, 4])
                    : [3, 1];
                case 1:
                  a = e;
                  try {
                    (u = JSON.stringify(JSON.parse(this._storage.getItem('aws-amplify-federatedInfo')).user)) &&
                      hh.warn(
                        'There is already a signed in user: ' +
                          u +
                          ' in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.',
                      );
                  } catch (e) {}
                  return (
                    (c = t.token),
                    (l = t.identity_id),
                    (f = t.expires_at),
                    [
                      4,
                      this.Credentials.set(
                        { provider: a, token: c, identity_id: l, user: n, expires_at: f },
                        'federation',
                      ),
                    ]
                  );
                case 2:
                  return (h = p.sent()), [4, this.currentAuthenticatedUser()];
                case 3:
                  return (
                    (d = p.sent()),
                    gh('signIn', d, 'A user ' + d.username + ' has been signed in'),
                    hh.debug('federated sign in credentials', h),
                    [2, h]
                  );
                case 4:
                  return [2];
              }
              var g;
            });
          });
        }),
        (e.prototype._handleAuthResponse = function (e) {
          return ch(this, void 0, void 0, function () {
            var t, n, r, o, i, s, a, u, c, l, f, h, d, p;
            return lh(this, function (g) {
              switch (g.label) {
                case 0:
                  if (this.oAuthFlowInProgress) return hh.debug('Skipping URL ' + e + ' current flow in progress'), [2];
                  g.label = 1;
                case 1:
                  if ((g.trys.push([1, , 8, 9]), (this.oAuthFlowInProgress = !0), !this._config.userPoolId))
                    throw new Error('OAuth responses require a User Pool defined in config');
                  if (
                    (gh('parsingCallbackUrl', { url: e }, 'The callback url is being parsed'),
                    (t = e || (We.browserOrNode().isBrowser ? window.location.href : '')),
                    (n = !!(Cf(t).query || '')
                      .split('&')
                      .map(function (e) {
                        return e.split('=');
                      })
                      .find(function (e) {
                        var t = fh(e, 1)[0];
                        return 'code' === t || 'error' === t;
                      })),
                    (r = !!(Cf(t).hash || '#')
                      .substr(1)
                      .split('&')
                      .map(function (e) {
                        return e.split('=');
                      })
                      .find(function (e) {
                        var t = fh(e, 1)[0];
                        return 'access_token' === t || 'error' === t;
                      })),
                    !n && !r)
                  )
                    return [3, 7];
                  this._storage.setItem('amplify-redirected-from-hosted-ui', 'true'), (g.label = 2);
                case 2:
                  return g.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(t)];
                case 3:
                  return (
                    (o = g.sent()),
                    (i = o.accessToken),
                    (s = o.idToken),
                    (a = o.refreshToken),
                    (u = o.state),
                    (c = new Xl({
                      IdToken: new $l({ IdToken: s }),
                      RefreshToken: new Jl({ RefreshToken: a }),
                      AccessToken: new Wl({ AccessToken: i }),
                    })),
                    (l = void 0),
                    this._config.identityPoolId ? [4, this.Credentials.set(c, 'session')] : [3, 5]
                  );
                case 4:
                  (l = g.sent()), hh.debug('AWS credentials', l), (g.label = 5);
                case 5:
                  return (
                    (f = /-/.test(u)),
                    (h = this.createCognitoUser(
                      c.getIdToken().decodePayload()['cognito:username'],
                    )).setSignInUserSession(c),
                    window &&
                      void 0 !== window.history &&
                      window.history.replaceState({}, null, this._config.oauth.redirectSignIn),
                    gh('signIn', h, 'A user ' + h.getUsername() + ' has been signed in'),
                    gh('cognitoHostedUI', h, 'A user ' + h.getUsername() + ' has been signed in via Cognito Hosted UI'),
                    f &&
                      ((d = u.split('-').splice(1).join('-')),
                      gh('customOAuthState', Ba(d), 'State for user ' + h.getUsername())),
                    [2, l]
                  );
                case 6:
                  return (
                    (p = g.sent()),
                    hh.debug('Error in cognito hosted auth response', p),
                    window &&
                      void 0 !== window.history &&
                      window.history.replaceState({}, null, this._config.oauth.redirectSignIn),
                    gh('signIn_failure', p, 'The OAuth response flow failed'),
                    gh('cognitoHostedUI_failure', p, 'A failure occurred when returning to the Cognito Hosted UI'),
                    gh('customState_failure', p, 'A failure occurred when returning state'),
                    [3, 7]
                  );
                case 7:
                  return [3, 9];
                case 8:
                  return (this.oAuthFlowInProgress = !1), [7];
                case 9:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.essentialCredentials = function (e) {
          return {
            accessKeyId: e.accessKeyId,
            sessionToken: e.sessionToken,
            secretAccessKey: e.secretAccessKey,
            identityId: e.identityId,
            authenticated: e.authenticated,
          };
        }),
        (e.prototype.attributesToObject = function (e) {
          var t = this,
            n = {};
          return (
            e &&
              e.map(function (e) {
                'email_verified' === e.Name || 'phone_number_verified' === e.Name
                  ? (n[e.Name] = t.isTruthyString(e.Value) || !0 === e.Value)
                  : (n[e.Name] = e.Value);
              }),
            n
          );
        }),
        (e.prototype.isTruthyString = function (e) {
          return 'function' == typeof e.toLowerCase && 'true' === e.toLowerCase();
        }),
        (e.prototype.createCognitoUser = function (e) {
          var t = { Username: e, Pool: this.userPool };
          t.Storage = this._storage;
          var n = this._config.authenticationFlowType,
            r = new uf(t);
          return n && r.setAuthenticationFlowType(n), r;
        }),
        (e.prototype._isValidAuthStorage = function (e) {
          return (
            !!e &&
            'function' == typeof e.getItem &&
            'function' == typeof e.setItem &&
            'function' == typeof e.removeItem &&
            'function' == typeof e.clear
          );
        }),
        (e.prototype.noUserPoolErrorHandler = function (e) {
          return !e || (e.userPoolId && e.identityPoolId) ? X.NoConfig : X.MissingAuthConfig;
        }),
        (e.prototype.rejectAuthError = function (e) {
          return Promise.reject(new nh.AuthError(e));
        }),
        (e.prototype.rejectNoUserPool = function () {
          var e = this.noUserPoolErrorHandler(this._config);
          return Promise.reject(new nh.NoUserPoolError(e));
        }),
        (e.prototype.rememberDevice = function () {
          return ch(this, void 0, void 0, function () {
            var e, t;
            return lh(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
                case 1:
                  return (e = n.sent()), [3, 3];
                case 2:
                  return (
                    (t = n.sent()),
                    hh.debug('The user is not authenticated by the error', t),
                    [2, Promise.reject('The user is not authenticated')]
                  );
                case 3:
                  return (
                    e.getCachedDeviceKeyAndPassword(),
                    [
                      2,
                      new Promise(function (t, n) {
                        e.setDeviceStatusRemembered({
                          onSuccess: function (e) {
                            t(e);
                          },
                          onFailure: function (e) {
                            'InvalidParameterException' === e.code
                              ? n(new nh.AuthError(X.DeviceConfig))
                              : 'NetworkError' === e.code
                              ? n(new nh.AuthError(X.NetworkError))
                              : n(e);
                          },
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.forgetDevice = function () {
          return ch(this, void 0, void 0, function () {
            var e, t;
            return lh(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
                case 1:
                  return (e = n.sent()), [3, 3];
                case 2:
                  return (
                    (t = n.sent()),
                    hh.debug('The user is not authenticated by the error', t),
                    [2, Promise.reject('The user is not authenticated')]
                  );
                case 3:
                  return (
                    e.getCachedDeviceKeyAndPassword(),
                    [
                      2,
                      new Promise(function (t, n) {
                        e.forgetDevice({
                          onSuccess: function (e) {
                            t(e);
                          },
                          onFailure: function (e) {
                            'InvalidParameterException' === e.code
                              ? n(new nh.AuthError(X.DeviceConfig))
                              : 'NetworkError' === e.code
                              ? n(new nh.AuthError(X.NetworkError))
                              : n(e);
                          },
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.fetchDevices = function () {
          return ch(this, void 0, void 0, function () {
            var e, t;
            return lh(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
                case 1:
                  return (e = n.sent()), [3, 3];
                case 2:
                  throw (
                    ((t = n.sent()),
                    hh.debug('The user is not authenticated by the error', t),
                    new Error('The user is not authenticated'))
                  );
                case 3:
                  return (
                    e.getCachedDeviceKeyAndPassword(),
                    [
                      2,
                      new Promise(function (t, n) {
                        var r = {
                          onSuccess: function (e) {
                            var n = e.Devices.map(function (e) {
                              var t =
                                e.DeviceAttributes.find(function (e) {
                                  return 'device_name' === e.Name;
                                }) || {};
                              return { id: e.DeviceKey, name: t.Value };
                            });
                            t(n);
                          },
                          onFailure: function (e) {
                            'InvalidParameterException' === e.code
                              ? n(new nh.AuthError(X.DeviceConfig))
                              : 'NetworkError' === e.code
                              ? n(new nh.AuthError(X.NetworkError))
                              : n(e);
                          },
                        };
                        e.listDevices(60, null, r);
                      }),
                    ]
                  );
              }
            });
          });
        }),
        e
      );
    })(),
    yh = new vh(null);
  oe.Amplify.register(yh);
  var mh = ee.Auth;
  var wh = {};
  Object.defineProperty(wh, '__esModule', { value: !0 }),
    (wh.default = function (e) {
      return (0, Sh.default)({}, e);
    });
  var bh,
    Sh = (bh = a('aapJ3')) && bh.__esModule ? bh : { default: bh };
  wh = wh.default;
  var _h = {};
  Object.defineProperty(_h, '__esModule', { value: !0 }),
    (_h.default = function (e) {
      if (null === e || !0 === e || !1 === e) return NaN;
      var t = Number(e);
      return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
    }),
    (_h = _h.default);
  var Ah = {};
  Object.defineProperty(Ah, '__esModule', { value: !0 }),
    (Ah.default = function (e) {
      var t = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ),
      );
      return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
    }),
    (Ah = Ah.default);
  const Eh = async () => (await mh.currentSession()).getAccessToken().getJwtToken(),
    Ch = E.GlobalStore.Get(),
    Th = o($).create({ baseURL: void 0 });
  Th.interceptors.response.use(
    e => e,
    e => {
      var t;
      throw (Ch.DispatchGlobalAction(G.API, ((t = e.response.status), { type: J.SET_ERROR, payload: t })), e);
    },
  ),
    Th.interceptors.request.use(async e => {
      try {
        const t = await Eh();
        e.headers.Authorization = t;
      } catch {
        return e;
      }
      return e;
    });
  var Ih,
    Ph = Th,
    kh =
      /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Oh = [
      'source',
      'protocol',
      'authority',
      'userInfo',
      'user',
      'password',
      'host',
      'port',
      'relative',
      'path',
      'directory',
      'file',
      'query',
      'anchor',
    ];
  Ih = function (e) {
    var t = e,
      n = e.indexOf('['),
      r = e.indexOf(']');
    -1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ';') + e.substring(r, e.length));
    for (var o, i, s = kh.exec(e || ''), a = {}, u = 14; u--; ) a[Oh[u]] = s[u] || '';
    return (
      -1 != n &&
        -1 != r &&
        ((a.source = t),
        (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ':')),
        (a.authority = a.authority.replace('[', '').replace(']', '').replace(/;/g, ':')),
        (a.ipv6uri = !0)),
      (a.pathNames = (function (e, t) {
        var n = /\/{2,9}/g,
          r = t.replace(n, '/').split('/');
        ('/' != t.substr(0, 1) && 0 !== t.length) || r.splice(0, 1);
        '/' == t.substr(t.length - 1, 1) && r.splice(r.length - 1, 1);
        return r;
      })(0, a.path)),
      (a.queryKey =
        ((o = a.query),
        (i = {}),
        o.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, n) {
          t && (i[t] = n);
        }),
        i)),
      a
    );
  };
  var xh = {};
  try {
    xh = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
  } catch (e) {
    xh = !1;
  }
  var Rh = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : Function('return this')();
  function Nh(e) {
    const t = e.xdomain;
    try {
      if ('undefined' != typeof XMLHttpRequest && (!t || o(xh))) return new XMLHttpRequest();
    } catch (e) {}
    if (!t)
      try {
        return new Rh[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
      } catch (e) {}
  }
  function Uh(e, ...t) {
    return t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
  }
  const Lh = setTimeout,
    Mh = clearTimeout;
  function Dh(e, t) {
    t.useNativeTimers
      ? ((e.setTimeoutFn = Lh.bind(Rh)), (e.clearTimeoutFn = Mh.bind(Rh)))
      : ((e.setTimeoutFn = setTimeout.bind(Rh)), (e.clearTimeoutFn = clearTimeout.bind(Rh)));
  }
  var Fh;
  function jh(e) {
    if (e)
      return (function (e) {
        for (var t in jh.prototype) e[t] = jh.prototype[t];
        return e;
      })(e);
  }
  (Fh = jh),
    (jh.prototype.on = jh.prototype.addEventListener =
      function (e, t) {
        return (
          (this._callbacks = this._callbacks || {}),
          (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t),
          this
        );
      }),
    (jh.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }
      return (n.fn = t), this.on(e, n), this;
    }),
    (jh.prototype.off =
      jh.prototype.removeListener =
      jh.prototype.removeAllListeners =
      jh.prototype.removeEventListener =
        function (e, t) {
          if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
          var n,
            r = this._callbacks['$' + e];
          if (!r) return this;
          if (1 == arguments.length) return delete this._callbacks['$' + e], this;
          for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
              r.splice(o, 1);
              break;
            }
          return 0 === r.length && delete this._callbacks['$' + e], this;
        }),
    (jh.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      for (var t = new Array(arguments.length - 1), n = this._callbacks['$' + e], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      if (n) {
        r = 0;
        for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
      }
      return this;
    }),
    (jh.prototype.emitReserved = jh.prototype.emit),
    (jh.prototype.listeners = function (e) {
      return (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || [];
    }),
    (jh.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    });
  const Bh = Object.create(null);
  (Bh.open = '0'),
    (Bh.close = '1'),
    (Bh.ping = '2'),
    (Bh.pong = '3'),
    (Bh.message = '4'),
    (Bh.upgrade = '5'),
    (Bh.noop = '6');
  const Hh = Object.create(null);
  Object.keys(Bh).forEach(e => {
    Hh[Bh[e]] = e;
  });
  const Gh = { type: 'error', data: 'parser error' },
    qh =
      'function' == typeof Blob ||
      ('undefined' != typeof Blob && '[object BlobConstructor]' === Object.prototype.toString.call(Blob)),
    zh = 'function' == typeof ArrayBuffer,
    Kh = (e, t) => {
      const n = new FileReader();
      return (
        (n.onload = function () {
          const e = n.result.split(',')[1];
          t('b' + e);
        }),
        n.readAsDataURL(e)
      );
    };
  var Vh = ({ type: e, data: t }, n, r) =>
    qh && t instanceof Blob
      ? n
        ? r(t)
        : Kh(t, r)
      : zh &&
        (t instanceof ArrayBuffer ||
          (e =>
            'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer)(t))
      ? n
        ? r(t)
        : Kh(new Blob([t]), r)
      : r(Bh[e] + (t || ''));
  const Wh = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    Yh = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256);
  for (let e = 0; e < Wh.length; e++) Yh[Wh.charCodeAt(e)] = e;
  const $h = 'function' == typeof ArrayBuffer,
    Jh = (e, t) => {
      if ($h) {
        const n = (e => {
          let t,
            n,
            r,
            o,
            i,
            s = 0.75 * e.length,
            a = e.length,
            u = 0;
          '=' === e[e.length - 1] && (s--, '=' === e[e.length - 2] && s--);
          const c = new ArrayBuffer(s),
            l = new Uint8Array(c);
          for (t = 0; t < a; t += 4)
            (n = Yh[e.charCodeAt(t)]),
              (r = Yh[e.charCodeAt(t + 1)]),
              (o = Yh[e.charCodeAt(t + 2)]),
              (i = Yh[e.charCodeAt(t + 3)]),
              (l[u++] = (n << 2) | (r >> 4)),
              (l[u++] = ((15 & r) << 4) | (o >> 2)),
              (l[u++] = ((3 & o) << 6) | (63 & i));
          return c;
        })(e);
        return Zh(n, t);
      }
      return { base64: !0, data: e };
    },
    Zh = (e, t) => ('blob' === t && e instanceof ArrayBuffer ? new Blob([e]) : e);
  var Xh = (e, t) => {
    if ('string' != typeof e) return { type: 'message', data: Zh(e, t) };
    const n = e.charAt(0);
    if ('b' === n) return { type: 'message', data: Jh(e.substring(1), t) };
    return Hh[n] ? (e.length > 1 ? { type: Hh[n], data: e.substring(1) } : { type: Hh[n] }) : Gh;
  };
  const Qh = String.fromCharCode(30);
  class ed extends Fh {
    constructor(e) {
      super(),
        (this.writable = !1),
        Dh(this, e),
        (this.opts = e),
        (this.query = e.query),
        (this.readyState = ''),
        (this.socket = e.socket);
    }
    onError(e, t) {
      const n = new Error(e);
      return (n.type = 'TransportError'), (n.description = t), super.emit('error', n), this;
    }
    open() {
      return (
        ('closed' !== this.readyState && '' !== this.readyState) || ((this.readyState = 'opening'), this.doOpen()), this
      );
    }
    close() {
      return ('opening' !== this.readyState && 'open' !== this.readyState) || (this.doClose(), this.onClose()), this;
    }
    send(e) {
      'open' === this.readyState && this.write(e);
    }
    onOpen() {
      (this.readyState = 'open'), (this.writable = !0), super.emit('open');
    }
    onData(e) {
      const t = Xh(e, this.socket.binaryType);
      this.onPacket(t);
    }
    onPacket(e) {
      super.emit('packet', e);
    }
    onClose() {
      (this.readyState = 'closed'), super.emit('close');
    }
  }
  var td,
    nd,
    rd = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    od = {},
    id = 0,
    sd = 0;
  function ad(e) {
    var t = '';
    do {
      (t = rd[e % 64] + t), (e = Math.floor(e / 64));
    } while (e > 0);
    return t;
  }
  function ud() {
    var e = ad(+new Date());
    return e !== nd ? ((id = 0), (nd = e)) : e + '.' + ad(id++);
  }
  for (; sd < 64; sd++) od[rd[sd]] = sd;
  (ud.encode = ad),
    (ud.decode = function (e) {
      var t = 0;
      for (sd = 0; sd < e.length; sd++) t = 64 * t + od[e.charAt(sd)];
      return t;
    }),
    (td = ud);
  var cd,
    ld,
    fd = {};
  e(
    fd,
    'encode',
    () => cd,
    e => (cd = e),
  ),
    e(
      fd,
      'decode',
      () => ld,
      e => (ld = e),
    ),
    (cd = function (e) {
      var t = '';
      for (var n in e)
        e.hasOwnProperty(n) && (t.length && (t += '&'), (t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n])));
      return t;
    }),
    (ld = function (e) {
      for (var t = {}, n = e.split('&'), r = 0, o = n.length; r < o; r++) {
        var i = n[r].split('=');
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
      }
      return t;
    });
  class hd extends ed {
    constructor() {
      super(...arguments), (this.polling = !1);
    }
    get name() {
      return 'polling';
    }
    doOpen() {
      this.poll();
    }
    pause(e) {
      this.readyState = 'pausing';
      const t = () => {
        (this.readyState = 'paused'), e();
      };
      if (this.polling || !this.writable) {
        let e = 0;
        this.polling &&
          (e++,
          this.once('pollComplete', function () {
            --e || t();
          })),
          this.writable ||
            (e++,
            this.once('drain', function () {
              --e || t();
            }));
      } else t();
    }
    poll() {
      (this.polling = !0), this.doPoll(), this.emit('poll');
    }
    onData(e) {
      ((e, t) => {
        const n = e.split(Qh),
          r = [];
        for (let e = 0; e < n.length; e++) {
          const o = Xh(n[e], t);
          if ((r.push(o), 'error' === o.type)) break;
        }
        return r;
      })(e, this.socket.binaryType).forEach(e => {
        if (('opening' === this.readyState && 'open' === e.type && this.onOpen(), 'close' === e.type))
          return this.onClose(), !1;
        this.onPacket(e);
      }),
        'closed' !== this.readyState &&
          ((this.polling = !1), this.emit('pollComplete'), 'open' === this.readyState && this.poll());
    }
    doClose() {
      const e = () => {
        this.write([{ type: 'close' }]);
      };
      'open' === this.readyState ? e() : this.once('open', e);
    }
    write(e) {
      (this.writable = !1),
        ((e, t) => {
          const n = e.length,
            r = new Array(n);
          let o = 0;
          e.forEach((e, i) => {
            Vh(e, !1, e => {
              (r[i] = e), ++o === n && t(r.join(Qh));
            });
          });
        })(e, e => {
          this.doWrite(e, () => {
            (this.writable = !0), this.emit('drain');
          });
        });
    }
    uri() {
      let e = this.query || {};
      const t = this.opts.secure ? 'https' : 'http';
      let n = '';
      !1 !== this.opts.timestampRequests && (e[this.opts.timestampParam] = o(td)()),
        this.supportsBinary || e.sid || (e.b64 = 1),
        this.opts.port &&
          (('https' === t && 443 !== Number(this.opts.port)) || ('http' === t && 80 !== Number(this.opts.port))) &&
          (n = ':' + this.opts.port);
      const r = o(fd).encode(e);
      return (
        t +
        '://' +
        (-1 !== this.opts.hostname.indexOf(':') ? '[' + this.opts.hostname + ']' : this.opts.hostname) +
        n +
        this.opts.path +
        (r.length ? '?' + r : '')
      );
    }
  }
  function dd() {}
  const pd = null != new Nh({ xdomain: !1 }).responseType;
  class gd extends Fh {
    constructor(e, t) {
      super(),
        Dh(this, t),
        (this.opts = t),
        (this.method = t.method || 'GET'),
        (this.uri = e),
        (this.async = !1 !== t.async),
        (this.data = void 0 !== t.data ? t.data : null),
        this.create();
    }
    create() {
      const e = Uh(
        this.opts,
        'agent',
        'pfx',
        'key',
        'passphrase',
        'cert',
        'ca',
        'ciphers',
        'rejectUnauthorized',
        'autoUnref',
      );
      (e.xdomain = !!this.opts.xd), (e.xscheme = !!this.opts.xs);
      const t = (this.xhr = new Nh(e));
      try {
        t.open(this.method, this.uri, this.async);
        try {
          if (this.opts.extraHeaders) {
            t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
            for (let e in this.opts.extraHeaders)
              this.opts.extraHeaders.hasOwnProperty(e) && t.setRequestHeader(e, this.opts.extraHeaders[e]);
          }
        } catch (e) {}
        if ('POST' === this.method)
          try {
            t.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
          } catch (e) {}
        try {
          t.setRequestHeader('Accept', '*/*');
        } catch (e) {}
        'withCredentials' in t && (t.withCredentials = this.opts.withCredentials),
          this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout),
          (t.onreadystatechange = () => {
            4 === t.readyState &&
              (200 === t.status || 1223 === t.status
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError('number' == typeof t.status ? t.status : 0);
                  }, 0));
          }),
          t.send(this.data);
      } catch (e) {
        return void this.setTimeoutFn(() => {
          this.onError(e);
        }, 0);
      }
      'undefined' != typeof document && ((this.index = gd.requestsCount++), (gd.requests[this.index] = this));
    }
    onSuccess() {
      this.emit('success'), this.cleanup();
    }
    onData(e) {
      this.emit('data', e), this.onSuccess();
    }
    onError(e) {
      this.emit('error', e), this.cleanup(!0);
    }
    cleanup(e) {
      if (void 0 !== this.xhr && null !== this.xhr) {
        if (((this.xhr.onreadystatechange = dd), e))
          try {
            this.xhr.abort();
          } catch (e) {}
        'undefined' != typeof document && delete gd.requests[this.index], (this.xhr = null);
      }
    }
    onLoad() {
      const e = this.xhr.responseText;
      null !== e && this.onData(e);
    }
    abort() {
      this.cleanup();
    }
  }
  if (((gd.requestsCount = 0), (gd.requests = {}), 'undefined' != typeof document))
    if ('function' == typeof attachEvent) attachEvent('onunload', vd);
    else if ('function' == typeof addEventListener) {
      addEventListener('onpagehide' in Rh ? 'pagehide' : 'unload', vd, !1);
    }
  function vd() {
    for (let e in gd.requests) gd.requests.hasOwnProperty(e) && gd.requests[e].abort();
  }
  const yd =
      'function' == typeof Promise && 'function' == typeof Promise.resolve
        ? e => Promise.resolve().then(e)
        : (e, t) => t(e, 0),
    md = Rh.WebSocket || Rh.MozWebSocket;
  (_l = a('4q79f')).Buffer;
  const wd =
    'undefined' != typeof navigator &&
    'string' == typeof navigator.product &&
    'reactnative' === navigator.product.toLowerCase();
  class bd extends ed {
    constructor(e) {
      super(e), (this.supportsBinary = !e.forceBase64);
    }
    get name() {
      return 'websocket';
    }
    doOpen() {
      if (!this.check()) return;
      const e = this.uri(),
        t = this.opts.protocols,
        n = wd
          ? {}
          : Uh(
              this.opts,
              'agent',
              'perMessageDeflate',
              'pfx',
              'key',
              'passphrase',
              'cert',
              'ca',
              'ciphers',
              'rejectUnauthorized',
              'localAddress',
              'protocolVersion',
              'origin',
              'maxPayload',
              'family',
              'checkServerIdentity',
            );
      this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
      try {
        this.ws = wd ? new md(e, t, n) : t ? new md(e, t) : new md(e);
      } catch (e) {
        return this.emit('error', e);
      }
      (this.ws.binaryType = this.socket.binaryType || 'arraybuffer'), this.addEventListeners();
    }
    addEventListeners() {
      (this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }),
        (this.ws.onclose = this.onClose.bind(this)),
        (this.ws.onmessage = e => this.onData(e.data)),
        (this.ws.onerror = e => this.onError('websocket error', e));
    }
    write(e) {
      this.writable = !1;
      for (let t = 0; t < e.length; t++) {
        const n = e[t],
          r = t === e.length - 1;
        Vh(n, this.supportsBinary, e => {
          try {
            this.ws.send(e);
          } catch (e) {}
          r &&
            yd(() => {
              (this.writable = !0), this.emit('drain');
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      void 0 !== this.ws && (this.ws.close(), (this.ws = null));
    }
    uri() {
      let e = this.query || {};
      const t = this.opts.secure ? 'wss' : 'ws';
      let n = '';
      this.opts.port &&
        (('wss' === t && 443 !== Number(this.opts.port)) || ('ws' === t && 80 !== Number(this.opts.port))) &&
        (n = ':' + this.opts.port),
        this.opts.timestampRequests && (e[this.opts.timestampParam] = o(td)()),
        this.supportsBinary || (e.b64 = 1);
      const r = o(fd).encode(e);
      return (
        t +
        '://' +
        (-1 !== this.opts.hostname.indexOf(':') ? '[' + this.opts.hostname + ']' : this.opts.hostname) +
        n +
        this.opts.path +
        (r.length ? '?' + r : '')
      );
    }
    check() {
      return !(!md || ('__initialize' in md && this.name === bd.prototype.name));
    }
  }
  const Sd = {
    websocket: bd,
    polling: class extends hd {
      constructor(e) {
        if ((super(e), 'undefined' != typeof location)) {
          const t = 'https:' === location.protocol;
          let n = location.port;
          n || (n = t ? '443' : '80'),
            (this.xd = ('undefined' != typeof location && e.hostname !== location.hostname) || n !== e.port),
            (this.xs = e.secure !== t);
        }
        const t = e && e.forceBase64;
        this.supportsBinary = pd && !t;
      }
      request(e = {}) {
        return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new gd(this.uri(), e);
      }
      doWrite(e, t) {
        const n = this.request({ method: 'POST', data: e });
        n.on('success', t),
          n.on('error', e => {
            this.onError('xhr post error', e);
          });
      }
      doPoll() {
        const e = this.request();
        e.on('data', this.onData.bind(this)),
          e.on('error', e => {
            this.onError('xhr poll error', e);
          }),
          (this.pollXhr = e);
      }
    },
  };
  class _d extends Fh {
    constructor(e, t = {}) {
      super(),
        e && 'object' == typeof e && ((t = e), (e = null)),
        e
          ? ((e = o(Ih)(e)),
            (t.hostname = e.host),
            (t.secure = 'https' === e.protocol || 'wss' === e.protocol),
            (t.port = e.port),
            e.query && (t.query = e.query))
          : t.host && (t.hostname = o(Ih)(t.host).host),
        Dh(this, t),
        (this.secure = null != t.secure ? t.secure : 'undefined' != typeof location && 'https:' === location.protocol),
        t.hostname && !t.port && (t.port = this.secure ? '443' : '80'),
        (this.hostname = t.hostname || ('undefined' != typeof location ? location.hostname : 'localhost')),
        (this.port =
          t.port || ('undefined' != typeof location && location.port ? location.port : this.secure ? '443' : '80')),
        (this.transports = t.transports || ['polling', 'websocket']),
        (this.readyState = ''),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0),
        (this.opts = Object.assign(
          {
            path: '/engine.io',
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: 't',
            rememberUpgrade: !1,
            rejectUnauthorized: !0,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: !0,
          },
          t,
        )),
        (this.opts.path = this.opts.path.replace(/\/$/, '') + '/'),
        'string' == typeof this.opts.query && (this.opts.query = o(fd).decode(this.opts.query)),
        (this.id = null),
        (this.upgrades = null),
        (this.pingInterval = null),
        (this.pingTimeout = null),
        (this.pingTimeoutTimer = null),
        'function' == typeof addEventListener &&
          (this.opts.closeOnBeforeunload &&
            addEventListener(
              'beforeunload',
              () => {
                this.transport && (this.transport.removeAllListeners(), this.transport.close());
              },
              !1,
            ),
          'localhost' !== this.hostname &&
            ((this.offlineEventListener = () => {
              this.onClose('transport close');
            }),
            addEventListener('offline', this.offlineEventListener, !1))),
        this.open();
    }
    createTransport(e) {
      const t = (function (e) {
        const t = {};
        for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      })(this.opts.query);
      (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
      const n = Object.assign({}, this.opts.transportOptions[e], this.opts, {
        query: t,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      });
      return new Sd[e](n);
    }
    open() {
      let e;
      if (this.opts.rememberUpgrade && _d.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket'))
        e = 'websocket';
      else {
        if (0 === this.transports.length)
          return void this.setTimeoutFn(() => {
            this.emitReserved('error', 'No transports available');
          }, 0);
        e = this.transports[0];
      }
      this.readyState = 'opening';
      try {
        e = this.createTransport(e);
      } catch (e) {
        return this.transports.shift(), void this.open();
      }
      e.open(), this.setTransport(e);
    }
    setTransport(e) {
      this.transport && this.transport.removeAllListeners(),
        (this.transport = e),
        e
          .on('drain', this.onDrain.bind(this))
          .on('packet', this.onPacket.bind(this))
          .on('error', this.onError.bind(this))
          .on('close', () => {
            this.onClose('transport close');
          });
    }
    probe(e) {
      let t = this.createTransport(e),
        n = !1;
      _d.priorWebsocketSuccess = !1;
      const r = () => {
        n ||
          (t.send([{ type: 'ping', data: 'probe' }]),
          t.once('packet', e => {
            if (!n)
              if ('pong' === e.type && 'probe' === e.data) {
                if (((this.upgrading = !0), this.emitReserved('upgrading', t), !t)) return;
                (_d.priorWebsocketSuccess = 'websocket' === t.name),
                  this.transport.pause(() => {
                    n ||
                      ('closed' !== this.readyState &&
                        (c(),
                        this.setTransport(t),
                        t.send([{ type: 'upgrade' }]),
                        this.emitReserved('upgrade', t),
                        (t = null),
                        (this.upgrading = !1),
                        this.flush()));
                  });
              } else {
                const e = new Error('probe error');
                (e.transport = t.name), this.emitReserved('upgradeError', e);
              }
          }));
      };
      function o() {
        n || ((n = !0), c(), t.close(), (t = null));
      }
      const i = e => {
        const n = new Error('probe error: ' + e);
        (n.transport = t.name), o(), this.emitReserved('upgradeError', n);
      };
      function s() {
        i('transport closed');
      }
      function a() {
        i('socket closed');
      }
      function u(e) {
        t && e.name !== t.name && o();
      }
      const c = () => {
        t.removeListener('open', r),
          t.removeListener('error', i),
          t.removeListener('close', s),
          this.off('close', a),
          this.off('upgrading', u);
      };
      t.once('open', r),
        t.once('error', i),
        t.once('close', s),
        this.once('close', a),
        this.once('upgrading', u),
        t.open();
    }
    onOpen() {
      if (
        ((this.readyState = 'open'),
        (_d.priorWebsocketSuccess = 'websocket' === this.transport.name),
        this.emitReserved('open'),
        this.flush(),
        'open' === this.readyState && this.opts.upgrade && this.transport.pause)
      ) {
        let e = 0;
        const t = this.upgrades.length;
        for (; e < t; e++) this.probe(this.upgrades[e]);
      }
    }
    onPacket(e) {
      if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState)
        switch ((this.emitReserved('packet', e), this.emitReserved('heartbeat'), e.type)) {
          case 'open':
            this.onHandshake(JSON.parse(e.data));
            break;
          case 'ping':
            this.resetPingTimeout(), this.sendPacket('pong'), this.emitReserved('ping'), this.emitReserved('pong');
            break;
          case 'error':
            const t = new Error('server error');
            (t.code = e.data), this.onError(t);
            break;
          case 'message':
            this.emitReserved('data', e.data), this.emitReserved('message', e.data);
        }
    }
    onHandshake(e) {
      this.emitReserved('handshake', e),
        (this.id = e.sid),
        (this.transport.query.sid = e.sid),
        (this.upgrades = this.filterUpgrades(e.upgrades)),
        (this.pingInterval = e.pingInterval),
        (this.pingTimeout = e.pingTimeout),
        this.onOpen(),
        'closed' !== this.readyState && this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer),
        (this.pingTimeoutTimer = this.setTimeoutFn(() => {
          this.onClose('ping timeout');
        }, this.pingInterval + this.pingTimeout)),
        this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen),
        (this.prevBufferLen = 0),
        0 === this.writeBuffer.length ? this.emitReserved('drain') : this.flush();
    }
    flush() {
      'closed' !== this.readyState &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length &&
        (this.transport.send(this.writeBuffer),
        (this.prevBufferLen = this.writeBuffer.length),
        this.emitReserved('flush'));
    }
    write(e, t, n) {
      return this.sendPacket('message', e, t, n), this;
    }
    send(e, t, n) {
      return this.sendPacket('message', e, t, n), this;
    }
    sendPacket(e, t, n, r) {
      if (
        ('function' == typeof t && ((r = t), (t = void 0)),
        'function' == typeof n && ((r = n), (n = null)),
        'closing' === this.readyState || 'closed' === this.readyState)
      )
        return;
      (n = n || {}).compress = !1 !== n.compress;
      const o = { type: e, data: t, options: n };
      this.emitReserved('packetCreate', o), this.writeBuffer.push(o), r && this.once('flush', r), this.flush();
    }
    close() {
      const e = () => {
          this.onClose('forced close'), this.transport.close();
        },
        t = () => {
          this.off('upgrade', t), this.off('upgradeError', t), e();
        },
        n = () => {
          this.once('upgrade', t), this.once('upgradeError', t);
        };
      return (
        ('opening' !== this.readyState && 'open' !== this.readyState) ||
          ((this.readyState = 'closing'),
          this.writeBuffer.length
            ? this.once('drain', () => {
                this.upgrading ? n() : e();
              })
            : this.upgrading
            ? n()
            : e()),
        this
      );
    }
    onError(e) {
      (_d.priorWebsocketSuccess = !1), this.emitReserved('error', e), this.onClose('transport error', e);
    }
    onClose(e, t) {
      ('opening' !== this.readyState && 'open' !== this.readyState && 'closing' !== this.readyState) ||
        (this.clearTimeoutFn(this.pingTimeoutTimer),
        this.transport.removeAllListeners('close'),
        this.transport.close(),
        this.transport.removeAllListeners(),
        'function' == typeof removeEventListener && removeEventListener('offline', this.offlineEventListener, !1),
        (this.readyState = 'closed'),
        (this.id = null),
        this.emitReserved('close', e, t),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0));
    }
    filterUpgrades(e) {
      const t = [];
      let n = 0;
      const r = e.length;
      for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
  }
  _d.protocol = 4;
  _d.protocol;
  var Ad = {};
  e(Ad, 'protocol', () => Ud), e(Ad, 'PacketType', () => Ld), e(Ad, 'Encoder', () => Md), e(Ad, 'Decoder', () => Dd);
  const Ed = 'function' == typeof ArrayBuffer,
    Cd = Object.prototype.toString,
    Td = 'function' == typeof Blob || ('undefined' != typeof Blob && '[object BlobConstructor]' === Cd.call(Blob)),
    Id = 'function' == typeof File || ('undefined' != typeof File && '[object FileConstructor]' === Cd.call(File));
  function Pd(e) {
    return (
      (Ed &&
        (e instanceof ArrayBuffer ||
          (e => ('function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer))(
            e,
          ))) ||
      (Td && e instanceof Blob) ||
      (Id && e instanceof File)
    );
  }
  function kd(e, t) {
    if (!e || 'object' != typeof e) return !1;
    if (Array.isArray(e)) {
      for (let t = 0, n = e.length; t < n; t++) if (kd(e[t])) return !0;
      return !1;
    }
    if (Pd(e)) return !0;
    if (e.toJSON && 'function' == typeof e.toJSON && 1 === arguments.length) return kd(e.toJSON(), !0);
    for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t) && kd(e[t])) return !0;
    return !1;
  }
  function Od(e) {
    const t = [],
      n = e.data,
      r = e;
    return (r.data = xd(n, t)), (r.attachments = t.length), { packet: r, buffers: t };
  }
  function xd(e, t) {
    if (!e) return e;
    if (Pd(e)) {
      const n = { _placeholder: !0, num: t.length };
      return t.push(e), n;
    }
    if (Array.isArray(e)) {
      const n = new Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = xd(e[r], t);
      return n;
    }
    if ('object' == typeof e && !(e instanceof Date)) {
      const n = {};
      for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = xd(e[r], t));
      return n;
    }
    return e;
  }
  function Rd(e, t) {
    return (e.data = Nd(e.data, t)), (e.attachments = void 0), e;
  }
  function Nd(e, t) {
    if (!e) return e;
    if (e && e._placeholder) return t[e.num];
    if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = Nd(e[n], t);
    else if ('object' == typeof e)
      for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Nd(e[n], t));
    return e;
  }
  const Ud = 5;
  var Ld;
  !(function (e) {
    (e[(e.CONNECT = 0)] = 'CONNECT'),
      (e[(e.DISCONNECT = 1)] = 'DISCONNECT'),
      (e[(e.EVENT = 2)] = 'EVENT'),
      (e[(e.ACK = 3)] = 'ACK'),
      (e[(e.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
      (e[(e.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
      (e[(e.BINARY_ACK = 6)] = 'BINARY_ACK');
  })(Ld || (Ld = {}));
  class Md {
    encode(e) {
      return (e.type !== Ld.EVENT && e.type !== Ld.ACK) || !kd(e)
        ? [this.encodeAsString(e)]
        : ((e.type = e.type === Ld.EVENT ? Ld.BINARY_EVENT : Ld.BINARY_ACK), this.encodeAsBinary(e));
    }
    encodeAsString(e) {
      let t = '' + e.type;
      return (
        (e.type !== Ld.BINARY_EVENT && e.type !== Ld.BINARY_ACK) || (t += e.attachments + '-'),
        e.nsp && '/' !== e.nsp && (t += e.nsp + ','),
        null != e.id && (t += e.id),
        null != e.data && (t += JSON.stringify(e.data)),
        t
      );
    }
    encodeAsBinary(e) {
      const t = Od(e),
        n = this.encodeAsString(t.packet),
        r = t.buffers;
      return r.unshift(n), r;
    }
  }
  class Dd extends Fh {
    constructor() {
      super();
    }
    add(e) {
      let t;
      if ('string' == typeof e)
        (t = this.decodeString(e)),
          t.type === Ld.BINARY_EVENT || t.type === Ld.BINARY_ACK
            ? ((this.reconstructor = new Fd(t)), 0 === t.attachments && super.emitReserved('decoded', t))
            : super.emitReserved('decoded', t);
      else {
        if (!Pd(e) && !e.base64) throw new Error('Unknown type: ' + e);
        if (!this.reconstructor) throw new Error('got binary data when not reconstructing a packet');
        (t = this.reconstructor.takeBinaryData(e)),
          t && ((this.reconstructor = null), super.emitReserved('decoded', t));
      }
    }
    decodeString(e) {
      let t = 0;
      const n = { type: Number(e.charAt(0)) };
      if (void 0 === Ld[n.type]) throw new Error('unknown packet type ' + n.type);
      if (n.type === Ld.BINARY_EVENT || n.type === Ld.BINARY_ACK) {
        const r = t + 1;
        for (; '-' !== e.charAt(++t) && t != e.length; );
        const o = e.substring(r, t);
        if (o != Number(o) || '-' !== e.charAt(t)) throw new Error('Illegal attachments');
        n.attachments = Number(o);
      }
      if ('/' === e.charAt(t + 1)) {
        const r = t + 1;
        for (; ++t; ) {
          if (',' === e.charAt(t)) break;
          if (t === e.length) break;
        }
        n.nsp = e.substring(r, t);
      } else n.nsp = '/';
      const r = e.charAt(t + 1);
      if ('' !== r && Number(r) == r) {
        const r = t + 1;
        for (; ++t; ) {
          const n = e.charAt(t);
          if (null == n || Number(n) != n) {
            --t;
            break;
          }
          if (t === e.length) break;
        }
        n.id = Number(e.substring(r, t + 1));
      }
      if (e.charAt(++t)) {
        const r = (function (e) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return !1;
          }
        })(e.substr(t));
        if (!Dd.isPayloadValid(n.type, r)) throw new Error('invalid payload');
        n.data = r;
      }
      return n;
    }
    static isPayloadValid(e, t) {
      switch (e) {
        case Ld.CONNECT:
          return 'object' == typeof t;
        case Ld.DISCONNECT:
          return void 0 === t;
        case Ld.CONNECT_ERROR:
          return 'string' == typeof t || 'object' == typeof t;
        case Ld.EVENT:
        case Ld.BINARY_EVENT:
          return Array.isArray(t) && t.length > 0;
        case Ld.ACK:
        case Ld.BINARY_ACK:
          return Array.isArray(t);
      }
    }
    destroy() {
      this.reconstructor && this.reconstructor.finishedReconstruction();
    }
  }
  class Fd {
    constructor(e) {
      (this.packet = e), (this.buffers = []), (this.reconPack = e);
    }
    takeBinaryData(e) {
      if ((this.buffers.push(e), this.buffers.length === this.reconPack.attachments)) {
        const e = Rd(this.reconPack, this.buffers);
        return this.finishedReconstruction(), e;
      }
      return null;
    }
    finishedReconstruction() {
      (this.reconPack = null), (this.buffers = []);
    }
  }
  function jd(e, t, n) {
    return (
      e.on(t, n),
      function () {
        e.off(t, n);
      }
    );
  }
  const Bd = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  });
  class Hd extends Fh {
    constructor(e, t, n) {
      super(),
        (this.connected = !1),
        (this.disconnected = !0),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = e),
        (this.nsp = t),
        n && n.auth && (this.auth = n.auth),
        this.io._autoConnect && this.open();
    }
    subEvents() {
      if (this.subs) return;
      const e = this.io;
      this.subs = [
        jd(e, 'open', this.onopen.bind(this)),
        jd(e, 'packet', this.onpacket.bind(this)),
        jd(e, 'error', this.onerror.bind(this)),
        jd(e, 'close', this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return (
        this.connected ||
          (this.subEvents(), this.io._reconnecting || this.io.open(), 'open' === this.io._readyState && this.onopen()),
        this
      );
    }
    open() {
      return this.connect();
    }
    send(...e) {
      return e.unshift('message'), this.emit.apply(this, e), this;
    }
    emit(e, ...t) {
      if (Bd.hasOwnProperty(e)) throw new Error('"' + e + '" is a reserved event name');
      t.unshift(e);
      const n = { type: Ld.EVENT, data: t, options: {} };
      (n.options.compress = !1 !== this.flags.compress),
        'function' == typeof t[t.length - 1] && ((this.acks[this.ids] = t.pop()), (n.id = this.ids++));
      const r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      return (
        (this.flags.volatile && (!r || !this.connected)) || (this.connected ? this.packet(n) : this.sendBuffer.push(n)),
        (this.flags = {}),
        this
      );
    }
    packet(e) {
      (e.nsp = this.nsp), this.io._packet(e);
    }
    onopen() {
      'function' == typeof this.auth
        ? this.auth(e => {
            this.packet({ type: Ld.CONNECT, data: e });
          })
        : this.packet({ type: Ld.CONNECT, data: this.auth });
    }
    onerror(e) {
      this.connected || this.emitReserved('connect_error', e);
    }
    onclose(e) {
      (this.connected = !1), (this.disconnected = !0), delete this.id, this.emitReserved('disconnect', e);
    }
    onpacket(e) {
      if (e.nsp === this.nsp)
        switch (e.type) {
          case Ld.CONNECT:
            if (e.data && e.data.sid) {
              const t = e.data.sid;
              this.onconnect(t);
            } else
              this.emitReserved(
                'connect_error',
                new Error(
                  'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)',
                ),
              );
            break;
          case Ld.EVENT:
          case Ld.BINARY_EVENT:
            this.onevent(e);
            break;
          case Ld.ACK:
          case Ld.BINARY_ACK:
            this.onack(e);
            break;
          case Ld.DISCONNECT:
            this.ondisconnect();
            break;
          case Ld.CONNECT_ERROR:
            const t = new Error(e.data.message);
            (t.data = e.data.data), this.emitReserved('connect_error', t);
        }
    }
    onevent(e) {
      const t = e.data || [];
      null != e.id && t.push(this.ack(e.id)),
        this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
    }
    emitEvent(e) {
      if (this._anyListeners && this._anyListeners.length) {
        const t = this._anyListeners.slice();
        for (const n of t) n.apply(this, e);
      }
      super.emit.apply(this, e);
    }
    ack(e) {
      const t = this;
      let n = !1;
      return function (...r) {
        n || ((n = !0), t.packet({ type: Ld.ACK, id: e, data: r }));
      };
    }
    onack(e) {
      const t = this.acks[e.id];
      'function' == typeof t && (t.apply(this, e.data), delete this.acks[e.id]);
    }
    onconnect(e) {
      (this.id = e), (this.connected = !0), (this.disconnected = !1), this.emitBuffered(), this.emitReserved('connect');
    }
    emitBuffered() {
      this.receiveBuffer.forEach(e => this.emitEvent(e)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach(e => this.packet(e)),
        (this.sendBuffer = []);
    }
    ondisconnect() {
      this.destroy(), this.onclose('io server disconnect');
    }
    destroy() {
      this.subs && (this.subs.forEach(e => e()), (this.subs = void 0)), this.io._destroy(this);
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: Ld.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose('io client disconnect'),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(e) {
      return (this.flags.compress = e), this;
    }
    get volatile() {
      return (this.flags.volatile = !0), this;
    }
    onAny(e) {
      return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(e), this;
    }
    prependAny(e) {
      return (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(e), this;
    }
    offAny(e) {
      if (!this._anyListeners) return this;
      if (e) {
        const t = this._anyListeners;
        for (let n = 0; n < t.length; n++) if (e === t[n]) return t.splice(n, 1), this;
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
  }
  var Gd;
  function qd(e) {
    (e = e || {}),
      (this.ms = e.min || 100),
      (this.max = e.max || 1e4),
      (this.factor = e.factor || 2),
      (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
      (this.attempts = 0);
  }
  (Gd = qd),
    (qd.prototype.duration = function () {
      var e = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var t = Math.random(),
          n = Math.floor(t * this.jitter * e);
        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
      }
      return 0 | Math.min(e, this.max);
    }),
    (qd.prototype.reset = function () {
      this.attempts = 0;
    }),
    (qd.prototype.setMin = function (e) {
      this.ms = e;
    }),
    (qd.prototype.setMax = function (e) {
      this.max = e;
    }),
    (qd.prototype.setJitter = function (e) {
      this.jitter = e;
    });
  class zd extends Fh {
    constructor(e, t) {
      var n;
      super(),
        (this.nsps = {}),
        (this.subs = []),
        e && 'object' == typeof e && ((t = e), (e = void 0)),
        ((t = t || {}).path = t.path || '/socket.io'),
        (this.opts = t),
        Dh(this, t),
        this.reconnection(!1 !== t.reconnection),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(null !== (n = t.randomizationFactor) && void 0 !== n ? n : 0.5),
        (this.backoff = new (o(Gd))({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(null == t.timeout ? 2e4 : t.timeout),
        (this._readyState = 'closed'),
        (this.uri = e);
      const r = t.parser || Ad;
      (this.encoder = new r.Encoder()),
        (this.decoder = new r.Decoder()),
        (this._autoConnect = !1 !== t.autoConnect),
        this._autoConnect && this.open();
    }
    reconnection(e) {
      return arguments.length ? ((this._reconnection = !!e), this) : this._reconnection;
    }
    reconnectionAttempts(e) {
      return void 0 === e ? this._reconnectionAttempts : ((this._reconnectionAttempts = e), this);
    }
    reconnectionDelay(e) {
      var t;
      return void 0 === e
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = e), null === (t = this.backoff) || void 0 === t || t.setMin(e), this);
    }
    randomizationFactor(e) {
      var t;
      return void 0 === e
        ? this._randomizationFactor
        : ((this._randomizationFactor = e), null === (t = this.backoff) || void 0 === t || t.setJitter(e), this);
    }
    reconnectionDelayMax(e) {
      var t;
      return void 0 === e
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = e), null === (t = this.backoff) || void 0 === t || t.setMax(e), this);
    }
    timeout(e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }
    open(e) {
      if (~this._readyState.indexOf('open')) return this;
      this.engine = new _d(this.uri, this.opts);
      const t = this.engine,
        n = this;
      (this._readyState = 'opening'), (this.skipReconnect = !1);
      const r = jd(t, 'open', function () {
          n.onopen(), e && e();
        }),
        o = jd(t, 'error', t => {
          n.cleanup(), (n._readyState = 'closed'), this.emitReserved('error', t), e ? e(t) : n.maybeReconnectOnOpen();
        });
      if (!1 !== this._timeout) {
        const e = this._timeout;
        0 === e && r();
        const n = this.setTimeoutFn(() => {
          r(), t.close(), t.emit('error', new Error('timeout'));
        }, e);
        this.opts.autoUnref && n.unref(),
          this.subs.push(function () {
            clearTimeout(n);
          });
      }
      return this.subs.push(r), this.subs.push(o), this;
    }
    connect(e) {
      return this.open(e);
    }
    onopen() {
      this.cleanup(), (this._readyState = 'open'), this.emitReserved('open');
      const e = this.engine;
      this.subs.push(
        jd(e, 'ping', this.onping.bind(this)),
        jd(e, 'data', this.ondata.bind(this)),
        jd(e, 'error', this.onerror.bind(this)),
        jd(e, 'close', this.onclose.bind(this)),
        jd(this.decoder, 'decoded', this.ondecoded.bind(this)),
      );
    }
    onping() {
      this.emitReserved('ping');
    }
    ondata(e) {
      this.decoder.add(e);
    }
    ondecoded(e) {
      this.emitReserved('packet', e);
    }
    onerror(e) {
      this.emitReserved('error', e);
    }
    socket(e, t) {
      let n = this.nsps[e];
      return n || ((n = new Hd(this, e, t)), (this.nsps[e] = n)), n;
    }
    _destroy(e) {
      const t = Object.keys(this.nsps);
      for (const e of t) {
        if (this.nsps[e].active) return;
      }
      this._close();
    }
    _packet(e) {
      const t = this.encoder.encode(e);
      for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
    }
    cleanup() {
      this.subs.forEach(e => e()), (this.subs.length = 0), this.decoder.destroy();
    }
    _close() {
      (this.skipReconnect = !0),
        (this._reconnecting = !1),
        'opening' === this._readyState && this.cleanup(),
        this.backoff.reset(),
        (this._readyState = 'closed'),
        this.engine && this.engine.close();
    }
    disconnect() {
      return this._close();
    }
    onclose(e) {
      this.cleanup(),
        this.backoff.reset(),
        (this._readyState = 'closed'),
        this.emitReserved('close', e),
        this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(), this.emitReserved('reconnect_failed'), (this._reconnecting = !1);
      else {
        const t = this.backoff.duration();
        this._reconnecting = !0;
        const n = this.setTimeoutFn(() => {
          e.skipReconnect ||
            (this.emitReserved('reconnect_attempt', e.backoff.attempts),
            e.skipReconnect ||
              e.open(t => {
                t ? ((e._reconnecting = !1), e.reconnect(), this.emitReserved('reconnect_error', t)) : e.onreconnect();
              }));
        }, t);
        this.opts.autoUnref && n.unref(),
          this.subs.push(function () {
            clearTimeout(n);
          });
      }
    }
    onreconnect() {
      const e = this.backoff.attempts;
      (this._reconnecting = !1), this.backoff.reset(), this.emitReserved('reconnect', e);
    }
  }
  const Kd = {};
  function Vd(e, t) {
    'object' == typeof e && ((t = e), (e = void 0));
    const n = (function (e, t = '', n) {
        let r = e;
        (n = n || ('undefined' != typeof location && location)),
          null == e && (e = n.protocol + '//' + n.host),
          'string' == typeof e &&
            ('/' === e.charAt(0) && (e = '/' === e.charAt(1) ? n.protocol + e : n.host + e),
            /^(https?|wss?):\/\//.test(e) || (e = void 0 !== n ? n.protocol + '//' + e : 'https://' + e),
            (r = o(Ih)(e))),
          r.port ||
            (/^(http|ws)$/.test(r.protocol) ? (r.port = '80') : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')),
          (r.path = r.path || '/');
        const i = -1 !== r.host.indexOf(':') ? '[' + r.host + ']' : r.host;
        return (
          (r.id = r.protocol + '://' + i + ':' + r.port + t),
          (r.href = r.protocol + '://' + i + (n && n.port === r.port ? '' : ':' + r.port)),
          r
        );
      })(e, (t = t || {}).path || '/socket.io'),
      r = n.source,
      i = n.id,
      s = n.path,
      a = Kd[i] && s in Kd[i].nsps;
    let u;
    return (
      t.forceNew || t['force new connection'] || !1 === t.multiplex || a
        ? (u = new zd(r, t))
        : (Kd[i] || (Kd[i] = new zd(r, t)), (u = Kd[i])),
      n.query && !t.query && (t.query = n.queryKey),
      u.socket(n.path, t)
    );
  }
  Object.assign(Vd, { Manager: zd, Socket: Hd, io: Vd, connect: Vd });
  var Wd = Vd('/chat');
  let Yd, $d, Jd;
  !(function (e) {
    (e.SUCCESS = 'success'), (e.LOADING = 'loading');
  })(Yd || (Yd = {})),
    (function (e) {
      (e.NEW_CONNECT = 'new_connect'),
        (e.HISTORY = 'history'),
        (e.MESSAGE = 'message'),
        (e.PING = 'ping'),
        (e.READ_MSG = 'read_msg');
    })($d || ($d = {})),
    (function (e) {
      e.UPLOAD = '/api/chat/upload';
    })(Jd || (Jd = {}));
  const Zd = e => ({ type: W.CHAT_SET_CONNECTION_MESSAGE, payload: e }),
    Xd = e => ({ type: W.CHAT_SET_HISTORY_DIALOG, payload: e }),
    Qd = e => ({ type: W.CHAT_UNREAD_MESSAGES_COUNT, payload: e }),
    ep = e => ({ type: W.CHAT_SEND_FILE_STATUS, payload: e }),
    tp = e => async (t, n) => {
      t(ep(Yd.LOADING));
      try {
        const n = await Eh();
        await Ph.post(Jd.UPLOAD, e.file, { headers: { Authorization: n } }),
          Wd.emit($d.NEW_CONNECT, { token: n }),
          Wd.on($d.NEW_CONNECT, ({ message: e }) => {
            t(Zd(e));
          }),
          Wd.emit($d.HISTORY, { token: n }),
          Wd.on($d.HISTORY, ({ data: e }) => {
            t(Xd(e)), t(ep(Yd.SUCCESS));
          });
      } catch (e) {
        console.error(e.message), t(((r = 'Error. Connection lost'), { type: W.CHAT_SET_ERROR, payload: r }));
      }
      var r;
    },
    np = e => async (t, n) => {
      t((e => ({ type: W.CHAT_SET_ACTUAL_APP_PATH, payload: e }))(e));
    };
  var rp =
    ({ dispatch: e, getState: t }) =>
    n =>
    r => {
      switch (r.type) {
        case V.API_PROFILE_FETCH_DATA:
          return (async (e, t) => ({}))();
        case V.API_PROFILE_PUT_DATA:
          return (r.payload, async (e, t) => ({}))(e, t);
        case Y.API_LOGIN_CHECK_AUTH:
          return (async (e, t) => ({}))();
        case Y.API_LOGIN_SIGN_IN:
          return (r.payload, async (e, t) => ({}))(e, t);
        case Y.API_LOGIN_SIGN_OUT:
          return (async (e, t) => ({}))();
        case Y.API_LOGIN_FORGOT_PASSWORD:
        case Y.API_LOGIN_RECREATE_PASSWORD:
          return (r.payload, async (e, t) => ({}))(e, t);
        case W.API_CHAT_CONNECTION:
          return (async (e, t) => {
            const n = await Eh();
            Wd.emit($d.NEW_CONNECT, { token: n }),
              Wd.on($d.NEW_CONNECT, t => {
                e(Zd(t));
              });
          })(e);
        case W.API_CHAT_GET_HISTORY_DIALOG:
          return (async (e, t) => {
            const n = await Eh();
            Wd.emit($d.HISTORY, { token: n }),
              Wd.on($d.HISTORY, t => {
                e(Xd(t.data)), e(Qd(t.num_unread_msg));
              });
          })(e);
        case W.API_CHAT_NEW_RESPONSE_MESSAGE:
          return (async (e, t) => {
            try {
              const n = await Eh();
              Wd.on($d.MESSAGE, () => {
                const {
                  Chat: { path: r },
                } = t();
                (r.path === q.INBOX || r.isOpenedWidget) && Wd.emit($d.READ_MSG, { token: n }),
                  Wd.emit($d.HISTORY, { token: n }),
                  Wd.on($d.HISTORY, t => {
                    e(Xd(t.data)), e(Qd(t.num_unread_msg));
                  });
              });
            } catch (e) {
              console.log(e.message);
            }
          })(e, t);
        case W.API_CHAT_NEW_REQUEST_MESSAGE:
          return ((o = r.payload),
          async (e, t) => {
            const n = await Eh();
            Wd.emit($d.MESSAGE, { token: n, text: o.text }),
              Wd.emit($d.HISTORY, { token: n }),
              Wd.on($d.HISTORY, ({ data: t }) => {
                e(Xd(t));
              });
          })(e, t);
        case W.API_CHAT_SEND_FILE:
          return tp(r.payload)(e, t);
        case W.API_CHAT_CLIENT_ACTIVITY:
          return (async (e, t) => {
            const n = await Eh();
            Wd.emit($d.PING, { token: n });
          })();
        case W.API_CHAT_SET_READ_MESSAGES:
          return (async (e, t) => {
            const n = await Eh();
            Wd.emit($d.READ_MSG, { token: n }),
              Wd.emit($d.HISTORY, { token: n }),
              Wd.on($d.HISTORY, t => {
                e(Qd(t.num_unread_msg));
              });
          })(e);
        case W.API_CHAT_ACTUAL_APP_PATH:
          return np(r.payload)(e, t);
        default:
          return n(r);
      }
      var o;
    };
  function op(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error(
      '[Immer] minified error nr: ' +
        e +
        (n.length
          ? ' ' +
            n
              .map(function (e) {
                return "'" + e + "'";
              })
              .join(',')
          : '') +
        '. Find the full error at: https://bit.ly/3cXEKWf',
    );
  }
  function ip(e) {
    return !!e && !!e[Kp];
  }
  function sp(e) {
    return (
      !!e &&
      ((function (e) {
        if (!e || 'object' != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
        return n === Object || ('function' == typeof n && Function.toString.call(n) === Vp);
      })(e) ||
        Array.isArray(e) ||
        !!e[zp] ||
        !!e.constructor[zp] ||
        dp(e) ||
        pp(e))
    );
  }
  function ap(e, t, n) {
    void 0 === n && (n = !1),
      0 === up(e)
        ? (n ? Object.keys : Wp)(e).forEach(function (r) {
            (n && 'symbol' == typeof r) || t(r, e[r], e);
          })
        : e.forEach(function (n, r) {
            return t(r, n, e);
          });
  }
  function up(e) {
    var t = e[Kp];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : dp(e) ? 2 : pp(e) ? 3 : 0;
  }
  function cp(e, t) {
    return 2 === up(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function lp(e, t) {
    return 2 === up(e) ? e.get(t) : e[t];
  }
  function fp(e, t, n) {
    var r = up(e);
    2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
  }
  function hp(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  }
  function dp(e) {
    return Bp && e instanceof Map;
  }
  function pp(e) {
    return Hp && e instanceof Set;
  }
  function gp(e) {
    return e.o || e.t;
  }
  function vp(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Yp(e);
    delete t[Kp];
    for (var n = Wp(t), r = 0; r < n.length; r++) {
      var o = n[r],
        i = t[o];
      !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
        (i.get || i.set) && (t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
  }
  function yp(e, t) {
    return (
      void 0 === t && (t = !1),
      wp(e) ||
        ip(e) ||
        !sp(e) ||
        (up(e) > 1 && (e.set = e.add = e.clear = e.delete = mp),
        Object.freeze(e),
        t &&
          ap(
            e,
            function (e, t) {
              return yp(t, !0);
            },
            !0,
          )),
      e
    );
  }
  function mp() {
    op(2);
  }
  function wp(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
  }
  function bp(e) {
    var t = $p[e];
    return t || op(18, e), t;
  }
  function Sp() {
    return Fp;
  }
  function _p(e, t) {
    t && (bp('Patches'), (e.u = []), (e.s = []), (e.v = t));
  }
  function Ap(e) {
    Ep(e), e.p.forEach(Tp), (e.p = null);
  }
  function Ep(e) {
    e === Fp && (Fp = e.l);
  }
  function Cp(e) {
    return (Fp = { p: [], l: Fp, h: e, m: !0, _: 0 });
  }
  function Tp(e) {
    var t = e[Kp];
    0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
  }
  function Ip(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
      r = void 0 !== e && e !== n;
    return (
      t.h.g || bp('ES5').S(t, e, r),
      r
        ? (n[Kp].P && (Ap(t), op(4)),
          sp(e) && ((e = Pp(t, e)), t.l || Op(t, e)),
          t.u && bp('Patches').M(n[Kp], e, t.u, t.s))
        : (e = Pp(t, n, [])),
      Ap(t),
      t.u && t.v(t.u, t.s),
      e !== qp ? e : void 0
    );
  }
  function Pp(e, t, n) {
    if (wp(t)) return t;
    var r = t[Kp];
    if (!r)
      return (
        ap(
          t,
          function (o, i) {
            return kp(e, r, t, o, i, n);
          },
          !0,
        ),
        t
      );
    if (r.A !== e) return t;
    if (!r.P) return Op(e, r.t, !0), r.t;
    if (!r.I) {
      (r.I = !0), r.A._--;
      var o = 4 === r.i || 5 === r.i ? (r.o = vp(r.k)) : r.o;
      ap(3 === r.i ? new Set(o) : o, function (t, i) {
        return kp(e, r, o, t, i, n);
      }),
        Op(e, o, !1),
        n && e.u && bp('Patches').R(r, n, e.u, e.s);
    }
    return r.o;
  }
  function kp(e, t, n, r, o, i) {
    if (ip(o)) {
      var s = Pp(e, o, i && t && 3 !== t.i && !cp(t.D, r) ? i.concat(r) : void 0);
      if ((fp(n, r, s), !ip(s))) return;
      e.m = !1;
    }
    if (sp(o) && !wp(o)) {
      if (!e.h.F && e._ < 1) return;
      Pp(e, o), (t && t.A.l) || Op(e, o);
    }
  }
  function Op(e, t, n) {
    void 0 === n && (n = !1), e.h.F && e.m && yp(t, n);
  }
  function xp(e, t) {
    var n = e[Kp];
    return (n ? gp(n) : e)[t];
  }
  function Rp(e, t) {
    if (t in e)
      for (var n = Object.getPrototypeOf(e); n; ) {
        var r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = Object.getPrototypeOf(n);
      }
  }
  function Np(e) {
    e.P || ((e.P = !0), e.l && Np(e.l));
  }
  function Up(e) {
    e.o || (e.o = vp(e.t));
  }
  function Lp(e, t, n) {
    var r = dp(t)
      ? bp('MapSet').N(t, n)
      : pp(t)
      ? bp('MapSet').T(t, n)
      : e.g
      ? (function (e, t) {
          var n = Array.isArray(e),
            r = { i: n ? 1 : 0, A: t ? t.A : Sp(), P: !1, I: !1, D: {}, l: t, t: e, k: null, o: null, j: null, C: !1 },
            o = r,
            i = Jp;
          n && ((o = [r]), (i = Zp));
          var s = Proxy.revocable(o, i),
            a = s.revoke,
            u = s.proxy;
          return (r.k = u), (r.j = a), u;
        })(t, n)
      : bp('ES5').J(t, n);
    return (n ? n.A : Sp()).p.push(r), r;
  }
  function Mp(e, t) {
    switch (t) {
      case 2:
        return new Map(e);
      case 3:
        return Array.from(e);
    }
    return vp(e);
  }
  var Dp,
    Fp,
    jp = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    Bp = 'undefined' != typeof Map,
    Hp = 'undefined' != typeof Set,
    Gp = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    qp = jp ? Symbol.for('immer-nothing') : (((Dp = {})['immer-nothing'] = !0), Dp),
    zp = jp ? Symbol.for('immer-draftable') : '__$immer_draftable',
    Kp = jp ? Symbol.for('immer-state') : '__$immer_state',
    Vp = ('undefined' != typeof Symbol && Symbol.iterator, '' + Object.prototype.constructor),
    Wp =
      'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
          }
        : Object.getOwnPropertyNames,
    Yp =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        var t = {};
        return (
          Wp(e).forEach(function (n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n);
          }),
          t
        );
      },
    $p = {},
    Jp = {
      get: function (e, t) {
        if (t === Kp) return e;
        var n = gp(e);
        if (!cp(n, t))
          return (function (e, t, n) {
            var r,
              o = Rp(t, n);
            return o ? ('value' in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k)) : void 0;
          })(e, n, t);
        var r = n[t];
        return e.I || !sp(r) ? r : r === xp(e.t, t) ? (Up(e), (e.o[t] = Lp(e.A.h, r, e))) : r;
      },
      has: function (e, t) {
        return t in gp(e);
      },
      ownKeys: function (e) {
        return Reflect.ownKeys(gp(e));
      },
      set: function (e, t, n) {
        var r = Rp(gp(e), t);
        if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
        if (!e.P) {
          var o = xp(gp(e), t),
            i = null == o ? void 0 : o[Kp];
          if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
          if (hp(n, o) && (void 0 !== n || cp(e.t, t))) return !0;
          Up(e), Np(e);
        }
        return (
          (e.o[t] === n && 'number' != typeof n && (void 0 !== n || t in e.o)) || ((e.o[t] = n), (e.D[t] = !0), !0)
        );
      },
      deleteProperty: function (e, t) {
        return (
          void 0 !== xp(e.t, t) || t in e.t ? ((e.D[t] = !1), Up(e), Np(e)) : delete e.D[t], e.o && delete e.o[t], !0
        );
      },
      getOwnPropertyDescriptor: function (e, t) {
        var n = gp(e),
          r = Reflect.getOwnPropertyDescriptor(n, t);
        return r
          ? { writable: !0, configurable: 1 !== e.i || 'length' !== t, enumerable: r.enumerable, value: n[t] }
          : r;
      },
      defineProperty: function () {
        op(11);
      },
      getPrototypeOf: function (e) {
        return Object.getPrototypeOf(e.t);
      },
      setPrototypeOf: function () {
        op(12);
      },
    },
    Zp = {};
  ap(Jp, function (e, t) {
    Zp[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  }),
    (Zp.deleteProperty = function (e, t) {
      return Jp.deleteProperty.call(this, e[0], t);
    }),
    (Zp.set = function (e, t, n) {
      return Jp.set.call(this, e[0], t, n, e[0]);
    });
  var Xp = (function () {
      function e(e) {
        var t = this;
        (this.g = Gp),
          (this.F = !0),
          (this.produce = function (e, n, r) {
            if ('function' == typeof e && 'function' != typeof n) {
              var o = n;
              n = e;
              var i = t;
              return function (e) {
                var t = this;
                void 0 === e && (e = o);
                for (var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) s[a - 1] = arguments[a];
                return i.produce(e, function (e) {
                  var r;
                  return (r = n).call.apply(r, [t, e].concat(s));
                });
              };
            }
            var s;
            if (('function' != typeof n && op(6), void 0 !== r && 'function' != typeof r && op(7), sp(e))) {
              var a = Cp(t),
                u = Lp(t, e, void 0),
                c = !0;
              try {
                (s = n(u)), (c = !1);
              } finally {
                c ? Ap(a) : Ep(a);
              }
              return 'undefined' != typeof Promise && s instanceof Promise
                ? s.then(
                    function (e) {
                      return _p(a, r), Ip(e, a);
                    },
                    function (e) {
                      throw (Ap(a), e);
                    },
                  )
                : (_p(a, r), Ip(s, a));
            }
            if (!e || 'object' != typeof e) {
              if ((s = n(e)) === qp) return;
              return void 0 === s && (s = e), t.F && yp(s, !0), s;
            }
            op(21, e);
          }),
          (this.produceWithPatches = function (e, n) {
            var r, o;
            return 'function' == typeof e
              ? function (n) {
                  for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                    o[i - 1] = arguments[i];
                  return t.produceWithPatches(n, function (t) {
                    return e.apply(void 0, [t].concat(o));
                  });
                }
              : [
                  t.produce(e, n, function (e, t) {
                    (r = e), (o = t);
                  }),
                  r,
                  o,
                ];
          }),
          'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
          'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
      }
      var t = e.prototype;
      return (
        (t.createDraft = function (e) {
          sp(e) || op(8),
            ip(e) &&
              (e = (function (e) {
                return (
                  ip(e) || op(22, e),
                  (function e(t) {
                    if (!sp(t)) return t;
                    var n,
                      r = t[Kp],
                      o = up(t);
                    if (r) {
                      if (!r.P && (r.i < 4 || !bp('ES5').K(r))) return r.t;
                      (r.I = !0), (n = Mp(t, o)), (r.I = !1);
                    } else n = Mp(t, o);
                    return (
                      ap(n, function (t, o) {
                        (r && lp(r.t, t) === o) || fp(n, t, e(o));
                      }),
                      3 === o ? new Set(n) : n
                    );
                  })(e)
                );
              })(e));
          var t = Cp(this),
            n = Lp(this, e, void 0);
          return (n[Kp].C = !0), Ep(t), n;
        }),
        (t.finishDraft = function (e, t) {
          var n = (e && e[Kp]).A;
          return _p(n, t), Ip(void 0, n);
        }),
        (t.setAutoFreeze = function (e) {
          this.F = e;
        }),
        (t.setUseProxies = function (e) {
          e && !Gp && op(20), (this.g = e);
        }),
        (t.applyPatches = function (e, t) {
          var n;
          for (n = t.length - 1; n >= 0; n--) {
            var r = t[n];
            if (0 === r.path.length && 'replace' === r.op) {
              e = r.value;
              break;
            }
          }
          var o = bp('Patches').$;
          return ip(e)
            ? o(e, t)
            : this.produce(e, function (e) {
                return o(e, t.slice(n + 1));
              });
        }),
        e
      );
    })(),
    Qp = new Xp(),
    eg = Qp.produce,
    tg =
      (Qp.produceWithPatches.bind(Qp),
      Qp.setAutoFreeze.bind(Qp),
      Qp.setUseProxies.bind(Qp),
      Qp.applyPatches.bind(Qp),
      Qp.createDraft.bind(Qp),
      Qp.finishDraft.bind(Qp),
      eg);
  const ng = { status: null, putStatus: null, data: null };
  var rg = tg((e = ng, t) => {
    switch (t.type) {
      case V.PROFILE_FETCH_START:
        return (e.status = 'loading'), e;
      case V.PROFILE_FETCH_COMPLETE:
        return (e.status = 'loaded'), e;
      case V.PROFILE_PUT_START:
        return (e.putStatus = 'loading'), e;
      case V.PROFILE_PUT_COMPLETE:
        return (e.putStatus = 'loaded'), e;
      case V.PROFILE_SET_DATA:
        return (e.data = t.payload), e;
      default:
        return e;
    }
  }, ng);
  const og = {
      isLoading: !1,
      signInError: '',
      signInAccepted: !1,
      recreatePasswordError: '',
      recreatePasswordAccepted: !1,
    },
    ig = tg((e = og, t) => {
      switch (t.type) {
        case Y.SIGN_IN_START:
          return (e.signInError = ''), (e.signInAccepted = !1), (e.isLoading = !0), e;
        case Y.SIGN_IN_ACCEPTED:
          return (e.signInAccepted = !0), (e.isLoading = !1), e;
        case Y.SIGN_IN_DENIED:
          return (e.signInError = t.payload), (e.isLoading = !1), e;
        case Y.RECREATE_PASSWORD_START:
          return (e.recreatePasswordError = ''), (e.recreatePasswordAccepted = !1), (e.isLoading = !0), e;
        case Y.RECREATE_PASSWORD_ACCEPTED:
          return (e.recreatePasswordAccepted = !0), (e.isLoading = !1), e;
        case Y.RECREATE_PASSWORD_DENIED:
          return (e.recreatePasswordError = t.payload), (e.isLoading = !1), e;
        case Y.API_LOGIN_REFRESH_STATE:
          return (
            (e.signInError = ''),
            (e.signInAccepted = !1),
            (e.recreatePasswordError = ''),
            (e.recreatePasswordAccepted = !1),
            e
          );
        default:
          return e;
      }
    }, og);
  const sg = { connection: null, history: null, fileStatus: null, error: '', unreadMessageCounter: 0, path: null };
  const ag = (function (e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
      var o = t[r];
      'function' == typeof e[o] && (n[o] = e[o]);
    }
    var i,
      s = Object.keys(n);
    try {
      !(function (e) {
        Object.keys(e).forEach(function (t) {
          var n = e[t];
          if (void 0 === n(void 0, { type: y.INIT })) throw new Error(p(12));
          if (void 0 === n(void 0, { type: y.PROBE_UNKNOWN_ACTION() })) throw new Error(p(13));
        });
      })(n);
    } catch (e) {
      i = e;
    }
    return function (e, t) {
      if ((void 0 === e && (e = {}), i)) throw i;
      for (var r = !1, o = {}, a = 0; a < s.length; a++) {
        var u = s[a],
          c = n[u],
          l = e[u],
          f = c(l, t);
        if (void 0 === f) {
          t && t.type;
          throw new Error(p(14));
        }
        (o[u] = f), (r = r || f !== l);
      }
      return (r = r || s.length !== Object.keys(e).length) ? o : e;
    };
  })({
    Profile: rg,
    Login: ig,
    Chat: tg((e = sg, t) => {
      switch (t.type) {
        case W.CHAT_SET_CONNECTION_MESSAGE:
          return (e.connection = t.payload), e;
        case W.CHAT_SET_HISTORY_DIALOG:
          return (e.history = t.payload), e;
        case W.CHAT_UNREAD_MESSAGES_COUNT:
          return (e.unreadMessageCounter = t.payload), e;
        case W.CHAT_SEND_FILE_STATUS:
          return (e.fileStatus = t.payload), e;
        case W.CHAT_SET_ERROR:
          return (e.error = t.payload), e;
        case W.API_CHAT_REFRESH_ERROR:
          return (e.error = ''), e;
        case W.API_CHAT_REFRESH_FILE_STATUS:
          return (e.fileStatus = null), e;
        case W.CHAT_SET_ACTUAL_APP_PATH:
          return (e.path = t.payload), e;
        default:
          return e;
      }
    }, sg),
  });
  const ug = w((e, t) => (t.type === z ? ag(void 0, t) : ag(e, t)), P(S(rp))),
    cg = E.GlobalStore.Get();
  cg.RegisterStore(G.API, ug),
    cg.RegisterGlobalActions(G.API, [
      Y.API_LOGIN_CHECK_AUTH,
      Y.API_LOGIN_SIGN_IN,
      Y.API_LOGIN_SIGN_OUT,
      Y.API_LOGIN_FORGOT_PASSWORD,
      Y.API_LOGIN_RECREATE_PASSWORD,
      Y.API_LOGIN_REFRESH_STATE,
      V.API_PROFILE_FETCH_DATA,
      V.API_PROFILE_PUT_DATA,
      W.API_CHAT_CONNECTION,
      W.API_CHAT_GET_HISTORY_DIALOG,
      W.API_CHAT_GET_HISTORY_DIALOG,
      W.API_CHAT_NEW_RESPONSE_MESSAGE,
      W.API_CHAT_NEW_REQUEST_MESSAGE,
      W.API_CHAT_SEND_FILE,
      W.API_CHAT_REFRESH_ERROR,
      W.API_CHAT_REFRESH_FILE_STATUS,
      W.API_CHAT_CLIENT_ACTIVITY,
      W.API_CHAT_SET_READ_MESSAGES,
      W.API_CHAT_ACTUAL_APP_PATH,
      z,
    ]);
})();