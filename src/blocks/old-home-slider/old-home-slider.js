var carousel = $('.home-slider-tmp__carousel');
var currentAnimName = 'mountain';
var frameUp = document.getElementById("frameUp");
var frameDown = document.getElementById("frameDown");
var circle = document.getElementById("animateSvg");
var dd = document.querySelector('.home-slider-animation__block');

function redrawClipPath() {
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_safari) {
        dd.style.clipPath = "none";
        dd.offsetWidth; //force a style recalculation
        //dd.style.clipPath = "url(#animateSvg)";
        dd.style.clipPath = "url(#svgPath)";
    }
}

carousel.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: 700,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    dotsData: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    dotsSpeed: 700
});

carousel.on('changed.owl.carousel', function (event) {
    console.log('1-', event);
    var current = event.item.index;
    var animName = $(event.target).find(".owl-item").eq(current).find('.home-slider-tmp__item').attr('data-anim-name');
    if (animName) anim(animName);
});

function anim(name) {
    let tl = new TimelineMax({
        onUpdate: redrawClipPath
    });

    /*let tl = new TimelineMax();*/

    tl.to(frameUp, 0.3, {
        morphSVG: "#frameUp_center"
    }, 0)
    .to(frameDown, 0.3, {
        morphSVG: "#frameDown_center"
    }, 0)
    .to(frameUp, 0.3, {
        morphSVG: frameUp
    }, 0.4)
    .to(frameDown, 0.3, {
        morphSVG: frameDown
    }, 0.4)
    // .to(circle, 0.35, {morphSVG: ''})
    // .to(circle, 0.35, {
    // morphSVG: "#" + currentAnimName + '_center'
    // }, 0)
    .to(circle, 0.35, {
        morphSVG: '#circle_center'
    }, 0)
    .to(circle, 0.35, {
        morphSVG: "#" + name
    }, 0.351);
    currentAnimName = name;
    return tl;
}

var disableDots = false;
carousel.find('.owl-dot').click(function () {
    // if (!disableDots) {
    carousel.trigger('to.owl.carousel', [jQuery(this).index(), 1000]);
    // }
    disableDots = true;
    carousel.trigger('stop.owl.autoplay');
});
carousel.on('translated.owl.carousel', function (event) {
    disableDots = false;
    carousel.trigger('play.owl.autoplay');
});