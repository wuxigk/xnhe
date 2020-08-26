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
    t.default = "\u7684\u4e00\u662f\u4e86\u4e0d\u5728\u6709\u4e2a\u4eba\u8fd9\u4e0a\u4e2d\u5927\u4e3a\u6765\u6211\u5230\u51fa\u8981\u4ee5\u65f6\u548c\u5730\u4eec\u5f97\u53ef\u4e0b\u5bf9\u751f\u4e5f\u5b50\u5c31\u8fc7\u80fd\u4ed6\u4f1a\u591a\u53d1\u8bf4\u800c\u4e8e\u81ea\u4e4b\u7528\u5e74\u884c\u5bb6\u65b9\u540e\u4f5c\u6210\u5f00\u9762\u4e8b\u597d\u5c0f\u5fc3\u524d\u6240\u9053\u6cd5\u5982\u8fdb\u7740\u540c\u7ecf\u5206\u5b9a\u90fd\u7136\u4e0e\u672c\u8fd8\u5176\u5f53\u8d77\u52a8\u5df2\u4e24\u70b9\u4ece\u95ee\u91cc\u4e3b\u5b9e\u5929\u9ad8\u53bb\u73b0\u957f\u6b64\u4e09\u5c06\u65e0\u56fd\u5168\u6587\u7406\u660e\u65e5\u4e9b\u770b\u53ea\u516c\u7b49\u5341\u610f\u6b63\u5916\u60f3\u95f4\u628a\u60c5\u8005\u6ca1\u91cd\u76f8\u90a3\u5411\u77e5\u56e0\u6837\u5b66\u5e94\u53c8\u624b\u4f46\u4fe1\u5173\u4f7f\u79cd\u89c1\u529b\u540d\u4e8c\u5904\u95e8\u5e76\u53e3\u4e48\u5148\u4f4d\u5934\u56de\u8bdd\u5f88\u518d\u7531\u8eab\u5165\u5185\u7b2c\u5e73\u88ab\u7ed9\u6b21\u522b\u51e0\u6708\u771f\u7acb\u65b0\u901a\u5c11\u673a\u6253\u6c34\u679c\u6700\u90e8\u4f55\u5b89\u63a5\u62a5\u58f0\u624d\u4f53\u4eca\u5408\u6027\u897f\u4f60\u653e\u8868\u76ee\u52a0\u5e38\u505a\u5df1\u8001\u56db\u4ef6\u89e3\u8def\u66f4\u8d70\u6bd4\u603b\u91d1\u7ba1\u5149\u5de5\u7ed3\u63d0\u4efb\u4e1c\u539f\u4fbf\u7f8e\u53ca\u6559\u96be\u4e16\u81f3\u6c14\u795e\u5c71\u6570\u5229\u4e66\u4ee3\u76f4\u8272\u573a\u53d8\u8bb0\u5f20\u5fc5\u53d7\u4ea4\u975e\u670d\u5316\u6c42\u98ce\u5ea6\u592a\u4e07\u5404\u7b97\u8fb9\u738b\u4ec0\u5feb\u8bb8\u8fde\u4e94\u6d3b\u601d\u8be5\u6b65\u6d77\u6307\u7269\u5219\u5973\u6216\u5b8c\u9a6c\u5f3a\u8a00\u6761\u7279\u547d\u611f\u6e05\u5e26\u8ba4\u4fdd\u671b\u8f6c\u4f20\u513f\u5236\u5e72\u8ba1\u6c11\u767d\u4f4f\u5b57\u5b83\u4e49\u8f66\u50cf\u53cd\u8c61\u9898\u5374\u6d41\u4e14\u5373\u6df1\u8fd1\u5f62\u53d6\u5f80\u7cfb\u91cf\u8bba\u544a\u606f\u8ba9\u51b3\u672a\u82b1\u6536\u6ee1\u6bcf\u534e\u4e1a\u5357\u89c9\u7535\u7a7a\u773c\u542c\u8fdc\u5e08\u5143\u8bf7\u5bb9\u5979\u519b\u58eb\u767e\u529e\u8bed\u671f\u5317\u6797\u8bc6\u534a\u592b\u5ba2\u6218\u9662\u57ce\u5019\u5355\u97f3\u53f0\u6b7b\u89c6\u9886\u5931\u53f8\u4eb2\u59cb\u6781\u53cc\u4ee4\u6539\u529f\u7a0b\u7231\u5fb7\u590d\u5207\u968f\u674e\u5458\u79bb\u8f7b\u89c2\u9752\u8db3\u843d\u53eb\u6839\u600e\u6301\u7cbe\u9001\u4f17\u5f71\u516b\u9996\u5305\u51c6\u5174\u7ea2\u8fbe\u65e9\u5c3d\u6545\u623f\u5f15\u706b\u7ad9\u4f3c\u627e\u5907\u8c03\u65ad\u8bbe\u683c\u6d88\u62c9\u7167\u5e03\u53cb\u6574\u672f\u77f3\u5c55\u7d27\u636e\u7ec8\u5468\u5f0f\u4e3e\u98de\u7247\u867d\u6613\u8fd0\u7b11\u4e91\u5efa\u8c08\u754c\u52a1\u5199\u94b1\u5546\u4e50\u63a8\u6ce8\u8d8a\u5343\u5fae\u82e5\u7ea6\u82f1\u96c6\u793a\u5462\u5f85\u5750\u8bae\u4e4e\u7559\u79f0\u54c1\u5fd7\u9ed1\u5b58\u516d\u9020\u4f4e\u6c5f\u5ff5\u4ea7\u523b\u8282\u5c14\u5403\u52bf\u4f9d\u56fe\u5171\u66fe\u54cd\u5e95\u88c5\u5177\u559c\u4e25\u4e5d\u51b5\u8ddf\u7f57\u987b\u663e\u70ed\u75c5\u8bc1\u521a\u6cbb\u7edd\u7fa4\u5e02\u9633\u786e\u7a76\u4e45\u9664\u95fb\u7b54\u6bb5\u5b98\u653f\u7c7b\u9ec4\u6b66\u4e03\u652f\u8d39\u7236\u7edf\u5e9c"
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
