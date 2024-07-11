/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var B_ = Object.create;
  var nn = Object.defineProperty;
  var W_ = Object.getOwnPropertyDescriptor;
  var H_ = Object.getOwnPropertyNames;
  var X_ = Object.getPrototypeOf,
    j_ = Object.prototype.hasOwnProperty;
  var he = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) nn(e, r, { get: t[r], enumerable: !0 });
    },
    Cs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of H_(t))
          !j_.call(e, i) &&
            i !== r &&
            nn(e, i, {
              get: () => t[i],
              enumerable: !(n = W_(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? B_(X_(e)) : {}),
      Cs(
        t || !e || !e.__esModule
          ? nn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = (e) => Cs(nn({}, "__esModule", { value: !0 }), e);
  var Ri = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, E) {
        var I = new y.Bare();
        return I.init(l, E);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (E) {
          return "-" + E.toLowerCase();
        });
      }
      function n(l) {
        var E = parseInt(l.slice(1), 16),
          I = (E >> 16) & 255,
          x = (E >> 8) & 255,
          T = 255 & E;
        return [I, x, T];
      }
      function i(l, E, I) {
        return (
          "#" + ((1 << 24) | (l << 16) | (E << 8) | I).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, E) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E);
      }
      function s(l, E, I) {
        f("Units do not match [" + l + "]: " + E + ", " + I);
      }
      function u(l, E, I) {
        if ((E !== void 0 && (I = E), l === void 0)) return I;
        var x = I;
        return (
          Me.test(l) || !We.test(l)
            ? (x = parseInt(l, 10))
            : We.test(l) && (x = 1e3 * parseFloat(l)),
          0 > x && (x = 0),
          x === x ? x : I
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function _(l) {
        for (var E = -1, I = l ? l.length : 0, x = []; ++E < I; ) {
          var T = l[E];
          T && x.push(T);
        }
        return x;
      }
      var h = (function (l, E, I) {
          function x(ie) {
            return typeof ie == "object";
          }
          function T(ie) {
            return typeof ie == "function";
          }
          function C() {}
          function Z(ie, ve) {
            function U() {
              var Re = new ae();
              return T(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function ae() {}
            ve === I && ((ve = ie), (ie = Object)), (U.Bare = ae);
            var se,
              be = (C[l] = ie[l]),
              tt = (ae[l] = U[l] = new C());
            return (
              (tt.constructor = U),
              (U.mixin = function (Re) {
                return (ae[l] = U[l] = Z(U, Re)[l]), U;
              }),
              (U.open = function (Re) {
                if (
                  ((se = {}),
                  T(Re) ? (se = Re.call(U, tt, be, U, ie)) : x(Re) && (se = Re),
                  x(se))
                )
                  for (var Er in se) E.call(se, Er) && (tt[Er] = se[Er]);
                return T(tt.init) || (tt.init = ie), U;
              }),
              U.open(ve)
            );
          }
          return Z;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (l, E, I, x) {
              var T = (l /= x) * l,
                C = T * l;
              return (
                E +
                I * (-2.75 * C * T + 11 * T * T + -15.5 * C + 8 * T + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, E, I, x) {
              var T = (l /= x) * l,
                C = T * l;
              return E + I * (-1 * C * T + 3 * T * T + -3 * C + 2 * T);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, E, I, x) {
              var T = (l /= x) * l,
                C = T * l;
              return (
                E +
                I * (0.3 * C * T + -1.6 * T * T + 2.2 * C + -1.8 * T + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, E, I, x) {
              var T = (l /= x) * l,
                C = T * l;
              return E + I * (2 * C * T + -5 * T * T + 2 * C + 2 * T);
            },
          ],
          linear: [
            "linear",
            function (l, E, I, x) {
              return (I * l) / x + E;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, E, I, x) {
              return I * (l /= x) * l + E;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, E, I, x) {
              return -I * (l /= x) * (l - 2) + E;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, E, I, x) {
              return (l /= x / 2) < 1
                ? (I / 2) * l * l + E
                : (-I / 2) * (--l * (l - 2) - 1) + E;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, E, I, x) {
              return I * (l /= x) * l * l + E;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, E, I, x) {
              return I * ((l = l / x - 1) * l * l + 1) + E;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, E, I, x) {
              return (l /= x / 2) < 1
                ? (I / 2) * l * l * l + E
                : (I / 2) * ((l -= 2) * l * l + 2) + E;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, E, I, x) {
              return I * (l /= x) * l * l * l + E;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, E, I, x) {
              return -I * ((l = l / x - 1) * l * l * l - 1) + E;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, E, I, x) {
              return (l /= x / 2) < 1
                ? (I / 2) * l * l * l * l + E
                : (-I / 2) * ((l -= 2) * l * l * l - 2) + E;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, E, I, x) {
              return I * (l /= x) * l * l * l * l + E;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, E, I, x) {
              return I * ((l = l / x - 1) * l * l * l * l + 1) + E;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, E, I, x) {
              return (l /= x / 2) < 1
                ? (I / 2) * l * l * l * l * l + E
                : (I / 2) * ((l -= 2) * l * l * l * l + 2) + E;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, E, I, x) {
              return -I * Math.cos((l / x) * (Math.PI / 2)) + I + E;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, E, I, x) {
              return I * Math.sin((l / x) * (Math.PI / 2)) + E;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, E, I, x) {
              return (-I / 2) * (Math.cos((Math.PI * l) / x) - 1) + E;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, E, I, x) {
              return l === 0 ? E : I * Math.pow(2, 10 * (l / x - 1)) + E;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, E, I, x) {
              return l === x
                ? E + I
                : I * (-Math.pow(2, (-10 * l) / x) + 1) + E;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, E, I, x) {
              return l === 0
                ? E
                : l === x
                ? E + I
                : (l /= x / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (l - 1)) + E
                : (I / 2) * (-Math.pow(2, -10 * --l) + 2) + E;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, E, I, x) {
              return -I * (Math.sqrt(1 - (l /= x) * l) - 1) + E;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, E, I, x) {
              return I * Math.sqrt(1 - (l = l / x - 1) * l) + E;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, E, I, x) {
              return (l /= x / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - l * l) - 1) + E
                : (I / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + E;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, E, I, x, T) {
              return (
                T === void 0 && (T = 1.70158),
                I * (l /= x) * l * ((T + 1) * l - T) + E
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, E, I, x, T) {
              return (
                T === void 0 && (T = 1.70158),
                I * ((l = l / x - 1) * l * ((T + 1) * l + T) + 1) + E
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, E, I, x, T) {
              return (
                T === void 0 && (T = 1.70158),
                (l /= x / 2) < 1
                  ? (I / 2) * l * l * (((T *= 1.525) + 1) * l - T) + E
                  : (I / 2) *
                      ((l -= 2) * l * (((T *= 1.525) + 1) * l + T) + 2) +
                    E
              );
            },
          ],
        },
        b = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        S = document,
        O = window,
        R = "bkwld-tram",
        A = /[\-\.0-9]/g,
        N = /[A-Z]/,
        L = "number",
        D = /^(rgb|#)/,
        G = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        z = /(deg|rad|turn)$/,
        X = "unitless",
        K = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        re = " ",
        F = S.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        q = ["-webkit-", "-moz-", "-o-", "-ms-"],
        W = function (l) {
          if (l in F.style) return { dom: l, css: l };
          var E,
            I,
            x = "",
            T = l.split("-");
          for (E = 0; E < T.length; E++)
            x += T[E].charAt(0).toUpperCase() + T[E].slice(1);
          for (E = 0; E < w.length; E++)
            if (((I = w[E] + x), I in F.style))
              return { dom: I, css: q[E] + l };
        },
        B = (t.support = {
          bind: Function.prototype.bind,
          transform: W("transform"),
          transition: W("transition"),
          backface: W("backface-visibility"),
          timing: W("transition-timing-function"),
        });
      if (B.transition) {
        var ee = B.timing.dom;
        if (((F.style[ee] = v["ease-in-back"][0]), !F.style[ee]))
          for (var ne in b) v[ne][0] = b[ne];
      }
      var M = (t.frame = (function () {
          var l =
            O.requestAnimationFrame ||
            O.webkitRequestAnimationFrame ||
            O.mozRequestAnimationFrame ||
            O.oRequestAnimationFrame ||
            O.msRequestAnimationFrame;
          return l && B.bind
            ? l.bind(O)
            : function (E) {
                O.setTimeout(E, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = O.performance,
            E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return E && B.bind
            ? E.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = h(function (l) {
          function E(te, ce) {
            var Ee = _(("" + te).split(re)),
              de = Ee[0];
            ce = ce || {};
            var Le = V[de];
            if (!Le) return f("Unsupported property: " + de);
            if (!ce.weak || !this.props[de]) {
              var Xe = Le[0],
                Fe = this.props[de];
              return (
                Fe || (Fe = this.props[de] = new Xe.Bare()),
                Fe.init(this.$el, Ee, Le, ce),
                Fe
              );
            }
          }
          function I(te, ce, Ee) {
            if (te) {
              var de = typeof te;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && ce)
              )
                return (
                  (this.timer = new ue({
                    duration: te,
                    context: this,
                    complete: C,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && ce) {
                switch (te) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    E.call(this, te, Ee && Ee[1]);
                }
                return C.call(this);
              }
              if (de == "function") return void te.call(this, this);
              if (de == "object") {
                var Le = 0;
                tt.call(
                  this,
                  te,
                  function (Te, U_) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(U_);
                  },
                  function (Te) {
                    "wait" in Te && (Le = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                    ((this.timer = new ue({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = C));
                var Xe = this,
                  Fe = !1,
                  rn = {};
                M(function () {
                  tt.call(Xe, te, function (Te) {
                    Te.active && ((Fe = !0), (rn[Te.name] = Te.nextStyle));
                  }),
                    Fe && Xe.$el.css(rn);
                });
              }
            }
          }
          function x(te) {
            (te = u(te, 0)),
              this.active
                ? this.queue.push({ options: te })
                : ((this.timer = new ue({
                    duration: te,
                    context: this,
                    complete: C,
                  })),
                  (this.active = !0));
          }
          function T(te) {
            return this.active
              ? (this.queue.push({ options: te, args: arguments }),
                void (this.timer.complete = C))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function C() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var te = this.queue.shift();
              I.call(this, te.options, !0, te.args);
            }
          }
          function Z(te) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof te == "string"
              ? ((ce = {}), (ce[te] = 1))
              : (ce = typeof te == "object" && te != null ? te : this.props),
              tt.call(this, ce, Re),
              be.call(this);
          }
          function ie(te) {
            Z.call(this, te), tt.call(this, te, Er, k_);
          }
          function ve(te) {
            typeof te != "string" && (te = "block"),
              (this.el.style.display = te);
          }
          function U() {
            Z.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function se() {
            Z.call(this), e.removeData(this.el, R), (this.$el = this.el = null);
          }
          function be() {
            var te,
              ce,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (te in this.props)
              (ce = this.props[te]), ce.active && Ee.push(ce.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[B.transition.dom] = Ee));
          }
          function tt(te, ce, Ee) {
            var de,
              Le,
              Xe,
              Fe,
              rn = ce !== Re,
              Te = {};
            for (de in te)
              (Xe = te[de]),
                de in fe
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[de] = Xe))
                  : (N.test(de) && (de = r(de)),
                    de in V ? (Te[de] = Xe) : (Fe || (Fe = {}), (Fe[de] = Xe)));
            for (de in Te) {
              if (((Xe = Te[de]), (Le = this.props[de]), !Le)) {
                if (!rn) continue;
                Le = E.call(this, de);
              }
              ce.call(this, Le, Xe);
            }
            Ee && Fe && Ee.call(this, Fe);
          }
          function Re(te) {
            te.stop();
          }
          function Er(te, ce) {
            te.set(ce);
          }
          function k_(te) {
            this.$el.css(te);
          }
          function He(te, ce) {
            l[te] = function () {
              return this.children
                ? V_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function V_(te, ce) {
            var Ee,
              de = this.children.length;
            for (Ee = 0; de > Ee; Ee++) te.apply(this.children[Ee], ce);
            return this;
          }
          (l.init = function (te) {
            if (
              ((this.$el = e(te)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = k(this.el, "transition");
              ce && !K.test(ce) && (this.upstream = ce);
            }
            B.backface &&
              oe.hideBackface &&
              p(this.el, B.backface.css, "hidden");
          }),
            He("add", E),
            He("start", I),
            He("wait", x),
            He("then", T),
            He("next", C),
            He("stop", Z),
            He("set", ie),
            He("show", ve),
            He("hide", U),
            He("redraw", ae),
            He("destroy", se);
        }),
        y = h(d, function (l) {
          function E(I, x) {
            var T = e.data(I, R) || e.data(I, R, new d.Bare());
            return T.el || T.init(I), x ? T.start(x) : T;
          }
          l.init = function (I, x) {
            var T = e(I);
            if (!T.length) return this;
            if (T.length === 1) return E(T[0], x);
            var C = [];
            return (
              T.each(function (Z, ie) {
                C.push(E(ie, x));
              }),
              (this.children = C),
              this
            );
          };
        }),
        m = h(function (l) {
          function E() {
            var C = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(C), Z;
          }
          function I(C, Z, ie) {
            return Z !== void 0 && (ie = Z), C in v ? C : ie;
          }
          function x(C) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
            return (Z ? i(Z[1], Z[2], Z[3]) : C).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var T = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (C, Z, ie, ve) {
            (this.$el = C), (this.el = C[0]);
            var U = Z[0];
            ie[2] && (U = ie[2]),
              Y[U] && (U = Y[U]),
              (this.name = U),
              (this.type = ie[1]),
              (this.duration = u(Z[1], this.duration, T.duration)),
              (this.ease = I(Z[2], this.ease, T.ease)),
              (this.delay = u(Z[3], this.delay, T.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    re +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? re + v[this.ease][0] : "") +
                    (this.delay ? re + this.delay + "ms" : "")));
          }),
            (l.set = function (C) {
              (C = this.convert(C, this.type)), this.update(C), this.redraw();
            }),
            (l.transition = function (C) {
              (this.active = !0),
                (C = this.convert(C, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  C == "auto" && (C = E.call(this))),
                (this.nextStyle = C);
            }),
            (l.fallback = function (C) {
              var Z =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (C = this.convert(C, this.type)),
                this.auto &&
                  (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  C == "auto" && (C = E.call(this))),
                (this.tween = new Q({
                  from: Z,
                  to: C,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return k(this.el, this.name);
            }),
            (l.update = function (C) {
              p(this.el, this.name, C);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var C = this.tween;
              C && C.context && C.destroy();
            }),
            (l.convert = function (C, Z) {
              if (C == "auto" && this.auto) return C;
              var ie,
                ve = typeof C == "number",
                U = typeof C == "string";
              switch (Z) {
                case L:
                  if (ve) return C;
                  if (U && C.replace(A, "") === "") return +C;
                  ie = "number(unitless)";
                  break;
                case D:
                  if (U) {
                    if (C === "" && this.original) return this.original;
                    if (Z.test(C))
                      return C.charAt(0) == "#" && C.length == 7 ? C : x(C);
                  }
                  ie = "hex or rgb string";
                  break;
                case G:
                  if (ve) return C + this.unit;
                  if (U && Z.test(C)) return C;
                  ie = "number(px) or string(unit)";
                  break;
                case P:
                  if (ve) return C + this.unit;
                  if (U && Z.test(C)) return C;
                  ie = "number(px) or string(unit or %)";
                  break;
                case z:
                  if (ve) return C + this.angle;
                  if (U && Z.test(C)) return C;
                  ie = "number(deg) or string(angle)";
                  break;
                case X:
                  if (ve || (U && P.test(C))) return C;
                  ie = "number(unitless) or string(unit or %)";
              }
              return a(ie, C), C;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        g = h(m, function (l, E) {
          l.init = function () {
            E.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), D));
          };
        }),
        H = h(m, function (l, E) {
          (l.init = function () {
            E.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        $ = h(m, function (l, E) {
          function I(x, T) {
            var C, Z, ie, ve, U;
            for (C in x)
              (ve = fe[C]),
                (ie = ve[0]),
                (Z = ve[1] || C),
                (U = this.convert(x[C], ie)),
                T.call(this, Z, U, ie);
          }
          (l.init = function () {
            E.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (x) {
              I.call(this, x, function (T, C) {
                this.current[T] = C;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (x) {
              var T = this.values(x);
              this.tween = new _e({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var C,
                Z = {};
              for (C in this.current) Z[C] = C in T ? T[C] : this.current[C];
              (this.active = !0), (this.nextStyle = this.style(Z));
            }),
            (l.fallback = function (x) {
              var T = this.values(x);
              this.tween = new _e({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (x) {
              var T,
                C = "";
              for (T in x) C += T + "(" + x[T] + ") ";
              return C;
            }),
            (l.values = function (x) {
              var T,
                C = {};
              return (
                I.call(this, x, function (Z, ie, ve) {
                  (C[Z] = ie),
                    this.current[Z] === void 0 &&
                      ((T = 0),
                      ~Z.indexOf("scale") && (T = 1),
                      (this.current[Z] = this.convert(T, ve)));
                }),
                C
              );
            });
        }),
        Q = h(function (l) {
          function E(U) {
            ie.push(U) === 1 && M(I);
          }
          function I() {
            var U,
              ae,
              se,
              be = ie.length;
            if (be)
              for (M(I), ae = j(), U = be; U--; )
                (se = ie[U]), se && se.render(ae);
          }
          function x(U) {
            var ae,
              se = e.inArray(U, ie);
            se >= 0 &&
              ((ae = ie.slice(se + 1)),
              (ie.length = se),
              ae.length && (ie = ie.concat(ae)));
          }
          function T(U) {
            return Math.round(U * ve) / ve;
          }
          function C(U, ae, se) {
            return i(
              U[0] + se * (ae[0] - U[0]),
              U[1] + se * (ae[1] - U[1]),
              U[2] + se * (ae[2] - U[2])
            );
          }
          var Z = { ease: v.ease[1], from: 0, to: 1 };
          (l.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var ae = U.ease || Z.ease;
            v[ae] && (ae = v[ae][1]),
              typeof ae != "function" && (ae = Z.ease),
              (this.ease = ae),
              (this.update = U.update || o),
              (this.complete = U.complete || o),
              (this.context = U.context || this),
              (this.name = U.name);
            var se = U.from,
              be = U.to;
            se === void 0 && (se = Z.from),
              be === void 0 && (be = Z.to),
              (this.unit = U.unit || ""),
              typeof se == "number" && typeof be == "number"
                ? ((this.begin = se), (this.change = be - se))
                : this.format(be, se),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              U.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), E(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), x(this));
            }),
            (l.render = function (U) {
              var ae,
                se = U - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var be = this.ease(se, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? C(this.startRGB, this.endRGB, be)
                    : T(this.begin + be * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (U, ae) {
              if (((ae += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = ae.replace(A, ""),
                  be = U.replace(A, "");
                se !== be && s("tween", ae, U), (this.unit = se);
              }
              (ae = parseFloat(ae)),
                (U = parseFloat(U)),
                (this.begin = this.value = ae),
                (this.change = U - ae);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ie = [],
            ve = 1e3;
        }),
        ue = h(Q, function (l) {
          (l.init = function (E) {
            (this.duration = E.duration || 0),
              (this.complete = E.complete || o),
              (this.context = E.context),
              this.play();
          }),
            (l.render = function (E) {
              var I = E - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        _e = h(Q, function (l, E) {
          (l.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var x, T;
            for (x in I.values)
              (T = I.values[x]),
                this.current[x] !== T &&
                  this.tweens.push(
                    new Q({
                      name: x,
                      from: this.current[x],
                      to: T,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (I) {
              var x,
                T,
                C = this.tweens.length,
                Z = !1;
              for (x = C; x--; )
                (T = this.tweens[x]),
                  T.context &&
                    (T.render(I), (this.current[T.name] = T.value), (Z = !0));
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((E.destroy.call(this), this.tweens)) {
                var I,
                  x = this.tweens.length;
                for (I = x; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !B.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!B.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var E = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = E.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new Q(l);
        }),
        (t.delay = function (l, E, I) {
          return new ue({ complete: E, duration: l, context: I });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        k = e.css,
        Y = { transform: B.transform && B.transform.css },
        V = {
          color: [g, D],
          background: [g, D, "background-color"],
          "outline-color": [g, D],
          "border-color": [g, D],
          "border-top-color": [g, D],
          "border-right-color": [g, D],
          "border-bottom-color": [g, D],
          "border-left-color": [g, D],
          "border-width": [m, G],
          "border-top-width": [m, G],
          "border-right-width": [m, G],
          "border-bottom-width": [m, G],
          "border-left-width": [m, G],
          "border-spacing": [m, G],
          "letter-spacing": [m, G],
          margin: [m, G],
          "margin-top": [m, G],
          "margin-right": [m, G],
          "margin-bottom": [m, G],
          "margin-left": [m, G],
          padding: [m, G],
          "padding-top": [m, G],
          "padding-right": [m, G],
          "padding-bottom": [m, G],
          "padding-left": [m, G],
          "outline-width": [m, G],
          opacity: [m, L],
          top: [m, P],
          right: [m, P],
          bottom: [m, P],
          left: [m, P],
          "font-size": [m, P],
          "text-indent": [m, P],
          "word-spacing": [m, P],
          width: [m, P],
          "min-width": [m, P],
          "max-width": [m, P],
          height: [m, P],
          "min-height": [m, P],
          "max-height": [m, P],
          "line-height": [m, X],
          "scroll-top": [H, L, "scrollTop"],
          "scroll-left": [H, L, "scrollLeft"],
        },
        fe = {};
      B.transform &&
        ((V.transform = [$]),
        (fe = {
          x: [P, "translateX"],
          y: [P, "translateY"],
          rotate: [z],
          rotateX: [z],
          rotateY: [z],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [z],
          skewX: [z],
          skewY: [z],
        })),
        B.transform &&
          B.backface &&
          ((fe.z = [P, "translateZ"]),
          (fe.rotateZ = [z]),
          (fe.scaleZ = [L]),
          (fe.perspective = [G]));
      var Me = /ms/,
        We = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ls = c((LU, Rs) => {
    "use strict";
    var z_ = window.$,
      K_ = Ri() && z_.tram;
    Rs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        _ = r.forEach,
        h = r.map,
        v = r.reduce,
        b = r.reduceRight,
        S = r.filter,
        O = r.every,
        R = r.some,
        A = r.indexOf,
        N = r.lastIndexOf,
        L = Array.isArray,
        D = Object.keys,
        G = i.bind,
        P =
          (e.each =
          e.forEach =
            function (w, q, W) {
              if (w == null) return w;
              if (_ && w.forEach === _) w.forEach(q, W);
              else if (w.length === +w.length) {
                for (var B = 0, ee = w.length; B < ee; B++)
                  if (q.call(W, w[B], B, w) === t) return;
              } else
                for (var ne = e.keys(w), B = 0, ee = ne.length; B < ee; B++)
                  if (q.call(W, w[ne[B]], ne[B], w) === t) return;
              return w;
            });
      (e.map = e.collect =
        function (w, q, W) {
          var B = [];
          return w == null
            ? B
            : h && w.map === h
            ? w.map(q, W)
            : (P(w, function (ee, ne, M) {
                B.push(q.call(W, ee, ne, M));
              }),
              B);
        }),
        (e.find = e.detect =
          function (w, q, W) {
            var B;
            return (
              z(w, function (ee, ne, M) {
                if (q.call(W, ee, ne, M)) return (B = ee), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (w, q, W) {
            var B = [];
            return w == null
              ? B
              : S && w.filter === S
              ? w.filter(q, W)
              : (P(w, function (ee, ne, M) {
                  q.call(W, ee, ne, M) && B.push(ee);
                }),
                B);
          });
      var z =
        (e.some =
        e.any =
          function (w, q, W) {
            q || (q = e.identity);
            var B = !1;
            return w == null
              ? B
              : R && w.some === R
              ? w.some(q, W)
              : (P(w, function (ee, ne, M) {
                  if (B || (B = q.call(W, ee, ne, M))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (w, q) {
          return w == null
            ? !1
            : A && w.indexOf === A
            ? w.indexOf(q) != -1
            : z(w, function (W) {
                return W === q;
              });
        }),
        (e.delay = function (w, q) {
          var W = a.call(arguments, 2);
          return setTimeout(function () {
            return w.apply(null, W);
          }, q);
        }),
        (e.defer = function (w) {
          return e.delay.apply(e, [w, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (w) {
          var q, W, B;
          return function () {
            q ||
              ((q = !0),
              (W = arguments),
              (B = this),
              K_.frame(function () {
                (q = !1), w.apply(B, W);
              }));
          };
        }),
        (e.debounce = function (w, q, W) {
          var B,
            ee,
            ne,
            M,
            j,
            d = function () {
              var y = e.now() - M;
              y < q
                ? (B = setTimeout(d, q - y))
                : ((B = null), W || ((j = w.apply(ne, ee)), (ne = ee = null)));
            };
          return function () {
            (ne = this), (ee = arguments), (M = e.now());
            var y = W && !B;
            return (
              B || (B = setTimeout(d, q)),
              y && ((j = w.apply(ne, ee)), (ne = ee = null)),
              j
            );
          };
        }),
        (e.defaults = function (w) {
          if (!e.isObject(w)) return w;
          for (var q = 1, W = arguments.length; q < W; q++) {
            var B = arguments[q];
            for (var ee in B) w[ee] === void 0 && (w[ee] = B[ee]);
          }
          return w;
        }),
        (e.keys = function (w) {
          if (!e.isObject(w)) return [];
          if (D) return D(w);
          var q = [];
          for (var W in w) e.has(w, W) && q.push(W);
          return q;
        }),
        (e.has = function (w, q) {
          return f.call(w, q);
        }),
        (e.isObject = function (w) {
          return w === Object(w);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var X = /(.)^/,
        K = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        re = function (w) {
          return "\\" + K[w];
        },
        F = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (w, q, W) {
          !q && W && (q = W), (q = e.defaults({}, q, e.templateSettings));
          var B = RegExp(
              [
                (q.escape || X).source,
                (q.interpolate || X).source,
                (q.evaluate || X).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            ne = "__p+='";
          w.replace(B, function (y, m, g, H, $) {
            return (
              (ne += w.slice(ee, $).replace(J, re)),
              (ee = $ + y.length),
              m
                ? (ne +=
                    `'+
((__t=(` +
                    m +
                    `))==null?'':_.escape(__t))+
'`)
                : g
                ? (ne +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':__t)+
'`)
                : H &&
                  (ne +=
                    `';
` +
                    H +
                    `
__p+='`),
              y
            );
          }),
            (ne += `';
`);
          var M = q.variable;
          if (M) {
            if (!F.test(M))
              throw new Error("variable is not a bare identifier: " + M);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (M = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var j;
          try {
            j = new Function(q.variable || "obj", "_", ne);
          } catch (y) {
            throw ((y.source = ne), y);
          }
          var d = function (y) {
            return j.call(this, y, e);
          };
          return (
            (d.source =
              "function(" +
              M +
              `){
` +
              ne +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var Ke = c((NU, ks) => {
    "use strict";
    var pe = {},
      Vt = {},
      Ut = [],
      Ni = window.Webflow || [],
      mt = window.jQuery,
      ze = mt(window),
      Y_ = mt(document),
      nt = mt.isFunction,
      je = (pe._ = Ls()),
      Ps = (pe.tram = Ri() && mt.tram),
      an = !1,
      Pi = !1;
    Ps.config.hideBackface = !1;
    Ps.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Vt[e] && Ms(Vt[e]);
      var n = (Vt[e] = t(mt, je, r) || {});
      return qs(n), n;
    };
    pe.require = function (e) {
      return Vt[e];
    };
    function qs(e) {
      pe.env() &&
        (nt(e.design) && ze.on("__wf_design", e.design),
        nt(e.preview) && ze.on("__wf_preview", e.preview)),
        nt(e.destroy) && ze.on("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && $_(e);
    }
    function $_(e) {
      if (an) {
        e.ready();
        return;
      }
      je.contains(Ut, e.ready) || Ut.push(e.ready);
    }
    function Ms(e) {
      nt(e.design) && ze.off("__wf_design", e.design),
        nt(e.preview) && ze.off("__wf_preview", e.preview),
        nt(e.destroy) && ze.off("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && Q_(e);
    }
    function Q_(e) {
      Ut = je.filter(Ut, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (an) {
        nt(e) && e();
        return;
      }
      Ni.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var on = navigator.userAgent.toLowerCase(),
      Fs = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Z_ = (pe.env.chrome =
        /chrome/.test(on) &&
        /Google/.test(navigator.vendor) &&
        parseInt(on.match(/chrome\/(\d+)\./)[1], 10)),
      J_ = (pe.env.ios = /(ipod|iphone|ipad)/.test(on));
    pe.env.safari = /safari/.test(on) && !Z_ && !J_;
    var Li;
    Fs &&
      Y_.on("touchstart mousedown", function (e) {
        Li = e.target;
      });
    pe.validClick = Fs
      ? function (e) {
          return e === Li || mt.contains(e, Li);
        }
      : function () {
          return !0;
        };
    var Ds = "resize.webflow orientationchange.webflow load.webflow",
      eb = "scroll.webflow " + Ds;
    pe.resize = qi(ze, Ds);
    pe.scroll = qi(ze, eb);
    pe.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = je.throttle(function (i) {
          je.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (je.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = je.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (an = !0), Pi ? tb() : je.each(Ut, Ns), je.each(Ni, Ns), pe.resize.up();
    };
    function Ns(e) {
      nt(e) && e();
    }
    function tb() {
      (Pi = !1), je.each(Vt, qs);
    }
    var Ct;
    pe.load = function (e) {
      Ct.then(e);
    };
    function Gs() {
      Ct && (Ct.reject(), ze.off("load", Ct.resolve)),
        (Ct = new mt.Deferred()),
        ze.on("load", Ct.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Pi = !0),
        ze.triggerHandler("__wf_destroy"),
        e.domready != null && (an = e.domready),
        je.each(Vt, Ms),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (Ut = []),
        (Ni = []),
        Ct.state() === "pending" && Gs();
    };
    mt(pe.ready);
    Gs();
    ks.exports = window.Webflow = pe;
  });
  var Bs = c((PU, Us) => {
    "use strict";
    var Vs = Ke();
    Vs.define(
      "brand",
      (Us.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var b = n.attr("data-wf-status"),
            S = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(S) && a.hostname !== S && (b = !0),
            b &&
              !s &&
              ((f = f || h()),
              v(),
              setTimeout(v, 500),
              e(r).off(u, _).on(u, _));
        };
        function _() {
          var b =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", b ? "display: none !important;" : "");
        }
        function h() {
          var b = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            S = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return b.append(S, O), b[0];
        }
        function v() {
          var b = i.children(o),
            S = b.length && b.get(0) === f,
            O = Vs.env("editor");
          if (S) {
            O && b.remove();
            return;
          }
          b.length && b.remove(), O || i.append(f);
        }
        return t;
      })
    );
  });
  var Hs = c((qU, Ws) => {
    "use strict";
    var rb = Ke();
    rb.define(
      "focus-visible",
      (Ws.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function u(L) {
            var D = L.type,
              G = L.tagName;
            return !!(
              (G === "INPUT" && a[D] && !L.readOnly) ||
              (G === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function f(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function _(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function h(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function b(L) {
            s(L.target) && (n || u(L.target)) && f(L.target);
          }
          function S(L) {
            s(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              _(L.target));
          }
          function O() {
            document.visibilityState === "hidden" && (i && (n = !0), R());
          }
          function R() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function A() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", O, !0),
            R(),
            r.addEventListener("focus", b, !0),
            r.addEventListener("blur", S, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var zs = c((MU, js) => {
    "use strict";
    var Xs = Ke();
    Xs.define(
      "focus",
      (js.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var $s = c((FU, Ys) => {
    "use strict";
    var Mi = window.jQuery,
      it = {},
      sn = [],
      Ks = ".w-ix",
      un = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Mi(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Mi(t).triggerHandler(it.types.OUTRO));
        },
      };
    it.triggers = {};
    it.types = { INTRO: "w-ix-intro" + Ks, OUTRO: "w-ix-outro" + Ks };
    it.init = function () {
      for (var e = sn.length, t = 0; t < e; t++) {
        var r = sn[t];
        r[0](0, r[1]);
      }
      (sn = []), Mi.extend(it.triggers, un);
    };
    it.async = function () {
      for (var e in un) {
        var t = un[e];
        un.hasOwnProperty(e) &&
          (it.triggers[e] = function (r, n) {
            sn.push([t, n]);
          });
      }
    };
    it.async();
    Ys.exports = it;
  });
  var ln = c((DU, Js) => {
    "use strict";
    var Fi = $s();
    function Qs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var nb = window.jQuery,
      cn = {},
      Zs = ".w-ix",
      ib = {
        reset: function (e, t) {
          Fi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Fi.triggers.intro(e, t), Qs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Fi.triggers.outro(e, t), Qs(t, "COMPONENT_INACTIVE");
        },
      };
    cn.triggers = {};
    cn.types = { INTRO: "w-ix-intro" + Zs, OUTRO: "w-ix-outro" + Zs };
    nb.extend(cn.triggers, ib);
    Js.exports = cn;
  });
  var eu = c((GU, dt) => {
    function Di(e) {
      return (
        (dt.exports = Di =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Di(e)
      );
    }
    (dt.exports = Di),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var fn = c((kU, mr) => {
    var ob = eu().default;
    function tu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (tu = function (i) {
        return i ? r : t;
      })(e);
    }
    function ab(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (ob(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = tu(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (mr.exports = ab),
      (mr.exports.__esModule = !0),
      (mr.exports.default = mr.exports);
  });
  var ru = c((VU, _r) => {
    function sb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (_r.exports = sb),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var ye = c((UU, nu) => {
    var dn = function (e) {
      return e && e.Math == Math && e;
    };
    nu.exports =
      dn(typeof globalThis == "object" && globalThis) ||
      dn(typeof window == "object" && window) ||
      dn(typeof self == "object" && self) ||
      dn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Bt = c((BU, iu) => {
    iu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Rt = c((WU, ou) => {
    var ub = Bt();
    ou.exports = !ub(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var pn = c((HU, au) => {
    var br = Function.prototype.call;
    au.exports = br.bind
      ? br.bind(br)
      : function () {
          return br.apply(br, arguments);
        };
  });
  var lu = c((cu) => {
    "use strict";
    var su = {}.propertyIsEnumerable,
      uu = Object.getOwnPropertyDescriptor,
      cb = uu && !su.call({ 1: 2 }, 1);
    cu.f = cb
      ? function (t) {
          var r = uu(this, t);
          return !!r && r.enumerable;
        }
      : su;
  });
  var Gi = c((jU, fu) => {
    fu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((zU, pu) => {
    var du = Function.prototype,
      ki = du.bind,
      Vi = du.call,
      lb = ki && ki.bind(Vi);
    pu.exports = ki
      ? function (e) {
          return e && lb(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var hu = c((KU, gu) => {
    var vu = Ye(),
      fb = vu({}.toString),
      db = vu("".slice);
    gu.exports = function (e) {
      return db(fb(e), 8, -1);
    };
  });
  var Eu = c((YU, yu) => {
    var pb = ye(),
      vb = Ye(),
      gb = Bt(),
      hb = hu(),
      Ui = pb.Object,
      yb = vb("".split);
    yu.exports = gb(function () {
      return !Ui("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return hb(e) == "String" ? yb(e, "") : Ui(e);
        }
      : Ui;
  });
  var Bi = c(($U, mu) => {
    var Eb = ye(),
      mb = Eb.TypeError;
    mu.exports = function (e) {
      if (e == null) throw mb("Can't call method on " + e);
      return e;
    };
  });
  var Tr = c((QU, _u) => {
    var _b = Eu(),
      bb = Bi();
    _u.exports = function (e) {
      return _b(bb(e));
    };
  });
  var ot = c((ZU, bu) => {
    bu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Wt = c((JU, Tu) => {
    var Tb = ot();
    Tu.exports = function (e) {
      return typeof e == "object" ? e !== null : Tb(e);
    };
  });
  var Ir = c((eB, Iu) => {
    var Wi = ye(),
      Ib = ot(),
      Ob = function (e) {
        return Ib(e) ? e : void 0;
      };
    Iu.exports = function (e, t) {
      return arguments.length < 2 ? Ob(Wi[e]) : Wi[e] && Wi[e][t];
    };
  });
  var Au = c((tB, Ou) => {
    var Ab = Ye();
    Ou.exports = Ab({}.isPrototypeOf);
  });
  var xu = c((rB, wu) => {
    var wb = Ir();
    wu.exports = wb("navigator", "userAgent") || "";
  });
  var qu = c((nB, Pu) => {
    var Nu = ye(),
      Hi = xu(),
      Su = Nu.process,
      Cu = Nu.Deno,
      Ru = (Su && Su.versions) || (Cu && Cu.version),
      Lu = Ru && Ru.v8,
      $e,
      vn;
    Lu &&
      (($e = Lu.split(".")),
      (vn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !vn &&
      Hi &&
      (($e = Hi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Hi.match(/Chrome\/(\d+)/)), $e && (vn = +$e[1])));
    Pu.exports = vn;
  });
  var Xi = c((iB, Fu) => {
    var Mu = qu(),
      xb = Bt();
    Fu.exports =
      !!Object.getOwnPropertySymbols &&
      !xb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Mu && Mu < 41)
        );
      });
  });
  var ji = c((oB, Du) => {
    var Sb = Xi();
    Du.exports = Sb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var zi = c((aB, Gu) => {
    var Cb = ye(),
      Rb = Ir(),
      Lb = ot(),
      Nb = Au(),
      Pb = ji(),
      qb = Cb.Object;
    Gu.exports = Pb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Rb("Symbol");
          return Lb(t) && Nb(t.prototype, qb(e));
        };
  });
  var Vu = c((sB, ku) => {
    var Mb = ye(),
      Fb = Mb.String;
    ku.exports = function (e) {
      try {
        return Fb(e);
      } catch {
        return "Object";
      }
    };
  });
  var Bu = c((uB, Uu) => {
    var Db = ye(),
      Gb = ot(),
      kb = Vu(),
      Vb = Db.TypeError;
    Uu.exports = function (e) {
      if (Gb(e)) return e;
      throw Vb(kb(e) + " is not a function");
    };
  });
  var Hu = c((cB, Wu) => {
    var Ub = Bu();
    Wu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Ub(r);
    };
  });
  var ju = c((lB, Xu) => {
    var Bb = ye(),
      Ki = pn(),
      Yi = ot(),
      $i = Wt(),
      Wb = Bb.TypeError;
    Xu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e)))) ||
        (Yi((r = e.valueOf)) && !$i((n = Ki(r, e)))) ||
        (t !== "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e))))
      )
        return n;
      throw Wb("Can't convert object to primitive value");
    };
  });
  var Ku = c((fB, zu) => {
    zu.exports = !1;
  });
  var gn = c((dB, $u) => {
    var Yu = ye(),
      Hb = Object.defineProperty;
    $u.exports = function (e, t) {
      try {
        Hb(Yu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Yu[e] = t;
      }
      return t;
    };
  });
  var hn = c((pB, Zu) => {
    var Xb = ye(),
      jb = gn(),
      Qu = "__core-js_shared__",
      zb = Xb[Qu] || jb(Qu, {});
    Zu.exports = zb;
  });
  var Qi = c((vB, ec) => {
    var Kb = Ku(),
      Ju = hn();
    (ec.exports = function (e, t) {
      return Ju[e] || (Ju[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Kb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var rc = c((gB, tc) => {
    var Yb = ye(),
      $b = Bi(),
      Qb = Yb.Object;
    tc.exports = function (e) {
      return Qb($b(e));
    };
  });
  var _t = c((hB, nc) => {
    var Zb = Ye(),
      Jb = rc(),
      eT = Zb({}.hasOwnProperty);
    nc.exports =
      Object.hasOwn ||
      function (t, r) {
        return eT(Jb(t), r);
      };
  });
  var Zi = c((yB, ic) => {
    var tT = Ye(),
      rT = 0,
      nT = Math.random(),
      iT = tT((1).toString);
    ic.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + iT(++rT + nT, 36);
    };
  });
  var Ji = c((EB, cc) => {
    var oT = ye(),
      aT = Qi(),
      oc = _t(),
      sT = Zi(),
      ac = Xi(),
      uc = ji(),
      Ht = aT("wks"),
      Lt = oT.Symbol,
      sc = Lt && Lt.for,
      uT = uc ? Lt : (Lt && Lt.withoutSetter) || sT;
    cc.exports = function (e) {
      if (!oc(Ht, e) || !(ac || typeof Ht[e] == "string")) {
        var t = "Symbol." + e;
        ac && oc(Lt, e)
          ? (Ht[e] = Lt[e])
          : uc && sc
          ? (Ht[e] = sc(t))
          : (Ht[e] = uT(t));
      }
      return Ht[e];
    };
  });
  var pc = c((mB, dc) => {
    var cT = ye(),
      lT = pn(),
      lc = Wt(),
      fc = zi(),
      fT = Hu(),
      dT = ju(),
      pT = Ji(),
      vT = cT.TypeError,
      gT = pT("toPrimitive");
    dc.exports = function (e, t) {
      if (!lc(e) || fc(e)) return e;
      var r = fT(e, gT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = lT(r, e, t)), !lc(n) || fc(n))
        )
          return n;
        throw vT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), dT(e, t);
    };
  });
  var eo = c((_B, vc) => {
    var hT = pc(),
      yT = zi();
    vc.exports = function (e) {
      var t = hT(e, "string");
      return yT(t) ? t : t + "";
    };
  });
  var ro = c((bB, hc) => {
    var ET = ye(),
      gc = Wt(),
      to = ET.document,
      mT = gc(to) && gc(to.createElement);
    hc.exports = function (e) {
      return mT ? to.createElement(e) : {};
    };
  });
  var no = c((TB, yc) => {
    var _T = Rt(),
      bT = Bt(),
      TT = ro();
    yc.exports =
      !_T &&
      !bT(function () {
        return (
          Object.defineProperty(TT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var io = c((mc) => {
    var IT = Rt(),
      OT = pn(),
      AT = lu(),
      wT = Gi(),
      xT = Tr(),
      ST = eo(),
      CT = _t(),
      RT = no(),
      Ec = Object.getOwnPropertyDescriptor;
    mc.f = IT
      ? Ec
      : function (t, r) {
          if (((t = xT(t)), (r = ST(r)), RT))
            try {
              return Ec(t, r);
            } catch {}
          if (CT(t, r)) return wT(!OT(AT.f, t, r), t[r]);
        };
  });
  var Or = c((OB, bc) => {
    var _c = ye(),
      LT = Wt(),
      NT = _c.String,
      PT = _c.TypeError;
    bc.exports = function (e) {
      if (LT(e)) return e;
      throw PT(NT(e) + " is not an object");
    };
  });
  var Ar = c((Oc) => {
    var qT = ye(),
      MT = Rt(),
      FT = no(),
      Tc = Or(),
      DT = eo(),
      GT = qT.TypeError,
      Ic = Object.defineProperty;
    Oc.f = MT
      ? Ic
      : function (t, r, n) {
          if ((Tc(t), (r = DT(r)), Tc(n), FT))
            try {
              return Ic(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw GT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((wB, Ac) => {
    var kT = Rt(),
      VT = Ar(),
      UT = Gi();
    Ac.exports = kT
      ? function (e, t, r) {
          return VT.f(e, t, UT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var ao = c((xB, wc) => {
    var BT = Ye(),
      WT = ot(),
      oo = hn(),
      HT = BT(Function.toString);
    WT(oo.inspectSource) ||
      (oo.inspectSource = function (e) {
        return HT(e);
      });
    wc.exports = oo.inspectSource;
  });
  var Cc = c((SB, Sc) => {
    var XT = ye(),
      jT = ot(),
      zT = ao(),
      xc = XT.WeakMap;
    Sc.exports = jT(xc) && /native code/.test(zT(xc));
  });
  var so = c((CB, Lc) => {
    var KT = Qi(),
      YT = Zi(),
      Rc = KT("keys");
    Lc.exports = function (e) {
      return Rc[e] || (Rc[e] = YT(e));
    };
  });
  var En = c((RB, Nc) => {
    Nc.exports = {};
  });
  var Gc = c((LB, Dc) => {
    var $T = Cc(),
      Fc = ye(),
      uo = Ye(),
      QT = Wt(),
      ZT = yn(),
      co = _t(),
      lo = hn(),
      JT = so(),
      eI = En(),
      Pc = "Object already initialized",
      po = Fc.TypeError,
      tI = Fc.WeakMap,
      mn,
      wr,
      _n,
      rI = function (e) {
        return _n(e) ? wr(e) : mn(e, {});
      },
      nI = function (e) {
        return function (t) {
          var r;
          if (!QT(t) || (r = wr(t)).type !== e)
            throw po("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    $T || lo.state
      ? ((bt = lo.state || (lo.state = new tI())),
        (qc = uo(bt.get)),
        (fo = uo(bt.has)),
        (Mc = uo(bt.set)),
        (mn = function (e, t) {
          if (fo(bt, e)) throw new po(Pc);
          return (t.facade = e), Mc(bt, e, t), t;
        }),
        (wr = function (e) {
          return qc(bt, e) || {};
        }),
        (_n = function (e) {
          return fo(bt, e);
        }))
      : ((Nt = JT("state")),
        (eI[Nt] = !0),
        (mn = function (e, t) {
          if (co(e, Nt)) throw new po(Pc);
          return (t.facade = e), ZT(e, Nt, t), t;
        }),
        (wr = function (e) {
          return co(e, Nt) ? e[Nt] : {};
        }),
        (_n = function (e) {
          return co(e, Nt);
        }));
    var bt, qc, fo, Mc, Nt;
    Dc.exports = { set: mn, get: wr, has: _n, enforce: rI, getterFor: nI };
  });
  var Uc = c((NB, Vc) => {
    var vo = Rt(),
      iI = _t(),
      kc = Function.prototype,
      oI = vo && Object.getOwnPropertyDescriptor,
      go = iI(kc, "name"),
      aI = go && function () {}.name === "something",
      sI = go && (!vo || (vo && oI(kc, "name").configurable));
    Vc.exports = { EXISTS: go, PROPER: aI, CONFIGURABLE: sI };
  });
  var jc = c((PB, Xc) => {
    var uI = ye(),
      Bc = ot(),
      cI = _t(),
      Wc = yn(),
      lI = gn(),
      fI = ao(),
      Hc = Gc(),
      dI = Uc().CONFIGURABLE,
      pI = Hc.get,
      vI = Hc.enforce,
      gI = String(String).split("String");
    (Xc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Bc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!cI(r, "name") || (dI && r.name !== s)) && Wc(r, "name", s),
          (u = vI(r)),
          u.source || (u.source = gI.join(typeof s == "string" ? s : ""))),
        e === uI)
      ) {
        o ? (e[t] = r) : lI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Wc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Bc(this) && pI(this).source) || fI(this);
    });
  });
  var ho = c((qB, zc) => {
    var hI = Math.ceil,
      yI = Math.floor;
    zc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? yI : hI)(t);
    };
  });
  var Yc = c((MB, Kc) => {
    var EI = ho(),
      mI = Math.max,
      _I = Math.min;
    Kc.exports = function (e, t) {
      var r = EI(e);
      return r < 0 ? mI(r + t, 0) : _I(r, t);
    };
  });
  var Qc = c((FB, $c) => {
    var bI = ho(),
      TI = Math.min;
    $c.exports = function (e) {
      return e > 0 ? TI(bI(e), 9007199254740991) : 0;
    };
  });
  var Jc = c((DB, Zc) => {
    var II = Qc();
    Zc.exports = function (e) {
      return II(e.length);
    };
  });
  var yo = c((GB, tl) => {
    var OI = Tr(),
      AI = Yc(),
      wI = Jc(),
      el = function (e) {
        return function (t, r, n) {
          var i = OI(t),
            o = wI(i),
            a = AI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    tl.exports = { includes: el(!0), indexOf: el(!1) };
  });
  var mo = c((kB, nl) => {
    var xI = Ye(),
      Eo = _t(),
      SI = Tr(),
      CI = yo().indexOf,
      RI = En(),
      rl = xI([].push);
    nl.exports = function (e, t) {
      var r = SI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Eo(RI, o) && Eo(r, o) && rl(i, o);
      for (; t.length > n; ) Eo(r, (o = t[n++])) && (~CI(i, o) || rl(i, o));
      return i;
    };
  });
  var bn = c((VB, il) => {
    il.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var al = c((ol) => {
    var LI = mo(),
      NI = bn(),
      PI = NI.concat("length", "prototype");
    ol.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return LI(t, PI);
      };
  });
  var ul = c((sl) => {
    sl.f = Object.getOwnPropertySymbols;
  });
  var ll = c((WB, cl) => {
    var qI = Ir(),
      MI = Ye(),
      FI = al(),
      DI = ul(),
      GI = Or(),
      kI = MI([].concat);
    cl.exports =
      qI("Reflect", "ownKeys") ||
      function (t) {
        var r = FI.f(GI(t)),
          n = DI.f;
        return n ? kI(r, n(t)) : r;
      };
  });
  var dl = c((HB, fl) => {
    var VI = _t(),
      UI = ll(),
      BI = io(),
      WI = Ar();
    fl.exports = function (e, t) {
      for (var r = UI(t), n = WI.f, i = BI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        VI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var vl = c((XB, pl) => {
    var HI = Bt(),
      XI = ot(),
      jI = /#|\.prototype\./,
      xr = function (e, t) {
        var r = KI[zI(e)];
        return r == $I ? !0 : r == YI ? !1 : XI(t) ? HI(t) : !!t;
      },
      zI = (xr.normalize = function (e) {
        return String(e).replace(jI, ".").toLowerCase();
      }),
      KI = (xr.data = {}),
      YI = (xr.NATIVE = "N"),
      $I = (xr.POLYFILL = "P");
    pl.exports = xr;
  });
  var hl = c((jB, gl) => {
    var _o = ye(),
      QI = io().f,
      ZI = yn(),
      JI = jc(),
      e0 = gn(),
      t0 = dl(),
      r0 = vl();
    gl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        _;
      if (
        (n
          ? (a = _o)
          : i
          ? (a = _o[r] || e0(r, {}))
          : (a = (_o[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((_ = QI(a, s)), (u = _ && _.value)) : (u = a[s]),
            (o = r0(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            t0(f, u);
          }
          (e.sham || (u && u.sham)) && ZI(f, "sham", !0), JI(a, s, f, e);
        }
    };
  });
  var El = c((zB, yl) => {
    var n0 = mo(),
      i0 = bn();
    yl.exports =
      Object.keys ||
      function (t) {
        return n0(t, i0);
      };
  });
  var _l = c((KB, ml) => {
    var o0 = Rt(),
      a0 = Ar(),
      s0 = Or(),
      u0 = Tr(),
      c0 = El();
    ml.exports = o0
      ? Object.defineProperties
      : function (t, r) {
          s0(t);
          for (var n = u0(r), i = c0(r), o = i.length, a = 0, s; o > a; )
            a0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Tl = c((YB, bl) => {
    var l0 = Ir();
    bl.exports = l0("document", "documentElement");
  });
  var Rl = c(($B, Cl) => {
    var f0 = Or(),
      d0 = _l(),
      Il = bn(),
      p0 = En(),
      v0 = Tl(),
      g0 = ro(),
      h0 = so(),
      Ol = ">",
      Al = "<",
      To = "prototype",
      Io = "script",
      xl = h0("IE_PROTO"),
      bo = function () {},
      Sl = function (e) {
        return Al + Io + Ol + e + Al + "/" + Io + Ol;
      },
      wl = function (e) {
        e.write(Sl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      y0 = function () {
        var e = g0("iframe"),
          t = "java" + Io + ":",
          r;
        return (
          (e.style.display = "none"),
          v0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Sl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Tn,
      In = function () {
        try {
          Tn = new ActiveXObject("htmlfile");
        } catch {}
        In =
          typeof document < "u"
            ? document.domain && Tn
              ? wl(Tn)
              : y0()
            : wl(Tn);
        for (var e = Il.length; e--; ) delete In[To][Il[e]];
        return In();
      };
    p0[xl] = !0;
    Cl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((bo[To] = f0(t)), (n = new bo()), (bo[To] = null), (n[xl] = t))
            : (n = In()),
          r === void 0 ? n : d0(n, r)
        );
      };
  });
  var Nl = c((QB, Ll) => {
    var E0 = Ji(),
      m0 = Rl(),
      _0 = Ar(),
      Oo = E0("unscopables"),
      Ao = Array.prototype;
    Ao[Oo] == null && _0.f(Ao, Oo, { configurable: !0, value: m0(null) });
    Ll.exports = function (e) {
      Ao[Oo][e] = !0;
    };
  });
  var Pl = c(() => {
    "use strict";
    var b0 = hl(),
      T0 = yo().includes,
      I0 = Nl();
    b0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return T0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    I0("includes");
  });
  var Ml = c((e5, ql) => {
    var O0 = ye(),
      A0 = Ye();
    ql.exports = function (e, t) {
      return A0(O0[e].prototype[t]);
    };
  });
  var Dl = c((t5, Fl) => {
    Pl();
    var w0 = Ml();
    Fl.exports = w0("Array", "includes");
  });
  var kl = c((r5, Gl) => {
    var x0 = Dl();
    Gl.exports = x0;
  });
  var Ul = c((n5, Vl) => {
    var S0 = kl();
    Vl.exports = S0;
  });
  var wo = c((i5, Bl) => {
    var C0 =
      typeof global == "object" && global && global.Object === Object && global;
    Bl.exports = C0;
  });
  var Qe = c((o5, Wl) => {
    var R0 = wo(),
      L0 = typeof self == "object" && self && self.Object === Object && self,
      N0 = R0 || L0 || Function("return this")();
    Wl.exports = N0;
  });
  var Xt = c((a5, Hl) => {
    var P0 = Qe(),
      q0 = P0.Symbol;
    Hl.exports = q0;
  });
  var Kl = c((s5, zl) => {
    var Xl = Xt(),
      jl = Object.prototype,
      M0 = jl.hasOwnProperty,
      F0 = jl.toString,
      Sr = Xl ? Xl.toStringTag : void 0;
    function D0(e) {
      var t = M0.call(e, Sr),
        r = e[Sr];
      try {
        e[Sr] = void 0;
        var n = !0;
      } catch {}
      var i = F0.call(e);
      return n && (t ? (e[Sr] = r) : delete e[Sr]), i;
    }
    zl.exports = D0;
  });
  var $l = c((u5, Yl) => {
    var G0 = Object.prototype,
      k0 = G0.toString;
    function V0(e) {
      return k0.call(e);
    }
    Yl.exports = V0;
  });
  var Tt = c((c5, Jl) => {
    var Ql = Xt(),
      U0 = Kl(),
      B0 = $l(),
      W0 = "[object Null]",
      H0 = "[object Undefined]",
      Zl = Ql ? Ql.toStringTag : void 0;
    function X0(e) {
      return e == null
        ? e === void 0
          ? H0
          : W0
        : Zl && Zl in Object(e)
        ? U0(e)
        : B0(e);
    }
    Jl.exports = X0;
  });
  var xo = c((l5, ef) => {
    function j0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    ef.exports = j0;
  });
  var So = c((f5, tf) => {
    var z0 = xo(),
      K0 = z0(Object.getPrototypeOf, Object);
    tf.exports = K0;
  });
  var pt = c((d5, rf) => {
    function Y0(e) {
      return e != null && typeof e == "object";
    }
    rf.exports = Y0;
  });
  var Co = c((p5, of) => {
    var $0 = Tt(),
      Q0 = So(),
      Z0 = pt(),
      J0 = "[object Object]",
      eO = Function.prototype,
      tO = Object.prototype,
      nf = eO.toString,
      rO = tO.hasOwnProperty,
      nO = nf.call(Object);
    function iO(e) {
      if (!Z0(e) || $0(e) != J0) return !1;
      var t = Q0(e);
      if (t === null) return !0;
      var r = rO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && nf.call(r) == nO;
    }
    of.exports = iO;
  });
  var af = c((Ro) => {
    "use strict";
    Object.defineProperty(Ro, "__esModule", { value: !0 });
    Ro.default = oO;
    function oO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var sf = c((No, Lo) => {
    "use strict";
    Object.defineProperty(No, "__esModule", { value: !0 });
    var aO = af(),
      sO = uO(aO);
    function uO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var jt;
    typeof self < "u"
      ? (jt = self)
      : typeof window < "u"
      ? (jt = window)
      : typeof global < "u"
      ? (jt = global)
      : typeof Lo < "u"
      ? (jt = Lo)
      : (jt = Function("return this")());
    var cO = (0, sO.default)(jt);
    No.default = cO;
  });
  var Po = c((Cr) => {
    "use strict";
    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = ff;
    var lO = Co(),
      fO = lf(lO),
      dO = sf(),
      uf = lf(dO);
    function lf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var cf = (Cr.ActionTypes = { INIT: "@@redux/INIT" });
    function ff(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ff)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function _() {
        return o;
      }
      function h(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var R = !0;
        return (
          f(),
          s.push(O),
          function () {
            if (R) {
              (R = !1), f();
              var N = s.indexOf(O);
              s.splice(N, 1);
            }
          }
        );
      }
      function v(O) {
        if (!(0, fO.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, O));
        } finally {
          u = !1;
        }
        for (var R = (a = s), A = 0; A < R.length; A++) R[A]();
        return O;
      }
      function b(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = O), v({ type: cf.INIT });
      }
      function S() {
        var O,
          R = h;
        return (
          (O = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                N.next && N.next(_());
              }
              L();
              var D = R(L);
              return { unsubscribe: D };
            },
          }),
          (O[uf.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        v({ type: cf.INIT }),
        (n = { dispatch: v, subscribe: h, getState: _, replaceReducer: b }),
        (n[uf.default] = S),
        n
      );
    }
  });
  var Mo = c((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = pO;
    function pO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var vf = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = EO;
    var df = Po(),
      vO = Co(),
      y5 = pf(vO),
      gO = Mo(),
      E5 = pf(gO);
    function pf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function hO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function yO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: df.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                df.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function EO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        yO(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          _ = arguments[1];
        if (s) throw s;
        if (!1) var h;
        for (var v = !1, b = {}, S = 0; S < o.length; S++) {
          var O = o[S],
            R = r[O],
            A = f[O],
            N = R(A, _);
          if (typeof N > "u") {
            var L = hO(O, _);
            throw new Error(L);
          }
          (b[O] = N), (v = v || N !== A);
        }
        return v ? b : f;
      };
    }
  });
  var hf = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = mO;
    function gf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function mO(e, t) {
      if (typeof e == "function") return gf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = gf(a, t));
      }
      return n;
    }
  });
  var ko = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = _O;
    function _O() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var yf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    var bO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Vo.default = AO;
    var TO = ko(),
      IO = OO(TO);
    function OO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function AO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            _ = {
              getState: s.getState,
              dispatch: function (v) {
                return u(v);
              },
            };
          return (
            (f = t.map(function (h) {
              return h(_);
            })),
            (u = IO.default.apply(void 0, f)(s.dispatch)),
            bO({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Uo = c((Be) => {
    "use strict";
    Be.__esModule = !0;
    Be.compose =
      Be.applyMiddleware =
      Be.bindActionCreators =
      Be.combineReducers =
      Be.createStore =
        void 0;
    var wO = Po(),
      xO = zt(wO),
      SO = vf(),
      CO = zt(SO),
      RO = hf(),
      LO = zt(RO),
      NO = yf(),
      PO = zt(NO),
      qO = ko(),
      MO = zt(qO),
      FO = Mo(),
      I5 = zt(FO);
    function zt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Be.createStore = xO.default;
    Be.combineReducers = CO.default;
    Be.bindActionCreators = LO.default;
    Be.applyMiddleware = PO.default;
    Be.compose = MO.default;
  });
  var Ze,
    Bo,
    at,
    DO,
    GO,
    On,
    kO,
    Wo = he(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Bo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (at = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (DO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (GO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (On = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (kO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ge,
    VO,
    An = he(() => {
      "use strict";
      (Ge = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (VO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var UO,
    Ef = he(() => {
      "use strict";
      UO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var BO,
    WO,
    HO,
    XO,
    jO,
    zO,
    KO,
    Ho,
    mf = he(() => {
      "use strict";
      An();
      ({
        TRANSFORM_MOVE: BO,
        TRANSFORM_SCALE: WO,
        TRANSFORM_ROTATE: HO,
        TRANSFORM_SKEW: XO,
        STYLE_SIZE: jO,
        STYLE_FILTER: zO,
        STYLE_FONT_VARIATION: KO,
      } = Ge),
        (Ho = {
          [BO]: !0,
          [WO]: !0,
          [HO]: !0,
          [XO]: !0,
          [jO]: !0,
          [zO]: !0,
          [KO]: !0,
        });
    });
  var Ie = {};
  De(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => fA,
    IX2_ANIMATION_FRAME_CHANGED: () => oA,
    IX2_CLEAR_REQUESTED: () => rA,
    IX2_ELEMENT_STATE_CHANGED: () => lA,
    IX2_EVENT_LISTENER_ADDED: () => nA,
    IX2_EVENT_STATE_CHANGED: () => iA,
    IX2_INSTANCE_ADDED: () => sA,
    IX2_INSTANCE_REMOVED: () => cA,
    IX2_INSTANCE_STARTED: () => uA,
    IX2_MEDIA_QUERIES_DEFINED: () => pA,
    IX2_PARAMETER_CHANGED: () => aA,
    IX2_PLAYBACK_REQUESTED: () => eA,
    IX2_PREVIEW_REQUESTED: () => JO,
    IX2_RAW_DATA_IMPORTED: () => YO,
    IX2_SESSION_INITIALIZED: () => $O,
    IX2_SESSION_STARTED: () => QO,
    IX2_SESSION_STOPPED: () => ZO,
    IX2_STOP_REQUESTED: () => tA,
    IX2_TEST_FRAME_RENDERED: () => vA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => dA,
  });
  var YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    _f = he(() => {
      "use strict";
      (YO = "IX2_RAW_DATA_IMPORTED"),
        ($O = "IX2_SESSION_INITIALIZED"),
        (QO = "IX2_SESSION_STARTED"),
        (ZO = "IX2_SESSION_STOPPED"),
        (JO = "IX2_PREVIEW_REQUESTED"),
        (eA = "IX2_PLAYBACK_REQUESTED"),
        (tA = "IX2_STOP_REQUESTED"),
        (rA = "IX2_CLEAR_REQUESTED"),
        (nA = "IX2_EVENT_LISTENER_ADDED"),
        (iA = "IX2_EVENT_STATE_CHANGED"),
        (oA = "IX2_ANIMATION_FRAME_CHANGED"),
        (aA = "IX2_PARAMETER_CHANGED"),
        (sA = "IX2_INSTANCE_ADDED"),
        (uA = "IX2_INSTANCE_STARTED"),
        (cA = "IX2_INSTANCE_REMOVED"),
        (lA = "IX2_ELEMENT_STATE_CHANGED"),
        (fA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (dA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (pA = "IX2_MEDIA_QUERIES_DEFINED"),
        (vA = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  De(Ce, {
    ABSTRACT_NODE: () => dw,
    AUTO: () => tw,
    BACKGROUND: () => YA,
    BACKGROUND_COLOR: () => KA,
    BAR_DELIMITER: () => iw,
    BORDER_COLOR: () => $A,
    BOUNDARY_SELECTOR: () => mA,
    CHILDREN: () => ow,
    COLON_DELIMITER: () => nw,
    COLOR: () => QA,
    COMMA_DELIMITER: () => rw,
    CONFIG_UNIT: () => xA,
    CONFIG_VALUE: () => IA,
    CONFIG_X_UNIT: () => OA,
    CONFIG_X_VALUE: () => _A,
    CONFIG_Y_UNIT: () => AA,
    CONFIG_Y_VALUE: () => bA,
    CONFIG_Z_UNIT: () => wA,
    CONFIG_Z_VALUE: () => TA,
    DISPLAY: () => ZA,
    FILTER: () => HA,
    FLEX: () => JA,
    FONT_VARIATION_SETTINGS: () => XA,
    HEIGHT: () => zA,
    HTML_ELEMENT: () => lw,
    IMMEDIATE_CHILDREN: () => aw,
    IX2_ID_DELIMITER: () => gA,
    OPACITY: () => WA,
    PARENT: () => uw,
    PLAIN_OBJECT: () => fw,
    PRESERVE_3D: () => cw,
    RENDER_GENERAL: () => vw,
    RENDER_PLUGIN: () => hw,
    RENDER_STYLE: () => gw,
    RENDER_TRANSFORM: () => pw,
    ROTATE_X: () => DA,
    ROTATE_Y: () => GA,
    ROTATE_Z: () => kA,
    SCALE_3D: () => FA,
    SCALE_X: () => PA,
    SCALE_Y: () => qA,
    SCALE_Z: () => MA,
    SIBLINGS: () => sw,
    SKEW: () => VA,
    SKEW_X: () => UA,
    SKEW_Y: () => BA,
    TRANSFORM: () => SA,
    TRANSLATE_3D: () => NA,
    TRANSLATE_X: () => CA,
    TRANSLATE_Y: () => RA,
    TRANSLATE_Z: () => LA,
    WF_PAGE: () => hA,
    WIDTH: () => jA,
    WILL_CHANGE: () => ew,
    W_MOD_IX: () => EA,
    W_MOD_JS: () => yA,
  });
  var gA,
    hA,
    yA,
    EA,
    mA,
    _A,
    bA,
    TA,
    IA,
    OA,
    AA,
    wA,
    xA,
    SA,
    CA,
    RA,
    LA,
    NA,
    PA,
    qA,
    MA,
    FA,
    DA,
    GA,
    kA,
    VA,
    UA,
    BA,
    WA,
    HA,
    XA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    vw,
    gw,
    hw,
    bf = he(() => {
      "use strict";
      (gA = "|"),
        (hA = "data-wf-page"),
        (yA = "w-mod-js"),
        (EA = "w-mod-ix"),
        (mA = ".w-dyn-item"),
        (_A = "xValue"),
        (bA = "yValue"),
        (TA = "zValue"),
        (IA = "value"),
        (OA = "xUnit"),
        (AA = "yUnit"),
        (wA = "zUnit"),
        (xA = "unit"),
        (SA = "transform"),
        (CA = "translateX"),
        (RA = "translateY"),
        (LA = "translateZ"),
        (NA = "translate3d"),
        (PA = "scaleX"),
        (qA = "scaleY"),
        (MA = "scaleZ"),
        (FA = "scale3d"),
        (DA = "rotateX"),
        (GA = "rotateY"),
        (kA = "rotateZ"),
        (VA = "skew"),
        (UA = "skewX"),
        (BA = "skewY"),
        (WA = "opacity"),
        (HA = "filter"),
        (XA = "font-variation-settings"),
        (jA = "width"),
        (zA = "height"),
        (KA = "backgroundColor"),
        (YA = "background"),
        ($A = "borderColor"),
        (QA = "color"),
        (ZA = "display"),
        (JA = "flex"),
        (ew = "willChange"),
        (tw = "AUTO"),
        (rw = ","),
        (nw = ":"),
        (iw = "|"),
        (ow = "CHILDREN"),
        (aw = "IMMEDIATE_CHILDREN"),
        (sw = "SIBLINGS"),
        (uw = "PARENT"),
        (cw = "preserve-3d"),
        (lw = "HTML_ELEMENT"),
        (fw = "PLAIN_OBJECT"),
        (dw = "ABSTRACT_NODE"),
        (pw = "RENDER_TRANSFORM"),
        (vw = "RENDER_GENERAL"),
        (gw = "RENDER_STYLE"),
        (hw = "RENDER_PLUGIN");
    });
  var Tf = {};
  De(Tf, {
    ActionAppliesTo: () => VO,
    ActionTypeConsts: () => Ge,
    EventAppliesTo: () => Bo,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => DO,
    EventLimitAffectedElements: () => GO,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => UO,
    QuickEffectDirectionConsts: () => kO,
    QuickEffectIds: () => On,
    ReducedMotionTypes: () => Ho,
  });
  var ke = he(() => {
    "use strict";
    Wo();
    An();
    Ef();
    mf();
    _f();
    bf();
    An();
    Wo();
  });
  var yw,
    If,
    Of = he(() => {
      "use strict";
      ke();
      ({ IX2_RAW_DATA_IMPORTED: yw } = Ie),
        (If = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case yw:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Kt = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Ew =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    me.clone = xn;
    me.addLast = xf;
    me.addFirst = Sf;
    me.removeLast = Cf;
    me.removeFirst = Rf;
    me.insert = Lf;
    me.removeAt = Nf;
    me.replaceAt = Pf;
    me.getIn = Sn;
    me.set = Cn;
    me.setIn = Rn;
    me.update = Mf;
    me.updateIn = Ff;
    me.merge = Df;
    me.mergeDeep = Gf;
    me.mergeIn = kf;
    me.omit = Vf;
    me.addDefaults = Uf;
    var Af = "INVALID_ARGS";
    function wf(e) {
      throw new Error(e);
    }
    function Xo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var mw = {}.hasOwnProperty;
    function xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Xo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ve(e, t, r) {
      var n = r;
      n == null && wf(Af);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var _ = Xo(f);
          if (_.length)
            for (var h = 0; h <= _.length; h++) {
              var v = _[h];
              if (!(e && n[v] !== void 0)) {
                var b = f[v];
                t && wn(n[v]) && wn(b) && (b = Ve(e, t, n[v], b)),
                  !(b === void 0 || b === n[v]) &&
                    (i || ((i = !0), (n = xn(n))), (n[v] = b));
              }
            }
        }
      }
      return n;
    }
    function wn(e) {
      var t = typeof e > "u" ? "undefined" : Ew(e);
      return e != null && (t === "object" || t === "function");
    }
    function xf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Sf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Cf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Lf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Nf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Pf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Sn(e, t) {
      if ((!Array.isArray(t) && wf(Af), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Cn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = xn(i);
      return (o[t] = r), o;
    }
    function qf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          wn(e) && wn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = qf(a, t, r, n + 1);
      }
      return Cn(e, o, i);
    }
    function Rn(e, t, r) {
      return t.length ? qf(e, t, r, 0) : r;
    }
    function Mf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Cn(e, t, i);
    }
    function Ff(e, t, r) {
      var n = Sn(e, t),
        i = r(n);
      return Rn(e, t, i);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ve(!1, !1, e, t, r, n, i, o);
    }
    function Gf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ve(!1, !0, e, t, r, n, i, o);
    }
    function kf(e, t, r, n, i, o, a) {
      var s = Sn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          _ = Array(f > 7 ? f - 7 : 0),
          h = 7;
        h < f;
        h++
      )
        _[h - 7] = arguments[h];
      return (
        _.length
          ? (u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(_)))
          : (u = Ve(!1, !1, s, r, n, i, o, a)),
        Rn(e, t, u)
      );
    }
    function Vf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (mw.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Xo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Uf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ve(!0, !1, e, t, r, n, i, o);
    }
    var _w = {
      clone: xn,
      addLast: xf,
      addFirst: Sf,
      removeLast: Cf,
      removeFirst: Rf,
      insert: Lf,
      removeAt: Nf,
      replaceAt: Pf,
      getIn: Sn,
      set: Cn,
      setIn: Rn,
      update: Mf,
      updateIn: Ff,
      merge: Df,
      mergeDeep: Gf,
      mergeIn: kf,
      omit: Vf,
      addDefaults: Uf,
    };
    me.default = _w;
  });
  var Wf,
    bw,
    Tw,
    Iw,
    Ow,
    Aw,
    Bf,
    Hf,
    Xf = he(() => {
      "use strict";
      ke();
      (Wf = le(Kt())),
        ({
          IX2_PREVIEW_REQUESTED: bw,
          IX2_PLAYBACK_REQUESTED: Tw,
          IX2_STOP_REQUESTED: Iw,
          IX2_CLEAR_REQUESTED: Ow,
        } = Ie),
        (Aw = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Bf = Object.create(null, {
          [bw]: { value: "preview" },
          [Tw]: { value: "playback" },
          [Iw]: { value: "stop" },
          [Ow]: { value: "clear" },
        })),
        (Hf = (e = Aw, t) => {
          if (t.type in Bf) {
            let r = [Bf[t.type]];
            return (0, Wf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    ww,
    xw,
    Sw,
    Cw,
    Rw,
    Lw,
    Nw,
    Pw,
    qw,
    Mw,
    jf,
    Fw,
    zf,
    Kf = he(() => {
      "use strict";
      ke();
      (Ne = le(Kt())),
        ({
          IX2_SESSION_INITIALIZED: ww,
          IX2_SESSION_STARTED: xw,
          IX2_TEST_FRAME_RENDERED: Sw,
          IX2_SESSION_STOPPED: Cw,
          IX2_EVENT_LISTENER_ADDED: Rw,
          IX2_EVENT_STATE_CHANGED: Lw,
          IX2_ANIMATION_FRAME_CHANGED: Nw,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Pw,
          IX2_VIEWPORT_WIDTH_CHANGED: qw,
          IX2_MEDIA_QUERIES_DEFINED: Mw,
        } = Ie),
        (jf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Fw = 20),
        (zf = (e = jf, t) => {
          switch (t.type) {
            case ww: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case xw:
              return (0, Ne.set)(e, "active", !0);
            case Sw: {
              let {
                payload: { step: r = Fw },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case Cw:
              return jf;
            case Nw: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case Rw: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case Lw: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case Pw: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case qw: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Mw:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var $f = c((W5, Yf) => {
    function Dw() {
      (this.__data__ = []), (this.size = 0);
    }
    Yf.exports = Dw;
  });
  var Ln = c((H5, Qf) => {
    function Gw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Qf.exports = Gw;
  });
  var Rr = c((X5, Zf) => {
    var kw = Ln();
    function Vw(e, t) {
      for (var r = e.length; r--; ) if (kw(e[r][0], t)) return r;
      return -1;
    }
    Zf.exports = Vw;
  });
  var ed = c((j5, Jf) => {
    var Uw = Rr(),
      Bw = Array.prototype,
      Ww = Bw.splice;
    function Hw(e) {
      var t = this.__data__,
        r = Uw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Ww.call(t, r, 1), --this.size, !0;
    }
    Jf.exports = Hw;
  });
  var rd = c((z5, td) => {
    var Xw = Rr();
    function jw(e) {
      var t = this.__data__,
        r = Xw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    td.exports = jw;
  });
  var id = c((K5, nd) => {
    var zw = Rr();
    function Kw(e) {
      return zw(this.__data__, e) > -1;
    }
    nd.exports = Kw;
  });
  var ad = c((Y5, od) => {
    var Yw = Rr();
    function $w(e, t) {
      var r = this.__data__,
        n = Yw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    od.exports = $w;
  });
  var Lr = c(($5, sd) => {
    var Qw = $f(),
      Zw = ed(),
      Jw = rd(),
      ex = id(),
      tx = ad();
    function Yt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Yt.prototype.clear = Qw;
    Yt.prototype.delete = Zw;
    Yt.prototype.get = Jw;
    Yt.prototype.has = ex;
    Yt.prototype.set = tx;
    sd.exports = Yt;
  });
  var cd = c((Q5, ud) => {
    var rx = Lr();
    function nx() {
      (this.__data__ = new rx()), (this.size = 0);
    }
    ud.exports = nx;
  });
  var fd = c((Z5, ld) => {
    function ix(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ld.exports = ix;
  });
  var pd = c((J5, dd) => {
    function ox(e) {
      return this.__data__.get(e);
    }
    dd.exports = ox;
  });
  var gd = c((eW, vd) => {
    function ax(e) {
      return this.__data__.has(e);
    }
    vd.exports = ax;
  });
  var st = c((tW, hd) => {
    function sx(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    hd.exports = sx;
  });
  var jo = c((rW, yd) => {
    var ux = Tt(),
      cx = st(),
      lx = "[object AsyncFunction]",
      fx = "[object Function]",
      dx = "[object GeneratorFunction]",
      px = "[object Proxy]";
    function vx(e) {
      if (!cx(e)) return !1;
      var t = ux(e);
      return t == fx || t == dx || t == lx || t == px;
    }
    yd.exports = vx;
  });
  var md = c((nW, Ed) => {
    var gx = Qe(),
      hx = gx["__core-js_shared__"];
    Ed.exports = hx;
  });
  var Td = c((iW, bd) => {
    var zo = md(),
      _d = (function () {
        var e = /[^.]+$/.exec((zo && zo.keys && zo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function yx(e) {
      return !!_d && _d in e;
    }
    bd.exports = yx;
  });
  var Ko = c((oW, Id) => {
    var Ex = Function.prototype,
      mx = Ex.toString;
    function _x(e) {
      if (e != null) {
        try {
          return mx.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Id.exports = _x;
  });
  var Ad = c((aW, Od) => {
    var bx = jo(),
      Tx = Td(),
      Ix = st(),
      Ox = Ko(),
      Ax = /[\\^$.*+?()[\]{}|]/g,
      wx = /^\[object .+?Constructor\]$/,
      xx = Function.prototype,
      Sx = Object.prototype,
      Cx = xx.toString,
      Rx = Sx.hasOwnProperty,
      Lx = RegExp(
        "^" +
          Cx.call(Rx)
            .replace(Ax, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Nx(e) {
      if (!Ix(e) || Tx(e)) return !1;
      var t = bx(e) ? Lx : wx;
      return t.test(Ox(e));
    }
    Od.exports = Nx;
  });
  var xd = c((sW, wd) => {
    function Px(e, t) {
      return e?.[t];
    }
    wd.exports = Px;
  });
  var It = c((uW, Sd) => {
    var qx = Ad(),
      Mx = xd();
    function Fx(e, t) {
      var r = Mx(e, t);
      return qx(r) ? r : void 0;
    }
    Sd.exports = Fx;
  });
  var Nn = c((cW, Cd) => {
    var Dx = It(),
      Gx = Qe(),
      kx = Dx(Gx, "Map");
    Cd.exports = kx;
  });
  var Nr = c((lW, Rd) => {
    var Vx = It(),
      Ux = Vx(Object, "create");
    Rd.exports = Ux;
  });
  var Pd = c((fW, Nd) => {
    var Ld = Nr();
    function Bx() {
      (this.__data__ = Ld ? Ld(null) : {}), (this.size = 0);
    }
    Nd.exports = Bx;
  });
  var Md = c((dW, qd) => {
    function Wx(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    qd.exports = Wx;
  });
  var Dd = c((pW, Fd) => {
    var Hx = Nr(),
      Xx = "__lodash_hash_undefined__",
      jx = Object.prototype,
      zx = jx.hasOwnProperty;
    function Kx(e) {
      var t = this.__data__;
      if (Hx) {
        var r = t[e];
        return r === Xx ? void 0 : r;
      }
      return zx.call(t, e) ? t[e] : void 0;
    }
    Fd.exports = Kx;
  });
  var kd = c((vW, Gd) => {
    var Yx = Nr(),
      $x = Object.prototype,
      Qx = $x.hasOwnProperty;
    function Zx(e) {
      var t = this.__data__;
      return Yx ? t[e] !== void 0 : Qx.call(t, e);
    }
    Gd.exports = Zx;
  });
  var Ud = c((gW, Vd) => {
    var Jx = Nr(),
      eS = "__lodash_hash_undefined__";
    function tS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Jx && t === void 0 ? eS : t),
        this
      );
    }
    Vd.exports = tS;
  });
  var Wd = c((hW, Bd) => {
    var rS = Pd(),
      nS = Md(),
      iS = Dd(),
      oS = kd(),
      aS = Ud();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = rS;
    $t.prototype.delete = nS;
    $t.prototype.get = iS;
    $t.prototype.has = oS;
    $t.prototype.set = aS;
    Bd.exports = $t;
  });
  var jd = c((yW, Xd) => {
    var Hd = Wd(),
      sS = Lr(),
      uS = Nn();
    function cS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Hd(),
          map: new (uS || sS)(),
          string: new Hd(),
        });
    }
    Xd.exports = cS;
  });
  var Kd = c((EW, zd) => {
    function lS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    zd.exports = lS;
  });
  var Pr = c((mW, Yd) => {
    var fS = Kd();
    function dS(e, t) {
      var r = e.__data__;
      return fS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Yd.exports = dS;
  });
  var Qd = c((_W, $d) => {
    var pS = Pr();
    function vS(e) {
      var t = pS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    $d.exports = vS;
  });
  var Jd = c((bW, Zd) => {
    var gS = Pr();
    function hS(e) {
      return gS(this, e).get(e);
    }
    Zd.exports = hS;
  });
  var tp = c((TW, ep) => {
    var yS = Pr();
    function ES(e) {
      return yS(this, e).has(e);
    }
    ep.exports = ES;
  });
  var np = c((IW, rp) => {
    var mS = Pr();
    function _S(e, t) {
      var r = mS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    rp.exports = _S;
  });
  var Pn = c((OW, ip) => {
    var bS = jd(),
      TS = Qd(),
      IS = Jd(),
      OS = tp(),
      AS = np();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = bS;
    Qt.prototype.delete = TS;
    Qt.prototype.get = IS;
    Qt.prototype.has = OS;
    Qt.prototype.set = AS;
    ip.exports = Qt;
  });
  var ap = c((AW, op) => {
    var wS = Lr(),
      xS = Nn(),
      SS = Pn(),
      CS = 200;
    function RS(e, t) {
      var r = this.__data__;
      if (r instanceof wS) {
        var n = r.__data__;
        if (!xS || n.length < CS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new SS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    op.exports = RS;
  });
  var Yo = c((wW, sp) => {
    var LS = Lr(),
      NS = cd(),
      PS = fd(),
      qS = pd(),
      MS = gd(),
      FS = ap();
    function Zt(e) {
      var t = (this.__data__ = new LS(e));
      this.size = t.size;
    }
    Zt.prototype.clear = NS;
    Zt.prototype.delete = PS;
    Zt.prototype.get = qS;
    Zt.prototype.has = MS;
    Zt.prototype.set = FS;
    sp.exports = Zt;
  });
  var cp = c((xW, up) => {
    var DS = "__lodash_hash_undefined__";
    function GS(e) {
      return this.__data__.set(e, DS), this;
    }
    up.exports = GS;
  });
  var fp = c((SW, lp) => {
    function kS(e) {
      return this.__data__.has(e);
    }
    lp.exports = kS;
  });
  var pp = c((CW, dp) => {
    var VS = Pn(),
      US = cp(),
      BS = fp();
    function qn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new VS(); ++t < r; ) this.add(e[t]);
    }
    qn.prototype.add = qn.prototype.push = US;
    qn.prototype.has = BS;
    dp.exports = qn;
  });
  var gp = c((RW, vp) => {
    function WS(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    vp.exports = WS;
  });
  var yp = c((LW, hp) => {
    function HS(e, t) {
      return e.has(t);
    }
    hp.exports = HS;
  });
  var $o = c((NW, Ep) => {
    var XS = pp(),
      jS = gp(),
      zS = yp(),
      KS = 1,
      YS = 2;
    function $S(e, t, r, n, i, o) {
      var a = r & KS,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        _ = o.get(t);
      if (f && _) return f == t && _ == e;
      var h = -1,
        v = !0,
        b = r & YS ? new XS() : void 0;
      for (o.set(e, t), o.set(t, e); ++h < s; ) {
        var S = e[h],
          O = t[h];
        if (n) var R = a ? n(O, S, h, t, e, o) : n(S, O, h, e, t, o);
        if (R !== void 0) {
          if (R) continue;
          v = !1;
          break;
        }
        if (b) {
          if (
            !jS(t, function (A, N) {
              if (!zS(b, N) && (S === A || i(S, A, r, n, o))) return b.push(N);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(S === O || i(S, O, r, n, o))) {
          v = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), v;
    }
    Ep.exports = $S;
  });
  var _p = c((PW, mp) => {
    var QS = Qe(),
      ZS = QS.Uint8Array;
    mp.exports = ZS;
  });
  var Tp = c((qW, bp) => {
    function JS(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    bp.exports = JS;
  });
  var Op = c((MW, Ip) => {
    function eC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ip.exports = eC;
  });
  var Cp = c((FW, Sp) => {
    var Ap = Xt(),
      wp = _p(),
      tC = Ln(),
      rC = $o(),
      nC = Tp(),
      iC = Op(),
      oC = 1,
      aC = 2,
      sC = "[object Boolean]",
      uC = "[object Date]",
      cC = "[object Error]",
      lC = "[object Map]",
      fC = "[object Number]",
      dC = "[object RegExp]",
      pC = "[object Set]",
      vC = "[object String]",
      gC = "[object Symbol]",
      hC = "[object ArrayBuffer]",
      yC = "[object DataView]",
      xp = Ap ? Ap.prototype : void 0,
      Qo = xp ? xp.valueOf : void 0;
    function EC(e, t, r, n, i, o, a) {
      switch (r) {
        case yC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case hC:
          return !(e.byteLength != t.byteLength || !o(new wp(e), new wp(t)));
        case sC:
        case uC:
        case fC:
          return tC(+e, +t);
        case cC:
          return e.name == t.name && e.message == t.message;
        case dC:
        case vC:
          return e == t + "";
        case lC:
          var s = nC;
        case pC:
          var u = n & oC;
          if ((s || (s = iC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= aC), a.set(e, t);
          var _ = rC(s(e), s(t), n, i, o, a);
          return a.delete(e), _;
        case gC:
          if (Qo) return Qo.call(e) == Qo.call(t);
      }
      return !1;
    }
    Sp.exports = EC;
  });
  var Mn = c((DW, Rp) => {
    function mC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Rp.exports = mC;
  });
  var Oe = c((GW, Lp) => {
    var _C = Array.isArray;
    Lp.exports = _C;
  });
  var Zo = c((kW, Np) => {
    var bC = Mn(),
      TC = Oe();
    function IC(e, t, r) {
      var n = t(e);
      return TC(e) ? n : bC(n, r(e));
    }
    Np.exports = IC;
  });
  var qp = c((VW, Pp) => {
    function OC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Pp.exports = OC;
  });
  var Jo = c((UW, Mp) => {
    function AC() {
      return [];
    }
    Mp.exports = AC;
  });
  var ea = c((BW, Dp) => {
    var wC = qp(),
      xC = Jo(),
      SC = Object.prototype,
      CC = SC.propertyIsEnumerable,
      Fp = Object.getOwnPropertySymbols,
      RC = Fp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                wC(Fp(e), function (t) {
                  return CC.call(e, t);
                }));
          }
        : xC;
    Dp.exports = RC;
  });
  var kp = c((WW, Gp) => {
    function LC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Gp.exports = LC;
  });
  var Up = c((HW, Vp) => {
    var NC = Tt(),
      PC = pt(),
      qC = "[object Arguments]";
    function MC(e) {
      return PC(e) && NC(e) == qC;
    }
    Vp.exports = MC;
  });
  var qr = c((XW, Hp) => {
    var Bp = Up(),
      FC = pt(),
      Wp = Object.prototype,
      DC = Wp.hasOwnProperty,
      GC = Wp.propertyIsEnumerable,
      kC = Bp(
        (function () {
          return arguments;
        })()
      )
        ? Bp
        : function (e) {
            return FC(e) && DC.call(e, "callee") && !GC.call(e, "callee");
          };
    Hp.exports = kC;
  });
  var jp = c((jW, Xp) => {
    function VC() {
      return !1;
    }
    Xp.exports = VC;
  });
  var Fn = c((Mr, Jt) => {
    var UC = Qe(),
      BC = jp(),
      Yp = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
      zp = Yp && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      WC = zp && zp.exports === Yp,
      Kp = WC ? UC.Buffer : void 0,
      HC = Kp ? Kp.isBuffer : void 0,
      XC = HC || BC;
    Jt.exports = XC;
  });
  var Dn = c((zW, $p) => {
    var jC = 9007199254740991,
      zC = /^(?:0|[1-9]\d*)$/;
    function KC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? jC),
        !!t &&
          (r == "number" || (r != "symbol" && zC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    $p.exports = KC;
  });
  var Gn = c((KW, Qp) => {
    var YC = 9007199254740991;
    function $C(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= YC;
    }
    Qp.exports = $C;
  });
  var Jp = c((YW, Zp) => {
    var QC = Tt(),
      ZC = Gn(),
      JC = pt(),
      eR = "[object Arguments]",
      tR = "[object Array]",
      rR = "[object Boolean]",
      nR = "[object Date]",
      iR = "[object Error]",
      oR = "[object Function]",
      aR = "[object Map]",
      sR = "[object Number]",
      uR = "[object Object]",
      cR = "[object RegExp]",
      lR = "[object Set]",
      fR = "[object String]",
      dR = "[object WeakMap]",
      pR = "[object ArrayBuffer]",
      vR = "[object DataView]",
      gR = "[object Float32Array]",
      hR = "[object Float64Array]",
      yR = "[object Int8Array]",
      ER = "[object Int16Array]",
      mR = "[object Int32Array]",
      _R = "[object Uint8Array]",
      bR = "[object Uint8ClampedArray]",
      TR = "[object Uint16Array]",
      IR = "[object Uint32Array]",
      ge = {};
    ge[gR] =
      ge[hR] =
      ge[yR] =
      ge[ER] =
      ge[mR] =
      ge[_R] =
      ge[bR] =
      ge[TR] =
      ge[IR] =
        !0;
    ge[eR] =
      ge[tR] =
      ge[pR] =
      ge[rR] =
      ge[vR] =
      ge[nR] =
      ge[iR] =
      ge[oR] =
      ge[aR] =
      ge[sR] =
      ge[uR] =
      ge[cR] =
      ge[lR] =
      ge[fR] =
      ge[dR] =
        !1;
    function OR(e) {
      return JC(e) && ZC(e.length) && !!ge[QC(e)];
    }
    Zp.exports = OR;
  });
  var tv = c(($W, ev) => {
    function AR(e) {
      return function (t) {
        return e(t);
      };
    }
    ev.exports = AR;
  });
  var nv = c((Fr, er) => {
    var wR = wo(),
      rv = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      Dr = rv && typeof er == "object" && er && !er.nodeType && er,
      xR = Dr && Dr.exports === rv,
      ta = xR && wR.process,
      SR = (function () {
        try {
          var e = Dr && Dr.require && Dr.require("util").types;
          return e || (ta && ta.binding && ta.binding("util"));
        } catch {}
      })();
    er.exports = SR;
  });
  var kn = c((QW, av) => {
    var CR = Jp(),
      RR = tv(),
      iv = nv(),
      ov = iv && iv.isTypedArray,
      LR = ov ? RR(ov) : CR;
    av.exports = LR;
  });
  var ra = c((ZW, sv) => {
    var NR = kp(),
      PR = qr(),
      qR = Oe(),
      MR = Fn(),
      FR = Dn(),
      DR = kn(),
      GR = Object.prototype,
      kR = GR.hasOwnProperty;
    function VR(e, t) {
      var r = qR(e),
        n = !r && PR(e),
        i = !r && !n && MR(e),
        o = !r && !n && !i && DR(e),
        a = r || n || i || o,
        s = a ? NR(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || kR.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              FR(f, u))
          ) &&
          s.push(f);
      return s;
    }
    sv.exports = VR;
  });
  var Vn = c((JW, uv) => {
    var UR = Object.prototype;
    function BR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || UR;
      return e === r;
    }
    uv.exports = BR;
  });
  var lv = c((eH, cv) => {
    var WR = xo(),
      HR = WR(Object.keys, Object);
    cv.exports = HR;
  });
  var Un = c((tH, fv) => {
    var XR = Vn(),
      jR = lv(),
      zR = Object.prototype,
      KR = zR.hasOwnProperty;
    function YR(e) {
      if (!XR(e)) return jR(e);
      var t = [];
      for (var r in Object(e)) KR.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    fv.exports = YR;
  });
  var Pt = c((rH, dv) => {
    var $R = jo(),
      QR = Gn();
    function ZR(e) {
      return e != null && QR(e.length) && !$R(e);
    }
    dv.exports = ZR;
  });
  var Gr = c((nH, pv) => {
    var JR = ra(),
      eL = Un(),
      tL = Pt();
    function rL(e) {
      return tL(e) ? JR(e) : eL(e);
    }
    pv.exports = rL;
  });
  var gv = c((iH, vv) => {
    var nL = Zo(),
      iL = ea(),
      oL = Gr();
    function aL(e) {
      return nL(e, oL, iL);
    }
    vv.exports = aL;
  });
  var Ev = c((oH, yv) => {
    var hv = gv(),
      sL = 1,
      uL = Object.prototype,
      cL = uL.hasOwnProperty;
    function lL(e, t, r, n, i, o) {
      var a = r & sL,
        s = hv(e),
        u = s.length,
        f = hv(t),
        _ = f.length;
      if (u != _ && !a) return !1;
      for (var h = u; h--; ) {
        var v = s[h];
        if (!(a ? v in t : cL.call(t, v))) return !1;
      }
      var b = o.get(e),
        S = o.get(t);
      if (b && S) return b == t && S == e;
      var O = !0;
      o.set(e, t), o.set(t, e);
      for (var R = a; ++h < u; ) {
        v = s[h];
        var A = e[v],
          N = t[v];
        if (n) var L = a ? n(N, A, v, t, e, o) : n(A, N, v, e, t, o);
        if (!(L === void 0 ? A === N || i(A, N, r, n, o) : L)) {
          O = !1;
          break;
        }
        R || (R = v == "constructor");
      }
      if (O && !R) {
        var D = e.constructor,
          G = t.constructor;
        D != G &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof D == "function" &&
            D instanceof D &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (O = !1);
      }
      return o.delete(e), o.delete(t), O;
    }
    yv.exports = lL;
  });
  var _v = c((aH, mv) => {
    var fL = It(),
      dL = Qe(),
      pL = fL(dL, "DataView");
    mv.exports = pL;
  });
  var Tv = c((sH, bv) => {
    var vL = It(),
      gL = Qe(),
      hL = vL(gL, "Promise");
    bv.exports = hL;
  });
  var Ov = c((uH, Iv) => {
    var yL = It(),
      EL = Qe(),
      mL = yL(EL, "Set");
    Iv.exports = mL;
  });
  var na = c((cH, Av) => {
    var _L = It(),
      bL = Qe(),
      TL = _L(bL, "WeakMap");
    Av.exports = TL;
  });
  var Bn = c((lH, Nv) => {
    var ia = _v(),
      oa = Nn(),
      aa = Tv(),
      sa = Ov(),
      ua = na(),
      Lv = Tt(),
      tr = Ko(),
      wv = "[object Map]",
      IL = "[object Object]",
      xv = "[object Promise]",
      Sv = "[object Set]",
      Cv = "[object WeakMap]",
      Rv = "[object DataView]",
      OL = tr(ia),
      AL = tr(oa),
      wL = tr(aa),
      xL = tr(sa),
      SL = tr(ua),
      qt = Lv;
    ((ia && qt(new ia(new ArrayBuffer(1))) != Rv) ||
      (oa && qt(new oa()) != wv) ||
      (aa && qt(aa.resolve()) != xv) ||
      (sa && qt(new sa()) != Sv) ||
      (ua && qt(new ua()) != Cv)) &&
      (qt = function (e) {
        var t = Lv(e),
          r = t == IL ? e.constructor : void 0,
          n = r ? tr(r) : "";
        if (n)
          switch (n) {
            case OL:
              return Rv;
            case AL:
              return wv;
            case wL:
              return xv;
            case xL:
              return Sv;
            case SL:
              return Cv;
          }
        return t;
      });
    Nv.exports = qt;
  });
  var Vv = c((fH, kv) => {
    var ca = Yo(),
      CL = $o(),
      RL = Cp(),
      LL = Ev(),
      Pv = Bn(),
      qv = Oe(),
      Mv = Fn(),
      NL = kn(),
      PL = 1,
      Fv = "[object Arguments]",
      Dv = "[object Array]",
      Wn = "[object Object]",
      qL = Object.prototype,
      Gv = qL.hasOwnProperty;
    function ML(e, t, r, n, i, o) {
      var a = qv(e),
        s = qv(t),
        u = a ? Dv : Pv(e),
        f = s ? Dv : Pv(t);
      (u = u == Fv ? Wn : u), (f = f == Fv ? Wn : f);
      var _ = u == Wn,
        h = f == Wn,
        v = u == f;
      if (v && Mv(e)) {
        if (!Mv(t)) return !1;
        (a = !0), (_ = !1);
      }
      if (v && !_)
        return (
          o || (o = new ca()),
          a || NL(e) ? CL(e, t, r, n, i, o) : RL(e, t, u, r, n, i, o)
        );
      if (!(r & PL)) {
        var b = _ && Gv.call(e, "__wrapped__"),
          S = h && Gv.call(t, "__wrapped__");
        if (b || S) {
          var O = b ? e.value() : e,
            R = S ? t.value() : t;
          return o || (o = new ca()), i(O, R, r, n, o);
        }
      }
      return v ? (o || (o = new ca()), LL(e, t, r, n, i, o)) : !1;
    }
    kv.exports = ML;
  });
  var la = c((dH, Wv) => {
    var FL = Vv(),
      Uv = pt();
    function Bv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Uv(e) && !Uv(t))
        ? e !== e && t !== t
        : FL(e, t, r, n, Bv, i);
    }
    Wv.exports = Bv;
  });
  var Xv = c((pH, Hv) => {
    var DL = Yo(),
      GL = la(),
      kL = 1,
      VL = 2;
    function UL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          _ = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var h = new DL();
          if (n) var v = n(f, _, u, e, t, h);
          if (!(v === void 0 ? GL(_, f, kL | VL, n, h) : v)) return !1;
        }
      }
      return !0;
    }
    Hv.exports = UL;
  });
  var fa = c((vH, jv) => {
    var BL = st();
    function WL(e) {
      return e === e && !BL(e);
    }
    jv.exports = WL;
  });
  var Kv = c((gH, zv) => {
    var HL = fa(),
      XL = Gr();
    function jL(e) {
      for (var t = XL(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, HL(i)];
      }
      return t;
    }
    zv.exports = jL;
  });
  var da = c((hH, Yv) => {
    function zL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Yv.exports = zL;
  });
  var Qv = c((yH, $v) => {
    var KL = Xv(),
      YL = Kv(),
      $L = da();
    function QL(e) {
      var t = YL(e);
      return t.length == 1 && t[0][2]
        ? $L(t[0][0], t[0][1])
        : function (r) {
            return r === e || KL(r, e, t);
          };
    }
    $v.exports = QL;
  });
  var kr = c((EH, Zv) => {
    var ZL = Tt(),
      JL = pt(),
      eN = "[object Symbol]";
    function tN(e) {
      return typeof e == "symbol" || (JL(e) && ZL(e) == eN);
    }
    Zv.exports = tN;
  });
  var Hn = c((mH, Jv) => {
    var rN = Oe(),
      nN = kr(),
      iN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      oN = /^\w*$/;
    function aN(e, t) {
      if (rN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        nN(e)
        ? !0
        : oN.test(e) || !iN.test(e) || (t != null && e in Object(t));
    }
    Jv.exports = aN;
  });
  var rg = c((_H, tg) => {
    var eg = Pn(),
      sN = "Expected a function";
    function pa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(sN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (pa.Cache || eg)()), r;
    }
    pa.Cache = eg;
    tg.exports = pa;
  });
  var ig = c((bH, ng) => {
    var uN = rg(),
      cN = 500;
    function lN(e) {
      var t = uN(e, function (n) {
          return r.size === cN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    ng.exports = lN;
  });
  var ag = c((TH, og) => {
    var fN = ig(),
      dN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      pN = /\\(\\)?/g,
      vN = fN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(dN, function (r, n, i, o) {
            t.push(i ? o.replace(pN, "$1") : n || r);
          }),
          t
        );
      });
    og.exports = vN;
  });
  var va = c((IH, sg) => {
    function gN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    sg.exports = gN;
  });
  var pg = c((OH, dg) => {
    var ug = Xt(),
      hN = va(),
      yN = Oe(),
      EN = kr(),
      mN = 1 / 0,
      cg = ug ? ug.prototype : void 0,
      lg = cg ? cg.toString : void 0;
    function fg(e) {
      if (typeof e == "string") return e;
      if (yN(e)) return hN(e, fg) + "";
      if (EN(e)) return lg ? lg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -mN ? "-0" : t;
    }
    dg.exports = fg;
  });
  var gg = c((AH, vg) => {
    var _N = pg();
    function bN(e) {
      return e == null ? "" : _N(e);
    }
    vg.exports = bN;
  });
  var Vr = c((wH, hg) => {
    var TN = Oe(),
      IN = Hn(),
      ON = ag(),
      AN = gg();
    function wN(e, t) {
      return TN(e) ? e : IN(e, t) ? [e] : ON(AN(e));
    }
    hg.exports = wN;
  });
  var rr = c((xH, yg) => {
    var xN = kr(),
      SN = 1 / 0;
    function CN(e) {
      if (typeof e == "string" || xN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -SN ? "-0" : t;
    }
    yg.exports = CN;
  });
  var Xn = c((SH, Eg) => {
    var RN = Vr(),
      LN = rr();
    function NN(e, t) {
      t = RN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[LN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Eg.exports = NN;
  });
  var jn = c((CH, mg) => {
    var PN = Xn();
    function qN(e, t, r) {
      var n = e == null ? void 0 : PN(e, t);
      return n === void 0 ? r : n;
    }
    mg.exports = qN;
  });
  var bg = c((RH, _g) => {
    function MN(e, t) {
      return e != null && t in Object(e);
    }
    _g.exports = MN;
  });
  var Ig = c((LH, Tg) => {
    var FN = Vr(),
      DN = qr(),
      GN = Oe(),
      kN = Dn(),
      VN = Gn(),
      UN = rr();
    function BN(e, t, r) {
      t = FN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = UN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && VN(i) && kN(a, i) && (GN(e) || DN(e)));
    }
    Tg.exports = BN;
  });
  var Ag = c((NH, Og) => {
    var WN = bg(),
      HN = Ig();
    function XN(e, t) {
      return e != null && HN(e, t, WN);
    }
    Og.exports = XN;
  });
  var xg = c((PH, wg) => {
    var jN = la(),
      zN = jn(),
      KN = Ag(),
      YN = Hn(),
      $N = fa(),
      QN = da(),
      ZN = rr(),
      JN = 1,
      eP = 2;
    function tP(e, t) {
      return YN(e) && $N(t)
        ? QN(ZN(e), t)
        : function (r) {
            var n = zN(r, e);
            return n === void 0 && n === t ? KN(r, e) : jN(t, n, JN | eP);
          };
    }
    wg.exports = tP;
  });
  var zn = c((qH, Sg) => {
    function rP(e) {
      return e;
    }
    Sg.exports = rP;
  });
  var ga = c((MH, Cg) => {
    function nP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Cg.exports = nP;
  });
  var Lg = c((FH, Rg) => {
    var iP = Xn();
    function oP(e) {
      return function (t) {
        return iP(t, e);
      };
    }
    Rg.exports = oP;
  });
  var Pg = c((DH, Ng) => {
    var aP = ga(),
      sP = Lg(),
      uP = Hn(),
      cP = rr();
    function lP(e) {
      return uP(e) ? aP(cP(e)) : sP(e);
    }
    Ng.exports = lP;
  });
  var Ot = c((GH, qg) => {
    var fP = Qv(),
      dP = xg(),
      pP = zn(),
      vP = Oe(),
      gP = Pg();
    function hP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? pP
        : typeof e == "object"
        ? vP(e)
          ? dP(e[0], e[1])
          : fP(e)
        : gP(e);
    }
    qg.exports = hP;
  });
  var ha = c((kH, Mg) => {
    var yP = Ot(),
      EP = Pt(),
      mP = Gr();
    function _P(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!EP(t)) {
          var o = yP(r, 3);
          (t = mP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Mg.exports = _P;
  });
  var ya = c((VH, Fg) => {
    function bP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Fg.exports = bP;
  });
  var Gg = c((UH, Dg) => {
    var TP = /\s/;
    function IP(e) {
      for (var t = e.length; t-- && TP.test(e.charAt(t)); );
      return t;
    }
    Dg.exports = IP;
  });
  var Vg = c((BH, kg) => {
    var OP = Gg(),
      AP = /^\s+/;
    function wP(e) {
      return e && e.slice(0, OP(e) + 1).replace(AP, "");
    }
    kg.exports = wP;
  });
  var Kn = c((WH, Wg) => {
    var xP = Vg(),
      Ug = st(),
      SP = kr(),
      Bg = 0 / 0,
      CP = /^[-+]0x[0-9a-f]+$/i,
      RP = /^0b[01]+$/i,
      LP = /^0o[0-7]+$/i,
      NP = parseInt;
    function PP(e) {
      if (typeof e == "number") return e;
      if (SP(e)) return Bg;
      if (Ug(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Ug(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = xP(e);
      var r = RP.test(e);
      return r || LP.test(e) ? NP(e.slice(2), r ? 2 : 8) : CP.test(e) ? Bg : +e;
    }
    Wg.exports = PP;
  });
  var jg = c((HH, Xg) => {
    var qP = Kn(),
      Hg = 1 / 0,
      MP = 17976931348623157e292;
    function FP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = qP(e)), e === Hg || e === -Hg)) {
        var t = e < 0 ? -1 : 1;
        return t * MP;
      }
      return e === e ? e : 0;
    }
    Xg.exports = FP;
  });
  var Ea = c((XH, zg) => {
    var DP = jg();
    function GP(e) {
      var t = DP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    zg.exports = GP;
  });
  var Yg = c((jH, Kg) => {
    var kP = ya(),
      VP = Ot(),
      UP = Ea(),
      BP = Math.max;
    function WP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : UP(r);
      return i < 0 && (i = BP(n + i, 0)), kP(e, VP(t, 3), i);
    }
    Kg.exports = WP;
  });
  var ma = c((zH, $g) => {
    var HP = ha(),
      XP = Yg(),
      jP = HP(XP);
    $g.exports = jP;
  });
  var Jg = {};
  De(Jg, {
    ELEMENT_MATCHES: () => zP,
    FLEX_PREFIXED: () => _a,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => $n,
    withBrowser: () => Yn,
  });
  var Zg,
    Je,
    Yn,
    zP,
    _a,
    At,
    Qg,
    $n,
    Qn = he(() => {
      "use strict";
      (Zg = le(ma())),
        (Je = typeof window < "u"),
        (Yn = (e, t) => (Je ? e() : t)),
        (zP = Yn(() =>
          (0, Zg.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (_a = Yn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = Yn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Qg = At.split("transform")[0]),
        ($n = Qg ? Qg + "TransformStyle" : "transformStyle");
    });
  var ba = c((KH, ih) => {
    var KP = 4,
      YP = 0.001,
      $P = 1e-7,
      QP = 10,
      Ur = 11,
      Zn = 1 / (Ur - 1),
      ZP = typeof Float32Array == "function";
    function eh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function th(e, t) {
      return 3 * t - 6 * e;
    }
    function rh(e) {
      return 3 * e;
    }
    function Jn(e, t, r) {
      return ((eh(t, r) * e + th(t, r)) * e + rh(t)) * e;
    }
    function nh(e, t, r) {
      return 3 * eh(t, r) * e * e + 2 * th(t, r) * e + rh(t);
    }
    function JP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Jn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > $P && ++s < QP);
      return a;
    }
    function eq(e, t, r, n) {
      for (var i = 0; i < KP; ++i) {
        var o = nh(t, r, n);
        if (o === 0) return t;
        var a = Jn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ih.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = ZP ? new Float32Array(Ur) : new Array(Ur);
      if (t !== r || n !== i)
        for (var a = 0; a < Ur; ++a) o[a] = Jn(a * Zn, t, n);
      function s(u) {
        for (var f = 0, _ = 1, h = Ur - 1; _ !== h && o[_] <= u; ++_) f += Zn;
        --_;
        var v = (u - o[_]) / (o[_ + 1] - o[_]),
          b = f + v * Zn,
          S = nh(b, t, n);
        return S >= YP ? eq(u, b, t, n) : S === 0 ? b : JP(u, f, f + Zn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Jn(s(f), r, i);
      };
    };
  });
  var Wr = {};
  De(Wr, {
    bounce: () => Fq,
    bouncePast: () => Dq,
    ease: () => tq,
    easeIn: () => rq,
    easeInOut: () => iq,
    easeOut: () => nq,
    inBack: () => xq,
    inCirc: () => Iq,
    inCubic: () => uq,
    inElastic: () => Rq,
    inExpo: () => _q,
    inOutBack: () => Cq,
    inOutCirc: () => Aq,
    inOutCubic: () => lq,
    inOutElastic: () => Nq,
    inOutExpo: () => Tq,
    inOutQuad: () => sq,
    inOutQuart: () => pq,
    inOutQuint: () => hq,
    inOutSine: () => mq,
    inQuad: () => oq,
    inQuart: () => fq,
    inQuint: () => vq,
    inSine: () => yq,
    outBack: () => Sq,
    outBounce: () => wq,
    outCirc: () => Oq,
    outCubic: () => cq,
    outElastic: () => Lq,
    outExpo: () => bq,
    outQuad: () => aq,
    outQuart: () => dq,
    outQuint: () => gq,
    outSine: () => Eq,
    swingFrom: () => qq,
    swingFromTo: () => Pq,
    swingTo: () => Mq,
  });
  function oq(e) {
    return Math.pow(e, 2);
  }
  function aq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function sq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function uq(e) {
    return Math.pow(e, 3);
  }
  function cq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function lq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function fq(e) {
    return Math.pow(e, 4);
  }
  function dq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function pq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function vq(e) {
    return Math.pow(e, 5);
  }
  function gq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function hq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function yq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Eq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function mq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function _q(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function bq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Tq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Iq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Oq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Aq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function wq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function xq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Sq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Cq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Rq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Lq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Nq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Pq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function qq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Mq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Fq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Dq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Br,
    vt,
    tq,
    rq,
    nq,
    iq,
    Ta = he(() => {
      "use strict";
      (Br = le(ba())),
        (vt = 1.70158),
        (tq = (0, Br.default)(0.25, 0.1, 0.25, 1)),
        (rq = (0, Br.default)(0.42, 0, 1, 1)),
        (nq = (0, Br.default)(0, 0, 0.58, 1)),
        (iq = (0, Br.default)(0.42, 0, 0.58, 1));
    });
  var ah = {};
  De(ah, {
    applyEasing: () => kq,
    createBezierEasing: () => Gq,
    optimizeFloat: () => Hr,
  });
  function Hr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Gq(e) {
    return (0, oh.default)(...e);
  }
  function kq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Hr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Wr[e] ? Wr[e](t) : t);
  }
  var oh,
    Ia = he(() => {
      "use strict";
      Ta();
      oh = le(ba());
    });
  var ch = {};
  De(ch, {
    createElementState: () => uh,
    ixElements: () => Jq,
    mergeActionState: () => Oa,
  });
  function uh(e, t, r, n, i) {
    let o =
      r === Vq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, nr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Oa(e, t, r, n, i) {
    let o = tM(i);
    return (0, nr.mergeIn)(e, [t, Zq, r], n, o);
  }
  function tM(e) {
    let { config: t } = e;
    return eM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var nr,
    $H,
    Vq,
    QH,
    Uq,
    Bq,
    Wq,
    Hq,
    Xq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    sh,
    Zq,
    Jq,
    eM,
    lh = he(() => {
      "use strict";
      nr = le(Kt());
      ke();
      ({
        HTML_ELEMENT: $H,
        PLAIN_OBJECT: Vq,
        ABSTRACT_NODE: QH,
        CONFIG_X_VALUE: Uq,
        CONFIG_Y_VALUE: Bq,
        CONFIG_Z_VALUE: Wq,
        CONFIG_VALUE: Hq,
        CONFIG_X_UNIT: Xq,
        CONFIG_Y_UNIT: jq,
        CONFIG_Z_UNIT: zq,
        CONFIG_UNIT: Kq,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: Yq,
          IX2_INSTANCE_ADDED: $q,
          IX2_ELEMENT_STATE_CHANGED: Qq,
        } = Ie),
        (sh = {}),
        (Zq = "refState"),
        (Jq = (e = sh, t = {}) => {
          switch (t.type) {
            case Yq:
              return sh;
            case $q: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, nr.getIn)(u, [r, n]) !== n && (u = uh(u, n, a, r, o)),
                Oa(u, r, s, i, o)
              );
            }
            case Qq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Oa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      eM = [
        [Uq, Xq],
        [Bq, jq],
        [Wq, zq],
        [Hq, Kq],
      ];
    });
  var fh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var rM = (e) => e.value;
    Ae.getPluginConfig = rM;
    var nM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Ae.getPluginDuration = nM;
    var iM = (e) => e || { value: 0 };
    Ae.getPluginOrigin = iM;
    var oM = (e) => ({ value: e.value });
    Ae.getPluginDestination = oM;
    var aM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Ae.createPluginInstance = aM;
    var sM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Ae.renderPlugin = sM;
    var uM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Ae.clearPlugin = uM;
  });
  var ph = c((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.renderPlugin =
      we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
        void 0;
    var cM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      lM = () => window.Webflow.require("spline"),
      fM = (e, t) => e.filter((r) => !t.includes(r)),
      dM = (e, t) => e.value[t];
    we.getPluginConfig = dM;
    var pM = () => null;
    we.getPluginDuration = pM;
    var dh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      vM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = fM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = dh[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = dh[a]), o), {});
      };
    we.getPluginOrigin = vM;
    var gM = (e) => e.value;
    we.getPluginDestination = gM;
    var hM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? cM(n) : null;
    };
    we.createPluginInstance = hM;
    var yM = (e, t, r) => {
      let n = lM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    we.renderPlugin = yM;
    var EM = () => null;
    we.clearPlugin = EM;
  });
  var wa = c((Aa) => {
    "use strict";
    Object.defineProperty(Aa, "__esModule", { value: !0 });
    Aa.normalizeColor = mM;
    var vh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function mM(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof vh[o] == "string" ? vh[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          h = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let v = (1 - Math.abs(2 * h - 1)) * _,
          b = v * (1 - Math.abs(((f / 60) % 2) - 1)),
          S = h - v / 2,
          O,
          R,
          A;
        f >= 0 && f < 60
          ? ((O = v), (R = b), (A = 0))
          : f >= 60 && f < 120
          ? ((O = b), (R = v), (A = 0))
          : f >= 120 && f < 180
          ? ((O = 0), (R = v), (A = b))
          : f >= 180 && f < 240
          ? ((O = 0), (R = b), (A = v))
          : f >= 240 && f < 300
          ? ((O = b), (R = 0), (A = v))
          : ((O = v), (R = 0), (A = b)),
          (t = Math.round((O + S) * 255)),
          (r = Math.round((R + S) * 255)),
          (n = Math.round((A + S) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          h = parseFloat(u[2].replace("%", "")) / 100,
          v = (1 - Math.abs(2 * h - 1)) * _,
          b = v * (1 - Math.abs(((f / 60) % 2) - 1)),
          S = h - v / 2,
          O,
          R,
          A;
        f >= 0 && f < 60
          ? ((O = v), (R = b), (A = 0))
          : f >= 60 && f < 120
          ? ((O = b), (R = v), (A = 0))
          : f >= 120 && f < 180
          ? ((O = 0), (R = v), (A = b))
          : f >= 180 && f < 240
          ? ((O = 0), (R = b), (A = v))
          : f >= 240 && f < 300
          ? ((O = b), (R = 0), (A = v))
          : ((O = v), (R = 0), (A = b)),
          (t = Math.round((O + S) * 255)),
          (r = Math.round((R + S) * 255)),
          (n = Math.round((A + S) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var gh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var _M = wa(),
      bM = (e, t) => e.value[t];
    xe.getPluginConfig = bM;
    var TM = () => null;
    xe.getPluginDuration = TM;
    var IM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, _M.normalizeColor)(i);
    };
    xe.getPluginOrigin = IM;
    var OM = (e) => e.value;
    xe.getPluginDestination = OM;
    var AM = () => null;
    xe.createPluginInstance = AM;
    var wM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: _ } = o,
        h;
      a != null && (h = a + i),
        s != null &&
          f != null &&
          u != null &&
          _ != null &&
          (h = `rgba(${s}, ${u}, ${f}, ${_})`),
        h != null && document.documentElement.style.setProperty(n, h);
    };
    xe.renderPlugin = wM;
    var xM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    xe.clearPlugin = xM;
  });
  var hh = c((ei) => {
    "use strict";
    var Sa = fn().default;
    Object.defineProperty(ei, "__esModule", { value: !0 });
    ei.pluginMethodMap = void 0;
    var xa = (ke(), rt(Tf)),
      SM = Sa(fh()),
      CM = Sa(ph()),
      RM = Sa(gh()),
      rX = (ei.pluginMethodMap = new Map([
        [xa.ActionTypeConsts.PLUGIN_LOTTIE, { ...SM }],
        [xa.ActionTypeConsts.PLUGIN_SPLINE, { ...CM }],
        [xa.ActionTypeConsts.PLUGIN_VARIABLE, { ...RM }],
      ]));
  });
  var yh = {};
  De(yh, {
    clearPlugin: () => qa,
    createPluginInstance: () => NM,
    getPluginConfig: () => Ra,
    getPluginDestination: () => Na,
    getPluginDuration: () => LM,
    getPluginOrigin: () => La,
    isPluginType: () => Mt,
    renderPlugin: () => Pa,
  });
  function Mt(e) {
    return Ca.pluginMethodMap.has(e);
  }
  var Ca,
    Ft,
    Ra,
    La,
    LM,
    Na,
    NM,
    Pa,
    qa,
    Ma = he(() => {
      "use strict";
      Qn();
      Ca = le(hh());
      (Ft = (e) => (t) => {
        if (!Je) return () => null;
        let r = Ca.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ra = Ft("getPluginConfig")),
        (La = Ft("getPluginOrigin")),
        (LM = Ft("getPluginDuration")),
        (Na = Ft("getPluginDestination")),
        (NM = Ft("createPluginInstance")),
        (Pa = Ft("renderPlugin")),
        (qa = Ft("clearPlugin"));
    });
  var mh = c((oX, Eh) => {
    function PM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Eh.exports = PM;
  });
  var bh = c((aX, _h) => {
    function qM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    _h.exports = qM;
  });
  var Ih = c((sX, Th) => {
    function MM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Th.exports = MM;
  });
  var Ah = c((uX, Oh) => {
    var FM = Ih(),
      DM = FM();
    Oh.exports = DM;
  });
  var Fa = c((cX, wh) => {
    var GM = Ah(),
      kM = Gr();
    function VM(e, t) {
      return e && GM(e, t, kM);
    }
    wh.exports = VM;
  });
  var Sh = c((lX, xh) => {
    var UM = Pt();
    function BM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!UM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    xh.exports = BM;
  });
  var Da = c((fX, Ch) => {
    var WM = Fa(),
      HM = Sh(),
      XM = HM(WM);
    Ch.exports = XM;
  });
  var Lh = c((dX, Rh) => {
    function jM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Rh.exports = jM;
  });
  var Ph = c((pX, Nh) => {
    var zM = bh(),
      KM = Da(),
      YM = Ot(),
      $M = Lh(),
      QM = Oe();
    function ZM(e, t, r) {
      var n = QM(e) ? zM : $M,
        i = arguments.length < 3;
      return n(e, YM(t, 4), r, i, KM);
    }
    Nh.exports = ZM;
  });
  var Mh = c((vX, qh) => {
    var JM = ya(),
      eF = Ot(),
      tF = Ea(),
      rF = Math.max,
      nF = Math.min;
    function iF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = tF(r)), (i = r < 0 ? rF(n + i, 0) : nF(i, n - 1))),
        JM(e, eF(t, 3), i, !0)
      );
    }
    qh.exports = iF;
  });
  var Dh = c((gX, Fh) => {
    var oF = ha(),
      aF = Mh(),
      sF = oF(aF);
    Fh.exports = sF;
  });
  function Gh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function uF(e, t) {
    if (Gh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Gh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Ga,
    kh = he(() => {
      "use strict";
      Ga = uF;
    });
  var ny = {};
  De(ny, {
    cleanupHTMLElement: () => oD,
    clearAllStyles: () => iD,
    clearObjectCache: () => AF,
    getActionListProgress: () => sD,
    getAffectedElements: () => Wa,
    getComputedStyle: () => PF,
    getDestinationValues: () => VF,
    getElementId: () => CF,
    getInstanceId: () => xF,
    getInstanceOrigin: () => FF,
    getItemConfigByKey: () => kF,
    getMaxDurationItemIndex: () => ry,
    getNamespacedParameterId: () => lD,
    getRenderType: () => Jh,
    getStyleProp: () => UF,
    mediaQueriesEqual: () => dD,
    observeStore: () => NF,
    reduceListToGroup: () => uD,
    reifyState: () => RF,
    renderHTMLElement: () => BF,
    shallowEqual: () => Ga,
    shouldAllowMediaQuery: () => fD,
    shouldNamespaceEventParameter: () => cD,
    stringifyTarget: () => pD,
  });
  function AF() {
    ti.clear();
  }
  function xF() {
    return "i" + wF++;
  }
  function CF(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + SF++;
  }
  function RF({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, oi.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function NF({ store: e, select: t, onChange: r, comparator: n = LF }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Bh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Wa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (F, w) =>
          F.concat(
            Wa({
              config: { target: w },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: _,
        matchSelector: h,
        elementContains: v,
        isSiblingNode: b,
      } = i,
      { target: S } = e;
    if (!S) return [];
    let {
      id: O,
      objectId: R,
      selector: A,
      selectorGuids: N,
      appliesTo: L,
      useEventTarget: D,
    } = Bh(S);
    if (R) return [ti.has(R) ? ti.get(R) : ti.set(R, {}).get(R)];
    if (L === Bo.PAGE) {
      let F = a(O);
      return F ? [F] : [];
    }
    let P = (t?.action?.config?.affectedElements ?? {})[O || A] || {},
      z = !!(P.id || P.selector),
      X,
      K,
      J,
      re = t && s(Bh(t.target));
    if (
      (z
        ? ((X = P.limitAffectedElements), (K = re), (J = s(P)))
        : (K = J = s({ id: O, selector: A, selectorGuids: N })),
      t && D)
    ) {
      let F = r && (J || D === !0) ? [r] : u(re);
      if (J) {
        if (D === TF) return u(J).filter((w) => F.some((q) => v(w, q)));
        if (D === Vh) return u(J).filter((w) => F.some((q) => v(q, w)));
        if (D === Uh) return u(J).filter((w) => F.some((q) => b(q, w)));
      }
      return F;
    }
    return K == null || J == null
      ? []
      : Je && n
      ? u(J).filter((F) => n.contains(F))
      : X === Vh
      ? u(K, J)
      : X === bF
      ? f(u(K)).filter(h(J))
      : X === Uh
      ? _(u(K)).filter(h(J))
      : u(J);
  }
  function PF({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case ur:
      case cr:
      case lr:
      case fr:
      case si:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function FF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return La(a)(t[a], n);
    switch (n.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr:
        return t[n.actionTypeId] || Ha[n.actionTypeId];
      case Yr:
        return qF(t[n.actionTypeId], n.config.filters);
      case $r:
        return MF(t[n.actionTypeId], n.config.fontVariations);
      case $h:
        return { value: (0, gt.default)(parseFloat(o(e, ni)), 1) };
      case ur: {
        let s = o(e, ut),
          u = o(e, ct),
          f,
          _;
        return (
          n.config.widthUnit === wt
            ? (f = Wh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === wt
            ? (_ = Wh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (_ = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: _ }
        );
      }
      case cr:
      case lr:
      case fr:
        return tD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case si:
        return { value: (0, gt.default)(o(e, ii), r.display) };
      case OF:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function VF({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return Na(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case ur: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Je) return { widthValue: u, heightValue: f };
        if (a === wt) {
          let _ = n(e, ut);
          i(e, ut, ""), (u = o(e, "offsetWidth")), i(e, ut, _);
        }
        if (s === wt) {
          let _ = n(e, ct);
          i(e, ct, ""), (f = o(e, "offsetHeight")), i(e, ct, _);
        }
        return { widthValue: u, heightValue: f };
      }
      case cr:
      case lr:
      case fr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            _ = (0, jh.normalizeColor)(f);
          return {
            rValue: _.red,
            gValue: _.green,
            bValue: _.blue,
            aValue: _.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Yr:
        return t.config.filters.reduce(DF, {});
      case $r:
        return t.config.fontVariations.reduce(GF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Jh(e) {
    if (/^TRANSFORM_/.test(e)) return Kh;
    if (/^STYLE_/.test(e)) return Ua;
    if (/^GENERAL_/.test(e)) return Va;
    if (/^PLUGIN_/.test(e)) return Yh;
  }
  function UF(e, t) {
    return e === Ua ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function BF(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Kh:
        return zF(e, t, r, i, a);
      case Ua:
        return rD(e, t, r, i, o, a);
      case Va:
        return nD(e, i, a);
      case Yh: {
        let { actionTypeId: f } = i;
        if (Mt(f)) return Pa(f)(u, t, i);
      }
    }
  }
  function zF(e, t, r, n, i) {
    let o = jF
        .map((s) => {
          let u = Ha[s],
            {
              xValue: f = u.xValue,
              yValue: _ = u.yValue,
              zValue: h = u.zValue,
              xUnit: v = "",
              yUnit: b = "",
              zUnit: S = "",
            } = t[s] || {};
          switch (s) {
            case or:
              return `${fF}(${f}${v}, ${_}${b}, ${h}${S})`;
            case ar:
              return `${dF}(${f}${v}, ${_}${b}, ${h}${S})`;
            case sr:
              return `${pF}(${f}${v}) ${vF}(${_}${b}) ${gF}(${h}${S})`;
            case Kr:
              return `${hF}(${f}${v}, ${_}${b})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Dt(e, At, i), a(e, At, o), $F(n, r) && a(e, $n, yF);
  }
  function KF(e, t, r, n) {
    let i = (0, oi.default)(t, (a, s, u) => `${a} ${u}(${s}${XF(u, r)})`, ""),
      { setStyle: o } = n;
    Dt(e, Xr, n), o(e, Xr, i);
  }
  function YF(e, t, r, n) {
    let i = (0, oi.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Dt(e, jr, n), o(e, jr, i);
  }
  function $F({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === or && n !== void 0) ||
      (e === ar && n !== void 0) ||
      (e === sr && (t !== void 0 || r !== void 0))
    );
  }
  function eD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function tD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ba[t],
      o = n(e, i),
      a = ZF.test(o) ? o : r[i],
      s = eD(JF, a).split(zr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function rD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case ur: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: _ } = r;
        f !== void 0 && (s === wt && (s = "px"), Dt(e, ut, o), a(e, ut, f + s)),
          _ !== void 0 &&
            (u === wt && (u = "px"), Dt(e, ct, o), a(e, ct, _ + u));
        break;
      }
      case Yr: {
        KF(e, r, n.config, o);
        break;
      }
      case $r: {
        YF(e, r, n.config, o);
        break;
      }
      case cr:
      case lr:
      case fr: {
        let s = Ba[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          _ = Math.round(r.bValue),
          h = r.aValue;
        Dt(e, s, o),
          a(e, s, h >= 1 ? `rgb(${u},${f},${_})` : `rgba(${u},${f},${_},${h})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Dt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function nD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case si: {
        let { value: i } = t.config;
        i === EF && Je ? n(e, ii, _a) : n(e, ii, i);
        return;
      }
    }
  }
  function Dt(e, t, r) {
    if (!Je) return;
    let n = Zh[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    if (!a) {
      o(e, ir, n);
      return;
    }
    let s = a.split(zr).map(Qh);
    s.indexOf(n) === -1 && o(e, ir, s.concat(n).join(zr));
  }
  function ey(e, t, r) {
    if (!Je) return;
    let n = Zh[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ir,
        a
          .split(zr)
          .map(Qh)
          .filter((s) => s !== n)
          .join(zr)
      );
  }
  function iD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && Hh({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Hh({ actionList: i[o], elementApi: t });
      });
  }
  function Hh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Xh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Xh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Xh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Mt(o)
        ? (s = (u) => qa(o)(u, i))
        : (s = ty({ effect: aD, actionTypeId: o, elementApi: r })),
        Wa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function oD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === ur) {
      let { config: a } = t;
      a.widthUnit === wt && n(e, ut, ""), a.heightUnit === wt && n(e, ct, "");
    }
    i(e, ir) && ty({ effect: ey, actionTypeId: o, elementApi: r })(e);
  }
  function aD(e, t, r) {
    let { setStyle: n } = r;
    ey(e, t, r), n(e, t, ""), t === At && n(e, $n, "");
  }
  function ry(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function sD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: _ } = u,
          h = _[ry(_)],
          { config: v, actionTypeId: b } = h;
        i.id === h.id && (s = a + o);
        let S = Jh(b) === Va ? 0 : v.duration;
        a += v.delay + S;
      }),
      a > 0 ? Hr(s / a) : 0
    );
  }
  function uD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ai.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ai.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function cD(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === at.ELEMENT)
    );
  }
  function lD(e, t) {
    return e + IF + t;
  }
  function fD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function dD(e, t) {
    return Ga(e && e.sort(), t && t.sort());
  }
  function pD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + ka + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + ka + r + ka + n;
  }
  var gt,
    oi,
    ri,
    ai,
    jh,
    cF,
    lF,
    fF,
    dF,
    pF,
    vF,
    gF,
    hF,
    yF,
    EF,
    ni,
    Xr,
    jr,
    ut,
    ct,
    zh,
    mF,
    _F,
    Vh,
    bF,
    Uh,
    TF,
    ii,
    ir,
    wt,
    zr,
    IF,
    ka,
    Kh,
    Va,
    Ua,
    Yh,
    or,
    ar,
    sr,
    Kr,
    $h,
    Yr,
    $r,
    ur,
    cr,
    lr,
    fr,
    si,
    OF,
    Qh,
    Ba,
    Zh,
    ti,
    wF,
    SF,
    LF,
    Wh,
    qF,
    MF,
    DF,
    GF,
    kF,
    Ha,
    WF,
    HF,
    XF,
    jF,
    QF,
    ZF,
    JF,
    ty,
    iy = he(() => {
      "use strict";
      (gt = le(mh())), (oi = le(Ph())), (ri = le(Dh())), (ai = le(Kt()));
      ke();
      kh();
      Ia();
      jh = le(wa());
      Ma();
      Qn();
      ({
        BACKGROUND: cF,
        TRANSFORM: lF,
        TRANSLATE_3D: fF,
        SCALE_3D: dF,
        ROTATE_X: pF,
        ROTATE_Y: vF,
        ROTATE_Z: gF,
        SKEW: hF,
        PRESERVE_3D: yF,
        FLEX: EF,
        OPACITY: ni,
        FILTER: Xr,
        FONT_VARIATION_SETTINGS: jr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: zh,
        BORDER_COLOR: mF,
        COLOR: _F,
        CHILDREN: Vh,
        IMMEDIATE_CHILDREN: bF,
        SIBLINGS: Uh,
        PARENT: TF,
        DISPLAY: ii,
        WILL_CHANGE: ir,
        AUTO: wt,
        COMMA_DELIMITER: zr,
        COLON_DELIMITER: IF,
        BAR_DELIMITER: ka,
        RENDER_TRANSFORM: Kh,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Ua,
        RENDER_PLUGIN: Yh,
      } = Ce),
        ({
          TRANSFORM_MOVE: or,
          TRANSFORM_SCALE: ar,
          TRANSFORM_ROTATE: sr,
          TRANSFORM_SKEW: Kr,
          STYLE_OPACITY: $h,
          STYLE_FILTER: Yr,
          STYLE_FONT_VARIATION: $r,
          STYLE_SIZE: ur,
          STYLE_BACKGROUND_COLOR: cr,
          STYLE_BORDER: lr,
          STYLE_TEXT_COLOR: fr,
          GENERAL_DISPLAY: si,
          OBJECT_VALUE: OF,
        } = Ge),
        (Qh = (e) => e.trim()),
        (Ba = Object.freeze({ [cr]: zh, [lr]: mF, [fr]: _F })),
        (Zh = Object.freeze({
          [At]: lF,
          [zh]: cF,
          [ni]: ni,
          [Xr]: Xr,
          [ut]: ut,
          [ct]: ct,
          [jr]: jr,
        })),
        (ti = new Map());
      wF = 1;
      SF = 1;
      LF = (e, t) => e === t;
      (Wh = /px/),
        (qF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = WF[n.type]), r),
            e || {}
          )),
        (MF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = HF[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (DF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (GF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (kF = (e, t, r) => {
          if (Mt(e)) return Ra(e)(r, t);
          switch (e) {
            case Yr: {
              let n = (0, ri.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case $r: {
              let n = (0, ri.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ha = {
        [or]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ar]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (WF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (HF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (XF = (e, t) => {
          let r = (0, ri.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (jF = Object.keys(Ha));
      (QF = "\\(([^)]+)\\)"), (ZF = /^rgb/), (JF = RegExp(`rgba?${QF}`));
      ty =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case or:
            case ar:
            case sr:
            case Kr:
              e(n, At, r);
              break;
            case Yr:
              e(n, Xr, r);
              break;
            case $r:
              e(n, jr, r);
              break;
            case $h:
              e(n, ni, r);
              break;
            case ur:
              e(n, ut, r), e(n, ct, r);
              break;
            case cr:
            case lr:
            case fr:
              e(n, Ba[t], r);
              break;
            case si:
              e(n, ii, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var dr = fn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var vD = dr((Qn(), rt(Jg)));
    Pe.IX2BrowserSupport = vD;
    var gD = dr((Ta(), rt(Wr)));
    Pe.IX2Easings = gD;
    var hD = dr((Ia(), rt(ah)));
    Pe.IX2EasingUtils = hD;
    var yD = dr((lh(), rt(ch)));
    Pe.IX2ElementsReducer = yD;
    var ED = dr((Ma(), rt(yh)));
    Pe.IX2VanillaPlugins = ED;
    var mD = dr((iy(), rt(ny)));
    Pe.IX2VanillaUtils = mD;
  });
  var ci,
    ht,
    _D,
    bD,
    TD,
    ID,
    OD,
    AD,
    ui,
    oy,
    wD,
    xD,
    Xa,
    SD,
    CD,
    RD,
    LD,
    ay,
    sy = he(() => {
      "use strict";
      ke();
      (ci = le(Gt())),
        (ht = le(Kt())),
        ({
          IX2_RAW_DATA_IMPORTED: _D,
          IX2_SESSION_STOPPED: bD,
          IX2_INSTANCE_ADDED: TD,
          IX2_INSTANCE_STARTED: ID,
          IX2_INSTANCE_REMOVED: OD,
          IX2_ANIMATION_FRAME_CHANGED: AD,
        } = Ie),
        ({
          optimizeFloat: ui,
          applyEasing: oy,
          createBezierEasing: wD,
        } = ci.IX2EasingUtils),
        ({ RENDER_GENERAL: xD } = Ce),
        ({
          getItemConfigByKey: Xa,
          getRenderType: SD,
          getStyleProp: CD,
        } = ci.IX2VanillaUtils),
        (RD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: _,
              skipToValue: h,
            } = e,
            { parameters: v } = t.payload,
            b = Math.max(1 - a, 0.01),
            S = v[n];
          S == null && ((b = 1), (S = s));
          let O = Math.max(S, 0) || 0,
            R = ui(O - r),
            A = _ ? h : ui(r + R * b),
            N = A * 100;
          if (A === r && e.current) return e;
          let L, D, G, P;
          for (let X = 0, { length: K } = i; X < K; X++) {
            let { keyframe: J, actionItems: re } = i[X];
            if ((X === 0 && (L = re[0]), N >= J)) {
              L = re[0];
              let F = i[X + 1],
                w = F && N !== J;
              (D = w ? F.actionItems[0] : null),
                w && ((G = J / 100), (P = (F.keyframe - J) / 100));
            }
          }
          let z = {};
          if (L && !D)
            for (let X = 0, { length: K } = o; X < K; X++) {
              let J = o[X];
              z[J] = Xa(u, J, L.config);
            }
          else if (L && D && G !== void 0 && P !== void 0) {
            let X = (A - G) / P,
              K = L.config.easing,
              J = oy(K, X, f);
            for (let re = 0, { length: F } = o; re < F; re++) {
              let w = o[re],
                q = Xa(u, w, L.config),
                ee = (Xa(u, w, D.config) - q) * J + q;
              z[w] = ee;
            }
          }
          return (0, ht.merge)(e, { position: A, current: z });
        }),
        (LD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: _,
              pluginDuration: h,
              instanceDelay: v,
              customEasingFn: b,
              skipMotion: S,
            } = e,
            O = u.config.easing,
            { duration: R, delay: A } = u.config;
          h != null && (R = h),
            (A = v ?? A),
            a === xD ? (R = 0) : (o || S) && (R = A = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let L = N - (i + A);
            if (s) {
              let X = N - i,
                K = R + A,
                J = ui(Math.min(Math.max(0, X / K), 1));
              e = (0, ht.set)(e, "verboseTimeElapsed", K * J);
            }
            if (L < 0) return e;
            let D = ui(Math.min(Math.max(0, L / R), 1)),
              G = oy(O, D, b),
              P = {},
              z = null;
            return (
              _.length &&
                (z = _.reduce((X, K) => {
                  let J = f[K],
                    re = parseFloat(n[K]) || 0,
                    w = (parseFloat(J) - re) * G + re;
                  return (X[K] = w), X;
                }, {})),
              (P.current = z),
              (P.position = D),
              D === 1 && ((P.active = !1), (P.complete = !0)),
              (0, ht.merge)(e, P)
            );
          }
          return e;
        }),
        (ay = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case _D:
              return t.payload.ixInstances || Object.freeze({});
            case bD:
              return Object.freeze({});
            case TD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: _,
                  origin: h,
                  destination: v,
                  immediate: b,
                  verbose: S,
                  continuous: O,
                  parameterId: R,
                  actionGroups: A,
                  smoothing: N,
                  restingValue: L,
                  pluginInstance: D,
                  pluginDuration: G,
                  instanceDelay: P,
                  skipMotion: z,
                  skipToValue: X,
                } = t.payload,
                { actionTypeId: K } = i,
                J = SD(K),
                re = CD(J, K),
                F = Object.keys(v).filter(
                  (q) => v[q] != null && typeof v[q] != "string"
                ),
                { easing: w } = i.config;
              return (0, ht.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: h,
                destination: v,
                destinationKeys: F,
                immediate: b,
                verbose: S,
                current: null,
                actionItem: i,
                actionTypeId: K,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: J,
                isCarrier: _,
                styleProp: re,
                continuous: O,
                parameterId: R,
                actionGroups: A,
                smoothing: N,
                restingValue: L,
                pluginInstance: D,
                pluginDuration: G,
                instanceDelay: P,
                skipMotion: z,
                skipToValue: X,
                customEasingFn:
                  Array.isArray(w) && w.length === 4 ? wD(w) : void 0,
              });
            }
            case ID: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ht.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case OD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case AD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? RD : LD;
                r = (0, ht.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var ND,
    PD,
    qD,
    uy,
    cy = he(() => {
      "use strict";
      ke();
      ({
        IX2_RAW_DATA_IMPORTED: ND,
        IX2_SESSION_STOPPED: PD,
        IX2_PARAMETER_CHANGED: qD,
      } = Ie),
        (uy = (e = {}, t) => {
          switch (t.type) {
            case ND:
              return t.payload.ixParameters || {};
            case PD:
              return {};
            case qD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var dy = {};
  De(dy, { default: () => FD });
  var ly,
    fy,
    MD,
    FD,
    py = he(() => {
      "use strict";
      ly = le(Uo());
      Of();
      Xf();
      Kf();
      fy = le(Gt());
      sy();
      cy();
      ({ ixElements: MD } = fy.IX2ElementsReducer),
        (FD = (0, ly.combineReducers)({
          ixData: If,
          ixRequest: Hf,
          ixSession: zf,
          ixElements: MD,
          ixInstances: ay,
          ixParameters: uy,
        }));
    });
  var gy = c((NX, vy) => {
    var DD = Tt(),
      GD = Oe(),
      kD = pt(),
      VD = "[object String]";
    function UD(e) {
      return typeof e == "string" || (!GD(e) && kD(e) && DD(e) == VD);
    }
    vy.exports = UD;
  });
  var yy = c((PX, hy) => {
    var BD = ga(),
      WD = BD("length");
    hy.exports = WD;
  });
  var my = c((qX, Ey) => {
    var HD = "\\ud800-\\udfff",
      XD = "\\u0300-\\u036f",
      jD = "\\ufe20-\\ufe2f",
      zD = "\\u20d0-\\u20ff",
      KD = XD + jD + zD,
      YD = "\\ufe0e\\ufe0f",
      $D = "\\u200d",
      QD = RegExp("[" + $D + HD + KD + YD + "]");
    function ZD(e) {
      return QD.test(e);
    }
    Ey.exports = ZD;
  });
  var Sy = c((MX, xy) => {
    var by = "\\ud800-\\udfff",
      JD = "\\u0300-\\u036f",
      e1 = "\\ufe20-\\ufe2f",
      t1 = "\\u20d0-\\u20ff",
      r1 = JD + e1 + t1,
      n1 = "\\ufe0e\\ufe0f",
      i1 = "[" + by + "]",
      ja = "[" + r1 + "]",
      za = "\\ud83c[\\udffb-\\udfff]",
      o1 = "(?:" + ja + "|" + za + ")",
      Ty = "[^" + by + "]",
      Iy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Oy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      a1 = "\\u200d",
      Ay = o1 + "?",
      wy = "[" + n1 + "]?",
      s1 = "(?:" + a1 + "(?:" + [Ty, Iy, Oy].join("|") + ")" + wy + Ay + ")*",
      u1 = wy + Ay + s1,
      c1 = "(?:" + [Ty + ja + "?", ja, Iy, Oy, i1].join("|") + ")",
      _y = RegExp(za + "(?=" + za + ")|" + c1 + u1, "g");
    function l1(e) {
      for (var t = (_y.lastIndex = 0); _y.test(e); ) ++t;
      return t;
    }
    xy.exports = l1;
  });
  var Ry = c((FX, Cy) => {
    var f1 = yy(),
      d1 = my(),
      p1 = Sy();
    function v1(e) {
      return d1(e) ? p1(e) : f1(e);
    }
    Cy.exports = v1;
  });
  var Ny = c((DX, Ly) => {
    var g1 = Un(),
      h1 = Bn(),
      y1 = Pt(),
      E1 = gy(),
      m1 = Ry(),
      _1 = "[object Map]",
      b1 = "[object Set]";
    function T1(e) {
      if (e == null) return 0;
      if (y1(e)) return E1(e) ? m1(e) : e.length;
      var t = h1(e);
      return t == _1 || t == b1 ? e.size : g1(e).length;
    }
    Ly.exports = T1;
  });
  var qy = c((GX, Py) => {
    var I1 = "Expected a function";
    function O1(e) {
      if (typeof e != "function") throw new TypeError(I1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Py.exports = O1;
  });
  var Ka = c((kX, My) => {
    var A1 = It(),
      w1 = (function () {
        try {
          var e = A1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    My.exports = w1;
  });
  var Ya = c((VX, Dy) => {
    var Fy = Ka();
    function x1(e, t, r) {
      t == "__proto__" && Fy
        ? Fy(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Dy.exports = x1;
  });
  var ky = c((UX, Gy) => {
    var S1 = Ya(),
      C1 = Ln(),
      R1 = Object.prototype,
      L1 = R1.hasOwnProperty;
    function N1(e, t, r) {
      var n = e[t];
      (!(L1.call(e, t) && C1(n, r)) || (r === void 0 && !(t in e))) &&
        S1(e, t, r);
    }
    Gy.exports = N1;
  });
  var By = c((BX, Uy) => {
    var P1 = ky(),
      q1 = Vr(),
      M1 = Dn(),
      Vy = st(),
      F1 = rr();
    function D1(e, t, r, n) {
      if (!Vy(e)) return e;
      t = q1(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = F1(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var _ = s[u];
          (f = n ? n(_, u, s) : void 0),
            f === void 0 && (f = Vy(_) ? _ : M1(t[i + 1]) ? [] : {});
        }
        P1(s, u, f), (s = s[u]);
      }
      return e;
    }
    Uy.exports = D1;
  });
  var Hy = c((WX, Wy) => {
    var G1 = Xn(),
      k1 = By(),
      V1 = Vr();
    function U1(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = G1(e, a);
        r(s, a) && k1(o, V1(a, e), s);
      }
      return o;
    }
    Wy.exports = U1;
  });
  var jy = c((HX, Xy) => {
    var B1 = Mn(),
      W1 = So(),
      H1 = ea(),
      X1 = Jo(),
      j1 = Object.getOwnPropertySymbols,
      z1 = j1
        ? function (e) {
            for (var t = []; e; ) B1(t, H1(e)), (e = W1(e));
            return t;
          }
        : X1;
    Xy.exports = z1;
  });
  var Ky = c((XX, zy) => {
    function K1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    zy.exports = K1;
  });
  var $y = c((jX, Yy) => {
    var Y1 = st(),
      $1 = Vn(),
      Q1 = Ky(),
      Z1 = Object.prototype,
      J1 = Z1.hasOwnProperty;
    function e2(e) {
      if (!Y1(e)) return Q1(e);
      var t = $1(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !J1.call(e, n))) || r.push(n);
      return r;
    }
    Yy.exports = e2;
  });
  var Zy = c((zX, Qy) => {
    var t2 = ra(),
      r2 = $y(),
      n2 = Pt();
    function i2(e) {
      return n2(e) ? t2(e, !0) : r2(e);
    }
    Qy.exports = i2;
  });
  var eE = c((KX, Jy) => {
    var o2 = Zo(),
      a2 = jy(),
      s2 = Zy();
    function u2(e) {
      return o2(e, s2, a2);
    }
    Jy.exports = u2;
  });
  var rE = c((YX, tE) => {
    var c2 = va(),
      l2 = Ot(),
      f2 = Hy(),
      d2 = eE();
    function p2(e, t) {
      if (e == null) return {};
      var r = c2(d2(e), function (n) {
        return [n];
      });
      return (
        (t = l2(t)),
        f2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    tE.exports = p2;
  });
  var iE = c(($X, nE) => {
    var v2 = Ot(),
      g2 = qy(),
      h2 = rE();
    function y2(e, t) {
      return h2(e, g2(v2(t)));
    }
    nE.exports = y2;
  });
  var aE = c((QX, oE) => {
    var E2 = Un(),
      m2 = Bn(),
      _2 = qr(),
      b2 = Oe(),
      T2 = Pt(),
      I2 = Fn(),
      O2 = Vn(),
      A2 = kn(),
      w2 = "[object Map]",
      x2 = "[object Set]",
      S2 = Object.prototype,
      C2 = S2.hasOwnProperty;
    function R2(e) {
      if (e == null) return !0;
      if (
        T2(e) &&
        (b2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          I2(e) ||
          A2(e) ||
          _2(e))
      )
        return !e.length;
      var t = m2(e);
      if (t == w2 || t == x2) return !e.size;
      if (O2(e)) return !E2(e).length;
      for (var r in e) if (C2.call(e, r)) return !1;
      return !0;
    }
    oE.exports = R2;
  });
  var uE = c((ZX, sE) => {
    var L2 = Ya(),
      N2 = Fa(),
      P2 = Ot();
    function q2(e, t) {
      var r = {};
      return (
        (t = P2(t, 3)),
        N2(e, function (n, i, o) {
          L2(r, i, t(n, i, o));
        }),
        r
      );
    }
    sE.exports = q2;
  });
  var lE = c((JX, cE) => {
    function M2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    cE.exports = M2;
  });
  var dE = c((ej, fE) => {
    var F2 = zn();
    function D2(e) {
      return typeof e == "function" ? e : F2;
    }
    fE.exports = D2;
  });
  var vE = c((tj, pE) => {
    var G2 = lE(),
      k2 = Da(),
      V2 = dE(),
      U2 = Oe();
    function B2(e, t) {
      var r = U2(e) ? G2 : k2;
      return r(e, V2(t));
    }
    pE.exports = B2;
  });
  var hE = c((rj, gE) => {
    var W2 = Qe(),
      H2 = function () {
        return W2.Date.now();
      };
    gE.exports = H2;
  });
  var mE = c((nj, EE) => {
    var X2 = st(),
      $a = hE(),
      yE = Kn(),
      j2 = "Expected a function",
      z2 = Math.max,
      K2 = Math.min;
    function Y2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        _ = !1,
        h = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError(j2);
      (t = yE(t) || 0),
        X2(r) &&
          ((_ = !!r.leading),
          (h = "maxWait" in r),
          (o = h ? z2(yE(r.maxWait) || 0, t) : o),
          (v = "trailing" in r ? !!r.trailing : v));
      function b(P) {
        var z = n,
          X = i;
        return (n = i = void 0), (f = P), (a = e.apply(X, z)), a;
      }
      function S(P) {
        return (f = P), (s = setTimeout(A, t)), _ ? b(P) : a;
      }
      function O(P) {
        var z = P - u,
          X = P - f,
          K = t - z;
        return h ? K2(K, o - X) : K;
      }
      function R(P) {
        var z = P - u,
          X = P - f;
        return u === void 0 || z >= t || z < 0 || (h && X >= o);
      }
      function A() {
        var P = $a();
        if (R(P)) return N(P);
        s = setTimeout(A, O(P));
      }
      function N(P) {
        return (s = void 0), v && n ? b(P) : ((n = i = void 0), a);
      }
      function L() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function D() {
        return s === void 0 ? a : N($a());
      }
      function G() {
        var P = $a(),
          z = R(P);
        if (((n = arguments), (i = this), (u = P), z)) {
          if (s === void 0) return S(u);
          if (h) return clearTimeout(s), (s = setTimeout(A, t)), b(u);
        }
        return s === void 0 && (s = setTimeout(A, t)), a;
      }
      return (G.cancel = L), (G.flush = D), G;
    }
    EE.exports = Y2;
  });
  var bE = c((ij, _E) => {
    var $2 = mE(),
      Q2 = st(),
      Z2 = "Expected a function";
    function J2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(Z2);
      return (
        Q2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        $2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    _E.exports = J2;
  });
  var IE = {};
  De(IE, {
    actionListPlaybackChanged: () => vr,
    animationFrameChanged: () => fi,
    clearRequested: () => OG,
    elementStateChanged: () => is,
    eventListenerAdded: () => li,
    eventStateChanged: () => ts,
    instanceAdded: () => rs,
    instanceRemoved: () => ns,
    instanceStarted: () => di,
    mediaQueriesDefined: () => as,
    parameterChanged: () => pr,
    playbackRequested: () => TG,
    previewRequested: () => bG,
    rawDataImported: () => Qa,
    sessionInitialized: () => Za,
    sessionStarted: () => Ja,
    sessionStopped: () => es,
    stopRequested: () => IG,
    testFrameRendered: () => AG,
    viewportWidthChanged: () => os,
  });
  var TE,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    gG,
    hG,
    yG,
    EG,
    mG,
    _G,
    Qa,
    Za,
    Ja,
    es,
    bG,
    TG,
    IG,
    OG,
    li,
    AG,
    ts,
    fi,
    pr,
    rs,
    di,
    ns,
    is,
    vr,
    os,
    as,
    pi = he(() => {
      "use strict";
      ke();
      (TE = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: eG,
          IX2_SESSION_INITIALIZED: tG,
          IX2_SESSION_STARTED: rG,
          IX2_SESSION_STOPPED: nG,
          IX2_PREVIEW_REQUESTED: iG,
          IX2_PLAYBACK_REQUESTED: oG,
          IX2_STOP_REQUESTED: aG,
          IX2_CLEAR_REQUESTED: sG,
          IX2_EVENT_LISTENER_ADDED: uG,
          IX2_TEST_FRAME_RENDERED: cG,
          IX2_EVENT_STATE_CHANGED: lG,
          IX2_ANIMATION_FRAME_CHANGED: fG,
          IX2_PARAMETER_CHANGED: dG,
          IX2_INSTANCE_ADDED: pG,
          IX2_INSTANCE_STARTED: vG,
          IX2_INSTANCE_REMOVED: gG,
          IX2_ELEMENT_STATE_CHANGED: hG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: yG,
          IX2_VIEWPORT_WIDTH_CHANGED: EG,
          IX2_MEDIA_QUERIES_DEFINED: mG,
        } = Ie),
        ({ reifyState: _G } = TE.IX2VanillaUtils),
        (Qa = (e) => ({ type: eG, payload: { ..._G(e) } })),
        (Za = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: tG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Ja = () => ({ type: rG })),
        (es = () => ({ type: nG })),
        (bG = ({ rawData: e, defer: t }) => ({
          type: iG,
          payload: { defer: t, rawData: e },
        })),
        (TG = ({
          actionTypeId: e = Ge.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: oG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (IG = (e) => ({ type: aG, payload: { actionListId: e } })),
        (OG = () => ({ type: sG })),
        (li = (e, t) => ({
          type: uG,
          payload: { target: e, listenerParams: t },
        })),
        (AG = (e = 1) => ({ type: cG, payload: { step: e } })),
        (ts = (e, t) => ({ type: lG, payload: { stateKey: e, newState: t } })),
        (fi = (e, t) => ({ type: fG, payload: { now: e, parameters: t } })),
        (pr = (e, t) => ({ type: dG, payload: { key: e, value: t } })),
        (rs = (e) => ({ type: pG, payload: { ...e } })),
        (di = (e, t) => ({ type: vG, payload: { instanceId: e, time: t } })),
        (ns = (e) => ({ type: gG, payload: { instanceId: e } })),
        (is = (e, t, r, n) => ({
          type: hG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (vr = ({ actionListId: e, isPlaying: t }) => ({
          type: yG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (os = ({ width: e, mediaQueries: t }) => ({
          type: EG,
          payload: { width: e, mediaQueries: t },
        })),
        (as = () => ({ type: mG }));
    });
  var qe = {};
  De(qe, {
    elementContains: () => cs,
    getChildElements: () => MG,
    getClosestElement: () => Qr,
    getProperty: () => RG,
    getQuerySelector: () => us,
    getRefType: () => ls,
    getSiblingElements: () => FG,
    getStyle: () => CG,
    getValidDocument: () => NG,
    isSiblingNode: () => qG,
    matchSelector: () => LG,
    queryDocument: () => PG,
    setStyle: () => SG,
  });
  function SG(e, t, r) {
    e.style[t] = r;
  }
  function CG(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function RG(e, t) {
    return e[t];
  }
  function LG(e) {
    return (t) => t[ss](e);
  }
  function us({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(OE) !== -1) {
        let n = e.split(OE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(wE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function NG(e) {
    return e == null || e === document.documentElement.getAttribute(wE)
      ? document
      : null;
  }
  function PG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function cs(e, t) {
    return e.contains(t);
  }
  function qG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function MG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function FG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ls(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? wG
        : xG
      : null;
  }
  var AE,
    ss,
    OE,
    wG,
    xG,
    wE,
    Qr,
    xE = he(() => {
      "use strict";
      AE = le(Gt());
      ke();
      ({ ELEMENT_MATCHES: ss } = AE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: OE,
          HTML_ELEMENT: wG,
          PLAIN_OBJECT: xG,
          WF_PAGE: wE,
        } = Ce);
      Qr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ss] && r[ss](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var fs = c((sj, CE) => {
    var DG = st(),
      SE = Object.create,
      GG = (function () {
        function e() {}
        return function (t) {
          if (!DG(t)) return {};
          if (SE) return SE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    CE.exports = GG;
  });
  var vi = c((uj, RE) => {
    function kG() {}
    RE.exports = kG;
  });
  var hi = c((cj, LE) => {
    var VG = fs(),
      UG = vi();
    function gi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    gi.prototype = VG(UG.prototype);
    gi.prototype.constructor = gi;
    LE.exports = gi;
  });
  var ME = c((lj, qE) => {
    var NE = Xt(),
      BG = qr(),
      WG = Oe(),
      PE = NE ? NE.isConcatSpreadable : void 0;
    function HG(e) {
      return WG(e) || BG(e) || !!(PE && e && e[PE]);
    }
    qE.exports = HG;
  });
  var GE = c((fj, DE) => {
    var XG = Mn(),
      jG = ME();
    function FE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = jG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? FE(s, t - 1, r, n, i)
            : XG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    DE.exports = FE;
  });
  var VE = c((dj, kE) => {
    var zG = GE();
    function KG(e) {
      var t = e == null ? 0 : e.length;
      return t ? zG(e, 1) : [];
    }
    kE.exports = KG;
  });
  var BE = c((pj, UE) => {
    function YG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    UE.exports = YG;
  });
  var XE = c((vj, HE) => {
    var $G = BE(),
      WE = Math.max;
    function QG(e, t, r) {
      return (
        (t = WE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = WE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), $G(e, this, s);
        }
      );
    }
    HE.exports = QG;
  });
  var zE = c((gj, jE) => {
    function ZG(e) {
      return function () {
        return e;
      };
    }
    jE.exports = ZG;
  });
  var $E = c((hj, YE) => {
    var JG = zE(),
      KE = Ka(),
      ek = zn(),
      tk = KE
        ? function (e, t) {
            return KE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: JG(t),
              writable: !0,
            });
          }
        : ek;
    YE.exports = tk;
  });
  var ZE = c((yj, QE) => {
    var rk = 800,
      nk = 16,
      ik = Date.now;
    function ok(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = ik(),
          i = nk - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= rk) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    QE.exports = ok;
  });
  var em = c((Ej, JE) => {
    var ak = $E(),
      sk = ZE(),
      uk = sk(ak);
    JE.exports = uk;
  });
  var rm = c((mj, tm) => {
    var ck = VE(),
      lk = XE(),
      fk = em();
    function dk(e) {
      return fk(lk(e, void 0, ck), e + "");
    }
    tm.exports = dk;
  });
  var om = c((_j, im) => {
    var nm = na(),
      pk = nm && new nm();
    im.exports = pk;
  });
  var sm = c((bj, am) => {
    function vk() {}
    am.exports = vk;
  });
  var ds = c((Tj, cm) => {
    var um = om(),
      gk = sm(),
      hk = um
        ? function (e) {
            return um.get(e);
          }
        : gk;
    cm.exports = hk;
  });
  var fm = c((Ij, lm) => {
    var yk = {};
    lm.exports = yk;
  });
  var ps = c((Oj, pm) => {
    var dm = fm(),
      Ek = Object.prototype,
      mk = Ek.hasOwnProperty;
    function _k(e) {
      for (
        var t = e.name + "", r = dm[t], n = mk.call(dm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    pm.exports = _k;
  });
  var Ei = c((Aj, vm) => {
    var bk = fs(),
      Tk = vi(),
      Ik = 4294967295;
    function yi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = Ik),
        (this.__views__ = []);
    }
    yi.prototype = bk(Tk.prototype);
    yi.prototype.constructor = yi;
    vm.exports = yi;
  });
  var hm = c((wj, gm) => {
    function Ok(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    gm.exports = Ok;
  });
  var Em = c((xj, ym) => {
    var Ak = Ei(),
      wk = hi(),
      xk = hm();
    function Sk(e) {
      if (e instanceof Ak) return e.clone();
      var t = new wk(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = xk(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    ym.exports = Sk;
  });
  var bm = c((Sj, _m) => {
    var Ck = Ei(),
      mm = hi(),
      Rk = vi(),
      Lk = Oe(),
      Nk = pt(),
      Pk = Em(),
      qk = Object.prototype,
      Mk = qk.hasOwnProperty;
    function mi(e) {
      if (Nk(e) && !Lk(e) && !(e instanceof Ck)) {
        if (e instanceof mm) return e;
        if (Mk.call(e, "__wrapped__")) return Pk(e);
      }
      return new mm(e);
    }
    mi.prototype = Rk.prototype;
    mi.prototype.constructor = mi;
    _m.exports = mi;
  });
  var Im = c((Cj, Tm) => {
    var Fk = Ei(),
      Dk = ds(),
      Gk = ps(),
      kk = bm();
    function Vk(e) {
      var t = Gk(e),
        r = kk[t];
      if (typeof r != "function" || !(t in Fk.prototype)) return !1;
      if (e === r) return !0;
      var n = Dk(r);
      return !!n && e === n[0];
    }
    Tm.exports = Vk;
  });
  var xm = c((Rj, wm) => {
    var Om = hi(),
      Uk = rm(),
      Bk = ds(),
      vs = ps(),
      Wk = Oe(),
      Am = Im(),
      Hk = "Expected a function",
      Xk = 8,
      jk = 32,
      zk = 128,
      Kk = 256;
    function Yk(e) {
      return Uk(function (t) {
        var r = t.length,
          n = r,
          i = Om.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(Hk);
          if (i && !a && vs(o) == "wrapper") var a = new Om([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = vs(o),
            u = s == "wrapper" ? Bk(o) : void 0;
          u &&
          Am(u[0]) &&
          u[1] == (zk | Xk | jk | Kk) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[vs(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Am(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            _ = f[0];
          if (a && f.length == 1 && Wk(_)) return a.plant(_).value();
          for (var h = 0, v = r ? t[h].apply(this, f) : _; ++h < r; )
            v = t[h].call(this, v);
          return v;
        };
      });
    }
    wm.exports = Yk;
  });
  var Cm = c((Lj, Sm) => {
    var $k = xm(),
      Qk = $k();
    Sm.exports = Qk;
  });
  var Lm = c((Nj, Rm) => {
    function Zk(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Rm.exports = Zk;
  });
  var Pm = c((Pj, Nm) => {
    var Jk = Lm(),
      gs = Kn();
    function eV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = gs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = gs(t)), (t = t === t ? t : 0)),
        Jk(gs(e), t, r)
      );
    }
    Nm.exports = eV;
  });
  var Bm,
    Wm,
    Hm,
    Xm,
    tV,
    rV,
    nV,
    iV,
    oV,
    aV,
    sV,
    uV,
    cV,
    lV,
    fV,
    dV,
    pV,
    vV,
    gV,
    jm,
    zm,
    hV,
    yV,
    EV,
    Km,
    mV,
    _V,
    Ym,
    bV,
    hs,
    $m,
    qm,
    Mm,
    Qm,
    Jr,
    TV,
    lt,
    Zm,
    IV,
    Ue,
    et,
    en,
    Jm,
    ys,
    Fm,
    Es,
    OV,
    Zr,
    AV,
    wV,
    xV,
    e_,
    Dm,
    SV,
    Gm,
    CV,
    RV,
    LV,
    km,
    _i,
    bi,
    Vm,
    Um,
    t_,
    r_ = he(() => {
      "use strict";
      (Bm = le(Cm())), (Wm = le(jn())), (Hm = le(Pm()));
      ke();
      ms();
      pi();
      (Xm = le(Gt())),
        ({
          MOUSE_CLICK: tV,
          MOUSE_SECOND_CLICK: rV,
          MOUSE_DOWN: nV,
          MOUSE_UP: iV,
          MOUSE_OVER: oV,
          MOUSE_OUT: aV,
          DROPDOWN_CLOSE: sV,
          DROPDOWN_OPEN: uV,
          SLIDER_ACTIVE: cV,
          SLIDER_INACTIVE: lV,
          TAB_ACTIVE: fV,
          TAB_INACTIVE: dV,
          NAVBAR_CLOSE: pV,
          NAVBAR_OPEN: vV,
          MOUSE_MOVE: gV,
          PAGE_SCROLL_DOWN: jm,
          SCROLL_INTO_VIEW: zm,
          SCROLL_OUT_OF_VIEW: hV,
          PAGE_SCROLL_UP: yV,
          SCROLLING_IN_VIEW: EV,
          PAGE_FINISH: Km,
          ECOMMERCE_CART_CLOSE: mV,
          ECOMMERCE_CART_OPEN: _V,
          PAGE_START: Ym,
          PAGE_SCROLL: bV,
        } = Ze),
        (hs = "COMPONENT_ACTIVE"),
        ($m = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: qm } = Ce),
        ({ getNamespacedParameterId: Mm } = Xm.IX2VanillaUtils),
        (Qm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Jr = Qm(({ element: e, nativeEvent: t }) => e === t.target)),
        (TV = Qm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (lt = (0, Bm.default)([Jr, TV])),
        (Zm = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !OV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (IV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Zm(e, n);
        }),
        (Ue = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = Zm(e, u);
          return (
            f &&
              gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + qm + n.split(qm)[1],
                actionListId: (0, Wm.default)(f, "action.config.actionListId"),
              }),
            gr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            tn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (en = { handler: et(lt, Ue) }),
        (Jm = { ...en, types: [hs, $m].join(" ") }),
        (ys = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Fm = "mouseover mouseout"),
        (Es = { types: ys }),
        (OV = { PAGE_START: Ym, PAGE_FINISH: Km }),
        (Zr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Hm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (AV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (wV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (xV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Zr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return AV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (e_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [hs, $m].indexOf(n) !== -1 ? n === hs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Dm = (e) => (t, r) => {
          let n = { elementHovered: wV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (SV = (e) => (t, r) => {
          let n = { ...r, elementVisible: xV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Gm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Zr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              _ = f === "PX",
              h = i - o,
              v = Number((n / h).toFixed(2));
            if (r && r.percentTop === v) return r;
            let b = (_ ? u : (o * (u || 0)) / 100) / h,
              S,
              O,
              R = 0;
            r &&
              ((S = v > r.percentTop),
              (O = r.scrollingDown !== S),
              (R = O ? v : r.anchorTop));
            let A = s === jm ? v >= R + b : v <= R - b,
              N = {
                ...r,
                percentTop: v,
                inBounds: A,
                anchorTop: R,
                scrollingDown: S,
              };
            return (r && A && (O || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (CV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (RV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (LV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (km =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (_i = (e = !0) => ({
          ...Jm,
          handler: et(
            e ? lt : Jr,
            e_((t, r) => (r.isActive ? en.handler(t, r) : r))
          ),
        })),
        (bi = (e = !0) => ({
          ...Jm,
          handler: et(
            e ? lt : Jr,
            e_((t, r) => (r.isActive ? r : en.handler(t, r)))
          ),
        })),
        (Vm = {
          ...Es,
          handler: SV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === zm) === r
              ? (Ue(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Um = 0.05),
        (t_ = {
          [cV]: _i(),
          [lV]: bi(),
          [uV]: _i(),
          [sV]: bi(),
          [vV]: _i(!1),
          [pV]: bi(!1),
          [fV]: _i(),
          [dV]: bi(),
          [_V]: { types: "ecommerce-cart-open", handler: et(lt, Ue) },
          [mV]: { types: "ecommerce-cart-close", handler: et(lt, Ue) },
          [tV]: {
            types: "click",
            handler: et(
              lt,
              km((e, { clickCount: t }) => {
                IV(e) ? t === 1 && Ue(e) : Ue(e);
              })
            ),
          },
          [rV]: {
            types: "click",
            handler: et(
              lt,
              km((e, { clickCount: t }) => {
                t === 2 && Ue(e);
              })
            ),
          },
          [nV]: { ...en, types: "mousedown" },
          [iV]: { ...en, types: "mouseup" },
          [oV]: {
            types: Fm,
            handler: et(
              lt,
              Dm((e, t) => {
                t.elementHovered && Ue(e);
              })
            ),
          },
          [aV]: {
            types: Fm,
            handler: et(
              lt,
              Dm((e, t) => {
                t.elementHovered || Ue(e);
              })
            ),
          },
          [gV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: _ = 0,
                } = r,
                {
                  clientX: h = o.clientX,
                  clientY: v = o.clientY,
                  pageX: b = o.pageX,
                  pageY: S = o.pageY,
                } = n,
                O = s === "X_AXIS",
                R = n.type === "mouseout",
                A = _ / 100,
                N = u,
                L = !1;
              switch (a) {
                case at.VIEWPORT: {
                  A = O
                    ? Math.min(h, window.innerWidth) / window.innerWidth
                    : Math.min(v, window.innerHeight) / window.innerHeight;
                  break;
                }
                case at.PAGE: {
                  let {
                    scrollLeft: D,
                    scrollTop: G,
                    scrollWidth: P,
                    scrollHeight: z,
                  } = Zr();
                  A = O ? Math.min(D + b, P) / P : Math.min(G + S, z) / z;
                  break;
                }
                case at.ELEMENT:
                default: {
                  N = Mm(i, u);
                  let D = n.type.indexOf("mouse") === 0;
                  if (D && lt({ element: t, nativeEvent: n }) !== !0) break;
                  let G = t.getBoundingClientRect(),
                    { left: P, top: z, width: X, height: K } = G;
                  if (!D && !CV({ left: h, top: v }, G)) break;
                  (L = !0), (A = O ? (h - P) / X : (v - z) / K);
                  break;
                }
              }
              return (
                R && (A > 1 - Um || A < Um) && (A = Math.round(A)),
                (a !== at.ELEMENT || L || L !== o.elementHovered) &&
                  ((A = f ? 1 - A : A), e.dispatch(pr(N, A))),
                {
                  elementHovered: L,
                  clientX: h,
                  clientY: v,
                  pageX: b,
                  pageY: S,
                }
              );
            },
          },
          [bV]: {
            types: ys,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Zr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(pr(r, s));
            },
          },
          [EV]: {
            types: ys,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = Zr(),
                {
                  basedOn: _,
                  selectedAxis: h,
                  continuousParameterGroupId: v,
                  startsEntering: b,
                  startsExiting: S,
                  addEndOffset: O,
                  addStartOffset: R,
                  addOffsetValue: A = 0,
                  endOffsetValue: N = 0,
                } = r,
                L = h === "X_AXIS";
              if (_ === at.VIEWPORT) {
                let D = L ? o / s : a / u;
                return (
                  D !== i.scrollPercent && t.dispatch(pr(v, D)),
                  { scrollPercent: D }
                );
              } else {
                let D = Mm(n, v),
                  G = e.getBoundingClientRect(),
                  P = (R ? A : 0) / 100,
                  z = (O ? N : 0) / 100;
                (P = b ? P : 1 - P), (z = S ? z : 1 - z);
                let X = G.top + Math.min(G.height * P, f),
                  J = G.top + G.height * z - X,
                  re = Math.min(f + J, u),
                  w = Math.min(Math.max(0, f - X), re) / re;
                return (
                  w !== i.scrollPercent && t.dispatch(pr(D, w)),
                  { scrollPercent: w }
                );
              }
            },
          },
          [zm]: Vm,
          [hV]: Vm,
          [jm]: {
            ...Es,
            handler: Gm((e, t) => {
              t.scrollingDown && Ue(e);
            }),
          },
          [yV]: {
            ...Es,
            handler: Gm((e, t) => {
              t.scrollingDown || Ue(e);
            }),
          },
          [Km]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(Jr, RV(Ue)),
          },
          [Ym]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(Jr, LV(Ue)),
          },
        });
    });
  var m_ = {};
  De(m_, {
    observeRequests: () => QV,
    startActionGroup: () => tn,
    startEngine: () => xi,
    stopActionGroup: () => gr,
    stopAllActionGroups: () => h_,
    stopEngine: () => Si,
  });
  function QV(e) {
    kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: eU }),
      kt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: tU }),
      kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: rU }),
      kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: nU });
  }
  function ZV(e) {
    kt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Si(e),
          d_({ store: e, elementApi: qe }),
          xi({ store: e, allowEvents: !0 }),
          p_();
      },
    });
  }
  function JV(e, t) {
    let r = kt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function eU({ rawData: e, defer: t }, r) {
    let n = () => {
      xi({ store: r, rawData: e, allowEvents: !0 }), p_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function p_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function tU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: _ } = e;
    if (n && i && _ && s) {
      let h = _.actionLists[n];
      h && (_ = VV({ actionList: h, actionItemId: i, rawData: _ }));
    }
    if (
      (xi({ store: t, rawData: _, allowEvents: a, testManual: u }),
      (n && r === Ge.GENERAL_START_ACTION) || _s(r))
    ) {
      gr({ store: t, actionListId: n }),
        g_({ store: t, actionListId: n, eventId: o });
      let h = tn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && h && t.dispatch(vr({ actionListId: n, isPlaying: !s }));
    }
  }
  function rU({ actionListId: e }, t) {
    e ? gr({ store: t, actionListId: e }) : h_({ store: t }), Si(t);
  }
  function nU(e, t) {
    Si(t), d_({ store: t, elementApi: qe });
  }
  function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Qa(t)),
      i.active ||
        (e.dispatch(
          Za({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (cU(e), iU(), e.getState().ixSession.hasDefinedMediaQueries && ZV(e)),
        e.dispatch(Ja()),
        oU(e, n));
  }
  function iU() {
    let { documentElement: e } = document;
    e.className.indexOf(n_) === -1 && (e.className += ` ${n_}`);
  }
  function oU(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(fi(n, o)), t ? JV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Si(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(aU), HV(), e.dispatch(es());
    }
  }
  function aU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function sU({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: _ } = e.getState(),
      { events: h } = f,
      v = h[n],
      { eventTypeId: b } = v,
      S = {},
      O = {},
      R = [],
      { continuousActionGroups: A } = a,
      { id: N } = a;
    UV(b, i) && (N = BV(t, N));
    let L = _.hasBoundaryNodes && r ? Qr(r, Ii) : null;
    A.forEach((D) => {
      let { keyframe: G, actionItems: P } = D;
      P.forEach((z) => {
        let { actionTypeId: X } = z,
          { target: K } = z.config;
        if (!K) return;
        let J = K.boundaryMode ? L : null,
          re = XV(K) + bs + X;
        if (((O[re] = uU(O[re], G, z)), !S[re])) {
          S[re] = !0;
          let { config: F } = z;
          Oi({
            config: F,
            event: v,
            eventTarget: r,
            elementRoot: J,
            elementApi: qe,
          }).forEach((w) => {
            R.push({ element: w, key: re });
          });
        }
      });
    }),
      R.forEach(({ element: D, key: G }) => {
        let P = O[G],
          z = (0, yt.default)(P, "[0].actionItems[0]", {}),
          { actionTypeId: X } = z,
          K = wi(X) ? Is(X)(D, z) : null,
          J = Ts({ element: D, actionItem: z, elementApi: qe }, K);
        Os({
          store: e,
          element: D,
          eventId: n,
          actionListId: o,
          actionItem: z,
          destination: J,
          continuous: !0,
          parameterId: N,
          actionGroups: P,
          smoothing: s,
          restingValue: u,
          pluginInstance: K,
        });
      });
  }
  function uU(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function cU(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    v_(e),
      (0, hr.default)(r, (i, o) => {
        let a = t_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        gU({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && fU(e);
  }
  function fU(e) {
    let t = () => {
      v_(e);
    };
    lU.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(li(window, [r, t]));
    }),
      t();
  }
  function v_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(os({ width: n, mediaQueries: i }));
    }
  }
  function gU({ logic: e, store: t, events: r }) {
    hU(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = dU(r, vU);
    if (!(0, a_.default)(s)) return;
    (0, hr.default)(s, (h, v) => {
      let b = r[v],
        { action: S, id: O, mediaQueries: R = o.mediaQueryKeys } = b,
        { actionListId: A } = S.config;
      jV(R, o.mediaQueryKeys) || t.dispatch(as()),
        S.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(b.config) ? b.config : [b.config]).forEach((L) => {
            let { continuousParameterGroupId: D } = L,
              G = (0, yt.default)(a, `${A}.continuousParameterGroups`, []),
              P = (0, o_.default)(G, ({ id: K }) => K === D),
              z = (L.smoothing || 0) / 100,
              X = (L.restingState || 0) / 100;
            P &&
              h.forEach((K, J) => {
                let re = O + bs + J;
                sU({
                  store: t,
                  eventStateKey: re,
                  eventTarget: K,
                  eventId: O,
                  eventConfig: L,
                  actionListId: A,
                  parameterGroup: P,
                  smoothing: z,
                  restingValue: X,
                });
              });
          }),
        (S.actionTypeId === Ge.GENERAL_START_ACTION || _s(S.actionTypeId)) &&
          g_({ store: t, actionListId: A, eventId: O });
    });
    let u = (h) => {
        let { ixSession: v } = t.getState();
        pU(s, (b, S, O) => {
          let R = r[S],
            A = v.eventState[O],
            { action: N, mediaQueries: L = o.mediaQueryKeys } = R;
          if (!Ai(L, v.mediaQueryKey)) return;
          let D = (G = {}) => {
            let P = i(
              {
                store: t,
                element: b,
                event: R,
                eventConfig: G,
                nativeEvent: h,
                eventStateKey: O,
              },
              A
            );
            zV(P, A) || t.dispatch(ts(O, P));
          };
          N.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(D)
            : D();
        });
      },
      f = (0, l_.default)(u, $V),
      _ = ({ target: h = document, types: v, throttle: b }) => {
        v.split(" ")
          .filter(Boolean)
          .forEach((S) => {
            let O = b ? f : u;
            h.addEventListener(S, O), t.dispatch(li(h, [S, O]));
          });
      };
    Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
  }
  function hU(e) {
    if (!YV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = us(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function g_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
        _ = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ai(_, i.mediaQueryKey)) return;
      f.forEach((h) => {
        let { config: v, actionTypeId: b } = h,
          S =
            v?.target?.useEventTarget === !0 && v?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : v,
          O = Oi({ config: S, event: s, elementApi: qe }),
          R = wi(b);
        O.forEach((A) => {
          let N = R ? Is(b)(A, h) : null;
          Os({
            destination: Ts({ element: A, actionItem: h, elementApi: qe }, N),
            immediate: !0,
            store: e,
            element: A,
            eventId: r,
            actionItem: h,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function h_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, hr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        As(r, e), i && e.dispatch(vr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function gr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Qr(r, Ii) : null;
    (0, hr.default)(o, (u) => {
      let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
        _ = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && _) {
        if (s && f && !cs(s, u.element)) return;
        As(u, e),
          u.verbose && e.dispatch(vr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function tn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: _ } = u,
      h = _[t] || {},
      { mediaQueries: v = u.mediaQueryKeys } = h,
      b = (0, yt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: S, useFirstGroupAsInitialState: O } = b;
    if (!S || !S.length) return !1;
    o >= S.length && (0, yt.default)(h, "config.loop") && (o = 0),
      o === 0 && O && o++;
    let A =
        (o === 0 || (o === 1 && O)) && _s(h.action?.actionTypeId)
          ? h.config.delay
          : void 0,
      N = (0, yt.default)(S, [o, "actionItems"], []);
    if (!N.length || !Ai(v, f.mediaQueryKey)) return !1;
    let L = f.hasBoundaryNodes && r ? Qr(r, Ii) : null,
      D = DV(N),
      G = !1;
    return (
      N.forEach((P, z) => {
        let { config: X, actionTypeId: K } = P,
          J = wi(K),
          { target: re } = X;
        if (!re) return;
        let F = re.boundaryMode ? L : null;
        Oi({
          config: X,
          event: h,
          eventTarget: r,
          elementRoot: F,
          elementApi: qe,
        }).forEach((q, W) => {
          let B = J ? Is(K)(q, P) : null,
            ee = J ? KV(K)(q, P) : null;
          G = !0;
          let ne = D === z && W === 0,
            M = GV({ element: q, actionItem: P }),
            j = Ts({ element: q, actionItem: P, elementApi: qe }, B);
          Os({
            store: e,
            element: q,
            actionItem: P,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: ne,
            computedStyle: M,
            destination: j,
            immediate: a,
            verbose: s,
            pluginInstance: B,
            pluginDuration: ee,
            instanceDelay: A,
          });
        });
      }),
      G
    );
  }
  function Os(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: _,
      } = n,
      h = !u,
      v = MV(),
      { ixElements: b, ixSession: S, ixData: O } = t.getState(),
      R = qV(b, i),
      { refState: A } = b[R] || {},
      N = ls(i),
      L = S.reducedMotion && Ho[o.actionTypeId],
      D;
    if (L && u)
      switch (O.events[_]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          D = f;
          break;
        default:
          D = 0.5;
          break;
      }
    let G = kV(i, A, r, o, qe, s);
    if (
      (t.dispatch(
        rs({
          instanceId: v,
          elementId: R,
          origin: G,
          refType: N,
          skipMotion: L,
          skipToValue: D,
          ...n,
        })
      ),
      y_(document.body, "ix2-animation-started", v),
      a)
    ) {
      yU(t, v);
      return;
    }
    kt({ store: t, select: ({ ixInstances: P }) => P[v], onChange: E_ }),
      h && t.dispatch(di(v, S.tick));
  }
  function As(e, t) {
    y_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === f_ && WV(o, n, qe), t.dispatch(ns(e.id));
  }
  function y_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function yU(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    E_(n[t], e);
  }
  function E_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: _,
        eventId: h,
        eventTarget: v,
        eventStateKey: b,
        actionListId: S,
        isCarrier: O,
        styleProp: R,
        verbose: A,
        pluginInstance: N,
      } = e,
      { ixData: L, ixSession: D } = t.getState(),
      { events: G } = L,
      P = G[h] || {},
      { mediaQueries: z = L.mediaQueryKeys } = P;
    if (Ai(z, D.mediaQueryKey) && (n || r || i)) {
      if (f || (u === PV && i)) {
        t.dispatch(is(o, s, f, a));
        let { ixElements: X } = t.getState(),
          { ref: K, refType: J, refState: re } = X[o] || {},
          F = re && re[s];
        (J === f_ || wi(s)) && FV(K, re, F, h, a, R, qe, u, N);
      }
      if (i) {
        if (O) {
          let X = tn({
            store: t,
            eventId: h,
            eventTarget: v,
            eventStateKey: b,
            actionListId: S,
            groupIndex: _ + 1,
            verbose: A,
          });
          A && !X && t.dispatch(vr({ actionListId: S, isPlaying: !1 }));
        }
        As(e, t);
      }
    }
  }
  var o_,
    yt,
    a_,
    s_,
    u_,
    c_,
    hr,
    l_,
    Ti,
    NV,
    _s,
    bs,
    Ii,
    f_,
    PV,
    n_,
    Oi,
    qV,
    Ts,
    kt,
    MV,
    FV,
    d_,
    DV,
    GV,
    kV,
    VV,
    UV,
    BV,
    Ai,
    WV,
    HV,
    XV,
    jV,
    zV,
    wi,
    Is,
    KV,
    i_,
    YV,
    $V,
    lU,
    dU,
    pU,
    vU,
    ms = he(() => {
      "use strict";
      (o_ = le(ma())),
        (yt = le(jn())),
        (a_ = le(Ny())),
        (s_ = le(iE())),
        (u_ = le(aE())),
        (c_ = le(uE())),
        (hr = le(vE())),
        (l_ = le(bE()));
      ke();
      Ti = le(Gt());
      pi();
      xE();
      r_();
      (NV = Object.keys(On)),
        (_s = (e) => NV.includes(e)),
        ({
          COLON_DELIMITER: bs,
          BOUNDARY_SELECTOR: Ii,
          HTML_ELEMENT: f_,
          RENDER_GENERAL: PV,
          W_MOD_IX: n_,
        } = Ce),
        ({
          getAffectedElements: Oi,
          getElementId: qV,
          getDestinationValues: Ts,
          observeStore: kt,
          getInstanceId: MV,
          renderHTMLElement: FV,
          clearAllStyles: d_,
          getMaxDurationItemIndex: DV,
          getComputedStyle: GV,
          getInstanceOrigin: kV,
          reduceListToGroup: VV,
          shouldNamespaceEventParameter: UV,
          getNamespacedParameterId: BV,
          shouldAllowMediaQuery: Ai,
          cleanupHTMLElement: WV,
          clearObjectCache: HV,
          stringifyTarget: XV,
          mediaQueriesEqual: jV,
          shallowEqual: zV,
        } = Ti.IX2VanillaUtils),
        ({
          isPluginType: wi,
          createPluginInstance: Is,
          getPluginDuration: KV,
        } = Ti.IX2VanillaPlugins),
        (i_ = navigator.userAgent),
        (YV = i_.match(/iPad/i) || i_.match(/iPhone/)),
        ($V = 12);
      lU = ["resize", "orientationchange"];
      (dU = (e, t) => (0, s_.default)((0, c_.default)(e, t), u_.default)),
        (pU = (e, t) => {
          (0, hr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + bs + o;
              t(i, n, a);
            });
          });
        }),
        (vU = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Oi({ config: t, elementApi: qe });
        });
    });
  var b_ = c((Et) => {
    "use strict";
    var EU = fn().default,
      mU = ru().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = __;
    Et.init = OU;
    Et.setEnv = IU;
    Et.store = void 0;
    Ul();
    var _U = Uo(),
      bU = mU((py(), rt(dy))),
      ws = (ms(), rt(m_)),
      TU = EU((pi(), rt(IE)));
    Et.actions = TU;
    var xs = (Et.store = (0, _U.createStore)(bU.default));
    function IU(e) {
      e() && (0, ws.observeRequests)(xs);
    }
    function OU(e) {
      __(), (0, ws.startEngine)({ store: xs, rawData: e, allowEvents: !0 });
    }
    function __() {
      (0, ws.stopEngine)(xs);
    }
  });
  var A_ = c((Bj, O_) => {
    "use strict";
    var T_ = Ke(),
      I_ = b_();
    I_.setEnv(T_.env);
    T_.define(
      "ix2",
      (O_.exports = function () {
        return I_;
      })
    );
  });
  var x_ = c((Wj, w_) => {
    "use strict";
    var yr = Ke();
    yr.define(
      "links",
      (w_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          _ = /\/$/,
          h,
          v;
        r.ready = r.design = r.preview = b;
        function b() {
          (i = o && yr.env("design")),
            (v = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(O),
            (h = []);
          for (var A = document.links, N = 0; N < A.length; ++N) S(A[N]);
          h.length && (yr.scroll.on(O), O());
        }
        function S(A) {
          if (!A.getAttribute("hreflang")) {
            var N =
              (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
            if (((s.href = N), !(N.indexOf(":") >= 0))) {
              var L = e(A);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var D = e(s.hash);
                D.length && h.push({ link: L, sec: D, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var G =
                  s.href === a.href || N === v || (f.test(N) && _.test(v));
                R(L, u, G);
              }
            }
          }
        }
        function O() {
          var A = n.scrollTop(),
            N = n.height();
          t.each(h, function (L) {
            if (!L.link.attr("hreflang")) {
              var D = L.link,
                G = L.sec,
                P = G.offset().top,
                z = G.outerHeight(),
                X = N * 0.5,
                K = G.is(":visible") && P + z - X >= A && P + X <= A + N;
              L.active !== K && ((L.active = K), R(D, u, K));
            }
          });
        }
        function R(A, N, L) {
          var D = A.hasClass(N);
          (L && D) || (!L && !D) || (L ? A.addClass(N) : A.removeClass(N));
        }
        return r;
      })
    );
  });
  var C_ = c((Hj, S_) => {
    "use strict";
    var Ci = Ke();
    Ci.define(
      "scroll",
      (S_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = S() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (F) {
              window.setTimeout(F, 15);
            },
          u = Ci.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          _ = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          b = document.createElement("style");
        b.appendChild(document.createTextNode(v));
        function S() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function R(F) {
          return O.test(F.hash) && F.host + F.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            A.matches
          );
        }
        function L(F, w) {
          var q;
          switch (w) {
            case "add":
              (q = F.attr("tabindex")),
                q
                  ? F.attr("data-wf-tabindex-swap", q)
                  : F.attr("tabindex", "-1");
              break;
            case "remove":
              (q = F.attr("data-wf-tabindex-swap")),
                q
                  ? (F.attr("tabindex", q),
                    F.removeAttr("data-wf-tabindex-swap"))
                  : F.removeAttr("tabindex");
              break;
          }
          F.toggleClass("wf-force-outline-none", w === "add");
        }
        function D(F) {
          var w = F.currentTarget;
          if (
            !(
              Ci.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(w.className))
            )
          ) {
            var q = R(w) ? w.hash : "";
            if (q !== "") {
              var W = e(q);
              W.length &&
                (F && (F.preventDefault(), F.stopPropagation()),
                G(q, F),
                window.setTimeout(
                  function () {
                    P(W, function () {
                      L(W, "add"),
                        W.get(0).focus({ preventScroll: !0 }),
                        L(W, "remove");
                    });
                  },
                  F ? 0 : 300
                ));
            }
          }
        }
        function G(F) {
          if (
            r.hash !== F &&
            n &&
            n.pushState &&
            !(Ci.env.chrome && r.protocol === "file:")
          ) {
            var w = n.state && n.state.hash;
            w !== F && n.pushState({ hash: F }, "", F);
          }
        }
        function P(F, w) {
          var q = i.scrollTop(),
            W = z(F);
          if (q !== W) {
            var B = X(F, q, W),
              ee = Date.now(),
              ne = function () {
                var M = Date.now() - ee;
                window.scroll(0, K(q, W, M, B)),
                  M <= B ? s(ne) : typeof w == "function" && w();
              };
            s(ne);
          }
        }
        function z(F) {
          var w = e(f),
            q = w.css("position") === "fixed" ? w.outerHeight() : 0,
            W = F.offset().top - q;
          if (F.data("scroll") === "mid") {
            var B = i.height() - q,
              ee = F.outerHeight();
            ee < B && (W -= Math.round((B - ee) / 2));
          }
          return W;
        }
        function X(F, w, q) {
          if (N()) return 0;
          var W = 1;
          return (
            a.add(F).each(function (B, ee) {
              var ne = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (W = ne);
            }),
            (472.143 * Math.log(Math.abs(w - q) + 125) - 2e3) * W
          );
        }
        function K(F, w, q, W) {
          return q > W ? w : F + (w - F) * J(q / W);
        }
        function J(F) {
          return F < 0.5
            ? 4 * F * F * F
            : (F - 1) * (2 * F - 2) * (2 * F - 2) + 1;
        }
        function re() {
          var { WF_CLICK_EMPTY: F, WF_CLICK_SCROLL: w } = t;
          o.on(w, h, D),
            o.on(F, _, function (q) {
              q.preventDefault();
            }),
            document.head.insertBefore(b, document.head.firstChild);
        }
        return { ready: re };
      })
    );
  });
  var L_ = c((Xj, R_) => {
    "use strict";
    var AU = Ke();
    AU.define(
      "touch",
      (R_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            _;
          o.addEventListener("touchstart", h, !1),
            o.addEventListener("touchmove", v, !1),
            o.addEventListener("touchend", b, !1),
            o.addEventListener("touchcancel", S, !1),
            o.addEventListener("mousedown", h, !1),
            o.addEventListener("mousemove", v, !1),
            o.addEventListener("mouseup", b, !1),
            o.addEventListener("mouseout", S, !1);
          function h(R) {
            var A = R.touches;
            (A && A.length > 1) ||
              ((a = !0),
              A ? ((s = !0), (f = A[0].clientX)) : (f = R.clientX),
              (_ = f));
          }
          function v(R) {
            if (a) {
              if (s && R.type === "mousemove") {
                R.preventDefault(), R.stopPropagation();
                return;
              }
              var A = R.touches,
                N = A ? A[0].clientX : R.clientX,
                L = N - _;
              (_ = N),
                Math.abs(L) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", R, { direction: L > 0 ? "right" : "left" }), S());
            }
          }
          function b(R) {
            if (a && ((a = !1), s && R.type === "mouseup")) {
              R.preventDefault(), R.stopPropagation(), (s = !1);
              return;
            }
          }
          function S() {
            a = !1;
          }
          function O() {
            o.removeEventListener("touchstart", h, !1),
              o.removeEventListener("touchmove", v, !1),
              o.removeEventListener("touchend", b, !1),
              o.removeEventListener("touchcancel", S, !1),
              o.removeEventListener("mousedown", h, !1),
              o.removeEventListener("mousemove", v, !1),
              o.removeEventListener("mouseup", b, !1),
              o.removeEventListener("mouseout", S, !1),
              (o = null);
          }
          this.destroy = O;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var P_ = c((jj, N_) => {
    "use strict";
    var Ss = Ke();
    Ss.define(
      "forms",
      (N_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          _ = /^\S+@\S+$/,
          h = window.alert,
          v = Ss.env(),
          b,
          S,
          O,
          R = /list-manage[1-9]?.com/i,
          A = t.debounce(function () {
            h(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !v && !b && D();
            };
        function N() {
          (u = e("html").attr("data-wf-site")),
            (S = "https://webflow.com/api/v1/form/" + u),
            a &&
              S.indexOf("https://webflow.com") >= 0 &&
              (S = S.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${S}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(L);
        }
        function L(M, j) {
          var d = e(j),
            y = e.data(j, s);
          y || (y = e.data(j, s, { form: d })), G(y);
          var m = d.closest("div.w-form");
          (y.done = m.find("> .w-form-done")),
            (y.fail = m.find("> .w-form-fail")),
            (y.fileUploads = m.find(".w-file-upload")),
            y.fileUploads.each(function ($) {
              B($, y);
            });
          var g =
            y.form.attr("aria-label") || y.form.attr("data-name") || "Form";
          y.done.attr("aria-label") || y.form.attr("aria-label", g),
            y.done.attr("tabindex", "-1"),
            y.done.attr("role", "region"),
            y.done.attr("aria-label") ||
              y.done.attr("aria-label", g + " success"),
            y.fail.attr("tabindex", "-1"),
            y.fail.attr("role", "region"),
            y.fail.attr("aria-label") ||
              y.fail.attr("aria-label", g + " failure");
          var H = (y.action = d.attr("action"));
          if (
            ((y.handler = null),
            (y.redirect = d.attr("data-redirect")),
            R.test(H))
          ) {
            y.handler = w;
            return;
          }
          if (!H) {
            if (u) {
              y.handler = F;
              return;
            }
            A();
          }
        }
        function D() {
          (b = !0),
            n.on("submit", s + " form", function ($) {
              var Q = e.data(this, s);
              Q.handler && ((Q.evt = $), Q.handler(Q));
            });
          let M = ".w-checkbox-input",
            j = ".w-radio-input",
            d = "w--redirected-checked",
            y = "w--redirected-focus",
            m = "w--redirected-focus-visible",
            g = ":focus-visible, [data-wf-focus-visible]",
            H = [
              ["checkbox", M],
              ["radio", j],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + M + ")",
            ($) => {
              e($.target).siblings(M).toggleClass(d);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', ($) => {
              e(`input[name="${$.target.name}"]:not(${M})`).map((ue, _e) =>
                e(_e).siblings(j).removeClass(d)
              );
              let Q = e($.target);
              Q.hasClass("w-radio-input") || Q.siblings(j).addClass(d);
            }),
            H.forEach(([$, Q]) => {
              n.on(
                "focus",
                s + ` form input[type="${$}"]:not(` + Q + ")",
                (ue) => {
                  e(ue.target).siblings(Q).addClass(y),
                    e(ue.target).filter(g).siblings(Q).addClass(m);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${$}"]:not(` + Q + ")",
                  (ue) => {
                    e(ue.target).siblings(Q).removeClass(`${y} ${m}`);
                  }
                );
            });
        }
        function G(M) {
          var j = (M.btn = M.form.find(':input[type="submit"]'));
          (M.wait = M.btn.attr("data-wait") || null),
            (M.success = !1),
            j.prop("disabled", !1),
            M.label && j.val(M.label);
        }
        function P(M) {
          var j = M.btn,
            d = M.wait;
          j.prop("disabled", !0), d && ((M.label = j.val()), j.val(d));
        }
        function z(M, j) {
          var d = null;
          return (
            (j = j || {}),
            M.find(':input:not([type="submit"]):not([type="file"])').each(
              function (y, m) {
                var g = e(m),
                  H = g.attr("type"),
                  $ =
                    g.attr("data-name") || g.attr("name") || "Field " + (y + 1);
                $ = encodeURIComponent($);
                var Q = g.val();
                if (H === "checkbox") Q = g.is(":checked");
                else if (H === "radio") {
                  if (j[$] === null || typeof j[$] == "string") return;
                  Q =
                    M.find(
                      'input[name="' + g.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Q == "string" && (Q = e.trim(Q)),
                  (j[$] = Q),
                  (d = d || re(g, H, $, Q));
              }
            ),
            d
          );
        }
        function X(M) {
          var j = {};
          return (
            M.find(':input[type="file"]').each(function (d, y) {
              var m = e(y),
                g = m.attr("data-name") || m.attr("name") || "File " + (d + 1),
                H = m.attr("data-value");
              typeof H == "string" && (H = e.trim(H)), (j[g] = H);
            }),
            j
          );
        }
        let K = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (j, d) {
            let y = d.split("="),
              m = y[0];
            if (m in K) {
              let g = K[m],
                H = y.slice(1).join("=");
              j[g] = H;
            }
            return j;
          }, {});
        }
        function re(M, j, d, y) {
          var m = null;
          return (
            j === "password"
              ? (m = "Passwords cannot be submitted.")
              : M.attr("required")
              ? y
                ? f.test(M.attr("type")) &&
                  (_.test(y) ||
                    (m = "Please enter a valid email address for: " + d))
                : (m = "Please fill out the required field: " + d)
              : d === "g-recaptcha-response" &&
                !y &&
                (m = "Please confirm you\u2019re not a robot."),
            m
          );
        }
        function F(M) {
          W(M), q(M);
        }
        function w(M) {
          G(M);
          var j = M.form,
            d = {};
          if (/^https/.test(o.href) && !/^https/.test(M.action)) {
            j.attr("method", "post");
            return;
          }
          W(M);
          var y = z(j, d);
          if (y) return h(y);
          P(M);
          var m;
          t.each(d, function (Q, ue) {
            f.test(ue) && (d.EMAIL = Q),
              /^((full[ _-]?)?name)$/i.test(ue) && (m = Q),
              /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = Q),
              /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = Q);
          }),
            m &&
              !d.FNAME &&
              ((m = m.split(" ")),
              (d.FNAME = m[0]),
              (d.LNAME = d.LNAME || m[1]));
          var g = M.action.replace("/post?", "/post-json?") + "&c=?",
            H = g.indexOf("u=") + 2;
          H = g.substring(H, g.indexOf("&", H));
          var $ = g.indexOf("id=") + 3;
          ($ = g.substring($, g.indexOf("&", $))),
            (d["b_" + H + "_" + $] = ""),
            e
              .ajax({ url: g, data: d, dataType: "jsonp" })
              .done(function (Q) {
                (M.success = Q.result === "success" || /already/.test(Q.msg)),
                  M.success || console.info("MailChimp error: " + Q.msg),
                  q(M);
              })
              .fail(function () {
                q(M);
              });
        }
        function q(M) {
          var j = M.form,
            d = M.redirect,
            y = M.success;
          if (y && d) {
            Ss.location(d);
            return;
          }
          M.done.toggle(y),
            M.fail.toggle(!y),
            y ? M.done.focus() : M.fail.focus(),
            j.toggle(!y),
            G(M);
        }
        function W(M) {
          M.evt && M.evt.preventDefault(), (M.evt = null);
        }
        function B(M, j) {
          if (!j.fileUploads || !j.fileUploads[M]) return;
          var d,
            y = e(j.fileUploads[M]),
            m = y.find("> .w-file-upload-default"),
            g = y.find("> .w-file-upload-uploading"),
            H = y.find("> .w-file-upload-success"),
            $ = y.find("> .w-file-upload-error"),
            Q = m.find(".w-file-upload-input"),
            ue = m.find(".w-file-upload-label"),
            _e = ue.children(),
            oe = $.find(".w-file-upload-error-msg"),
            p = H.find(".w-file-upload-file"),
            k = H.find(".w-file-remove-link"),
            Y = p.find(".w-file-upload-file-name"),
            V = oe.attr("data-w-size-error"),
            fe = oe.attr("data-w-type-error"),
            Me = oe.attr("data-w-generic-error");
          if (
            (v ||
              ue.on("click keydown", function (T) {
                (T.type === "keydown" && T.which !== 13 && T.which !== 32) ||
                  (T.preventDefault(), Q.click());
              }),
            ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            k.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            v)
          )
            Q.on("click", function (T) {
              T.preventDefault();
            }),
              ue.on("click", function (T) {
                T.preventDefault();
              }),
              _e.on("click", function (T) {
                T.preventDefault();
              });
          else {
            k.on("click keydown", function (T) {
              if (T.type === "keydown") {
                if (T.which !== 13 && T.which !== 32) return;
                T.preventDefault();
              }
              Q.removeAttr("data-value"),
                Q.val(""),
                Y.html(""),
                m.toggle(!0),
                H.toggle(!1),
                ue.focus();
            }),
              Q.on("change", function (T) {
                (d = T.target && T.target.files && T.target.files[0]),
                  d &&
                    (m.toggle(!1),
                    $.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    Y.text(d.name),
                    x() || P(j),
                    (j.fileUploads[M].uploading = !0),
                    ee(d, E));
              });
            var We = ue.outerHeight();
            Q.height(We), Q.width(1);
          }
          function l(T) {
            var C = T.responseJSON && T.responseJSON.msg,
              Z = Me;
            typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0
              ? (Z = fe)
              : typeof C == "string" &&
                C.indexOf("MaxFileSizeError") === 0 &&
                (Z = V),
              oe.text(Z),
              Q.removeAttr("data-value"),
              Q.val(""),
              g.toggle(!1),
              m.toggle(!0),
              $.toggle(!0),
              $.focus(),
              (j.fileUploads[M].uploading = !1),
              x() || G(j);
          }
          function E(T, C) {
            if (T) return l(T);
            var Z = C.fileName,
              ie = C.postData,
              ve = C.fileId,
              U = C.s3Url;
            Q.attr("data-value", ve), ne(U, ie, d, Z, I);
          }
          function I(T) {
            if (T) return l(T);
            g.toggle(!1),
              H.css("display", "inline-block"),
              H.focus(),
              (j.fileUploads[M].uploading = !1),
              x() || G(j);
          }
          function x() {
            var T = (j.fileUploads && j.fileUploads.toArray()) || [];
            return T.some(function (C) {
              return C.uploading;
            });
          }
        }
        function ee(M, j) {
          var d = new URLSearchParams({ name: M.name, size: M.size });
          e.ajax({ type: "GET", url: `${O}?${d}`, crossDomain: !0 })
            .done(function (y) {
              j(null, y);
            })
            .fail(function (y) {
              j(y);
            });
        }
        function ne(M, j, d, y, m) {
          var g = new FormData();
          for (var H in j) g.append(H, j[H]);
          g.append("file", d, y),
            e
              .ajax({
                type: "POST",
                url: M,
                data: g,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                m(null);
              })
              .fail(function ($) {
                m($);
              });
        }
        return r;
      })
    );
  });
  var M_ = c((zj, q_) => {
    "use strict";
    var xt = Ke(),
      wU = ln(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    xt.define(
      "navbar",
      (q_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          _,
          h = xt.env(),
          v = '<div class="w-nav-overlay" data-wf-ignore />',
          b = ".w-nav",
          S = "w--open",
          O = "w--nav-dropdown-open",
          R = "w--nav-dropdown-toggle-open",
          A = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          L = wU.triggers,
          D = e();
        (r.ready = r.design = r.preview = G),
          (r.destroy = function () {
            (D = e()), P(), u && u.length && u.each(J);
          });
        function G() {
          (f = h && xt.env("design")),
            (_ = xt.env("editor")),
            (s = e(document.body)),
            (u = o.find(b)),
            u.length && (u.each(K), P(), z());
        }
        function P() {
          xt.resize.off(X);
        }
        function z() {
          xt.resize.on(X);
        }
        function X() {
          u.each(m);
        }
        function K(p, k) {
          var Y = e(k),
            V = e.data(k, b);
          V ||
            (V = e.data(k, b, {
              open: !1,
              el: Y,
              config: {},
              selectedIdx: -1,
            })),
            (V.menu = Y.find(".w-nav-menu")),
            (V.links = V.menu.find(".w-nav-link")),
            (V.dropdowns = V.menu.find(".w-dropdown")),
            (V.dropdownToggle = V.menu.find(".w-dropdown-toggle")),
            (V.dropdownList = V.menu.find(".w-dropdown-list")),
            (V.button = Y.find(".w-nav-button")),
            (V.container = Y.find(".w-container")),
            (V.overlayContainerId = "w-nav-overlay-" + p),
            (V.outside = d(V));
          var fe = Y.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            V.button.attr("style", "-webkit-user-select: text;"),
            V.button.attr("aria-label") == null &&
              V.button.attr("aria-label", "menu"),
            V.button.attr("role", "button"),
            V.button.attr("tabindex", "0"),
            V.button.attr("aria-controls", V.overlayContainerId),
            V.button.attr("aria-haspopup", "menu"),
            V.button.attr("aria-expanded", "false"),
            V.el.off(b),
            V.button.off(b),
            V.menu.off(b),
            w(V),
            f
              ? (re(V), V.el.on("setting" + b, q(V)))
              : (F(V),
                V.button.on("click" + b, M(V)),
                V.menu.on("click" + b, "a", j(V)),
                V.button.on("keydown" + b, W(V)),
                V.el.on("keydown" + b, B(V))),
            m(p, k);
        }
        function J(p, k) {
          var Y = e.data(k, b);
          Y && (re(Y), e.removeData(k, b));
        }
        function re(p) {
          p.overlay && (oe(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function F(p) {
          p.overlay ||
            ((p.overlay = e(v).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            oe(p, !0));
        }
        function w(p) {
          var k = {},
            Y = p.config || {},
            V = (k.animation = p.el.attr("data-animation") || "default");
          (k.animOver = /^over/.test(V)),
            (k.animDirect = /left$/.test(V) ? -1 : 1),
            Y.animation !== V && p.open && t.defer(ne, p),
            (k.easing = p.el.attr("data-easing") || "ease"),
            (k.easing2 = p.el.attr("data-easing2") || "ease");
          var fe = p.el.attr("data-duration");
          (k.duration = fe != null ? Number(fe) : 400),
            (k.docHeight = p.el.attr("data-doc-height")),
            (p.config = k);
        }
        function q(p) {
          return function (k, Y) {
            Y = Y || {};
            var V = i.width();
            w(p),
              Y.open === !0 && ue(p, !0),
              Y.open === !1 && oe(p, !0),
              p.open &&
                t.defer(function () {
                  V !== i.width() && ne(p);
                });
          };
        }
        function W(p) {
          return function (k) {
            switch (k.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return M(p)(), k.preventDefault(), k.stopPropagation();
              case Se.ESCAPE:
                return oe(p), k.preventDefault(), k.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return p.open
                  ? (k.keyCode === Se.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    ee(p),
                    k.preventDefault(),
                    k.stopPropagation())
                  : (k.preventDefault(), k.stopPropagation());
            }
          };
        }
        function B(p) {
          return function (k) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    k.keyCode === Se.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    ee(p),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(p),
                    p.button.focus(),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    ee(p),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    ee(p),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
              }
          };
        }
        function ee(p) {
          if (p.links[p.selectedIdx]) {
            var k = p.links[p.selectedIdx];
            k.focus(), j(k);
          }
        }
        function ne(p) {
          p.open && (oe(p, !0), ue(p, !0));
        }
        function M(p) {
          return a(function () {
            p.open ? oe(p) : ue(p);
          });
        }
        function j(p) {
          return function (k) {
            var Y = e(this),
              V = Y.attr("href");
            if (!xt.validClick(k.currentTarget)) {
              k.preventDefault();
              return;
            }
            V && V.indexOf("#") === 0 && p.open && oe(p);
          };
        }
        function d(p) {
          return (
            p.outside && o.off("click" + b, p.outside),
            function (k) {
              var Y = e(k.target);
              (_ && Y.closest(".w-editor-bem-EditorOverlay").length) || y(p, Y);
            }
          );
        }
        var y = a(function (p, k) {
          if (p.open) {
            var Y = k.closest(".w-nav-menu");
            p.menu.is(Y) || oe(p);
          }
        });
        function m(p, k) {
          var Y = e.data(k, b),
            V = (Y.collapsed = Y.button.css("display") !== "none");
          if ((Y.open && !V && !f && oe(Y, !0), Y.container.length)) {
            var fe = H(Y);
            Y.links.each(fe), Y.dropdowns.each(fe);
          }
          Y.open && _e(Y);
        }
        var g = "max-width";
        function H(p) {
          var k = p.container.css(g);
          return (
            k === "none" && (k = ""),
            function (Y, V) {
              (V = e(V)), V.css(g, ""), V.css(g) === "none" && V.css(g, k);
            }
          );
        }
        function $(p, k) {
          k.setAttribute("data-nav-menu-open", "");
        }
        function Q(p, k) {
          k.removeAttribute("data-nav-menu-open");
        }
        function ue(p, k) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each($),
            p.links.addClass(N),
            p.dropdowns.addClass(O),
            p.dropdownToggle.addClass(R),
            p.dropdownList.addClass(A),
            p.button.addClass(S);
          var Y = p.config,
            V = Y.animation;
          (V === "none" || !n.support.transform || Y.duration <= 0) && (k = !0);
          var fe = _e(p),
            Me = p.menu.outerHeight(!0),
            We = p.menu.outerWidth(!0),
            l = p.el.height(),
            E = p.el[0];
          if (
            (m(0, E),
            L.intro(0, E),
            xt.redraw.up(),
            f || o.on("click" + b, p.outside),
            k)
          ) {
            T();
            return;
          }
          var I = "transform " + Y.duration + "ms " + Y.easing;
          if (
            (p.overlay &&
              ((D = p.menu.prev()), p.overlay.show().append(p.menu)),
            Y.animOver)
          ) {
            n(p.menu)
              .add(I)
              .set({ x: Y.animDirect * We, height: fe })
              .start({ x: 0 })
              .then(T),
              p.overlay && p.overlay.width(We);
            return;
          }
          var x = l + Me;
          n(p.menu).add(I).set({ y: -x }).start({ y: 0 }).then(T);
          function T() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function _e(p) {
          var k = p.config,
            Y = k.docHeight ? o.height() : s.height();
          return (
            k.animOver
              ? p.menu.height(Y)
              : p.el.css("position") !== "fixed" && (Y -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(Y),
            Y
          );
        }
        function oe(p, k) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(S);
          var Y = p.config;
          if (
            ((Y.animation === "none" ||
              !n.support.transform ||
              Y.duration <= 0) &&
              (k = !0),
            L.outro(0, p.el[0]),
            o.off("click" + b, p.outside),
            k)
          ) {
            n(p.menu).stop(), E();
            return;
          }
          var V = "transform " + Y.duration + "ms " + Y.easing2,
            fe = p.menu.outerHeight(!0),
            Me = p.menu.outerWidth(!0),
            We = p.el.height();
          if (Y.animOver) {
            n(p.menu)
              .add(V)
              .start({ x: Me * Y.animDirect })
              .then(E);
            return;
          }
          var l = We + fe;
          n(p.menu).add(V).start({ y: -l }).then(E);
          function E() {
            p.menu.height(""),
              n(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(Q),
              p.links.removeClass(N),
              p.dropdowns.removeClass(O),
              p.dropdownToggle.removeClass(R),
              p.dropdownList.removeClass(A),
              p.overlay &&
                p.overlay.children().length &&
                (D.length ? p.menu.insertAfter(D) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var G_ = c((Kj, D_) => {
    "use strict";
    var St = Ke(),
      xU = ln(),
      ft = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      F_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    St.define(
      "slider",
      (D_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = St.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          _ =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          h = "w-slider-force-show",
          v = xU.triggers,
          b,
          S = !1;
        (r.ready = function () {
          (a = St.env("design")), O();
        }),
          (r.design = function () {
            (a = !0), setTimeout(O, 1e3);
          }),
          (r.preview = function () {
            (a = !1), O();
          }),
          (r.redraw = function () {
            (S = !0), O(), (S = !1);
          }),
          (r.destroy = R);
        function O() {
          (o = i.find(u)), o.length && (o.each(L), !b && (R(), A()));
        }
        function R() {
          St.resize.off(N), St.redraw.off(r.redraw);
        }
        function A() {
          St.resize.on(N), St.redraw.on(r.redraw);
        }
        function N() {
          o.filter(":visible").each(B);
        }
        function L(d, y) {
          var m = e(y),
            g = e.data(y, u);
          g ||
            (g = e.data(y, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: m,
              config: {},
            })),
            (g.mask = m.children(".w-slider-mask")),
            (g.left = m.children(".w-slider-arrow-left")),
            (g.right = m.children(".w-slider-arrow-right")),
            (g.nav = m.children(".w-slider-nav")),
            (g.slides = g.mask.children(".w-slide")),
            g.slides.each(v.reset),
            S && (g.maskWidth = 0),
            m.attr("role") === void 0 && m.attr("role", "region"),
            m.attr("aria-label") === void 0 && m.attr("aria-label", "carousel");
          var H = g.mask.attr("id");
          if (
            (H || ((H = "w-slider-mask-" + d), g.mask.attr("id", H)),
            !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(_).appendTo(g.mask)),
            g.left.attr("role", "button"),
            g.left.attr("tabindex", "0"),
            g.left.attr("aria-controls", H),
            g.left.attr("aria-label") === void 0 &&
              g.left.attr("aria-label", "previous slide"),
            g.right.attr("role", "button"),
            g.right.attr("tabindex", "0"),
            g.right.attr("aria-controls", H),
            g.right.attr("aria-label") === void 0 &&
              g.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            g.left.hide(), g.right.hide(), g.nav.hide(), (b = !0);
            return;
          }
          g.el.off(u),
            g.left.off(u),
            g.right.off(u),
            g.nav.off(u),
            D(g),
            a
              ? (g.el.on("setting" + u, w(g)), F(g), (g.hasTimer = !1))
              : (g.el.on("swipe" + u, w(g)),
                g.left.on("click" + u, X(g)),
                g.right.on("click" + u, K(g)),
                g.left.on("keydown" + u, z(g, X)),
                g.right.on("keydown" + u, z(g, K)),
                g.nav.on("keydown" + u, "> div", w(g)),
                g.config.autoplay &&
                  !g.hasTimer &&
                  ((g.hasTimer = !0), (g.timerCount = 1), re(g)),
                g.el.on("mouseenter" + u, P(g, !0, "mouse")),
                g.el.on("focusin" + u, P(g, !0, "keyboard")),
                g.el.on("mouseleave" + u, P(g, !1, "mouse")),
                g.el.on("focusout" + u, P(g, !1, "keyboard"))),
            g.nav.on("click" + u, "> div", w(g)),
            s ||
              g.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var $ = m.filter(":hidden");
          $.addClass(h);
          var Q = m.parents(":hidden");
          Q.addClass(h), S || B(d, y), $.removeClass(h), Q.removeClass(h);
        }
        function D(d) {
          var y = {};
          (y.crossOver = 0),
            (y.animation = d.el.attr("data-animation") || "slide"),
            y.animation === "outin" &&
              ((y.animation = "cross"), (y.crossOver = 0.5)),
            (y.easing = d.el.attr("data-easing") || "ease");
          var m = d.el.attr("data-duration");
          if (
            ((y.duration = m != null ? parseInt(m, 10) : 500),
            G(d.el.attr("data-infinite")) && (y.infinite = !0),
            G(d.el.attr("data-disable-swipe")) && (y.disableSwipe = !0),
            G(d.el.attr("data-hide-arrows"))
              ? (y.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            G(d.el.attr("data-autoplay")))
          ) {
            (y.autoplay = !0),
              (y.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (y.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var g = "mousedown" + u + " touchstart" + u;
            a ||
              d.el.off(g).one(g, function () {
                F(d);
              });
          }
          var H = d.right.width();
          (y.edge = H ? H + 40 : 100), (d.config = y);
        }
        function G(d) {
          return d === "1" || d === "true";
        }
        function P(d, y, m) {
          return function (g) {
            if (y) d.hasFocus[m] = y;
            else if (
              e.contains(d.el.get(0), g.relatedTarget) ||
              ((d.hasFocus[m] = y),
              (d.hasFocus.mouse && m === "keyboard") ||
                (d.hasFocus.keyboard && m === "mouse"))
            )
              return;
            y
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && F(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && re(d));
          };
        }
        function z(d, y) {
          return function (m) {
            switch (m.keyCode) {
              case ft.SPACE:
              case ft.ENTER:
                return y(d)(), m.preventDefault(), m.stopPropagation();
            }
          };
        }
        function X(d) {
          return function () {
            W(d, { index: d.index - 1, vector: -1 });
          };
        }
        function K(d) {
          return function () {
            W(d, { index: d.index + 1, vector: 1 });
          };
        }
        function J(d, y) {
          var m = null;
          y === d.slides.length && (O(), ee(d)),
            t.each(d.anchors, function (g, H) {
              e(g.els).each(function ($, Q) {
                e(Q).index() === y && (m = H);
              });
            }),
            m != null && W(d, { index: m, immediate: !0 });
        }
        function re(d) {
          F(d);
          var y = d.config,
            m = y.timerMax;
          (m && d.timerCount++ > m) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || (K(d)(), re(d));
            }, y.delay));
        }
        function F(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function w(d) {
          return function (y, m) {
            m = m || {};
            var g = d.config;
            if (a && y.type === "setting") {
              if (m.select === "prev") return X(d)();
              if (m.select === "next") return K(d)();
              if ((D(d), ee(d), m.select == null)) return;
              J(d, m.select);
              return;
            }
            if (y.type === "swipe")
              return g.disableSwipe || St.env("editor")
                ? void 0
                : m.direction === "left"
                ? K(d)()
                : m.direction === "right"
                ? X(d)()
                : void 0;
            if (d.nav.has(y.target).length) {
              var H = e(y.target).index();
              if (
                (y.type === "click" && W(d, { index: H }), y.type === "keydown")
              )
                switch (y.keyCode) {
                  case ft.ENTER:
                  case ft.SPACE: {
                    W(d, { index: H }), y.preventDefault();
                    break;
                  }
                  case ft.ARROW_LEFT:
                  case ft.ARROW_UP: {
                    q(d.nav, Math.max(H - 1, 0)), y.preventDefault();
                    break;
                  }
                  case ft.ARROW_RIGHT:
                  case ft.ARROW_DOWN: {
                    q(d.nav, Math.min(H + 1, d.pages)), y.preventDefault();
                    break;
                  }
                  case ft.HOME: {
                    q(d.nav, 0), y.preventDefault();
                    break;
                  }
                  case ft.END: {
                    q(d.nav, d.pages), y.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function q(d, y) {
          var m = d.children().eq(y).focus();
          d.children().not(m);
        }
        function W(d, y) {
          y = y || {};
          var m = d.config,
            g = d.anchors;
          d.previous = d.index;
          var H = y.index,
            $ = {};
          H < 0
            ? ((H = g.length - 1),
              m.infinite &&
                (($.x = -d.endX), ($.from = 0), ($.to = g[0].width)))
            : H >= g.length &&
              ((H = 0),
              m.infinite &&
                (($.x = g[g.length - 1].width),
                ($.from = -g[g.length - 1].x),
                ($.to = $.from - $.x))),
            (d.index = H);
          var Q = d.nav
            .children()
            .eq(H)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(Q)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            m.hideArrows &&
              (d.index === g.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var ue = d.offsetX || 0,
            _e = (d.offsetX = -g[d.index].x),
            oe = { x: _e, opacity: 1, visibility: "" },
            p = e(g[d.index].els),
            k = e(g[d.previous] && g[d.previous].els),
            Y = d.slides.not(p),
            V = m.animation,
            fe = m.easing,
            Me = Math.round(m.duration),
            We = y.vector || (d.index > d.previous ? 1 : -1),
            l = "opacity " + Me + "ms " + fe,
            E = "transform " + Me + "ms " + fe;
          if (
            (p.find(F_).removeAttr("tabindex"),
            p.removeAttr("aria-hidden"),
            p.find("*").removeAttr("aria-hidden"),
            Y.find(F_).attr("tabindex", "-1"),
            Y.attr("aria-hidden", "true"),
            Y.find("*").attr("aria-hidden", "true"),
            a || (p.each(v.intro), Y.each(v.outro)),
            y.immediate && !S)
          ) {
            n(p).set(oe), T();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${H + 1} of ${g.length}.`),
            V === "cross")
          ) {
            var I = Math.round(Me - Me * m.crossOver),
              x = Math.round(Me - I);
            (l = "opacity " + I + "ms " + fe),
              n(k).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(p)
                .set({ visibility: "", x: _e, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .wait(x)
                .then({ opacity: 1 })
                .then(T);
            return;
          }
          if (V === "fade") {
            n(k).set({ visibility: "" }).stop(),
              n(p)
                .set({ visibility: "", x: _e, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(T);
            return;
          }
          if (V === "over") {
            (oe = { x: d.endX }),
              n(k).set({ visibility: "" }).stop(),
              n(p)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: _e + g[d.index].width * We,
                })
                .add(E)
                .start({ x: _e })
                .then(T);
            return;
          }
          m.infinite && $.x
            ? (n(d.slides.not(k))
                .set({ visibility: "", x: $.x })
                .add(E)
                .start({ x: _e }),
              n(k).set({ visibility: "", x: $.from }).add(E).start({ x: $.to }),
              (d.shifted = k))
            : (m.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: ue }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(E).start({ x: _e }));
          function T() {
            (p = e(g[d.index].els)),
              (Y = d.slides.not(p)),
              V !== "slide" && (oe.visibility = "hidden"),
              n(Y).set(oe);
          }
        }
        function B(d, y) {
          var m = e.data(y, u);
          if (m) {
            if (M(m)) return ee(m);
            a && j(m) && ee(m);
          }
        }
        function ee(d) {
          var y = 1,
            m = 0,
            g = 0,
            H = 0,
            $ = d.maskWidth,
            Q = $ - d.config.edge;
          Q < 0 && (Q = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (_e, oe) {
              g - m > Q &&
                (y++,
                (m += $),
                (d.anchors[y - 1] = { els: [], x: g, width: 0 })),
                (H = e(oe).outerWidth(!0)),
                (g += H),
                (d.anchors[y - 1].width += H),
                d.anchors[y - 1].els.push(oe);
              var p = _e + 1 + " of " + d.slides.length;
              e(oe).attr("aria-label", p), e(oe).attr("role", "group");
            }),
            (d.endX = g),
            a && (d.pages = null),
            d.nav.length && d.pages !== y && ((d.pages = y), ne(d));
          var ue = d.index;
          ue >= y && (ue = y - 1), W(d, { immediate: !0, index: ue });
        }
        function ne(d) {
          var y = [],
            m,
            g = d.el.attr("data-nav-spacing");
          g && (g = parseFloat(g) + "px");
          for (var H = 0, $ = d.pages; H < $; H++)
            (m = e(f)),
              m
                .attr("aria-label", "Show slide " + (H + 1) + " of " + $)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && m.text(H + 1),
              g != null && m.css({ "margin-left": g, "margin-right": g }),
              y.push(m);
          d.nav.empty().append(y);
        }
        function M(d) {
          var y = d.mask.width();
          return d.maskWidth !== y ? ((d.maskWidth = y), !0) : !1;
        }
        function j(d) {
          var y = 0;
          return (
            d.slides.each(function (m, g) {
              y += e(g).outerWidth(!0);
            }),
            d.slidesWidth !== y ? ((d.slidesWidth = y), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Bs();
  Hs();
  zs();
  ln();
  A_();
  x_();
  C_();
  L_();
  P_();
  M_();
  G_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-2" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719333671805,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-4" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defb9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defb9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719333671805,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-6" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defbf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defbf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719333671805,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-8" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|b8644815-3d75-4950-ee15-63eadb6defc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719333671805,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-10" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|a99dcadd-efc1-27a5-9540-964778597eae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|a99dcadd-efc1-27a5-9540-964778597eae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719535154405,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-12" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|a0c09039-a0f6-8149-239e-c38f36e6d30a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|a0c09039-a0f6-8149-239e-c38f36e6d30a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1719535163103,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-14" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|484f1b71-48d5-9320-c061-3e46290a2888",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|484f1b71-48d5-9320-c061-3e46290a2888",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719535169342,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-16" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|6476af95-8918-f548-7731-b232a1a2479e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|6476af95-8918-f548-7731-b232a1a2479e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719535226813,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-18" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|6476af95-8918-f548-7731-b232a1a247a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|6476af95-8918-f548-7731-b232a1a247a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 210,
        direction: null,
        effectIn: true,
      },
      createdOn: 1719535235405,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-20" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|aec66a84-bc50-d7ed-6599-ab329425acb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|aec66a84-bc50-d7ed-6599-ab329425acb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719535251091,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-22" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|727b5a44-16e9-bd5f-8df8-a45c5ebbc29a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|727b5a44-16e9-bd5f-8df8-a45c5ebbc29a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719535281501,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-26" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|727b5a44-16e9-bd5f-8df8-a45c5ebbc29b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|727b5a44-16e9-bd5f-8df8-a45c5ebbc29b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719535308897,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-28" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|ca335b4f-e699-105e-50e0-d9facbba54c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|ca335b4f-e699-105e-50e0-d9facbba54c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719535320730,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-30" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|a130d559-3fe0-f7e1-22ab-3e5bc34f9e90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|a130d559-3fe0-f7e1-22ab-3e5bc34f9e90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719535330358,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-32" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|34adcb33-2c7f-058b-a746-30f71b90a92d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|34adcb33-2c7f-058b-a746-30f71b90a92d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 220,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719535337445,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-34" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|029b1a99-b793-bda0-06a4-c6a5fd55fac4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|029b1a99-b793-bda0-06a4-c6a5fd55fac4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 220,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1719535352831,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-36" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|71f8e090-0e3b-7938-249b-4327e2fab8d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|71f8e090-0e3b-7938-249b-4327e2fab8d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719535380419,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-38" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|82128697-6ae9-f7fd-5f92-9b6cb215ea30",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|82128697-6ae9-f7fd-5f92-9b6cb215ea30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719535399436,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-40" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|b03d3a2b-1617-bf5b-93db-7650ae715924",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|b03d3a2b-1617-bf5b-93db-7650ae715924",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1719535406902,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-66" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|7917baf7-31bf-0589-2b9c-db7debc6a819",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|7917baf7-31bf-0589-2b9c-db7debc6a819",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719535419655,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|1bcb22a3-a843-16b9-7f85-f9cb399aa4ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|1bcb22a3-a843-16b9-7f85-f9cb399aa4ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719535436103,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-56" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|9359913c-769a-da5c-12af-f404c4d7e454",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|9359913c-769a-da5c-12af-f404c4d7e454",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1719535451169,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-55" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|f287b89c-8ddc-95ca-b927-f490b44978b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|f287b89c-8ddc-95ca-b927-f490b44978b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1719535474042,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-65" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|9359913c-769a-da5c-12af-f404c4d7e458",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|9359913c-769a-da5c-12af-f404c4d7e458",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719535519085,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-58" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|7c95af8d-12e2-78a6-b581-490ba4c2c90a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|7c95af8d-12e2-78a6-b581-490ba4c2c90a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719535535585,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-54" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|027d61d1-074d-d771-2ed4-6ca40dfa8901",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|027d61d1-074d-d771-2ed4-6ca40dfa8901",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719879188980,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1602944944584,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1602945385371,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1602945521839,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1601273940562,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdeb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdeb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1601266917084,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1602945385345,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1601120080446,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbce03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1602945521840,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1601120080445,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "667d9eb4cbb54c211267fa63|4e71927b-73d6-b796-db9b-a363adfbcdf0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1601273940561,
    },
  },
  actionLists: {
    "a-14": {
      id: "a-14",
      title: "Close UI 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-14-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                value: "block",
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-14-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.close-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d1",
                  ],
                },
                yValue: -150,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.close-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d1",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".ci-created",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b41"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ci-created",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b41"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1602944948156,
    },
    "a-15": {
      id: "a-15",
      title: "Open UI 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".b-help-btn-2.open-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d2",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ci-created",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b41"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq-btn.faq",
                  selectorGuids: [
                    "8961f34c-958f-b8a2-4854-b73808353b54",
                    "8961f34c-958f-b8a2-4854-b73808353b5d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-help-btn",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.close-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d1",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".b-help-btn-2.close-menu",
                  selectorGuids: [
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d0",
                    "0657a1b6-cac8-b5fc-8e00-eae86b84d3d1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".ci-created",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b41"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1602944948156,
    },
    "a-3": {
      id: "a-3",
      title: "Close SideNav IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".help-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b3f"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".help-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b3f"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1602945526622,
    },
    "a-13": {
      id: "a-13",
      title: "Info Btn Hover OUT 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".c-help-text-2",
                  selectorGuids: ["0657a1b6-cac8-b5fc-8e00-eae86b84d3ce"],
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1601120083548,
    },
    "a-4": {
      id: "a-4",
      title: "Howto HIDE",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4f"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-faq",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".c-howto-close",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b42"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-howto-close",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b42"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".howto-close-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b57"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".c-faq",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b4f"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1601266601335,
    },
    "a-10": {
      id: "a-10",
      title: "Help Btn Hover OUT 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".c-help-text-2",
                  selectorGuids: ["0657a1b6-cac8-b5fc-8e00-eae86b84d3ce"],
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".help-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b3f"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1601120083548,
    },
    "a-5": {
      id: "a-5",
      title: "Close SideNav OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".help-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b3f"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1602945526622,
    },
    "a-11": {
      id: "a-11",
      title: "Help Btn Hover IN 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".c-help-text-2",
                  selectorGuids: ["0657a1b6-cac8-b5fc-8e00-eae86b84d3ce"],
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".help-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b3f"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".c-help-text-2",
                  selectorGuids: ["0657a1b6-cac8-b5fc-8e00-eae86b84d3ce"],
                },
                widthValue: 0,
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".help-icon",
                  selectorGuids: ["8961f34c-958f-b8a2-4854-b73808353b3f"],
                },
                zValue: -135,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1601120083548,
    },
    "a-12": {
      id: "a-12",
      title: "Info Btn Hover IN 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".c-help-text-2",
                  selectorGuids: ["0657a1b6-cac8-b5fc-8e00-eae86b84d3ce"],
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".c-help-text-2",
                  selectorGuids: ["0657a1b6-cac8-b5fc-8e00-eae86b84d3ce"],
                },
                widthValue: 0,
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1601120083548,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    pop: {
      id: "pop",
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 250,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outElastic",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
