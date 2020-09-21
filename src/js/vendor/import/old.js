/* Старые скрипты, потихоньку нужно разгребать */

/* functions-20190822155941.js */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n(e.jQuery)}(this,function(e){"use strict";function n(n){var t=this;if(1===arguments.length&&"function"==typeof n&&(n=[n]),!(n instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return n.forEach(function(n){"function"!=typeof n?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(t).forEach(function(t){return n.call(e(t))})}),this}function t(n){var t=e("<div></div>").css({width:"100%"});n.append(t);var o=n.width()-t.width();return t.remove(),o}function o(n,r){var i=n.getBoundingClientRect(),a=i.top,u=i.bottom,c=i.left,f=i.right,s=e.extend({tolerance:0,viewport:window},r),d=!1,l=s.viewport.jquery?s.viewport:e(s.viewport);l.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),l=e(window));var p=l.height(),w=l.width(),h=l[0].toString();if(l[0]!==window&&"[object Window]"!==h&&"[object DOMWindow]"!==h){var v=l[0].getBoundingClientRect();a-=v.top,u-=v.top,c-=v.left,f-=v.left,o.scrollBarWidth=o.scrollBarWidth||t(l),w-=o.scrollBarWidth}return s.tolerance=~~Math.round(parseFloat(s.tolerance)),s.tolerance<0&&(s.tolerance=p+s.tolerance),f<=0||c>=w?d:d=s.tolerance?a<=s.tolerance&&u>=s.tolerance:u>0&&a<=p}function r(n){if(n){var t=n.split(",");return 1===t.length&&isNaN(t[0])&&(t[1]=t[0],t[0]=void 0),{tolerance:t[0]?t[0].trim():void 0,viewport:t[1]?e(t[1].trim()):void 0}}return{}}e=e&&e.hasOwnProperty("default")?e.default:e,/**
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
    e.extend(e.expr.pseudos||e.expr[":"],{"in-viewport":e.expr.createPseudo?e.expr.createPseudo(function(e){return function(n){return o(n,r(e))}}):function(e,n,t){return o(e,r(t[3]))}}),e.fn.isInViewport=function(e){return this.filter(function(n,t){return o(t,e)})},e.fn.run=n});
//# sourceMappingURL=isInViewport.min.js.map



var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null;
if (isMobile) {
    eventpress = 'touchstart';
    eventunpress = 'touchend'
    eventmove = 'touchmove'
} else {
    eventpress = 'mousedown';
    eventunpress = 'mouseup'
    eventmove = 'mousemove'
}
var vkoef = 16 / 9;


function toggleMenu() {
    if(jQuery('.global-menu').hasClass('open')) {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])

        jQuery('html,body').removeClass('freezePage');
    } else {
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
            ];
            var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
            html.data('scroll-position', scrollPosition);
            html.data('previous-overflow', html.css('overflow'));
            html.css('overflow', 'hidden');
            window.scrollTo(scrollPosition[0], scrollPosition[1]);

            jQuery('html,body').addClass('freezePage');
    }

    jQuery('.global-menu').toggleClass('open');
}

function toggleSocialFixed() {
    jQuery('.social-fixed').toggleClass('social-fixed--open');
}

function toggleModal(a, $this, formName) {
    if (event) event.preventDefault();

    jQuery('.modal--' + a + ' input[name="related_text"]').remove();
    jQuery('.wpcf7-response-output').css('display', 'none').html('');

    if ($this) {
        $this = jQuery($this);

        if ($this.parents('.block-createschema').length) {
            var text = jQuery(jQuery(jQuery($this).parents('.block-createschema')[0]).find('.row > *:first-child')[0]).text();
        } else if($this.parents('.action-block').length) {
            var text = jQuery(jQuery(jQuery($this).parents('.action-block')[0]).find('.action-block__text')[0]).text();
        }

        jQuery('.modal--' + a + ' form.wpcf7-form').prepend('<input type="hidden" name="related_text" value="' + (text ? text.trim() : formName.trim()) + '"/>');
    } else if (formName) {
        jQuery('.modal--' + a + ' form.wpcf7-form').prepend('<input type="hidden" name="related_text" value="' + (formName.trim()) + '"/>');
    }
    
    if(jQuery('.modal--' + a).hasClass('modal--open')) {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    } else {
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
            ];
            var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
            html.data('scroll-position', scrollPosition);
            html.data('previous-overflow', html.css('overflow'));
            html.css('overflow', 'hidden');
            window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }

    jQuery('.modal--' + a).toggleClass('modal--open');
}

(function ($) {
    jQuery('.wpcf7-submit[type="submit"]').on('click', function() {
        var t$ = $('.wpcf7-submit[type="submit"]');
        setTimeout(function() {
            t$.prop('disabled', true);
        });
    })
    
    $('.wpcf7').on('wpcf7submit', function(e) {
        $('.wpcf7-submit[type="submit"]').prop('disabled', false);
    });

    $('.wpcf7').on('wpcf7mailsent', function(e) {
        var modal = $(this).parents('.modal');
        var ctp = $(this).parents('.connect-to-platform');

        if (modal) {
            modal.addClass('modal--thanks');
        }
    });


    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 65
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    /*$(document).ready(function () {
        new WOW().init();
    });*/

    $(window).resize(function () {
        $("#top-block.home-slider").height($("#content-size").height());
    });
    $(window).resize();

    $(".home-sitemap-bookmark").on("click", function () {
        $(".home-sitemap-bookmark").removeClass("active");
        $(this).addClass("active");
        $(".home-sitemap-items").removeClass("active");
        $(".home-sitemap-items").eq($(this).index()).addClass("active");
    });


    $(document).on('mouseenter', '.global-menu .menu > li', function (e) {
        var color = $(this).find('a').attr('rel');
        if (color) {
            $('.global-menu').css('background-color', '#' + color);
        } else {
            $('.global-menu').css('background-color', '');
        }
    })

    $(document).on('mouseleave', '.global-menu .menu > li', function (e) {
        $('.global-menu').css('background-color', '');
    });

    // $(document).on('click', '', function (e) {
    //     e.preventDefault();
    //     var t$ = $(this).parents('.menu-item-has-children');
    //     if (t$.hasClass('open')) {
    //         t$.siblings().removeClass('open');
    //         t$.removeClass('open');
    //         $('.global-menu').css('background-color', '');
    //     } else {
    //         t$.siblings().removeClass('open');
    //         t$.addClass('open');

    //         if (t$.hasClass('blue')) {
    //             $('.global-menu').css('background-color', '#2b5287');
    //         } else if(t$.hasClass('yellow')) {
    //             $('.global-menu').css('background-color', '#e6d017');
    //         } else if(t$.hasClass('green')) {
    //             $('.global-menu').css('background-color', '#7bb745');
    //         } else if(t$.hasClass('violet')) {
    //             $('.global-menu').css('background-color', '#9e3589');
    //         } else {
    //             $('.global-menu').css('background-color', '');
    //         }
    //     }
    // });

    // $('.global-menu__content').on('mousewheel', function (e, delta) {
    //     $(this).finish();
    //     $(this).animate({
    //         scrollLeft: this.scrollLeft - e.originalEvent.wheelDelta
    //     }, 60);
    //     e.preventDefault();
    // });




    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    var packages_sum = [3000000, 150000, 250000, 100000];
    $(window).scroll(function () {

        $('.counterAnimate:in-viewport:not(.animated)').each(function() {
            var $this = $(this);
            $this.addClass('animated');
            $this.prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });


        st = $(window).scrollTop();
        if (st > 0) {
            if (!$("header").hasClass("scroll")) {
                $("header").addClass("scroll")
            }
        } else {
            $("header").removeClass("scroll")
        }
        for (var i = 0; i < $(".scroll-hidden").length; i++) {
            // console.log($(".page-block").eq(i).offset().top - $(window).scrollTop());
            if ($(".scroll-hidden").eq(i).offset().top - $(window).scrollTop() < $("#top-block").height() - 300) {
                $(".scroll-hidden").eq(i).addClass('show');
            }
        }
        for (var i = 0; i < $(".packages-item").length; i++) {
            // console.log($(".page-block").eq(i).offset().top - $(window).scrollTop());
            if ($(".packages-item").eq(i).offset().top - $(window).scrollTop() < $("#top-block").height() - 300) {
                $(".packages-item").eq(i).find(".packages-item-price span").animateNumber({
                    number: packages_sum[i],
                    numberStep: comma_separator_number_step
                }, 1000);
            }
        }
    });
    $(window).on("mousewheel", function (objEvent, intDelta) {
        st = $(window).scrollTop();
        if (st > 0) {
            if (!$("header").hasClass("scroll")) {
                $("header").addClass("scroll")
            }
        } else {
            $("header").removeClass("scroll")
        }
    });

}(jQuery));