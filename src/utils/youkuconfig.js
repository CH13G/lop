!(function (t) { function e(n) { if (i[n]) return i[n].exports; const o = i[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports; } var i = {}; return e.m = t, e.c = i, e.p = '', e(0); }([function (t, exports, e) { e(5), e(6), e(9), e(4), e(19), e(10), e(11), e(12), e(13), t.exports = e(14); }, function (t, exports, e) {
  function i(t) { return t && t.__esModule ? t : { default: t }; }Object.defineProperty(exports, '__esModule', { value: !0 }), exports.Version = exports.params = exports.thirdapp = exports.aliapp = exports.os = exports.browser = void 0; let n = e(15),
    o = i(n),
    r = e(16),
    a = i(r),
    s = e(7),
    l = i(s),
    u = e(18),
    d = i(u),
    c = e(17),
    p = i(c),
    f = e(2),
    h = i(f); exports.browser = a.default, exports.os = l.default, exports.aliapp = o.default, exports.thirdapp = d.default, exports.params = p.default, exports.Version = h.default;
}, function (t, exports) {
  function e(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(exports, '__esModule', { value: !0 }); let i = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n); } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e; }; }()),
    n = (function () {
      function t(i) { e(this, t), i ? this.val = i.toString() : this.val = ''; } return i(t, null, [{ key: 'compare',
        value(t, e) {
          t = t.toString().split('.'), e = e.toString().split('.'); for (let i = 0; i < t.length || i < e.length; i++) {
            let n = parseInt(t[i], 10),
              o = parseInt(e[i], 10); if (isNaN(n) && (n = 0), isNaN(o) && (o = 0), n < o) return -1; if (n > o) return 1;
          } return 0;
        } }]), i(t, [{ key: 'gt', value(e) { return t.compare(this, e) > 0; } }, { key: 'gte', value(e) { return t.compare(this, e) >= 0; } }, { key: 'lt', value(e) { return t.compare(this, e) < 0; } }, { key: 'lte', value(e) { return t.compare(this, e) <= 0; } }, { key: 'eq', value(e) { return t.compare(this, e) === 0; } }, { key: 'toString', value() { return this.val.toString(); } }]), t;
    }()); exports.default = n;
}, function (t, exports) {
  function e(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } let i = (function () {
      function t(t, e) {
        let i = [],
          n = !0,
          o = !1,
          r = void 0; try { for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0); } catch (l) { o = !0, r = l; } finally { try { !n && s.return && s.return(); } finally { if (o) throw r; } } return i;
      } return function (e, i) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, i); throw new TypeError('Invalid attempt to destructure non-iterable instance'); };
    }()),
    n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol ? 'symbol' : typeof t; },
    o = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n); } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e; }; }()); Object.defineProperty(exports, '__esModule', { value: !0 }); let r = new RegExp('^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$', 'i'),
      a = (function () {
        function t(i) { e(this, t), this._params = {}, this._hash = '', i && this.assign(i.toString()); } return o(t, [{ key: 'assign', value(t) { t = t || ''; const e = t.match(r); if (!e) throw new Error('Parse Error'); this.protocol = e[1] || ((typeof location === 'undefined' ? 'undefined' : n(location)) === 'object' ? location.protocol : ''), this.username = e[2] || '', this.password = e[3] || '', this.hostname = e[4], this.port = e[5] || '', this.pathname = e[6] || '/', this.search = e[7] || '', this.hash = e[8] || '', this.origin = `${this.protocol}//${this.host}`; } }, { key: 'toString', value() { let t = `${this.protocol}//`; return this.username && (t += this.username, this.password && (t += `:${this.password}`), t += '@'), t += this.hostname, this.port && this.port !== '80' && (t += `:${this.port}`), this.pathname && (t += this.pathname), this.search && (t += this.search), this.hash && (t += this.hash), t; } }, { key: 'params', get() { return this._params; }, set(t) { if (t && (typeof t === 'undefined' ? 'undefined' : n(t)) === 'object' && !(t instanceof Date) && !(t instanceof RegExp) && !(t instanceof Array) && !(t instanceof String) && !(t instanceof Number) && !(t instanceof Boolean)) { for (var e in this._params) delete this._params[e]; for (var e in t) this._params[e] = t[e]; } } }, { key: 'search',
          get() { const t = []; for (const e in this._params) if (void 0 !== this._params[e]) if (this._params[e] !== '') try { t.push(`${encodeURIComponent(e)}=${encodeURIComponent(this._params[e])}`); } catch (i) { t.push(`${e}=${this._params[e]}`); } else try { t.push(encodeURIComponent(e)); } catch (i) { t.push(e); } return t.length ? `?${t.join('&')}` : ''; },
          set(t) {
            if (typeof t === 'string' || t instanceof String) {
              t = t.toString(), t.indexOf('?') === 0 && (t = t.substr(1)); const e = t.split('&'); for (const n in this._params) delete this._params[n]; for (let o = 0; o < e.length; o++) {
                let r = e[o].split('='),
                  a = i(r, 2),
                  s = a[0],
                  l = a[1]; if (void 0 !== l && (l = l.toString()), s) try { this._params[decodeURIComponent(s)] = decodeURIComponent(l); } catch (u) { this._params[s] = l; }
              }
            }
          } }, { key: 'hash', get() { return this._hash; }, set(t) { (typeof t === 'string' || t instanceof String) && (t = t.toString(), t && t.indexOf('#') < 0 && (t = `#${t}`), this._hash = t || ''); } }, { key: 'host', get() { return this.hostname + (this.port ? `:${this.port}` : ''); }, set(t) { if (typeof t === 'string' || t instanceof String) { t = t.toString(); const e = t.match(/([^:\/?#]+)(?:[:]([0-9]+))?/); e && (this.hostname = e[1], this.port = e[2] || ''); } } }]), t;
      }()); exports.default = a;
}, function (t, exports, e) {
  function i(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const i in t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e; } function n(t) { return t && t.__esModule ? t : { default: t }; } function o(t, e) { const i = new p.default(location.href); for (const n in i.params)t.params.hasOwnProperty(n) || (t.params[n] = i.params[n]); if ((typeof e === 'undefined' ? 'undefined' : d(e)) === 'object') for (const o in e) typeof e[o] === 'number' ? t.params[o] = `${e[o]}` : typeof e[o] === 'function' ? t.params[o] = '' : t.params[o] = e[o]; return t; } function r(t) { B || (B = g.createElement('iframe'), B.id = `callapp_iframe_${Date.now()}`, B.frameborder = '0', B.style.cssText = 'display:none;border:0;width:0;height:0;', g.body.appendChild(B)), B.src = t; } function a(t, e) { e !== !1 && e === !0 ? location.replace(t) : location.href = t; } function s() {
    const t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; D = !0; let e = t.params,
      i = /auto/i.test(e.source); if (z.restore() && i) return void z.clear(); i && (e.universalRedirect = window.location.href, z.save()); let n = e.universalRedirect ? e.universalRedirect : t.downloadUrl ? t.downloadUrl : I.YK; n = new p.default(n), t.exdParams && o(n, t.exdParams), l(n), n = n.toString(), e.fallback_url = n, e.fua = /Safari\/\d+(\.\d+)*$/.test(navigator.userAgent) ? 'safari' : 'other', e.special = 1, e.ts = (new Date()).getTime(), e.action = e.action ? e.action : 'play'; const r = new p.default(T + e.action); o(r, e), l(r), a(r.toString());
  } function l(t) { if (t instanceof p.default) for (const e in t._params)t.params[e] !== null && t.params[e] !== 'undefined' && t.params[e] !== '' || delete t.params[e]; } function u(t) { const e = document.cookie.match(RegExp(`(^| )${t}=([^;]*)(;|$)`)); return e != null ? unescape(e[2]) : null; } var d = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol ? 'symbol' : typeof t; },
    c = e(3),
    p = n(c),
    f = e(1),
    h = i(f),
    m = e(8),
    v = n(m),
    g = window.document,
    y = window.navigator.userAgent,
    w = h.os,
    b = h.params,
    x = h.browser,
    k = h.os.isIOS ? 2500 : 1e3,
    _ = (/MQQBrowser|micromessenger|QQ/i.test(navigator.userAgent), /youku/i.test(y), /microMessenger/i.test(y)),
    A = (/weibo/i.test(y), /ucbrowser/i.test(y)),
    S = 'com.youku.phone',
    O = /iPad/.test(navigator.userAgent) ? 'youkuhd://' : 'youku://',
    T = 'http://link-jump.youku.com/a/',
    C = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.youku.phone',
    E = '//statis.api.3g.youku.com/openapi-wireless/statis/recall_app_service',
    I = { YK: '//m.youku.com/html/download.html' },
    P = { chars: '0123456789abcdefghijklmnopqrstuvwxyz', uuid(t) { for (var e = this.chars.length, i = [], n = 0; n < t; n++)i.push(this.chars[parseInt(Math.random() * e)]); return i.join(''); } },
    D = !1,
    M = { gotoApp() {
      let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = u('__ysuid'); t.pathname = t.pathname ? t.pathname : 'splash', t.params.action = t.params.action ? t.params.action : '', t.params.ua = y, t.params.refer = b.refer ? b.refer : b.from ? b.from : t.params.refer, t.params.ccts = (new Date()).getTime(), t.params.cookieid = e ? `${e}|${P.uuid(6)}` : '', t.params.tuid = b.tuid ? b.tuid : t.params.tuid; const i = new p.default(O + t.pathname); i.pathname = '', t.params && o(i, t.params), l(i); let n = w.isAndroid && x.isChrome && !x.isWebview,
          d = w.isAndroid && !!y.match(/samsung/i) && w.version.gte('4.3') && w.version.lt('4.5'); w.isIPhone && w.version.gte('9.0') && x.isSafari; (n || d || t.forceIntent) && (i.hash = `Intent;scheme=${i.protocol.replace(':', '')};package=${S};end`, i.protocol = 'intent:'); const c = w.isIPhone && w.version.gte('9.0'); return (c && !_ || window.is34Online && _ && c) && (t.params.universalLinkState = !0), L.track(t.params), _ && !w.isIPhone ? setTimeout(() => { a(`${C}&android_schema=${encodeURIComponent(i.toString())}`); }, 100) : _ && c ? (window.is34Online && s(t), setTimeout(() => { a(`${C}&android_schema=${encodeURIComponent(i.toString())}`); }, 100)) : !c || _ || A ? i.protocol === 'intent:' ? setTimeout(() => { a(i.toString()); }, 100) : r(i.toString()) : s(t), i.toString();
    },
      download() { const t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; t.downloadUrl || (t.downloadUrl = I.YK); let e = new p.default(t.downloadUrl); t.exdParams && o(e, t.exdParams), l(e), e = e.toString(), a(e, t.replace); },
      gotoPage() { let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; return t = (0, v.default)({ timeout: k }, t), t.targetUrl = M.gotoApp(t), /auto/i.test(t.params.source) ? t.targetUrl : D ? t.targetUrl : (t.isNeedDownload ? !(function () { var e = window.setTimeout(() => { clearTimeout(e), M.download(t); }, t.timeout); }()) : t.uri && !(function () { var e = window.setTimeout(() => { clearTimeout(e), a(t.uri, t.replace); }, t.timeout); }()), t.targetUrl); } },
    L = { track() {
      let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = (0, v.default)(t, { pagetype: 1, special: t.universalLinkState ? 1 : 0, datetime: parseInt((new Date()).getTime() / 1e3), sender: 1, pid: h.os.isIOS ? '69b81504767483cf' : '0d7c3ff41d42fcd9' }); j.backup(e), this.send(e);
    },
      send() {
        let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          e = new p.default(E); o(e, t), e = e.toString(), (new Image()).src = e;
      } },
    j = { key: '_h5_app_launcher_track_key',
      restore() { const t = localStorage.getItem(this.key); return JSON.parse(t || '[]'); },
      backup() {
        let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          e = this.restore(); e.push(t), localStorage.setItem(this.key, JSON.stringify(e));
      },
      resend() { const t = this.restore(); this.clear(), t && L.send(t); },
      clear() { localStorage.removeItem(this.key); } }; j.resend(); var B = void 0,
        z = { key: '_h5_app_launcher_ios9_timestamp', save() { localStorage.setItem(this.key, (new Date()).getTime()); }, restore() { return parseInt(localStorage.getItem(this.key) || 0); }, clear() { localStorage.removeItem(this.key); } }; window.ykCallApp = M, t.exports = M;
}, function (t, exports) {
  function e(t) {
    let e = t.show_black_ua,
      n = new RegExp(t.show_black_ua); return e && n.test(i) ? t.denyRedirect = !0 : t.denyRedirect = !1, t;
  } var i = window.navigator.userAgent; t.exports = e;
}, function (t, exports) {
  function e(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } let i = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n); } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e; }; }()),
    n = (function () {
      function t() { const i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; e(this, t), this.options = i, this.init(); } return i(t, [{ key: 'init', value() {} }, { key: 'get',
        value(t, e, i) {
          let n = document.createElement('script'),
            o = `jsonp${1 * new Date()}`,
            r = [],
            a = ''; if (e) { for (const s in e)r.push([s, e[s]]); for (let l = 0, u = r.length; l < u; l++)a += `${r[l].join('=')}&`; a = a.slice(0, -1); }t = a ? `${t}?callback=${o}&${a}&_time=${Date.now()}` : `${t}?callback=${o}&_time=${Date.now()}`, window[o] = function (t) { typeof i === 'function' ? i(t) : console.info('ajaxå›žè°ƒå‡½æ•°ä¸æ˜¯functionç±»åž‹'); }, n.src = t, document.body.appendChild(n), n.onload = n.onreadystatechange = function () { this.readyState && this.readyState !== 'loaded' && this.readyState !== 'complete' || (n.onload = n.onreadystatechange = null, document.body.removeChild(n)); };
        } }]), t;
    }()); t.exports = n;
}, function (t, exports, e) {
  function i(t) { return t && t.__esModule ? t : { default: t }; }Object.defineProperty(exports, '__esModule', { value: !0 }); let n,
    o,
    r = e(2),
    a = i(r),
    s = window.navigator.userAgent; if (o = s.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))n = { name: 'Windows Phone', isWindowsPhone: !0, version: new a.default(o[1]) }; else if (s.match(/Safari/) && (o = s.match(/Android[\s\/]([\d\.]+)/)))n = { version: new a.default(o[1]) }, s.match(/Mobile\s+Safari/) ? (n.name = 'Android', n.isAndroid = !0) : (n.name = 'AndroidPad', n.isAndroidPad = !0); else if (o = s.match(/(iPhone|iPad|iPod)/)) { const l = o[1]; (o = s.match(/OS ([\d_\.]+) like Mac OS X/)) && (n = { name: l, isIPhone: l === 'iPhone' || l === 'iPod', isIPad: l === 'iPad', isIOS: !0, version: new a.default(o[1].split('_').join('.')) }); }n || (n = { name: 'unknown', version: new a.default('0.0.0') }), exports.default = n;
}, function (t, exports) { function e() { for (var t = {}, e = 0; e < arguments.length; e++) { const n = arguments[e]; for (const o in n)i.call(n, o) && (t[o] = n[o]); } return t; }t.exports = e; var i = Object.prototype.hasOwnProperty; }, function (t, exports, e) {
  function i(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const i in t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e; } function n(t, e) {
    t = t && (typeof t === 'string' ? JSON.parse(t) : t); for (var i = t && t.page || window.smartbannerJSON.page, n = [], o = 0, r = i.length; o < r; o++) {
      let s = i[o],
        l = s.pageType; if (e === l) { n = s.config; break; }
    } let u = {}; return n.forEach((t, e) => {
      let i = t.type,
        n = new RegExp(t.uaReg),
        o = parseInt(t.on); i === 'default' && o ? u = t : i === 'fresh' && o ? u = t : i !== '' && o ? u = t : t.uaReg && n.test(a) && o && (u = t);
    }), Object.keys(u).length === 0 && console.error('æ²¡æœ‰èŽ·å–åˆ°ä»»ä½•é…ç½®æ•°æ®ï¼Œè¯·æ£€æŸ¥å­—æ®µåç§°åŠé…ç½®'), { title: u.title || '', text: u.text || '', textColor: u.textColor || '', textBgcolor: u.textBgcolor || '', titleColor: u.titleColor || '', titleBgcolor: u.titleBgcolor || '', icon: u.icon || '', position: u.position || '', top: u.top || '', url: u.url || '', exdUrl: u.exdUrl || '', exdText: u.exdText || '', uriDownload: u.uriDownload || '' };
  } var o = e(1),
    r = i(o),
    a = window.navigator.userAgent; r.os; t.exports = n;
}, function (t, exports) {
  function e(t) {
    try {
      const e = t.invokeConfig; e.forEach((e, o) => {
        let r = new RegExp(e.uaReg),
          a = e.type,
          s = e.config; a === 'default' ? t = i(s[0], s[1], s[2]) : a === 'fresh' ? t = i(s[0], s[1], s[2]) : e.uaReg && r.test(n) && (t = i(s[0], s[1], s[2]));
      });
    } catch (o) { t = i(0, 0, 0), console.info('invokeConfig RegExp parse error', o); } return t;
  } function i(t, e, i) { return t = parseInt(t), e = parseInt(e), i = parseInt(i), { isInvoke: t, isShow: e, isInvokeDay: i }; } var n = window.navigator.userAgent; t.exports = e;
}, function (t, exports, e) {
  function i(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const i in t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e; } function n(t) { return t && t.__esModule ? t : { default: t }; } function o(t) {
    m || v || f.isIPhone || g || document.documentElement.addEventListener('click', function (e) {
      const i = this; r() || !(function () {
        console.info('è¿›å…¥äºŒè·³é€»è¾‘'); var n = 0,
          o = e,
          r = 'videoclick-android',
          s = function (e) { if (e.getAttribute && !e.getAttribute('id') || e.getAttribute && e.getAttribute('id') && e.getAttribute('id') != 'wrap') if (e.getAttribute('href') && (e.getAttribute('href').indexOf('id_X') > 0 || e.getAttribute('href').indexOf('videoid=X') > 0)) { o.preventDefault(); const i = parseInt(Math.random() * y); if (i == n) { const l = { isNeedDownload: !0, timeout: b, downloadUrl: t.url || w, uri: '', replace: !1, params: { action: 'play', vid: a(location.href, 'videoid'), source: r, refer: /weibo/i.test(navigator.userAgent) ? 'weibo' : '', universalLinkState: !0 }, pathname: 'play', exdParams: { position: 'secondhop' } }; d.default.gotoPage(l); } else location.href = e.getAttribute('href'); } else s(e.parentNode); }; s(o.target);
      }());
    }, !1);
  } function r() {
    let t = window.localStorage,
      e = void 0,
      i = void 0,
      n = void 0,
      o = void 0; if (t) { if (e = localStorage.down_initDate, i = localStorage.down_7dayDate, n = !1, e || i) { if (e = parseInt(e, 10), i = parseInt(i, 10), o = new Date(), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0), e > o) return n = !0; if (o = new Date(o.getTime() - 6048e5), i > o) return n = !0; } return n; }
  } function a(t, e) { let i = ''; if (t.split('id_').length > 1) return i = t.split('id_')[1].split('.')[0], i = i.indexOf('_') > 0 ? i.split('_')[0] : i, i = i.split('=')[0]; if (i == '') { const n = new l.default(t); return n.params[e]; } return i; } var s = e(3),
    l = n(s),
    u = e(4),
    d = n(u),
    c = e(1),
    p = i(c),
    f = p.os,
    h = window.navigator.userAgent,
    m = /youku/i.test(h),
    v = /microMessenger/i.test(h),
    g = (/weibo/i.test(h), /ucbrowser/i.test(h)),
    y = 1,
    w = '//m.youku.com/html/download.html',
    b = p.os.isIOS ? 2500 : 1e3; t.exports = o;
}, function (t, exports, e) {
  function i(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const i in t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e; } function n(t) { return t && t.__esModule ? t : { default: t }; } function o(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function r(t, e) { let i = ''; if (t.split('id_').length > 1) { const n = /id_([^\.^\?^_]*)(_|$|\.|\?)/i; return i = t.match(n)[1], i.split('=')[0]; } if (i == '') { const o = new l.default(t); if (window.itemData && window.itemData.vcode) return window.itemData.vcode.split('=')[0]; if (o.params[e]) return o.params[e].split('=')[0]; } return i; } var a = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n); } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e; }; }()),
    s = e(3),
    l = n(s),
    u = e(1),
    d = i(u),
    c = e(8),
    p = (n(c), e(4)),
    f = n(p),
    h = e(5),
    m = n(h),
    v = d.params,
    g = '//m.youku.com/html/download.html',
    y = d.os.isIOS ? 2500 : 1e3,
    w = (function () { function t() { const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; o(this, t), this.options = e, this.callAppOpts = { isNeedDownload: !0, timeout: e.timeout || y, downloadUrl: '', uri: '', replace: e.replace || !1, params: { action: '', vid: '', source: '', refer: '', universalLinkState: !1 }, pathname: 'splash', exdParams: {} }, this.init(e); } return a(t, [{ key: 'init', value(t) { this.callAppOpts.downloadUrl = t.url || g, this.callAppOpts.params.refer = /weibo/i.test(navigator.userAgent) ? 'weibo' : '', this.callAppOpts.params.source = 'yksmartbanner', this.pageType = '', this.options.pageType = '', this.options.vid = ''; try { this.pageType = document.querySelector('#yksmartbanner').getAttribute('pageType'), this.options.pageType = this.pageType, r(location.href, 'videoid') ? (this.callAppOpts.params.vid = r(location.href, 'videoid'), this.callAppOpts.params.action = 'play', this.callAppOpts.pathname = 'play', this.options.pathname = 'play', this.options.vid = this.callAppOpts.params.vid) : (this.callAppOpts.pathname = 'splash', this.options.pathname = 'splash'); } catch (e) { console.error('èŽ·å–videoidå‡ºé”™'); }v.from && (this.callAppOpts.exdParams.from = v.from); } }, { key: 'redirect', value(e, i, n) { return t.activeControl().denyRedirect ? null : void (this.callAppOpts && (e && (this.callAppOpts.params.source = e, this.callAppOpts.exdParams.position = e), i ? (this.callAppOpts.params.vid = i.split('=')[0], this.callAppOpts.params.action = 'play', this.callAppOpts.pathname = 'play', this.options.pathname = 'play', this.options.vid = i.split('=')[0]) : r(location.href, 'videoid') ? (this.callAppOpts.params.vid = r(location.href, 'videoid'), this.callAppOpts.params.action = 'play', this.callAppOpts.pathname = 'play', this.options.pathname = 'play', this.options.vid = this.callAppOpts.params.vid) : (this.callAppOpts.params.vid = '', this.callAppOpts.pathname = 'splash', this.options.pathname = 'splash', this.options.vid = ''), n == 0 && this.options.uriDownload && (this.callAppOpts.exdParams.uriDownload = encodeURI(this.options.uriDownload)), this.options.exdUrl && n == 0 ? (this.callAppOpts.downloadUrl = this.options.exdUrl, f.default.download(this.callAppOpts)) : f.default.gotoPage(this.callAppOpts))); } }], [{ key: 'activeControl', value() { const t = (0, m.default)(window.ykSmartbannerConfig); return t; } }]), t; }()); t.exports = w;
}, function (t, exports, e) {
  function i(t) { return t && t.__esModule ? t : { default: t }; } function n(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const i in t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e; } function o(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || typeof e !== 'object' && typeof e !== 'function' ? t : e; } function a(t, e) { if (typeof e !== 'function' && e !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e); } function s(t) { let e = t; return t && t.indexOf('X') == 0 && (e = e.substring(1, e.length), e = l(e), e = parseFloat(e) >>> 2), e; } function l(t) {
    if (!t) return ''; let e,
      i,
      n,
      o,
      r,
      a,
      s,
      l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      d = '',
      c = 0; t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ''); do o = l.indexOf(t.charAt(c++)), r = l.indexOf(t.charAt(c++)), a = l.indexOf(t.charAt(c++)), s = l.indexOf(t.charAt(c++)), e = o << 2 | r >> 4, i = (15 & r) << 4 | a >> 2, n = (3 & a) << 6 | s, d += String.fromCharCode(e), a != 64 && (d += String.fromCharCode(i)), s != 64 && (d += String.fromCharCode(n)); while (c < t.length);return u(d);
  } function u(t) {
    let e,
      i,
      n,
      o,
      r,
      a = []; for (i = t.length, e = 0; e < i;) switch (n = t.charCodeAt(e++), n >> 4) { case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a.push(t.charAt(e - 1)); break; case 12:case 13:o = t.charCodeAt(e++), a.push(String.fromCharCode((31 & n) << 6 | 63 & o)); break; case 14:o = t.charCodeAt(e++), r = t.charCodeAt(e++), a.push(String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | (63 & r) << 0)); } return a.join('');
  } function d(t) {
    let e = document.cookie,
      i = `${t}=`,
      n = e.indexOf(i); if (n < 0) return null; n += i.length; let o = e.indexOf(';', n); return o = o == -1 ? e.length : o, e.substring(n, o);
  } function c(t) { return t == null ? '' : t.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;'); } let p = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n); } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e; }; }()),
    f = e(1),
    h = n(f),
    m = e(12),
    v = i(m),
    g = e(4),
    y = (i(g), e(6)),
    w = i(y),
    b = e(14),
    x = i(b),
    k = String.fromCharCode(97 + parseInt(24 * Math.random(), 10)),
    _ = k + parseInt(1e7 * Math.random(), 10).toString(16),
    A = k + parseInt(100 * Math.random(), 10).toString(16),
    S = `${A}-${_}`,
    O = '//static.youku.com/h5/html/sb/images/logo.png',
    T = { isWechat: /micromessenger/i.test(navigator.userAgent), isFirefox: /firefox/i.test(navigator.userAgent) },
    C = (function (t) {
      function e() { const t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; o(this, e); const i = r(this, Object.getPrototypeOf(e).call(this, t)); return i.calClose() ? r(i) : (i.setParam(t), i.template(t), i.status = !1, i.timer = null, i); } return a(e, t), p(e, [{ key: 'calClose', value() { const t = window.localStorage; if (t) { let e = t.ykb_closeDate; if (e) { e = parseInt(e, 10); const i = new Date(); i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), e > i && (this.iClose = !0); } return this.iClose; } } }, { key: 'setParam',
        value() {
          let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = t.textColor ? `color:${t.textColor};` : '',
            i = t.textBgcolor ? `background-color:${t.textBgcolor};` : '',
            n = t.titleColor ? `color:${t.titleColor};` : '',
            o = t.titleBgcolor ? `background-color:${t.titleBgcolor};` : '',
            r = t.position === 'top' ? `position:absolute;top:${t.top}px;z-index:700` : 'position:fixed;'; this.showCB = t.showCallback, this.hideCB = t.hideCallback, this.textstyles = e + i + r, this.titleStyles = n + o, this.isHide = t.hide || !1, this.text = t.text || 'æ‰“å¼€', this.title = t.title || 'ä¸Šå®¢æˆ·ç«¯ï¼Œé¢†ä¸“å±žå¥½ç¤¼', this.icon = t.icon || O, this.isTop = t.position === 'top', this.status = !1, this.bodyOrigPT = 0;
        } }, { key: 'createHtml',
          value() {
            const t = (arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], arguments[1]); if (!this.iClose) {
              let e = document.createElement('style'),
                i = document.createElement('div'),
                n = this.isTop; i.innerHTML = t, this.smartDom = i.querySelector(`#${_}`); let o = n ? 'top:0;' : 'bottom:0;',
                  r = `.${S}{${o}position: fixed;z-index:9999;width:100%;height: 66px;overflow:hidden;background:#fff;font-size: 12px;}`,
                  a = document.body.offsetWidth == 320 ? 'width:140px;line-height:20px;' : '',
                  s = `width:${document.body.offsetWidth}px;`,
                  l = T.isWechat ? '' : 'border:solid 1px rgba(219,217,217,.4);border-radius:10px;-webkit-box-shadow: 0px 1px 1px rgba(219,217,217,.4);-moz-box-shadow: 0px 1px 1px rgba(219,217,217,.4);box-shadow: 0px 1px 1px rgba(219,217,217,.4);'; e.innerHTML = `${r}.${A}-swiper{height:66px;width:100%;position: relative;overflow:hidden;display:-moz-box;display:-webkit-box;display:box;-moz-box-pack:start;-webkit-box-pack:start;box-pack:start;}.${A}-swiper-items{height:66px;width:500%;overflow:hidden;cursor:default;position: relative;display:-moz-box;display:-webkit-box;display:box;-moz-box-pack:start;-webkit-box-pack:start;box-pack:start;}.${A}-swiper-item{height:66px;overflow:hidden;cursor:default;position: relative;display:-moz-box;display:-webkit-box;display:box;-moz-box-pack:start;-webkit-box-pack:start;box-pack:start;${s}}.${A}-close{width:8%;height:100%;margin:0;background: url(//m.youku.com/video/images/close.png) 0 0 no-repeat;background-size: 12px 12px;background-position:50%;z-index:8;}.${A}-open{height:66px;width:92%;margin:0;z-index:1;display:-moz-box;display:-webkit-box;display:box;-moz-box-pack:start;-webkit-box-pack:start;box-pack:start;}.${A}-logo{height:44px;width:100%;margin:11px 0px;display:-moz-box;display:-webkit-box;display:box;-moz-box-pack:start;-webkit-box-pack:start;box-pack:start;-moz-box-align:center;-webkit-box-align:center;box-align:center;align-items:center;}.${A}-logo-img{width:68px;height:44px;display:block;}.${A}-logo-span{padding-left:10px;width:198px;line-height:20px;display:inline-block;overflow:hidden;text-overflow:ellipsis;font-size:14px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -o-box;display: box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;${a}}.${A}-swiper-item-0 img{width:40px;height:40px;${l}}.${A}-swiper-item-0 span{width:212px;${a}}.${A}-btn{position:absolute;right:12px;width:44px;height:28px;margin:19px 0;text-align:center;line-height:28px;background-color:#2692ff;color:#fff;border-radius:4px;font-size:14px;}.${A}-swiper-dots{height:4px;position:absolute;left:50%;margin-left:-24.5px;bottom:8px;}.${A}-swiper-dots > i{width:4px;height:4px;background-color:#4d4d4d;line-height:3px;border-radius:3px;float:left;margin-left:4.5px;transition: all .5s ease-in;}.${A}-swiper-dots > i.on{width:8px;background-color:#2692ff;}`, document.body.appendChild(e), document.body.appendChild(this.smartDom), document.body.style[n ? 'paddingTop' : 'paddingBottom'] = '66px', this.show(), this.listen();
            }
          } }, { key: 'template',
            value() {
              let t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = this.isHide,
                i = h.os.isIOS ? 15 : 17,
                n = this.options.pageType,
                o = this.options.vid,
                r = d('__ysuid'),
                a = '',
                l = {}; o ? (a = '//ykrec.youku.com/video/packed/list.json', l = { guid: r, uid: '', cate: '', apptype: i, pg: 1, module: 2, pl: 5, req_type: '', sid: '', vid: s(o) }) : (a = '//api.m.youku.com/api/cms/commonBox', l = {}); let u = new w.default(),
                  p = [{ title: this.title, image: this.icon, first_episode_video_id: '', sourceType: `yksmartbanner_${n}`, text: t.exdText || this.text }, { title: 'ã€Šå˜å½¢é‡‘åˆš5:æœ€åŽçš„éª‘å£«ã€‹æ–°ç‰‡æ®µâ€œçƒ­ç ´â€çŽ°èº« å¤§é»„èœ‚é™©è¢«å¦å…‹ç‚®è½°', image: '//r1.ykimg.com/051000005934D871AD9E0707BC0ACD08', first_episode_video_id: '688408419', sourceType: `yksmartbannervideo_${n}`, text: t.exdText || this.text }, { title: 'æ²³å—ï¼šå¹¿åœºèˆžå¤§å¦ˆç¾¤æ®´ç¯®çƒå°ä¼™ åäººå˜è€äº†æˆ‘ä»¬è¯¥æ€Žä¹ˆåŠžï¼Ÿ', image: '//r1.ykimg.com/051000005934D7158B3D0604F403A22F', first_episode_video_id: '699470482', sourceType: `yksmartbannervideo_${n}`, text: t.exdText || this.text }, { title: 'ç½‘çº¢è€å¸ˆå¼ é›ªå³°ï¼šæ•™ä½ è½»æ¾å¡«é«˜è€ƒå¿—æ„¿', image: '//r1.ykimg.com/051000005934D7158B3D0604F403A22F', first_episode_video_id: '695832428', sourceType: `yksmartbannervideo_${n}`, text: t.exdText || this.text }, { title: 'åšäººä¼  ç«å½±å¿è€…æ–°æ—¶ä»£', image: '//r1.ykimg.com/051000005934DB348B3D0505240B19B8', first_episode_video_id: '695258865', sourceType: `yksmartbannervideo_${n}`, text: t.exdText || this.text }],
                  f = document.createElement('div'),
                  m = this; f.setAttribute('id', _), f.setAttribute('style', this.textstyles), f.classList.add(S), f.setAttribute('data-stat-role', 'ck'), u.get(a, l, (i) => {
                    let n = document.createElement('div'),
                      o = document.createElement('div'),
                      r = document.createElement('div'),
                      a = []; n.setAttribute('id', `${_}_swiper`), n.classList.add(`${A}-swiper`), n.setAttribute('data-stat-role', 'ck'), o.setAttribute('id', `${_}_swiper_items`), o.classList.add(`${A}-swiper-items`), o.setAttribute('data-stat-role', 'ck'), r.setAttribute('id', `${_}_swiper_dots`), r.classList.add(`${A}-swiper-dots`), f.appendChild(n), f.appendChild(r); for (let s = 0, l = p.length; s < l; s++) {
                        let u = document.createElement('div'),
                          d = document.createElement('div'),
                          h = document.createElement('div'),
                          v = document.createElement('div'),
                          g = document.createElement('img'),
                          y = document.createElement('span'),
                          w = document.createElement('div'); u.classList.add(`${A}-swiper-item`), u.classList.add(`${A}-swiper-item-${s}`), u.setAttribute('data-stat-role', 'ck'), d.setAttribute('id', `${_}_open`), d.classList.add(`${A}-open`), d.setAttribute('data-stat-role', 'ck'), d.setAttribute('data-spm-click', `gostr=/youkuphoneplaypage.myoukuinteraction.click_h5/;locaid=dopen${s}_${p[s].sourceType};`), d.setAttribute('vid', p[s].first_episode_video_id), d.setAttribute('sourceType', p[s].sourceType), h.setAttribute('id', `${_}_close`), h.classList.add(`${A}-close`), h.classList.add(`${A}-bc`), h.setAttribute('data-stat-role', 'ck'), h.setAttribute('data-spm-click', `gostr=/youkuphoneplaypage.myoukuinteraction.click_h5/;locaid=dclose${s};`), v.classList.add(`${A}-logo`), v.setAttribute('data-stat-role', 'ck'), v.setAttribute('vid', p[s].first_episode_video_id), v.setAttribute('sourceType', p[s].sourceType), g.setAttribute('src', p[s].image), g.classList.add(`${A}-logo-img`), g.setAttribute('vid', p[s].first_episode_video_id), g.setAttribute('sourceType', p[s].sourceType), y.classList.add(`${A}-logo-span`), y.setAttribute('vid', p[s].first_episode_video_id), y.setAttribute('sourceType', p[s].sourceType), T.isFirefox && (p[s].title = p[s].title.slice(0, 28)), y.innerText = c(p[s].title), w.classList.add(`${_}-btn`), w.classList.add(`${A}-btn`), w.setAttribute('vid', p[s].first_episode_video_id), w.setAttribute('sourceType', p[s].sourceType), w.innerText = p[s].text, v.appendChild(g), v.appendChild(y), d.appendChild(v), d.appendChild(w), u.appendChild(h), u.appendChild(d), o.appendChild(u), n.appendChild(o), a.push('<i></i>');
                      }r.innerHTML = a.join(''), r.querySelectorAll('i')[0].setAttribute('class', 'on'), t.pathname === 'play' ? f.setAttribute('data-spm', '2781352') : f.setAttribute('data-spm', '2760427'), e && (f.style.display = 'none'), m.createHtml(t, f.outerHTML);
                  });
            } }, { key: 'show', value(t) { this.iClose || (this.smartDom && (this.smartDom.style.display = 'block'), document.body.style[this.isTop ? 'paddingTop' : 'paddingBottom'] = '66px', this.status = !0, this.mySwipe && (this.mySwipe.setup(), this.mySwipe.next()), t && t() || this.showCB && this.showCB()); } }, { key: 'hide', value(t) { this.iClose || (this.smartDom && (this.smartDom.style.display = 'none'), document.body.style[this.isTop ? 'paddingTop' : 'paddingBottom'] = `${this.bodyOrigPT}px`, this.status = !1, this.mySwipe && this.mySwipe.stop(), t && t() || this.hideCB && this.hideCB()); } }, { key: 'listen',
              value() {
                let t = this,
                  e = this.smartDom,
                  i = e.querySelector(`#${_}_swiper_dots`).querySelectorAll('i'); setTimeout(() => { t.mySwipe = (0, x.default)(e.querySelector(`#${_}_swiper`), { auto: 0, continuous: !0, disableScroll: !1, stopPropagation: !1, callback(t, e) { for (let n = 0, o = i.length; n < o; n++)n == t ? i[n].classList.add('on') : i[n].classList.remove('on'); } }); }, 200), t.addEvents();
              } }, { key: 'addEvents',
                value() {
                  if (!this.iClose) {
                    for (let t = this.smartDom, e = t.querySelectorAll(`.${A}-open`), i = t.querySelectorAll(`.${A}-close`), n = 0, o = e.length; n < o; n++) {
                      e[n].addEventListener('click', (function (t, e) {
                        return function (i) {
                          i.preventDefault(); let n = i.target.getAttribute('vid'),
                            o = i.target.getAttribute('sourceType'); e.redirect(o, n, t);
                        };
                      }(n, this))), i[n].addEventListener('click', (t) => { t.preventDefault(), this.hide(); }, !1);
                    }
                  }
                } }]), e;
    }(v.default)); t.exports = C;
}, function (t, exports) {
  function e(t, e) {
    function i() { m = w.children, y = m.length, m.length < 2 && (e.continuous = !1), h.transitions && e.continuous && m.length < 3 && (w.appendChild(m[0].cloneNode(!0)), w.appendChild(w.children[1].cloneNode(!0)), m = w.children), v = new Array(m.length), g = t.getBoundingClientRect().width || t.offsetWidth, w.style.width = `${m.length * g}px`; for (let i = m.length; i--;) { const n = m[i]; n.style.width = `${g}px`, n.setAttribute('data-index', i), h.transitions && (n.style.left = `${i * -g}px`, s(i, b > i ? -g : b < i ? g : 0, 0)); }e.continuous && h.transitions && (s(r(b - 1), -g, 0), s(r(b + 1), g, 0)), h.transitions || (w.style.left = `${b * -g}px`), t.style.visibility = 'visible'; } function n() { e.continuous ? a(b - 1) : b && a(b - 1); } function o() { e.continuous ? a(b + 1) : b < m.length - 1 && a(b + 1); } function r(t) { return (m.length + t % m.length) % m.length; } function a(t, i) { if (b != t) { if (h.transitions) { let n = Math.abs(b - t) / (b - t); if (e.continuous) { const o = n; n = -v[r(t)] / g, n !== o && (t = -n * m.length + t); } for (let a = Math.abs(b - t) - 1; a--;)s(r((t > b ? t : b) - a - 1), g * n, 0); t = r(t), s(b, g * n, i || x), s(t, 0, i || x), e.continuous && s(r(t - n), -(g * n), 0); } else t = r(t), u(b * -g, t * -g, i || x); b = t, f(e.callback && e.callback(b, m[b])); } } function s(t, e, i) { l(t, e, i), v[t] = e; } function l(t, e, i) {
      let n = m[t],
        o = n && n.style; o && (o.webkitTransitionDuration = o.MozTransitionDuration = o.msTransitionDuration = o.OTransitionDuration = o.transitionDuration = `${i}ms`, o.webkitTransform = `translate(${e}px,0)translateZ(0)`, o.msTransform = o.MozTransform = o.OTransform = `translateX(${e}px)`);
    } function u(t, i, n) {
      if (!n) return void (w.style.left = `${i}px`); var o = +new Date(),
        r = setInterval(() => { const a = +new Date() - o; return a > n ? (w.style.left = `${i}px`, A && d(), e.transitionEnd && e.transitionEnd.call(event, b, m[b]), void clearInterval(r)) : void (w.style.left = `${(i - t) * (Math.floor(a / n * 100) / 100) + t}px`); }, 4);
    } function d() { k = setTimeout(o, A); } function c() { A = e.auto > 0 ? e.auto : 0, clearTimeout(k); } var p = function () {},
      f = function (t) { setTimeout(t || p, 0); },
      h = { addEventListener: !!window.addEventListener, touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch, transitions: (function (t) { const e = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition']; for (const i in e) if (void 0 !== t.style[e[i]]) return !0; return !1; }(document.createElement('swipe'))) }; if (t) {
        var m,
          v,
          g,
          y,
          w = t.children[0]; e = e || {}; var b = parseInt(e.startSlide, 10) || 0,
            x = e.speed || 300; e.continuous = void 0 === e.continuous || e.continuous; var k,
              _,
              A = e.auto || 0,
              S = {},
              O = {},
              T = { handleEvent(t) { switch (t.type) { case 'touchstart':this.start(t); break; case 'touchmove':this.move(t); break; case 'touchend':f(this.end(t)); break; case 'webkitTransitionEnd':case 'msTransitionEnd':case 'oTransitionEnd':case 'otransitionend':case 'transitionend':f(this.transitionEnd(t)); break; case 'resize':f(i); }e.stopPropagation && t.stopPropagation(); },
                start(t) { const e = t.touches[0]; S = { x: e.pageX, y: e.pageY, time: +new Date() }, _ = void 0, O = {}, w.addEventListener('touchmove', this, !1), w.addEventListener('touchend', this, !1); },
                move(t) { if (!(t.touches.length > 1 || t.scale && t.scale !== 1)) { e.disableScroll && t.preventDefault(); const i = t.touches[0]; O = { x: i.pageX - S.x, y: i.pageY - S.y }, typeof _ === 'undefined' && (_ = !!(_ || Math.abs(O.x) < Math.abs(O.y))), _ || (t.preventDefault(), c(), e.continuous ? (l(r(b - 1), O.x + v[r(b - 1)], 0), l(b, O.x + v[b], 0), l(r(b + 1), O.x + v[r(b + 1)], 0)) : (O.x /= (!b && O.x > 0 || b == m.length - 1 && O.x < 0 ? Math.abs(O.x) / g + 1 : 1), l(b - 1, O.x + v[b - 1], 0), l(b, O.x + v[b], 0), l(b + 1, O.x + v[b + 1], 0))); } },
                end(t) {
                  let i = +new Date() - S.time,
                    n = Number(i) < 250 && Math.abs(O.x) > 20 || Math.abs(O.x) > g / 2,
                    o = !b && O.x > 0 || b == m.length - 1 && O.x < 0; e.continuous && (o = !1); const a = O.x < 0; _ || (n && !o ? (a ? (e.continuous ? (s(r(b - 1), -g, 0), s(r(b + 2), g, 0)) : s(b - 1, -g, 0), s(b, v[b] - g, x), s(r(b + 1), v[r(b + 1)] - g, x), b = r(b + 1)) : (e.continuous ? (s(r(b + 1), g, 0), s(r(b - 2), -g, 0)) : s(b + 1, g, 0), s(b, v[b] + g, x), s(r(b - 1), v[r(b - 1)] + g, x), b = r(b - 1)), e.callback && e.callback(b, m[b])) : e.continuous ? (s(r(b - 1), -g, x), s(b, 0, x), s(r(b + 1), g, x)) : (s(b - 1, -g, x), s(b, 0, x), s(b + 1, g, x))), w.removeEventListener('touchmove', T, !1), w.removeEventListener('touchend', T, !1);
                },
                transitionEnd(t) { parseInt(t.target.getAttribute('data-index'), 10) == b && (A && d(), e.transitionEnd && e.transitionEnd.call(t, b, m[b])); } }; return i(), A && d(), h.addEventListener ? (h.touch && w.addEventListener('touchstart', T, !1), h.transitions && (w.addEventListener('webkitTransitionEnd', T, !1), w.addEventListener('msTransitionEnd', T, !1), w.addEventListener('oTransitionEnd', T, !1), w.addEventListener('otransitionend', T, !1), w.addEventListener('transitionend', T, !1)), window.addEventListener('resize', T, !1)) : window.onresize = function () { i(); }, { setup() { i(); }, slide(t, e) { c(), a(t, e); }, prev() { c(), n(); }, next() { c(), o(); }, stop() { c(); }, getPos() { return b; }, getNumSlides() { return y; }, kill() { c(), w.style.width = '', w.style.left = ''; for (let t = m.length; t--;) { const e = m[t]; e.style.width = '', e.style.left = '', h.transitions && l(t, 0, 0); }h.addEventListener ? (w.removeEventListener('touchstart', T, !1), w.removeEventListener('webkitTransitionEnd', T, !1), w.removeEventListener('msTransitionEnd', T, !1), w.removeEventListener('oTransitionEnd', T, !1), w.removeEventListener('otransitionend', T, !1), w.removeEventListener('transitionend', T, !1), window.removeEventListener('resize', T, !1)) : window.onresize = null; } };
      }
  }t.exports = e;
}, function (t, exports, e) {
  function i(t) { return t && t.__esModule ? t : { default: t }; }Object.defineProperty(exports, '__esModule', { value: !0 }); let n,
    o,
    r = e(2),
    a = i(r),
    s = e(7),
    l = i(s),
    u = window.navigator.userAgent,
    d = !1,
    c = '',
    p = '',
    f = ''; (o = u.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (n = o[1]), (o = u.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (d = !0, c = o[1], f = o[2], p = c.indexOf('-PD') > 0 ? l.default.isIOS ? 'iPad' : l.default.isAndroid ? 'AndroidPad' : l.default.name : l.default.name), !c && u.indexOf('TBIOS') > 0 && (c = 'TB'); let h = window._ua_popLayer || '',
      m = !1,
      v = ''; h && (o = h.match(/PopLayer\/([\d\.]+)/i)) && (m = !0, v = o[1]), d && (d = { windvane: new a.default(n || '0.0.0'), appname: c || 'unkown', version: new a.default(f || '0.0.0'), platform: p || l.default.name, poplayer: m || !1, poplayerVersion: new a.default(v || '0.0.0') }), exports.default = d;
}, function (t, exports, e) {
  function i(t) { return t && t.__esModule ? t : { default: t }; }Object.defineProperty(exports, '__esModule', { value: !0 }); let n,
    o,
    r = e(2),
    a = i(r),
    s = window.navigator.userAgent; (o = s.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? n = { name: 'UC', isUC: !0, version: new a.default(o[1]) } : (o = s.match(/MQQBrowser\/([\d\.]+)/)) ? n = { name: 'QQ', isQQ: !0, version: new a.default(o[1]) } : (o = s.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? n = { name: 'Firefox', isFirefox: !0, version: new a.default(o[1]) } : (o = s.match(/MSIE\s([\d\.]+)/)) || (o = s.match(/IEMobile\/([\d\.]+)/)) ? (n = { version: new a.default(o[1]) }, s.match(/IEMobile/) ? (n.name = 'IEMobile', n.isIEMobile = !0) : (n.name = 'IE', n.isIE = !0), s.match(/Android|iPhone/) && (n.isIELikeWebkit = !0)) : (o = s.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (n = { name: 'Chrome', isChrome: !0, version: new a.default(o[1]) }, s.match(/Version\/[\d+\.]+\s*Chrome/) && (n.name = 'Chrome Webview', n.isWebview = !0)) : s.match(/Safari/) && (o = s.match(/Android[\s\/]([\d\.]+)/)) ? n = { name: 'Android', isAndroid: !0, version: new a.default(o[1]) } : s.match(/iPhone|iPad|iPod/) && (s.match(/Safari/) && (o = s.match(/Version\/([\d\.]+)/)) ? n = { name: 'Safari', isSafari: !0, version: new a.default(o[1]) } : (o = s.match(/OS ([\d_\.]+) like Mac OS X/)) && (n = { name: 'iOS Webview', isWebview: !0, version: new a.default(o[1].replace(/\_/g, '.')) })), n || (n = { name: 'unknown', version: new a.default('0.0.0') }), exports.default = n;
}, function (t, exports) {
  Object.defineProperty(exports, '__esModule', { value: !0 }); let e = {},
    i = window.location.search.replace(/^\?/, ''); if (i) for (let n = i.split('&'), o = 0; o < n.length; o++) { n[o] = n[o].split('='); try { e[n[o][0]] = decodeURIComponent(n[o][1]); } catch (r) { e[n[o][0]] = n[o][1]; } }exports.default = e;
}, function (t, exports) {
  Object.defineProperty(exports, '__esModule', { value: !0 }); let e,
    i = window.navigator.userAgent; e = i.match(/Weibo/i) ? { appname: 'Weibo', isWeibo: !0 } : !!i.match(/MicroMessenger/i) && { appname: 'Weixin', isWeixin: !0 }, exports.default = e;
}, function (t, exports, e) {
  function i(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const i in t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e; } function n(t) { return t && t.__esModule ? t : { default: t }; } function o() {
    a(() => {
      let t = '',
        e = ''; try { t = document.querySelector('#yksmartbanner').getAttribute('pageType'), e = document.querySelector('#yksmartbanner').getAttribute('isHidden'); } catch (i) { console.error('script æ ‡ç­¾idè§£æžé”™è¯¯'); } if (e === 'true') return null; t || console.error('script æ ‡ç­¾æ— æ³•è§£æžpageType'); const n = (0, v.default)(window.ykSmartbannerConfig); if (n.denyRedirect || /youku/i.test(S)) return null; const o = new c.default(window.location.href); if (o.params.sb == 0) return null; const a = (0, h.default)(window.smartbannerJSON, t); t === 'player' && (0, k.default)(a); try {
          let s = '//api.m.youku.com/api/callapp/isCallappByIp',
            l = new A.default(); window.xparamsString ? window.is34Online = window.xparamsString.isLine34 : l.get(s, {}, (t) => { t.code == 1e4 && t.data.state && (window.is34Online = !0); });
        } catch (i) { console.error('34line ajax è°ƒç”¨å‡ºé”™'); } const u = new y.default(a); window.smartbannerUI = {}, window.smartbannerUI.bannerInstance = u, r(u);
    });
  } function r(t) { const e = (0, b.default)(window.ykSmartbannerConfig); if (e.isShow || t && t.hide(), e.isInvoke)t && t.redirect(); else if (e.isInvokeDay && !u('ykb_cloudDate')) { t && t.redirect(); try { localStorage.ykb_cloudDate = Date.now(); } catch (i) { console.log(i); } } } function a(t) { var e = setInterval(() => { window.smartbannerJSON && (O = !0), window.ykSmartbannerConfig && (T = !0), O && T && (clearInterval(e), t()); }, 100); } function s() {
    let t = `//m.youku.com/video/libs/sb/smartbannerText.js?_t=${(new Date()).getTime()}`,
      e = document.createElement('script'); return e.src = t, e.onload = function () { O = !0; }, document.body.appendChild(e), e;
  } function l() {
    let t = `//m.youku.com/video/libs/sb/smartbannerConfig.js?_t=${(new Date()).getTime()}`,
      e = document.createElement('script'); return e.src = t, e.onload = function () { T = !0; }, document.body.appendChild(e), e;
  } function u(t) {
    let e = window.localStorage,
      i = void 0,
      n = void 0,
      o = void 0; if (e) return i = e[t], n = !1, i && (i = parseInt(i, 10), o = new Date(), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0), i > o && (n = !0)), n;
  } var d = e(3),
    c = n(d),
    p = e(1),
    f = (i(p), e(9)),
    h = n(f),
    m = e(5),
    v = n(m),
    g = e(13),
    y = n(g),
    w = e(10),
    b = n(w),
    x = e(11),
    k = n(x),
    _ = e(6),
    A = n(_),
    S = window.navigator.userAgent,
    O = !1,
    T = !1; !(function () { window.smartbannerJSON || s(), window.ykSmartbannerConfig || l(); }()), o();
}]));
// # sourceMappingURL=yksmartbanner.min.js.map
window.smartbannerJSON = {
  page: [{
    pageType: 'player', // 椤甸潰绫诲瀷,濡傞椤点€佹垜鐨勬窐瀹濈瓑锛屾牴鎹笉鍚岀被鍨嬭繘琛岄厤缃�
    config: [{
      text: '鎵撳紑',
      textColor: '#000',
      textBgcolor: '#fff',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '44',
      title: '浼橀叿棣栨挱楣挎櫁鑽у睆棣栫楂樻竻鑺辩摚娴�',
      type: 'default',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      uriDownload: 'http://down2.uc.cn/youku/down.php?pub=422424cdf1d987b3',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '#000',
      textBgcolor: '#fff',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '44',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: 'default',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      on: '1', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '',
      textBgcolor: '',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'bottom',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: 'fresh',
      uaReg: '',
      url: '//m.youku.com/html/download.html',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '#fff',
      textBgcolor: '#1b1a1f',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '浼橀叿棣栨挱楣挎櫁鑽у睆棣栫楂樻竻鑺辩摚娴�',
      type: '',
      uaReg: 'MicroMessenger|Weibo|movie',
      url: '//m.youku.com/html/download.html',
      uriDownload: 'http://down2.uc.cn/youku/down.php?pub=422424cdf1d987b3',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '#fff',
      textBgcolor: '#1b1a1f',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: '',
      uaReg: 'MicroMessenger|Weibo|movie',
      url: '//m.youku.com/html/download.html',
      on: '1', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      exdText: '鎵撳紑',
      textColor: '#000',
      textBgcolor: '#fff',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '44',
      title: '鐧界櫨浣曞嚭杞ㄤ紭閰风嫭瀹惰棰戠垎鏂�',
      type: 'baoliao',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      exdUrl: '//ent.youku.com/chugui/?refer=smb',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      exdText: '鎵撳紑',
      textColor: '#fff',
      textBgcolor: '#1b1a1f',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '鐧界櫨浣曞嚭杞ㄤ紭閰风嫭瀹惰棰戠垎鏂�',
      type: '',
      uaReg: 'MicroMessenger|Weibo|movie',
      url: '//m.youku.com/html/download.html',
      exdUrl: '//ent.youku.com/chugui/?refer=smb',
      on: '0', // 鏄惁寮€鍚�
    }],
  },
  {
    pageType: 'index', // 椤甸潰绫诲瀷,濡傞椤点€佹垜鐨勬窐瀹濈瓑锛屾牴鎹笉鍚岀被鍨嬭繘琛岄厤缃�
    config: [{
      text: '鎵撳紑',
      textColor: '',
      textBgcolor: '',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'bottom',
      title: '浼橀叿棣栨挱楣挎櫁鑽у睆棣栫楂樻竻鑺辩摚娴�',
      type: 'default',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      uriDownload: 'http://down2.uc.cn/youku/down.php?pub=422424cdf1d987b3',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '',
      textBgcolor: '',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'bottom',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: 'default',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      on: '1', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '',
      textBgcolor: '',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'bottom',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: 'fresh',
      uaReg: '',
      url: '//m.youku.com/html/download.html',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      exdText: '鎵撳紑',
      textColor: '',
      textBgcolor: '',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'bottom',
      title: '鐧界櫨浣曞嚭杞ㄤ紭閰风嫭瀹惰棰戠垎鏂�',
      type: 'baoliao',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      exdUrl: '//ent.youku.com/chugui/?refer=smb',
      on: '0', // 鏄惁寮€鍚�
    }],
  },
  {
    pageType: 'tdplayer', // 鍦熻眴瀵兼祦
    config: [{
      text: '鎵撳紑',
      textColor: '#000',
      textBgcolor: '#fff',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '浼橀叿棣栨挱楣挎櫁鑽у睆棣栫楂樻竻鑺辩摚娴�',
      type: 'default',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      uriDownload: 'http://down2.uc.cn/youku/down.php?pub=422424cdf1d987b3',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '#000',
      textBgcolor: '#fff',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: 'default',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      on: '1', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '#fff',
      textBgcolor: '#1b1a1f',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '浼橀叿棣栨挱楣挎櫁鑽у睆棣栫楂樻竻鑺辩摚娴�',
      type: '',
      uaReg: 'MicroMessenger|Weibo|movie',
      url: '//m.youku.com/html/download.html',
      uriDownload: 'http://down2.uc.cn/youku/down.php?pub=422424cdf1d987b3',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      textColor: '#fff',
      textBgcolor: '#1b1a1f',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '鎵撳紑浼橀叿APP锛屾彁鍗�3鍊嶆祦鐣呭害',
      type: '',
      uaReg: 'MicroMessenger|Weibo|movie',
      url: '//m.youku.com/html/download.html',
      on: '1', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      exdText: '鎵撳紑',
      textColor: '#000',
      textBgcolor: '#fff',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '鐧界櫨浣曞嚭杞ㄤ紭閰风嫭瀹惰棰戠垎鏂�',
      type: 'baoliao',
      uaReg: '', // ua鐗规畩澶勭悊
      url: '//m.youku.com/html/download.html',
      exdUrl: '//ent.youku.com/chugui/?refer=smb',
      on: '0', // 鏄惁寮€鍚�
    }, {
      text: '鎵撳紑',
      exdText: '鎵撳紑',
      textColor: '#fff',
      textBgcolor: '#1b1a1f',
      titleColor: '',
      titleBgcolor: '',
      icon: '',
      position: 'top',
      top: '0',
      title: '鐧界櫨浣曞嚭杞ㄤ紭閰风嫭瀹惰棰戠垎鏂�',
      type: '',
      uaReg: 'MicroMessenger|Weibo|movie',
      url: '//m.youku.com/html/download.html',
      exdUrl: '//ent.youku.com/chugui/?refer=smb',
      on: '0', // 鏄惁寮€鍚�
    }],
  },
  ],
};
window.ykSmartbannerConfig = {
  show_black_ua: 'AlipayClient',
  show_white_ua: '',
  invokeConfig: [
    {
      uaReg: '',
      config: '010',
      type: 'default',
    },
        { uaReg: '', config: '111' },
        { uaReg: '', config: '111' },
        { uaReg: '', config: '111' }],
};
