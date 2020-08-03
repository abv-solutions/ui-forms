!(function (e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function (e, t) {
    var n = [
        { question: 'Enter your first name' },
        { question: 'Enter your last name' },
        { question: 'Enter your email', pattern: /\S+@\S+\.\S+/ },
        { question: 'Create a password', type: 'password' },
      ],
      r = 100,
      o = 0,
      u = document.querySelector('#form-box'),
      a = document.querySelector('#next-btn'),
      i = document.querySelector('#prev-btn'),
      s = document.querySelector('#input-group'),
      c = document.querySelector('#input-field'),
      l = document.querySelector('#input-label'),
      d = document.querySelector('#input-progress'),
      f = document.querySelector('#progress-bar')
    function y() {
      ;(l.innerHTML = n[o].question),
        (c.type = n[o].type || 'text'),
        (c.value = n[o].answer || ''),
        c.focus(),
        (f.style.width = (100 * o) / n.length + '%'),
        (i.className = o ? 'fas fa-arrow-left' : 'fas fa-user'),
        (s.style.opacity = 1),
        (d.style.width = '100%'),
        (d.style.transition = '')
    }
    function p() {
      ;(s.style.opacity = 0), (d.style.width = 0), (d.style.transition = 'none')
    }
    function m(e, t) {
      u.style.transform = 'translate('.concat(e, 'px, ').concat(t, 'px)')
    }
    function v() {
      c.value.match(n[o].pattern || /.+/)
        ? ((u.className = ''),
          setTimeout(m, 0, 0, 10),
          setTimeout(m, r, 0, 0),
          (n[o].answer = c.value),
          o++,
          p(),
          n[o]
            ? y()
            : ((u.className = 'close'),
              (f.style.width = '100%'),
              (function () {
                console.log(n)
                var e = document.createElement('h1')
                ;(e.className = 'end'),
                  (e.textContent = 'Thanks '.concat(
                    n[0].answer,
                    '! You are registered and will get an email shortly.'
                  )),
                  setTimeout(function () {
                    u.parentElement.appendChild(e),
                      setTimeout(function () {
                        return (e.style.opacity = 1)
                      }, 50)
                  }, 1e3)
              })()))
        : (function () {
            u.className = 'error'
            for (var e = 0; e < 6; e++)
              setTimeout(m, r * e, 20 * ((e % 2) * 2 - 1), 0)
            setTimeout(m, 6 * r, 0, 0), c.focus()
          })()
    }
    document.addEventListener('DOMContentLoaded', y),
      a.addEventListener('click', v),
      i.addEventListener('click', function () {
        o > 0 &&
          ((u.className = ''),
          setTimeout(m, 0, 0, 10),
          setTimeout(m, r, 0, 0),
          p(),
          (o -= 1),
          y())
      }),
      c.addEventListener('keyup', function (e) {
        13 == e.keyCode && v()
      })
  },
])
