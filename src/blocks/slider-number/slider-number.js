let carouseljQuery = jQuery('.slider-number__carousel').owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: 700,
    loop: true,
    nav: true,
    center: true,
    navClass: ['slider-number__prev arrow arrow arrow_prev', 'slider-number__next arrow arrow_next'],
    dots: false,
    responsive: {
        0: {
            startPosition: 1,
            items: 3
        },
        768: {
            startPosition: 1
        }
    }
});

carouseljQuery.on('translate.owl.carousel translated.owl.carousel', function () {
    $('.slider-number__box').toggleClass('slider-number__box_animated');
});