(function() {
    "use strict";
    $(function() {
        var t, i, e, n, o, s, a, r, h, u, c, l, d, g, x;
        return a = !/touch|tablet|mobile|phone|android|iphone|ipad|blackberry/i.test(window.navigator.userAgent),
        o = $(window),
        g = o.width(),
        d = o.height(),
        o.on("load resize", function() {
            return g = $(this).width(),
            d = $(this).height()
        }),
        jQuery(".js-backTop").on("click", function() {
            return jQuery("html, body").stop().animate({
                scrollTop: 0
            }, 1e3, "swing")
        }),
        $.fn.imgResize = function(t) {
            var i, e, n, o, s, a, r, h, u, c, l, d;
            return t = $.extend({
                area: $(this).parent(),
                type: "both"
            }, t),
            n = $(t.area).width(),
  console.log("n(w):",n),
            e = $(t.area).height(),
  console.log("e(h):",e),
            i = $(this),
  console.log("i:",i),
            h = i.width(),
  console.log("h(w):",h),
            s = i.height(),
  console.log("s(h):",s),
            x = $(".js-mainVisual-image>*").height(),
  console.log("x(h):",x),
            c = n / h,
            u = e / s,
            o = Math.max(c, u),
            d = Math.floor(h * o),
            l = Math.floor(s * o),
            r = Math.floor((l - e) / -2),
            a = Math.floor((d - n) / -2),
            "both" === t.type ? i.css({
                width: d,
                height: l,
                top: r,
                left: a
            }) : "horizontal" === t.type ? i.css({
                width: d,
                height: l,
                left: a
            }) : "vertical" === t.type ? i.css({
                width: d,
                height: l,
                top: r
            }) : void 0
        }
        ,
        t = $(".js-mainVisual"),
        i = $(".js-mainVisual-image"),
        t[0] && (r = function() {
            return $(".js-mainVisual-image > *").imgResize()
        }
        ,
        i.css({
            opacity: 0
        }),
        $("body").hasClass("p-index") ? (h = function() {
            return o.width() > 900 ? t.css({
                height: d - 30
            }) : t.css({
                height: d + 20
            })
        }
        ,
        h(),
        t.imagesLoaded(function() {
            return r()
        })) : $("body").hasClass("p-product-single") || t.imagesLoaded(function() {
            return r()
        }),
        t.imagesLoaded(function() {
            return i.css({
                opacity: 1
            }, 1e3)
        }),
        c = !1,
        o.on("resize", function() {
            return c !== !1 && clearTimeout(c),
            c = setTimeout(function() {
                return $("body").hasClass("p-index") ? (h(),
                r()) : $("body").hasClass("p-product-single") ? void 0 : r()
            }, 200)
        })),
        e = $(".js-navigation"),
        n = $(".js-navigationToggle"),
        u = e.height(),
        s = "",
        s = a ? "click" : "touchend",
        n.on(s, function() {
            return e.toggleClass("is-open")
        }),
        l = !1,
        o.on("resize", function() {
            return l !== !1 && clearTimeout(l),
            l = setTimeout(function() {
                return e.hasClass("is-open") ? e.removeClass("is-open") : void 0
            }, 200)
        })
    })
}
).call(this);
