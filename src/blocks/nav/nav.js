let $html = $('html'),
    $nav = $('.nav');

function fixedMenu() {
    $html.toggleClass('html_nav-scroll', ($(window).scrollTop() > 60) )
}
fixedMenu();
$(window).on('scroll', fixedMenu);

$('.nav__burger, .nav__hidden-close').on('click', () => {
    $html.toggleClass('html_nav-hidden-open');
    $html.toggleClass('html_overflow-hidden');
});

window.onload = () => {
    baron($('.nav__submenu'), {
        scroller: '.nav__scroll',
        container: '.nav__submenu-main',
        bar: '.nav__bar',
        barOnCls: 'nav__bar_state_on'
    });
};

$('.nav__item-box').on('mouseover mouseout', function() {
    $html.toggleClass('html_overflow-hidden');
    $nav.toggleClass('nav_active');
});

/*let count = Math.round($('.block20').outerWidth() / $('.block20__item').first().outerWidth()),
    k = 1,
    arr = [];

$('.nav .nav__item-box').each(function() {
    let $this = $(this);

    $this.find('.block20__item').each(function () {
        if (count / k === 1) {
            k = 0;
            arr.push($(this).outerHeight());
        }
        k++;
    });

    $this.find('.block11__item-inner').each(function(i) {
        $(this).outerHeight(arr[i]);
    });
});*/