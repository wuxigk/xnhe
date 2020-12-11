!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "./",
    t(t.s = 9)
}([function(e, t) {
    e.exports = React
}
, function(e, t) {
    e.exports = Reactstrap
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (c === setTimeout)
            return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout)
            return c = setTimeout,
            setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }
    function a(e) {
        if (f === clearTimeout)
            return clearTimeout(e);
        if ((f === r || !f) && clearTimeout)
            return f = clearTimeout,
            clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }
    function i() {
        m && p && (m = !1,
        p.length ? h = p.concat(h) : y = -1,
        h.length && u())
    }
    function u() {
        if (!m) {
            var e = o(i);
            m = !0;
            for (var t = h.length; t; ) {
                for (p = h,
                h = []; ++y < t; )
                    p && p[y].run();
                y = -1,
                t = h.length
            }
            p = null,
            m = !1,
            a(e)
        }
    }
    function l(e, t) {
        this.fun = e,
        this.array = t
    }
    function s() {}
    var c, f, d = e.exports = {};
    !function() {
        try {
            c = "function" === typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            f = "function" === typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            f = r
        }
    }();
    var p, h = [], m = !1, y = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        h.push(new l(e,t)),
        1 !== h.length || m || o(u)
    }
    ,
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    d.title = "browser",
    d.browser = !0,
    d.env = {},
    d.argv = [],
    d.version = "",
    d.versions = {},
    d.on = s,
    d.addListener = s,
    d.once = s,
    d.off = s,
    d.removeListener = s,
    d.removeAllListeners = s,
    d.emit = s,
    d.prependListener = s,
    d.prependOnceListener = s,
    d.listeners = function(e) {
        return []
    }
    ,
    d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    d.cwd = function() {
        return "/"
    }
    ,
    d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    d.umask = function() {
        return 0
    }
}
, function(e, t) {
    e.exports = ReactRouterDOM
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , a = function() {
        function e() {
            r(this, e),
            this.db = {}
        }
        return o(e, [{
            key: "setItem",
            value: function(e, t) {
                Object.assign(this.db, t)
            }
        }, {
            key: "getItem",
            value: function(e) {
                return this.db[e] || null
            }
        }, {
            key: "removeItem",
            value: function(e) {
                delete this.db[e]
            }
        }]),
        e
    }()
      , i = window.localStorage ? window.localStorage : new a;
    t.default = i
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return function() {
            return e
        }
    }
    var o = function() {};
    o.thatReturns = r,
    o.thatReturnsFalse = r(!1),
    o.thatReturnsTrue = r(!0),
    o.thatReturnsNull = r(null),
    o.thatReturnsThis = function() {
        return this
    }
    ,
    o.thatReturnsArgument = function(e) {
        return e
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e, t, n, o, a, i, u, l) {
            if (r(t),
            !e) {
                var s;
                if (void 0 === t)
                    s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [n, o, a, i, u, l]
                      , f = 0;
                    s = new Error(t.replace(/%s/g, function() {
                        return c[f++]
                    })),
                    s.name = "Invariant Violation"
                }
                throw s.framesToPop = 1,
                s
            }
        }
        var r = function(e) {};
        "production" !== t.env.NODE_ENV && (r = function(e) {
            if (void 0 === e)
                throw new Error("invariant requires an error message argument")
        }
        ),
        e.exports = n
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(5)
          , o = r;
        if ("production" !== t.env.NODE_ENV) {
            var a = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                var o = 0
                  , a = "Warning: " + e.replace(/%s/g, function() {
                    return n[o++]
                });
                "undefined" !== typeof console && console.error(a);
                try {
                    throw new Error(a)
                } catch (e) {}
            };
            o = function(e, t) {
                if (void 0 === t)
                    throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                if (0 !== t.indexOf("Failed Composite propType: ") && !e) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                        r[o - 2] = arguments[o];
                    a.apply(void 0, [t].concat(r))
                }
            }
        }
        e.exports = o
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    "use strict";
    n(10),
    n(34)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function i(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(0)
      , s = r(l)
      , c = n(11)
      , f = r(c)
      , d = n(12)
      , p = (r(d),
    n(3))
      , h = n(1)
      , m = n(4)
      , y = r(m)
      , v = n(13)
      , g = r(v)
      , b = n(14)
      , w = r(b)
      , E = n(33)
      , O = r(E)
      , _ = function(e) {
        return e.simple ? s.default.createElement("style", null, ".card-header {\n              display: none;\n            }\n            .card-body {\n              padding: 0.6rem;\n            }\n            .card {\n              margin-bottom: 0.2rem;\n            }\n            .navbar-all {\n              display: none;\n            }\n            hr {\n              margin-top: 0.2rem;\n              margin-bottom: 0.5rem;\n            }") : s.default.createElement("style", null, ".navbar-simple{\n             display: none;\n             }\n             .card{\n              margin-bottom:1rem;\n             }")
    };
    Date.prototype.toLocaleDateString = function() {
        return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate()
    }
    ,
    Date.prototype.toLocaleTimeString = function() {
        return this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds()
    }
    ;
    var x = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                night: parseInt(y.default.getItem("night")) || 0,
                simple: parseInt(y.default.getItem("simple")) || 0,
                display: "none"
            },
            n.updateMode = n.updateMode.bind(n),
            n.styleMap = ["https://cdn.bootcss.com/bootswatch/4.0.0/minty/bootstrap.min.css", "https://cdn.bootcss.com/bootswatch/4.0.0/flatly/bootstrap.min.css", "https://cdn.bootcss.com/bootswatch/4.0.0/darkly/bootstrap.min.css", "https://cdn.bootcss.com/bootswatch/4.0.0/sketchy/bootstrap.min.css"],
            n
        }
        return i(t, e),
        u(t, [{
            key: "updateMode",
            value: function() {
                this.setState({
                    night: parseInt(y.default.getItem("night")) || 0,
                    simple: parseInt(y.default.getItem("simple")) || 0
                })
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement(p.HashRouter, null, s.default.createElement("div", null, s.default.createElement("link", {
                    onLoad: this.show,
                    href: this.styleMap[this.state.night],
                    rel: "stylesheet"
                }), s.default.createElement(_, {
                    simple: this.state.simple
                }), s.default.createElement(h.Container, {
                    className: "height-100",
                    fluid: !0
                }, s.default.createElement(h.Row, {
                    className: "height-100"
                }, s.default.createElement(h.Col, {
                    className: "height-100",
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: {
                        size: 6,
                        offset: 3
                    }
                }, s.default.createElement(g.default, null), s.default.createElement(w.default, null)), s.default.createElement(h.Col, {
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 3
                }, s.default.createElement(O.default, null))))))
            }
        }]),
        t
    }(l.Component)
      , S = f.default.render(s.default.createElement(x, null), document.getElementById("root"));
    window.forceUpdate = function() {
        S.updateMode()
    }
}
, function(e, t) {
    e.exports = ReactDOM
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function a(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , u = n(0)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u)
      , s = function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        i(t, [{
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "App"
                }, l.default.createElement("header", {
                    className: "App-header"
                }, l.default.createElement("h1", {
                    className: "App-title"
                }, "Welcome to React")), l.default.createElement("p", {
                    className: "App-intro"
                }, "To get started, edit ", l.default.createElement("code", null, " src / App.js "), " and save to reload."))
            }
        }]),
        t
    }(u.Component);
    t.default = s
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function a(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , u = n(0)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u)
      , s = n(1)
      , c = n(3)
      , f = function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        i(t, [{
            key: "render",
            value: function() {
                return l.default.createElement(s.Card, {
                    className: "navbar-simple"
                }, l.default.createElement(s.CardBody, null, l.default.createElement(c.NavLink, {
                    exact: !0,
                    className: "btn btn-outline-primary btn-sm",
                    activeClassName: "disabled",
                    to: "/"
                }, "\u6253\u5b57"), " ", " ", l.default.createElement(c.NavLink, {
                    exact: !0,
                    className: "btn btn-outline-primary btn-sm",
                    activeClassName: "disabled",
                    to: "/grade"
                }, "\u6210\u7ee9"), " ", l.default.createElement(c.NavLink, {
                    exact: !0,
                    className: "btn btn-outline-primary btn-sm",
                    activeClassName: "disabled",
                    to: "/config"
                }, "\u8bbe\u7f6e"), " ", l.default.createElement(c.NavLink, {
                    exact: !0,
                    className: "btn btn-outline-primary btn-sm",
                    activeClassName: "disabled",
                    to: "/help"
                }, "\u5173\u4e8e"), " ", l.default.createElement("a", {
                    className: "btn btn-outline-primary btn-sm",
                    href: "http://www.flypy.com/"
                }, "\u5c0f\u9e64\u53cc\u62fc")))
            }
        }]),
        t
    }(u.Component);
    t.default = f
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function i(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(0)
      , s = r(l)
      , c = n(15)
      , f = r(c)
      , d = n(27)
      , p = r(d)
      , h = n(29)
      , m = r(h)
      , y = n(31)
      , v = r(y)
      , g = n(32)
      , b = r(g)
      , w = function(e) {
        function t() {
            return o(this, t),
            a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return i(t, e),
        u(t, [{
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: "height-100"
                }, s.default.createElement(f.default, {
                    exact: !0,
                    path: "/",
                    component: p.default
                }), s.default.createElement(f.default, {
                    exact: !0,
                    path: "/grade",
                    component: m.default
                }), s.default.createElement(f.default, {
                    exact: !0,
                    path: "/config",
                    component: v.default
                }), s.default.createElement(f.default, {
                    exact: !0,
                    path: "/help",
                    component: b.default
                }))
            }
        }]),
        t
    }(l.Component);
    t.default = w
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(16)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r);
    t.default = o.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function i(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.__esModule = !0;
    var u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , l = n(17)
      , s = r(l)
      , c = n(18)
      , f = r(c)
      , d = n(0)
      , p = r(d)
      , h = n(19)
      , m = r(h)
      , y = n(24)
      , v = r(y)
      , g = function(e) {
        return 0 === p.default.Children.count(e)
    }
      , b = function(e) {
        function t() {
            var n, r, i;
            o(this, t);
            for (var u = arguments.length, l = Array(u), s = 0; s < u; s++)
                l[s] = arguments[s];
            return n = r = a(this, e.call.apply(e, [this].concat(l))),
            r.state = {
                match: r.computeMatch(r.props, r.context.router)
            },
            i = n,
            a(r, i)
        }
        return i(t, e),
        t.prototype.getChildContext = function() {
            return {
                router: u({}, this.context.router, {
                    route: {
                        location: this.props.location || this.context.router.route.location,
                        match: this.state.match
                    }
                })
            }
        }
        ,
        t.prototype.computeMatch = function(e, t) {
            var n = e.computedMatch
              , r = e.location
              , o = e.path
              , a = e.strict
              , i = e.exact
              , u = e.sensitive;
            if (n)
                return n;
            (0,
            f.default)(t, "You should not use <Route> or withRouter() outside a <Router>");
            var l = t.route
              , s = (r || l.location).pathname;
            return o ? (0,
            v.default)(s, {
                path: o,
                strict: a,
                exact: i,
                sensitive: u
            }) : l.match
        }
        ,
        t.prototype.componentWillMount = function() {
            (0,
            s.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),
            (0,
            s.default)(!(this.props.component && this.props.children && !g(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),
            (0,
            s.default)(!(this.props.render && this.props.children && !g(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")
        }
        ,
        t.prototype.componentWillReceiveProps = function(e, t) {
            (0,
            s.default)(!(e.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),
            (0,
            s.default)(!(!e.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),
            this.setState({
                match: this.computeMatch(e, t.router)
            })
        }
        ,
        t.prototype.render = function() {
            var e = this.state.match
              , t = this.props
              , n = t.children
              , r = t.component
              , o = t.render
              , a = this.context.router
              , i = a.history
              , u = a.route
              , l = a.staticContext
              , s = this.props.location || u.location
              , c = {
                match: e,
                location: s,
                history: i,
                staticContext: l
            };
            return r ? e ? p.default.createElement(r, c) : null : o ? e ? o(c) : null : n ? "function" === typeof n ? n(c) : g(n) ? null : p.default.Children.only(n) : null
        }
        ,
        t
    }(p.default.Component);
    b.propTypes = {
        computedMatch: m.default.object,
        path: m.default.string,
        exact: m.default.bool,
        strict: m.default.bool,
        sensitive: m.default.bool,
        component: m.default.func,
        render: m.default.func,
        children: m.default.oneOfType([m.default.func, m.default.node]),
        location: m.default.object
    },
    b.contextTypes = {
        router: m.default.shape({
            history: m.default.object.isRequired,
            route: m.default.object.isRequired,
            staticContext: m.default.object
        })
    },
    b.childContextTypes = {
        router: m.default.object.isRequired
    },
    t.default = b
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var n = function() {};
        "production" !== t.env.NODE_ENV && (n = function(e, t, n) {
            var r = arguments.length;
            n = new Array(r > 2 ? r - 2 : 0);
            for (var o = 2; o < r; o++)
                n[o - 2] = arguments[o];
            if (void 0 === t)
                throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
            if (t.length < 10 || /^[s\W]*$/.test(t))
                throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + t);
            if (!e) {
                var a = 0
                  , i = "Warning: " + t.replace(/%s/g, function() {
                    return n[a++]
                });
                "undefined" !== typeof console && console.error(i);
                try {
                    throw new Error(i)
                } catch (e) {}
            }
        }
        ),
        e.exports = n
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var n = function(e, n, r, o, a, i, u, l) {
            if ("production" !== t.env.NODE_ENV && void 0 === n)
                throw new Error("invariant requires an error message argument");
            if (!e) {
                var s;
                if (void 0 === n)
                    s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [r, o, a, i, u, l]
                      , f = 0;
                    s = new Error(n.replace(/%s/g, function() {
                        return c[f++]
                    })),
                    s.name = "Invariant Violation"
                }
                throw s.framesToPop = 1,
                s
            }
        };
        e.exports = n
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    (function(t) {
        if ("production" !== t.env.NODE_ENV) {
            var r = "function" === typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
              , o = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            };
            e.exports = n(20)(o, !0)
        } else
            e.exports = n(23)()
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(5)
          , o = n(6)
          , a = n(8)
          , i = n(21)
          , u = n(7)
          , l = n(22);
        e.exports = function(e, n) {
            function s(e) {
                var t = e && (I && e[I] || e[j]);
                if ("function" === typeof t)
                    return t
            }
            function c(e, t) {
                return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
            }
            function f(e) {
                this.message = e,
                this.stack = ""
            }
            function d(e) {
                function r(r, s, c, d, p, h, m) {
                    if (d = d || T,
                    h = h || c,
                    m !== u)
                        if (n)
                            o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        else if ("production" !== t.env.NODE_ENV && "undefined" !== typeof console) {
                            var y = d + ":" + c;
                            !i[y] && l < 3 && (a(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", h, d),
                            i[y] = !0,
                            l++)
                        }
                    return null == s[c] ? r ? new f(null === s[c] ? "The " + p + " `" + h + "` is marked as required in `" + d + "`, but its value is `null`." : "The " + p + " `" + h + "` is marked as required in `" + d + "`, but its value is `undefined`.") : null : e(s, c, d, p, h)
                }
                if ("production" !== t.env.NODE_ENV)
                    var i = {}
                      , l = 0;
                var s = r.bind(null, !1);
                return s.isRequired = r.bind(null, !0),
                s
            }
            function p(e) {
                function t(t, n, r, o, a, i) {
                    var u = t[n];
                    if (_(u) !== e)
                        return new f("Invalid " + o + " `" + a + "` of type `" + x(u) + "` supplied to `" + r + "`, expected `" + e + "`.");
                    return null
                }
                return d(t)
            }
            function h(e) {
                function t(t, n, r, o, a) {
                    if ("function" !== typeof e)
                        return new f("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var i = t[n];
                    if (!Array.isArray(i)) {
                        return new f("Invalid " + o + " `" + a + "` of type `" + _(i) + "` supplied to `" + r + "`, expected an array.")
                    }
                    for (var l = 0; l < i.length; l++) {
                        var s = e(i, l, r, o, a + "[" + l + "]", u);
                        if (s instanceof Error)
                            return s
                    }
                    return null
                }
                return d(t)
            }
            function m(e) {
                function t(t, n, r, o, a) {
                    if (!(t[n]instanceof e)) {
                        var i = e.name || T;
                        return new f("Invalid " + o + " `" + a + "` of type `" + k(t[n]) + "` supplied to `" + r + "`, expected instance of `" + i + "`.")
                    }
                    return null
                }
                return d(t)
            }
            function y(e) {
                function n(t, n, r, o, a) {
                    for (var i = t[n], u = 0; u < e.length; u++)
                        if (c(i, e[u]))
                            return null;
                    return new f("Invalid " + o + " `" + a + "` of value `" + i + "` supplied to `" + r + "`, expected one of " + JSON.stringify(e) + ".")
                }
                return Array.isArray(e) ? d(n) : ("production" !== t.env.NODE_ENV && a(!1, "Invalid argument supplied to oneOf, expected an instance of array."),
                r.thatReturnsNull)
            }
            function v(e) {
                function t(t, n, r, o, a) {
                    if ("function" !== typeof e)
                        return new f("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var i = t[n]
                      , l = _(i);
                    if ("object" !== l)
                        return new f("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected an object.");
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var c = e(i, s, r, o, a + "." + s, u);
                            if (c instanceof Error)
                                return c
                        }
                    return null
                }
                return d(t)
            }
            function g(e) {
                function n(t, n, r, o, a) {
                    for (var i = 0; i < e.length; i++) {
                        if (null == (0,
                        e[i])(t, n, r, o, a, u))
                            return null
                    }
                    return new f("Invalid " + o + " `" + a + "` supplied to `" + r + "`.")
                }
                if (!Array.isArray(e))
                    return "production" !== t.env.NODE_ENV && a(!1, "Invalid argument supplied to oneOfType, expected an instance of array."),
                    r.thatReturnsNull;
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    if ("function" !== typeof i)
                        return a(!1, "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.", S(i), o),
                        r.thatReturnsNull
                }
                return d(n)
            }
            function b(e) {
                function t(t, n, r, o, a) {
                    var i = t[n]
                      , l = _(i);
                    if ("object" !== l)
                        return new f("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.");
                    for (var s in e) {
                        var c = e[s];
                        if (c) {
                            var d = c(i, s, r, o, a + "." + s, u);
                            if (d)
                                return d
                        }
                    }
                    return null
                }
                return d(t)
            }
            function w(e) {
                function t(t, n, r, o, a) {
                    var l = t[n]
                      , s = _(l);
                    if ("object" !== s)
                        return new f("Invalid " + o + " `" + a + "` of type `" + s + "` supplied to `" + r + "`, expected `object`.");
                    var c = i({}, t[n], e);
                    for (var d in c) {
                        var p = e[d];
                        if (!p)
                            return new f("Invalid " + o + " `" + a + "` key `" + d + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                        var h = p(l, d, r, o, a + "." + d, u);
                        if (h)
                            return h
                    }
                    return null
                }
                return d(t)
            }
            function E(t) {
                switch (typeof t) {
                case "number":
                case "string":
                case "undefined":
                    return !0;
                case "boolean":
                    return !t;
                case "object":
                    if (Array.isArray(t))
                        return t.every(E);
                    if (null === t || e(t))
                        return !0;
                    var n = s(t);
                    if (!n)
                        return !1;
                    var r, o = n.call(t);
                    if (n !== t.entries) {
                        for (; !(r = o.next()).done; )
                            if (!E(r.value))
                                return !1
                    } else
                        for (; !(r = o.next()).done; ) {
                            var a = r.value;
                            if (a && !E(a[1]))
                                return !1
                        }
                    return !0;
                default:
                    return !1
                }
            }
            function O(e, t) {
                return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" === typeof Symbol && t instanceof Symbol)
            }
            function _(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : O(t, e) ? "symbol" : t
            }
            function x(e) {
                if ("undefined" === typeof e || null === e)
                    return "" + e;
                var t = _(e);
                if ("object" === t) {
                    if (e instanceof Date)
                        return "date";
                    if (e instanceof RegExp)
                        return "regexp"
                }
                return t
            }
            function S(e) {
                var t = x(e);
                switch (t) {
                case "array":
                case "object":
                    return "an " + t;
                case "boolean":
                case "date":
                case "regexp":
                    return "a " + t;
                default:
                    return t
                }
            }
            function k(e) {
                return e.constructor && e.constructor.name ? e.constructor.name : T
            }
            var I = "function" === typeof Symbol && Symbol.iterator
              , j = "@@iterator"
              , T = "<<anonymous>>"
              , C = {
                array: p("array"),
                bool: p("boolean"),
                func: p("function"),
                number: p("number"),
                object: p("object"),
                string: p("string"),
                symbol: p("symbol"),
                any: function() {
                    return d(r.thatReturnsNull)
                }(),
                arrayOf: h,
                element: function() {
                    function t(t, n, r, o, a) {
                        var i = t[n];
                        if (!e(i)) {
                            return new f("Invalid " + o + " `" + a + "` of type `" + _(i) + "` supplied to `" + r + "`, expected a single ReactElement.")
                        }
                        return null
                    }
                    return d(t)
                }(),
                instanceOf: m,
                node: function() {
                    function e(e, t, n, r, o) {
                        return E(e[t]) ? null : new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.")
                    }
                    return d(e)
                }(),
                objectOf: v,
                oneOf: y,
                oneOfType: g,
                shape: b,
                exact: w
            };
            return f.prototype = Error.prototype,
            C.checkPropTypes = l,
            C.PropTypes = C,
            C
        }
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if (null === e || void 0 === e)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    var o = Object.getOwnPropertySymbols
      , a = Object.prototype.hasOwnProperty
      , i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de",
            "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            }).join(""))
                return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, u, l = r(e), s = 1; s < arguments.length; s++) {
            n = Object(arguments[s]);
            for (var c in n)
                a.call(n, c) && (l[c] = n[c]);
            if (o) {
                u = o(n);
                for (var f = 0; f < u.length; f++)
                    i.call(n, u[f]) && (l[u[f]] = n[u[f]])
            }
        }
        return l
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function r(e, n, r, l, s) {
            if ("production" !== t.env.NODE_ENV)
                for (var c in e)
                    if (e.hasOwnProperty(c)) {
                        var f;
                        try {
                            o("function" === typeof e[c], "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", l || "React class", r, c, typeof e[c]),
                            f = e[c](n, c, l, r, null, i)
                        } catch (e) {
                            f = e
                        }
                        if (a(!f || f instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", r, c, typeof f),
                        f instanceof Error && !(f.message in u)) {
                            u[f.message] = !0;
                            var d = s ? s() : "";
                            a(!1, "Failed %s type: %s%s", r, f.message, null != d ? d : "")
                        }
                    }
        }
        if ("production" !== t.env.NODE_ENV)
            var o = n(6)
              , a = n(8)
              , i = n(7)
              , u = {};
        e.exports = r
    }
    ).call(t, n(2))
}
, function(e, t, n) {
    "use strict";
    var r = n(5)
      , o = n(6)
      , a = n(7);
    e.exports = function() {
        function e(e, t, n, r, i, u) {
            u !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }
        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = r,
        n.PropTypes = n,
        n
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(25)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , a = {}
      , i = 0
      , u = function(e, t) {
        var n = "" + t.end + t.strict + t.sensitive
          , r = a[n] || (a[n] = {});
        if (r[e])
            return r[e];
        var u = []
          , l = (0,
        o.default)(e, u, t)
          , s = {
            re: l,
            keys: u
        };
        return i < 1e4 && (r[e] = s,
        i++),
        s
    }
      , l = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" === typeof t && (t = {
            path: t
        });
        var n = t
          , r = n.path
          , o = void 0 === r ? "/" : r
          , a = n.exact
          , i = void 0 !== a && a
          , l = n.strict
          , s = void 0 !== l && l
          , c = n.sensitive
          , f = void 0 !== c && c
          , d = u(o, {
            end: i,
            strict: s,
            sensitive: f
        })
          , p = d.re
          , h = d.keys
          , m = p.exec(e);
        if (!m)
            return null;
        var y = m[0]
          , v = m.slice(1)
          , g = e === y;
        return i && !g ? null : {
            path: o,
            url: "/" === o && "" === y ? "/" : y,
            isExact: g,
            params: h.reduce(function(e, t, n) {
                return e[t.name] = v[n],
                e
            }, {})
        }
    };
    t.default = l
}
, function(e, t, n) {
    function r(e, t) {
        for (var n, r = [], o = 0, a = 0, i = "", u = t && t.delimiter || "/"; null != (n = g.exec(e)); ) {
            var c = n[0]
              , f = n[1]
              , d = n.index;
            if (i += e.slice(a, d),
            a = d + c.length,
            f)
                i += f[1];
            else {
                var p = e[a]
                  , h = n[2]
                  , m = n[3]
                  , y = n[4]
                  , v = n[5]
                  , b = n[6]
                  , w = n[7];
                i && (r.push(i),
                i = "");
                var E = null != h && null != p && p !== h
                  , O = "+" === b || "*" === b
                  , _ = "?" === b || "*" === b
                  , x = n[2] || u
                  , S = y || v;
                r.push({
                    name: m || o++,
                    prefix: h || "",
                    delimiter: x,
                    optional: _,
                    repeat: O,
                    partial: E,
                    asterisk: !!w,
                    pattern: S ? s(S) : w ? ".*" : "[^" + l(x) + "]+?"
                })
            }
        }
        return a < e.length && (i += e.substr(a)),
        i && r.push(i),
        r
    }
    function o(e, t) {
        return u(r(e, t))
    }
    function a(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    function i(e) {
        return encodeURI(e).replace(/[?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    function u(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++)
            "object" === typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
        return function(n, r) {
            for (var o = "", u = n || {}, l = r || {}, s = l.pretty ? a : encodeURIComponent, c = 0; c < e.length; c++) {
                var f = e[c];
                if ("string" !== typeof f) {
                    var d, p = u[f.name];
                    if (null == p) {
                        if (f.optional) {
                            f.partial && (o += f.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + f.name + '" to be defined')
                    }
                    if (v(p)) {
                        if (!f.repeat)
                            throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
                        if (0 === p.length) {
                            if (f.optional)
                                continue;
                            throw new TypeError('Expected "' + f.name + '" to not be empty')
                        }
                        for (var h = 0; h < p.length; h++) {
                            if (d = s(p[h]),
                            !t[c].test(d))
                                throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(d) + "`");
                            o += (0 === h ? f.prefix : f.delimiter) + d
                        }
                    } else {
                        if (d = f.asterisk ? i(p) : s(p),
                        !t[c].test(d))
                            throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + d + '"');
                        o += f.prefix + d
                    }
                } else
                    o += f
            }
            return o
        }
    }
    function l(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }
    function s(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }
    function c(e, t) {
        return e.keys = t,
        e
    }
    function f(e) {
        return e.sensitive ? "" : "i"
    }
    function d(e, t) {
        var n = e.source.match(/\((?!\?)/g);
        if (n)
            for (var r = 0; r < n.length; r++)
                t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
        return c(e, t)
    }
    function p(e, t, n) {
        for (var r = [], o = 0; o < e.length; o++)
            r.push(y(e[o], t, n).source);
        return c(new RegExp("(?:" + r.join("|") + ")",f(n)), t)
    }
    function h(e, t, n) {
        return m(r(e, n), t, n)
    }
    function m(e, t, n) {
        v(t) || (n = t || n,
        t = []),
        n = n || {};
        for (var r = n.strict, o = !1 !== n.end, a = "", i = 0; i < e.length; i++) {
            var u = e[i];
            if ("string" === typeof u)
                a += l(u);
            else {
                var s = l(u.prefix)
                  , d = "(?:" + u.pattern + ")";
                t.push(u),
                u.repeat && (d += "(?:" + s + d + ")*"),
                d = u.optional ? u.partial ? s + "(" + d + ")?" : "(?:" + s + "(" + d + "))?" : s + "(" + d + ")",
                a += d
            }
        }
        var p = l(n.delimiter || "/")
          , h = a.slice(-p.length) === p;
        return r || (a = (h ? a.slice(0, -p.length) : a) + "(?:" + p + "(?=$))?"),
        a += o ? "$" : r && h ? "" : "(?=" + p + "|$)",
        c(new RegExp("^" + a,f(n)), t)
    }
    function y(e, t, n) {
        return v(t) || (n = t || n,
        t = []),
        n = n || {},
        e instanceof RegExp ? d(e, t) : v(e) ? p(e, t, n) : h(e, t, n)
    }
    var v = n(26);
    e.exports = y,
    e.exports.parse = r,
    e.exports.compile = o,
    e.exports.tokensToFunction = u,
    e.exports.tokensToRegExp = m;
    var g = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")
}
, function(e, t) {
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function i(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(0)
      , s = r(l)
      , c = n(1)
      , f = n(28)
      , d = r(f)
      , p = n(4)
      , h = r(p)
      , m = function(e) {
        function t(e) {
            return o(this, t),
            a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return i(t, e),
        u(t, [{
            key: "render",
            value: function() {
                var e = this.props.c
                  , t = "";
                return t = null == e.ok ? "text-muted" : e.ok ? "text-success" : "text-danger",
                this.props.current && (t += " current-chatacter"),
                s.default.createElement("div", {
                    className: "one-character " + t
                }, s.default.createElement("span", null, e.c))
            }
        }]),
        t
    }(l.Component)
      , y = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                text: [],
                currentIndex: 0
            },
            n.saveGrade = n.saveGrade.bind(n),
            n.OneCharacter = n.OneCharacter.bind(n),
            n.onInput = n.onInput.bind(n),
            n.OneProbC = n.OneProbC.bind(n),
            n.grade = {
                errorNumber: 0,
                length: 0
            },
            n.wordsSelect = h.default.getItem("wordsSelect") || "",
            n.everyWordsProb = JSON.parse(h.default.getItem("wordsProbs") || "{}") || {},
            n.updateOldDataToNew(),
            n.everyWordsCount = {},
            n.everyWordsError = [],
            n.currentIndexInArticle = 0,
            n.wordsSelectRandom = n.wordsSelect,
            n.allInfo = JSON.parse(h.default.getItem("all_info")) || {
                number: 0,
                time: 0,
                days: {}
            },
            n.updateProb(),
            n.update(),
            n
        }
        return i(t, e),
        u(t, [{
            key: "updateOldDataToNew",
            value: function() {
                for (var e in this.everyWordsProb)
                    "number" != typeof this.everyWordsProb[e] && (this.everyWordsProb[e] = this.everyWordsProb[e][0] / (this.everyWordsProb[e][1] + 1))
            }
        }, {
            key: "updateProb",
            value: function() {
                var e = {}
                  , t = this.wordsSelect.split("");
                t.map(function(t) {
                    return e[t] = .5
                }),
                Object.assign(e, this.everyWordsProb),
                this.everyWordsProb = e,
                h.default.setItem("wordsProbs", JSON.stringify(e)),
                t.length > 0 && (this.wordsSelectRandom += t[t.length - 1] + t[t.length - 1])
            }
        }, {
            key: "updateWordsSelect",
            value: function() {
                var e = Math.max(this.wordsSelect.length + 1, 5);
                e = Math.min(e, d.default.length),
                this.wordsSelect = d.default.substr(0, e),
                e <= 10 && (this.wordsSelectRandom += this.wordsSelect),
                h.default.setItem("wordsSelect", this.wordsSelect),
                console.log("updateWordsSelect"),
                this.updateProb()
            }
        }, {
            key: "isWordOk",
            value: function(e) {
                var t = this.everyWordsCount[e] || 0;
                return (this.everyWordsProb[e] || .5) >= .7 && t >= 2
            }
        }, {
            key: "selectFromWords",
            value: function() {
                var e = ""
                  , t = this.wordsSelectRandom.length || 1
                  , n = this.props.wdLen || 10
                  , r = 0;
                for (console.log(this.wordsSelectRandom); r < n; ) {
                    var o = Math.min(t - 1, Math.floor(Math.random() * (1 + t)));
                    e += this.wordsSelectRandom[o],
                    r++
                }
                return e
            }
        }, {
            key: "selectFromArticle",
            value: function() {
                for (var e = this.props.wdLen || 10, t = 0, n = "", r = 0; t < e && r < this.props.article.length; ) {
                    r++,
                    this.currentIndexInArticle++,
                    this.currentIndexInArticle >= this.props.article.length && (this.currentIndexInArticle = 0);
                    var o = this.props.article[this.currentIndexInArticle];
                    this.wordsSelect.indexOf(o) >= 0 && (this.isWordOk(o) || (n += o,
                    t++))
                }
                return r >= this.props.article.length ? this.selectFromWords() : n
            }
        }, {
            key: "selectArticle",
            value: function() {
                return this.selectFromWords()
            }
        }, {
            key: "text",
            value: function() {
                var e = this.props.wdLen || 10
                  , t = (new Date).getTime() / 10
                  , n = 100 * e * 60 / (t - this.startTime);
                if (console.log("current word speed = ", n, this.props.goalWordSpeed, this.props.currentGrade, this.props.goalSpeed),
                this.props.currentGrade >= this.props.goalSpeed && n >= this.props.goalWordSpeed || this.wordsSelect.length < 5) {
                    var r = !0;
                    console.log("check ok");
                    for (var o = 0; o < this.wordsSelect.length; o++)
                        if (!this.isWordOk(this.wordsSelect[o])) {
                            console.log("Error:", this.wordsSelect[o]),
                            r = !1;
                            break
                        }
                    r && this.updateWordsSelect()
                }
                return this.selectArticle()
            }
        }, {
            key: "saveGrade",
            value: function() {}
        }, {
            key: "update",
            value: function() {
                var e = this.text();
                this.everyWordsError = [],
                this.state.text = [];
                for (var t = 0, n = 0; n < e.length; n++) {
                    var r = e[n];
                    this.state.text.push({
                        c: r,
                        index: t,
                        ok: null
                    }),
                    t++
                }
                this.state.currentIndex = 0,
                Object.assign(this.grade, {
                    errorNumber: 0,
                    length: e.length
                })
            }
        }, {
            key: "OneCharacter",
            value: function(e) {
                return s.default.createElement(m, {
                    key: "index_" + e.index,
                    c: e,
                    current: this.state.currentIndex == e.index
                })
            }
        }, {
            key: "calculateOk",
            value: function() {
                var e = Object.assign([], this.state.text);
                this.allInfo.number += e.length;
                var t = new Date
                  , n = t.getTime() / 10;
                this.allInfo.time += n - this.startTime,
                this.allInfo.days = this.allInfo.days || {};
                var r = t.toLocaleDateString()
                  , o = this.allInfo.days[r] || {
                    time: 0,
                    number: 0,
                    date: r
                };
                o.time = o.time + (n - this.startTime),
                o.number = o.number + e.length,
                this.allInfo.days[r] = o,
                h.default.setItem("all_info", JSON.stringify(this.allInfo));
                for (var a = 0; a < e.length; a++) {
                    var i = e[a].c;
                    this.everyWordsCount[i] = (this.everyWordsCount[i] || 0) + 1;
                    var u = Math.max(0, Math.min(1, this.everyWordsProb[i] || .5));
                    this.everyWordsError[a] ? (this.everyWordsProb[i] = .9 * u,
                    this.wordsSelectRandom += i) : this.everyWordsProb[i] = .9 * u + .1
                }
                for (var l = 0; l < this.wordsSelect.length; l++) {
                    var s = this.wordsSelect[l];
                    this.isWordOk(s) ? (console.log("OK:", s, this.wordsSelectRandom.indexOf(s), this.wordsSelectRandom.lastIndexOf(s)),
                    this.wordsSelectRandom.indexOf(s) != this.wordsSelectRandom.lastIndexOf(s) && (this.wordsSelectRandom = this.wordsSelectRandom.replace(s, ""))) : this.wordsSelectRandom += s
                }
                h.default.setItem("wordsProbs", JSON.stringify(this.everyWordsProb)),
                console.log(this.everyWordsProb)
            }
        }, {
            key: "onStart",
            value: function() {
                this.startTime = (new Date).getTime() / 10
            }
        }, {
            key: "onInput",
            value: function(e) {
                for (var t = Math.min(e.length, this.state.text.length), n = Object.assign([], this.state.text), r = !0, o = 0; o < t; o++) {
                    var a = this.state.text[o].c
                      , i = {
                        c: a,
                        ok: a == e[o],
                        index: o
                    };
                    r = r && i.ok,
                    i.ok || (this.everyWordsError[o] = !0),
                    n[o] = i
                }
                if (e.length == this.state.text.length && r) {
                    this.grade.errorNumber = 0;
                    for (var u in this.everyWordsError)
                        this.everyWordsError[u] && (this.grade.errorNumber += 1);
                    return this.calculateOk(),
                    this.props.onReset(this.grade),
                    void this.update()
                }
                this.setState({
                    text: n,
                    currentIndex: t
                })
            }
        }, {
            key: "OneProbC",
            value: function(e, t) {
                var n = (this.everyWordsCount[e],
                this.everyWordsProb[e] || .5)
                  , r = Math.floor(255 * n);
                r < 0 && (r = 0),
                r > 255 && (r = 255);
                var o = 255 - r << 16 | r << 8
                  , a = "000000" + o.toString(16);
                a = "#" + a.substr(-6);
                var i = parseInt(100 * r * 10 / 255) / 10;
                return s.default.createElement(v, {
                    c: e,
                    color: a,
                    key: "index_" + t,
                    id: "c_" + e,
                    percent: i
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.wordsSelect.split("");
                return s.default.createElement(c.Card, null, s.default.createElement(c.CardHeader, null, "\u6587\u672c"), s.default.createElement(c.CardBody, null, s.default.createElement(c.FormText, {
                    color: "muted"
                }, "\u968f\u673a\u9009\u62e9\u4ee5\u4e0b\u6587\u5b57\uff1a", " ", e.map(this.OneProbC)), s.default.createElement("hr", null), s.default.createElement("div", {
                    className: "flex"
                }, this.state.text.map(this.OneCharacter))))
            }
        }]),
        t
    }(l.Component)
      , v = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                show: !0
            },
            n.toggle = n.toggle.bind(n),
            n
        }
        return i(t, e),
        u(t, [{
            key: "toggle",
            value: function() {
                this.setState({
                    state: !this.state.show
                })
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("span", null, s.default.createElement("a", {
                    id: this.props.id,
                    style: {
                        color: this.props.color,
                        cursor: "pointer"
                    }
                }, this.props.c), s.default.createElement(c.UncontrolledTooltip, {
                    placement: "top",
                    target: this.props.id
                }, "\u6b63\u786e\u7387\uff1a", this.props.percent, "%"))
            }
        }]),
        t
    }(l.Component)
      , g = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.onChange = n.onChange.bind(n),
            n.onKeyDown = n.onKeyDown.bind(n),
            n.reset = n.reset.bind(n),
            n.state = {
                value: "",
                simple: parseInt(h.default.getItem("simple")) || 0
            },
            n.start = !1,
            n.onBlur = n.onBlur.bind(n),
            n
        }
        return i(t, e),
        u(t, [{
            key: "onKeyDown",
            value: function(e) {
                this.start || (this.start = !0,
                this.props.onStart()),
                this.props.onKeyDown(e)
            }
        }, {
            key: "onChange",
            value: function(e) {
                this.setState({
                    value: e.target.value
                });
                var t = e.target.value;
                t = t.replace(/[a-z|\ ]+/gi, ""),
                this.props.onInput(t)
            }
        }, {
            key: "reset",
            value: function() {
                this.start = !1,
                this.setState({
                    value: ""
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.refs.input.focus()
            }
        }, {
            key: "onBlur",
            value: function() {
                console.log("Blur"),
                this.refs.input.focus()
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    ref: "origin_position"
                }, s.default.createElement("div", null, s.default.createElement(c.Card, null, s.default.createElement("textarea", {
                    className: "form-control form-control-sm text-muted",
                    rows: 1 == this.state.simple ? 1 : 4,
                    onKeyDown: this.onKeyDown,
                    onChange: this.onChange,
                    value: this.state.value,
                    ref: "input",
                    style: {
                        backgroundColor: "transparent",
                        border: "0 solid"
                    },
                    placeholder: "\u5728\u8fd9\u91cc\u8f93\u5165\u2026\u2026"
                }))))
            }
        }]),
        t
    }(l.Component)
      , b = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.onInput = n.onInput.bind(n),
            n.onStart = n.onStart.bind(n),
            n.onKeyDown = n.onKeyDown.bind(n),
            n.onReset = n.onReset.bind(n),
            n.updateGrade = n.updateGrade.bind(n),
            n.state = {
                currentGrade: 0,
                goalSpeed: parseInt(h.default.getItem("goalSpeed")) || 1,
                goalWordSpeed: parseInt(h.default.getItem("goalWordSpeed")) || 30,
                wdLen: parseInt(h.default.getItem("currentLen")) || 10,
                article: h.default.getItem("article") || ""
            },
            n
        }
        return i(t, e),
        u(t, [{
            key: "onInput",
            value: function(e) {
                this.refs.text.onInput(e)
            }
        }, {
            key: "onStart",
            value: function() {
                this.refs.grade.onStart(),
                this.refs.text.onStart()
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                this.refs.grade.onKeyDown(e)
            }
        }, {
            key: "onReset",
            value: function(e) {
                this.refs.input.reset(),
                this.refs.grade.onEnd(e)
            }
        }, {
            key: "updateGrade",
            value: function(e) {
                this.setState({
                    currentGrade: e
                })
            }
        }, {
            key: "updateConfig",
            value: function() {
                this.onReset(),
                this.refs.text.update()
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: "flex-center"
                }, s.default.createElement(y, {
                    currentGrade: this.state.currentGrade,
                    goalSpeed: this.state.goalSpeed || 2,
                    goalWordSpeed: this.state.goalWordSpeed || 30,
                    article: this.state.article,
                    wdLen: this.state.wdLen,
                    ref: "text",
                    onReset: this.onReset
                }), s.default.createElement(g, {
                    ref: "input",
                    onInput: this.onInput,
                    onStart: this.onStart,
                    onKeyDown: this.onKeyDown
                }), s.default.createElement(w, {
                    ref: "grade",
                    goalSpeed: this.props.goalSpeed || 2,
                    onGradeUpdate: this.updateGrade
                }))
            }
        }]),
        t
    }(l.Component)
      , w = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                speed: parseFloat(h.default.getItem("speed") || "0"),
                error: parseFloat(h.default.getItem("error") || "0"),
                wordsSpeed: parseFloat(h.default.getItem("wordsSpeed") || "0"),
                eachWordKey: parseFloat(h.default.getItem("eachWordKey") || "0")
            },
            n.currentGrade = {
                startTime: 0,
                endTime: 0,
                keyNum: 0,
                speed: 0
            },
            n.onStart = n.onStart.bind(n),
            n.onKeyDown = n.onKeyDown.bind(n),
            n.onEnd = n.onEnd.bind(n),
            n.currentTime = n.currentTime.bind(n),
            n.testId = 0,
            n
        }
        return i(t, e),
        u(t, [{
            key: "currentTime",
            value: function() {
                return (new Date).getTime()
            }
        }, {
            key: "onStart",
            value: function() {
                this.currentGrade.startTime = this.currentTime()
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                var t, n = this.currentTime(), r = this.currentGrade.keyNum;
                r++,
                t = 1e3 * r / (n - this.currentGrade.startTime),
                Object.assign(this.currentGrade, {
                    endTime: n,
                    keyNum: r,
                    speed: t
                }),
                this.props.onGradeUpdate(t)
            }
        }, {
            key: "saveGradeList",
            value: function(e) {
                var t = h.default.getItem("history") || "[]"
                  , n = Object.assign({
                    time: this.currentTime()
                }, e)
                  , r = JSON.parse(t) || [];
                if (r.push(n),
                r.length >= 200) {
                    for (var o = [], a = 0; a < r.length; a += 2) {
                        var i = {}
                          , u = a
                          , l = u + 1 > r.length - 1 ? u : u + 1;
                        for (var s in r[a])
                            i[s] = (r[u][s] + r[l][s]) / 2;
                        i.time = Math.floor(i.time),
                        o.push(i)
                    }
                    r = o
                }
                var c = JSON.stringify(r);
                h.default.setItem("history", c)
            }
        }, {
            key: "onEnd",
            value: function(e) {
                this.onKeyDown();
                var t = e.errorNumber / e.length
                  , n = this.currentTime()
                  , r = 1e3 * e.length * 60 / (n - this.currentGrade.startTime)
                  , o = Math.floor(60 * this.currentGrade.speed / r * 100) / 100
                  , a = {
                    speed: this.currentGrade.speed,
                    error: t,
                    wordsSpeed: r,
                    eachWordKey: o
                };
                this.setState(a),
                h.default.setItem("speed", this.currentGrade.speed.toString()),
                h.default.setItem("error", t.toString()),
                h.default.setItem("wordsSpeed", a.wordsSpeed.toString()),
                h.default.setItem("eachWordKey", a.eachWordKey.toString()),
                this.saveGradeList(a),
                Object.assign(this.currentGrade, {
                    startTime: 0,
                    endTime: 0,
                    keyNum: 0
                })
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement(c.Card, null, s.default.createElement(c.CardHeader, null, "\u6210\u7ee9"), s.default.createElement(c.CardBody, {
                    className: "flex"
                }, "\u51fb\u952e\uff1a", parseInt(100 * this.state.speed) / 100, " ", " | ", "\u6253\u5b57\uff1a", parseInt(100 * this.state.wordsSpeed) / 100, " ", " | ", "\u7801\u957f\uff1a", this.state.eachWordKey, " ", " | ", "\u9519\u8bef\uff1a", parseInt(100 * this.state.error), "%"))
            }
        }]),
        t
    }(l.Component);
    t.default = b
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = "\u7684\u4e00\u662f\u4e86\u4e0d\u5728\u6709\u4e2a\u4eba\u8fd9\u4e0a\u4e2d\u5927\u4e3a\u6765\u6211\u5230\u51fa\u8981\u4ee5\u65f6\u548c\u5730\u4eec\u5f97\u53ef\u4e0b\u5bf9\u751f\u4e5f\u5b50\u5c31\u8fc7\u80fd\u4ed6\u4f1a\u591a\u53d1\u8bf4\u800c\u4e8e\u81ea\u4e4b\u7528\u5e74\u884c\u5bb6\u65b9\u540e\u4f5c\u6210\u5f00\u9762\u4e8b\u597d\u5c0f\u5fc3\u524d\u6240\u9053\u6cd5\u5982\u8fdb\u7740\u540c\u7ecf\u5206\u5b9a\u90fd\u7136\u4e0e\u672c\u8fd8\u5176\u5f53\u8d77\u52a8\u5df2\u4e24\u70b9\u4ece\u95ee\u91cc\u4e3b\u5b9e\u5929\u9ad8\u53bb\u73b0\u957f\u6b64\u4e09\u5c06\u65e0\u56fd\u5168\u6587\u7406\u660e\u65e5\u4e9b\u770b\u53ea\u516c\u7b49\u5341\u610f\u6b63\u5916\u60f3\u95f4\u628a\u60c5\u8005\u6ca1\u91cd\u76f8\u90a3\u5411\u77e5\u56e0\u6837\u5b66\u5e94\u53c8\u624b\u4f46\u4fe1\u5173\u4f7f\u79cd\u89c1\u529b\u540d\u4e8c\u5904\u95e8\u5e76\u53e3\u4e48\u5148\u4f4d\u5934\u56de\u8bdd\u5f88\u518d\u7531\u8eab\u5165\u5185\u7b2c\u5e73\u88ab\u7ed9\u6b21\u522b\u51e0\u6708\u771f\u7acb\u65b0\u901a\u5c11\u673a\u6253\u6c34\u679c\u6700\u90e8\u4f55\u5b89\u63a5\u62a5\u58f0\u624d\u4f53\u4eca\u5408\u6027\u897f\u4f60\u653e\u8868\u76ee\u52a0\u5e38\u505a\u5df1\u8001\u56db\u4ef6\u89e3\u8def\u66f4\u8d70\u6bd4\u603b\u91d1\u7ba1\u5149\u5de5\u7ed3\u63d0\u4efb\u4e1c\u539f\u4fbf\u7f8e\u53ca\u6559\u96be\u4e16\u81f3\u6c14\u795e\u5c71\u6570\u5229\u4e66\u4ee3\u76f4\u8272\u573a\u53d8\u8bb0\u5f20\u5fc5\u53d7\u4ea4\u975e\u670d\u5316\u6c42\u98ce\u5ea6\u592a\u4e07\u5404\u7b97\u8fb9\u738b\u4ec0\u5feb\u8bb8\u8fde\u4e94\u6d3b\u601d\u8be5\u6b65\u6d77\u6307\u7269\u5219\u5973\u6216\u5b8c\u9a6c\u5f3a\u8a00\u6761\u7279\u547d\u611f\u6e05\u5e26\u8ba4\u4fdd\u671b\u8f6c\u4f20\u513f\u5236\u5e72\u8ba1\u6c11\u767d\u4f4f\u5b57\u5b83\u4e49\u8f66\u50cf\u53cd\u8c61\u9898\u5374\u6d41\u4e14\u5373\u6df1\u8fd1\u5f62\u53d6\u5f80\u7cfb\u91cf\u8bba\u544a\u606f\u8ba9\u51b3\u672a\u82b1\u6536\u6ee1\u6bcf\u534e\u4e1a\u5357\u89c9\u7535\u7a7a\u773c\u542c\u8fdc\u5e08\u5143\u8bf7\u5bb9\u5979\u519b\u58eb\u767e\u529e\u8bed\u671f\u5317\u6797\u8bc6\u534a\u592b\u5ba2\u6218\u9662\u57ce\u5019\u5355\u97f3\u53f0\u6b7b\u89c6\u9886\u5931\u53f8\u4eb2\u59cb\u6781\u53cc\u4ee4\u6539\u529f\u7a0b\u7231\u5fb7\u590d\u5207\u968f\u674e\u5458\u79bb\u8f7b\u89c2\u9752\u8db3\u843d\u53eb\u6839\u600e\u6301\u7cbe\u9001\u4f17\u5f71\u516b\u9996\u5305\u51c6\u5174\u7ea2\u8fbe\u65e9\u5c3d\u6545\u623f\u5f15\u706b\u7ad9\u4f3c\u627e\u5907\u8c03\u65ad\u8bbe\u683c\u6d88\u62c9\u7167\u5e03\u53cb\u6574\u672f\u77f3\u5c55\u7d27\u636e\u7ec8\u5468\u5f0f\u4e3e\u98de\u7247\u867d\u6613\u8fd0\u7b11\u4e91\u5efa\u8c08\u754c\u52a1\u5199\u94b1\u5546\u4e50\u63a8\u6ce8\u8d8a\u5343\u5fae\u82e5\u7ea6\u82f1\u96c6\u793a\u5462\u5f85\u5750\u8bae\u4e4e\u7559\u79f0\u54c1\u5fd7\u9ed1\u5b58\u516d\u9020\u4f4e\u6c5f\u5ff5\u4ea7\u523b\u8282\u5c14\u5403\u52bf\u4f9d\u56fe\u5171\u66fe\u54cd\u5e95\u88c5\u5177\u559c\u4e25\u4e5d\u51b5\u8ddf\u7f57\u987b\u663e\u70ed\u75c5\u8bc1\u521a\u6cbb\u7edd\u7fa4\u5e02\u9633\u786e\u7a76\u4e45\u9664\u95fb\u7b54\u6bb5\u5b98\u653f\u7c7b\u9ec4\u6b66\u4e03\u652f\u8d39\u7236\u7edf\u5e9c\u67e5\u822c\u65af\u5012\u7a81\u53f7\u6811\u62ff\u514b\u521d\u5e7f\u5947\u613f\u6b22\u5e0c\u6bcd\u9999\u7834\u8c01\u81f4\u7ebf\u6025\u53e4\u65e2\u53e5\u4eac\u751a\u4ecd\u665a\u4e89\u6e38\u9f99\u4f59\u62a4\u53e6\u5668\u7ec6\u6728\u6743\u661f\u54ea\u82e6\u5b69\u8bd5\u671d\u963f\u961f\u5c45\u5bb3\u72ec\u8bb2\u9519\u5c40\u7537\u5dee\u53c2\u793e\u6362\u9009\u6b62\u9645\u5047\u6c49\u591f\u8bc9\u8d44\u5bc6\u6848\u53f2\u8f83\u73af\u6295\u9759\u5b9d\u4e13\u4fee\u5ba4\u533a\u6599\u5e2e\u8863\u7adf\u6a21\u8138\u5584\u5175\u8003\u89c4\u8054\u56e2\u51b7\u7389\u65bd\u6d3e\u7eaa\u91c7\u5386\u987e\u6625\u8d23\u591c\u753b\u60ca\u94f6\u8d1f\u7eed\u5417\u7b80\u7ae0\u5de6\u5757\u7d22\u9152\u503c\u6001\u6309\u9648\u6cb3\u5df4\u51b2\u9635\u5883\u52a9\u89d2\u6237\u4e71\u547c\u7075\u811a\u7ee7\u697c\u666f\u6015\u505c\u94c1\u5f02\u8c22\u5426\u4f24\u5170\u7f6e\u533b\u826f\u627f\u798f\u79d1\u5c5e\u56f4\u9700\u9000\u57fa\u53f3\u901f\u9002\u836f\u6000\u51fb\u4e70\u7d20\u80cc\u5c81\u571f\u5fd9\u5145\u6392\u4ef7\u8d28\u9047\u7aef\u5217\u5370\u8d35\u7591\u9732\u54e5\u6740\u6807\u62db\u8840\u793c\u5f1f\u4eae\u9f50\u7a7f\u8111\u59d4\u5dde\u67d0\u987a\u7701\u8ba8\u5c1a\u7ef4\u677f\u6563\u9879\u72b6\u8ffd\u7b14\u526f\u5c42\u6c99\u517b\u8bfb\u4e60\u6c38\u8349\u80e1\u6d4e\u6267\u5bdf\u5f52\u5bcc\u5ea7\u96e8\u5802\u5a01\u5ffd\u82cf\u8239\u7f6a\u6562\u5987\u6751\u8457\u98df\u5bfc\u514d\u6e29\u83ab\u638c\u6fc0\u6162\u6258\u80dc\u9669\u5bfb\u5b88\u6ce2\u96f7\u6c89\u79c0\u804c\u9a8c\u9760\u695a\u7565\u65cf\u85cf\u4e3d\u6e10\u5218\u4ec5\u80af\u62c5\u626c\u76d8\u5510\u949f\u7ea7\u6bdb\u8425\u575a\u677e\u76ae\u4f9b\u5e97\u996d\u8303\u54c8\u8d76\u5427\u96ea\u6597\u6548\u4e34\u519c\u5473\u6076\u70df\u56ed\u70c8\u914d\u6742\u77ed\u536b\u8df3\u5b59\u66f2\u5c01\u6293\u79fb\u987f\u5f8b\u5356\u827a\u65e7\u670b\u6551\u9632\u8131\u7ffb\u5212\u8fce\u75db\u6821\u7a97\u5ba3\u4e61\u6768\u53f6\u8b66\u9650\u6e56\u8f6f\u6389\u8d22\u8bcd\u538b\u6325\u8d85\u5c4b\u79cb\u8dd1\u5fd8\u9986\u6697\u73ed\u515a\u5b97\u574f\u6280\u56f0\u767b\u59d0\u9884\u8033\u5e2d\u68a6\u6731\u7ec4\u65c1\u4efd\u7981\u5957\u4e9a\u76ca\u63a2\u5eb7\u589e\u8bd7\u620f\u4f2f\u6653\u542b\u52b3\u6069\u9876\u541b\u5e84\u8c13\u4ed8\u7530\u6bd5\u7eb8\u7814\u865a\u602a\u5b81\u66ff\u72af\u706f\u4f18\u60a8\u59d3\u4f8b\u4e1d\u76d6\u8bef\u67b6\u5e78\u9690\u80a1\u6bd2\u5a18\u5360\u667a\u4f5b\u5e8a\u7c73\u51e1\u4ecb\u5f81\u5f69\u6f14\u5c04\u7956\u6b32\u675f\u83b7\u821e\u5723\u4f19\u6885\u666e\u501f\u79c1\u6e90\u9547\u7761\u7f13\u5347\u7eb3\u7ec7\u6b4c\u5bab\u6982\u91ce\u9192\u590f\u4e92\u79ef\u8857\u724c\u4f11\u6447\u6d0b\u8d25\u76d1\u9aa8\u6279\u5144\u5200\u7f51\u7387\u5ead\u719f\u521b\u8bbf\u786c\u4ec1\u83dc\u4e01\u7eff\u725b\u907f\u9634\u62cd\u96c4\u79d8\u7f3a\u5377\u59d1\u5c3c\u6cb9\u6050\u73a9\u91ca\u904d\u63e1\u7403\u964d\u8651\u8363\u7b56\u8089\u5988\u8ff7\u68c0\u4f38\u6b27\u653b\u7ec3\u80b2\u5371\u5385\u554a\u775b\u6446\u8336\u52c7\u5224\u6750\u62b1\u4ea6\u59bb\u5438\u559d\u8da3\u5634\u9010\u64cd\u5348\u5409\u6d6a\u8f6e\u9ed8\u6beb\u51b0\u73e0\u9f13\u9636\u5b54\u5f90\u56fa\u504f\u9646\u8bf8\u9057\u7237\u8ff0\u5e1d\u95ed\u8865\u7f16\u5de8\u900f\u5f04\u5c24\u9c81\u62e5\u5f55\u5434\u5899\u8d27\u5f31\u654c\u6311\u5bbd\u8ff9\u62bd\u5fcd\u6298\u8f93\u7a33\u7687\u684c\u732e\u8499\u7eb7\u9ebb\u6d17\u8bc4\u6302\u7ae5\u5c0a\u820d\u552f\u535a\u5267\u4e43\u6df7\u5f39\u9644\u8fdf\u656c\u676f\u9c7c\u63a7\u585e\u5251\u539a\u4f73\u6d4b\u8bad\u7259\u6d1e\u6de1\u76db\u53bf\u82b3\u96c5\u9769\u6b3e\u6a2a\u7d2f\u62e9\u4e58\u523a\u8f7d\u731b\u9003\u6784\u8d75\u675c\u5e86\u9014\u5954\u864e\u5de7\u6297\u9488\u5f92\u5706\u95ea\u8c37\u7ecd\u805a\u989d\u5065\u8bda\u9c9c\u6cea\u95f2\u5747\u5e8f\u9707\u4eff\u7f18\u6234\u5a5a\u7bc7\u4ea1\u5976\u5fe0\u70e6\u8d5b\u95f9\u534f\u6770\u6b8b\u61c2\u4e39\u67f3\u59b9\u6620\u6865\u53f9\u6108\u65c5\u6388\u4eab\u66b4\u5077\u84dd\u6c0f\u5bd2\u5b9c\u5f03\u4e30\u5ef6\u8f88\u62a2\u989c\u8d5e\u5178\u5192\u7709\u70e7\u5382\u5531\u5f84\u5e93\u5ddd\u8f9e\u4f34\u6012\u578b\u7eaf\u8d1d\u7968\u9694\u7a77\u62dc\u5ba1\u4f26\u60b2\u67d4\u542f\u51cf\u9875\u7eb5\u626b\u4f1f\u8feb\u632f\u745e\u4e08\u6881\u6d32\u67aa\u592e\u89e6\u4e88\u5b64\u7f29\u6d1b\u635f\u4fc3\u756a\u7f62\u5b8b\u594b\u9500\u5e55\u72b9\u9501\u73cd\u62ac\u966a\u5999\u6478\u5cf0\u52b2\u955c\u6c88\u593a\u6628\u54ed\u8baf\u8c8c\u8c0b\u6cf0\u4fa7\u8d2b\u6276\u963b\u8d34\u7533\u5cb8\u5f7c\u8d4f\u7248\u62b5\u6cfd\u63d2\u8fc5\u51ed\u4f0a\u6f6e\u54b1\u4ed9\u7b26\u5b87\u80a9\u5c1d\u9012\u71d5\u6d01\u62d2\u90ce\u51dd\u51c0\u906d\u4eea\u8584\u5361\u672b\u52d2\u4e4c\u68ee\u8bfa\u5440\u58ee\u5fe7\u6cbf\u60ef\u4e22\u5b63\u4f01\u58c1\u60dc\u5a46\u888b\u6717\u96f6\u8f9b\u5fc6\u52aa\u8212\u679d\u51e4\u706d\u97e9\u80c6\u7070\u65e6\u5b5f\u9677\u4fd7\u7ed5\u75be\u77a7\u6d2a\u7532\u5e10\u7cca\u6cdb\u7686\u78b0\u5439\u7801\u5949\u7bb1\u503e\u80f8\u5806\u72c2\u4ef2\u5708\u51ac\u9910\u5389\u817f\u5c16\u62ec\u4f69\u9b3c\u6b23\u5782\u8dc3\u6e2f\u9a97\u878d\u649e\u5854\u7d2b\u8361\u654f\u90d1\u8d56\u6ed1\u5141\u9e1f\u8bfe\u6682\u74e6\u7965\u67d3\u6eda\u6d6e\u7c97\u5211\u8f86\u72d7\u6251\u7a0d\u79e6\u624e\u9b42\u5c9b\u817e\u81e3\u7434\u6089\u7edc\u6469\u63aa\u57df\u51a0\u7af9\u6b8a\u8c6a\u5446\u8428\u65cb\u558a\u5bc4\u6084\u500d\u795d\u5269\u7763\u65d7\u8fd4\u53ec\u5f7b\u5bbe\u7518\u5410\u4e54\u8170\u62d4\u5e45\u8fdd\u8be6\u81c2\u5c3a\u996e\u9897\u6d89\u903c\u7ade\u57f9\u60e0\u4e8f\u53d4\u4f0f\u5524\u9e21\u90bb\u6c60\u6028\u5965\u4faf\u9a91\u6f2b\u62d6\u4fca\u5c3e\u6068\u8d2f\u51cc\u517c\u8be2\u788e\u6668\u7f5a\u94fa\u6d53\u4f0d\u5bbf\u6cc9\u4e95\u7e41\u7c89\u7eea\u7b51\u6062\u5339\u5c18\u8f89\u9b54\u4ef0\u8463\u63cf\u8ddd\u76d7\u6e21\u52e4\u529d\u83b2\u5766\u642d\u633a\u8e2a\u5e7d\u622a\u8352\u6070\u6167\u90a6\u9887\u7126\u9189\u5e9f\u63a9\u7b7e\u4e27\u707e\u9f3b\u4fb5\u9676\u8083\u88c1\u4ff1\u78e8\u6790\u5956\u5306\u74f6\u6ce5\u62fe\u51c9\u9ea6\u94a2\u6d8c\u6f5c\u9686\u6d25\u641e\u86cb\u5948\u6270\u8010\u5085\u9526\u64ad\u58a8\u5076\u6355\u60d1\u98d8\u5c48\u9e23\u6324\u6bc1\u659c\u5566\u6c61\u8d64\u6170\u9970\u950b\u8986\u6c64\u5bff\u8de8\u7f8a\u54e6\u6696\u77ac\u604b\u6838\u708e\u75bc\u7238\u72e0\u804a\u5bc2\u82cd\u70bc\u7206\u6735\u8e0f\u7267\u7275\u62b9\u50bb\u88c2\u5413\u54ac\u5475\u62fc\u6094\u6155\u969c\u76b1\u952e\u6f02\u5c38\u76ef\u70c2\u9a82\u6ef4\u75af\u8d2d\u8427\u8eb2\u50b2\u751c\u8109\u7840\u60e7\u5e7b\u64e6\u722c\u9178\u6123\u6d45\u72fc\u6296\u8d26\u95f7\u9510\u538c\u6c57\u561b\u57cb\u832b\u75d5\u7ea0\u552e\u80a4\u8eba\u62f3\u7597\u8ba2\u8000\u607c\u660f\u51f6\u4ed4\u8f70\u8292\u7f20\u6491\u8861\u6d51\u601c\u6f20\u98a4\u8d62\u9065\u8106\u5e9e\u60e8\u517d\u6321\u52b1\u79d2\u4f30\u6db2\u60a3\u731c\u810f\u5507\u60a0\u609f\u60a6\u8270\u507f\u7ee9\u6c47\u8180\u6323\u59ff\u7741\u80d6\u6e7f\u7483\u6b49\u7384\u6da6\u90c1\u614c\u7eb9\u964c\u7ffc\u9891\u6b3a\u7262\u6124\u626d\u96fe\u5f2f\u5bde\u9f84\u6263\u8c6b\u5435\u6c9f\u61d2\u6572\u77aa\u806a\u6d12\u541e\u70b8\u6bbf\u582a\u7fa1\u71c3\u732b\u626f\u54c0\u629a\u75c7\u5f25\u8fa9\u978b\u76fe\u8df5\u90aa\u77db\u6269\u6492\u75b2\u54fc\u6643\u5237\u61be\u6101\u871c\u809a\u6d69\u5acc\u6ce1\u7f1d\u8c05\u50ac\u6016\u788d\u629b\u6254\u7a00\u5ac1\u4e4f\u5996\u5a07\u6e34\u9738\u8fb0\u4ec7\u503a\u8d54\u8896\u5e7c\u6212\u86c7\u5bf8\u4ebf\u5fcc\u94bb\u5faa\u8273\u6052\u5c4f\u8017\u60f9\u808c\u5c65\u6dfb\u9006\u6d82\u7720\u76c8\u754f\u7b3c\u901d\u8d5a\u52fe\u9614\u7897\u4fe9\u6ecb\u5fa1\u7f9e\u9605\u67af\u8d2a\u6b20\u7626\u8150\u6495\u6670\u8179\u8bbc\u541f\u6291\u543c\u88ad\u813e\u6905\u63a0\u8dcc\u62e6\u9a7e\u79df\u6843\u5915\u59fb\u866b\u9022\u642c\u7f69\u60ac\u6674\u5939\u6676\u5351\u75f4\u5c41\u8bb6\u6454\u66f0\u55b7\u822a\u906e\u65a9\u6109\u820c\u8c46\u9b44\u8116\u7cdf\u6655\u9f7f\u5448\u5632\u7838\u723d\u8bf1\u7ef5\u8d4b\u7efc\u5e01\u537f\u9a84\u543b\u7a9d\u772f\u7cd6\u7978\u71ac\u94fe\u6c7d\u80ba\u5578\u7fbd\u51d1\u80a0\u690d\u9971\u8d81\u9177\u6f06\u6247\u888d\u74dc\u8dea\u594f\u8fb1\u8a93\u6127\u5272\u9075\u997f\u7529\u9274\u88f9\u5d29\u62e8\u8fc8\u80a5\u7a0e\u586b\u6851\u5c82\u8d6b\u54bd\u80de\u641c\u59a5\u52ab\u50f5\u6014\u67f1\u5609\u614e\u6316\u638f\u5938\u758f\u8fa3\u8eaf\u7130\u4e2b\u76fc\u8e29\u8377\u5582\u8e81\u5367\u4f2a\u5893\u4e11\u68af\u76df\u5598\u83f2\u9038\u5ba0\u6c1b\u76d2\u5983\u65a5\u8fc1\u4e56\u52c9\u633d\u64a4\u732a\u54f2\u6ce3\u8d24\u6f47\u6da8\u6dd8\u518c\u9a71\u9a76\u971c\u80c1\u9b4f\u88e4\u94dc\u6444\u62ab\u6863\u6591\u67dc\u7545\u7b79\u8a89\u6e9c\u90ae\u5565\u730e\u9ece\u4ed3\u606d\u59e8\u6f0f\u7239\u626e\u846c\u4e32\u75ab\u5c4a\u6cc4\u66fc\u8c28\u9505\u6daf\u6da9\u6c90\u634f\u8086\u718a\u8bbd\u819c\u95ef\u8f91\u6148\u5e05\u62c6\u5761\u6dcb\u704c\u5a9a\u7c4d\u6602\u4ed7\u707f\u5d07\u5026\u8d4c\u70c1\u643a\u6367\u5740\u5ca9\u5986\u563f\u8870\u5c2c\u81ed\u5239\u6eaa\u88d9\u5a92\u80c3\u5c60\u7728\u54ce\u5c34\u5c97\u96d5\u6e0a\u9601\u8c0e\u9080\u5974\u7efd\u644a\u7cd5\u51c4\u611a\u8be1\u9a73\u4f10\u5b8f\u8154\u6cbe\u7bad\u788c\u8fa8\u540a\u604d\u80ce\u6746\u9f20\u621a\u65a4\u8822\u96c0\u5984\u80bf\u970d\u8d21\u76c6\u53a8\u72f1\u796d\u53e0\u56ca\u632b\u78a7\u6b47\u6349\u821f\u886b\u86ee\u8f68\u54d1\u73bb\u6168\u7ed1\u59a8\u7aed\u584c\u70ae\u68d2\u54b3\u66ae\u6361\u51bb\u5492\u7f15\u7cae\u5851\u9b45\u7b4b\u8e72\u5b55\u62bc\u6bc5\u7ea4\u6458\u50a8\u7fc5\u8f85\u82d7\u77b3\u5751\u4e1b\u5242\u8d37\u5835\u5ae9\u679a\u971e\u8574\u5760\u77e9\u7ef3\u57c3\u5b9b\u6d78\u63c9\u778e\u5eb8\u8776\u6e7e\u543e\u8d38\u5b5d\u8d60\u5a36\u51a5\u6e83\u640f\u8d8b\u6ea2\u6500\u5c51\u8d9f\u526a\u5962\u6377\u7c92\u5951\u5589\u53db\u6328\u6cca\u5b85\u67f4\u7b28\u5496\u68f5\u9aa4\u7272\u5c3f\u6380\u6ca7\u6652\u4f1e\u8bca\u9675\u8877\u699c\u8513\u60e9\u54d7\u8e22\u4e73\u63f4\u8c31\u63ed\u827e\u7089\u52c3\u6734\u72d0\u573e\u94c3\u6b6a\u5783\u54a8\u54c4\u5dfe\u5a03\u5e18\u5a49\u7fe0\u5e3d\u7fd4\u8102\u8350\u8f9c\u55a7\u803b\u5561\u68fa\u6db5\u9a87\u98a0\u7f72\u4f8d\u800d\u739b\u56a3\u9e3f\u5509\u5265\u59c6\u988a\u94ed\u8fea\u8c10\u83b9\u9976\u8db4\u8d50\u5bb4\u7693\u5f79\u52a3\u5a1c\u819d\u809d\u7792\u780d\u5490\u82ac\u76d0\u8bde\u664b\u62d0\u9709\u64bc\u62d8\u65fa\u574e\u9661\u8c26\u6d9b\u66f9\u9699\u608d\u60eb\u7c98\u90ed\u6ede\u6342\u6795\u9888\u6cab\u76f2\u8bd1\u745f\u5cb3\u8d31\u7830\u8d74\u886c\u5ec9\u5992\u70db\u5631\u6cfc\u9e70\u83b1\u5eca\u62d3\u680f\u522e\u7a83\u8679\u9a7b\u716e\u4ead\u4fef\u67c4\u575b\u8d3c\u8096\u901b\u7470\u58f3\u6bb7\u62c2\u85aa\u6d74\u64c5\u7ed8\u6c6a\u714c\u77e3\u556a\u5a74\u73ab\u72ed\u722a\u6115\u80f6\u818a\u5b99\u75d2\u70eb\u7ad6\u903b\u62df\u80f3\u884d\u6f88\u4e18\u817b\u9f0e\u9a70\u76cf\u68c9\u6e20\u5ab3\u6e17\u4fcf\u5e99\u5df7\u6f9c\u68cb\u57ab\u524a\u5d16\u9988\u5495\u65e8\u8038\u8155\u97f5\u727a\u5e06\u77ee\u6487\u55d3\u89c8\u916c\u7eb1\u5238\u5f26\u5be1\u6dcc\u99a8\u55bb\u54df\u4fa3\u8f69\u953b\u7816\u53ee\u59dc\u7891\u6627\u9017\u7a74\u84c4\u5937\u8346\u5f17\u71e5\u803d\u987d\u74e3\u9042\u5ac9\u8d3a\u5154\u73b2\u848b\u7a1a\u5bfa\u53c9\u9119\u673d\u4ec6\u6846\u845b\u7410\u83cc\u9a9a\u68cd\u625b\u5baa\u60df\u6876\u660c\u62e2\u7334\u8389\u5288\u853d\u7948\u6614\u6c27\u664c\u5a31\u54a7\u50e7\u95fa\u68b0\u8c0a\u715e\u61c8\u6cb8\u51ef\u9489\u8bc0\u80a2\u53e8\u8650\u997c\u6d46\u72c8\u67ab\u8f96\u655b\u4e59\u6e3a\u5203\u8881\u5353\u6fa1\u6401\u62fd\u79e9\u618b\u5362\u515c\u7f55\u5bb0\u8702\u5dc5\u53a2\u70e4\u7586\u58f6\u68b3\u5636\u88f3\u84ec\u545c\u97ad\u6467\u80c0\u72ee\u9e7f\u7a9c\u5319\u5429\u6208\u575f\u84b8\u7737\u8e66\u7f34\u7ee3\u55e1\u8bc8\u632a\u7a84\u5f13\u6ee9\u8058\u7bee\u7a46\u5415\u68d8\u7a3f\u82bd\u9965\u5de1\u56b7\u7985\u6ca6\u8165\u7092\u5821\u9093\u6606\u77ff\u840c\u810a\u7cb9\u6c41\u4f63\u7b52\u85e4\u6284\u501a\u563b\u52ff\u707c\u88d5\u7f1a\u5cad\u6320\u6df9\u5978\u6ed4\u4fa6\u602f\u6b79\u9eef\u94a5\u7422\u72de\u51a4\u54c7\u8482\u5378\u819b\u5bd3\u65f7\u54b8\u5e15\u59ae\u7ef7\u5ef7\u80be\u6842\u8c41\u5858\u7f50\u8302\u7109\u683d\u900a\u69fd\u6390\u9f9f\u7433\u5146\u8015\u5f18\u78d5\u83e9\u5220\u8fbd\u682a\u508d\u6577\u5320\u82f9\u70ab\u7736\u6402\u548b\u60f6\u6398\u6f58\u655e\u88f8\u54ee\u5018\u4e7e\u9063\u711a\u6726\u7554\u67cf\u68ad\u680b\u8f9f\u7eca\u6dc0\u840e\u8680\u6c79\u9cde\u5f8a\u8ba5\u6756\u55e6\u5395\u53d9\u7ebd\u80e7\u7855\u5450\u5f98\u8681\u6d47\u759a\u6073\u9e2d\u78c5\u6e85\u63fd\u73ca\u4fc4\u7c07\u5021\u7fc1\u7977\u6f6d\u5366\u8774\u9e26\u7184\u5ac2\u9e64\u74f7\u6789\u72f0\u817a\u75a4\u97e7\u6e23\u964b\u6691\u72ac\u662d\u5151\u9e45\u6f84\u8305\u5499\u9524\u635e\u89c5\u4e5e\u714e\u62e7\u535c\u63e3\u6ee5\u6405\u5e16\u51f0\u8d3e\u82a6\u90ca\u6b96\u7a3b\u7eda\u53a6\u7fd8\u917f\u5f27\u6cae\u5be5\u8721\u8471\u94a9\u6020\u755c\u6fb3\u5dcd\u9ad3\u5bb5\u62ce\u6687\u8e48\u5777\u9668\u96c1\u4fa0\u5deb\u6cf3\u5de9\u8205\u6b67\u5bdd\u6ccc\u6241\u5669\u64ce\u78c1\u7235\u5254\u5de2\u8214\u6f3e\u8e6d\u60d5\u5401\u96c7\u6e14\u5885\u55fd\u7fe9\u6eb6\u7784\u6d4a\u51af\u6eba\u7199\u829d\u8854\u6021\u5cfb\u841d\u4f3a\u94f8\u5fbd\u8d29\u51db\u6233\u892a\u7b77\u532a\u51f3\u7ed2\u6346\u5764\u8461\u68a8\u902e\u56bc\u87ba\u7779\u918b\u6a31\u764c\u6817\u6869\u72f8\u62f1\u5f70\u818f\u50fb\u7eb2\u8587\u63ea\u631a\u77eb\u5815\u6d59\u8404\u61e6\u5f0a\u970e\u7b1b\u6cfb\u8eac\u82df\u5014\u8f74\u9893\u6deb\u5431\u7aa5\u6a90\u7ca5\u54c6\u5375\u51f8\u6350\u895f\u676d\u5600\u5be8\u8e44\u859b\u9877\u96b6\u7802\u5c61\u592d\u83bd\u5455\u7164\u6a59\u82db\u5112\u72e1\u51fd\u8c23\u55c5\u68a2\u83ca\u70ad\u4e38\u5b7d\u804b\u7bf7\u7409\u8dcb\u9885\u54e8\u718f\u84c9\u8206\u5ed3\u5300\u762b\u8d1e\u58e4\u520a\u7f38\u5543\u54c9\u568e\u8521\u85c9\u62d9\u903e\u56da\u574a\u60af\u7d6e\u8511\u7ef8\u5256\u6566\u64a9\u9e4f\u814a\u9a74\u803f\u6c5d\u57ae\u94a6\u6c70\u553e\u68da\u663c\u6413\u9171\u557c\u68e0\u8046\u86db\u6bef\u5a6a\u6666\u81a8\u8f7f\u4fae\u8bf5\u4e4d\u7f00\u4ed1\u533f\u6850\u63cd\u9761\u6da1\u836b\u4f88\u6252\u8d2c\u60ed\u6363\u542d\u7ede\u52fa\u9610\u5352\u5e1c\u79bd\u6c83\u60f0\u674f\u7f2d\u79c9\u5398\u4f51\u5188\u5c27\u6055\u6dd1\u61ca\u5ce1\u6d95\u7280\u901e\u9493\u9a7c\u8845\u8749\u5179\u7785\u5189\u8c79\u62ef\u62ed\u4f84\u86d9\u5792\u78be\u7a92\u6e58\u7624\u763e\u60e6\u8bb3\u5d14\u8beb\u8747\u8230\u8f97\u6c9b\u889c\u914c\u867e\u51f9\u7ff0\u7076\u8682\u4e19\u6ee8\u6345\u9b41\u857e\u68a7\u68f1\u8dfa\u79c3\u5520\u6816\u8299\u545b\u5162\u9896\u6dee\u7cd9\u4f50\u7a8d\u808b\u5c94\u94c5\u65a7\u6f13\u52cb\u59e5\u8d4e\u52d8\u7b5d\u9704\u852c\u7a9f\u60b4\u78b3\u79be\u5d4c\u8c1c\u5a76\u618e\u55dc\u5c4e\u63b7\u840d\u69db\u9187\u6194\u5587\u5201\u8231\u9882\u84b2\u67a3\u5960\u7a3d\u5f6d\u606c\u949d\u54e9\u7538\u87f9\u9881\u8b6c\u7980\u8258\u6f8e\u7984\u6760\u64d2\u9508\u6cbc\u776b\u62c7\u79b9\u4fed\u8fed\u7ece\u6c28\u5564\u82d1\u904f\u75ae\u7ef0\u6ee4\u6e43\u59da\u829c\u4ea9\u62e3\u9576\u9756\u5315\u51ff\u7115\u6c13\u9b13\u7caa\u78b1\u6c81\u7011\u868a\u5a7f\u8d3f\u4e10\u566a\u8700\u94f2\u4ea2\u50da\u5824\u77e2\u6d4f\u743c\u65f1\u54aa\u76d4\u53e9\u6bd9\u552c\u8098\u659f\u6897\u9a6f\u53fd\u9a86\u9521\u620e\u77a9\u80aa\u60cb\u83ba\u97a0\u7aff\u504e\u7bf1\u8e6c\u631f\u8c2c\u6bb4\u8c2d\u7a98\u70d9\u733f\u77bb\u6808\u8327\u851a\u82af\u63ba\u540f\u5e87\u4fa5\u5e62\u789f\u6177\u6400\u5180\u7b5b\u5d2d\u6273\u6d66\u589f\u6f31\u8d41\u94ae\u7766\u7b19\u548f\u8f99\u8910\u5c09\u63b0\u7d0a\u5f6c\u752b\u816e\u846b\u849c\u6a61\u4f36\u576a\u5ce8\u6912\u67a2\u5f6a\u8d66\u68d5\u6da4\u6064\u8715\u9655\u6de4\u6eaf\u6d3d\u9e3d\u8695\u4fd8\u832c\u6a58\u547b\u5a1f\u5ced\u6df3\u949e\u541d\u527f\u62cc\u5c49\u7c3f\u8718\u658c\u795f\u65ec\u69d0\u864f\u78ca\u6813\u75f9\u5d1b\u6a80\u7ec5\u5428\u854a\u960e\u9165\u7682\u7629\u7599\u70d8\u9600\u88b1\u79fd\u82d4\u82ad\u7261\u66dd\u6ca5\u658b\u667e\u5323\u8dbe\u8712\u57a2\u65ed\u5a25\u780c\u53ed\u8304\u9499\u77d7\u7329\u8fab\u8042\u7a20\u9992\u7574\u6a71\u8113\u7f24\u96cc\u5527\u54fa\u5570\u8d58\u690e\u9774\u86fe\u7f0e\u785d\u9972\u94a7\u5eb6\u8815\u53fc\u9698\u8549\u6376\u7eba\u7194\u627c\u64b0\u733e\u830e\u7940\u9985\u7a3c\u8f90\u575d\u8e31\u66d9\u8859\u8424\u61a8\u70f9\u75d8\u7f14\u915d\u5bc7\u5f1b\u51b6\u5c79\u64c2\u6e1d\u6043\u7f05\u75f0\u83c7\u82c7\u5fff\u6292\u6977\u5e90\u952f\u69b4\u9c8d\u7b0b\u762a\u7405\u59ca\u7a57\u55b3\u80ae\u9e33\u94db\u7c9f\u5993\u708a\u52df\u78f7\u96a7\u7a91\u9a8f\u4ea5\u6d3c\u74e2\u4ffa\u7c38\u9163\u812f\u634e\u75ca\u95f8\u8c34\u9175\u5f64\u5d0e\u5c6f\u786b\u8fc2\u5784\u776c\u6e32\u8367\u5c7f\u5406\u9e2f\u997a\u634d\u6da7\u9a79\u5308\u6749\u62d7\u7cef\u9102\u6c22\u62a0\u8338\u8717\u85af\u94b3\u9523\u9504\u8475\u998b\u9e4a\u8247\u853c\u62f4\u5e1a\u67ff\u60bc\u7095\u6c2f\u96cf\u94a0\u6b83\u7fb9\u5e37\u7638\u6986\u74a7\u6caa\u9525\u5ce6\u637a\u64ae\u7b50\u8df7\u5ba6\u8884\u5228\u8235\u82a5\u4fa8\u82de\u874e\u64ac\u9091\u81c0\u7ee2\u6cde\u69a8\u8d43\u6995\u717d\u8c24\u75b9\u6fd2\u978d\u7578\u9975\u9685\u83f1\u8de4\u85fb\u5544\u5243\u8335\u637b\u80b4\u6805\u6382\u4fd0\u8fe2\u9776\u5484\u67e0\u8925\u6aac\u5e9a\u9739\u58a9\u8bec\u7ca4\u7eac\u592f\u968b\u8bfd\u7960\u7316\u8087\u8bf2\u8611\u7750\u7901\u5c96\u86e4\u9981\u5506\u761f\u9cb8\u7cb1\u5420\u96f3\u7f09\u75ea\u7a96\u8d42\u8018\u8d2e\u62a1\u62c4\u70ac\u6cf5\u6479\u9cc4\u94be\u62f7\u6b89\u79e4\u7c27\u80f0\u64b5\u9a6e\u8309\u8912\u9ca4\u7f94\u6b7c\u8fc4\u5f99\u536f\u781a\u6868\u85d5\u6dc6\u542e\u8902\u6096\u8e4b\u8713\u9e25\u94d0\u8364\u7abf\u873b\u7f30\u6984\u94dd\u7bd3\u7c7d\u9540\u7be1\u7281\u4e52\u87c6\u8760\u8d61\u6be1\u80da\u8236\u5ff1\u7f9a\u814b\u6e89\u916a\u7bab\u7845\u9e43\u85d0\u7525\u8759\u8110\u5197\u6a1f\u5364\u9ca8\u82b9\u6da3\u76f9\u6a44\u6866\u8f67\u8354\u533e\u4e53\u95fd\u6414\u7f06\u9570\u8200\u620a\u5eb5\u8783\u7ae3\u5e4c\u5b75\u8301\u951a\u67ec\u5bc5\u5df3\u9e66\u998d\u630e\u783e\u732c\u57a6\u6854\u6930\u79e7\u6cbd\u809b\u9aa1\u8c1a\u81fc\u7b4f\u9e49\u5a04\u8c0d\u5703\u56f1\u828b\u5639\u7078\u6c2e\u9cd6\u8bb9\u7ce0\u8c5a\u8c06\u710a\u81ca\u83e0\u8757\u58f9\u8ddb\u53c1\u8708\u8c7a\u5349\u9157\u73b7\u6dae\u692d\u76bf\u620c\u8517\u5830\u759f\u8d30\u57c2\u868c\u7898\u8d63\u8e42\u9ed4\u63e9\u8e8f\u7b95\u97ed\u579b\u86a3\u75e2\u8693\u56e4\u6c5b\u7696\u7459\u8d3b\u96f9\u8e0a\u95f0\u79c6\u9539\u86af\u9551\u86c0\u6e24\u86a4\u6ec7\u7ba9\u4f43\u6886\u576f\u9149\u8c4c\u7eab\u7396\u8019\u9550\u6d9d\u693f\u57e0\u87cb\u6994\u87c0\u950c\u7678\u58ec\u79f8\u9cab\u6c5e\u77ad\u9e35\u67d1\u874c\u86aa\u998f\u67d2\u634c\u9ccd\u8a8a\u77fe\u74e4\u5501\u7663\u9530"
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function i(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(0)
      , s = r(l)
      , c = n(1)
      , f = n(4)
      , d = r(f)
      , p = n(30)
      , h = r(p)
      , m = (function(e) {
        function t() {
            return o(this, t),
            a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        i(t, e),
        u(t, [{
            key: "render",
            value: function() {
                var e = this.props.data
                  , t = new Date(e.time)
                  , n = t.toLocaleDateString()
                  , r = t.toLocaleTimeString();
                return s.default.createElement("tr", null, s.default.createElement("td", null, n, " ", r), s.default.createElement("td", null, parseInt(100 * e.speed) / 100), s.default.createElement("td", null, parseInt(100 * e.wordsSpeed) / 100), s.default.createElement("td", null, parseInt(100 * e.error), "%"))
            }
        }])
    }(l.Component),
    function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
              , r = d.default.getItem("history") || "[]"
              , i = JSON.parse(r) || [];
            return n.state = {
                data: i
            },
            n
        }
        return i(t, e),
        u(t, [{
            key: "render",
            value: function() {
                return s.default.createElement("div", null, s.default.createElement(c.Card, {
                    className: "full"
                }, s.default.createElement(c.CardHeader, null, "\u6210\u7ee9"), s.default.createElement(c.CardBody, {
                    className: "full"
                }, s.default.createElement(v, {
                    data: this.state.data
                }))), s.default.createElement(y, null))
            }
        }]),
        t
    }(l.Component))
      , y = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = JSON.parse(d.default.getItem("all_info")) || {
                number: 0,
                time: 0
            },
            n.OneLine = n.OneLine.bind(n),
            n.timeInfo = n.timeInfo.bind(n),
            n
        }
        return i(t, e),
        u(t, [{
            key: "timeInfo",
            value: function(e) {
                var t = e.time
                  , n = e.number
                  , r = parseInt(t) / 100
                  , o = "";
                if (r < 60)
                    o = r.toString() + "\u79d2";
                else if (r < 3600) {
                    var a = parseInt(r / 60)
                      , i = parseInt(r) % 60;
                    o = a.toString() + "\u5206" + i.toString() + "\u79d2"
                } else {
                    var u = parseInt(r / 60)
                      , l = parseInt(u / 60);
                    u %= 60,
                    o = l.toString() + "\u65f6" + u.toString() + "\u5206"
                }
                var s = n
                  , c = "";
                if (s < 1e3)
                    c = s;
                else if (s < 1e4) {
                    var f = parseInt(s / 10) / 100;
                    c = f.toString() + "K"
                } else {
                    var d = parseInt(s / 100) / 100;
                    c = d.toString() + "\u4e07"
                }
                return {
                    time: o,
                    number: c,
                    speed: parseInt(s / Math.max(r, 1) * 60).toString() + "\u5b57/\u5206"
                }
            }
        }, {
            key: "OneLine",
            value: function(e, t) {
                var n = this.timeInfo(e);
                return s.default.createElement("tr", {
                    key: t
                }, s.default.createElement("td", null, e.date), s.default.createElement("td", null, n.time), s.default.createElement("td", null, n.number), s.default.createElement("td", null, n.speed))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.timeInfo(this.state)
                  , t = this.state.days || {}
                  , n = [];
                console.log(t);
                for (var r in t)
                    n.push(t[r]);
                return n.reverse(),
                s.default.createElement(c.Card, null, s.default.createElement(c.CardHeader, null, "\u7edf\u8ba1"), s.default.createElement(c.CardBody, null, s.default.createElement(c.Table, {
                    striped: !0,
                    hover: !0,
                    size: "sm"
                }, s.default.createElement("thead", null, s.default.createElement("tr", null, s.default.createElement("th", null, "-"), s.default.createElement("th", null, "\u603b\u65f6\u95f4"), s.default.createElement("th", null, "\u603b\u5b57\u6570"), s.default.createElement("th", null, "\u5747\u901f"))), s.default.createElement("tbody", null, s.default.createElement("tr", null, s.default.createElement("td", null, "\u5168\u90e8"), s.default.createElement("td", null, e.time), s.default.createElement("td", null, e.number), s.default.createElement("td", null, e.speed)), n.map(this.OneLine)))))
            }
        }]),
        t
    }(l.Component)
      , v = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.draw = n.draw.bind(n),
            n.setTimeOut = n.setTimeOut.bind(n),
            n.tooltip = n.tooltip.bind(n),
            n.chart = null,
            n
        }
        return i(t, e),
        u(t, [{
            key: "tooltip",
            value: function(e) {
                var t = new Date(this.props.data[e[0].name].time)
                  , n = t.toLocaleDateString()
                  , r = t.toLocaleTimeString();
                return 2 == e.length ? n + " " + r + "<br />" + e[0].seriesName + " : " + e[0].value + " (\u6b21/\u79d2)<br />" + e[1].seriesName + " : " + e[1].value + " (\u5b57/\u5206)" : 1 == e.length ? "\u51fb\u952e" == e[0].seriesName ? n + " " + r + "<br />" + e[0].seriesName + " : " + e[0].value + " (\u6b21/\u79d2)" : n + " " + r + "<br />" + e[0].seriesName + " : " + e[0].value + " (\u5b57/\u5206)" : n + " " + r
            }
        }, {
            key: "ave",
            value: function() {
                for (var e = 0, t = arguments.length, n = Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return n.map(function(t) {
                    e += t
                }),
                (e /= n.length) || 0
            }
        }, {
            key: "draw",
            value: function() {
                this.chart = h.default.init(this.refs.chart);
                var e = []
                  , t = []
                  , n = [];
                this.props.data.map(function(r, o) {
                    e.push(o),
                    t.push(Math.floor(10 * r.speed) / 10),
                    n.push(Math.floor(10 * r.wordsSpeed) / 10)
                });
                var r = 2 * Math.ceil(Math.max.apply(Math, t) / 2) || 2
                  , o = 20 * Math.ceil(Math.max.apply(Math, n) / 20) || 20
                  , a = 2 * Math.floor(Math.min.apply(Math, t) / 2) || 1
                  , i = 20 * Math.floor(Math.min.apply(Math, n) / 20) || 10
                  , u = this.ave.apply(this, t)
                  , l = this.ave.apply(this, n)
                  , s = (Math.ceil(u - l / 30),
                (o - i) / (r - a));
                this.chart.setOption({
                    title: {
                        text: ""
                    },
                    xAxis: {
                        data: e,
                        type: "category",
                        boundaryGap: !1,
                        axisLine: {
                            onZero: !0
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                        formatter: this.tooltip
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            mark: {
                                show: !0
                            },
                            dataView: {
                                show: !0,
                                readOnly: !1
                            },
                            restore: {
                                show: !0
                            },
                            saveAsImage: {
                                show: !0
                            }
                        }
                    },
                    legend: {
                        data: ["\u51fb\u952e", "\u6253\u5b57"],
                        x: "left"
                    },
                    yAxis: [{
                        name: "\u51fb\u952e\uff08\u6b21/\u79d2\uff09",
                        type: "value",
                        max: r,
                        min: a,
                        axisLabel: {
                            formatter: function(e) {
                                return e
                            }
                        }
                    }, {
                        name: "\u6253\u5b57\u901f\u5ea6\uff08\u5b57/\u5206\uff09",
                        type: "value",
                        max: o,
                        interval: s,
                        min: i,
                        axisLabel: {
                            formatter: function(e) {
                                return Math.floor(e)
                            }
                        },
                        show: !0
                    }],
                    series: [{
                        name: "\u51fb\u952e",
                        type: "line",
                        smooth: .5,
                        data: t
                    }, {
                        yAxisIndex: 1,
                        name: "\u6253\u5b57",
                        type: "line",
                        smooth: .5,
                        data: n
                    }]
                })
            }
        }, {
            key: "setTimeOut",
            value: function() {
                null != this.chart && this.chart.resize()
            }
        }, {
            key: "componentDidMount",
            value: function() {
                setTimeout(this.draw, 10),
                window.addEventListener("resize", this.setTimeOut)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("resize", this.setTimeOut)
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    ref: "chart",
                    style: {
                        width: "100%",
                        height: 300
                    }
                })
            }
        }]),
        t
    }(l.Component);
    t.default = m
}
, function(e, t) {
    e.exports = echarts
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function i(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(0)
      , s = r(l)
      , c = n(1)
      , f = n(4)
      , d = r(f)
      , p = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.onClick = n.onClick.bind(n),
            n
        }
        return i(t, e),
        u(t, [{
            key: "onClick",
            value: function() {
                this.props.onClick(this.props.value)
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement(c.Button, {
                    size: "sm",
                    style: {
                        marginRight: "1px",
                        marginBottom: "1px"
                    },
                    color: "primary",
                    outline: this.props.currentValue != this.props.value,
                    onClick: this.onClick
                }, this.props.value)
            }
        }]),
        t
    }(l.Component)
      , h = function(e) {
        function t() {
            return o(this, t),
            a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return i(t, e),
        u(t, [{
            key: "render",
            value: function() {
                return s.default.createElement(c.FormGroup, null, s.default.createElement(c.Row, null, s.default.createElement(c.Label, {
                    xs: 12,
                    sm: 6,
                    md: 4,
                    lg: 4,
                    for: this.props._id
                }, this.props.name), s.default.createElement(c.Col, {
                    xs: 12,
                    sm: 6,
                    md: 8,
                    lg: 8
                }, this.props.children)))
            }
        }]),
        t
    }(l.Component)
      , m = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                goalSpeed: parseInt(d.default.getItem("goalSpeed")) || 1,
                goalWordSpeed: parseInt(d.default.getItem("goalWordSpeed")) || 30,
                currentLen: parseInt(d.default.getItem("currentLen")) || 10,
                article: d.default.getItem("article") || "",
                night: parseInt(d.default.getItem("night")) || 0,
                simple: parseInt(d.default.getItem("simple")) || 0
            },
            n.selectSpeed = n.selectSpeed.bind(n),
            n.selectLen = n.selectLen.bind(n),
            n.onInputArticle = n.onInputArticle.bind(n),
            n.triggerNight = n.triggerNight.bind(n),
            n.triggerMode = n.triggerMode.bind(n),
            n.modeMap = ["\u53ef\u7231", "\u65e5\u95f4", "\u591c\u95f4", "\u6728\u677f\u5899"],
            n.simpleMode = ["\u6b63\u5e38", "\u6781\u7b80"],
            n.onGoalWordSpeed = n.onGoalWordSpeed.bind(n),
            n
        }
        return i(t, e),
        u(t, [{
            key: "triggerNight",
            value: function(e) {
                var t = Math.max(this.modeMap.indexOf(e), 0);
                this.setState({
                    night: t
                }),
                d.default.setItem("night", t.toString()),
                window.forceUpdate()
            }
        }, {
            key: "onInputArticle",
            value: function(e) {
                this.setState({
                    article: e.target.value
                }),
                d.default.setItem("article", e.target.value)
            }
        }, {
            key: "selectLen",
            value: function(e) {
                this.setState({
                    currentLen: e
                }),
                d.default.setItem("currentLen", e.toString())
            }
        }, {
            key: "selectSpeed",
            value: function(e) {
                this.state.goalSpeed < e && d.default.setItem("wordsSelect", ""),
                this.setState({
                    goalSpeed: e
                }),
                d.default.setItem("goalSpeed", e.toString())
            }
        }, {
            key: "onGoalWordSpeed",
            value: function(e) {
                var t = parseInt(e.target.value) || 30;
                this.setState({
                    goalWordSpeed: t
                }),
                d.default.setItem("goalWordSpeed", t.toString())
            }
        }, {
            key: "triggerMode",
            value: function(e) {
                var t = Math.max(this.simpleMode.indexOf(e), 0);
                this.setState({
                    simple: t
                }),
                d.default.setItem("simple", t.toString()),
                window.forceUpdate()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                  , n = [10, 20, 30, 50, 100, 200, 500];
                return s.default.createElement(c.Card, null, s.default.createElement(c.CardHeader, null, "\u8bbe\u7f6e"), s.default.createElement(c.CardBody, null, s.default.createElement(c.Form, null, s.default.createElement(h, {
                    _id: "goal_speed",
                    name: "\u76ee\u6807\u51fb\u952e"
                }, t.map(function(t) {
                    return s.default.createElement(p, {
                        onClick: e.selectSpeed,
                        currentValue: e.state.goalSpeed,
                        value: t,
                        key: t
                    })
                }), s.default.createElement(c.FormText, null, "\u8fbe\u5230\u540e\uff0c\u4e14\u6b63\u786e\u7387>70%\uff0c\u624d\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u5b57\u7ee7\u7eed\u7ec3\u4e60\u3002")), s.default.createElement(h, {
                    _id: "goal_word_speed",
                    name: "\u76ee\u6807\u901f\u5ea6"
                }, s.default.createElement(c.InputGroup, null, s.default.createElement(c.Input, {
                    onChange: this.onGoalWordSpeed,
                    value: this.state.goalWordSpeed
                }), s.default.createElement(c.InputGroupAddon, {
                    addonType: "append"
                }, "\u5b57/\u5206"))), s.default.createElement(h, {
                    _id: "words_len",
                    name: "\u6bcf\u6bb5\u957f\u5ea6"
                }, n.map(function(t) {
                    return s.default.createElement(p, {
                        onClick: e.selectLen,
                        currentValue: e.state.currentLen,
                        value: t,
                        key: t
                    })
                })), s.default.createElement(h, {
                    _id: "night",
                    name: "\u76ae\u80a4"
                }, this.modeMap.map(function(t) {
                    return s.default.createElement(p, {
                        onClick: e.triggerNight,
                        currentValue: e.modeMap[e.state.night],
                        value: t,
                        key: t
                    })
                })), s.default.createElement(h, {
                    _id: "night",
                    name: "\u6a21\u5f0f"
                }, this.simpleMode.map(function(t) {
                    return s.default.createElement(p, {
                        onClick: e.triggerMode,
                        currentValue: e.simpleMode[e.state.simple],
                        value: t,
                        key: t
                    })
                }), s.default.createElement(c.FormText, null, "\u624b\u673a\u7528\u6237\u53ef\u9009\u62e9", s.default.createElement("strong", null, "\u6781\u7b80"), "\u3002")))))
            }
        }]),
        t
    }(l.Component);
    t.default = m
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function a(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , u = n(0)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u)
      , s = n(1)
      , c = (n(3),
    function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        i(t, [{
            key: "render",
            value: function() {
                return l.default.createElement(s.Card, {
                    className: "full"
                }, l.default.createElement(s.CardHeader, null, "\u5173\u4e8e"), l.default.createElement(s.CardBody, {
                    className: "full"
                }, l.default.createElement("h4", null, "\u4e00\u4e9b\u4f60\u53ef\u80fd\u4e0d\u4f1a\u6ce8\u610f\u5230\u7684\u7ec6\u8282"), l.default.createElement("hr", null), l.default.createElement("ul", null, l.default.createElement("li", null, "\u672c\u5de5\u5177\u8fd0\u884c\u65f6\u65e0\u9700\u8054\u7f51\uff0c\u6240\u6709\u6570\u636e\u90fd\u5b58\u50a8\u5728\u4f60\u7684\u672c\u5730\u3002\u52a0\u8f7d\u5b8c\u6bd5\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u5730\u94c1\u7b49\u6ca1\u6709\u4fe1\u53f7\u7684\u4f4d\u7f6e\u7ee7\u7eed\u7ec3\u4e60\uff0c\u6570\u636e\u4e0d\u4f1a\u4e22\u5931\u3002"), l.default.createElement("li", null, "\u6bcf\u6b21\u63d0\u9ad8", l.default.createElement("strong", null, "\u76ee\u6807\u51fb\u952e"), "\u540e\uff0c\u5df2\u7ec3\u4e60\u7684\u5b57\u4f1a\u88ab", l.default.createElement("strong", null, "\u91cd\u7f6e"), "\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002"), l.default.createElement("li", null, "\u591a\u4f59\u7684\u7a7a\u683c\u548c\u5b57\u6bcd\uff0c\u5728\u5224\u65ad\u6b63\u8bef\u65f6\u4f1a\u5ffd\u7565\u3002"), l.default.createElement("li", null, "\u8bf7\u628a\u5d4c\u5165\u6a21\u5f0f\u8bbe\u4e3a\u300c\u7f16\u7801\u300d\u6216\u300c\u7a7a\u767d\u300d\uff0c\u4e0d\u8981\u8bbe\u4e3a\u300c\u9996\u9009\u300d\uff0c\u5426\u5219\u4e8c\u7801\u53ca\u4e8c\u7801\u4ee5\u4e0a\u7684\u5b57\u90fd\u4f1a\u88ab\u5224\u65ad\u9519\u8bef\u3002"))))
            }
        }]),
        t
    }(u.Component));
    t.default = c
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    function a(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , u = n(0)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u)
      , s = n(1)
      , c = n(3)
      , f = function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        i(t, [{
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "navbar-all"
                }, l.default.createElement(s.ListGroup, {
                    color: "primary"
                }, l.default.createElement(c.NavLink, {
                    exact: !0,
                    to: "/",
                    activeClassName: "active",
                    className: "list-group-item"
                }, "\u6253\u5b57"), l.default.createElement(c.NavLink, {
                    exact: !0,
                    to: "/grade",
                    activeClassName: "active",
                    className: "list-group-item"
                }, "\u6210\u7ee9"), l.default.createElement(c.NavLink, {
                    exact: !0,
                    to: "/config",
                    activeClassName: "active",
                    className: "list-group-item"
                }, "\u8bbe\u7f6e"), l.default.createElement(c.NavLink, {
                    exact: !0,
                    activeClassName: "active",
                    className: "list-group-item",
                    to: "/help"
                }, "\u5173\u4e8e"), l.default.createElement(s.ListGroupItem, {
                    tag: "a",
                    href: "https://github.com/garfeng/xnhe"
                }, "Github"), l.default.createElement(s.ListGroupItem, {
                    tag: "a",
                    href: "http://www.flypy.com/"
                }, "\u5c0f\u9e64\u53cc\u62fc")))
            }
        }]),
        t
    }(u.Component);
    t.default = f
}
, function(e, t) {}
]);
